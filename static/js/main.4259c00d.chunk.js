(this.webpackJsonpelectricad=this.webpackJsonpelectricad||[]).push([[0],{33:function(e,t,n){e.exports=n(44)},38:function(e,t,n){},39:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),i=n.n(r),c=(n(38),n(3)),s=n(7),l=Object(o.createContext)(null);function u(e){var t=e.width,n=e.height,r=Object(o.useContext)(l),i=r.__selectedRoom,u=r.__rooms,f=Object(c.a)(u,2),b=f[0],d=f[1],m=Object(c.a)(i,2),p=(m[0],m[1]),h=function(e){var o=window.prompt("D\xe9nomination de la pi\xe8ce");if(""!==o&&null!==o)if(b.find((function(e){return e.id===o})))alert("Une pi\xe8ce nomm\xe9e ".concat(o," existe d\xe9j\xe0. Cr\xe9ation annul\xe9e !!!"));else{var a={id:o,x:e.clientX?e.clientX-75:t/2,y:e.clientY?e.clientY-75:n/2,points:[{x:0,y:0},{x:0,y:150},{x:150,y:150},{x:150,y:0}],getPoints:function(){var e=this;return this.points.reduce((function(t,n,a){return t[a]={x:n.x,y:n.y,absX:n.x+e.x,absY:n.y+e.y,offsetX:e.x,offsetY:e.y,i:a,room:o,id:"".concat(e.id,".").concat(a)},t}),[])}};d([].concat(Object(s.a)(b),[a])),p(a.id)}};return a.a.createElement("rect",{tabIndex:-1,id:"background",width:t,height:n,fill:"#38a0f9",onDoubleClick:h,onClick:function(){return p(null)},onKeyDown:function(e){console.log("coucou"),78===e.keyCode&&h(e)}})}var f=n(17);function b(e){return e.reduce((function(t,n,o){return t[o]=[n],o>0&&t[o-1].push(n),o===e.length-1&&t[o].push(t[0][0]),t}),[])}function d(e){return e.reduce((function(e,t,n){var o=t.getPoints();return e.push.apply(e,Object(s.a)(o)),e}),[])}function m(e){var t=e.polygon;return a.a.createElement("polygon",{points:t,fill:"#ffffaa",stroke:"steelblue"})}var p=function(e){var t=e.point,n=e.visible,r=Object(o.useContext)(l).__rooms,i=Object(c.a)(r,2),u=i[0],b=i[1],m=u.findIndex((function(e){return e.id===t.room}));return n?a.a.createElement(f.DraggableCore,{handle:".corner",onDrag:function(e,n){u[m].points[t.i].x=t.x+n.deltaX,u[m].points[t.i].y=t.y+n.deltaY,b(Object(s.a)(u))},onStop:function(){var e=d(u);console.log(e),e.map((function(e){console.log(e.i),console.log(e.room),e.room===t.room&&e.i===t.i||(Math.abs(t.absX-e.absX)<16&&(u[m].points[t.i].x=e.absX-t.offsetX),Math.abs(t.absY-e.absY)<16&&(u[m].points[t.i].y=e.absY-t.offsetY))})),b(Object(s.a)(u))}},a.a.createElement("g",null,a.a.createElement("circle",{className:"corner",cx:t.x,cy:t.y,r:16,fill:"white",stroke:"#38a0f9",strokeWidth:4}),a.a.createElement("text",{x:t.x,y:t.y,textAnchor:"middle",alignmentBaseline:"central",pointerEvents:"none",fill:"grey"},t.i))):null},h=n(30);function y(e){var t=e.pathPoints,n=e.visible,r=(e.segmentIndex,Object(o.useContext)(l)),i=r.__quickMenuPosition,u=r.__quickMenuState,b=r.__selectedPathPoints,m=r.__rooms,p=Object(c.a)(i,2),y=(p[0],p[1]),g=Object(c.a)(u,2),O=(g[0],g[1]),x=Object(c.a)(b,2),v=(x[0],x[1]),j=Object(c.a)(m,2),_=j[0],X=j[1],Y=Object(o.useState)(!1),E=Object(c.a)(Y,2),P=E[0],k=E[1],w=Object(c.a)(t,2),C=w[0],M=w[1],D=_.findIndex((function(e){return e.id===C.room})),S=[[C.x,C.y],[M.x,M.y]],q=Object(h.a)().x((function(e){return e[0]})).y((function(e){return e[1]})),I=function(e){var n,o;console.log(e.type),e.preventDefault(),"mouseup"===e.type?(n=e.clientX,o=e.clientY):(n=e.touches[0].pageX,o=e.touches[0].pageY),y({x:n,y:o}),O((function(e){return!e})),v(t)};return n?a.a.createElement(f.DraggableCore,{handle:".segment",onDrag:function(e,t){k(!0),C.x+=t.deltaX,C.y+=t.deltaY,M.x+=t.deltaX,M.y+=t.deltaY,_[D].points[C.i].x=C.x,_[D].points[C.i].y=C.y,_[D].points[M.i].x=M.x,_[D].points[M.i].y=M.y,X(Object(s.a)(_))},onStop:function(e,n){if(P){k(!1);var o=d(_);t.forEach((function(e){o.forEach((function(t){e.room!==t.room&&(Math.abs(e.absX-t.absX)<=16&&(_[D].points[e.i].x=t.absX-e.offsetX),Math.abs(e.absY-t.absY)<=16&&(_[D].points[e.i].y=t.absY-e.offsetY))}))})),X(Object(s.a)(_))}else I(e)}},a.a.createElement("path",{d:q(S),id:C.i+"."+M.i,className:"segment",strokeWidth:20,stroke:"#77cfff",opacity:.8})):null}var g=function(e){var t=e.pathPoints,n=e.visible,o=Object(c.a)(t,2),r=o[0],i=o[1],s=r.x-i.x,l=r.y-i.y,u=Math.round(5*Math.floor(Math.sqrt(s*s+l*l)/5));return n?a.a.createElement("text",{style:{pointerEvents:"none",fill:"#404040"}},a.a.createElement("textPath",{startOffset:"45%",xlinkHref:"#"+r.i+"."+i.i},u)):null};var O=function(e){var t,n=e.isSelected,r=e.room,i=e.i,u=Object(o.useContext)(l),h=u.__rooms,O=u.__selectedRoom,x=Object(c.a)(h,2),v=x[0],j=x[1],_=Object(c.a)(O,2),X=(_[0],_[1]);return a.a.createElement(f.DraggableCore,{handle:".room",cancel:".corner, .segment",disabled:!n,onStop:function(e,t){var n=d(v);r.getPoints().forEach((function(e){console.log(e.room),n.forEach((function(t){console.log(t.room);var n=Math.abs(e.absX-t.absX),o=Math.abs(e.absY-t.absY);e.room!==t.room&&(n<=16&&(v[i].points[e.i].x=t.absX-e.offsetX),o<=16&&(v[i].points[e.i].y=t.absY-e.offsetY))}))})),j(Object(s.a)(v))},onDrag:function(e,t){e.preventDefault();var n=Object(s.a)(v);n[i].x+=t.deltaX,n[i].y+=t.deltaY,j(n)}},a.a.createElement("g",{className:"room",id:r.id,transform:"translate(".concat(r.x," ").concat(r.y,")"),onClick:function(){X(r.id)},onKeyDown:function(e){n&&8===e.keyCode&&j((function(e){return e.filter((function(e){return e.id!==r.id}))}))},tabIndex:-1,style:{outline:0}},a.a.createElement(m,{polygon:(t=r.getPoints(),t.map((function(e){return[e.x,e.y].join(" ")})))}),b(r.getPoints()).map((function(e,t){return a.a.createElement(y,{key:t,pathPoints:e,visible:n,segmentIndex:t})})),r.getPoints().map((function(e,t){return a.a.createElement(p,{key:t,point:e,visible:n})})),b(r.getPoints()).map((function(e,t){return a.a.createElement(g,{key:t,pathPoints:e,visible:n})}))))};function x(){var e=Object(o.useContext)(l),t=e.__rooms,n=e.__selectedRoom,r=Object(c.a)(t,1)[0],i=Object(c.a)(n,1)[0],s=window.innerWidth,f=window.innerHeight;return a.a.createElement("svg",{width:s,height:f},a.a.createElement(u,{width:s,height:f}),r.sort((function(e,t){var n=e.id===i;return n===(t.id===i)?0:n?1:-1})).map((function(e,t){return a.a.createElement(O,{key:e.id,isSelected:i===e.id,room:e,i:t})})))}n(39);var v=n(12),j=n(66),_=n(67);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var Y=function(){var e=Object(o.useContext)(l),t=e.__quickMenuPosition,n=e.__quickMenuState,r=e.__selectedPathPoints,i=e.__rooms,u=e.__selectedRoom,f=Object(c.a)(t,2),b=f[0],d=f[1],m=Object(c.a)(n,2),p=m[0],h=m[1],y=Object(c.a)(r,2),g=y[0],O=(y[1],Object(c.a)(i,2)),x=O[0],Y=O[1],E=Object(c.a)(u,2),P=E[0],k=(E[1],function(e){h(!1),d(null)});return a.a.createElement(j.a,{id:"quickMenu",transitionDuration:{enter:0,exit:0},anchorReference:"anchorPosition",anchorPosition:null!==b?{top:b.y,left:b.x}:void 0,open:p,onClose:k},a.a.createElement(_.a,{onClick:function(e){var t,n=function(e,t){e.persist();var n=e.target.getBoundingClientRect(),o=[e.clientX,e.clientY],a=[];a[0]=t[0].XY[0]<t[1].XY[0]?o[0]-n.left+t[0].XY[0]:o[0]-n.left+t[1].XY[0];var r=t[0],i=t[1],c=r.XY[0]-i.XY[0],s=(r.XY[1]-i.XY[1])/c,l=r.XY[1]-s*r.XY[0];return 0===s?a[1]=r.XY[1]:s===1/0||s===-1/0?(a[0]=r.XY[0],a[1]=r.XY[1]<i.XY[1]?Math.abs(o[1]-n.top+r.XY[1]):Math.abs(o[1]-n.top+i.XY[1])):a[1]=s*a[0]+l,r.i,i.i,console.log([a,a]),[a,a]}(e,g),o=g[0].i,a=(g[1].i,Object(s.a)(x)),r=a.findIndex((function(e){return e.id===P}));a[r]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(n,!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a[r],{points:(t=a[r].points).splice.apply(t,[o+1,0].concat(Object(s.a)(n)))}),Y(a),k()}},"new corner"),a.a.createElement(_.a,{onClick:function(e){console.log("selectedPathPoints",g),k()}},"new door"))};var E=function(){var e=Object(o.useState)(null),t=Object(o.useState)(!1),n=Object(o.useState)([]),r={__quickMenuPosition:e,__quickMenuState:t,__selectedRoom:Object(o.useState)(null),__rooms:n,__selectedPathPoints:Object(o.useState)(null)};return a.a.createElement("div",{className:"App",style:{overscrollBehavior:"none"},onContextMenu:function(e){return e.preventDefault()}},a.a.createElement(l.Provider,{value:r},a.a.createElement(x,null),a.a.createElement(Y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.4259c00d.chunk.js.map