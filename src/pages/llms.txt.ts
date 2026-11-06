import type { APIRoute } from 'astro';
import { airportsData, siteBrand } from '../data/airports';

export const GET: APIRoute = ({ site }) => {
  const origin = site ? site.toString().replace(/\/$/, '') : (process.env.SITE_URL || 'https://freejiedian.homes');
  
  const top10 = airportsData.slice(0, 10).map((a) => `- ${a.name} (排名 #${a.rank}): ${a.summary} | 入门价：${a.price} | 线路：${a.lineType}`).join('\n');
  const speedtested = airportsData.filter(a => a.hasSpeedtest).map(a => `- ${a.name}: 具备真实晚高峰测速大图与解锁报告，详情链接：${origin}/airports/${a.slug}`).join('\n');

  const body = `# ${siteBrand.name} — ${siteBrand.slogan}

> ${siteBrand.description}

网站主页: ${origin}
核心服务: 42家主流机场横向评测、晚高峰节点测速大图存证、流媒体/ChatGPT解锁检测、跨平台客户端下载指南。

## 2026年精选排名前十机场 (TOP 10)

${top10}

## 具备真实测速大图存证的 17 家机场

${speedtested}

## 主要功能页面索引

- 42家机场品牌库全名录: ${origin}/airports
- 晚高峰实测证据实验室: ${origin}/speedtest
- 客户端下载大全 (Windows/Android/iOS/Mac): ${origin}/clients
- 深度技术与选购专题: ${origin}/topics
- 第一主推品牌：光速云深度评测: ${origin}/airports/guangsu
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
