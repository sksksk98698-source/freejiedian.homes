export interface ClientItem {
  name: string;
  platform: 'Windows' | 'Android' | 'iOS' | 'macOS';
  kernel: string;
  features: string;
  downloadUrl: string;
  source: string;
  recommended: boolean;
  tag: string;
}

export const clientsData: ClientItem[] = [
  // Windows
  {
    name: 'Clash Verge Rev',
    platform: 'Windows',
    kernel: 'Mihomo 内核',
    features: '现代界面设计、内置规则分流、TUN 虚拟网卡模式，全面支持 VLESS、Shadowsocks 等协议，新手与进阶首选。',
    downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
    source: 'GitHub Official',
    recommended: true,
    tag: '首选推荐',
  },
  {
    name: 'v2rayN',
    platform: 'Windows',
    kernel: 'Xray / sing-box / V2Ray',
    features: '老牌经典多协议支持，支持自定义路由分流与高度自定义参数调节，极低资源占用。',
    downloadUrl: 'https://github.com/2dust/v2rayN/releases',
    source: 'GitHub Official',
    recommended: true,
    tag: '多协议经典',
  },
  {
    name: 'FlClash',
    platform: 'Windows',
    kernel: 'Mihomo 内核',
    features: '基于 Flutter 构建的现代化跨平台客户端，界面极简优雅，内存占用极低。',
    downloadUrl: 'https://github.com/chen08209/FlClash/releases',
    source: 'GitHub Official',
    recommended: false,
    tag: '轻量优雅',
  },
  {
    name: 'Hiddify',
    platform: 'Windows',
    kernel: 'sing-box 内核',
    features: '开箱即用支持多协议，一键自动选择最优节点，全中文界面，新手友好度极高。',
    downloadUrl: 'https://github.com/hiddify/hiddify-next/releases',
    source: 'GitHub Official',
    recommended: false,
    tag: '开箱即用',
  },

  // Android
  {
    name: 'v2rayNG',
    platform: 'Android',
    kernel: 'Xray 核心',
    features: '安卓平台最广泛使用的代理工具，支持扫码导入订阅与分应用代理，省电稳定。',
    downloadUrl: 'https://github.com/2dust/v2rayNG/releases',
    source: 'GitHub Official',
    recommended: true,
    tag: '安卓装机必备',
  },
  {
    name: 'FlClash (Android)',
    platform: 'Android',
    kernel: 'Mihomo 内核',
    features: '视觉与桌面版高度统一，Material You 设计风格，适合喜爱现代 UI 的用户。',
    downloadUrl: 'https://github.com/chen08209/FlClash/releases',
    source: 'GitHub Official',
    recommended: true,
    tag: '颜值担当',
  },
  {
    name: 'Clash Meta for Android',
    platform: 'Android',
    kernel: 'Mihomo 核心',
    features: '专为 Clash 订阅定制，支持高级策略组与自定义规则覆写。',
    downloadUrl: 'https://github.com/MetaCubeX/ClashMetaForAndroid/releases',
    source: 'GitHub Official',
    recommended: false,
    tag: '规则分流',
  },

  // iOS
  {
    name: 'Shadowrocket (小火箭)',
    platform: 'iOS',
    kernel: '自研轻量核心',
    features: 'iOS 平台综合体验第一梯队，扫码即用，完美兼容各类订阅格式，支持按域名/IP 精细化分流。',
    downloadUrl: 'https://apps.apple.com/app/shadowrocket/id932747118',
    source: 'App Store (美区/港区)',
    recommended: true,
    tag: 'iOS 必备神器',
  },
  {
    name: 'Stash',
    platform: 'iOS',
    kernel: 'Clash 规则引擎',
    features: 'iOS 端最优秀的 Clash 规则代理工具，支持策略组、按需连接与覆写脚本。',
    downloadUrl: 'https://apps.apple.com/app/stash-rule-based-proxy/id1596063349',
    source: 'App Store',
    recommended: true,
    tag: 'Clash 最佳还原',
  },
  {
    name: 'Quantumult X (圈 X)',
    platform: 'iOS',
    kernel: '高性能自研核心',
    features: '极客用户心头好，支持复杂重写、脚本任务与本地策略调度，性能强悍。',
    downloadUrl: 'https://apps.apple.com/app/quantumult-x/id1453926578',
    source: 'App Store',
    recommended: false,
    tag: '极客进阶',
  },

  // macOS
  {
    name: 'Clash Verge Rev (macOS)',
    platform: 'macOS',
    kernel: 'Mihomo 内核',
    features: '完美原生适配 Apple Silicon (M1/M2/M3/M4) 与 Intel 架构，支持系统级代理与 TUN 模式。',
    downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
    source: 'GitHub Official',
    recommended: true,
    tag: 'Mac 首选推荐',
  },
  {
    name: 'Surge for Mac',
    platform: 'macOS',
    kernel: 'Surge 顶级核心',
    features: '专业级网络调试与代理利器，业界性能标杆，企业级开发者与出海团队标配。',
    downloadUrl: 'https://nssurge.com/mac',
    source: 'Official Site',
    recommended: false,
    tag: '专业旗舰',
  },
];
