(this.webpackJsonpelectricad=this.webpackJsonpelectricad||[]).push([[0],{33:function(e,t,n){e.exports=n(44)},38:function(e,t,n){},39:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(5),i=n.n(a),c=(n(38),n(4)),s=n(3),l=Object(o.createContext)(null);function u(e){var t=e.width,n=e.height,a=Object(o.useContext)(l),i=a.__selectedRoom,u=a.__rooms,f=Object(s.a)(u,2),d=f[0],b=f[1],p=i[1],y=function(e){var o=window.prompt("D\xe9nomination de la pi\xe8ce");if(""!==o&&null!==o)if(d.find((function(e){return e.id===o})))alert("Une pi\xe8ce nomm\xe9e ".concat(o," existe d\xe9j\xe0. Cr\xe9ation annul\xe9e !!!"));else{var r={id:o,x:e.clientX?e.clientX-75:t/2,y:e.clientY?e.clientY-75:n/2,points:[{x:0,y:0},{x:0,y:200},{x:200,y:200},{x:200,y:0}],getPoints:function(){var e=this;return this.points.reduce((function(t,n,r){return t[r]={x:n.x,y:n.y,absX:n.x+e.x,absY:n.y+e.y,offsetX:e.x,offsetY:e.y,i:r,room:o,id:"".concat(e.id,".").concat(r)},t}),[])},doors:[],outlets:[]};b([].concat(Object(c.a)(d),[r])),p(r.id)}};return r.a.createElement("rect",{style:{outline:"none"},tabIndex:-1,id:"background",width:t,height:n,fill:"#38a0f9",onDoubleClick:y,onClick:function(){return p(null)},onKeyDown:function(e){78===e.keyCode&&y(e)}})}var f=n(12);function d(e){return e.reduce((function(t,n,o){return t[o]=[n],o>0&&t[o-1].push(n),o===e.length-1&&t[o].push(t[0][0]),t}),[])}function b(e){return e.reduce((function(e,t,n){var o=t.getPoints();return e.push.apply(e,Object(c.a)(o)),e}),[])}var p=function(e,t){var n=Object(s.a)(t,2),o=n[0],r=n[1],a=Object(s.a)(e,2),i=a[0],c=a[1],l=(r.y-o.y)/(r.x-o.x),u=o.y-l*o.x;return 0===l?c=o.y:isFinite(l)?c=l*i+u:i=o.x,{x:i,y:c}};function y(e,t,n){var o=n.x-t.x,r=n.y-t.y,a=o*o+r*r,i=(e.x-t.x)*o+(e.y-t.y)*r,c=Math.min(1,Math.max(0,i/a));return i=(n.x-t.x)*(e.y-t.y)-(n.y-t.y)*(e.x-t.x),{point:{x:t.x+o*c,y:t.y+r*c},left:i<1,dot:i,t:c}}function m(e){var t=e.polygon;return r.a.createElement("polygon",{points:t,fill:"#ffffaa",stroke:"steelblue",strokeWidth:8})}var h=function(e){var t=e.point,n=e.visible,a=Object(o.useContext)(l).__rooms,i=Object(s.a)(a,2),u=i[0],d=i[1],p=u.findIndex((function(e){return e.id===t.room}));return n?r.a.createElement(f.DraggableCore,{handle:".corner",onDrag:function(e,n){u[p].points[t.i].x=t.x+n.deltaX,u[p].points[t.i].y=t.y+n.deltaY,d(Object(c.a)(u))},onStop:function(){b(u).forEach((function(e){e.room===t.room&&e.i===t.i||(Math.abs(t.absX-e.absX)<16&&(u[p].points[t.i].x=e.absX-t.offsetX),Math.abs(t.absY-e.absY)<16&&(u[p].points[t.i].y=e.absY-t.offsetY))})),d(Object(c.a)(u))}},r.a.createElement("g",null,r.a.createElement("circle",{className:"corner",cx:t.x,cy:t.y,r:16,fill:"white",stroke:"#38a0f9",strokeWidth:4}),r.a.createElement("text",{x:t.x,y:t.y,textAnchor:"middle",alignmentBaseline:"central",pointerEvents:"none",fill:"grey"},t.i))):null},x=n(30);function O(e){var t=e.pathPoints,n=e.visible,a=Object(o.useContext)(l),i=a.__quickMenuPosition,u=a.__quickMenuState,d=a.__selectedPathPoints,p=a.__rooms,y=a.__pointer,m=a.__pathNode,h=i[1],O=u[1],j=d[1],g=Object(s.a)(p,2),v=g[0],k=g[1],E=y[1],P=m[1],_=Object(o.useState)(!1),w=Object(s.a)(_,2),C=w[0],D=w[1],M=Object(s.a)(t,2),X=M[0],Y=M[1],S=v.findIndex((function(e){return e.id===X.room})),I=[[X.x,X.y],[Y.x,Y.y]],L=Object(x.a)().x((function(e){return e[0]})).y((function(e){return e[1]})),W=function(e){E({x:e.clientX,y:e.clientY}),e.preventDefault();var n={x:null,y:null};"mouseup"===e.type?(n.x=e.clientX,n.y=e.clientY):(n.x=e.touches[0].pageX,n.y=e.touches[0].pageY),h(n),O((function(e){return!e})),j(t),P(e.target)};return r.a.createElement(f.DraggableCore,{handle:".segment",onDrag:function(e,t){D(!0),X.x+=t.deltaX,X.y+=t.deltaY,Y.x+=t.deltaX,Y.y+=t.deltaY,v[S].points[X.i].x=X.x,v[S].points[X.i].y=X.y,v[S].points[Y.i].x=Y.x,v[S].points[Y.i].y=Y.y,k(Object(c.a)(v))},onStop:function(e,n){if(C){D(!1);var o=b(v);t.forEach((function(e){o.forEach((function(t){e.id!==t.id&&(Math.abs(e.absX-t.absX)<=16&&(v[S].points[e.i].x=t.absX-e.offsetX),Math.abs(e.absY-t.absY)<=16&&(v[S].points[e.i].y=t.absY-e.offsetY))}))})),k(Object(c.a)(v))}else W(e)},cancel:".doorCenter, .outlet"},r.a.createElement("path",{style:n?{visibility:"visible"}:{visibility:"hidden"},d:L(I),id:X.room+"."+X.i+"."+Y.i,className:"segment",strokeWidth:20,stroke:"#77cfff",strokeLinecap:"round",strokeLinejoin:"round",opacity:.8}))}var j=function(e){var t=e.pathPoints,n=e.visible,o=Object(s.a)(t,2),a=o[0],i=o[1],c=a.x-i.x,l=a.y-i.y,u=Math.round(5*Math.floor(Math.sqrt(c*c+l*l)/5));return n?r.a.createElement("text",{style:{pointerEvents:"none",fill:"#404040"}},r.a.createElement("textPath",{startOffset:"45%",xlinkHref:"#"+a.room+"."+a.i+"."+i.i},u)):null},g=n(10);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function k(e){var t=e.door,n=e.i,a=Object(o.useContext)(l).__rooms,i=Object(s.a)(a,2),u=i[0],d=i[1],b=t.pointsIds,p=t.doorCenter,m=t.doorId,h=u.find((function(e){return e.id===b.a.split(".")[0]})),x=h.getPoints().find((function(e){return e.id===b.a})),O=h.getPoints().find((function(e){return e.id===b.b})),j={x:p.x-50,y:p.y-50},k={x:p.x+50,y:p.y+50},E=y(j,x,O).point,P=y(k,x,O).point;return r.a.createElement(f.DraggableCore,{handle:".doorCenter",onDrag:function(e,t){var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p);o.x+=t.deltaX,o.y+=t.deltaY;var r=y(o,x,O);h.doors[n].doorCenter.x=r.point.x,h.doors[n].doorCenter.y=r.point.y,d(Object(c.a)(u))}},r.a.createElement("line",{className:"doorCenter",id:m,x1:E.x,y1:E.y,x2:P.x,y2:P.y,fill:"#ffffaa",stroke:"#ffffaa",strokeWidth:8}))}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var P=function(e){var t=e.outlet,n=e.i,a=Object(o.useContext)(l).__rooms,i=Object(s.a)(a,2),u=i[0],d=i[1],b=t.anchorPoint,p=t.pointsIds,m=(t.outletId,u.find((function(e){return e.id===p.a.split(".")[0]}))),h=m.getPoints().find((function(e){return e.id===p.a})),x=m.getPoints().find((function(e){return e.id===p.b})),O=y(b,h,x).point,j=180*Math.atan2(x.y-h.y,x.x-h.x)/Math.PI-90;return r.a.createElement(f.DraggableCore,{handle:".outlet",onDrag:function(e,t){var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},b);o.x+=t.deltaX,o.y+=t.deltaY;var r=y(o,h,x);m.outlets[n].anchorPoint.x=r.point.x,m.outlets[n].anchorPoint.y=r.point.y,d(Object(c.a)(u))}},r.a.createElement("g",{className:"outlet",style:{pointerEvents:"all"}},">",r.a.createElement("g",null,r.a.createElement("g",{id:"1",transform:"translate(".concat(O.x," ").concat(O.y,") scale(1.75) rotate(").concat(j,")")},r.a.createElement("g",{id:"2",transform:"translate(2 2)"},r.a.createElement("path",{d:"M3.54 11.58 L3.54 0.24",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,fill:"none"}),r.a.createElement("path",{d:"M8.27 1.2 L8.27 0.25",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,fill:"none"}),r.a.createElement("path",{d:"M8.27 11.6 L8.27 10.65",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,fill:"none"}),r.a.createElement("path",{d:"M8.27 10.65 A4.72441 4.72441 0 0 1 3.55 5.93 A4.72441 4.72441 0 0 1 8.27 1.2",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,fill:"none"}),r.a.createElement("path",{d:"M3.54 5.92 L-0 5.92",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,fill:"none"}))))))};var _=function(e){var t,n=e.isSelected,a=e.room,i=e.i,u=Object(o.useContext)(l),p=u.__rooms,y=u.__selectedRoom,x=Object(s.a)(p,2),g=x[0],v=x[1],E=y[1];return r.a.createElement(f.DraggableCore,{handle:".room",cancel:".corner, .segment, .doorCenter, .outlet",disabled:!n,onStop:function(){var e=b(g);a.getPoints().forEach((function(t){e.forEach((function(e){var n=Math.abs(t.absX-e.absX),o=Math.abs(t.absY-e.absY);t.room!==e.room&&(n<=16&&(g[i].points[t.i].x=e.absX-t.offsetX),o<=16&&(g[i].points[t.i].y=e.absY-t.offsetY))}))})),v(Object(c.a)(g))},onDrag:function(e,t){e.preventDefault();var n=Object(c.a)(g);n[i].x+=t.deltaX,n[i].y+=t.deltaY,v(n)}},r.a.createElement("g",{className:"room",id:a.id,transform:"translate(".concat(a.x," ").concat(a.y,")"),onClick:function(){E(a.id)},onKeyDown:function(e){n&&8===e.keyCode&&v((function(e){return e.filter((function(e){return e.id!==a.id}))}))},tabIndex:-1,style:{outline:0}},r.a.createElement(m,{polygon:(t=a.getPoints(),t.map((function(e){return[e.x,e.y].join(" ")})))}),d(a.getPoints()).map((function(e,t){return r.a.createElement(O,{key:t,pathPoints:e,visible:n})})),a.getPoints().map((function(e,t){return r.a.createElement(h,{key:t,point:e,visible:n})})),d(a.getPoints()).map((function(e,t){return r.a.createElement(j,{key:t,pathPoints:e,visible:n})})),a.outlets.map((function(e,t){return r.a.createElement(P,{key:t,outlet:e,i:t})})),a.doors.map((function(e,t){return r.a.createElement(k,{key:t,door:e,i:t})}))))};function w(){var e=Object(o.useContext)(l),t=e.__rooms,n=e.__selectedRoom,a=Object(s.a)(t,1)[0],i=Object(s.a)(n,1)[0],f=window.innerWidth,d=window.innerHeight;return r.a.createElement("svg",{id:"plan",width:f,height:d,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},r.a.createElement(u,{width:f,height:d}),a.sort((function(e,t){var n=e.id===i;return n===(t.id===i)?0:n?1:-1})).map((function(e,t){return r.a.createElement(_,{key:e.id,isSelected:i===e.id,room:e,i:t})})),a.reduce((function(e,t,n){return e.push.apply(e,Object(c.a)(t.doors)),e}),[]).map((function(e,t){var n=a.find((function(t){return t.id===e.doorId.split(".")[0]}));return console.log("#"+e.doorId),r.a.createElement("use",{key:t,xlinkHref:"#"+e.doorId,transform:"translate(".concat(n.x," ").concat(n.y,")")})})))}n(39);var C=n(66),D=n(67);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(){var e=Object(o.useContext)(l),t=e.__quickMenuPosition,n=e.__quickMenuState,a=e.__selectedPathPoints,i=e.__rooms,u=e.__pointer,f=Object(s.a)(t,2),d=f[0],y=f[1],m=Object(s.a)(n,2),h=m[0],x=m[1],O=Object(s.a)(a,1)[0],j=Object(s.a)(i,2),g=j[0],v=j[1],k=Object(s.a)(u,1)[0],E=function(){x(!1),y(null)};return r.a.createElement(C.a,{id:"quickMenu",transitionDuration:{enter:0,exit:0},anchorReference:"anchorPosition",anchorPosition:null!==d?{top:d.y,left:d.x}:void 0,open:h,onClose:E},r.a.createElement(D.a,{onClick:function(e){e.persist();var t=Object(s.a)(O,1)[0],n=g.findIndex((function(e){return e.id===t.room})),o=k.x-g[n].x,r=k.y-g[n].y,a=p([o,r],O);b(g).forEach((function(e){Math.abs(e.absX-(a.x+g[n].x))<16&&(a.x=e.absX-g[n].x),Math.abs(e.absY-(a.y+g[n].y))<16&&(a.y=e.absY-g[n].y)}));var i=X({},a),l=X({},a);g[n].points.splice(t.i+1,0,i,l),v(Object(c.a)(g)),E()}},"new corner"),r.a.createElement(D.a,{onClick:function(){var e=Object(s.a)(O,2),t=e[0],n=e[1],o=g.findIndex((function(e){return e.id===t.room})),r=k.x-g[o].x,a=k.y-g[o].y,i=p([r,a],O),l=g[o].id+".door."+g[o].doors.length,u={pointsIds:{a:t.id,b:n.id},doorCenter:i,doorId:l};g[o].doors.push(u),v(Object(c.a)(g)),E()}},"new door"),r.a.createElement(D.a,{onClick:function(e){var t=Object(s.a)(O,2),n=t[0],o=t[1],r=g.find((function(e){return e.id===n.room})),a=k.x-r.x,i=k.y-r.y,l={a:n.id,b:o.id},u={anchorPoint:p([a,i],O),pointsIds:l,outletId:r.id+".outlet."+r.outlets.length};r.outlets.push(u),v(Object(c.a)(g)),E()}},"new outlet"))};var S=function(){var e=Object(o.useState)(null),t=Object(o.useState)(!1),n=Object(o.useState)([]),a={__quickMenuPosition:e,__quickMenuState:t,__selectedRoom:Object(o.useState)(null),__rooms:n,__selectedPathPoints:Object(o.useState)(null),__pointer:Object(o.useState)(null),__doors:Object(o.useState)([]),__pathNode:Object(o.useState)(null)};return r.a.createElement("div",{className:"App",style:{overscrollBehavior:"none"},onContextMenu:function(e){return e.preventDefault()}},r.a.createElement(l.Provider,{value:a},r.a.createElement(w,null),r.a.createElement(Y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.e522bd09.chunk.js.map