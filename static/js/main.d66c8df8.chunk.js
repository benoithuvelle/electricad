(this.webpackJsonpelectricad=this.webpackJsonpelectricad||[]).push([[0],{33:function(e,t,n){e.exports=n(44)},38:function(e,t,n){},39:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(4),i=n.n(a),c=(n(38),n(3)),s=n(6),l=Object(o.createContext)(null);function u(e){var t=e.width,n=e.height,a=Object(o.useContext)(l),i=a.__selectedRoom,u=a.__rooms,f=Object(c.a)(u,2),b=f[0],d=f[1],p=Object(c.a)(i,2),y=(p[0],p[1]),m=function(e){var o=window.prompt("D\xe9nomination de la pi\xe8ce");if(""!==o&&null!==o)if(b.find((function(e){return e.id===o})))alert("Une pi\xe8ce nomm\xe9e ".concat(o," existe d\xe9j\xe0. Cr\xe9ation annul\xe9e !!!"));else{var r={id:o,x:e.clientX?e.clientX-75:t/2,y:e.clientY?e.clientY-75:n/2,points:[{x:0,y:0},{x:0,y:200},{x:200,y:200},{x:200,y:0}],getPoints:function(){var e=this;return this.points.reduce((function(t,n,r){return t[r]={x:n.x,y:n.y,absX:n.x+e.x,absY:n.y+e.y,offsetX:e.x,offsetY:e.y,i:r,room:o,id:"".concat(e.id,".").concat(r)},t}),[])},doors:[]};d([].concat(Object(s.a)(b),[r])),y(r.id)}};return r.a.createElement("rect",{style:{outline:"none"},tabIndex:-1,id:"background",width:t,height:n,fill:"#38a0f9",onDoubleClick:m,onClick:function(){return y(null)},onKeyDown:function(e){78===e.keyCode&&m(e)}})}var f=n(13);function b(e){return e.reduce((function(t,n,o){return t[o]=[n],o>0&&t[o-1].push(n),o===e.length-1&&t[o].push(t[0][0]),t}),[])}function d(e){return e.reduce((function(e,t,n){var o=t.getPoints();return e.push.apply(e,Object(s.a)(o)),e}),[])}var p=function(e,t){var n=Object(c.a)(t,2),o=n[0],r=n[1],a=Object(c.a)(e,2),i=a[0],s=a[1];console.log("x",i),console.log("y",s);var l=(r.y-o.y)/(r.x-o.x);console.log("m",l);var u=o.y-l*o.x;return 0===l?s=o.y:isFinite(l)?s=l*i+u:i=o.x,{x:i,y:s}};function y(e,t,n){var o=n.x-t.x,r=n.y-t.y,a=o*o+r*r,i=(e.x-t.x)*o+(e.y-t.y)*r,c=Math.min(1,Math.max(0,i/a));return i=(n.x-t.x)*(e.y-t.y)-(n.y-t.y)*(e.x-t.x),{point:{x:t.x+o*c,y:t.y+r*c},left:i<1,dot:i,t:c}}function m(e){var t=e.polygon;return r.a.createElement("polygon",{points:t,fill:"#ffffaa",stroke:"steelblue",strokeWidth:8})}var x=function(e){var t=e.point,n=e.visible,a=Object(o.useContext)(l).__rooms,i=Object(c.a)(a,2),u=i[0],b=i[1],p=u.findIndex((function(e){return e.id===t.room}));return n?r.a.createElement(f.DraggableCore,{handle:".corner",onDrag:function(e,n){u[p].points[t.i].x=t.x+n.deltaX,u[p].points[t.i].y=t.y+n.deltaY,b(Object(s.a)(u))},onStop:function(){var e=d(u);console.log(e),e.map((function(e){console.log(e.i),console.log(e.room),e.room===t.room&&e.i===t.i||(Math.abs(t.absX-e.absX)<16&&(u[p].points[t.i].x=e.absX-t.offsetX),Math.abs(t.absY-e.absY)<16&&(u[p].points[t.i].y=e.absY-t.offsetY))})),b(Object(s.a)(u))}},r.a.createElement("g",null,r.a.createElement("circle",{className:"corner",cx:t.x,cy:t.y,r:16,fill:"white",stroke:"#38a0f9",strokeWidth:4}),r.a.createElement("text",{x:t.x,y:t.y,textAnchor:"middle",alignmentBaseline:"central",pointerEvents:"none",fill:"grey"},t.i))):null},O=n(30);function h(e){var t=e.pathPoints,n=e.visible,a=(e.segmentIndex,Object(o.useContext)(l)),i=a.__quickMenuPosition,u=a.__quickMenuState,b=a.__selectedPathPoints,p=a.__rooms,y=a.__pointer,m=a.__pathNode,x=Object(c.a)(i,2),h=(x[0],x[1]),j=Object(c.a)(u,2),g=(j[0],j[1]),v=Object(c.a)(b,2),_=(v[0],v[1]),w=Object(c.a)(p,2),E=w[0],P=w[1],k=Object(c.a)(y,2),C=(k[0],k[1]),X=Object(c.a)(m,2),Y=(X[0],X[1]),D=Object(o.useState)(!1),M=Object(c.a)(D,2),S=M[0],I=M[1],q=Object(c.a)(t,2),N=q[0],W=q[1],R=E.findIndex((function(e){return e.id===N.room})),B=[[N.x,N.y],[W.x,W.y]],A=Object(O.a)().x((function(e){return e[0]})).y((function(e){return e[1]})),H=function(e){var n,o;C({x:e.clientX,y:e.clientY}),e.preventDefault(),"mouseup"===e.type?(n=e.clientX,o=e.clientY):(n=e.touches[0].pageX,o=e.touches[0].pageY),h({x:n,y:o}),g((function(e){return!e})),_(t),Y(e.target)};return r.a.createElement(f.DraggableCore,{handle:".segment",onDrag:function(e,t){I(!0),N.x+=t.deltaX,N.y+=t.deltaY,W.x+=t.deltaX,W.y+=t.deltaY,E[R].points[N.i].x=N.x,E[R].points[N.i].y=N.y,E[R].points[W.i].x=W.x,E[R].points[W.i].y=W.y,P(Object(s.a)(E))},onStop:function(e,n){if(S){I(!1);var o=d(E);t.forEach((function(e){o.forEach((function(t){e.id!==t.id&&(Math.abs(e.absX-t.absX)<=16&&(E[R].points[e.i].x=t.absX-e.offsetX),Math.abs(e.absY-t.absY)<=16&&(E[R].points[e.i].y=t.absY-e.offsetY))}))})),P(Object(s.a)(E))}else H(e)},cancel:".doorCenter"},r.a.createElement("path",{style:n?{visibility:"visible"}:{visibility:"hidden"},d:A(B),id:N.room+"."+N.i+"."+W.i,className:"segment",strokeWidth:20,stroke:"#77cfff",strokeLinecap:"round",strokeLinejoin:"round",opacity:.8}))}var j=function(e){var t=e.pathPoints,n=e.visible,o=Object(c.a)(t,2),a=o[0],i=o[1],s=a.x-i.x,l=a.y-i.y,u=Math.round(5*Math.floor(Math.sqrt(s*s+l*l)/5));return n?r.a.createElement("text",{style:{pointerEvents:"none",fill:"#404040"}},r.a.createElement("textPath",{startOffset:"45%",xlinkHref:"#"+a.room+"."+a.i+"."+i.i},u)):null},g=n(11);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){var t=e.door,n=e.i,a=Object(o.useContext)(l).__rooms,i=Object(c.a)(a,2),u=i[0],b=i[1],d=t.pointsIds,p=t.doorCenter,m=u.find((function(e){return e.id===d.a.split(".")[0]})),x=m.getPoints().find((function(e){return e.id===d.a})),O=m.getPoints().find((function(e){return e.id===d.b})),h=y(p,x,O).point;return r.a.createElement(f.DraggableCore,{handle:".doorCenter",onDrag:function(e,t){var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p);o.x+=t.deltaX,o.y+=t.deltaY;var r=y(o,x,O);m.doors[n].doorCenter.x=r.point.x,m.doors[n].doorCenter.y=r.point.y,b(Object(s.a)(u))}},r.a.createElement("circle",{className:"doorCenter",cx:h.x,cy:h.y,r:10,fill:"#ffffaa",stroke:"steelblue",strokeWidth:4}))}var w=function(e){var t,n=e.isSelected,a=e.room,i=e.i,u=Object(o.useContext)(l),p=u.__rooms,y=u.__selectedRoom,O=Object(c.a)(p,2),g=O[0],v=O[1],w=Object(c.a)(y,2),E=(w[0],w[1]);return r.a.createElement(f.DraggableCore,{handle:".room",cancel:".corner, .segment, .doorCenter",disabled:!n,onStop:function(e,t){var n=d(g);a.getPoints().forEach((function(e){n.forEach((function(t){var n=Math.abs(e.absX-t.absX),o=Math.abs(e.absY-t.absY);e.room!==t.room&&(n<=16&&(g[i].points[e.i].x=t.absX-e.offsetX),o<=16&&(g[i].points[e.i].y=t.absY-e.offsetY))}))})),v(Object(s.a)(g))},onDrag:function(e,t){e.preventDefault();var n=Object(s.a)(g);n[i].x+=t.deltaX,n[i].y+=t.deltaY,v(n)}},r.a.createElement("g",{className:"room",id:a.id,transform:"translate(".concat(a.x," ").concat(a.y,")"),onClick:function(){E(a.id)},onKeyDown:function(e){n&&8===e.keyCode&&v((function(e){return e.filter((function(e){return e.id!==a.id}))}))},tabIndex:-1,style:{outline:0}},r.a.createElement(m,{polygon:(t=a.getPoints(),t.map((function(e){return[e.x,e.y].join(" ")})))}),b(a.getPoints()).map((function(e,t){return r.a.createElement(h,{key:t,pathPoints:e,visible:n,segmentIndex:t})})),a.getPoints().map((function(e,t){return r.a.createElement(x,{key:t,point:e,visible:n})})),b(a.getPoints()).map((function(e,t){return r.a.createElement(j,{key:t,pathPoints:e,visible:n})})),a.doors.map((function(e,t){return r.a.createElement(_,{key:t,door:e,i:t})}))))};function E(){var e=Object(o.useContext)(l),t=e.__rooms,n=e.__selectedRoom,a=e.__doors,i=Object(c.a)(t,1)[0],s=Object(c.a)(n,1)[0],f=window.innerWidth,b=window.innerHeight;Object(c.a)(a,1)[0];return r.a.createElement("svg",{id:"plan",width:f,height:b,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},r.a.createElement(u,{width:f,height:b}),i.sort((function(e,t){var n=e.id===s;return n===(t.id===s)?0:n?1:-1})).map((function(e,t){return r.a.createElement(w,{key:e.id,isSelected:s===e.id,room:e,i:t})})))}n(39);var P=n(66),k=n(67);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(){var e=Object(o.useContext)(l),t=e.__quickMenuPosition,n=e.__quickMenuState,a=e.__selectedPathPoints,i=e.__rooms,u=e.__selectedRoom,f=e.__pointer,b=e.__doors,y=e.__pathNode,m=Object(c.a)(t,2),x=m[0],O=m[1],h=Object(c.a)(n,2),j=h[0],g=h[1],v=Object(c.a)(a,2),_=v[0],w=(v[1],Object(c.a)(i,2)),E=w[0],C=w[1],Y=Object(c.a)(u,2),D=(Y[0],Y[1],Object(c.a)(f,1)[0]),M=Object(c.a)(b,2),S=(M[0],M[1],Object(c.a)(y,1)[0],function(e){g(!1),O(null)});return r.a.createElement(P.a,{id:"quickMenu",transitionDuration:{enter:0,exit:0},anchorReference:"anchorPosition",anchorPosition:null!==x?{top:x.y,left:x.x}:void 0,open:j,onClose:S},r.a.createElement(k.a,{onClick:function(e){e.persist(),console.log(e);var t=Object(c.a)(_,2),n=t[0],o=(t[1],E.findIndex((function(e){return e.id===n.room}))),r=D.x-E[o].x,a=D.y-E[o].y,i=p([r,a],_);console.log(i),d(E).forEach((function(e){console.log(i),Math.abs(e.absX-(i.x+E[o].x))<16&&(i.x=e.absX-E[o].x),Math.abs(e.absY-(i.y+E[o].y))<16&&(i.y=e.absY-E[o].y)}));var l=X({},i),u=X({},i);E[o].points.splice(n.i+1,0,l,u),C(Object(s.a)(E)),S()}},"new corner"),r.a.createElement(k.a,{onClick:function(e){var t=Object(c.a)(_,2),n=t[0],o=t[1];console.log(n,o);var r=E.findIndex((function(e){return e.id===n.room})),a=D.x-E[r].x,i=D.y-E[r].y,l=p([a,i],_);console.log(l);var u={pointsIds:{a:n.id,b:o.id},doorCenter:l};E[r].doors.push(u),C(Object(s.a)(E)),S()}},"new door"))};var D=function(){var e=Object(o.useState)(null),t=Object(o.useState)(!1),n=Object(o.useState)([]),a={__quickMenuPosition:e,__quickMenuState:t,__selectedRoom:Object(o.useState)(null),__rooms:n,__selectedPathPoints:Object(o.useState)(null),__pointer:Object(o.useState)(null),__doors:Object(o.useState)([]),__pathNode:Object(o.useState)(null)};return r.a.createElement("div",{className:"App",style:{overscrollBehavior:"none"},onContextMenu:function(e){return e.preventDefault()}},r.a.createElement(l.Provider,{value:a},r.a.createElement(E,null),r.a.createElement(Y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.d66c8df8.chunk.js.map