(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{628:function(e,t,a){"use strict";a.r(t);var r=a(45),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_12-2-flutter-web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-flutter-web"}},[e._v("#")]),e._v(" 12.2 Flutter Web")]),e._v(" "),a("h2",{attrs:{id:"_12-2-1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-1-简介"}},[e._v("#")]),e._v(" 12.2.1 简介")]),e._v(" "),a("p",[e._v("Flutter 目前已经支持macOS、Windows、Linux、Android、iOS、Web等多个平台这些平台中除了Web平台会比较特殊一些，因为除了它其余的“平台”都是操作系统，而 Web 并不是操作系统，Web应用程序是运行在浏览器中的，而浏览器是运行在操作系统之上，因此 “平台”一词，指的是某种“运行环境”，并不等同于“操作系统”，浏览器和操作系统都是应用程序运行的环境而已。")]),e._v(" "),a("p",[e._v("传统的 Web 应用都是基于 Javascript+html+css 开发的，运行在浏览器之上，因此天然具备跨平台优势，而 Flutter 的目标是高性能的跨端 UI 框架，所以支持 Web 平台将有助于 Flutter 技术扩大应用场景，实现 write once, run anywhere。为此，Flutter 团队从 1.0 开始一直在尝试让 Flutter 支持 Web 平台，第一个支持 Web 平台的稳定版是 2.0 ，在 2.0 之后 Flutter 对 Web 平台的支持也一直在优化，现在也有一些公司将Flutter应用应用到生产环境。")]),e._v(" "),a("h2",{attrs:{id:"_12-2-2-web-应用的特殊性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-2-web-应用的特殊性"}},[e._v("#")]),e._v(" 12.2.2 Web 应用的特殊性")]),e._v(" "),a("p",[e._v("因为 Web 应用是在浏览器中运行的，而浏览器是运行在操作系统之上，因此Web应用不能直接调用操作系统 API， Web 应用能调用哪些操作系统能力取决于它的宿主-浏览器是否暴露相关的操作系统 API。而浏览器出于安全考虑，会提供一个沙箱环境——开放一些安全、可控的系统能力，同时限制一部分敏感的操作，具体表现在：")]),e._v(" "),a("ol",[a("li",[e._v("浏览器允许Web应用访问网络，但有严格的“同源策略”限制。")]),e._v(" "),a("li",[e._v("浏览器允许 JavaScript 读取用户手动选择本地文件（文件上传场景），但不允许 JavaScript 主动访问本地文件系统，同时在任何情况下，浏览器都不允许 JavaScript 直接往本地文件系统写文件，因此 "),a("code",[e._v("dart:io")]),e._v(" 包在 Web 应用是不能用的。")]),e._v(" "),a("li",[e._v("浏览器对Web应用访问系统硬件权限有自身策略，比如访问 wifi、gps、摄像头等。")])]),e._v(" "),a("p",[e._v("因此，如果用 Flutter 开发 Web 应用，以上这些限制将会生效，所以会出现和其它平台不一致的情况，常见的两个场景是：不能在 Web 应用中发起非同源请求、不能在Web应用中直接读取文件。")]),e._v(" "),a("blockquote",[a("p",[e._v("“同源策略” 是浏览器处于安全考虑对 Web 应用访问网络的一套限制策略， “同源”表示一个网页中 JavaScript 发起网络请求的地址和当前网页地址中协议、域名、端口全部相同，如果有其中之一不同，则为“非同源”，如果不进行特殊处理，浏览器会禁止非同源请求。关于“同源策略”的详细内容以及如何访问非同源请求读者可以自己上网搜索，这在 Web 开发中是一个非常基础的知识点，网上资料很多，不再赘述。")])]),e._v(" "),a("h2",{attrs:{id:"_12-2-3-web-渲染器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-3-web-渲染器"}},[e._v("#")]),e._v(" 12.2.3 Web 渲染器")]),e._v(" "),a("p",[e._v("Flutter 中提供了两种不同的渲染器来运行和构建 Web 应用，分别是 html 渲染器和 CanvasKit 渲染器。")]),e._v(" "),a("h3",{attrs:{id:"html渲染器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html渲染器"}},[e._v("#")]),e._v(" Html渲染器")]),e._v(" "),a("p",[e._v("由于浏览器有一套自身的布局标准（ html+css ），Flutter在生成Web应用时可以编译为符合浏览器标准的文件，包括使用 HTML，CSS，Canvas 和 SVG 元素来渲染。")]),e._v(" "),a("p",[e._v("使用Html渲染器的优点是应用体积相对较小，缺点是使用Html渲染器时大多数 UI 并不是 Flutter 引擎绘制的，所以可能会存在跨浏览器跨时UI出现不一致的情况。")]),e._v(" "),a("h3",{attrs:{id:"canvaskit-渲染器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canvaskit-渲染器"}},[e._v("#")]),e._v(" CanvasKit 渲染器")]),e._v(" "),a("p",[e._v("我们知道 Flutter 的优势是提供一套自绘的UI框架，可以保证多端UI的一致性。Flutter 在支持其它平台时，都是将引擎的C++代码编译为相应平台的代码来实现移植的（运行在操作系统之上）。但是在 Web 平台，Web 应用是运行在浏览器之上，而现代浏览器都实现了对 WebAssembly 的支持，简单来讲，在之前W3C规范中只要求浏览器能够支持 JavaScript 语言，这样的话很多其它语言的代码想在浏览器中运行就必须改写为 JavaScript，而 WebAssembly 是一种标准的、可移植的二进制文件格式规范，文件扩展名为 .wasm，现在浏览器都支持 WebAssembly ，这也就意味着其它语言按照 WebAssembly 规范编译的  .wasm 可以在浏览器中运行！因此，Flutter 将引擎编译成 WebAssembly 格式，并使用 WebGL 渲染，这种渲染方式的渲染器官方称为 CanvasKit 渲染器。")]),e._v(" "),a("p",[e._v("CanvasKit 渲染器的优点是可以保证跨端UI绘制的一致性，有更好的性能，以及降低不同浏览器渲染效果不一致的风险。但缺点是应用的大小会增加大约 2MB。")]),e._v(" "),a("h2",{attrs:{id:"_12-2-4-在浏览器中运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-4-在浏览器中运行"}},[e._v("#")]),e._v(" 12.2.4 在浏览器中运行")]),e._v(" "),a("h3",{attrs:{id:"命令行参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行参数"}},[e._v("#")]),e._v(" 命令行参数")]),e._v(" "),a("p",[a("code",[e._v("--web-renderer")]),e._v(" 可选参数值为 "),a("code",[e._v("auto")]),e._v("、"),a("code",[e._v("html")]),e._v(" 或 "),a("code",[e._v("canvaskit")]),e._v("。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("auto")]),e._v("（默认）- 自动选择渲染器。移动端浏览器选择 HTML，桌面端浏览器选择 CanvasKit。")]),e._v(" "),a("li",[a("code",[e._v("html")]),e._v(" - 强制使用 HTML 渲染器。")]),e._v(" "),a("li",[a("code",[e._v("canvaskit")]),e._v(" - 强制使用 CanvasKit 渲染器。")])]),e._v(" "),a("p",[e._v("此选项适用于 "),a("code",[e._v("run")]),e._v(" 和 "),a("code",[e._v("build")]),e._v(" 命令。例如：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("flutter run -d chrome --web-renderer html\nflutter build web --web-renderer canvaskit\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("如果运行/构建目标是非浏览器设备（即移动设备或桌面设备），这个选项会被忽略。")]),e._v(" "),a("p",[e._v("##12.2.5 Flutter Web 使用场景")]),e._v(" "),a("p",[e._v("Web 开发已有完整且强大的开发及生态体系，Flutter Web并不适用Web开发的所有场景，目前Flutter Web 主要关注以下三个应用场景：")]),e._v(" "),a("ul",[a("li",[e._v("渐进式 Web 应用 (Progressive web apps, PWA)。")]),e._v(" "),a("li",[e._v("单页应用 (Single page apps, SPA)，一般一个应用只有一个html文件，不同页面是通过。")]),e._v(" "),a("li",[e._v("将现有 Flutter 移动应用拓展到 Web，在两个平台共享代码。")])]),e._v(" "),a("blockquote",[a("p",[e._v("PWA 和 SPA 应用在 Web开发中是两种基本的应用类型，Web开发者会比较熟悉，如果读者不了解可以自行百度，不再赘述。")])]),e._v(" "),a("p",[e._v("现在阶段，Flutter 对于富文本和瀑布流类型的 Web 页面并不是很适合，例如博客，它是典型的“以文档为中心”的模式，而不是像 Flutter 这样的 UI 框架可以提供的“以应用为中心”的服务。以文档为中心的应用通常各个页面之间相互独立，很少有关联，也就不需要跨页面的状态共享，而以应用为中心的服务，通常各个页面之间是有状态关联，不同页面组成一个完整的功能。")]),e._v(" "),a("p",[e._v("最后，有关如何在 Web 上使用 Flutter 的更多信息，参考文档： "),a("a",{attrs:{href:"https://flutter.cn/docs/web",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flutter 的 Web 支持"),a("OutboundLink")],1),e._v("。")])])}),[],!1,null,null,null);t.default=v.exports}}]);