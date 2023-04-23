# [Javascript] 冒泡和捕获

当一个事件发生时 —— 发生该事件的嵌套最深的元素被标记为“目标元素”（

`event.target`

）。

*   然后，事件从文档根节点向下移动到 `event.target`，并在途中调用分配了 `addEventListener(..., true)` 的处理程序（`true` 是 `{capture: true}` 的一个简写形式）。

*   然后，在目标元素自身上调用处理程序。

*   然后，事件从 `event.target` 向上移动到根，调用使用 `on<event>` 和没有第三个参数的，或者第三个参数为 `false/{capture:false}` 的 `addEventListener` 分配的处理程序。

每个处理程序都可以访问&#x20;

`event`

&#x20;对象的属性：

*   `event.target` —— 引发事件的层级最深的元素。

*   `event.currentTarget`（=`this`）—— 处理事件的当前元素（具有处理程序的元素）

*   `event.eventPhase` —— 当前阶段（capturing=1，target=2，bubbling=3）。

任何事件处理程序都可以通过调用&#x20;

`event.stopPropagation()`

&#x20;来停止事件，但不建议这样做，因为我们不确定是否确实不需要冒泡上来的事件，也许是用于完全不同的事情。

捕获阶段很少使用，通常我们会在冒泡时处理事件。这背后有一个逻辑。

在现实世界中，当事故发生时，当地警方会首先做出反应。他们最了解发生这件事的地方。然后，如果需要，上级主管部门再进行处理。

事件处理程序也是如此。在特定元素上设置处理程序的代码，了解有关该元素最详尽的信息。特定于&#x20;

`<td>`

&#x20;的处理程序可能恰好适合于该&#x20;

`<td>`

，这个处理程序知道关于该元素的所有信息。所以该处理程序应该首先获得机会。然后，它的直接父元素也了解相关上下文，但了解的内容会少一些，以此类推，直到处理一般性概念并最后运行的最顶部的元素为止。

![元素捕获和冒泡.png](<https://cdn.nlark.com/yuque/0/2020/png/133147/1593252823286-92018656-f8d4-4b0b-8021-cfe2614d749c.png#align=left\&display=inline\&height=1286\&margin=\[object Object]\&name=元素捕获和冒泡.png\&originHeight=1286\&originWidth=1344\&size=182930\&status=done\&style=none\&width=1344> "元素捕获和冒泡.png")
