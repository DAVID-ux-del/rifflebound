# Rifflebound · 牌潮奇旅

一款可直接在浏览器游玩的中文扑克 Roguelike：在三轮盲注中组合牌型、购买奇牌，并用本地启发式助手寻找当前最高分出牌。

Rifflebound 是基于 `realruian/balatro-teaching` 的独立品牌改编版，而非从零原创。上游代码依据 MIT License 使用并保留原版权声明；音乐署名见 [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md)。

## 功能

- 三轮递增盲注、商店与六种奇牌效果
- 九种扑克牌型、弃牌和完整计分反馈
- 本地组合枚举助手，不上传手牌或游戏状态
- Web Audio 音效、可调音乐/音效音量和动画速度
- GitHub Pages 自动构建与部署

## 技术栈

Vue 3、Pinia、GSAP、Vite 8。运行环境为 Node.js 22 或 Node.js 20.19+。

## 本地运行

```bash
cd rifflebound-app
npm ci
npm run dev
```

浏览器默认访问 `http://localhost:5173`。

```bash
npm test        # Node.js 内置测试
npm run build   # 生产构建，产物位于 dist/
npm run preview # 本地预览生产构建
```

## 项目结构

```text
.
├── docs/                 # 产品需求与视觉设计文档
├── rifflebound-app/      # Vue 游戏应用
│   ├── public/           # 已署名的音乐资源
│   ├── src/components/   # 游戏界面组件
│   ├── src/stores/       # Pinia 游戏状态机
│   └── src/utils/        # 牌型、助手与音频模块
├── LICENSE               # 上游 MIT 许可证及原版权声明
└── THIRD_PARTY_NOTICES.md
```

## 隐私与授权

游戏逻辑与出牌建议均在浏览器本地执行；偏好设置只写入 `localStorage` 的 `rifflebound.settings`。应用会从 Google Fonts 加载字体，部署方可按需要改为自托管。

代码按 MIT License 发布。`Backbay Lounge` 音乐按 CC BY 4.0 使用，详情见第三方声明。
