# [Javascript] 浏览器事件

**事件**

&#x20;是某事发生的信号。所有的 DOM 节点都生成这样的信号（但事件不仅限于 DOM）。
这是最有用的 DOM 事件的列表，你可以浏览一下：

**鼠标事件：**

*   `click` —— 当鼠标点击一个元素时（触摸屏设备会在点击时生成）。

*   `contextmenu` —— 当鼠标右键点击一个元素时。

*   `mouseover` / `mouseout` —— 当鼠标指针移入/离开一个元素时。

*   `mousedown` / `mouseup` —— 当在元素上按下/释放鼠标按钮时。

*   `mousemove` —— 当鼠标移动时。

**表单（form）元素事件**

：

*   `submit` —— 当访问者提交了一个 `<form>` 时。

*   `focus` —— 当访问者聚焦于一个元素时，例如聚焦于一个 `<input>`。

**键盘事件**

：

*   `keydown` 和 `keyup` —— 当访问者按下然后松开按键时。

**Document 事件**

：

*   `DOMContentLoaded` —— 当 HTML 的加载和处理均完成，DOM 被完全构建完成时。

**CSS 事件**

：

*   `transitionend` —— 当一个 CSS 动画完成时。

还有很多其他事件。我们将在下一章中详细介绍具体事件。
