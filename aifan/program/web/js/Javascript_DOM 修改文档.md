# [Javascript] DOM 修改文档

*   创建新节点的方法：

    *   `document.createElement(tag)` — 用给定的标签创建一个元素节点，

    *   `document.createTextNode(value)` — 创建一个文本节点（很少使用），

    *   `elem.cloneNode(deep)` — 克隆元素，如果 `deep==true` 则与其后代一起克隆。

*   插入和移除节点的方法：

    *   `node.append(...nodes or strings)` — 在 `node` 末尾插入，

    *   `node.prepend(...nodes or strings)` — 在 `node` 开头插入，

    *   `node.before(...nodes or strings)` — 在 `node` 之前插入，

    *   `node.after(...nodes or strings)` — 在 `node` 之后插入，

    *   `node.replaceWith(...nodes or strings)` — 替换 `node`。

    *   `node.remove()` — 移除 `node`。

*   文本字符串被“作为文本”插入。

*   这里还有“旧式”的方法：

    *   `parent.appendChild(node)`

    *   `parent.insertBefore(node, nextSibling)`

    *   `parent.removeChild(node)`

    *   `parent.replaceChild(newElem, node)`

*   这些方法都返回 `node`。

*   在`html`中给定一些 HTML，`elem.insertAdjacentHTML(where, html)`会根据`where`的值来插入它：

    *   `"beforebegin"` — 将 `html` 插入到 `elem` 前面，

    *   `"afterbegin"` — 将 `html` 插入到 `elem` 的开头，

    *   `"beforeend"` — 将 `html` 插入到 `elem` 的末尾，

    *   `"afterend"` — 将 `html` 插入到 `elem` 后面。

另外，还有类似的方法，

`elem.insertAdjacentText`

&#x20;和&#x20;

`elem.insertAdjacentElement`

，它们会插入文本字符串和元素，但很少使用。

*   要在页面加载完成之前将 HTML 附加到页面：

    *   `document.write(html)`

*   页面加载完成后，这样的调用将会擦除文档。多见于旧脚本。
