# Rifflebound repository guide

## Repository scope

Rifflebound（牌潮奇旅）是一个中文浏览器扑克 Roguelike。核心流程包含三轮盲注、牌型计分、商店、六种奇牌、动画、Web Audio 音频与本地启发式出牌助手。

这是基于 MIT 上游项目的独立改编版。不得删除 `LICENSE` 中的原版权声明或 `THIRD_PARTY_NOTICES.md` 中的音乐署名。

## Structure

- `docs/`：当前产品需求和设计基线；设计或行为变化应同步更新。
- `rifflebound-app/`：Vue 应用。
  - `src/App.vue`：主画布和跨组件动画编排。
  - `src/stores/game.js`：Pinia 游戏状态机。
  - `src/utils/poker.js`：牌组、九种牌型和计分工具。
  - `src/utils/ai.js`：本地组合枚举和商店建议。
  - `src/utils/audio.js`：Web Audio 音乐与音效。
  - `test/`：Node.js 内置测试。

## Commands

所有 npm 命令在 `rifflebound-app/` 中执行。需要 Node.js 22 或 Node.js 20.19+。

```bash
cd rifflebound-app
npm ci
npm test
npm run build
npm run dev
```

## Invariants

1. `main-area` 使用 `230px 1fr 280px`；不要增加右侧 padding。
2. 牌堆以 `absolute` 定位在出牌区内，不能改为 `fixed`。
3. 第三关通关直接进入 `won`，不再打开商店。
4. `出牌 (X)` 显示选中数；`弃牌 (X)` 显示剩余弃牌次数。
5. 中文使用 Inter / PingFang SC，数字大屏使用 VT323，英文装饰使用 Press Start 2P。
6. store action 不能用包含 `!animatingPlay` 的 UI getter 做内部业务校验。
7. 设置持久化键保持为 `rifflebound.settings`。

提交前至少运行 `npm test`、`npm run build` 和 `git diff --check`。
