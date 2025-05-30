"use strict";(self.webpackChunkjue_jin_book_press=self.webpackChunkjue_jin_book_press||[]).push([["51539"],{848024:function(e,n,s){s.r(n),s.d(n,{default:()=>o});var i=s(552676),r=s(740453);let c=s.p+"static/image/651c0bb9c80b30a7d30b17e95a219908.b542b38f.webp",d=s.p+"static/image/039ea145d5ebdd8d42a53280c260c427.2fa9ef69.webp",l=s.p+"static/image/18fb7cac72193d4d51e22467abdc5f68.92fbf569.webp",h=s.p+"static/image/76c183e802f747d6a1ee38bb6b5a1eb7.823384d3.webp",a=s.p+"static/image/2856a3e8664b878dd9ea59bd24b9dd29.43e662dd.webp",t=s.p+"static/image/ab5c527e197a64b6bf8d26a6c531c49b.780d31b5.webp",j=s.p+"static/image/1437c20723d1f8d1316c0bb0a2d46792.40b6d864.webp";function x(e){let n=Object.assign({h1:"h1",a:"a",p:"p",img:"img",ul:"ul",li:"li",h2:"h2",code:"code",ol:"ol"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"5-基础篇--chat-窗口-ask-对话模式详解",children:["5-基础篇 ｜ Chat 窗口 Ask 对话模式详解",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#5-基础篇--chat-窗口-ask-对话模式详解",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"在 Cursor 0.46 版本之前分为 Chat、Composer（Normal、Agent） 两个窗口三种对话模式。"}),"\n",(0,i.jsx)(n.p,{children:"0.46 版本后统一合并为 Chat 窗口，现在分为 Ask、Edit、Agent 三种对话模式。统一在一个窗口的好处是，如果 Ask 模式讨论的内容，可以方便的切换为 Agent 模式直接将内容写到文件中。"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)("img",{src:j,alt:"image.png"})}),"\n",(0,i.jsx)(n.p,{children:"Ask 模式是 Cursor 中最基础的 AI 交互方式，主要用于帮助你理解和探索代码。它就像一个随时待命的 AI 助手，可以："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"回答你关于代码的各种问题"}),"\n",(0,i.jsx)(n.li,{children:"帮助搜索和理解代码库"}),"\n",(0,i.jsx)(n.li,{children:"提供代码解释和建议"}),"\n",(0,i.jsx)(n.li,{children:"快速修复代码错误（通过 AI Fix 功能）"}),"\n",(0,i.jsx)(n.li,{children:"和 Agent 模式最大区别是不能自动生成文件，如果是代码片段需要手动 Apply"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"使用技巧",children:["使用技巧",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用技巧",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["使用 ",(0,i.jsx)(n.code,{children:"⌘ + L"})," 快速打开/关闭 Chat 窗口，并自动切换到 Ask 模式"]}),"\n",(0,i.jsxs)(n.li,{children:["通过 ",(0,i.jsx)(n.code,{children:"@"})," 符号添加特定上下文"]}),"\n",(0,i.jsx)(n.li,{children:"悬停在代码错误上方，点击 AI Fix 按钮快速修复问题"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"使用示例",children:["使用示例",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用示例",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"例如，在 Ask 模式下，我们让 Cursor 帮我们写一个冒泡排序的代码，如果当前项目没有指定语言，Cursor 可能会随机选择一种语言，如下默认使用 TypeScript 写的。"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)("img",{src:t,alt:"image.png"})}),"\n",(0,i.jsx)(n.p,{children:"我们让 Cursor 用 JavaScript 语言实现。"}),"\n",(0,i.jsx)(n.p,{children:"接下来，我们新建一个 sort.js 文件，并添加到上下文，Apply 地方就会提示我们可以将代码应用到 sort.js 文件中。"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)("img",{src:a,alt:"image.png"})}),"\n",(0,i.jsx)(n.p,{children:"当我们点击 Apply 按钮后，Cursor 会自动将代码应用到 sort.js 文件中。界面上会出现三个保存相关的选项："}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'文件代码片段右下角的 "Accept ⌘Y" 和 "Reject ⌘N" 按钮是针对当前代码块的，一个文件中可能有多个代码块。'}),"\n",(0,i.jsxs)(n.li,{children:['代码编辑区域底部的 "Accept file ⌘Y" 和 "Reject file ⌘N" 按钮，是整个文件的保存。',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Accept file 是保存到文件中。"}),"\n",(0,i.jsx)(n.li,{children:"Reject file 是拒绝此次修改。"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"聊天窗口中代码块右上角的确认（✓）和取消（\xd7）按钮"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)("img",{src:h,alt:"image.png"})}),"\n",(0,i.jsx)(n.p,{children:"如果你觉得生成的代码不满意，可以点击 Reject 拒绝此次修改。"}),"\n",(0,i.jsxs)(n.h2,{id:"发送和-使用-codebase-发送-区别",children:["发送和 使用 codebase 发送 区别",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#发送和-使用-codebase-发送-区别",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"在 Chat 窗口下，发送消息此前是两个提交按钮，0.46 版本后只展示了一个按钮，如果不看文档，你都不知道它这里竟然还有隐藏功能："}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"↵"}),"：","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"直接按回车或点击发送按钮"}),"\n",(0,i.jsx)(n.li,{children:"普通提交，只发送当前的对话内容"}),"\n",(0,i.jsx)(n.li,{children:"适合简单的问题咨询和代码讨论"}),"\n",(0,i.jsx)(n.li,{children:"不会包含项目上下文信息"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"前面我们刚实现了冒泡排序的代码，现在我问 Cursor 当前项目下都有啥排序算法，这明显是在一本正经的胡说...，所以它回答的内容，有时候需要甄别，大家不要被它忽悠了。"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)("img",{src:l,alt:"image.png"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"⌘↵"}),"：","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["按住 ",(0,i.jsx)(n.code,{children:"⌘"}),"（command） + ",(0,i.jsx)(n.code,{children:"↵"}),"（回车） 键发送"]}),"\n",(0,i.jsx)(n.li,{children:"带有代码库上下文的发送"}),"\n",(0,i.jsx)(n.li,{children:"会自动分析并包含相关的代码文件内容"}),"\n",(0,i.jsx)(n.li,{children:"适合需要 AI 理解当前项目结构和代码的场景"}),"\n",(0,i.jsx)(n.li,{children:"能得到更准确的回答，因为 AI 有更多上下文信息"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"当我这次使用 Command + 回车键发送消息时，Cursor 会自动分析相关的代码文件内容，并给出更准确的回答。"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)("img",{src:d,alt:"image.png"})}),"\n",(0,i.jsxs)(n.h2,{id:"问题快速修复",children:["问题快速修复",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#问题快速修复",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Cursor 提供了便捷的代码错误修复功能。"}),"\n",(0,i.jsxs)(n.p,{children:["例如，在下面的示例中，我们在 JavaScript 代码中故意引入了一个语法错误：把变量声明语句中的赋值符号 ",(0,i.jsx)(n.code,{children:"="}),' 删除了。此时代码会报错，提示 "应为","。"。']}),"\n",(0,i.jsxs)(n.p,{children:["鼠标悬停在错误处，把错误信息发送给 Cursor Chat 窗口，AI 会分析错误原因并给出修复建议。在这个例子中，它发现了语法错误：",(0,i.jsx)(n.code,{children:"const len arr.length"})," 缺少了赋值运算符，需要改为 ",(0,i.jsx)(n.code,{children:"const len = arr.length"}),"。"]}),"\n",(0,i.jsx)(n.p,{children:"原先底部的 Ask 模式会被切换为 Agent 模式。"}),"\n",(0,i.jsxs)(n.p,{children:["注意，按下 ",(0,i.jsx)(n.code,{children:"⌘"})," 键再点击错误信息，会发送错误信息到新 Chat 窗口。"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)("img",{src:c,alt:"image.png"})}),"\n",(0,i.jsxs)(n.h2,{id:"总结",children:["总结",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#总结",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Ask 模式是 Cursor 中最基础的交互方式，主要用于代码探索和理解。通过 “普通提交” 和 “使用 Codebase 提交” 两种提交方式，以及便捷的错误修复功能，它能够帮助我们快速解决日常编程中遇到的各种问题。就像一个 AI 助手，你可以随时向它提问。"})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}let o=p;p.__RSPRESS_PAGE_META={},p.__RSPRESS_PAGE_META["Cursor%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%EF%BC%9AAI%20%E9%A9%B1%E5%8A%A8%E7%9A%84%E6%99%BA%E8%83%BD%E7%BC%96%E7%A8%8B%E5%AE%9E%E6%88%98%E8%AF%BE%E7%A8%8B%2F5-%E5%9F%BA%E7%A1%80%E7%AF%87%20%EF%BD%9C%20Chat%20%E7%AA%97%E5%8F%A3%20Ask%20%E5%AF%B9%E8%AF%9D%E6%A8%A1%E5%BC%8F%E8%AF%A6%E8%A7%A3.md"]={toc:[{text:"使用技巧",id:"使用技巧",depth:2},{text:"使用示例",id:"使用示例",depth:2},{text:"发送和 使用 codebase 发送 区别",id:"发送和-使用-codebase-发送-区别",depth:2},{text:"问题快速修复",id:"问题快速修复",depth:2},{text:"总结",id:"总结",depth:2}],title:"5-基础篇 ｜ Chat 窗口 Ask 对话模式详解",headingTitle:"5-基础篇 ｜ Chat 窗口 Ask 对话模式详解",frontmatter:{}}}}]);