(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/Profile Pic.e2465325.jpg"},17:function(e,t,n){e.exports=n(33)},23:function(e,t,n){},25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(8),i=n.n(s),c=(n(23),n(9)),h=n(10),r=n(16),l=n(11),u=n(2),d=n(15),m=n(1),p=(n(24),n(12)),f=n.n(p),g=n(14),C=n(13),b=n.n(C),A=(n(25),"https://alex-bot-api.herokuapp.com/");function O(e){return o.a.createElement("div",{className:"rcw-response"},o.a.createElement("div",{className:"rcw-message-text"},o.a.createElement("p",null,"Oh, yes, you can also watch two bots (someone else and me) talk to each other"),o.a.createElement("p",null,o.a.createElement(b.a,{variant:"outline-dark",size:"sm",onClick:function(){e.handleAutoChat()}},"Try it Now",o.a.createElement(g.a,null)),o.a.createElement("br",null),o.a.createElement("small",null,'(or type "AUTOCHAT")'))))}var w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(r.a)(this,Object(l.a)(t).call(this))).state={isAutoChat:!1},e.handleNewUserMessage=e.handleNewUserMessage.bind(Object(u.a)(e)),e.handleAutoChat=e.handleAutoChat.bind(Object(u.a)(e)),e}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){fetch(A).then(function(){console.log("Initialized")}),document.getElementsByClassName("rcw-launcher")[0].click(),Object(m.addResponseMessage)("Hi! I'm Alex Bot, a chat bot made to imitate the way my maker talks in real chat.\n\nYou can start chatting with me here, and feel free to check out my source code!"),Object(m.addLinkSnippet)({title:"My source code",link:"https://github.com/alexding123/alexbot"}),Object(m.renderCustomComponent)(O,{handleAutoChat:this.handleAutoChat},!0)}},{key:"handleAutoChat",value:function(){function e(e){this.state.isAutoChat&&fetch(A+"ChatAlex",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({msg:e})}).then(function(e){return e.json()}).then(function(e){Object(m.addResponseMessage)("```"+e.data+"```"),setTimeout(function(){return t(e.data)},1e3)})}function t(t){this.state.isAutoChat&&fetch(A+"ChatOther",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({msg:t})}).then(function(e){return e.json()}).then(function(t){Object(m.addUserMessage)("```"+t.data+"```"),setTimeout(function(){return e(t.data)},1e3)})}this.state.isAutoChat||(Object(m.addResponseMessage)('```The following is AutoChat```\n```Send "STOP" to stop this at any time```'),e=e.bind(this),t=t.bind(this),this.setState({isAutoChat:!0},function(){return e("hi")}))}},{key:"stopAutoChat",value:function(){this.setState({isAutoChat:!1}),Object(m.addResponseMessage)("```STOP signal received```\n```AutoChat terminated```")}},{key:"handleNewUserMessage",value:function(e){"STOP"===e&&this.state.isAutoChat?this.stopAutoChat():"AUTOCHAT"!==e||this.state.isAutoChat?fetch(A+"ChatAlex",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({msg:e})}).then(function(e){return e.json()}).then(function(e){Object(m.addResponseMessage)(e.data)}):this.handleAutoChat()}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(m.Widget,{title:"Alex Bot",subtitle:"Having a nice day coding",handleNewUserMessage:this.handleNewUserMessage,profileAvatar:f.a,showCloseButton:!1}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.f6decf06.chunk.js.map