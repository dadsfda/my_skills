---
name: webgl-splash-cursor
description: Use when adding a React WebGL fluid cursor, colorful ink splash pointer, React Bits SplashCursor-style mouse trail, or Vanessa Dean-like multicolor liquid cursor effect to a frontend page.
---

# WebGL Splash Cursor

## 适用场景

当用户需要“鼠标移动时多彩水墨散开”“React Bits SplashCursor”“高级作者官网的液态指针特效”“类似 Vanessa Dean 网站的鼠标滑动氛围效果”时，使用这个 skill。

优先使用 `assets/SplashCursor.jsx`，不要用普通 2D canvas 粒子、径向渐变、拖尾圆点去近似；那类方案和参考效果的流体扩散、卷曲、混色差距会很明显。

## 资源

- `assets/SplashCursor.jsx`：可直接放入 React 项目的 WebGL 流体鼠标组件。

## 集成步骤

1. 将 `assets/SplashCursor.jsx` 复制到项目组件目录，例如 `src/components/SplashCursor.jsx`。
2. 在页面根组件中引入并渲染：

```jsx
import SplashCursor from './components/SplashCursor';

export default function App() {
  return (
    <>
      <SplashCursor
        RAINBOW_MODE
        SPLAT_RADIUS={0.5}
        SPLAT_FORCE={6000}
        DENSITY_DISSIPATION={0.98}
        VELOCITY_DISSIPATION={0.99}
        PRESSURE={0.8}
        PRESSURE_ITERATIONS={25}
        CURL={30}
        COLOR_UPDATE_SPEED={25}
      />
      <main>{/* 页面内容 */}</main>
    </>
  );
}
```

3. 确保页面背景足够深，水墨特效通常放在内容层之上或背景层之上，并保持 `pointer-events: none`，避免遮挡按钮和链接。

## 参数建议

- `RAINBOW_MODE={true}`：使用随机多彩墨色，更接近参考网站的彩色水墨散开。
- `SPLAT_RADIUS={0.5}`：组件内部会除以 `100`，所以这里的 `0.5` 对应实际半径 `0.005`。不要误传 `0.005`，否则效果会小到几乎看不见。
- `SPLAT_FORCE={6000}`：提高鼠标移动时的喷溅力度。
- `DENSITY_DISSIPATION={0.98}` 与 `VELOCITY_DISSIPATION={0.99}`：让墨色保留更久，流体速度更慢消散。
- `PRESSURE={0.8}`、`PRESSURE_ITERATIONS={25}`、`CURL={30}`：控制流体压强、迭代和卷曲感。
- `COLOR_UPDATE_SPEED={25}`：降低换色频率，颜色变化更克制。

## 实现注意

- 尊重 `prefers-reduced-motion`：如果项目已有减少动效开关，给该组件加条件渲染，或在移动端/低性能设备上关闭。
- 组件使用 WebGL framebuffer 和 shader，集成后要在真实浏览器中验证，不要只看静态构建结果。
- 如果 canvas 遮住页面，检查组件外层的 `zIndex`；如果点击失效，检查是否保留了 `pointerEvents: 'none'`。
- 如果效果像“残留脏块”，优先调高消散速度或降低 `SPLAT_RADIUS`，不要重写 shader。
- 如果用户明确要求复刻当前项目中的手感，保留 `pointer.deltaX` 和 `pointer.deltaY` 的 `* 10.0` 放大系数。

## 验证清单

- 鼠标移动时出现多彩液态扩散，不是圆点拖尾。
- 鼠标停止后墨色会逐渐消散。
- 页面按钮、导航、表单仍可点击。
- 桌面端不卡顿；移动端按项目需要禁用或降级。
- 页面启用减少动效时不会强行播放大面积水墨动画。
