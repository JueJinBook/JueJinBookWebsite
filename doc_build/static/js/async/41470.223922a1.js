"use strict";(self.webpackChunkjue_jin_book_press=self.webpackChunkjue_jin_book_press||[]).push([["41470"],{603790:function(e,n,s){e.exports=s.p+"static/image/364b5960fd041aa3bcbca25943631da5.660ccd19.webp"},166665:function(e,n,s){e.exports=s.p+"static/image/f979515ef4c430b70d489fb20102444d.3b527ca2.webp"},550052:function(e,n,s){s.r(n),s.d(n,{default:()=>Q});var r=s(552676),c=s(740453);let t=s.p+"static/image/cdd81c210b404ad098c80025297440c4.d8b5b03e.webp",a=s.p+"static/image/9c62a897efbafc13a5b0efb80f4380e1.b102550c.webp",d=s.p+"static/image/1d7c86e97c6ba7eb3cdded965bd4679d.00c048b1.webp",i=s.p+"static/image/8aebdc74b901a4eccda16930f02d2015.61ef7cb6.webp",l=s.p+"static/image/b5eff07194b9791605e514c4d098c2cf.db132008.gif",p=s.p+"static/image/2c2a43ecaf5e7bc12c82258d0f511e97.db889004.webp",j=s.p+"static/image/a3d81c1ba1f39b61013f76ce080b9b60.43f42bd1.gif",x=s.p+"static/image/5c57d3a6231bcaa15298670e2d408d20.8584f4e1.gif",h=s.p+"static/image/176cce75013ce291ad9ea73d3565ff7e.5b4c2fe4.webp",o=s.p+"static/image/c8b4b36961c648c1963118d048fd066c.a01c8eb4.webp",b=s.p+"static/image/932ec274470e99b99621b80703500ee6.f1912f57.webp",f=s.p+"static/image/88251d425ae4da05eec3a4d139d81eea.93326a64.webp",g=s.p+"static/image/dd169f5308b7fe55ef4b942922023842.4258c198.gif",m=s.p+"static/image/80c4a6052ee502b977d765670b7a1b66.cbe96d6b.webp",S=s.p+"static/image/e959bcf74fdc45f8e5f3857121ca1f16.d3983456.webp",v=s.p+"static/image/da7ba6119f63a59f64dba95367d1cfb5.748ec90e.webp",u=s.p+"static/image/59b98cddfa5519f50b4716322e62d464.c1ff34ee.webp",E=s.p+"static/image/7a146a12e42cb09d1d63b61cbae7e7a3.dd4c49ac.webp",w=s.p+"static/image/2a4df94de6c4470948f6b236cfa83797.244d22c8.webp",A=s.p+"static/image/97aaeb3a7f5d9b17ec26dba0ce777341.ef97447b.webp",I=s.p+"static/image/8a0509195fa90466b9fae18220245a25.01d078e0.webp",P=s.p+"static/image/4a4645efd77f86546b013a7c40b3a625.046f51ff.webp",k=s.p+"static/image/0130dcf9efbb94e968159e0790d4639b.627d3f02.webp",C=s.p+"static/image/68e37161f11db3a2871453316e4365f7.5442dc3d.gif";var q=s(603790),y=s(166665);function U(e){let n=Object.assign({h1:"h1",a:"a",p:"p",img:"img",pre:"pre",code:"code",h2:"h2"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"97-nest-实现-server-sent-event-数据推送",children:["97. Nest 实现 Server Sent Event 数据推送",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#97-nest-实现-server-sent-event-数据推送",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"提到推送数据，大家可能会首先想到 WebSocket。"}),"\n",(0,r.jsx)(n.p,{children:"确实，WebSocket 能双向通信，自然也能做服务器到浏览器的消息推送。"}),"\n",(0,r.jsx)(n.p,{children:"但如果只是单向推送消息的话，HTTP 就有这种功能，它就是 Server Sent Event。"}),"\n",(0,r.jsx)(n.p,{children:"WebSocket 的通信过程是这样的："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:y,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"首先通过 http 切换协议，服务端返回 101 的状态码后，就代表协议切换成功。"}),"\n",(0,r.jsx)(n.p,{children:"之后就是 WebSocket 格式数据的通信了，一方可以随时向另一方推送消息。"}),"\n",(0,r.jsx)(n.p,{children:"而 HTTP 的 Server Sent Event 是这样的："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:q,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"服务端返回的 Content-Type 是 text/event-stream，这是一个流，可以多次返回内容。"}),"\n",(0,r.jsx)(n.p,{children:"Sever Sent Event 就是通过这种消息来随时推送数据。"}),"\n",(0,r.jsx)(n.p,{children:"可能你是第一次听说 SSE，但你肯定用过基于它的应用。"}),"\n",(0,r.jsx)(n.p,{children:"比如你用的 CICD 平台，它的日志是实时打印的。"}),"\n",(0,r.jsx)(n.p,{children:"那它是如何实时传输构建日志的呢？"}),"\n",(0,r.jsx)(n.p,{children:"明显需要一段一段的传输，这种一般就是用 SSE 来推送数据。"}),"\n",(0,r.jsx)(n.p,{children:"再比如说 ChatGPT，它回答一个问题不是一次性给你全部的，而是一部分一部分的加载回答。"}),"\n",(0,r.jsx)(n.p,{children:"这也是基于 SSE。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:C,alt:""})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:k,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"或者这个 ai 聊天产品："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:P,alt:""})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:I,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"知道了什么是 SSE 以及它的应用，我们来自己实现一下吧："}),"\n",(0,r.jsx)(n.p,{children:"创建 nest 项目："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"nest new sse-test\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:A,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"把它跑起来："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm run start:dev\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:w,alt:""})}),"\n",(0,r.jsxs)(n.p,{children:["访问 ",(0,r.jsx)(n.a,{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer",children:"http://localhost:3000"})," 可以看到 hello world，代表服务器跑成功了："]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:"data:image/webp;base64,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",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"然后在 AppController 添加一个 stream 接口："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:E,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"这里不是通过  @Get、@Post 等装饰器标识，而是通过 @Sse 标识这是一个 event stream 类型的接口。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"@Sse('stream')\nstream() {\n    return new Observable((observer) => {\n      observer.next({ data: { msg: 'aaa'} });\n\n      setTimeout(() => {\n        observer.next({ data: { msg: 'bbb'} });\n      }, 2000);\n\n      setTimeout(() => {\n        observer.next({ data: { msg: 'ccc'} });\n      }, 5000);\n    });\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"返回的是一个 Observable 对象，然后内部用 observer.next 返回消息。"}),"\n",(0,r.jsx)(n.p,{children:"可以返回任意的 json 数据。"}),"\n",(0,r.jsx)(n.p,{children:"我们先返回了一个 aaa、过了 2s 返回了 bbb，过了 5s 返回了 ccc。"}),"\n",(0,r.jsx)(n.p,{children:"然后写个前端页面："}),"\n",(0,r.jsx)(n.p,{children:"创建一个 react 项目："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx create-react-app --template=typescript sse-test-frontend\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:u,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"在 App.tsx 里写如下代码："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import { useEffect } from 'react';\n\nfunction App() {\n\n  useEffect(() => {\n    const eventSource = new EventSource('http://localhost:3000/stream');\n    eventSource.onmessage = ({ data }) => {\n      console.log('New message', JSON.parse(data));\n    };\n  }, []);\n\n  return (\n    <div>hello</div>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,r.jsx)(n.p,{children:"这个 EventSource 是浏览器原生 api，就是用来获取 sse 接口的响应的，它会把每次消息传入 onmessage 的回调函数。"}),"\n",(0,r.jsx)(n.p,{children:"我们在 nest 服务开启跨域支持："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:v,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"然后把 react 项目 index.tsx 里这几行代码删掉，它会导致额外的渲染："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:S,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"执行 npm run start"}),"\n",(0,r.jsx)(n.p,{children:"因为 3000 端口被占用了，它会跑在 3001："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:m,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"浏览器访问下："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:g,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"看到一段段的响应了没？"}),"\n",(0,r.jsx)(n.p,{children:"这就是 Server Sent Event。"}),"\n",(0,r.jsx)(n.p,{children:"在 devtools 里可以看到，响应的 Content-Type 是 text/event-stream："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:f,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"然后在 EventStream 里可以看到每一次收到的消息："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:b,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"这样，服务端就可以随时向网页推送消息了。"}),"\n",(0,r.jsx)(n.p,{children:"那它兼容性怎么样呢？"}),"\n",(0,r.jsxs)(n.p,{children:["可以在 ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/EventSource#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7",target:"_blank",rel:"noopener noreferrer",children:"MDN"})," 看到："]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:o,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"除了 ie、edge 外，其他浏览器都没任何兼容问题。"}),"\n",(0,r.jsx)(n.p,{children:"基本是可以放心用的。"}),"\n",(0,r.jsx)(n.p,{children:"那用在哪呢？"}),"\n",(0,r.jsx)(n.p,{children:"一些只需要服务端推送的场景就特别适合 Server Sent Event。"}),"\n",(0,r.jsx)(n.p,{children:"比如这个站内信："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:h,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"这种推送用 WebSocket 就没必要了，可以用 SSE 来做。"}),"\n",(0,r.jsx)(n.p,{children:"那连接断了怎么办呢？"}),"\n",(0,r.jsx)(n.p,{children:"不用担心，浏览器会自动重连。"}),"\n",(0,r.jsx)(n.p,{children:"这点和 WebSocket 不同，WebSocket 如果断开之后是需要手动重连的，而 SSE 不用。"}),"\n",(0,r.jsx)(n.p,{children:"再比如说日志的实时推送。"}),"\n",(0,r.jsx)(n.p,{children:"我们来测试下："}),"\n",(0,r.jsx)(n.p,{children:"tail -f 命令可以实时看到文件的最新内容："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:x,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"我们通过 child_process 模块的 exec 来执行这个命令，然后监听它的 stdout 输出："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const { exec } = require(\"child_process\");\n\nconst childProcess = exec('tail -f ./log');\n\nchildProcess.stdout.on('data', (msg) => {\n    console.log(msg);\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"用 node 执行它："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:j,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"然后添加一个 sse 的接口："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"@Sse('stream2')\nstream2() {\nconst childProcess = exec('tail -f ./log');\n\nreturn new Observable((observer) => {\n  childProcess.stdout.on('data', (msg) => {\n    observer.next({ data: { msg: msg.toString() }});\n  })\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"监听到新的数据之后，把它返回给浏览器。"}),"\n",(0,r.jsx)(n.p,{children:"浏览器连接这个新接口："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:p,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"测试下："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:l,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"可以看到，浏览器收到了实时的日志。"}),"\n",(0,r.jsx)(n.p,{children:"很多构建日志都是通过 SSE 的方式实时推送的。"}),"\n",(0,r.jsx)(n.p,{children:"日志之类的只是文本，那如果是二进制数据呢？"}),"\n",(0,r.jsx)(n.p,{children:"二进制数据在 node 里是通过 Buffer 存储的。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const { readFileSync } = require(\"fs\");\n\nconst buffer = readFileSync('./package.json');\n\nconsole.log(buffer);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:i,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"而 Buffer 有个 toJSON 方法："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:d,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"这样不就可以通过 sse 的接口返回了么？"}),"\n",(0,r.jsx)(n.p,{children:"试一下："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"@Sse('stream3')\nstream3() {\n    return new Observable((observer) => {\n        const json = readFileSync('./package.json').toJSON();\n        observer.next({ data: { msg: json }});\n    });\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:a,alt:""})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:t,alt:""})}),"\n",(0,r.jsx)(n.p,{children:"确实可以。"}),"\n",(0,r.jsx)(n.p,{children:"也就是说，基于 sse，除了可以推送文本外，还可以推送任意二进制数据。"}),"\n",(0,r.jsx)(n.p,{children:"案例代码上传了小册仓库："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/QuarkGluonPlasma/nestjs-course-code/tree/main/sse-test",target:"_blank",rel:"noopener noreferrer",children:"后端代码"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/QuarkGluonPlasma/nestjs-course-code/tree/main/sse-test-frontend",target:"_blank",rel:"noopener noreferrer",children:"前端代码"})}),"\n",(0,r.jsxs)(n.h2,{id:"总结",children:["总结",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#总结",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"服务端实时推送数据，除了用 WebSocket 外，还可以用 HTTP 的 Server Sent Event。"}),"\n",(0,r.jsx)(n.p,{children:"只要 http 返回 Content-Type 为 text/event-stream 的 header，就可以通过 stream 的方式多次返回消息了。"}),"\n",(0,r.jsx)(n.p,{children:"它传输的是 json 格式的内容，可以用来传输文本或者二进制内容。"}),"\n",(0,r.jsx)(n.p,{children:"我们通过 Nest 实现了 sse 的接口，用 @Sse 装饰器标识方法，然后返回 Observe 对象就可以了。内部可以通过 observer.next 随时返回数据。"}),"\n",(0,r.jsx)(n.p,{children:"前端使用 EventSource 的 onmessage 来接收消息。"}),"\n",(0,r.jsx)(n.p,{children:"这个 api 的兼容性很好，除了 ie 外可以放心的用。"}),"\n",(0,r.jsx)(n.p,{children:"它的应用场景有很多，比如站内信、构建日志实时展示、chatgpt 的消息返回等。"}),"\n",(0,r.jsx)(n.p,{children:"再遇到需要消息推送的场景，不要直接 WebSocket 了，也许 Server Sent Event 更合适呢？"})]})}function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(U,{...e})}):U(e)}let Q=O;O.__RSPRESS_PAGE_META={},O.__RSPRESS_PAGE_META["Nest%20%E9%80%9A%E5%85%B3%E7%A7%98%E7%B1%8D%20%20%E6%9C%80%E6%96%B0200%E7%AB%A0%2F97.%20Nest%20%E5%AE%9E%E7%8E%B0%20Server%20Sent%20Event%20%E6%95%B0%E6%8D%AE%E6%8E%A8%E9%80%81.md"]={toc:[{text:"总结",id:"总结",depth:2}],title:"97. Nest 实现 Server Sent Event 数据推送",headingTitle:"97. Nest 实现 Server Sent Event 数据推送",frontmatter:{}}}}]);