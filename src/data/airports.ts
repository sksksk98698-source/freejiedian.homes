export interface AirportBrand {
  rank: number;
  name: string;
  slug: string;
  affUrl: string;
  coupon: string | null;
  price: string;
  lineType: string;
  protocol: string;
  aiSupport: string;
  streamSupport: string;
  summary: string;
  detailText: string;
  hasSpeedtest: boolean;
  speedtestImages: string[];
  tags: string[];
  isTop10: boolean;
  isTopChoice: boolean;
}

import rawBrands from './airports.json';
export const airportsData: AirportBrand[] = rawBrands as AirportBrand[];

export const top10Airports = airportsData.filter((a) => a.isTop10);
export const speedtestedAirports = airportsData.filter((a) => a.hasSpeedtest);
export const topChoice = airportsData[0]; // 光速云

export const siteBrand = {
  name: '免费节点',
  enName: 'FreeJieDian',
  domain: 'freejiedian.homes',
  url: 'https://freejiedian.homes',
  slogan: '2026 全球高速节点与优质机场实测导航平台',
  description: '汇聚42家主流机场深度测评、晚高峰实测大图、AI与4K流媒体解锁报告及跨平台代理客户端下载指南。严格去伪存真，提供客观数据驱动的出海网络推荐。',
  keywords: '免费节点,机场推荐,节点测速,IEPL专线,IPLC专线,4K流媒体解锁,ChatGPT加速,Clash下载,Shadowrocket订阅,光速云',
};
