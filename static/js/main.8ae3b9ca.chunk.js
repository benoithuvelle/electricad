(this.webpackJsonpelectricad=this.webpackJsonpelectricad||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=n(5),c=n.n(o),a=(n(13),n(4)),d=n(2),u=n(1),l=n(3),s=n.n(l);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach((function(e){Object(d.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=function(t){var e=t.point,n=t.electricad,r=t.setRoom;return i.a.createElement(l.DraggableCore,{handle:".corner",onStart:function(t,e){},onDrag:function(t,i){var o=n.find((function(t){return t.id===e.id.split(".")[0]})),c=o.points.find((function(t){return t.id===e.id}));c.x=e.x+i.deltaX,c.y=e.y+i.deltaY,r(p({},o))},onStop:function(t,i){var o=n.find((function(t){return t.id===e.id.split(".")[0]})),c=o.points.find((function(t){return t.id===e.id}));n.reduce((function(t,e,n){return e.points.map((function(n){n.dx=e.x,n.dy=e.y,t.push(n)})),t}),[]).filter((function(t){return t.id!==e.id})).map((function(t){Math.abs(t.x+t.dx-(c.x+c.dx))<=16&&(c.x=t.dx+t.x-c.dx),Math.abs(t.y+t.dy-(c.y+c.dy))<=16&&(c.y=t.dy+t.y-c.dy),r(p({},o))}))}},i.a.createElement("circle",{className:"corner",id:e.id,cx:e.x,cy:e.y,r:16,fill:"white",stroke:"#38a0f9",strokeWidth:4}))};function h(t){var e=t.points.map((function(t){return[t.x,t.y].join(" ")}));return i.a.createElement("polygon",{points:e,fill:"#ffffaa",stroke:"steelblue"})}var x=n(7);function m(t){var e=t.room,n=t.path,r=t.setElectricad,o=t.electricad,c=(t.index,e.points.find((function(t){return t.id===n[0].id}))),a=e.points.find((function(t){return t.id===n[1].id})),d=Object(x.a)().x((function(t){return t.x})).y((function(t){return t.y}));return i.a.createElement(l.DraggableCore,{handle:".segment",onDrag:function(t,e){c.x=c.x+e.deltaX,a.x=a.x+e.deltaX,c.y=c.y+e.deltaY,a.y=a.y+e.deltaY,r(Object(u.a)(o))},onStop:function(t,e){o.reduce((function(t,e,n){return e.points.map((function(n){n.dx=e.x,n.dy=e.y,t.push(n)})),t}),[]).filter((function(t){return t.id!==c.id&&t.id!==a.id})).map((function(t){Math.abs(t.x+t.dx-(c.x+c.dx))<=16&&(c.x=t.dx+t.x-c.dx),Math.abs(t.y+t.dy-(c.y+c.dy))<=16&&(c.y=t.dy+t.y-c.dy),Math.abs(t.x+t.dx-(a.x+a.dx))<=16&&(a.x=t.dx+t.x-a.dx),Math.abs(t.y+t.dy-(a.y+a.dy))<=16&&(a.y=t.dy+t.y-a.dy),r(Object(u.a)(o))}))}},i.a.createElement("path",{d:d(n),id:n.id,className:"segment",strokeWidth:20,stroke:"#77cfff",opacity:.8,onDoubleClick:function(t){var i=t.target.getBoundingClientRect(),c=t.clientX,a=t.clientY,d={x:Math.abs(i.x-c)},u=n[0],l=n[1],s=u.x-l.x,f=(u.y-l.y)/s,p=u.x-f*u.y;d.y=0===f?u.y:f===1/0||f===-1/0?Math.abs(i.y-a):f*d.x+p,d.id=e.id+".corner."+e.points.length+1;var y=e.points.findIndex((function(t){return t.id===u.id})),h=e.points.findIndex((function(t){return t.id===l.id}));console.log(y,h),e.points.splice(y+1,0,d),r(o)}}))}var b=function(t){var e=t.path,n=e[0],r=e[1],o=n.x-r.x,c=n.y-r.y,a=Math.floor(Math.sqrt(o*o+c*c));return i.a.createElement("text",null,i.a.createElement("textPath",{startOffset:"45%",xlinkHref:"#"+e.id},a))};function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var O=function(t){var e=t.electricad,n=t.setElectricad,o=t.setSelectedRoom,c=t.isSelected,l=t.index,f=Object(r.useState)(t.room),p=Object(a.a)(f,2),x=p[0],O=p[1];return Object(r.useEffect)((function(){console.log("room changed"),e[l]=x,n(Object(u.a)(e))}),[x]),console.log("rendering room : "+x.id),i.a.createElement(s.a,{handle:".room",position:{x:x.x,y:x.y},cancel:[".corner",".segment"],disabled:!c,onStop:function(t,n){x.x=n.x,x.y=n.y;var r=e.filter((function(t){return t.id!==x.id})).reduce((function(t,e,n){return e.points.map((function(n){n.dx=e.x,n.dy=e.y,t.push(n)})),t}),[]);x.points.map((function(t){r.map((function(e){var n=t.x+x.x,r=e.x+e.dx;Math.abs(n-r)<=30&&(t.x=r-x.x)})),r.map((function(e){var n=t.y+x.y,r=e.y+e.dy;Math.abs(n-r)<=30&&(t.y=r-x.y)}))}));O(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach((function(e){Object(d.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},x))},onDrag:function(t,e){t.preventDefault()}},i.a.createElement("g",{className:"room",id:x.id,transform:"translate(".concat(x.x," ").concat(x.y,")"),onClick:function(){o(x.id)},onKeyDown:function(t){c&&8===t.keyCode&&n(e.filter((function(t){return t.id!==x.id})))},tabIndex:-1,style:{outline:0}},i.a.createElement(h,{points:x.points}),c?x.path().map((function(t){var r;return i.a.createElement(m,(r={index:l,electricad:e,setElectricad:n,key:t.id,path:t},Object(d.a)(r,"electricad",e),Object(d.a)(r,"setRoom",O),Object(d.a)(r,"room",x),r))})):null,c?x.points.map((function(t){return i.a.createElement(y,{key:t.id,point:t,electricad:e,setRoom:O,room:x})})):null,x.path().map((function(t){return i.a.createElement(b,{key:t.id,path:t})}))))};function v(t,e,n){this.id=t,this.x=e,this.y=n,this.points=[{x:0,y:0,id:t+".corner.0"},{x:100,y:0,id:t+".corner.1"},{x:100,y:100,id:t+".corner.2"},{x:0,y:100,id:t+".corner.3"}],this.polygon=function(){return this.points.map((function(t){return[t.x,t.y].join(" ")}))},this.color="#"+(16777215*Math.random()<<0).toString(16),this.path=function(){var t=this;return this.points.reduce((function(e,n,r){return e[r]=[n],e[r].room=t.id,e[r].id=t.id+".path"+r,r>0&&e[r-1].push(n),r===t.points.length-1&&e[r].push(e[0][0]),e}),[])}}function j(t){var e=t.setElectricad,n=t.electricad,r=t.setSelectedRoom;return i.a.createElement("rect",{id:"background",width:t.width,height:t.height,fill:"#38a0f9",onDoubleClick:function(t){var i=new v("cuisine"+Math.floor(100*Math.random()),t.clientX-50,t.clientY-50);e([].concat(Object(u.a)(n),[i])),r(i.id)},onClick:function(){return r(null)}})}function E(){var t=Object(r.useState)([]),e=Object(a.a)(t,2),n=e[0],o=e[1],c=Object(r.useState)(null),d=Object(a.a)(c,2),u=d[0],l=d[1],s=window.innerWidth,f=window.innerHeight;return i.a.createElement("svg",{width:s,height:f},i.a.createElement(j,{width:s,height:f,setElectricad:o,electricad:n,setSelectedRoom:l}),n.map((function(t,e){return i.a.createElement(O,{key:t.id,room:t,electricad:n,isSelected:u===t.id,setSelectedRoom:l,setElectricad:o,index:e})})))}n(14);var w=function(){return console.log("app rendering"),i.a.createElement("div",{className:"App",style:{overscrollBehavior:"none"}},i.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8ae3b9ca.chunk.js.map