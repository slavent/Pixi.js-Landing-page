require=(function e(b,g,d){function c(m,j){if(!g[m]){if(!b[m]){var i=typeof require=="function"&&require;if(!j&&i){return i(m,!0)}if(a){return a(m,!0)}var k=new Error("Cannot find module '"+m+"'");throw k.code="MODULE_NOT_FOUND",k}var h=g[m]={exports:{}};b[m][0].call(h.exports,function(l){var o=b[m][1][l];return c(o?o:l)},h,h.exports,e,b,g,d)}return g[m].exports}var a=typeof require=="function"&&require;for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(b,c,a){(function(d){
/*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */
(function(){var j={};var v,q;v=this;if(v!=null){q=v.async}j.noConflict=function(){v.async=q;return j};function x(C){var D=false;return function(){if(D){throw new Error("Callback was already called.")}D=true;C.apply(v,arguments)}}var B=Object.prototype.toString;var m=Array.isArray||function(C){return B.call(C)==="[object Array]"};var y=function(C,E){if(C.forEach){return C.forEach(E)}for(var D=0;D<C.length;D+=1){E(C[D],D,C)}};var f=function(C,E){if(C.map){return C.map(E)}var D=[];y(C,function(F,H,G){D.push(E(F,H,G))});return D};var A=function(C,E,D){if(C.reduce){return C.reduce(E,D)}y(C,function(F,H,G){D=E(D,F,H,G)});return D};var h=function(E){if(Object.keys){return Object.keys(E)}var D=[];for(var C in E){if(E.hasOwnProperty(C)){D.push(C)}}return D};if(typeof d==="undefined"||!(d.nextTick)){if(typeof setImmediate==="function"){j.nextTick=function(C){setImmediate(C)};j.setImmediate=j.nextTick}else{j.nextTick=function(C){setTimeout(C,0)};j.setImmediate=j.nextTick}}else{j.nextTick=d.nextTick;if(typeof setImmediate!=="undefined"){j.setImmediate=function(C){setImmediate(C)}}else{j.setImmediate=j.nextTick}}j.each=function(C,F,G){G=G||function(){};if(!C.length){return G()}var E=0;y(C,function(H){F(H,x(D))});function D(H){if(H){G(H);G=function(){}}else{E+=1;if(E>=C.length){G()}}}};j.forEach=j.each;j.eachSeries=function(C,F,G){G=G||function(){};if(!C.length){return G()}var E=0;var D=function(){F(C[E],function(H){if(H){G(H);G=function(){}}else{E+=1;if(E>=C.length){G()}else{D()}}})};D()};j.forEachSeries=j.eachSeries;j.eachLimit=function(C,D,F,G){var E=l(D);E.apply(null,[C,F,G])};j.forEachLimit=j.eachLimit;var l=function(C){return function(D,H,J){J=J||function(){};if(!D.length||C<=0){return J()}var G=0;var E=0;var F=0;(function I(){if(G>=D.length){return J()}while(F<C&&E<D.length){E+=1;F+=1;H(D[E-1],function(K){if(K){J(K);J=function(){}}else{G+=1;F-=1;if(G>=D.length){J()}else{I()}}})}})()}};var w=function(C){return function(){var D=Array.prototype.slice.call(arguments);return C.apply(null,[j.each].concat(D))}};var u=function(C,D){return function(){var E=Array.prototype.slice.call(arguments);return D.apply(null,[l(C)].concat(E))}};var s=function(C){return function(){var D=Array.prototype.slice.call(arguments);return C.apply(null,[j.eachSeries].concat(D))}};var n=function(F,C,E,G){C=f(C,function(H,I){return{index:I,value:H}});if(!G){F(C,function(H,I){E(H.value,function(J){I(J)})})}else{var D=[];F(C,function(H,I){E(H.value,function(K,J){D[H.index]=J;I(K)})},function(H){G(H,D)})}};j.map=w(n);j.mapSeries=s(n);j.mapLimit=function(C,D,E,F){return i(D)(C,E,F)};var i=function(C){return u(C,n)};j.reduce=function(C,D,E,F){j.eachSeries(C,function(G,H){E(D,G,function(J,I){D=I;H(J)})},function(G){F(G,D)})};j.inject=j.reduce;j.foldl=j.reduce;j.reduceRight=function(C,D,E,G){var F=f(C,function(H){return H}).reverse();j.reduce(F,D,E,G)};j.foldr=j.reduceRight;var z=function(F,C,E,G){var D=[];C=f(C,function(H,I){return{index:I,value:H}});F(C,function(H,I){E(H.value,function(J){if(J){D.push(H)}I()})},function(H){G(f(D.sort(function(J,I){return J.index-I.index}),function(I){return I.value}))})};j.filter=w(z);j.filterSeries=s(z);j.select=j.filter;j.selectSeries=j.filterSeries;var r=function(F,C,E,G){var D=[];C=f(C,function(H,I){return{index:I,value:H}});F(C,function(H,I){E(H.value,function(J){if(!J){D.push(H)}I()})},function(H){G(f(D.sort(function(J,I){return J.index-I.index}),function(I){return I.value}))})};j.reject=w(r);j.rejectSeries=s(r);var k=function(E,C,D,F){E(C,function(G,H){D(G,function(I){if(I){F(G);F=function(){}}else{H()}})},function(G){F()})};j.detect=w(k);j.detectSeries=s(k);j.some=function(C,D,E){j.each(C,function(F,G){D(F,function(H){if(H){E(true);E=function(){}}G()})},function(F){E(false)})};j.any=j.some;j.every=function(C,D,E){j.each(C,function(F,G){D(F,function(H){if(!H){E(false);E=function(){}}G()})},function(F){E(true)})};j.all=j.every;j.sortBy=function(C,D,E){j.map(C,function(F,G){D(F,function(H,I){if(H){G(H)}else{G(null,{value:F,criteria:I})}})},function(H,F){if(H){return E(H)}else{var G=function(L,K){var J=L.criteria,I=K.criteria;return J<I?-1:J>I?1:0};E(null,f(F.sort(G),function(I){return I.value}))}})};j.auto=function(E,J){J=J||function(){};var K=h(E);var D=K.length;if(!D){return J()}var G={};var I=[];var C=function(L){I.unshift(L)};var F=function(M){for(var L=0;L<I.length;L+=1){if(I[L]===M){I.splice(L,1);return}}};var H=function(){D--;y(I.slice(0),function(L){L()})};C(function(){if(!D){var L=J;J=function(){};L(null,G)}});y(K,function(M){var L=m(E[M])?E[M]:[E[M]];var Q=function(T){var R=Array.prototype.slice.call(arguments,1);if(R.length<=1){R=R[0]}if(T){var S={};y(h(G),function(U){S[U]=G[U]});S[M]=R;J(T,S);J=function(){}}else{G[M]=R;j.setImmediate(H)}};var O=L.slice(0,Math.abs(L.length-1))||[];var N=function(){return A(O,function(S,R){return(S&&G.hasOwnProperty(R))},true)&&!G.hasOwnProperty(M)};if(N()){L[L.length-1](Q,G)}else{var P=function(){if(N()){F(P);L[L.length-1](Q,G)}};C(P)}})};j.retry=function(G,C,H){var E=5;var D=[];if(typeof G==="function"){H=C;C=G;G=E}G=parseInt(G,10)||E;var F=function(K,I){var J=function(L,M){return function(N){L(function(P,O){N(!P||M,{err:P,result:O})},I)}};while(G){D.push(J(C,!(G-=1)))}j.series(D,function(L,M){M=M[M.length-1];(K||H)(M.err,M.result)})};return H?F():F};j.waterfall=function(F,E){E=E||function(){};if(!m(F)){var C=new Error("First argument to waterfall must be an array of functions");return E(C)}if(!F.length){return E()}var D=function(G){return function(J){if(J){E.apply(null,arguments);E=function(){}}else{var H=Array.prototype.slice.call(arguments,1);var I=G.next();if(I){H.push(D(I))}else{H.push(E)}j.setImmediate(function(){G.apply(null,H)})}}};D(j.iterator(F))()};var g=function(D,F,E){E=E||function(){};if(m(F)){D.map(F,function(G,H){if(G){G(function(J){var I=Array.prototype.slice.call(arguments,1);if(I.length<=1){I=I[0]}H.call(null,J,I)})}},E)}else{var C={};D.each(h(F),function(G,H){F[G](function(J){var I=Array.prototype.slice.call(arguments,1);if(I.length<=1){I=I[0]}C[G]=I;H(J)})},function(G){E(G,C)})}};j.parallel=function(D,C){g({map:j.map,each:j.each},D,C)};j.parallelLimit=function(E,C,D){g({map:i(C),each:l(C)},E,D)};j.series=function(E,D){D=D||function(){};if(m(E)){j.mapSeries(E,function(F,G){if(F){F(function(I){var H=Array.prototype.slice.call(arguments,1);if(H.length<=1){H=H[0]}G.call(null,I,H)})}},D)}else{var C={};j.eachSeries(h(E),function(F,G){E[F](function(I){var H=Array.prototype.slice.call(arguments,1);if(H.length<=1){H=H[0]}C[F]=H;G(I)})},function(F){D(F,C)})}};j.iterator=function(D){var C=function(E){var F=function(){if(D.length){D[E].apply(null,arguments)}return F.next()};F.next=function(){return(E<D.length-1)?C(E+1):null};return F};return C(0)};j.apply=function(D){var C=Array.prototype.slice.call(arguments,1);return function(){return D.apply(null,C.concat(Array.prototype.slice.call(arguments)))}};var t=function(F,C,D,G){var E=[];F(C,function(I,H){D(I,function(J,K){E=E.concat(K||[]);H(J)})},function(H){G(H,E)})};j.concat=w(t);j.concatSeries=s(t);j.whilst=function(E,C,D){if(E()){C(function(F){if(F){return D(F)}j.whilst(E,C,D)})}else{D()}};j.doWhilst=function(C,E,D){C(function(G){if(G){return D(G)}var F=Array.prototype.slice.call(arguments,1);if(E.apply(null,F)){j.doWhilst(C,E,D)}else{D()}})};j.until=function(E,C,D){if(!E()){C(function(F){if(F){return D(F)}j.until(E,C,D)})}else{D()}};j.doUntil=function(C,E,D){C(function(G){if(G){return D(G)}var F=Array.prototype.slice.call(arguments,1);if(!E.apply(null,F)){j.doUntil(C,E,D)}else{D()}})};j.queue=function(G,E){if(E===undefined){E=1}function C(I,H,K,J){if(!I.started){I.started=true}if(!m(H)){H=[H]}if(H.length==0){return j.setImmediate(function(){if(I.drain){I.drain()}})}y(H,function(L){var M={data:L,callback:typeof J==="function"?J:null};if(K){I.tasks.unshift(M)}else{I.tasks.push(M)}if(I.saturated&&I.tasks.length===I.concurrency){I.saturated()}j.setImmediate(I.process)})}var D=0;var F={tasks:[],concurrency:E,saturated:null,empty:null,drain:null,started:false,paused:false,push:function(H,I){C(F,H,false,I)},kill:function(){F.drain=null;F.tasks=[]},unshift:function(H,I){C(F,H,true,I)},process:function(){if(!F.paused&&D<F.concurrency&&F.tasks.length){var I=F.tasks.shift();if(F.empty&&F.tasks.length===0){F.empty()}D+=1;var J=function(){D-=1;if(I.callback){I.callback.apply(I,arguments)}if(F.drain&&F.tasks.length+D===0){F.drain()}F.process()};var H=x(J);G(I.data,H)}},length:function(){return F.tasks.length},running:function(){return D},idle:function(){return F.tasks.length+D===0},pause:function(){if(F.paused===true){return}F.paused=true;F.process()},resume:function(){if(F.paused===false){return}F.paused=false;F.process()}};return F};j.priorityQueue=function(H,F){function E(J,I){return J.priority-I.priority}function D(N,L,M){var K=-1,I=N.length-1;while(K<I){var J=K+((I-K+1)>>>1);if(M(L,N[J])>=0){K=J}else{I=J-1}}return K}function C(K,J,I,L){if(!K.started){K.started=true}if(!m(J)){J=[J]}if(J.length==0){return j.setImmediate(function(){if(K.drain){K.drain()}})}y(J,function(M){var N={data:M,priority:I,callback:typeof L==="function"?L:null};K.tasks.splice(D(K.tasks,N,E)+1,0,N);if(K.saturated&&K.tasks.length===K.concurrency){K.saturated()}j.setImmediate(K.process)})}var G=j.queue(H,F);G.push=function(J,I,K){C(G,J,I,K)};delete G.unshift;return G};j.cargo=function(G,F){var C=false,H=[];var D={tasks:H,payload:F,saturated:null,empty:null,drain:null,drained:true,push:function(I,J){if(!m(I)){I=[I]}y(I,function(K){H.push({data:K,callback:typeof J==="function"?J:null});D.drained=false;if(D.saturated&&H.length===F){D.saturated()}});j.setImmediate(D.process)},process:function E(){if(C){return}if(H.length===0){if(D.drain&&!D.drained){D.drain()}D.drained=true;return}var I=typeof F==="number"?H.splice(0,F):H.splice(0,H.length);var J=f(I,function(K){return K.data});if(D.empty){D.empty()}C=true;G(J,function(){C=false;var K=arguments;y(I,function(L){if(L.callback){L.callback.apply(null,K)}});E()})},length:function(){return H.length},running:function(){return C}};return D};var o=function(C){return function(E){var D=Array.prototype.slice.call(arguments,1);E.apply(null,D.concat([function(G){var F=Array.prototype.slice.call(arguments,1);if(typeof console!=="undefined"){if(G){if(console.error){console.error(G)}}else{if(console[C]){y(F,function(H){console[C](H)})}}}}]))}};j.log=o("log");j.dir=o("dir");j.memoize=function(G,E){var D={};var F={};E=E||function(H){return H};var C=function(){var H=Array.prototype.slice.call(arguments);var J=H.pop();var I=E.apply(null,H);if(I in D){j.nextTick(function(){J.apply(null,D[I])})}else{if(I in F){F[I].push(J)}else{F[I]=[J];G.apply(null,H.concat([function(){D[I]=arguments;var M=F[I];delete F[I];for(var L=0,K=M.length;L<K;L++){M[L].apply(null,arguments)}}]))}}};C.memo=D;C.unmemoized=G;return C};j.unmemoize=function(C){return function(){return(C.unmemoized||C).apply(null,arguments)}};j.times=function(F,E,G){var C=[];for(var D=0;D<F;D++){C.push(D)}return j.map(C,E,G)};j.timesSeries=function(F,E,G){var C=[];for(var D=0;D<F;D++){C.push(D)}return j.mapSeries(C,E,G)};j.seq=function(){var C=arguments;return function(){var E=this;var D=Array.prototype.slice.call(arguments);var F=D.pop();j.reduce(C,D,function(H,I,G){I.apply(E,H.concat([function(){var K=arguments[0];var J=Array.prototype.slice.call(arguments,1);G(K,J)}]))},function(H,G){F.apply(E,[H].concat(G))})}};j.compose=function(){return j.seq.apply(null,Array.prototype.reverse.call(arguments))};var p=function(F,D){var E=function(){var H=this;var G=Array.prototype.slice.call(arguments);var I=G.pop();return F(D,function(K,J){K.apply(H,G.concat([J]))},I)};if(arguments.length>2){var C=Array.prototype.slice.call(arguments,2);return E.apply(this,C)}else{return E}};j.applyEach=w(p);j.applyEachSeries=s(p);j.forever=function(D,E){function C(F){if(F){if(E){return E(F)}throw F}D(C)}C()};if(typeof c!=="undefined"&&c.exports){c.exports=j}else{if(typeof define!=="undefined"&&define.amd){define([],function(){return j})}else{v.async=j}}}())}).call(this,b("_process"))},{_process:3}],2:[function(b,c,a){(function(j){function h(o,l){var k=0;for(var m=o.length-1;m>=0;m--){var n=o[m];if(n==="."){o.splice(m,1)}else{if(n===".."){o.splice(m,1);k++}else{if(k){o.splice(m,1);k--}}}}if(l){for(;k--;k){o.unshift("..")}}return o}var g=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;var d=function(k){return g.exec(k).slice(1)};a.resolve=function(){var m="",k=false;for(var l=arguments.length-1;l>=-1&&!k;l--){var n=(l>=0)?arguments[l]:j.cwd();if(typeof n!=="string"){throw new TypeError("Arguments to path.resolve must be strings")}else{if(!n){continue}}m=n+"/"+m;k=n.charAt(0)==="/"}m=h(f(m.split("/"),function(o){return !!o}),!k).join("/");return((k?"/":"")+m)||"."};a.normalize=function(m){var l=a.isAbsolute(m),k=i(m,-1)==="/";m=h(f(m.split("/"),function(n){return !!n}),!l).join("/");if(!m&&!l){m="."}if(m&&k){m+="/"}return(l?"/":"")+m};a.isAbsolute=function(k){return k.charAt(0)==="/"};a.join=function(){var k=Array.prototype.slice.call(arguments,0);return a.normalize(f(k,function(m,l){if(typeof m!=="string"){throw new TypeError("Arguments to path.join must be strings")}return m}).join("/"))};a.relative=function(q,r){q=a.resolve(q).substr(1);r=a.resolve(r).substr(1);function m(t){var v=0;for(;v<t.length;v++){if(t[v]!==""){break}}var u=t.length-1;for(;u>=0;u--){if(t[u]!==""){break}}if(v>u){return[]}return t.slice(v,u-v+1)}var p=m(q.split("/"));var l=m(r.split("/"));var k=Math.min(p.length,l.length);var s=k;for(var o=0;o<k;o++){if(p[o]!==l[o]){s=o;break}}var n=[];for(var o=s;o<p.length;o++){n.push("..")}n=n.concat(l.slice(s));return n.join("/")};a.sep="/";a.delimiter=":";a.dirname=function(n){var k=d(n),l=k[0],m=k[1];if(!l&&!m){return"."}if(m){m=m.substr(0,m.length-1)}return l+m};a.basename=function(m,k){var l=d(m)[2];if(k&&l.substr(-1*k.length)===k){l=l.substr(0,l.length-k.length)}return l};a.extname=function(k){return d(k)[3]};function f(k,n){if(k.filter){return k.filter(n)}var m=[];for(var l=0;l<k.length;l++){if(n(k[l],l,k)){m.push(k[l])}}return m}var i="ab".substr(-1)==="b"?function(l,m,k){return l.substr(m,k)}:function(l,m,k){if(m<0){m=l.length+m}return l.substr(m,k)}}).call(this,b("_process"))},{_process:3}],3:[function(c,d,b){var h=d.exports={};var a=[];var i=false;function g(){if(i){return}i=true;var l;var j=a.length;while(j){l=a;a=[];var k=-1;while(++k<j){l[k]()}j=a.length}i=false}h.nextTick=function(j){a.push(j);if(!i){setTimeout(g,0)}};h.title="browser";h.browser=true;h.env={};h.argv=[];h.version="";h.versions={};function f(){}h.on=f;h.addListener=f;h.once=f;h.off=f;h.removeListener=f;h.removeAllListeners=f;h.emit=f;h.binding=function(j){throw new Error("process.binding is not supported")};h.cwd=function(){return"/"};h.chdir=function(j){throw new Error("process.chdir is not supported")};h.umask=function(){return 0}},{}],4:[function(d,c,f){function m(p,n,o){this.fn=p;this.context=n;this.once=o||false}function l(){}l.prototype._events=undefined;l.prototype.listeners=function i(r,q){var t="~"+r,s=this._events&&this._events[t];if(q){return !!s}if(!s){return[]}if(this._events[t].fn){return[this._events[t].fn]}for(var p=0,o=this._events[t].length,n=new Array(o);p<o;p++){n[p]=this._events[t][p].fn}return n};l.prototype.emit=function j(o,q,p,n,z,y){var u="~"+o;if(!this._events||!this._events[u]){return false}var x=this._events[u],v=arguments.length,w,t;if("function"===typeof x.fn){if(x.once){this.removeListener(o,x.fn,undefined,true)}switch(v){case 1:return x.fn.call(x.context),true;case 2:return x.fn.call(x.context,q),true;case 3:return x.fn.call(x.context,q,p),true;case 4:return x.fn.call(x.context,q,p,n),true;case 5:return x.fn.call(x.context,q,p,n,z),true;case 6:return x.fn.call(x.context,q,p,n,z,y),true}for(t=1,w=new Array(v-1);t<v;t++){w[t-1]=arguments[t]}x.fn.apply(x.context,w)}else{var r=x.length,s;for(t=0;t<r;t++){if(x[t].once){this.removeListener(o,x[t].fn,undefined,true)}switch(v){case 1:x[t].fn.call(x[t].context);break;case 2:x[t].fn.call(x[t].context,q);break;case 3:x[t].fn.call(x[t].context,q,p);break;default:if(!w){for(s=1,w=new Array(v-1);s<v;s++){w[s-1]=arguments[s]}}x[t].fn.apply(x[t].context,w)}}}return true};l.prototype.on=function h(p,o,n){var r=new m(o,n||this),q="~"+p;if(!this._events){this._events={}}if(!this._events[q]){this._events[q]=r}else{if(!this._events[q].fn){this._events[q].push(r)}else{this._events[q]=[this._events[q],r]}}return this};l.prototype.once=function b(p,o,n){var r=new m(o,n||this,true),q="~"+p;if(!this._events){this._events={}}if(!this._events[q]){this._events[q]=r}else{if(!this._events[q].fn){this._events[q].push(r)}else{this._events[q]=[this._events[q],r]}}return this};l.prototype.removeListener=function g(n,u,p,o){var s="~"+n;if(!this._events||!this._events[s]){return this}var t=this._events[s],v=[];if(u){if(t.fn){if(t.fn!==u||(o&&!t.once)||(p&&t.context!==p)){v.push(t)}}else{for(var r=0,q=t.length;r<q;r++){if(t[r].fn!==u||(o&&!t[r].once)||(p&&t[r].context!==p)){v.push(t[r])}}}}if(v.length){this._events[s]=v.length===1?v[0]:v}else{delete this._events[s]}return this};l.prototype.removeAllListeners=function k(n){if(!this._events){return this}if(n){delete this._events["~"+n]}else{this._events={}}return this};l.prototype.off=l.prototype.removeListener;l.prototype.addListener=l.prototype.on;l.prototype.setMaxListeners=function a(){return this};c.exports=l},{}],5:[function(b,c,a){function d(f){if(f==null){throw new TypeError("Object.assign cannot be called with null or undefined")}return Object(f)}c.exports=Object.assign||function(k,j){var m;var h;var l=d(k);for(var g=1;g<arguments.length;g++){m=arguments[g];h=Object.keys(Object(m));for(var f=0;f<h.length;f++){l[h[f]]=m[h[f]]}}return l}},{}],6:[function(b,c,a){(function(d){
/*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */
(function(){var j={};var v,q;v=this;if(v!=null){q=v.async}j.noConflict=function(){v.async=q;return j};function x(C){var D=false;return function(){if(D){throw new Error("Callback was already called.")}D=true;C.apply(v,arguments)}}var B=Object.prototype.toString;var m=Array.isArray||function(C){return B.call(C)==="[object Array]"};var y=function(C,E){if(C.forEach){return C.forEach(E)}for(var D=0;D<C.length;D+=1){E(C[D],D,C)}};var f=function(C,E){if(C.map){return C.map(E)}var D=[];y(C,function(F,H,G){D.push(E(F,H,G))});return D};var A=function(C,E,D){if(C.reduce){return C.reduce(E,D)}y(C,function(F,H,G){D=E(D,F,H,G)});return D};var h=function(E){if(Object.keys){return Object.keys(E)}var D=[];for(var C in E){if(E.hasOwnProperty(C)){D.push(C)}}return D};if(typeof d==="undefined"||!(d.nextTick)){if(typeof setImmediate==="function"){j.nextTick=function(C){setImmediate(C)};j.setImmediate=j.nextTick}else{j.nextTick=function(C){setTimeout(C,0)};j.setImmediate=j.nextTick}}else{j.nextTick=d.nextTick;if(typeof setImmediate!=="undefined"){j.setImmediate=function(C){setImmediate(C)}}else{j.setImmediate=j.nextTick}}j.each=function(C,F,G){G=G||function(){};if(!C.length){return G()}var E=0;y(C,function(H){F(H,x(D))});function D(H){if(H){G(H);G=function(){}}else{E+=1;if(E>=C.length){G()}}}};j.forEach=j.each;j.eachSeries=function(C,F,G){G=G||function(){};if(!C.length){return G()}var E=0;var D=function(){F(C[E],function(H){if(H){G(H);G=function(){}}else{E+=1;if(E>=C.length){G()}else{D()}}})};D()};j.forEachSeries=j.eachSeries;j.eachLimit=function(C,D,F,G){var E=l(D);E.apply(null,[C,F,G])};j.forEachLimit=j.eachLimit;var l=function(C){return function(D,H,J){J=J||function(){};if(!D.length||C<=0){return J()}var G=0;var E=0;var F=0;(function I(){if(G>=D.length){return J()}while(F<C&&E<D.length){E+=1;F+=1;H(D[E-1],function(K){if(K){J(K);J=function(){}}else{G+=1;F-=1;if(G>=D.length){J()}else{I()}}})}})()}};var w=function(C){return function(){var D=Array.prototype.slice.call(arguments);return C.apply(null,[j.each].concat(D))}};var u=function(C,D){return function(){var E=Array.prototype.slice.call(arguments);return D.apply(null,[l(C)].concat(E))}};var s=function(C){return function(){var D=Array.prototype.slice.call(arguments);return C.apply(null,[j.eachSeries].concat(D))}};var n=function(F,C,E,G){C=f(C,function(H,I){return{index:I,value:H}});if(!G){F(C,function(H,I){E(H.value,function(J){I(J)})})}else{var D=[];F(C,function(H,I){E(H.value,function(K,J){D[H.index]=J;I(K)})},function(H){G(H,D)})}};j.map=w(n);j.mapSeries=s(n);j.mapLimit=function(C,D,E,F){return i(D)(C,E,F)};var i=function(C){return u(C,n)};j.reduce=function(C,D,E,F){j.eachSeries(C,function(G,H){E(D,G,function(J,I){D=I;H(J)})},function(G){F(G,D)})};j.inject=j.reduce;j.foldl=j.reduce;j.reduceRight=function(C,D,E,G){var F=f(C,function(H){return H}).reverse();j.reduce(F,D,E,G)};j.foldr=j.reduceRight;var z=function(F,C,E,G){var D=[];C=f(C,function(H,I){return{index:I,value:H}});F(C,function(H,I){E(H.value,function(J){if(J){D.push(H)}I()})},function(H){G(f(D.sort(function(J,I){return J.index-I.index}),function(I){return I.value}))})};j.filter=w(z);j.filterSeries=s(z);j.select=j.filter;j.selectSeries=j.filterSeries;var r=function(F,C,E,G){var D=[];C=f(C,function(H,I){return{index:I,value:H}});F(C,function(H,I){E(H.value,function(J){if(!J){D.push(H)}I()})},function(H){G(f(D.sort(function(J,I){return J.index-I.index}),function(I){return I.value}))})};j.reject=w(r);j.rejectSeries=s(r);var k=function(E,C,D,F){E(C,function(G,H){D(G,function(I){if(I){F(G);F=function(){}}else{H()}})},function(G){F()})};j.detect=w(k);j.detectSeries=s(k);j.some=function(C,D,E){j.each(C,function(F,G){D(F,function(H){if(H){E(true);E=function(){}}G()})},function(F){E(false)})};j.any=j.some;j.every=function(C,D,E){j.each(C,function(F,G){D(F,function(H){if(!H){E(false);E=function(){}}G()})},function(F){E(true)})};j.all=j.every;j.sortBy=function(C,D,E){j.map(C,function(F,G){D(F,function(H,I){if(H){G(H)}else{G(null,{value:F,criteria:I})}})},function(H,F){if(H){return E(H)}else{var G=function(L,K){var J=L.criteria,I=K.criteria;return J<I?-1:J>I?1:0};E(null,f(F.sort(G),function(I){return I.value}))}})};j.auto=function(E,J){J=J||function(){};var K=h(E);var D=K.length;if(!D){return J()}var G={};var I=[];var C=function(L){I.unshift(L)};var F=function(M){for(var L=0;L<I.length;L+=1){if(I[L]===M){I.splice(L,1);return}}};var H=function(){D--;y(I.slice(0),function(L){L()})};C(function(){if(!D){var L=J;J=function(){};L(null,G)}});y(K,function(M){var L=m(E[M])?E[M]:[E[M]];var Q=function(T){var R=Array.prototype.slice.call(arguments,1);if(R.length<=1){R=R[0]}if(T){var S={};y(h(G),function(U){S[U]=G[U]});S[M]=R;J(T,S);J=function(){}}else{G[M]=R;j.setImmediate(H)}};var O=L.slice(0,Math.abs(L.length-1))||[];var N=function(){return A(O,function(S,R){return(S&&G.hasOwnProperty(R))},true)&&!G.hasOwnProperty(M)};if(N()){L[L.length-1](Q,G)}else{var P=function(){if(N()){F(P);L[L.length-1](Q,G)}};C(P)}})};j.retry=function(G,C,H){var E=5;var D=[];if(typeof G==="function"){H=C;C=G;G=E}G=parseInt(G,10)||E;var F=function(K,I){var J=function(L,M){return function(N){L(function(P,O){N(!P||M,{err:P,result:O})},I)}};while(G){D.push(J(C,!(G-=1)))}j.series(D,function(L,M){M=M[M.length-1];(K||H)(M.err,M.result)})};return H?F():F};j.waterfall=function(F,E){E=E||function(){};if(!m(F)){var C=new Error("First argument to waterfall must be an array of functions");return E(C)}if(!F.length){return E()}var D=function(G){return function(J){if(J){E.apply(null,arguments);E=function(){}}else{var H=Array.prototype.slice.call(arguments,1);var I=G.next();if(I){H.push(D(I))}else{H.push(E)}j.setImmediate(function(){G.apply(null,H)})}}};D(j.iterator(F))()};var g=function(D,F,E){E=E||function(){};if(m(F)){D.map(F,function(G,H){if(G){G(function(J){var I=Array.prototype.slice.call(arguments,1);if(I.length<=1){I=I[0]}H.call(null,J,I)})}},E)}else{var C={};D.each(h(F),function(G,H){F[G](function(J){var I=Array.prototype.slice.call(arguments,1);if(I.length<=1){I=I[0]}C[G]=I;H(J)})},function(G){E(G,C)})}};j.parallel=function(D,C){g({map:j.map,each:j.each},D,C)};j.parallelLimit=function(E,C,D){g({map:i(C),each:l(C)},E,D)};j.series=function(E,D){D=D||function(){};if(m(E)){j.mapSeries(E,function(F,G){if(F){F(function(I){var H=Array.prototype.slice.call(arguments,1);if(H.length<=1){H=H[0]}G.call(null,I,H)})}},D)}else{var C={};j.eachSeries(h(E),function(F,G){E[F](function(I){var H=Array.prototype.slice.call(arguments,1);if(H.length<=1){H=H[0]}C[F]=H;G(I)})},function(F){D(F,C)})}};j.iterator=function(D){var C=function(E){var F=function(){if(D.length){D[E].apply(null,arguments)}return F.next()};F.next=function(){return(E<D.length-1)?C(E+1):null};return F};return C(0)};j.apply=function(D){var C=Array.prototype.slice.call(arguments,1);return function(){return D.apply(null,C.concat(Array.prototype.slice.call(arguments)))}};var t=function(F,C,D,G){var E=[];F(C,function(I,H){D(I,function(J,K){E=E.concat(K||[]);H(J)})},function(H){G(H,E)})};j.concat=w(t);j.concatSeries=s(t);j.whilst=function(E,C,D){if(E()){C(function(F){if(F){return D(F)}j.whilst(E,C,D)})}else{D()}};j.doWhilst=function(C,E,D){C(function(G){if(G){return D(G)}var F=Array.prototype.slice.call(arguments,1);if(E.apply(null,F)){j.doWhilst(C,E,D)}else{D()}})};j.until=function(E,C,D){if(!E()){C(function(F){if(F){return D(F)}j.until(E,C,D)})}else{D()}};j.doUntil=function(C,E,D){C(function(G){if(G){return D(G)}var F=Array.prototype.slice.call(arguments,1);if(!E.apply(null,F)){j.doUntil(C,E,D)}else{D()}})};j.queue=function(G,E){if(E===undefined){E=1}function C(I,H,K,J){if(!I.started){I.started=true}if(!m(H)){H=[H]}if(H.length==0){return j.setImmediate(function(){if(I.drain){I.drain()}})}y(H,function(L){var M={data:L,callback:typeof J==="function"?J:null};if(K){I.tasks.unshift(M)}else{I.tasks.push(M)}if(I.saturated&&I.tasks.length===I.concurrency){I.saturated()}j.setImmediate(I.process)})}var D=0;var F={tasks:[],concurrency:E,saturated:null,empty:null,drain:null,started:false,paused:false,push:function(H,I){C(F,H,false,I)},kill:function(){F.drain=null;F.tasks=[]},unshift:function(H,I){C(F,H,true,I)},process:function(){if(!F.paused&&D<F.concurrency&&F.tasks.length){var I=F.tasks.shift();if(F.empty&&F.tasks.length===0){F.empty()}D+=1;var J=function(){D-=1;if(I.callback){I.callback.apply(I,arguments)}if(F.drain&&F.tasks.length+D===0){F.drain()}F.process()};var H=x(J);G(I.data,H)}},length:function(){return F.tasks.length},running:function(){return D},idle:function(){return F.tasks.length+D===0},pause:function(){if(F.paused===true){return}F.paused=true;F.process()},resume:function(){if(F.paused===false){return}F.paused=false;F.process()}};return F};j.priorityQueue=function(H,F){function E(J,I){return J.priority-I.priority}function D(N,L,M){var K=-1,I=N.length-1;while(K<I){var J=K+((I-K+1)>>>1);if(M(L,N[J])>=0){K=J}else{I=J-1}}return K}function C(K,J,I,L){if(!K.started){K.started=true}if(!m(J)){J=[J]}if(J.length==0){return j.setImmediate(function(){if(K.drain){K.drain()}})}y(J,function(M){var N={data:M,priority:I,callback:typeof L==="function"?L:null};K.tasks.splice(D(K.tasks,N,E)+1,0,N);if(K.saturated&&K.tasks.length===K.concurrency){K.saturated()}j.setImmediate(K.process)})}var G=j.queue(H,F);G.push=function(J,I,K){C(G,J,I,K)};delete G.unshift;return G};j.cargo=function(G,F){var C=false,H=[];var D={tasks:H,payload:F,saturated:null,empty:null,drain:null,drained:true,push:function(I,J){if(!m(I)){I=[I]}y(I,function(K){H.push({data:K,callback:typeof J==="function"?J:null});D.drained=false;if(D.saturated&&H.length===F){D.saturated()}});j.setImmediate(D.process)},process:function E(){if(C){return}if(H.length===0){if(D.drain&&!D.drained){D.drain()}D.drained=true;return}var I=typeof F==="number"?H.splice(0,F):H.splice(0,H.length);var J=f(I,function(K){return K.data});if(D.empty){D.empty()}C=true;G(J,function(){C=false;var K=arguments;y(I,function(L){if(L.callback){L.callback.apply(null,K)}});E()})},length:function(){return H.length},running:function(){return C}};return D};var o=function(C){return function(E){var D=Array.prototype.slice.call(arguments,1);E.apply(null,D.concat([function(G){var F=Array.prototype.slice.call(arguments,1);if(typeof console!=="undefined"){if(G){if(console.error){console.error(G)}}else{if(console[C]){y(F,function(H){console[C](H)})}}}}]))}};j.log=o("log");j.dir=o("dir");j.memoize=function(G,E){var D={};var F={};E=E||function(H){return H};var C=function(){var H=Array.prototype.slice.call(arguments);var J=H.pop();var I=E.apply(null,H);if(I in D){j.nextTick(function(){J.apply(null,D[I])})}else{if(I in F){F[I].push(J)}else{F[I]=[J];G.apply(null,H.concat([function(){D[I]=arguments;var M=F[I];delete F[I];for(var L=0,K=M.length;L<K;L++){M[L].apply(null,arguments)}}]))}}};C.memo=D;C.unmemoized=G;return C};j.unmemoize=function(C){return function(){return(C.unmemoized||C).apply(null,arguments)}};j.times=function(F,E,G){var C=[];for(var D=0;D<F;D++){C.push(D)}return j.map(C,E,G)};j.timesSeries=function(F,E,G){var C=[];for(var D=0;D<F;D++){C.push(D)}return j.mapSeries(C,E,G)};j.seq=function(){var C=arguments;return function(){var E=this;var D=Array.prototype.slice.call(arguments);var F=D.pop();j.reduce(C,D,function(H,I,G){I.apply(E,H.concat([function(){var K=arguments[0];var J=Array.prototype.slice.call(arguments,1);G(K,J)}]))},function(H,G){F.apply(E,[H].concat(G))})}};j.compose=function(){return j.seq.apply(null,Array.prototype.reverse.call(arguments))};var p=function(F,D){var E=function(){var H=this;var G=Array.prototype.slice.call(arguments);var I=G.pop();return F(D,function(K,J){K.apply(H,G.concat([J]))},I)};if(arguments.length>2){var C=Array.prototype.slice.call(arguments,2);return E.apply(this,C)}else{return E}};j.applyEach=w(p);j.applyEachSeries=s(p);j.forever=function(D,E){function C(F){if(F){if(E){return E(F)}throw F}D(C)}C()};if(typeof c!=="undefined"&&c.exports){c.exports=j}else{if(typeof define!=="undefined"&&define.amd){define([],function(){return j})}else{v.async=j}}}())}).call(this,b("_process"))},{_process:3}],7:[function(b,c,a){arguments[4][4][0].apply(a,arguments)},{dup:4}],8:[function(b,c,a){var d=b("async"),g=b("./Resource"),f=b("eventemitter3");function h(j,i){f.call(this);i=i||10;this.baseUrl=j||"";this.progress=0;this.loading=false;this._progressChunk=0;this._beforeMiddleware=[];this._afterMiddleware=[];this._boundLoadResource=this._loadResource.bind(this);this._boundOnLoad=this._onLoad.bind(this);this._buffer=[];this._numToLoad=0;this._queue=d.queue(this._boundLoadResource,i);this.resources={}}h.prototype=Object.create(f.prototype);h.prototype.constructor=h;c.exports=h;h.prototype.add=h.prototype.enqueue=function(m,l,k,j){if(Array.isArray(m)){for(var n=0;n<m.length;++n){this.add(m[n])}return this}if(typeof m==="object"){j=l||m.callback||m.onComplete;k=m;l=m.url;m=m.name||m.key||m.url}if(typeof l!=="string"){j=k;k=l;l=m}if(typeof l!=="string"){throw new Error("No url passed to add resource to loader.")}if(typeof k==="function"){j=k;k=null}if(this.resources[m]){throw new Error('Resource with name "'+m+'" already exists.')}if(l.indexOf("data:")!==0){l=this.baseUrl+l}this.resources[m]=new g(m,l,k);if(typeof j==="function"){this.resources[m].once("afterMiddleware",j)}this._numToLoad++;if(this._queue.started){this._queue.push(this.resources[m]);this._progressChunk=(100-this.progress)/(this._queue.length()+this._queue.running())}else{this._buffer.push(this.resources[m]);this._progressChunk=100/this._buffer.length}return this};h.prototype.before=h.prototype.pre=function(i){this._beforeMiddleware.push(i);return this};h.prototype.after=h.prototype.use=function(i){this._afterMiddleware.push(i);return this};h.prototype.reset=function(){this._buffer.length=0;this._queue.kill();this._queue.started=false;this.progress=0;this._progressChunk=0;this.loading=false};h.prototype.load=function(j){if(typeof j==="function"){this.once("complete",j)}if(this._queue.started){return this}this.emit("start",this);for(var k=0;k<this._buffer.length;++k){this._queue.push(this._buffer[k])}this._buffer.length=0;return this};h.prototype._loadResource=function(k,j){var i=this;k._dequeue=j;this._runMiddleware(k,this._beforeMiddleware,function(){k.load(i._boundOnLoad)})};h.prototype._onComplete=function(){this.emit("complete",this,this.resources)};h.prototype._onLoad=function(i){this.progress+=this._progressChunk;this.emit("progress",this,i);if(i.error){this.emit("error",i.error,this,i)}else{this.emit("load",this,i)}this._runMiddleware(i,this._afterMiddleware,function(){i.emit("afterMiddleware",i);this._numToLoad--;if(this._numToLoad===0){this._onComplete()}});i._dequeue()};h.prototype._runMiddleware=function(l,k,i){var j=this;d.eachSeries(k,function(n,m){n.call(j,l,m)},i.bind(this,l))};h.LOAD_TYPE=g.LOAD_TYPE;h.XHR_READY_STATE=g.XHR_READY_STATE;h.XHR_RESPONSE_TYPE=g.XHR_RESPONSE_TYPE},{"./Resource":9,async:6,eventemitter3:7}],9:[function(c,d,b){var g=c("eventemitter3"),f=!!(window.XDomainRequest&&!("withCredentials" in (new XMLHttpRequest())));function h(k,j,i){g.call(this);i=i||{};if(typeof k!=="string"||typeof j!=="string"){throw new Error("Both name and url are required for constructing a resource.")}this.name=k;this.url=j;this.data=null;this.crossOrigin=i.crossOrigin;this.loadType=i.loadType||this._determineLoadType();this.xhrType=i.xhrType;this.error=null;this.xhr=null;this.isJson=false;this.isXml=false;this.isImage=false;this.isAudio=false;this.isVideo=false;this._dequeue=null;this._boundComplete=this.complete.bind(this);this._boundOnError=this._onError.bind(this);this._boundOnProgress=this._onProgress.bind(this);this._boundXhrOnError=this._xhrOnError.bind(this);this._boundXhrOnAbort=this._xhrOnAbort.bind(this);this._boundXhrOnLoad=this._xhrOnLoad.bind(this);this._boundXdrOnTimeout=this._xdrOnTimeout.bind(this)}h.prototype=Object.create(g.prototype);h.prototype.constructor=h;d.exports=h;h.prototype.complete=function(){if(this.data&&this.data.removeEventListener){this.data.removeEventListener("error",this._boundOnError);this.data.removeEventListener("load",this._boundComplete);this.data.removeEventListener("progress",this._boundOnProgress);this.data.removeEventListener("canplaythrough",this._boundComplete)}if(this.xhr){if(this.xhr.removeEventListener){this.xhr.removeEventListener("error",this._boundXhrOnError);this.xhr.removeEventListener("abort",this._boundXhrOnAbort);this.xhr.removeEventListener("progress",this._boundOnProgress);this.xhr.removeEventListener("load",this._boundXhrOnLoad)}else{this.xhr.onerror=null;this.xhr.ontimeout=null;this.xhr.onprogress=null;this.xhr.onload=null}}this.emit("complete",this)};h.prototype.load=function(i){this.emit("start",this);if(i){this.once("complete",i)}if(typeof this.crossOrigin!=="string"){this.crossOrigin=this._determineCrossOrigin()}switch(this.loadType){case h.LOAD_TYPE.IMAGE:this._loadImage();break;case h.LOAD_TYPE.AUDIO:this._loadElement("audio");break;case h.LOAD_TYPE.VIDEO:this._loadElement("video");break;case h.LOAD_TYPE.XHR:default:if(f){this._loadXdr()}else{this._loadXhr()}break}};h.prototype._loadImage=function(){this.data=new Image();if(this.crossOrigin){this.data.crossOrigin=""}this.data.src=this.url;this.isImage=true;this.data.addEventListener("error",this._boundOnError,false);this.data.addEventListener("load",this._boundComplete,false);this.data.addEventListener("progress",this._boundOnProgress,false)};h.prototype._loadElement=function(k){this.data=document.createElement(k);if(Array.isArray(this.url)){for(var j=0;j<this.url.length;++j){this.data.appendChild(this._createSource(k,this.url[j]))}}else{this.data.appendChild(this._createSource(k,this.url))}this["is"+k[0].toUpperCase()+k.substring(1)]=true;this.data.addEventListener("error",this._boundOnError,false);this.data.addEventListener("load",this._boundComplete,false);this.data.addEventListener("progress",this._boundOnProgress,false);this.data.addEventListener("canplaythrough",this._boundComplete,false);this.data.load()};h.prototype._loadXhr=function(){if(typeof this.xhrType!=="string"){this.xhrType=this._determineXhrType()}var i=this.xhr=new XMLHttpRequest();i.open("GET",this.url,true);if(this.xhrType===h.XHR_RESPONSE_TYPE.JSON||this.xhrType===h.XHR_RESPONSE_TYPE.DOCUMENT){i.responseType=h.XHR_RESPONSE_TYPE.TEXT}else{i.responseType=this.xhrType}i.addEventListener("error",this._boundXhrOnError,false);i.addEventListener("abort",this._boundXhrOnAbort,false);i.addEventListener("progress",this._boundOnProgress,false);i.addEventListener("load",this._boundXhrOnLoad,false);i.send()};h.prototype._loadXdr=function(){if(typeof this.xhrType!=="string"){this.xhrType=this._determineXhrType()}var i=this.xhr=new XDomainRequest();i.timeout=5000;i.onerror=this._boundXhrOnError;i.ontimeout=this._boundXdrOnTimeout;i.onprogress=this._boundOnProgress;i.onload=this._boundXhrOnLoad;i.open("GET",this.url,true);setTimeout(function(){i.send()},0)};h.prototype._createSource=function(j,i,l){if(!l){l=j+"/"+i.substr(i.lastIndexOf(".")+1)}var k=document.createElement("source");k.src=i;k.type=l;return k};h.prototype._onError=function(i){this.error=new Error("Failed to load element using "+i.target.nodeName);this.complete()};h.prototype._onProgress=function(i){if(i.lengthComputable){this.emit("progress",this,i.loaded/i.total)}};h.prototype._xhrOnError=function(){this.error=new Error(a(this.xhr)+" Request failed. Status: "+this.xhr.status+', text: "'+this.xhr.statusText+'"');this.complete()};h.prototype._xhrOnAbort=function(){this.error=new Error(a(this.xhr)+" Request was aborted by the user.");this.complete()};h.prototype._xdrOnTimeout=function(){this.error=new Error(a(this.xhr)+" Request timed out.");this.complete()};h.prototype._xhrOnLoad=function(){var j=this.xhr;if(j.status===200){if(this.xhrType===h.XHR_RESPONSE_TYPE.TEXT){this.data=j.responseText}else{if(this.xhrType===h.XHR_RESPONSE_TYPE.JSON){try{this.data=JSON.parse(j.responseText);this.isJson=true}catch(i){this.error=new Error("Error trying to parse loaded json:",i)}}else{if(this.xhrType===h.XHR_RESPONSE_TYPE.DOCUMENT){try{if(window.DOMParser){var l=new DOMParser();this.data=l.parseFromString(j.responseText,"text/xml")}else{var k=document.createElement("div");k.innerHTML=j.responseText;this.data=k}this.isXml=true}catch(i){this.error=new Error("Error trying to parse loaded xml:",i)}}else{this.data=j.response||j.responseText}}}}else{this.error=new Error("["+j.status+"]"+j.statusText+":"+j.responseURL)}this.complete()};function a(i){return i.toString().replace("object ","")}h.prototype._determineCrossOrigin=function(){if(this.url.indexOf("data:")===0){return""}var j=window.location,i=document.createElement("a");i.href=this.url;if(i.hostname!==j.hostname||i.port!==j.port||i.protocol!==j.protocol){return"anonymous"}return""};h.prototype._determineXhrType=function(){var i=this.url.substr(this.url.lastIndexOf(".")+1);switch(i){case"xhtml":case"html":case"htm":case"xml":case"tmx":case"tsx":case"svg":return h.XHR_RESPONSE_TYPE.DOCUMENT;case"gif":case"png":case"bmp":case"jpg":case"jpeg":case"tif":case"tiff":case"webp":return h.XHR_RESPONSE_TYPE.BLOB;case"json":return h.XHR_RESPONSE_TYPE.JSON;case"text":case"txt":default:return h.XHR_RESPONSE_TYPE.TEXT}};h.prototype._determineLoadType=function(){var i=this.url.substr(this.url.lastIndexOf(".")+1);switch(i){case"gif":case"png":case"bmp":case"jpg":case"jpeg":case"tif":case"tiff":case"webp":return h.LOAD_TYPE.IMAGE;default:return h.LOAD_TYPE.XHR}};h.prototype._getMimeFromXhrType=function(i){switch(i){case h.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case h.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case h.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case h.XHR_RESPONSE_TYPE.JSON:return"application/json";case h.XHR_RESPONSE_TYPE.DEFAULT:case h.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}};h.LOAD_TYPE={XHR:1,IMAGE:2,AUDIO:3,VIDEO:4};h.XHR_READY_STATE={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4};h.XHR_RESPONSE_TYPE={DEFAULT:"text",BUFFER:"arraybuffer",BLOB:"blob",DOCUMENT:"document",JSON:"json",TEXT:"text"}},{eventemitter3:7}],10:[function(b,c,a){c.exports={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encodeBinary:function(g){var f="";var k;var d=new Array(4);var j=0;var h=0;var i=0;while(j<g.length){k=new Array(3);for(h=0;h<k.length;h++){if(j<g.length){k[h]=g.charCodeAt(j++)&255}else{k[h]=0}}d[0]=k[0]>>2;d[1]=((k[0]&3)<<4)|(k[1]>>4);d[2]=((k[1]&15)<<2)|(k[2]>>6);d[3]=k[2]&63;i=j-(g.length-1);switch(i){case 2:d[3]=64;d[2]=64;break;case 1:d[3]=64;break;default:break}for(h=0;h<d.length;h++){f+=this._keyStr.charAt(d[h])}}return f}}},{}],11:[function(b,c,a){c.exports=b("./Loader");c.exports.Resource=b("./Resource");c.exports.middleware={caching:{memory:b("./middlewares/caching/memory")},parsing:{blob:b("./middlewares/parsing/blob")}}},{"./Loader":8,"./Resource":9,"./middlewares/caching/memory":12,"./middlewares/parsing/blob":13}],12:[function(c,d,b){var a={};d.exports=function(){return function(g,f){if(a[g.url]){g.data=a[g.url];g.complete()}else{g.once("complete",function(){a[this.url]=this.data});f()}}}},{}],13:[function(b,d,a){var f=b("../../Resource"),c=b("../../b64");window.URL=window.URL||window.webkitURL;d.exports=function(){return function(i,h){if(!i.data){return h()}if(i.xhr&&i.xhrType===f.XHR_RESPONSE_TYPE.BLOB){if(!window.Blob||typeof i.data==="string"){var g=i.xhr.getResponseHeader("content-type");if(g&&g.indexOf("image")===0){i.data=new Image();i.data.src="data:"+g+";base64,"+c.encodeBinary(i.xhr.responseText);i.isImage=true;i.data.onload=function(){i.data.onload=null;h()}}}else{if(i.data.type.indexOf("image")===0){var j=URL.createObjectURL(i.data);i.blob=i.data;i.data=new Image();i.data.src=j;i.isImage=true;i.data.onload=function(){URL.revokeObjectURL(j);i.data.onload=null;h()}}}}else{h()}}}},{"../../Resource":9,"../../b64":10}],14:[function(b,c,a){c.exports={name:"pixi.js",version:"3.0.0",description:"Pixi.js is a fast lightweight 2D library that works across all devices.",author:"Mat Groves",contributors:["Chad Engler <chad@pantherdev.com>","Richard Davey <rdavey@gmail.com>"],main:"./src/index.js",homepage:"http://goodboydigital.com/",bugs:"https://github.com/GoodBoyDigital/pixi.js/issues",license:"MIT",repository:{type:"git",url:"https://github.com/GoodBoyDigital/pixi.js.git"},scripts:{test:"gulp && testem ci",docs:"jsdoc -c ./gulp/util/jsdoc.conf.json -R README.md"},dependencies:{async:"^0.9.0",brfs:"^1.4.0",eventemitter3:"^1.0.1","object-assign":"^2.0.0","resource-loader":"^1.4.2"},devDependencies:{browserify:"^9.0.8",chai:"^2.2.0",del:"^1.1.1",gulp:"^3.8.11","gulp-cached":"^1.0.4","gulp-concat":"^2.5.2","gulp-debug":"^2.0.1","gulp-jshint":"^1.10.0","gulp-mirror":"^0.4.0","gulp-plumber":"^1.0.0","gulp-rename":"^1.2.2","gulp-sourcemaps":"^1.5.2","gulp-uglify":"^1.2.0","gulp-util":"^3.0.4","ink-docstrap":"git+https://github.com/Pilatch/docstrap.git",jsdoc:"^3.3.0-beta3","jshint-summary":"^0.4.0",minimist:"^1.1.1",mocha:"^2.2.4","require-dir":"^0.3.0","run-sequence":"^1.0.2",testem:"^0.8.2","vinyl-buffer":"^1.0.0","vinyl-source-stream":"^1.1.0",watchify:"^3.1.2"},browserify:{transform:["brfs"]}}},{}],15:[function(b,c,a){c.exports={VERSION:b("../../package.json").version,PI_2:Math.PI*2,RAD_TO_DEG:180/Math.PI,DEG_TO_RAD:Math.PI/180,TARGET_FPMS:0.06,RENDERER_TYPE:{UNKNOWN:0,WEBGL:1,CANVAS:2},BLEND_MODES:{NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16},SCALE_MODES:{DEFAULT:0,LINEAR:0,NEAREST:1},RETINA_PREFIX:/@(.+)x/,RESOLUTION:1,FILTER_RESOLUTION:1,DEFAULT_RENDER_OPTIONS:{view:null,resolution:1,antialias:false,forceFXAA:false,autoResize:false,transparent:false,backgroundColor:0,clearBeforeRender:true,preserveDrawingBuffer:false},SHAPES:{POLY:0,RECT:1,CIRC:2,ELIP:3,RREC:4},SPRITE_BATCH_SIZE:2000}},{"../../package.json":14}],16:[function(f,g,d){var h=f("../math"),c=f("./DisplayObject"),i=f("../textures/RenderTexture"),b=new h.Matrix();function a(){c.call(this);this.children=[]}a.prototype=Object.create(c.prototype);a.prototype.constructor=a;g.exports=a;Object.defineProperties(a.prototype,{width:{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(k){var j=this.getLocalBounds().width;if(j!==0){this.scale.x=k/j}else{this.scale.x=1}this._width=k}},height:{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(k){var j=this.getLocalBounds().height;if(j!==0){this.scale.y=k/j}else{this.scale.y=1}this._height=k}}});a.prototype.addChild=function(j){return this.addChildAt(j,this.children.length)};a.prototype.addChildAt=function(k,j){if(k===this){return k}if(j>=0&&j<=this.children.length){if(k.parent){k.parent.removeChild(k)}k.parent=this;this.children.splice(j,0,k);return k}else{throw new Error(k+"addChildAt: The index "+j+" supplied is out of bounds "+this.children.length)}};a.prototype.swapChildren=function(m,j){if(m===j){return}var l=this.getChildIndex(m);var k=this.getChildIndex(j);if(l<0||k<0){throw new Error("swapChildren: Both the supplied DisplayObjects must be children of the caller.")}this.children[l]=j;this.children[k]=m};a.prototype.getChildIndex=function(k){var j=this.children.indexOf(k);if(j===-1){throw new Error("The supplied DisplayObject must be a child of the caller")}return j};a.prototype.setChildIndex=function(l,k){if(k<0||k>=this.children.length){throw new Error("The supplied index is out of bounds")}var j=this.getChildIndex(l);this.children.splice(j,1);this.children.splice(k,0,l)};a.prototype.getChildAt=function(j){if(j<0||j>=this.children.length){throw new Error("getChildAt: Supplied index "+j+" does not exist in the child list, or the supplied DisplayObject is not a child of the caller")}return this.children[j]};a.prototype.removeChild=function(k){var j=this.children.indexOf(k);if(j===-1){return}return this.removeChildAt(j)};a.prototype.removeChildAt=function(j){var k=this.getChildAt(j);k.parent=null;this.children.splice(j,1);return k};a.prototype.removeChildren=function(n,o){var m=n||0;var j=typeof o==="number"?o:this.children.length;var k=j-m;if(k>0&&k<=j){var p=this.children.splice(m,k);for(var l=0;l<p.length;++l){p[l].parent=null}return p}else{if(k===0&&this.children.length===0){return[]}else{throw new RangeError("removeChildren: numeric values are outside the acceptable range.")}}};a.prototype.generateTexture=function(n,k,l){var m=this.getLocalBounds();var j=new i(n,m.width|0,m.height|0,n,l,k);b.tx=-m.x;b.ty=-m.y;j.render(this,b);return j};a.prototype.updateTransform=function(){if(!this.visible){return}this.displayObjectUpdateTransform();for(var l=0,k=this.children.length;l<k;++l){this.children[l].updateTransform()}};a.prototype.containerUpdateTransform=a.prototype.updateTransform;a.prototype.getBounds=function(){if(!this._currentBounds){if(this.children.length===0){return h.Rectangle.EMPTY}var q=Infinity;var p=Infinity;var m=-Infinity;var l=-Infinity;var r;var v;var u;var n=false;for(var t=0,s=this.children.length;t<s;++t){var o=this.children[t];if(!o.visible){continue}n=true;r=this.children[t].getBounds();q=q<r.x?q:r.x;p=p<r.y?p:r.y;v=r.width+r.x;u=r.height+r.y;m=m>v?m:v;l=l>u?l:u}if(!n){return h.Rectangle.EMPTY}var k=this._bounds;k.x=q;k.y=p;k.width=m-q;k.height=l-p;this._currentBounds=k}return this._currentBounds};a.prototype.containerGetBounds=a.prototype.getBounds;a.prototype.getLocalBounds=function(){var k=this.worldTransform;this.worldTransform=h.Matrix.IDENTITY;for(var m=0,l=this.children.length;m<l;++m){this.children[m].updateTransform()}this.worldTransform=k;this._currentBounds=null;return this.getBounds(h.Matrix.IDENTITY)};a.prototype.renderWebGL=function(m){if(!this.visible||this.worldAlpha<=0||!this.renderable){return}var l,k;if(this._mask||this._filters){m.currentRenderer.flush();if(this._filters){m.filterManager.pushFilter(this,this._filters)}if(this._mask){m.maskManager.pushMask(this,this._mask)}m.currentRenderer.start();this._renderWebGL(m);for(l=0,k=this.children.length;l<k;l++){this.children[l].renderWebGL(m)}m.currentRenderer.flush();if(this._mask){m.maskManager.popMask(this,this._mask)}if(this._filters){m.filterManager.popFilter()}m.currentRenderer.start()}else{this._renderWebGL(m);for(l=0,k=this.children.length;l<k;++l){this.children[l].renderWebGL(m)}}};a.prototype._renderWebGL=function(j){};a.prototype._renderCanvas=function(j){};a.prototype.renderCanvas=function(m){if(!this.visible||this.alpha<=0||!this.renderable){return}if(this._mask){m.maskManager.pushMask(this._mask,m)}this._renderCanvas(m);for(var l=0,k=this.children.length;l<k;++l){this.children[l].renderCanvas(m)}if(this._mask){m.maskManager.popMask(m)}};a.prototype.destroy=function(m){c.prototype.destroy.call(this);if(m){for(var l=0,k=this.children.length;l<k;++l){this.children[l].destroy(m)}}this.removeChildren();this.children=null}},{"../math":25,"../textures/RenderTexture":63,"./DisplayObject":17}],17:[function(b,a,c){var h=b("../math"),f=b("../textures/RenderTexture"),i=b("eventemitter3"),j=b("../const"),g=new h.Matrix();function d(){i.call(this);this.position=new h.Point();this.scale=new h.Point(1,1);this.pivot=new h.Point(0,0);this.rotation=0;this.alpha=1;this.visible=true;this.renderable=true;this.parent=null;this.worldAlpha=1;this.worldTransform=new h.Matrix();this.filterArea=null;this._sr=0;this._cr=1;this._bounds=new h.Rectangle(0,0,1,1);this._currentBounds=null;this._mask=null;this._cacheAsBitmap=false;this._cachedObject=null}d.prototype=Object.create(i.prototype);d.prototype.constructor=d;a.exports=d;Object.defineProperties(d.prototype,{x:{get:function(){return this.position.x},set:function(k){this.position.x=k}},y:{get:function(){return this.position.y},set:function(k){this.position.y=k}},worldVisible:{get:function(){var k=this;do{if(!k.visible){return false}k=k.parent}while(k);return true}},mask:{get:function(){return this._mask},set:function(k){if(this._mask){this._mask.renderable=true}this._mask=k;if(this._mask){this._mask.renderable=false}}},filters:{get:function(){return this._filters&&this._filters.slice()},set:function(k){this._filters=k&&k.slice()}}});d.prototype.updateTransform=function(){var p=this.parent.worldTransform;var m=this.worldTransform;var o,l,r,q,n,k;if(this.rotation%j.PI_2){if(this.rotation!==this.rotationCache){this.rotationCache=this.rotation;this._sr=Math.sin(this.rotation);this._cr=Math.cos(this.rotation)}o=this._cr*this.scale.x;l=this._sr*this.scale.x;r=-this._sr*this.scale.y;q=this._cr*this.scale.y;n=this.position.x;k=this.position.y;if(this.pivot.x||this.pivot.y){n-=this.pivot.x*o+this.pivot.y*r;k-=this.pivot.x*l+this.pivot.y*q}m.a=o*p.a+l*p.c;m.b=o*p.b+l*p.d;m.c=r*p.a+q*p.c;m.d=r*p.b+q*p.d;m.tx=n*p.a+k*p.c+p.tx;m.ty=n*p.b+k*p.d+p.ty}else{o=this.scale.x;q=this.scale.y;n=this.position.x-this.pivot.x*o;k=this.position.y-this.pivot.y*q;m.a=o*p.a;m.b=o*p.b;m.c=q*p.c;m.d=q*p.d;m.tx=n*p.a+k*p.c+p.tx;m.ty=n*p.b+k*p.d+p.ty}this.worldAlpha=this.alpha*this.parent.worldAlpha;this._currentBounds=null};d.prototype.displayObjectUpdateTransform=d.prototype.updateTransform;d.prototype.getBounds=function(k){return h.Rectangle.EMPTY};d.prototype.getLocalBounds=function(){return this.getBounds(h.Matrix.IDENTITY)};d.prototype.toGlobal=function(k){this.displayObjectUpdateTransform();return this.worldTransform.apply(k)};d.prototype.toLocal=function(k,l){if(l){k=l.toGlobal(k)}this.displayObjectUpdateTransform();return this.worldTransform.applyInverse(k)};d.prototype.renderWebGL=function(k){};d.prototype.renderCanvas=function(k){};d.prototype.generateTexture=function(o,l,m){var n=this.getLocalBounds();var k=new f(o,n.width|0,n.height|0,o,m,l);g.tx=-n.x;g.ty=-n.y;k.render(this,g);return k};d.prototype.destroy=function(){this.position=null;this.scale=null;this.pivot=null;this.parent=null;this._bounds=null;this._currentBounds=null;this._mask=null;this.worldTransform=null;this.filterArea=null}},{"../const":15,"../math":25,"../textures/RenderTexture":63,eventemitter3:4}],18:[function(d,c,h){var f=d("../display/Container"),b=d("../sprites/Sprite"),g=d("../textures/Texture"),j=d("../renderers/canvas/utils/CanvasBuffer"),m=d("../renderers/canvas/utils/CanvasGraphics"),k=d("./GraphicsData"),l=d("../math"),n=d("../const"),a=new l.Point();function i(){f.call(this);this.fillAlpha=1;this.lineWidth=0;this.lineColor=0;this.graphicsData=[];this.tint=16777215;this._prevTint=16777215;this.blendMode=n.BLEND_MODES.NORMAL;this.currentPath=null;this._webGL={};this.isMask=false;this.boundsPadding=0;this._localBounds=new l.Rectangle(0,0,1,1);this.dirty=true;this.glDirty=false;this.boundsDirty=true;this.cachedSpriteDirty=false}i.prototype=Object.create(f.prototype);i.prototype.constructor=i;c.exports=i;Object.defineProperties(i.prototype,{});i.prototype.clone=function(){var p=new i();p.renderable=this.renderable;p.fillAlpha=this.fillAlpha;p.lineWidth=this.lineWidth;p.lineColor=this.lineColor;p.tint=this.tint;p.blendMode=this.blendMode;p.isMask=this.isMask;p.boundsPadding=this.boundsPadding;p.dirty=this.dirty;p.glDirty=this.glDirty;p.cachedSpriteDirty=this.cachedSpriteDirty;for(var o=0;o<this.graphicsData.length;++o){p.graphicsData.push(this.graphicsData[o].clone())}p.currentPath=p.graphicsData[p.graphicsData.length-1];p.updateLocalBounds();return p};i.prototype.lineStyle=function(o,p,q){this.lineWidth=o||0;this.lineColor=p||0;this.lineAlpha=(q===undefined)?1:q;if(this.currentPath){if(this.currentPath.shape.points.length){this.drawShape(new l.Polygon(this.currentPath.shape.points.slice(-2)))}else{this.currentPath.lineWidth=this.lineWidth;this.currentPath.lineColor=this.lineColor;this.currentPath.lineAlpha=this.lineAlpha}}return this};i.prototype.moveTo=function(o,p){this.drawShape(new l.Polygon([o,p]));return this};i.prototype.lineTo=function(o,p){this.currentPath.shape.points.push(o,p);this.dirty=true;return this};i.prototype.quadraticCurveTo=function(w,s,y,v){if(this.currentPath){if(this.currentPath.shape.points.length===0){this.currentPath.shape.points=[0,0]}}else{this.moveTo(0,0)}var o,t,p=20,z=this.currentPath.shape.points;if(z.length===0){this.moveTo(0,0)}var x=z[z.length-2];var u=z[z.length-1];var q=0;for(var r=1;r<=p;++r){q=r/p;o=x+((w-x)*q);t=u+((s-u)*q);z.push(o+(((w+((y-w)*q))-o)*q),t+(((s+((v-s)*q))-t)*q))}this.dirty=this.boundsDirty=true;return this};i.prototype.bezierCurveTo=function(B,x,A,t,D,z){if(this.currentPath){if(this.currentPath.shape.points.length===0){this.currentPath.shape.points=[0,0]}}else{this.moveTo(0,0)}var r=20,p,q,o,w,v,E=this.currentPath.shape.points;var C=E[E.length-2];var y=E[E.length-1];var s=0;for(var u=1;u<=r;++u){s=u/r;p=(1-s);q=p*p;o=q*p;w=s*s;v=w*s;E.push(o*C+3*q*s*B+3*p*w*A+v*D,o*y+3*q*s*x+3*p*w*t+v*z)}this.dirty=this.boundsDirty=true;return this};i.prototype.arcTo=function(K,u,J,s,v){if(this.currentPath){if(this.currentPath.shape.points.length===0){this.currentPath.shape.points.push(K,u)}}else{this.moveTo(K,u)}var H=this.currentPath.shape.points,C=H[H.length-2],A=H[H.length-1],P=A-u,x=C-K,O=s-u,w=J-K,I=Math.abs(P*w-x*O);if(I<1e-8||v===0){if(H[H.length-2]!==K||H[H.length-1]!==u){H.push(K,u)}}else{var N=P*P+x*x,E=O*O+w*w,p=P*O+x*w,z=v*Math.sqrt(N)/I,y=v*Math.sqrt(E)/I,q=z*p/N,o=y*p/E,t=z*w+y*x,r=z*O+y*P,D=x*(y+q),B=P*(y+q),M=w*(z+o),L=O*(z+o),G=Math.atan2(B-r,D-t),F=Math.atan2(L-r,M-t);this.arc(t+K,r+u,v,G,F,x*O>w*P)}this.dirty=this.boundsDirty=true;return this};i.prototype.arc=function(q,p,r,C,A,o){o=o||false;if(C===A){return this}if(!o&&A<=C){A+=Math.PI*2}else{if(o&&C<=A){C+=Math.PI*2}}var w=o?(C-A)*-1:(A-C);var z=Math.ceil(Math.abs(w)/(Math.PI*2))*40;if(w===0){return this}var I=q+Math.cos(C)*r;var G=p+Math.sin(C)*r;if(this.currentPath){if(o&&this.filling){this.currentPath.shape.points.push(q,p)}else{this.currentPath.shape.points.push(I,G)}}else{if(o&&this.filling){this.moveTo(q,p)}else{this.moveTo(I,G)}}var F=this.currentPath.shape.points;var t=w/(z*2);var y=t*2;var B=Math.cos(t);var D=Math.sin(t);var K=z-1;var u=(K%1)/K;for(var E=0;E<=K;E++){var x=E+u*E;var H=((t)+C+(y*x));var J=Math.cos(H);var v=-Math.sin(H);F.push(((B*J)+(D*v))*r+q,((B*-v)+(D*J))*r+p)}this.dirty=this.boundsDirty=true;return this};i.prototype.beginFill=function(o,p){this.filling=true;this.fillColor=o||0;this.fillAlpha=(p===undefined)?1:p;if(this.currentPath){if(this.currentPath.shape.points.length<=2){this.currentPath.fill=this.filling;this.currentPath.fillColor=this.fillColor;this.currentPath.fillAlpha=this.fillAlpha}}return this};i.prototype.endFill=function(){this.filling=false;this.fillColor=null;this.fillAlpha=1;return this};i.prototype.drawRect=function(p,r,q,o){this.drawShape(new l.Rectangle(p,r,q,o));return this};i.prototype.drawRoundedRect=function(q,s,r,p,o){this.drawShape(new l.RoundedRectangle(q,s,r,p,o));return this};i.prototype.drawCircle=function(p,q,o){this.drawShape(new l.Circle(p,q,o));return this};i.prototype.drawEllipse=function(p,r,q,o){this.drawShape(new l.Ellipse(p,r,q,o));return this};i.prototype.drawPolygon=function(q){var p=q;if(!Array.isArray(p)){p=new Array(arguments.length);for(var o=0;o<p.length;++o){p[o]=arguments[o]}}this.drawShape(new l.Polygon(p));return this};i.prototype.clear=function(){this.lineWidth=0;this.filling=false;this.dirty=true;this.clearDirty=true;this.graphicsData=[];return this};i.prototype.generateTexture=function(t,o,q){o=o||1;var s=this.getLocalBounds();var p=new j(s.width*o,s.height*o);var r=g.fromCanvas(p.canvas,q);r.baseTexture.resolution=o;p.context.scale(o,o);p.context.translate(-s.x,-s.y);m.renderGraphics(this,p.context);return r};i.prototype._renderWebGL=function(o){if(this.glDirty){this.dirty=true;this.glDirty=false}o.setObjectRenderer(o.plugins.graphics);o.plugins.graphics.render(this)};i.prototype._renderCanvas=function(r){if(this.isMask===true){return}if(this._prevTint!==this.tint){this.dirty=true;this._prevTint=this.tint}if(this._cacheAsBitmap){if(this.dirty||this.cachedSpriteDirty){this._generateCachedSprite();this.updateCachedSpriteTexture();this.cachedSpriteDirty=false;this.dirty=false}this._cachedSprite.alpha=this.alpha;b.prototype._renderCanvas.call(this._cachedSprite,r);return}else{var q=r.context;var p=this.worldTransform;if(this.blendMode!==r.currentBlendMode){r.currentBlendMode=this.blendMode;q.globalCompositeOperation=r.blendModes[r.currentBlendMode]}var o=r.resolution;q.setTransform(p.a*o,p.b*o,p.c*o,p.d*o,p.tx*o,p.ty*o);m.renderGraphics(this,q)}};i.prototype.getBounds=function(z){if(!this._currentBounds){if(!this.renderable){return l.Rectangle.EMPTY}if(this.boundsDirty){this.updateLocalBounds();this.glDirty=true;this.cachedSpriteDirty=true;this.boundsDirty=false}var s=this._localBounds;var w=s.x;var v=s.width+s.x;var u=s.y;var t=s.height+s.y;var x=z||this.worldTransform;var L=x.a;var J=x.b;var I=x.c;var G=x.d;var M=x.tx;var K=x.ty;var C=L*v+I*t+M;var r=G*t+J*v+K;var B=L*w+I*t+M;var q=G*t+J*w+K;var A=L*w+I*u+M;var p=G*u+J*w+K;var y=L*v+I*u+M;var o=G*u+J*v+K;var F=C;var D=r;var H=C;var E=r;H=B<H?B:H;H=A<H?A:H;H=y<H?y:H;E=q<E?q:E;E=p<E?p:E;E=o<E?o:E;F=B>F?B:F;F=A>F?A:F;F=y>F?y:F;D=q>D?q:D;D=p>D?p:D;D=o>D?o:D;this._bounds.x=H;this._bounds.width=F-H;this._bounds.y=E;this._bounds.height=D-E;this._currentBounds=this._bounds}return this._currentBounds};i.prototype.containsPoint=function(o){this.worldTransform.applyInverse(o,a);var r=this.graphicsData;for(var p=0;p<r.length;p++){var q=r[p];if(!q.fill){continue}if(q.shape){if(q.shape.contains(a.x,a.y)){return true}}}return false};i.prototype.updateLocalBounds=function(){var r=Infinity;var p=-Infinity;var q=Infinity;var o=-Infinity;if(this.graphicsData.length){var A,G,E,C,F,v;for(var u=0;u<this.graphicsData.length;u++){var t=this.graphicsData[u];var B=t.type;var z=t.lineWidth;A=t.shape;if(B===n.SHAPES.RECT||B===n.SHAPES.RREC){E=A.x-z/2;C=A.y-z/2;F=A.width+z;v=A.height+z;r=E<r?E:r;p=E+F>p?E+F:p;q=C<q?C:q;o=C+v>o?C+v:o}else{if(B===n.SHAPES.CIRC){E=A.x;C=A.y;F=A.radius+z/2;v=A.radius+z/2;r=E-F<r?E-F:r;p=E+F>p?E+F:p;q=C-v<q?C-v:q;o=C+v>o?C+v:o}else{if(B===n.SHAPES.ELIP){E=A.x;C=A.y;F=A.width+z/2;v=A.height+z/2;r=E-F<r?E-F:r;p=E+F>p?E+F:p;q=C-v<q?C-v:q;o=C+v>o?C+v:o}else{G=A.points;for(var s=0;s<G.length;s+=2){E=G[s];C=G[s+1];r=E-z<r?E-z:r;p=E+z>p?E+z:p;q=C-z<q?C-z:q;o=C+z>o?C+z:o}}}}}}else{r=0;p=0;q=0;o=0}var D=this.boundsPadding;this._localBounds.x=r-D;this._localBounds.width=(p-r)+D*2;this._localBounds.y=q-D;this._localBounds.height=(o-q)+D*2};i.prototype.drawShape=function(o){if(this.currentPath){if(this.currentPath.shape.points.length<=2){this.graphicsData.pop()}}this.currentPath=null;var p=new k(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.filling,o);this.graphicsData.push(p);if(p.type===n.SHAPES.POLY){p.shape.closed=this.filling;this.currentPath=p}this.dirty=this.boundsDirty=true;return p};i.prototype.destroy=function(){f.prototype.destroy.apply(this,arguments);for(var p=0;p<this.graphicsData.length;++p){this.graphicsData[p].destroy()}for(var q in this._webgl){for(var o=0;o<this._webgl[q].data.length;++o){this._webgl[q].data[o].destroy()}}this.graphicsData=null;this.currentPath=null;this._webgl=null;this._localBounds=null}},{"../const":15,"../display/Container":16,"../math":25,"../renderers/canvas/utils/CanvasBuffer":37,"../renderers/canvas/utils/CanvasGraphics":38,"../sprites/Sprite":59,"../textures/Texture":64,"./GraphicsData":19}],19:[function(b,c,a){function d(f,k,h,l,i,j,g){this.lineWidth=f;this.lineColor=k;this.lineAlpha=h;this._lineTint=k;this.fillColor=l;this.fillAlpha=i;this._fillTint=l;this.fill=j;this.shape=g;this.type=g.type}d.prototype.constructor=d;c.exports=d;d.prototype.clone=function(){return new d(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.shape)};d.prototype.destroy=function(){this.shape=null}},{}],20:[function(c,b,d){var i=c("../../utils"),g=c("../../math"),k=c("../../const"),j=c("../../renderers/webgl/utils/ObjectRenderer"),h=c("../../renderers/webgl/WebGLRenderer"),a=c("./WebGLGraphicsData");function f(l){j.call(this,l);this.graphicsDataPool=[];this.primitiveShader=null;this.complexPrimitiveShader=null}f.prototype=Object.create(j.prototype);f.prototype.constructor=f;b.exports=f;h.registerPlugin("graphics",f);f.prototype.onContextChange=function(){};f.prototype.destroy=function(){j.prototype.destroy.call(this);for(var l=0;l<this.graphicsDataPool.length;++l){this.graphicsDataPool[l].destroy()}this.graphicsDataPool=null};f.prototype.render=function(l){var p=this.renderer;var r=p.gl;var n=p.shaderManager.plugins.primitiveShader,q;if(l.dirty){this.updateGraphics(l,r)}var o=l._webGL[r.id];p.blendModeManager.setBlendMode(l.blendMode);for(var m=0;m<o.data.length;m++){if(o.data[m].mode===1){q=o.data[m];p.stencilManager.pushStencil(l,q,p);r.drawElements(r.TRIANGLE_FAN,4,r.UNSIGNED_SHORT,(q.indices.length-4)*2);p.stencilManager.popStencil(l,q,p)}else{q=o.data[m];n=p.shaderManager.primitiveShader;p.shaderManager.setShader(n);r.uniformMatrix3fv(n.uniforms.translationMatrix._location,false,l.worldTransform.toArray(true));r.uniformMatrix3fv(n.uniforms.projectionMatrix._location,false,p.currentRenderTarget.projectionMatrix.toArray(true));r.uniform3fv(n.uniforms.tint._location,i.hex2rgb(l.tint));r.uniform1f(n.uniforms.alpha._location,l.worldAlpha);r.bindBuffer(r.ARRAY_BUFFER,q.buffer);r.vertexAttribPointer(n.attributes.aVertexPosition,2,r.FLOAT,false,4*6,0);r.vertexAttribPointer(n.attributes.aColor,4,r.FLOAT,false,4*6,2*4);r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,q.indexBuffer);r.drawElements(r.TRIANGLE_STRIP,q.indices.length,r.UNSIGNED_SHORT,0)}}};f.prototype.updateGraphics=function(l){var r=this.renderer.gl;var p=l._webGL[r.id];if(!p){p=l._webGL[r.id]={lastIndex:0,data:[],gl:r}}l.dirty=false;var m;if(l.clearDirty){l.clearDirty=false;for(m=0;m<p.data.length;m++){var s=p.data[m];s.reset();this.graphicsDataPool.push(s)}p.data=[];p.lastIndex=0}var q;for(m=p.lastIndex;m<l.graphicsData.length;m++){var o=l.graphicsData[m];if(o.type===k.SHAPES.POLY){o.points=o.shape.points.slice();if(o.shape.closed){if(o.points[0]!==o.points[o.points.length-2]||o.points[1]!==o.points[o.points.length-1]){o.points.push(o.points[0],o.points[1])}}if(o.fill){if(o.points.length>=6){if(o.points.length<6*2){q=this.switchMode(p,0);var n=this.buildPoly(o,q);if(!n){q=this.switchMode(p,1);this.buildComplexPoly(o,q)}}else{q=this.switchMode(p,1);this.buildComplexPoly(o,q)}}}if(o.lineWidth>0){q=this.switchMode(p,0);this.buildLine(o,q)}}else{q=this.switchMode(p,0);if(o.type===k.SHAPES.RECT){this.buildRectangle(o,q)}else{if(o.type===k.SHAPES.CIRC||o.type===k.SHAPES.ELIP){this.buildCircle(o,q)}else{if(o.type===k.SHAPES.RREC){this.buildRoundedRectangle(o,q)}}}}p.lastIndex++}for(m=0;m<p.data.length;m++){q=p.data[m];if(q.dirty){q.upload()}}};f.prototype.switchMode=function(m,l){var n;if(!m.data.length){n=this.graphicsDataPool.pop()||new a(m.gl);n.mode=l;m.data.push(n)}else{n=m.data[m.data.length-1];if((n.points.length>320000)||n.mode!==l||l===1){n=this.graphicsDataPool.pop()||new a(m.gl);n.mode=l;m.data.push(n)}}n.dirty=true;return n};f.prototype.buildRectangle=function(D,q){var o=D.shape;var z=o.x;var w=o.y;var m=o.width;var C=o.height;if(D.fill){var p=i.hex2rgb(D.fillColor);var n=D.fillAlpha;var l=p[0]*n;var s=p[1]*n;var v=p[2]*n;var A=q.points;var B=q.indices;var u=A.length/6;A.push(z,w);A.push(l,s,v,n);A.push(z+m,w);A.push(l,s,v,n);A.push(z,w+C);A.push(l,s,v,n);A.push(z+m,w+C);A.push(l,s,v,n);B.push(u,u,u+1,u+2,u+3,u+3)}if(D.lineWidth){var t=D.points;D.points=[z,w,z+m,w,z+m,w+C,z,w+C,z,w];this.buildLine(D,q);D.points=t}};f.prototype.buildRoundedRectangle=function(u,H){var l=u.shape;var t=l.x;var s=l.y;var A=l.width;var z=l.height;var n=l.radius;var v=[];v.push(t,s+n);this.quadraticBezierCurve(t,s+z-n,t,s+z,t+n,s+z,v);this.quadraticBezierCurve(t+A-n,s+z,t+A,s+z,t+A,s+z-n,v);this.quadraticBezierCurve(t+A,s+n,t+A,s,t+A-n,s,v);this.quadraticBezierCurve(t+n,s,t,s,t,s+n+1e-10,v);if(u.fill){var C=i.hex2rgb(u.fillColor);var o=u.fillAlpha;var w=C[0]*o;var E=C[1]*o;var F=C[2]*o;var G=H.points;var p=H.indices;var m=G.length/6;var B=i.PolyK.Triangulate(v);var D=0;for(D=0;D<B.length;D+=3){p.push(B[D]+m);p.push(B[D]+m);p.push(B[D+1]+m);p.push(B[D+2]+m);p.push(B[D+2]+m)}for(D=0;D<v.length;D++){G.push(v[D],v[++D],w,E,F,o)}}if(u.lineWidth){var q=u.points;u.points=v;this.buildLine(u,H);u.points=q}};f.prototype.quadraticBezierCurve=function(v,t,l,F,o,m,D){var E,q,B,p,s,r,w=20,C=D||[];function u(y,x,n){var G=x-y;return y+(G*n)}var z=0;for(var A=0;A<=w;A++){z=A/w;E=u(v,l,z);q=u(t,F,z);B=u(l,o,z);p=u(F,m,z);s=u(E,B,z);r=u(q,p,z);C.push(s,r)}return C};f.prototype.buildCircle=function(s,G){var C=s.shape;var q=C.x;var p=C.y;var w;var v;if(s.type===k.SHAPES.CIRC){w=C.radius;v=C.radius}else{w=C.width;v=C.height}var t=40;var D=(Math.PI*2)/t;var A=0;if(s.fill){var z=i.hex2rgb(s.fillColor);var m=s.fillAlpha;var u=z[0]*m;var B=z[1]*m;var E=z[2]*m;var F=G.points;var n=G.indices;var l=F.length/6;n.push(l);for(A=0;A<t+1;A++){F.push(q,p,u,B,E,m);F.push(q+Math.sin(D*A)*w,p+Math.cos(D*A)*v,u,B,E,m);n.push(l++,l++)}n.push(l-1)}if(s.lineWidth){var o=s.points;s.points=[];for(A=0;A<t+1;A++){s.points.push(q+Math.sin(D*A)*w,p+Math.cos(D*A)*v)}this.buildLine(s,G);s.points=o}};f.prototype.buildLine=function(Z,J){var V=0;var M=Z.points;if(M.length===0){return}if(Z.lineWidth%2){for(V=0;V<M.length;V++){M[V]+=0.5}}var A=new g.Point(M[0],M[1]);var t=new g.Point(M[M.length-2],M[M.length-1]);if(A.x===t.x&&A.y===t.y){M=M.slice();M.pop();M.pop();t=new g.Point(M[M.length-2],M[M.length-1]);var C=t.x+(A.x-t.x)*0.5;var z=t.y+(A.y-t.y)*0.5;M.unshift(C,z);M.push(C,z)}var W=J.points;var q=J.indices;var B=M.length/2;var y=M.length;var Y=W.length/6;var l=Z.lineWidth/2;var L=i.hex2rgb(Z.lineColor);var U=Z.lineAlpha;var R=L[0]*U;var X=L[1]*U;var aa=L[2]*U;var x,w,O,N,G,F,p,o;var Q,P,E,D,n,m;var T,K,v,S,I,u;var ab,H,s;O=M[0];N=M[1];G=M[2];F=M[3];Q=-(N-F);P=O-G;s=Math.sqrt(Q*Q+P*P);Q/=s;P/=s;Q*=l;P*=l;W.push(O-Q,N-P,R,X,aa,U);W.push(O+Q,N+P,R,X,aa,U);for(V=1;V<B-1;V++){O=M[(V-1)*2];N=M[(V-1)*2+1];G=M[(V)*2];F=M[(V)*2+1];p=M[(V+1)*2];o=M[(V+1)*2+1];Q=-(N-F);P=O-G;s=Math.sqrt(Q*Q+P*P);Q/=s;P/=s;Q*=l;P*=l;E=-(F-o);D=G-p;s=Math.sqrt(E*E+D*D);E/=s;D/=s;E*=l;D*=l;T=(-P+N)-(-P+F);K=(-Q+G)-(-Q+O);v=(-Q+O)*(-P+F)-(-Q+G)*(-P+N);S=(-D+o)-(-D+F);I=(-E+G)-(-E+p);u=(-E+p)*(-D+F)-(-E+G)*(-D+o);ab=T*I-S*K;if(Math.abs(ab)<0.1){ab+=10.1;W.push(G-Q,F-P,R,X,aa,U);W.push(G+Q,F+P,R,X,aa,U);continue}x=(K*u-I*v)/ab;w=(S*v-T*u)/ab;H=(x-G)*(x-G)+(w-F)+(w-F);if(H>140*140){n=Q-E;m=P-D;s=Math.sqrt(n*n+m*m);n/=s;m/=s;n*=l;m*=l;W.push(G-n,F-m);W.push(R,X,aa,U);W.push(G+n,F+m);W.push(R,X,aa,U);W.push(G-n,F-m);W.push(R,X,aa,U);y++}else{W.push(x,w);W.push(R,X,aa,U);W.push(G-(x-G),F-(w-F));W.push(R,X,aa,U)}}O=M[(B-2)*2];N=M[(B-2)*2+1];G=M[(B-1)*2];F=M[(B-1)*2+1];Q=-(N-F);P=O-G;s=Math.sqrt(Q*Q+P*P);Q/=s;P/=s;Q*=l;P*=l;W.push(G-Q,F-P);W.push(R,X,aa,U);W.push(G+Q,F+P);W.push(R,X,aa,U);q.push(Y);for(V=0;V<y;V++){q.push(Y++)}q.push(Y-1)};f.prototype.buildComplexPoly=function(w,r){var u=w.points.slice();if(u.length<6){return}var v=r.indices;r.points=u;r.alpha=w.fillAlpha;r.color=i.hex2rgb(w.fillColor);var p=Infinity;var m=-Infinity;var o=Infinity;var l=-Infinity;var t,s;for(var q=0;q<u.length;q+=2){t=u[q];s=u[q+1];p=t<p?t:p;m=t>m?t:m;o=s<o?s:o;l=s>l?s:l}u.push(p,o,m,o,m,l,p,l);var n=u.length/2;for(q=0;q<n;q++){v.push(q)}};f.prototype.buildPoly=function(z,s){var x=z.points;if(x.length<6){return}var w=s.points;var y=s.indices;var m=x.length/2;var p=i.hex2rgb(z.fillColor);var o=z.fillAlpha;var l=p[0]*o;var t=p[1]*o;var v=p[2]*o;var n=i.PolyK.Triangulate(x);if(!n){return false}var u=w.length/6;var q=0;for(q=0;q<n.length;q+=3){y.push(n[q]+u);y.push(n[q]+u);y.push(n[q+1]+u);y.push(n[q+2]+u);y.push(n[q+2]+u)}for(q=0;q<m;q++){w.push(x[q*2],x[q*2+1],l,t,v,o)}return true}},{"../../const":15,"../../math":25,"../../renderers/webgl/WebGLRenderer":41,"../../renderers/webgl/utils/ObjectRenderer":55,"../../utils":68,"./WebGLGraphicsData":21}],21:[function(c,d,b){function a(f){this.gl=f;this.color=[0,0,0];this.points=[];this.indices=[];this.buffer=f.createBuffer();this.indexBuffer=f.createBuffer();this.mode=1;this.alpha=1;this.dirty=true;this.glPoints=null;this.glIndices=null}a.prototype.constructor=a;d.exports=a;a.prototype.reset=function(){this.points.length=0;this.indices.length=0};a.prototype.upload=function(){var f=this.gl;this.glPoints=new Float32Array(this.points);f.bindBuffer(f.ARRAY_BUFFER,this.buffer);f.bufferData(f.ARRAY_BUFFER,this.glPoints,f.STATIC_DRAW);this.glIndices=new Uint16Array(this.indices);f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,this.indexBuffer);f.bufferData(f.ELEMENT_ARRAY_BUFFER,this.glIndices,f.STATIC_DRAW);this.dirty=false};a.prototype.destroy=function(){this.gl=null;this.color=null;this.points=null;this.indices=null;this.gl.deleteBuffer(this.buffer);this.gl.deleteBuffer(this.indexBuffer);this.buffer=null;this.indexBuffer=null;this.glPoints=null;this.glIndices=null}},{}],22:[function(c,d,b){var a=d.exports=Object.assign(c("./const"),c("./math"),{utils:c("./utils"),math:c("./math"),DisplayObject:c("./display/DisplayObject"),Container:c("./display/Container"),Sprite:c("./sprites/Sprite"),ParticleContainer:c("./particles/ParticleContainer"),SpriteRenderer:c("./sprites/webgl/SpriteRenderer"),ParticleRenderer:c("./particles/webgl/ParticleRenderer"),Text:c("./text/Text"),Graphics:c("./graphics/Graphics"),GraphicsData:c("./graphics/GraphicsData"),GraphicsRenderer:c("./graphics/webgl/GraphicsRenderer"),Texture:c("./textures/Texture"),BaseTexture:c("./textures/BaseTexture"),RenderTexture:c("./textures/RenderTexture"),VideoBaseTexture:c("./textures/VideoBaseTexture"),TextureUvs:c("./textures/TextureUvs"),CanvasRenderer:c("./renderers/canvas/CanvasRenderer"),CanvasGraphics:c("./renderers/canvas/utils/CanvasGraphics"),CanvasBuffer:c("./renderers/canvas/utils/CanvasBuffer"),WebGLRenderer:c("./renderers/webgl/WebGLRenderer"),ShaderManager:c("./renderers/webgl/managers/ShaderManager"),Shader:c("./renderers/webgl/shaders/Shader"),ObjectRenderer:c("./renderers/webgl/utils/ObjectRenderer"),RenderTarget:c("./renderers/webgl/utils/RenderTarget"),AbstractFilter:c("./renderers/webgl/filters/AbstractFilter"),autoDetectRenderer:function(i,f,g,h){i=i||800;f=f||600;if(!h&&a.utils.isWebGLSupported()){return new a.WebGLRenderer(i,f,g)}return new a.CanvasRenderer(i,f,g)}})},{"./const":15,"./display/Container":16,"./display/DisplayObject":17,"./graphics/Graphics":18,"./graphics/GraphicsData":19,"./graphics/webgl/GraphicsRenderer":20,"./math":25,"./particles/ParticleContainer":31,"./particles/webgl/ParticleRenderer":33,"./renderers/canvas/CanvasRenderer":36,"./renderers/canvas/utils/CanvasBuffer":37,"./renderers/canvas/utils/CanvasGraphics":38,"./renderers/webgl/WebGLRenderer":41,"./renderers/webgl/filters/AbstractFilter":42,"./renderers/webgl/managers/ShaderManager":48,"./renderers/webgl/shaders/Shader":53,"./renderers/webgl/utils/ObjectRenderer":55,"./renderers/webgl/utils/RenderTarget":57,"./sprites/Sprite":59,"./sprites/webgl/SpriteRenderer":60,"./text/Text":61,"./textures/BaseTexture":62,"./textures/RenderTexture":63,"./textures/Texture":64,"./textures/TextureUvs":65,"./textures/VideoBaseTexture":66,"./utils":68}],23:[function(c,d,b){var f=c("./Point");function a(){this.a=1;this.b=0;this.c=0;this.d=1;this.tx=0;this.ty=0}a.prototype.constructor=a;d.exports=a;a.prototype.fromArray=function(g){this.a=g[0];this.b=g[1];this.c=g[3];this.d=g[4];this.tx=g[2];this.ty=g[5]};a.prototype.toArray=function(g){if(!this.array){this.array=new Float32Array(9)}var h=this.array;if(g){h[0]=this.a;h[1]=this.b;h[2]=0;h[3]=this.c;h[4]=this.d;h[5]=0;h[6]=this.tx;h[7]=this.ty;h[8]=1}else{h[0]=this.a;h[1]=this.c;h[2]=this.tx;h[3]=this.b;h[4]=this.d;h[5]=this.ty;h[6]=0;h[7]=0;h[8]=1}return h};a.prototype.apply=function(j,h){h=h||new f();var g=j.x;var i=j.y;h.x=this.a*g+this.c*i+this.tx;h.y=this.b*g+this.d*i+this.ty;return h};a.prototype.applyInverse=function(k,h){h=h||new f();var j=1/(this.a*this.d+this.c*-this.b);var g=k.x;var i=k.y;h.x=this.d*j*g+-this.c*j*i+(this.ty*this.c-this.tx*this.d)*j;h.y=this.a*j*i+-this.b*j*g+(-this.ty*this.a+this.tx*this.b)*j;return h};a.prototype.translate=function(g,h){this.tx+=g;this.ty+=h;return this};a.prototype.scale=function(g,h){this.a*=g;this.d*=h;this.c*=g;this.b*=h;this.tx*=g;this.ty*=h;return this};a.prototype.rotate=function(l){var k=Math.cos(l);var i=Math.sin(l);var h=this.a;var j=this.c;var g=this.tx;this.a=h*k-this.b*i;this.b=h*i+this.b*k;this.c=j*k-this.d*i;this.d=j*i+this.d*k;this.tx=g*k-this.ty*i;this.ty=g*i+this.ty*k;return this};a.prototype.append=function(h){var g=this.a;var i=this.b;var j=this.c;var k=this.d;this.a=h.a*g+h.b*j;this.b=h.a*i+h.b*k;this.c=h.c*g+h.d*j;this.d=h.c*i+h.d*k;this.tx=h.tx*g+h.ty*j+this.tx;this.ty=h.tx*i+h.ty*k+this.ty;return this};a.prototype.prepend=function(i){var h=this.tx;if(i.a!==1||i.b!==0||i.c!==0||i.d!==1){var g=this.a;var j=this.c;this.a=g*i.a+this.b*i.c;this.b=g*i.b+this.b*i.d;this.c=j*i.a+this.d*i.c;this.d=j*i.b+this.d*i.d}this.tx=h*i.a+this.ty*i.c+i.tx;this.ty=h*i.b+this.ty*i.d+i.ty;return this};a.prototype.invert=function(){var h=this.a;var i=this.b;var j=this.c;var k=this.d;var g=this.tx;var l=h*k-i*j;this.a=k/l;this.b=-i/l;this.c=-j/l;this.d=h/l;this.tx=(j*this.ty-k*g)/l;this.ty=-(h*this.ty-i*g)/l;return this};a.prototype.identity=function(){this.a=1;this.b=0;this.c=0;this.d=1;this.tx=0;this.ty=0;return this};a.prototype.clone=function(){var g=new a();g.a=this.a;g.b=this.b;g.c=this.c;g.d=this.d;g.tx=this.tx;g.ty=this.ty;return g};a.prototype.copy=function(g){g.a=this.a;g.b=this.b;g.c=this.c;g.d=this.d;g.tx=this.tx;g.ty=this.ty;return g};a.IDENTITY=new a();a.TEMP_MATRIX=new a()},{"./Point":24}],24:[function(b,c,a){function d(f,g){this.x=f||0;this.y=g||0}d.prototype.constructor=d;c.exports=d;d.prototype.clone=function(){return new d(this.x,this.y)};d.prototype.copy=function(f){this.set(f.x,f.y)};d.prototype.equals=function(f){return(f.x===this.x)&&(f.y===this.y)};d.prototype.set=function(f,g){this.x=f||0;this.y=g||((g!==0)?this.x:0)}},{}],25:[function(b,c,a){c.exports={Point:b("./Point"),Matrix:b("./Matrix"),Circle:b("./shapes/Circle"),Ellipse:b("./shapes/Ellipse"),Polygon:b("./shapes/Polygon"),Rectangle:b("./shapes/Rectangle"),RoundedRectangle:b("./shapes/RoundedRectangle")}},{"./Matrix":23,"./Point":24,"./shapes/Circle":26,"./shapes/Ellipse":27,"./shapes/Polygon":28,"./shapes/Rectangle":29,"./shapes/RoundedRectangle":30}],26:[function(c,f,b){var d=c("./Rectangle"),a=c("../../const");function g(i,j,h){this.x=i||0;this.y=j||0;this.radius=h||0;this.type=a.SHAPES.CIRC}g.prototype.constructor=g;f.exports=g;g.prototype.clone=function(){return new g(this.x,this.y,this.radius)};g.prototype.contains=function(h,l){if(this.radius<=0){return false}var k=(this.x-h),j=(this.y-l),i=this.radius*this.radius;k*=k;j*=j;return(k+j<=i)};g.prototype.getBounds=function(){return new d(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)}},{"../../const":15,"./Rectangle":29}],27:[function(c,g,b){var f=c("./Rectangle"),a=c("../../const");function d(i,k,j,h){this.x=i||0;this.y=k||0;this.width=j||0;this.height=h||0;this.type=a.SHAPES.ELIP}d.prototype.constructor=d;g.exports=d;d.prototype.clone=function(){return new d(this.x,this.y,this.width,this.height)};d.prototype.contains=function(i,k){if(this.width<=0||this.height<=0){return false}var j=((i-this.x)/this.width),h=((k-this.y)/this.height);j*=j;h*=h;return(j+h<=1)};d.prototype.getBounds=function(){return new f(this.x-this.width,this.y-this.height,this.width,this.height)}},{"../../const":15,"./Rectangle":29}],28:[function(d,f,c){var g=d("../Point"),a=d("../../const");function b(j){var m=j;if(!Array.isArray(m)){m=new Array(arguments.length);for(var h=0;h<m.length;++h){m[h]=arguments[h]}}if(m[0] instanceof g){var n=[];for(var l=0,k=m.length;l<k;l++){n.push(m[l].x,m[l].y)}m=n}this.closed=true;this.points=m;this.type=a.SHAPES.POLY}b.prototype.constructor=b;f.exports=b;b.prototype.clone=function(){return new b(this.points.slice())};b.prototype.contains=function(t,s){var m=false;var h=this.points.length/2;for(var p=0,o=h-1;p<h;o=p++){var r=this.points[p*2],n=this.points[p*2+1],q=this.points[o*2],l=this.points[o*2+1],k=((n>s)!==(l>s))&&(t<(q-r)*(s-n)/(l-n)+r);if(k){m=!m}}return m}},{"../../const":15,"../Point":24}],29:[function(c,f,b){var a=c("../../const");function d(h,j,i,g){this.x=h||0;this.y=j||0;this.width=i||0;this.height=g||0;this.type=a.SHAPES.RECT}d.prototype.constructor=d;f.exports=d;d.EMPTY=new d(0,0,0,0);d.prototype.clone=function(){return new d(this.x,this.y,this.width,this.height)};d.prototype.contains=function(g,h){if(this.width<=0||this.height<=0){return false}if(g>=this.x&&g<this.x+this.width){if(h>=this.y&&h<this.y+this.height){return true}}return false}},{"../../const":15}],30:[function(c,d,b){var a=c("../../const");function f(i,k,j,h,g){this.x=i||0;this.y=k||0;this.width=j||0;this.height=h||0;this.radius=g||20;this.type=a.SHAPES.RREC}f.prototype.constructor=f;d.exports=f;f.prototype.clone=function(){return new f(this.x,this.y,this.width,this.height,this.radius)};f.prototype.contains=function(g,h){if(this.width<=0||this.height<=0){return false}if(g>=this.x&&g<=this.x+this.width){if(h>=this.y&&h<=this.y+this.height){return true}}return false}},{"../../const":15}],31:[function(d,f,c){var b=d("../display/Container"),a=d("../const");function g(i,h){b.call(this);this._properties=[false,true,false,false,false];this._size=i||15000;this._buffers=null;this._updateStatic=false;this.interactiveChildren=false;this.blendMode=a.BLEND_MODES.NORMAL;this.roundPixels=true;this.setProperties(h)}g.prototype=Object.create(b.prototype);g.prototype.constructor=g;f.exports=g;g.prototype.setProperties=function(h){if(h){this._properties[0]="scale" in h?!!h.scale:this._properties[0];this._properties[1]="position" in h?!!h.position:this._properties[1];this._properties[2]="rotation" in h?!!h.rotation:this._properties[2];this._properties[3]="uvs" in h?!!h.uvs:this._properties[3];this._properties[4]="alpha" in h?!!h.alpha:this._properties[4]}};g.prototype.updateTransform=function(){this.displayObjectUpdateTransform()};g.prototype.renderWebGL=function(h){if(!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable){return}h.setObjectRenderer(h.plugins.particle);h.plugins.particle.render(this)};g.prototype.addChildAt=function(i,h){if(i===this){return i}if(h>=0&&h<=this.children.length){if(i.parent){i.parent.removeChild(i)}i.parent=this;this.children.splice(h,0,i);this._updateStatic=true;return i}else{throw new Error(i+"addChildAt: The index "+h+" supplied is out of bounds "+this.children.length)}};g.prototype.removeChildAt=function(h){var i=this.getChildAt(h);i.parent=null;this.children.splice(h,1);this._updateStatic=true;return i};g.prototype.renderCanvas=function(s){if(!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable){return}var h=s.context;var m=this.worldTransform;var t=true;var r=0;var q=0;var n=0;var l=0;h.globalAlpha=this.worldAlpha;this.displayObjectUpdateTransform();for(var o=0;o<this.children.length;++o){var k=this.children[o];if(!k.visible){continue}var j=k.texture.frame;h.globalAlpha=this.worldAlpha*k.alpha;if(k.rotation%(Math.PI*2)===0){if(t){h.setTransform(m.a,m.b,m.c,m.d,m.tx,m.ty);t=false}r=((k.anchor.x)*(-j.width*k.scale.x)+k.position.x+0.5);q=((k.anchor.y)*(-j.height*k.scale.y)+k.position.y+0.5);n=j.width*k.scale.x;l=j.height*k.scale.y}else{if(!t){t=true}k.displayObjectUpdateTransform();var p=k.worldTransform;if(s.roundPixels){h.setTransform(p.a,p.b,p.c,p.d,p.tx|0,p.ty|0)}else{h.setTransform(p.a,p.b,p.c,p.d,p.tx,p.ty)}r=((k.anchor.x)*(-j.width)+0.5);q=((k.anchor.y)*(-j.height)+0.5);n=j.width;l=j.height}h.drawImage(k.texture.baseTexture.source,j.x,j.y,j.width,j.height,r,q,n,l)}};g.prototype.destroy=function(){b.prototype.destroy.apply(this,arguments);if(this._buffers){for(var h=0;h<this._buffers.length;++h){this._buffers.destroy()}}this._properties=null;this._buffers=null}},{"../const":15,"../display/Container":16}],32:[function(b,c,a){function d(k,h,g){this.gl=k;this.vertSize=2;this.vertByteSize=this.vertSize*4;this.size=g;this.dynamicProperties=[];this.staticProperties=[];for(var f=0;f<h.length;f++){var j=h[f];if(j.dynamic){this.dynamicProperties.push(j)}else{this.staticProperties.push(j)}}this.staticStride=0;this.staticBuffer=null;this.staticData=null;this.dynamicStride=0;this.dynamicBuffer=null;this.dynamicData=null;this.initBuffers()}d.prototype.constructor=d;c.exports=d;d.prototype.initBuffers=function(){var k=this.gl;var f;var h;var j=0;this.dynamicStride=0;for(f=0;f<this.dynamicProperties.length;f++){h=this.dynamicProperties[f];h.offset=j;j+=h.size;this.dynamicStride+=h.size}this.dynamicData=new Float32Array(this.size*this.dynamicStride*4);this.dynamicBuffer=k.createBuffer();k.bindBuffer(k.ARRAY_BUFFER,this.dynamicBuffer);k.bufferData(k.ARRAY_BUFFER,this.dynamicData,k.DYNAMIC_DRAW);var g=0;this.staticStride=0;for(f=0;f<this.staticProperties.length;f++){h=this.staticProperties[f];h.offset=g;g+=h.size;this.staticStride+=h.size}this.staticData=new Float32Array(this.size*this.staticStride*4);this.staticBuffer=k.createBuffer();k.bindBuffer(k.ARRAY_BUFFER,this.staticBuffer);k.bufferData(k.ARRAY_BUFFER,this.staticData,k.DYNAMIC_DRAW)};d.prototype.uploadDynamic=function(h,l,g){var k=this.gl;for(var f=0;f<this.dynamicProperties.length;f++){var j=this.dynamicProperties[f];j.uploadFunction(h,l,g,this.dynamicData,this.dynamicStride,j.offset)}k.bindBuffer(k.ARRAY_BUFFER,this.dynamicBuffer);k.bufferSubData(k.ARRAY_BUFFER,0,this.dynamicData)};d.prototype.uploadStatic=function(h,l,g){var k=this.gl;for(var f=0;f<this.staticProperties.length;f++){var j=this.staticProperties[f];j.uploadFunction(h,l,g,this.staticData,this.staticStride,j.offset)}k.bindBuffer(k.ARRAY_BUFFER,this.staticBuffer);k.bufferSubData(k.ARRAY_BUFFER,0,this.staticData)};d.prototype.bind=function(){var h=this.gl;var f,g;h.bindBuffer(h.ARRAY_BUFFER,this.dynamicBuffer);for(f=0;f<this.dynamicProperties.length;f++){g=this.dynamicProperties[f];h.vertexAttribPointer(g.attribute,g.size,h.FLOAT,false,this.dynamicStride*4,g.offset*4)}h.bindBuffer(h.ARRAY_BUFFER,this.staticBuffer);for(f=0;f<this.staticProperties.length;f++){g=this.staticProperties[f];h.vertexAttribPointer(g.attribute,g.size,h.FLOAT,false,this.staticStride*4,g.offset*4)}};d.prototype.destroy=function(){this.dynamicProperties=null;this.dynamicData=null;this.gl.deleteBuffer(this.dynamicBuffer);this.staticProperties=null;this.staticData=null;this.gl.deleteBuffer(this.staticBuffer)}},{}],33:[function(d,c,g){var j=d("../../renderers/webgl/utils/ObjectRenderer"),i=d("../../renderers/webgl/WebGLRenderer"),f=d("./ParticleShader"),b=d("./ParticleBuffer"),h=d("../../math");function a(m){j.call(this,m);this.size=15000;var n=this.size*6;this.indices=new Uint16Array(n);for(var l=0,k=0;l<n;l+=6,k+=4){this.indices[l+0]=k+0;this.indices[l+1]=k+1;this.indices[l+2]=k+2;this.indices[l+3]=k+0;this.indices[l+4]=k+2;this.indices[l+5]=k+3}this.shader=null;this.indexBuffer=null;this.properties=null;this.tempMatrix=new h.Matrix()}a.prototype=Object.create(j.prototype);a.prototype.constructor=a;c.exports=a;i.registerPlugin("particle",a);a.prototype.onContextChange=function(){var k=this.renderer.gl;this.shader=new f(this.renderer.shaderManager);this.indexBuffer=k.createBuffer();k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,this.indexBuffer);k.bufferData(k.ELEMENT_ARRAY_BUFFER,this.indices,k.STATIC_DRAW);this.properties=[{attribute:this.shader.attributes.aVertexPosition,dynamic:false,size:2,uploadFunction:this.uploadVertices,offset:0},{attribute:this.shader.attributes.aPositionCoord,dynamic:true,size:2,uploadFunction:this.uploadPosition,offset:0},{attribute:this.shader.attributes.aRotation,dynamic:false,size:1,uploadFunction:this.uploadRotation,offset:0},{attribute:this.shader.attributes.aTextureCoord,dynamic:false,size:2,uploadFunction:this.uploadUvs,offset:0},{attribute:this.shader.attributes.aColor,dynamic:false,size:1,uploadFunction:this.uploadAlpha,offset:0}]};a.prototype.start=function(){var l=this.renderer.gl;l.activeTexture(l.TEXTURE0);l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var k=this.shader;this.renderer.shaderManager.setShader(k)};a.prototype.render=function(l){var n=l.children,u=n.length,v=l._size;if(u===0){return}else{if(u>v){u=v}}if(!l._buffers){l._buffers=this.generateBuffers(l)}this.renderer.blendModeManager.setBlendMode(l.blendMode);var t=this.renderer.gl;var o=l.worldTransform.copy(this.tempMatrix);o.prepend(this.renderer.currentRenderTarget.projectionMatrix);t.uniformMatrix3fv(this.shader.uniforms.projectionMatrix._location,false,o.toArray(true));t.uniform1f(this.shader.uniforms.uAlpha._location,l.worldAlpha);var w=l._updateStatic;var k=n[0]._texture.baseTexture;if(!k._glTextures[t.id]){if(!this.renderer.updateTexture(k)){return}if(!this.properties[0].dynamic||!this.properties[3].dynamic){w=true}}else{t.bindTexture(t.TEXTURE_2D,k._glTextures[t.id])}var q=0;for(var r=0;r<u;r+=this.size){var s=(u-r);if(s>this.size){s=this.size}var p=l._buffers[q++];p.uploadDynamic(n,r,s);if(w){p.uploadStatic(n,r,s)}p.bind(this.shader);t.drawElements(t.TRIANGLES,s*6,t.UNSIGNED_SHORT,0);this.renderer.drawCount++}l._updateStatic=false};a.prototype.generateBuffers=function(l){var o=this.renderer.gl,k=[],n=l._size,m;for(m=0;m<l._properties.length;m++){this.properties[m].dynamic=l._properties[m]}for(m=0;m<n;m+=this.size){k.push(new b(o,this.properties,this.size,this.shader))}return k};a.prototype.uploadVertices=function(l,y,q,s,k,n){var z,t,m,x,w,r,p,v,u;for(var o=0;o<q;o++){z=l[y+o];t=z._texture;x=z.scale.x;w=z.scale.y;if(t.trim){m=t.trim;p=m.x-z.anchor.x*m.width;r=p+t.crop.width;u=m.y-z.anchor.y*m.height;v=u+t.crop.height}else{r=(t._frame.width)*(1-z.anchor.x);p=(t._frame.width)*-z.anchor.x;v=t._frame.height*(1-z.anchor.y);u=t._frame.height*-z.anchor.y}s[n]=p*x;s[n+1]=u*w;s[n+k]=r*x;s[n+k+1]=u*w;s[n+k*2]=r*x;s[n+k*2+1]=v*w;s[n+k*3]=p*x;s[n+k*3+1]=v*w;n+=k*4}};a.prototype.uploadPosition=function(m,q,l,r,o,p){for(var k=0;k<l;k++){var n=m[q+k].position;r[p]=n.x;r[p+1]=n.y;r[p+o]=n.x;r[p+o+1]=n.y;r[p+o*2]=n.x;r[p+o*2+1]=n.y;r[p+o*3]=n.x;r[p+o*3+1]=n.y;p+=o*4}};a.prototype.uploadRotation=function(n,q,m,r,o,p){for(var l=0;l<m;l++){var k=n[q+l].rotation;r[p]=k;r[p+o]=k;r[p+o*2]=k;r[p+o*3]=k;p+=o*4}};a.prototype.uploadUvs=function(n,q,m,r,o,p){for(var l=0;l<m;l++){var k=n[q+l]._texture._uvs;if(k){r[p]=k.x0;r[p+1]=k.y0;r[p+o]=k.x1;r[p+o+1]=k.y1;r[p+o*2]=k.x2;r[p+o*2+1]=k.y2;r[p+o*3]=k.x3;r[p+o*3+1]=k.y3;p+=o*4}else{r[p]=0;r[p+1]=0;r[p+o]=0;r[p+o+1]=0;r[p+o*2]=0;r[p+o*2+1]=0;r[p+o*3]=0;r[p+o*3+1]=0;p+=o*4}}};a.prototype.uploadAlpha=function(m,q,l,r,o,p){for(var k=0;k<l;k++){var n=m[q+k].alpha;r[p]=n;r[p+o]=n;r[p+o*2]=n;r[p+o*3]=n;p+=o*4}};a.prototype.destroy=function(){if(this.renderer.gl){this.renderer.gl.deleteBuffer(this.indexBuffer)}j.prototype.destroy.apply(this,arguments);this.shader.destroy();this.indices=null;this.tempMatrix=null}},{"../../math":25,"../../renderers/webgl/WebGLRenderer":41,"../../renderers/webgl/utils/ObjectRenderer":55,"./ParticleBuffer":32,"./ParticleShader":34}],34:[function(d,f,b){var c=d("../../renderers/webgl/shaders/TextureShader");function a(g){c.call(this,g,["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute float aColor;","attribute vec2 aPositionCoord;","attribute vec2 aScale;","attribute float aRotation;","uniform mat3 projectionMatrix;","varying vec2 vTextureCoord;","varying float vColor;","void main(void){","   vec2 v = aVertexPosition;","   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);","   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);","   v = v + aPositionCoord;","   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"].join("\n"),["precision lowp float;","varying vec2 vTextureCoord;","varying float vColor;","uniform sampler2D uSampler;","uniform float uAlpha;","void main(void){","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor * uAlpha ;","}"].join("\n"),{uAlpha:{type:"1f",value:1}},{aPositionCoord:0,aRotation:0})}a.prototype=Object.create(c.prototype);a.prototype.constructor=a;f.exports=a},{"../../renderers/webgl/shaders/TextureShader":54}],35:[function(f,g,d){var c=f("../utils"),i=f("../math"),a=f("../const"),h=f("eventemitter3");function b(n,m,j,k){h.call(this);c.sayHello(n);if(k){for(var l in a.DEFAULT_RENDER_OPTIONS){if(typeof k[l]==="undefined"){k[l]=a.DEFAULT_RENDER_OPTIONS[l]}}}else{k=a.DEFAULT_RENDER_OPTIONS}this.type=a.RENDERER_TYPE.UNKNOWN;this.width=m||800;this.height=j||600;this.view=k.view||document.createElement("canvas");this.resolution=k.resolution;this.transparent=k.transparent;this.autoResize=k.autoResize||false;this.blendModes=null;this.preserveDrawingBuffer=k.preserveDrawingBuffer;this.clearBeforeRender=k.clearBeforeRender;this._backgroundColor=0;this._backgroundColorRgb=[0,0,0];this._backgroundColorString="#000000";this.backgroundColor=k.backgroundColor||this._backgroundColor;this._tempDisplayObjectParent={worldTransform:new i.Matrix(),worldAlpha:1,children:[]};this._lastObjectRendered=this._tempDisplayObjectParent}b.prototype=Object.create(h.prototype);b.prototype.constructor=b;g.exports=b;Object.defineProperties(b.prototype,{backgroundColor:{get:function(){return this._backgroundColor},set:function(j){this._backgroundColor=j;this._backgroundColorString=c.hex2string(j);c.hex2rgb(j,this._backgroundColorRgb)}}});b.prototype.resize=function(k,j){this.width=k*this.resolution;this.height=j*this.resolution;this.view.width=this.width;this.view.height=this.height;if(this.autoResize){this.view.style.width=this.width/this.resolution+"px";this.view.style.height=this.height/this.resolution+"px"}};b.prototype.destroy=function(j){if(j&&this.view.parent){this.view.parent.removeChild(this.view)}this.type=a.RENDERER_TYPE.UNKNOWN;this.width=0;this.height=0;this.view=null;this.resolution=0;this.transparent=false;this.autoResize=false;this.blendModes=null;this.preserveDrawingBuffer=false;this.clearBeforeRender=false;this._backgroundColor=0;this._backgroundColorRgb=null;this._backgroundColorString=null}},{"../const":15,"../math":25,"../utils":68,eventemitter3:4}],36:[function(c,b,d){var i=c("../SystemRenderer"),a=c("./utils/CanvasMaskManager"),h=c("../../utils"),g=c("../../math"),j=c("../../const");function f(m,k,l){i.call(this,"Canvas",m,k,l);this.type=j.RENDERER_TYPE.CANVAS;this.context=this.view.getContext("2d",{alpha:this.transparent});this.refresh=true;this.maskManager=new a();this.roundPixels=false;this.currentScaleMode=j.SCALE_MODES.DEFAULT;this.currentBlendMode=j.BLEND_MODES.NORMAL;this.smoothProperty="imageSmoothingEnabled";if(!this.context.imageSmoothingEnabled){if(this.context.webkitImageSmoothingEnabled){this.smoothProperty="webkitImageSmoothingEnabled"}else{if(this.context.mozImageSmoothingEnabled){this.smoothProperty="mozImageSmoothingEnabled"}else{if(this.context.oImageSmoothingEnabled){this.smoothProperty="oImageSmoothingEnabled"}else{if(this.context.msImageSmoothingEnabled){this.smoothProperty="msImageSmoothingEnabled"}}}}}this.initPlugins();this._mapBlendModes();this._tempDisplayObjectParent={worldTransform:new g.Matrix(),worldAlpha:1};this.resize(m,k)}f.prototype=Object.create(i.prototype);f.prototype.constructor=f;b.exports=f;h.pluginTarget.mixin(f);f.prototype.render=function(k){var l=k.parent;this._lastObjectRendered=k;k.parent=this._tempDisplayObjectParent;k.updateTransform();k.parent=l;this.context.setTransform(1,0,0,1,0,0);this.context.globalAlpha=1;this.currentBlendMode=j.BLEND_MODES.NORMAL;this.context.globalCompositeOperation=this.blendModes[j.BLEND_MODES.NORMAL];if(navigator.isCocoonJS&&this.view.screencanvas){this.context.fillStyle="black";this.context.clear()}if(this.clearBeforeRender){if(this.transparent){this.context.clearRect(0,0,this.width,this.height)}else{this.context.fillStyle=this._backgroundColorString;this.context.fillRect(0,0,this.width,this.height)}}this.renderDisplayObject(k,this.context)};f.prototype.destroy=function(k){this.destroyPlugins();i.prototype.destroy.call(this,k);this.context=null;this.refresh=true;this.maskManager.destroy();this.maskManager=null;this.roundPixels=false;this.currentScaleMode=0;this.currentBlendMode=0;this.smoothProperty=null};f.prototype.renderDisplayObject=function(m,l){var k=this.context;this.context=l;m.renderCanvas(this);this.context=k};f.prototype._mapBlendModes=function(){if(!this.blendModes){this.blendModes={};if(h.canUseNewCanvasBlendModes()){this.blendModes[j.BLEND_MODES.NORMAL]="source-over";this.blendModes[j.BLEND_MODES.ADD]="lighter";this.blendModes[j.BLEND_MODES.MULTIPLY]="multiply";this.blendModes[j.BLEND_MODES.SCREEN]="screen";this.blendModes[j.BLEND_MODES.OVERLAY]="overlay";this.blendModes[j.BLEND_MODES.DARKEN]="darken";this.blendModes[j.BLEND_MODES.LIGHTEN]="lighten";this.blendModes[j.BLEND_MODES.COLOR_DODGE]="color-dodge";this.blendModes[j.BLEND_MODES.COLOR_BURN]="color-burn";this.blendModes[j.BLEND_MODES.HARD_LIGHT]="hard-light";this.blendModes[j.BLEND_MODES.SOFT_LIGHT]="soft-light";this.blendModes[j.BLEND_MODES.DIFFERENCE]="difference";this.blendModes[j.BLEND_MODES.EXCLUSION]="exclusion";this.blendModes[j.BLEND_MODES.HUE]="hue";this.blendModes[j.BLEND_MODES.SATURATION]="saturation";this.blendModes[j.BLEND_MODES.COLOR]="color";this.blendModes[j.BLEND_MODES.LUMINOSITY]="luminosity"}else{this.blendModes[j.BLEND_MODES.NORMAL]="source-over";this.blendModes[j.BLEND_MODES.ADD]="lighter";this.blendModes[j.BLEND_MODES.MULTIPLY]="source-over";this.blendModes[j.BLEND_MODES.SCREEN]="source-over";this.blendModes[j.BLEND_MODES.OVERLAY]="source-over";this.blendModes[j.BLEND_MODES.DARKEN]="source-over";this.blendModes[j.BLEND_MODES.LIGHTEN]="source-over";this.blendModes[j.BLEND_MODES.COLOR_DODGE]="source-over";this.blendModes[j.BLEND_MODES.COLOR_BURN]="source-over";this.blendModes[j.BLEND_MODES.HARD_LIGHT]="source-over";this.blendModes[j.BLEND_MODES.SOFT_LIGHT]="source-over";this.blendModes[j.BLEND_MODES.DIFFERENCE]="source-over";this.blendModes[j.BLEND_MODES.EXCLUSION]="source-over";this.blendModes[j.BLEND_MODES.HUE]="source-over";this.blendModes[j.BLEND_MODES.SATURATION]="source-over";this.blendModes[j.BLEND_MODES.COLOR]="source-over";this.blendModes[j.BLEND_MODES.LUMINOSITY]="source-over"}}}},{"../../const":15,"../../math":25,"../../utils":68,"../SystemRenderer":35,"./utils/CanvasMaskManager":39}],37:[function(b,d,a){function c(g,f){this.canvas=document.createElement("canvas");this.context=this.canvas.getContext("2d");this.canvas.width=g;this.canvas.height=f}c.prototype.constructor=c;d.exports=c;Object.defineProperties(c.prototype,{width:{get:function(){return this.canvas.width},set:function(f){this.canvas.width=f}},height:{get:function(){return this.canvas.height},set:function(f){this.canvas.height=f}}});c.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0);this.context.clearRect(0,0,this.canvas.width,this.canvas.height)};c.prototype.resize=function(g,f){this.canvas.width=g;this.canvas.height=f};c.prototype.destroy=function(){this.context=null;this.canvas=null}},{}],38:[function(c,d,b){var a=c("../../../const");var f=d.exports={};f.renderGraphics=function(K,m){var F=K.worldAlpha;if(K.dirty){this.updateGraphicsTint(K);K.dirty=false}for(var I=0;I<K.graphicsData.length;I++){var M=K.graphicsData[I];var l=M.shape;var r=M._fillTint;var k=M._lineTint;m.lineWidth=M.lineWidth;if(M.type===a.SHAPES.POLY){m.beginPath();var H=l.points;m.moveTo(H[0],H[1]);for(var G=1;G<H.length/2;G++){m.lineTo(H[G*2],H[G*2+1])}if(l.closed){m.lineTo(H[0],H[1])}if(H[0]===H[H.length-2]&&H[1]===H[H.length-1]){m.closePath()}if(M.fill){m.globalAlpha=M.fillAlpha*F;m.fillStyle="#"+("00000"+(r|0).toString(16)).substr(-6);m.fill()}if(M.lineWidth){m.globalAlpha=M.lineAlpha*F;m.strokeStyle="#"+("00000"+(k|0).toString(16)).substr(-6);m.stroke()}}else{if(M.type===a.SHAPES.RECT){if(M.fillColor||M.fillColor===0){m.globalAlpha=M.fillAlpha*F;m.fillStyle="#"+("00000"+(r|0).toString(16)).substr(-6);m.fillRect(l.x,l.y,l.width,l.height)}if(M.lineWidth){m.globalAlpha=M.lineAlpha*F;m.strokeStyle="#"+("00000"+(k|0).toString(16)).substr(-6);m.strokeRect(l.x,l.y,l.width,l.height)}}else{if(M.type===a.SHAPES.CIRC){m.beginPath();m.arc(l.x,l.y,l.radius,0,2*Math.PI);m.closePath();if(M.fill){m.globalAlpha=M.fillAlpha*F;m.fillStyle="#"+("00000"+(r|0).toString(16)).substr(-6);m.fill()}if(M.lineWidth){m.globalAlpha=M.lineAlpha*F;m.strokeStyle="#"+("00000"+(k|0).toString(16)).substr(-6);m.stroke()}}else{if(M.type===a.SHAPES.ELIP){var z=l.width*2;var J=l.height*2;var v=l.x-z/2;var u=l.y-J/2;m.beginPath();var A=0.5522848,q=(z/2)*A,o=(J/2)*A,E=v+z,g=u+J,B=v+z/2,L=u+J/2;m.moveTo(v,L);m.bezierCurveTo(v,L-o,B-q,u,B,u);m.bezierCurveTo(B+q,u,E,L-o,E,L);m.bezierCurveTo(E,L+o,B+q,g,B,g);m.bezierCurveTo(B-q,g,v,L+o,v,L);m.closePath();if(M.fill){m.globalAlpha=M.fillAlpha*F;m.fillStyle="#"+("00000"+(r|0).toString(16)).substr(-6);m.fill()}if(M.lineWidth){m.globalAlpha=M.lineAlpha*F;m.strokeStyle="#"+("00000"+(k|0).toString(16)).substr(-6);m.stroke()}}else{if(M.type===a.SHAPES.RREC){var s=l.x;var p=l.y;var D=l.width;var C=l.height;var n=l.radius;var t=Math.min(D,C)/2|0;n=n>t?t:n;m.beginPath();m.moveTo(s,p+n);m.lineTo(s,p+C-n);m.quadraticCurveTo(s,p+C,s+n,p+C);m.lineTo(s+D-n,p+C);m.quadraticCurveTo(s+D,p+C,s+D,p+C-n);m.lineTo(s+D,p+n);m.quadraticCurveTo(s+D,p,s+D-n,p);m.lineTo(s+n,p);m.quadraticCurveTo(s,p,s,p+n);m.closePath();if(M.fillColor||M.fillColor===0){m.globalAlpha=M.fillAlpha*F;m.fillStyle="#"+("00000"+(r|0).toString(16)).substr(-6);m.fill()}if(M.lineWidth){m.globalAlpha=M.lineAlpha*F;m.strokeStyle="#"+("00000"+(k|0).toString(16)).substr(-6);m.stroke()}}}}}}}};f.renderGraphicsMask=function(I,l){var G=I.graphicsData.length;if(G===0){return}l.beginPath();for(var F=0;F<G;F++){var K=I.graphicsData[F];var k=K.shape;if(K.type===a.SHAPES.POLY){var E=k.points;l.moveTo(E[0],E[1]);for(var D=1;D<E.length/2;D++){l.lineTo(E[D*2],E[D*2+1])}if(E[0]===E[E.length-2]&&E[1]===E[E.length-1]){l.closePath()}}else{if(K.type===a.SHAPES.RECT){l.rect(k.x,k.y,k.width,k.height);l.closePath()}else{if(K.type===a.SHAPES.CIRC){l.arc(k.x,k.y,k.radius,0,2*Math.PI);l.closePath()}else{if(K.type===a.SHAPES.ELIP){var u=k.width*2;var H=k.height*2;var t=k.x-u/2;var s=k.y-H/2;var v=0.5522848,p=(u/2)*v,n=(H/2)*v,C=t+u,g=s+H,z=t+u/2,J=s+H/2;l.moveTo(t,J);l.bezierCurveTo(t,J-n,z-p,s,z,s);l.bezierCurveTo(z+p,s,C,J-n,C,J);l.bezierCurveTo(C,J+n,z+p,g,z,g);l.bezierCurveTo(z-p,g,t,J+n,t,J);l.closePath()}else{if(K.type===a.SHAPES.RREC){var q=k.x;var o=k.y;var B=k.width;var A=k.height;var m=k.radius;var r=Math.min(B,A)/2|0;m=m>r?r:m;l.moveTo(q,o+m);l.lineTo(q,o+A-m);l.quadraticCurveTo(q,o+A,q+m,o+A);l.lineTo(q+B-m,o+A);l.quadraticCurveTo(q+B,o+A,q+B,o+A-m);l.lineTo(q+B,o+m);l.quadraticCurveTo(q+B,o,q+B-m,o);l.lineTo(q+m,o);l.quadraticCurveTo(q,o,q,o+m);l.closePath()}}}}}}};f.updateGraphicsTint=function(j){if(j.tint===16777215){return}var h=(j.tint>>16&255)/255;var g=(j.tint>>8&255)/255;var m=(j.tint&255)/255;for(var k=0;k<j.graphicsData.length;k++){var l=j.graphicsData[k];var o=l.fillColor|0;var n=l.lineColor|0;l._fillTint=(((o>>16&255)/255*h*255<<16)+((o>>8&255)/255*g*255<<8)+(o&255)/255*m*255);l._lineTint=(((n>>16&255)/255*h*255<<16)+((n>>8&255)/255*g*255<<8)+(n&255)/255*m*255)}}},{"../../../const":15}],39:[function(b,c,a){var f=b("./CanvasGraphics");function d(){}d.prototype.constructor=d;c.exports=d;d.prototype.pushMask=function(k,j){j.context.save();var g=k.alpha;var i=k.worldTransform;var h=j.resolution;j.context.setTransform(i.a*h,i.b*h,i.c*h,i.d*h,i.tx*h,i.ty*h);if(!k.texture){f.renderGraphicsMask(k,j.context);j.context.clip()}k.worldAlpha=g};d.prototype.popMask=function(g){g.context.restore()}},{"./CanvasGraphics":38}],40:[function(c,d,b){var a=c("../../../utils");var f=d.exports={};f.getTintedTexture=function(j,g){var l=j.texture;g=f.roundColor(g);var k="#"+("00000"+(g|0).toString(16)).substr(-6);l.tintCache=l.tintCache||{};if(l.tintCache[k]){return l.tintCache[k]}var h=f.canvas||document.createElement("canvas");f.tintMethod(l,g,h);if(f.convertTintToImage){var i=new Image();i.src=h.toDataURL();l.tintCache[k]=i}else{l.tintCache[k]=h;f.canvas=null}return h};f.tintWithMultiply=function(k,g,h){var i=h.getContext("2d");var j=k.crop;h.width=j.width;h.height=j.height;i.fillStyle="#"+("00000"+(g|0).toString(16)).substr(-6);i.fillRect(0,0,j.width,j.height);i.globalCompositeOperation="multiply";i.drawImage(k.baseTexture.source,j.x,j.y,j.width,j.height,0,0,j.width,j.height);i.globalCompositeOperation="destination-atop";i.drawImage(k.baseTexture.source,j.x,j.y,j.width,j.height,0,0,j.width,j.height)};f.tintWithOverlay=function(k,g,h){var i=h.getContext("2d");var j=k.crop;h.width=j.width;h.height=j.height;i.globalCompositeOperation="copy";i.fillStyle="#"+("00000"+(g|0).toString(16)).substr(-6);i.fillRect(0,0,j.width,j.height);i.globalCompositeOperation="destination-atop";i.drawImage(k.baseTexture.source,j.x,j.y,j.width,j.height,0,0,j.width,j.height)};f.tintWithPerPixel=function(s,n,l){var k=l.getContext("2d");var p=s.crop;l.width=p.width;l.height=p.height;k.globalCompositeOperation="copy";k.drawImage(s.baseTexture.source,p.x,p.y,p.width,p.height,0,0,p.width,p.height);var j=a.hex2rgb(n);var h=j[0],q=j[1],t=j[2];var u=k.getImageData(0,0,p.width,p.height);var m=u.data;for(var o=0;o<m.length;o+=4){m[o+0]*=h;m[o+1]*=q;m[o+2]*=t}k.putImageData(u,0,0)};f.roundColor=function(g){var h=f.cacheStepsPerColorChannel;var i=a.hex2rgb(g);i[0]=Math.min(255,(i[0]/h)*h);i[1]=Math.min(255,(i[1]/h)*h);i[2]=Math.min(255,(i[2]/h)*h);return a.rgb2hex(i)};f.cacheStepsPerColorChannel=8;f.convertTintToImage=false;f.canUseMultiply=a.canUseNewCanvasBlendModes();f.tintMethod=f.canUseMultiply?f.tintWithMultiply:f.tintWithPerPixel},{"../../../utils":68}],41:[function(d,c,f){var o=d("../SystemRenderer"),j=d("./managers/ShaderManager"),a=d("./managers/MaskManager"),i=d("./managers/StencilManager"),g=d("./managers/FilterManager"),h=d("./managers/BlendModeManager"),b=d("./utils/RenderTarget"),n=d("./utils/ObjectRenderer"),l=d("./filters/FXAAFilter"),m=d("../../utils"),p=d("../../const");function k(s,q,r){r=r||{};o.call(this,"WebGL",s,q,r);this.type=p.RENDERER_TYPE.WEBGL;this.handleContextLost=this.handleContextLost.bind(this);this.handleContextRestored=this.handleContextRestored.bind(this);this.view.addEventListener("webglcontextlost",this.handleContextLost,false);this.view.addEventListener("webglcontextrestored",this.handleContextRestored,false);this._useFXAA=!!r.forceFXAA&&r.antialias;this._FXAAFilter=null;this._contextOptions={alpha:this.transparent,antialias:r.antialias,premultipliedAlpha:this.transparent&&this.transparent!=="notMultiplied",stencil:true,preserveDrawingBuffer:r.preserveDrawingBuffer};this.drawCount=0;this.shaderManager=new j(this);this.maskManager=new a(this);this.stencilManager=new i(this);this.filterManager=new g(this);this.blendModeManager=new h(this);this.currentRenderTarget=null;this.currentRenderer=new n(this);this.initPlugins();this._initContext();this._mapBlendModes();this._renderTargetStack=[]}k.prototype=Object.create(o.prototype);k.prototype.constructor=k;c.exports=k;m.pluginTarget.mixin(k);k.glContextId=0;k.prototype._initContext=function(){var q=this.view.getContext("webgl",this._contextOptions)||this.view.getContext("experimental-webgl",this._contextOptions);this.gl=q;if(!q){throw new Error("This browser does not support webGL. Try using the canvas renderer")}this.glContextId=k.glContextId++;q.id=this.glContextId;q.renderer=this;q.disable(q.DEPTH_TEST);q.disable(q.CULL_FACE);q.enable(q.BLEND);this.renderTarget=new b(this.gl,this.width,this.height,null,this.resolution,true);this.setRenderTarget(this.renderTarget);this.emit("context",q);this.resize(this.width,this.height);if(!this._useFXAA){this._useFXAA=(this._contextOptions.antialias&&!q.getContextAttributes().antialias)}if(this._useFXAA){window.console.warn("FXAA antialiasing being used instead of native antialiasing");this._FXAAFilter=[new l()]}};k.prototype.render=function(q){if(this.gl.isContextLost()){return}this.drawCount=0;this._lastObjectRendered=q;if(this._useFXAA){this._FXAAFilter[0].uniforms.resolution.value.x=this.width;this._FXAAFilter[0].uniforms.resolution.value.y=this.height;q.filterArea=this.renderTarget.size;q.filters=this._FXAAFilter}var r=q.parent;q.parent=this._tempDisplayObjectParent;q.updateTransform();q.parent=r;var s=this.gl;this.setRenderTarget(this.renderTarget);if(this.clearBeforeRender){if(this.transparent){s.clearColor(0,0,0,0)}else{s.clearColor(this._backgroundColorRgb[0],this._backgroundColorRgb[1],this._backgroundColorRgb[2],1)}s.clear(s.COLOR_BUFFER_BIT)}this.renderDisplayObject(q,this.renderTarget)};k.prototype.renderDisplayObject=function(s,r,q){this.setRenderTarget(r);if(q){r.clear()}this.filterManager.setFilterStack(r.filterStack);s.renderWebGL(this);this.currentRenderer.flush()};k.prototype.setObjectRenderer=function(q){if(this.currentRenderer===q){return}this.currentRenderer.stop();this.currentRenderer=q;this.currentRenderer.start()};k.prototype.setRenderTarget=function(q){if(this.currentRenderTarget===q){return}this.currentRenderTarget=q;this.currentRenderTarget.activate();this.stencilManager.setMaskStack(q.stencilMaskStack)};k.prototype.resize=function(r,q){o.prototype.resize.call(this,r,q);this.filterManager.resize(r,q);this.renderTarget.resize(r,q);if(this.currentRenderTarget===this.renderTarget){this.renderTarget.activate()}};k.prototype.updateTexture=function(q){q=q.baseTexture||q;if(!q.hasLoaded){return}var r=this.gl;if(!q._glTextures[r.id]){q._glTextures[r.id]=r.createTexture();q.on("update",this.updateTexture,this);q.on("dispose",this.destroyTexture,this)}r.bindTexture(r.TEXTURE_2D,q._glTextures[r.id]);r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultipliedAlpha);r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,q.source);r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,q.scaleMode===p.SCALE_MODES.LINEAR?r.LINEAR:r.NEAREST);if(q.mipmap&&q.isPowerOfTwo){r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,q.scaleMode===p.SCALE_MODES.LINEAR?r.LINEAR_MIPMAP_LINEAR:r.NEAREST_MIPMAP_NEAREST);r.generateMipmap(r.TEXTURE_2D)}else{r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,q.scaleMode===p.SCALE_MODES.LINEAR?r.LINEAR:r.NEAREST)}if(!q.isPowerOfTwo){r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE);r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}else{r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.REPEAT);r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.REPEAT)}return q._glTextures[r.id]};k.prototype.destroyTexture=function(q){q=q.baseTexture||q;if(!q.hasLoaded){return}if(q._glTextures[this.gl.id]){this.gl.deleteTexture(q._glTextures[this.gl.id])}};k.prototype.handleContextLost=function(q){q.preventDefault()};k.prototype.handleContextRestored=function(){this._initContext();for(var q in m.BaseTextureCache){m.BaseTextureCache[q]._glTextures.length=0}};k.prototype.destroy=function(q){this.destroyPlugins();this.view.removeEventListener("webglcontextlost",this.handleContextLost);this.view.removeEventListener("webglcontextrestored",this.handleContextRestored);o.prototype.destroy.call(this,q);this.uuid=0;this.shaderManager.destroy();this.maskManager.destroy();this.stencilManager.destroy();this.filterManager.destroy();this.shaderManager=null;this.maskManager=null;this.filterManager=null;this.blendModeManager=null;this.handleContextLost=null;this.handleContextRestored=null;this._contextOptions=null;this.drawCount=0;this.gl=null};k.prototype._mapBlendModes=function(){var q=this.gl;if(!this.blendModes){this.blendModes={};this.blendModes[p.BLEND_MODES.NORMAL]=[q.ONE,q.ONE_MINUS_SRC_ALPHA];this.blendModes[p.BLEND_MODES.ADD]=[q.SRC_ALPHA,q.DST_ALPHA];this.blendModes[p.BLEND_MODES.MULTIPLY]=[q.DST_COLOR,q.ONE_MINUS_SRC_ALPHA];this.blendModes[p.BLEND_MODES.SCREEN]=[q.SRC_ALPHA,q.ONE];this.blendModes[p.BLEND_MODES.OVERLAY]=[q.ONE,q.ONE_MINUS_SRC_ALPHA];this.blendModes[p.BLEND_MODES.DARKEN]=[q.ONE,q.ONE_MINUS_SRC_ALPHA];this.blendModes[p.BLEND_MODES.LIGHTEN]=[q.ONE,q.ONE_MINUS_SRC_ALPHA];this.blendModes[p.BLEND_MODES.COLOR_DODGE]=[q.ONE,q.ONE_MINUS_SRC_ALPHA];this.blendModes[p.BLEND_MODES.COLOR_BURN]=[q.ONE,q.ONE_MINUS_SRC_ALPHA];this.blendModes[p.BLEND_MODES.HARD_LIGHT]=[q.ONE,q.ONE_MINUS_SRC_ALPHA];this.blendModes[p.BLEND_MODES.SOFT_LIGHT]=[q.ONE,q.ONE_MINUS_SRC_ALPHA];this.blendModes[p.BLEND_MODES.DIFFERENCE]=[q.ONE,q.ONE_MINUS_SRC_ALPHA];this.blendModes[p.BLEND_MODES.EXCLUSION]=[q.ONE,q.ONE_MINUS_SRC_ALPHA];this.blendModes[p.BLEND_MODES.HUE]=[q.ONE,q.ONE_MINUS_SRC_ALPHA];this.blendModes[p.BLEND_MODES.SATURATION]=[q.ONE,q.ONE_MINUS_SRC_ALPHA];this.blendModes[p.BLEND_MODES.COLOR]=[q.ONE,q.ONE_MINUS_SRC_ALPHA];this.blendModes[p.BLEND_MODES.LUMINOSITY]=[q.ONE,q.ONE_MINUS_SRC_ALPHA]}}},{"../../const":15,"../../utils":68,"../SystemRenderer":35,"./filters/FXAAFilter":43,"./managers/BlendModeManager":45,"./managers/FilterManager":46,"./managers/MaskManager":47,"./managers/ShaderManager":48,"./managers/StencilManager":49,"./utils/ObjectRenderer":55,"./utils/RenderTarget":57}],42:[function(b,c,a){var f=b("../shaders/TextureShader");function d(h,i,g){this.shaders=[];this.padding=0;this.uniforms=g||{};this.vertexSrc=h||f.defaultVertexSrc;this.fragmentSrc=i||f.defaultFragmentSrc}d.prototype.constructor=d;c.exports=d;d.prototype.getShader=function(h){var i=h.gl;var g=this.shaders[i.id];if(!g){g=new f(h.shaderManager,this.vertexSrc,this.fragmentSrc,this.uniforms,this.attributes);this.shaders[i.id]=g}return g};d.prototype.applyFilter=function(k,i,h,g){var j=this.getShader(k);k.filterManager.applyFilter(j,i,h,g)};d.prototype.syncUniform=function(g){for(var k=0,h=this.shaders.length;k<h;++k){this.shaders[k].syncUniform(g)}}},{"../shaders/TextureShader":54}],43:[function(b,c,a){var d=b("./AbstractFilter");function f(){d.call(this,"\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform vec2 resolution;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n            out vec2 v_rgbNW, out vec2 v_rgbNE,\n            out vec2 v_rgbSW, out vec2 v_rgbSE,\n            out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n   vResolution = resolution;\n\n   //compute the texture coords and send them to varyings\n   texcoords(aTextureCoord * resolution, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",'precision lowp float;\n\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform sampler2D uSampler;\n\n\nvoid main(void){\n\n    gl_FragColor = fxaa(uSampler, vTextureCoord * vResolution, vResolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n}\n',{resolution:{type:"v2",value:{x:1,y:1}}})}f.prototype=Object.create(d.prototype);f.prototype.constructor=f;c.exports=f;f.prototype.applyFilter=function(k,i,h){var g=k.filterManager;var j=this.getShader(k);g.applyFilter(j,i,h)}},{"./AbstractFilter":42}],44:[function(c,d,b){var f=c("./AbstractFilter"),g=c("../../../math");function a(h){var i=new g.Matrix();f.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n",{mask:{type:"sampler2D",value:h._texture},alpha:{type:"f",value:1},otherMatrix:{type:"mat3",value:i.toArray(true)}});this.maskSprite=h;this.maskMatrix=i}a.prototype=Object.create(f.prototype);a.prototype.constructor=a;d.exports=a;a.prototype.applyFilter=function(l,j,i){var h=l.filterManager;this.uniforms.mask.value=this.maskSprite._texture;h.calculateMappedMatrix(j.frame,this.maskSprite,this.maskMatrix);this.uniforms.otherMatrix.value=this.maskMatrix.toArray(true);this.uniforms.alpha.value=this.maskSprite.worldAlpha;var k=this.getShader(l);h.applyFilter(k,j,i)};Object.defineProperties(a.prototype,{map:{get:function(){return this.uniforms.mask.value},set:function(h){this.uniforms.mask.value=h}},offset:{get:function(){return this.uniforms.offset.value},set:function(h){this.uniforms.offset.value=h}}})},{"../../../math":25,"./AbstractFilter":42}],45:[function(c,d,b){var f=c("./WebGLManager");function a(g){f.call(this,g);this.currentBlendMode=99999}a.prototype=Object.create(f.prototype);a.prototype.constructor=a;d.exports=a;a.prototype.setBlendMode=function(g){if(this.currentBlendMode===g){return false}this.currentBlendMode=g;var h=this.renderer.blendModes[this.currentBlendMode];this.renderer.gl.blendFunc(h[0],h[1]);return true}},{"./WebGLManager":50}],46:[function(d,b,f){var i=d("./WebGLManager"),a=d("../utils/RenderTarget"),j=d("../../../const"),c=d("../utils/Quad"),h=d("../../../math");function g(k){i.call(this,k);this.filterStack=[];this.filterStack.push({renderTarget:k.currentRenderTarget,filter:[],bounds:null});this.texturePool=[];this.textureSize=new h.Rectangle(0,0,k.width,k.height);this.currentFrame=null}g.prototype=Object.create(i.prototype);g.prototype.constructor=g;b.exports=g;g.prototype.onContextChange=function(){this.texturePool.length=0;var k=this.renderer.gl;this.quad=new c(k)};g.prototype.setFilterStack=function(k){this.filterStack=k};g.prototype.pushFilter=function(p,n){var m=p.filterArea?p.filterArea.clone():p.getBounds();m.x=m.x|0;m.y=m.y|0;m.width=m.width|0;m.height=m.height|0;var o=n[0].padding|0;m.x-=o;m.y-=o;m.width+=o*2;m.height+=o*2;if(this.renderer.currentRenderTarget.transform){var k=this.renderer.currentRenderTarget.transform;m.x+=k.tx;m.y+=k.ty;this.capFilterArea(m);m.x-=k.tx;m.y-=k.ty}else{this.capFilterArea(m)}if(m.width>0&&m.height>0){this.currentFrame=m;var l=this.getRenderTarget();this.renderer.setRenderTarget(l);l.clear();this.filterStack.push({renderTarget:l,filter:n})}else{this.filterStack.push({renderTarget:null,filter:n})}};g.prototype.popFilter=function(){var r=this.filterStack.pop();var q=this.filterStack[this.filterStack.length-1];var s=r.renderTarget;if(!r.renderTarget){return}var m=q.renderTarget;var p=this.renderer.gl;this.currentFrame=s.frame;this.quad.map(this.textureSize,s.frame);p.bindBuffer(p.ARRAY_BUFFER,this.quad.vertexBuffer);p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,this.quad.indexBuffer);var l=r.filter;p.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aVertexPosition,2,p.FLOAT,false,0,0);p.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aTextureCoord,2,p.FLOAT,false,0,2*4*4);p.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aColor,4,p.FLOAT,false,0,4*4*4);this.renderer.blendModeManager.setBlendMode(j.BLEND_MODES.NORMAL);if(l.length===1){if(l[0].uniforms.dimensions){l[0].uniforms.dimensions.value[0]=this.renderer.width;l[0].uniforms.dimensions.value[1]=this.renderer.height;l[0].uniforms.dimensions.value[2]=this.quad.vertices[0];l[0].uniforms.dimensions.value[3]=this.quad.vertices[5]}l[0].applyFilter(this.renderer,s,m);this.returnRenderTarget(s)}else{var n=s;var t=this.getRenderTarget(true);for(var o=0;o<l.length-1;o++){var k=l[o];if(k.uniforms.dimensions){k.uniforms.dimensions.value[0]=this.renderer.width;k.uniforms.dimensions.value[1]=this.renderer.height;k.uniforms.dimensions.value[2]=this.quad.vertices[0];k.uniforms.dimensions.value[3]=this.quad.vertices[5]}k.applyFilter(this.renderer,n,t);var u=n;n=t;t=u}l[l.length-1].applyFilter(this.renderer,n,m);this.returnRenderTarget(n);this.returnRenderTarget(t)}return r.filter};g.prototype.getRenderTarget=function(k){var l=this.texturePool.pop()||new a(this.renderer.gl,this.textureSize.width,this.textureSize.height,j.SCALE_MODES.LINEAR,this.renderer.resolution*j.FILTER_RESOLUTION);l.frame=this.currentFrame;if(k){l.clear(true)}return l};g.prototype.returnRenderTarget=function(k){this.texturePool.push(k)};g.prototype.applyFilter=function(m,l,o,k){var n=this.renderer.gl;this.renderer.setRenderTarget(o);if(k){o.clear()}this.renderer.shaderManager.setShader(m);m.uniforms.projectionMatrix.value=this.renderer.currentRenderTarget.projectionMatrix.toArray(true);m.syncUniforms();n.activeTexture(n.TEXTURE0);n.bindTexture(n.TEXTURE_2D,l.texture);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)};g.prototype.calculateMappedMatrix=function(n,s,o){var k=s.worldTransform.copy(h.Matrix.TEMP_MATRIX),p=s._texture.baseTexture;var r=o.identity();var q=this.textureSize.height/this.textureSize.width;r.translate(n.x/this.textureSize.width,n.y/this.textureSize.height);r.scale(1,q);var m=(this.textureSize.width/p.width);var l=(this.textureSize.height/p.height);k.tx/=p.width*m;k.ty/=p.width*m;k.invert();r.prepend(k);r.scale(1,1/q);r.scale(m,l);r.translate(s.anchor.x,s.anchor.y);return r};g.prototype.capFilterArea=function(k){if(k.x<0){k.width+=k.x;k.x=0}if(k.y<0){k.height+=k.y;k.y=0}if(k.x+k.width>this.textureSize.width){k.width=this.textureSize.width-k.x}if(k.y+k.height>this.textureSize.height){k.height=this.textureSize.height-k.y}};g.prototype.resize=function(m,k){this.textureSize.width=m;this.textureSize.height=k;for(var l=0;l<this.texturePool.length;l++){this.texturePool[l].resize(m,k)}};g.prototype.destroy=function(){this.filterStack=null;this.offsetY=0;for(var k=0;k<this.texturePool.length;k++){this.texturePool[k].destroy()}this.texturePool=null}},{"../../../const":15,"../../../math":25,"../utils/Quad":56,"../utils/RenderTarget":57,"./WebGLManager":50}],47:[function(b,d,a){var f=b("./WebGLManager"),c=b("../filters/SpriteMaskFilter");function g(h){f.call(this,h);this.stencilStack=[];this.reverse=true;this.count=0;this.alphaMaskPool=[]}g.prototype=Object.create(f.prototype);g.prototype.constructor=g;d.exports=g;g.prototype.pushMask=function(i,h){if(h.texture){this.pushSpriteMask(i,h)}else{this.pushStencilMask(i,h)}};g.prototype.popMask=function(i,h){if(h.texture){this.popSpriteMask(i,h)}else{this.popStencilMask(i,h)}};g.prototype.pushSpriteMask=function(j,i){var h=this.alphaMaskPool.pop();if(!h){h=[new c(i)]}h[0].maskSprite=i;this.renderer.filterManager.pushFilter(j,h)};g.prototype.popSpriteMask=function(){var h=this.renderer.filterManager.popFilter();this.alphaMaskPool.push(h)};g.prototype.pushStencilMask=function(i,h){this.renderer.stencilManager.pushMask(h)};g.prototype.popStencilMask=function(i,h){this.renderer.stencilManager.popMask(h)}},{"../filters/SpriteMaskFilter":44,"./WebGLManager":50}],48:[function(b,a,c){var h=b("./WebGLManager"),d=b("../shaders/TextureShader"),j=b("../shaders/ComplexPrimitiveShader"),g=b("../shaders/PrimitiveShader"),i=b("../../../utils");function f(l){h.call(this,l);this.maxAttibs=10;this.attribState=[];this.tempAttribState=[];for(var k=0;k<this.maxAttibs;k++){this.attribState[k]=false}this.stack=[];this._currentId=-1;this.currentShader=null}f.prototype=Object.create(h.prototype);f.prototype.constructor=f;i.pluginTarget.mixin(f);a.exports=f;f.prototype.onContextChange=function(){this.initPlugins();var l=this.renderer.gl;this.maxAttibs=l.getParameter(l.MAX_VERTEX_ATTRIBS);this.attribState=[];for(var k=0;k<this.maxAttibs;k++){this.attribState[k]=false}this.defaultShader=new d(this);this.primitiveShader=new g(this);this.complexPrimitiveShader=new j(this)};f.prototype.setAttribs=function(n){var l;for(l=0;l<this.tempAttribState.length;l++){this.tempAttribState[l]=false}for(var k in n){this.tempAttribState[n[k]]=true}var m=this.renderer.gl;for(l=0;l<this.attribState.length;l++){if(this.attribState[l]!==this.tempAttribState[l]){this.attribState[l]=this.tempAttribState[l];if(this.attribState[l]){m.enableVertexAttribArray(l)}else{m.disableVertexAttribArray(l)}}}};f.prototype.setShader=function(k){if(this._currentId===k.uuid){return false}this._currentId=k.uuid;this.currentShader=k;this.renderer.gl.useProgram(k.program);this.setAttribs(k.attributes);return true};f.prototype.destroy=function(){h.prototype.destroy.call(this);this.destroyPlugins();this.attribState=null;this.tempAttribState=null}},{"../../../utils":68,"../shaders/ComplexPrimitiveShader":51,"../shaders/PrimitiveShader":52,"../shaders/TextureShader":54,"./WebGLManager":50}],49:[function(c,d,b){var f=c("./WebGLManager"),a=c("../../../utils");function g(h){f.call(this,h);this.stencilMaskStack=null}g.prototype=Object.create(f.prototype);g.prototype.constructor=g;d.exports=g;g.prototype.setMaskStack=function(i){this.stencilMaskStack=i;var h=this.renderer.gl;if(i.stencilStack.length===0){h.disable(h.STENCIL_TEST)}else{h.enable(h.STENCIL_TEST)}};g.prototype.pushStencil=function(h,k){this.renderer.currentRenderTarget.attachStencilBuffer();var j=this.renderer.gl,i=this.stencilMaskStack;this.bindGraphics(h,k,this.renderer);if(i.stencilStack.length===0){j.enable(j.STENCIL_TEST);j.clear(j.STENCIL_BUFFER_BIT);i.reverse=true;i.count=0}i.stencilStack.push(k);var l=i.count;j.colorMask(false,false,false,false);j.stencilFunc(j.ALWAYS,0,255);j.stencilOp(j.KEEP,j.KEEP,j.INVERT);if(k.mode===1){j.drawElements(j.TRIANGLE_FAN,k.indices.length-4,j.UNSIGNED_SHORT,0);if(i.reverse){j.stencilFunc(j.EQUAL,255-l,255);j.stencilOp(j.KEEP,j.KEEP,j.DECR)}else{j.stencilFunc(j.EQUAL,l,255);j.stencilOp(j.KEEP,j.KEEP,j.INCR)}j.drawElements(j.TRIANGLE_FAN,4,j.UNSIGNED_SHORT,(k.indices.length-4)*2);if(i.reverse){j.stencilFunc(j.EQUAL,255-(l+1),255)}else{j.stencilFunc(j.EQUAL,l+1,255)}i.reverse=!i.reverse}else{if(!i.reverse){j.stencilFunc(j.EQUAL,255-l,255);j.stencilOp(j.KEEP,j.KEEP,j.DECR)}else{j.stencilFunc(j.EQUAL,l,255);j.stencilOp(j.KEEP,j.KEEP,j.INCR)}j.drawElements(j.TRIANGLE_STRIP,k.indices.length,j.UNSIGNED_SHORT,0);if(!i.reverse){j.stencilFunc(j.EQUAL,255-(l+1),255)}else{j.stencilFunc(j.EQUAL,l+1,255)}}j.colorMask(true,true,true,true);j.stencilOp(j.KEEP,j.KEEP,j.KEEP);i.count++};g.prototype.bindGraphics=function(h,k){this._currentGraphics=h;var j=this.renderer.gl;var i;if(k.mode===1){i=this.renderer.shaderManager.complexPrimitiveShader;this.renderer.shaderManager.setShader(i);j.uniformMatrix3fv(i.uniforms.translationMatrix._location,false,h.worldTransform.toArray(true));j.uniformMatrix3fv(i.uniforms.projectionMatrix._location,false,this.renderer.currentRenderTarget.projectionMatrix.toArray(true));j.uniform3fv(i.uniforms.tint._location,a.hex2rgb(h.tint));j.uniform3fv(i.uniforms.color._location,k.color);j.uniform1f(i.uniforms.alpha._location,h.worldAlpha);j.bindBuffer(j.ARRAY_BUFFER,k.buffer);j.vertexAttribPointer(i.attributes.aVertexPosition,2,j.FLOAT,false,4*2,0);j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,k.indexBuffer)}else{i=this.renderer.shaderManager.primitiveShader;this.renderer.shaderManager.setShader(i);j.uniformMatrix3fv(i.uniforms.translationMatrix._location,false,h.worldTransform.toArray(true));j.uniformMatrix3fv(i.uniforms.projectionMatrix._location,false,this.renderer.currentRenderTarget.projectionMatrix.toArray(true));j.uniform3fv(i.uniforms.tint._location,a.hex2rgb(h.tint));j.uniform1f(i.uniforms.alpha._location,h.worldAlpha);j.bindBuffer(j.ARRAY_BUFFER,k.buffer);j.vertexAttribPointer(i.attributes.aVertexPosition,2,j.FLOAT,false,4*6,0);j.vertexAttribPointer(i.attributes.aColor,4,j.FLOAT,false,4*6,2*4);j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,k.indexBuffer)}};g.prototype.popStencil=function(h,k){var j=this.renderer.gl,i=this.stencilMaskStack;i.stencilStack.pop();i.count--;if(i.stencilStack.length===0){j.disable(j.STENCIL_TEST)}else{var l=i.count;this.bindGraphics(h,k,this.renderer);j.colorMask(false,false,false,false);if(k.mode===1){i.reverse=!i.reverse;if(i.reverse){j.stencilFunc(j.EQUAL,255-(l+1),255);j.stencilOp(j.KEEP,j.KEEP,j.INCR)}else{j.stencilFunc(j.EQUAL,l+1,255);j.stencilOp(j.KEEP,j.KEEP,j.DECR)}j.drawElements(j.TRIANGLE_FAN,4,j.UNSIGNED_SHORT,(k.indices.length-4)*2);j.stencilFunc(j.ALWAYS,0,255);j.stencilOp(j.KEEP,j.KEEP,j.INVERT);j.drawElements(j.TRIANGLE_FAN,k.indices.length-4,j.UNSIGNED_SHORT,0);if(!i.reverse){j.stencilFunc(j.EQUAL,255-(l),255)}else{j.stencilFunc(j.EQUAL,l,255)}}else{if(!i.reverse){j.stencilFunc(j.EQUAL,255-(l+1),255);j.stencilOp(j.KEEP,j.KEEP,j.INCR)}else{j.stencilFunc(j.EQUAL,l+1,255);j.stencilOp(j.KEEP,j.KEEP,j.DECR)}j.drawElements(j.TRIANGLE_STRIP,k.indices.length,j.UNSIGNED_SHORT,0);if(!i.reverse){j.stencilFunc(j.EQUAL,255-(l),255)}else{j.stencilFunc(j.EQUAL,l,255)}}j.colorMask(true,true,true,true);j.stencilOp(j.KEEP,j.KEEP,j.KEEP)}};g.prototype.destroy=function(){f.prototype.destroy.call(this);this.stencilMaskStack.stencilStack=null};g.prototype.pushMask=function(h){this.renderer.setObjectRenderer(this.renderer.plugins.graphics);if(h.dirty){this.renderer.plugins.graphics.updateGraphics(h,this.renderer.gl)}if(!h._webGL[this.renderer.gl.id].data.length){return}this.pushStencil(h,h._webGL[this.renderer.gl.id].data[0],this.renderer)};g.prototype.popMask=function(h){this.renderer.setObjectRenderer(this.renderer.plugins.graphics);this.popStencil(h,h._webGL[this.renderer.gl.id].data[0],this.renderer)}},{"../../../utils":68,"./WebGLManager":50}],50:[function(b,c,a){function d(f){this.renderer=f;this.renderer.on("context",this.onContextChange,this)}d.prototype.constructor=d;c.exports=d;d.prototype.onContextChange=function(){};d.prototype.destroy=function(){this.renderer.off("context",this.onContextChange);this.renderer=null}},{}],51:[function(b,c,a){var d=b("./Shader");function f(g){d.call(this,g,["attribute vec2 aVertexPosition;","uniform mat3 translationMatrix;","uniform mat3 projectionMatrix;","uniform vec3 tint;","uniform float alpha;","uniform vec3 color;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vColor = vec4(color * alpha * tint, alpha);","}"].join("\n"),["precision mediump float;","varying vec4 vColor;","void main(void){","   gl_FragColor = vColor;","}"].join("\n"),{tint:{type:"3f",value:[0,0,0]},alpha:{type:"1f",value:0},color:{type:"3f",value:[0,0,0]},translationMatrix:{type:"mat3",value:new Float32Array(9)},projectionMatrix:{type:"mat3",value:new Float32Array(9)}},{aVertexPosition:0})}f.prototype=Object.create(d.prototype);f.prototype.constructor=f;c.exports=f},{"./Shader":53}],52:[function(c,d,b){var f=c("./Shader");function a(g){f.call(this,g,["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform mat3 projectionMatrix;","uniform float alpha;","uniform float flipY;","uniform vec3 tint;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vColor = aColor * vec4(tint * alpha, alpha);","}"].join("\n"),["precision mediump float;","varying vec4 vColor;","void main(void){","   gl_FragColor = vColor;","}"].join("\n"),{tint:{type:"3f",value:[0,0,0]},alpha:{type:"1f",value:0},translationMatrix:{type:"mat3",value:new Float32Array(9)},projectionMatrix:{type:"mat3",value:new Float32Array(9)}},{aVertexPosition:0,aColor:0})}a.prototype=Object.create(f.prototype);a.prototype.constructor=a;d.exports=a},{"./Shader":53}],53:[function(c,d,b){var a=c("../../../utils");function f(k,h,j,g,i){if(!h||!j){throw new Error("Pixi.js Error. Shader requires vertexSrc and fragmentSrc")}this.uuid=a.uuid();this.gl=k.renderer.gl;this.shaderManager=k;this.program=null;this.uniforms=g||{};this.attributes=i||{};this.textureCount=1;this.vertexSrc=h;this.fragmentSrc=j;this.init()}f.prototype.constructor=f;d.exports=f;f.prototype.init=function(){this.compile();this.gl.useProgram(this.program);this.cacheUniformLocations(Object.keys(this.uniforms));this.cacheAttributeLocations(Object.keys(this.attributes))};f.prototype.cacheUniformLocations=function(h){for(var g=0;g<h.length;++g){this.uniforms[h[g]]._location=this.gl.getUniformLocation(this.program,h[g])}};f.prototype.cacheAttributeLocations=function(h){for(var g=0;g<h.length;++g){this.attributes[h[g]]=this.gl.getAttribLocation(this.program,h[g])}};f.prototype.compile=function(){var j=this.gl;var h=this._glCompile(j.VERTEX_SHADER,this.vertexSrc);var i=this._glCompile(j.FRAGMENT_SHADER,this.fragmentSrc);var g=j.createProgram();j.attachShader(g,h);j.attachShader(g,i);j.linkProgram(g);if(!j.getProgramParameter(g,j.LINK_STATUS)){console.error("Pixi.js Error: Could not initialize shader.");console.error("gl.VALIDATE_STATUS",j.getProgramParameter(g,j.VALIDATE_STATUS));console.error("gl.getError()",j.getError());if(j.getProgramInfoLog(g)!==""){console.warn("Pixi.js Warning: gl.getProgramInfoLog()",j.getProgramInfoLog(g))}j.deleteProgram(g);g=null}j.deleteShader(h);j.deleteShader(i);return(this.program=g)};f.prototype.syncUniform=function(g){var h=g._location,m=g.value,n=this.gl,k,j;switch(g.type){case"i":case"1i":n.uniform1i(h,m);break;case"f":case"1f":n.uniform1f(h,m);break;case"2f":n.uniform2f(h,m[0],m[1]);break;case"3f":n.uniform3f(h,m[0],m[1],m[2]);break;case"4f":n.uniform4f(h,m[0],m[1],m[2],m[3]);break;case"v2":n.uniform2f(h,m.x,m.y);break;case"v3":n.uniform3f(h,m.x,m.y,m.z);break;case"v4":n.uniform4f(h,m.x,m.y,m.z,m.w);break;case"1iv":n.uniform1iv(h,m);break;case"2iv":n.uniform2iv(h,m);break;case"3iv":n.uniform3iv(h,m);break;case"4iv":n.uniform4iv(h,m);break;case"1fv":n.uniform1fv(h,m);break;case"2fv":n.uniform2fv(h,m);break;case"3fv":n.uniform3fv(h,m);break;case"4fv":n.uniform4fv(h,m);break;case"m2":case"mat2":case"Matrix2fv":n.uniformMatrix2fv(h,g.transpose,m);break;case"m3":case"mat3":case"Matrix3fv":n.uniformMatrix3fv(h,g.transpose,m);break;case"m4":case"mat4":case"Matrix4fv":n.uniformMatrix4fv(h,g.transpose,m);break;case"c":if(typeof m==="number"){m=a.hex2rgb(m)}n.uniform3f(h,m[0],m[1],m[2]);break;case"iv1":n.uniform1iv(h,m);break;case"iv":n.uniform3iv(h,m);break;case"fv1":n.uniform1fv(h,m);break;case"fv":n.uniform3fv(h,m);break;case"v2v":if(!g._array){g._array=new Float32Array(2*m.length)}for(k=0,j=m.length;k<j;++k){g._array[k*2]=m[k].x;g._array[k*2+1]=m[k].y}n.uniform2fv(h,g._array);break;case"v3v":if(!g._array){g._array=new Float32Array(3*m.length)}for(k=0,j=m.length;k<j;++k){g._array[k*3]=m[k].x;g._array[k*3+1]=m[k].y;g._array[k*3+2]=m[k].z}n.uniform3fv(h,g._array);break;case"v4v":if(!g._array){g._array=new Float32Array(4*m.length)}for(k=0,j=m.length;k<j;++k){g._array[k*4]=m[k].x;g._array[k*4+1]=m[k].y;g._array[k*4+2]=m[k].z;g._array[k*4+3]=m[k].w}n.uniform4fv(h,g._array);break;case"t":case"sampler2D":if(!g.value||!g.value.baseTexture.hasLoaded){break}n.activeTexture(n["TEXTURE"+this.textureCount]);var l=g.value.baseTexture._glTextures[n.id];if(!l){this.initSampler2D(g)}n.bindTexture(n.TEXTURE_2D,l);n.uniform1i(g._location,this.textureCount);this.textureCount++;break;default:console.warn("Pixi.js Shader Warning: Unknown uniform type: "+g.type)}};f.prototype.syncUniforms=function(){this.textureCount=1;for(var g in this.uniforms){this.syncUniform(this.uniforms[g])}};f.prototype.initSampler2D=function(g){var j=this.gl;var h=g.value.baseTexture;if(!h.hasLoaded){return}if(g.textureData){var i=g.textureData;h._glTextures[j.id]=j.createTexture();j.bindTexture(j.TEXTURE_2D,h._glTextures[j.id]);j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultipliedAlpha);j.texImage2D(j.TEXTURE_2D,0,i.luminance?j.LUMINANCE:j.RGBA,j.RGBA,j.UNSIGNED_BYTE,h.source);j.texParameteri(j.TEXTURE_2D,j.TEXTURE_MAG_FILTER,i.magFilter?i.magFilter:j.LINEAR);j.texParameteri(j.TEXTURE_2D,j.TEXTURE_MIN_FILTER,i.wrapS?i.wrapS:j.CLAMP_TO_EDGE);j.texParameteri(j.TEXTURE_2D,j.TEXTURE_WRAP_T,i.wrapS?i.wrapS:j.CLAMP_TO_EDGE);j.texParameteri(j.TEXTURE_2D,j.TEXTURE_WRAP_S,i.wrapT?i.wrapT:j.CLAMP_TO_EDGE)}else{this.shaderManager.renderer.updateTexture(h)}};f.prototype.destroy=function(){this.gl.deleteProgram(this.program);this.gl=null;this.uniforms=null;this.attributes=null;this.vertexSrc=null;this.fragmentSrc=null};f.prototype._glCompile=function(g,i){var h=this.gl.createShader(g);this.gl.shaderSource(h,i);this.gl.compileShader(h);if(!this.gl.getShaderParameter(h,this.gl.COMPILE_STATUS)){console.log(this.gl.getShaderInfoLog(h));return null}return h}},{"../../../utils":68}],54:[function(c,d,a){var f=c("./Shader");function b(j,i,o,g,l){var m={uSampler:{type:"sampler2D",value:0},projectionMatrix:{type:"mat3",value:new Float32Array(1,0,0,0,1,0,0,0,1)}};if(g){for(var n in g){m[n]=g[n]}}var h={aVertexPosition:0,aTextureCoord:0,aColor:0};if(l){for(var k in l){h[k]=l[k]}}i=i||b.defaultVertexSrc;o=o||b.defaultFragmentSrc;f.call(this,j,i,o,m,h)}b.prototype=Object.create(f.prototype);b.prototype.constructor=b;d.exports=b;b.defaultVertexSrc=["precision lowp float;","attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec4 aColor;","uniform mat3 projectionMatrix;","varying vec2 vTextureCoord;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = vec4(aColor.rgb * aColor.a, aColor.a);","}"].join("\n");b.defaultFragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","void main(void){","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"].join("\n")},{"./Shader":53}],55:[function(b,c,a){var d=b("../managers/WebGLManager");function f(g){d.call(this,g)}f.prototype=Object.create(d.prototype);f.prototype.constructor=f;c.exports=f;f.prototype.start=function(){};f.prototype.stop=function(){this.flush()};f.prototype.flush=function(){};f.prototype.render=function(g){}},{"../managers/WebGLManager":50}],56:[function(b,c,a){function d(f){this.gl=f;this.vertices=new Float32Array([0,0,200,0,200,200,0,200]);this.uvs=new Float32Array([0,0,1,0,1,1,0,1]);this.colors=new Float32Array([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);this.indices=new Uint16Array([0,1,2,0,3,2]);this.vertexBuffer=f.createBuffer();this.indexBuffer=f.createBuffer();f.bindBuffer(f.ARRAY_BUFFER,this.vertexBuffer);f.bufferData(f.ARRAY_BUFFER,(8+8+16)*4,f.DYNAMIC_DRAW);f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,this.indexBuffer);f.bufferData(f.ELEMENT_ARRAY_BUFFER,this.indices,f.STATIC_DRAW);this.upload()}d.prototype.constructor=d;d.prototype.map=function(h,g){var f=0;var i=0;this.uvs[0]=f;this.uvs[1]=i;this.uvs[2]=f+g.width/h.width;this.uvs[3]=i;this.uvs[4]=f+g.width/h.width;this.uvs[5]=i+g.height/h.height;this.uvs[6]=f;this.uvs[7]=i+g.height/h.height;f=g.x;i=g.y;this.vertices[0]=f;this.vertices[1]=i;this.vertices[2]=f+g.width;this.vertices[3]=i;this.vertices[4]=f+g.width;this.vertices[5]=i+g.height;this.vertices[6]=f;this.vertices[7]=i+g.height;this.upload()};d.prototype.upload=function(){var f=this.gl;f.bindBuffer(f.ARRAY_BUFFER,this.vertexBuffer);f.bufferSubData(f.ARRAY_BUFFER,0,this.vertices);f.bufferSubData(f.ARRAY_BUFFER,8*4,this.uvs);f.bufferSubData(f.ARRAY_BUFFER,(8+8)*4,this.colors)};c.exports=d},{}],57:[function(f,g,c){var h=f("../../../math"),b=f("../../../utils"),a=f("../../../const"),d=f("./StencilMaskStack");var i=function(p,o,j,n,m,l){this.gl=p;this.frameBuffer=null;this.texture=null;this.size=new h.Rectangle(0,0,1,1);this.resolution=m||a.RESOLUTION;this.projectionMatrix=new h.Matrix();this.transform=null;this.frame=null;this.stencilBuffer=null;this.stencilMaskStack=new d();this.filterStack=[{renderTarget:this,filter:[],bounds:this.size}];this.scaleMode=n||a.SCALE_MODES.DEFAULT;this.root=l;if(!this.root){this.frameBuffer=p.createFramebuffer();this.texture=p.createTexture();p.bindTexture(p.TEXTURE_2D,this.texture);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MAG_FILTER,n===a.SCALE_MODES.LINEAR?p.LINEAR:p.NEAREST);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,n===a.SCALE_MODES.LINEAR?p.LINEAR:p.NEAREST);var k=b.isPowerOfTwo(o,j);if(!k){p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE)}else{p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_S,p.REPEAT);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.REPEAT)}p.bindFramebuffer(p.FRAMEBUFFER,this.frameBuffer);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,this.texture,0)}this.resize(o,j)};i.prototype.constructor=i;g.exports=i;i.prototype.clear=function(k){var j=this.gl;if(k){j.bindFramebuffer(j.FRAMEBUFFER,this.frameBuffer)}j.clearColor(0,0,0,0);j.clear(j.COLOR_BUFFER_BIT)};i.prototype.attachStencilBuffer=function(){if(this.stencilBuffer){return}if(!this.root){var j=this.gl;this.stencilBuffer=j.createRenderbuffer();j.bindRenderbuffer(j.RENDERBUFFER,this.stencilBuffer);j.framebufferRenderbuffer(j.FRAMEBUFFER,j.DEPTH_STENCIL_ATTACHMENT,j.RENDERBUFFER,this.stencilBuffer);j.renderbufferStorage(j.RENDERBUFFER,j.DEPTH_STENCIL,this.size.width*this.resolution,this.size.height*this.resolution)}};i.prototype.activate=function(){var k=this.gl;k.bindFramebuffer(k.FRAMEBUFFER,this.frameBuffer);var j=this.frame||this.size;this.calculateProjection(j);if(this.transform){this.projectionMatrix.append(this.transform)}k.viewport(0,0,j.width*this.resolution,j.height*this.resolution)};i.prototype.calculateProjection=function(j){var k=this.projectionMatrix;k.identity();if(!this.root){k.a=1/j.width*2;k.d=1/j.height*2;k.tx=-1-j.x*k.a;k.ty=-1-j.y*k.d}else{k.a=1/j.width*2;k.d=-1/j.height*2;k.tx=-1-j.x*k.a;k.ty=1-j.y*k.d}};i.prototype.resize=function(l,j){l=l|0;j=j|0;if(this.size.width===l&&this.size.height===j){return}this.size.width=l;this.size.height=j;if(!this.root){var m=this.gl;m.bindTexture(m.TEXTURE_2D,this.texture);m.texImage2D(m.TEXTURE_2D,0,m.RGBA,l*this.resolution,j*this.resolution,0,m.RGBA,m.UNSIGNED_BYTE,null);if(this.stencilBuffer){m.bindRenderbuffer(m.RENDERBUFFER,this.stencilBuffer);m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_STENCIL,l*this.resolution,j*this.resolution)}}var k=this.frame||this.size;this.calculateProjection(k)};i.prototype.destroy=function(){var j=this.gl;j.deleteFramebuffer(this.frameBuffer);j.deleteTexture(this.texture);this.frameBuffer=null;this.texture=null}},{"../../../const":15,"../../../math":25,"../../../utils":68,"./StencilMaskStack":58}],58:[function(c,d,a){function b(){this.stencilStack=[];this.reverse=true;this.count=0}b.prototype.constructor=b;d.exports=b},{}],59:[function(f,d,i){var j=f("../math"),h=f("../textures/Texture"),g=f("../display/Container"),b=f("../renderers/canvas/utils/CanvasTinter"),k=f("../utils"),l=f("../const"),a=new j.Point();function c(m){g.call(this);this.anchor=new j.Point();this._texture=null;this._width=0;this._height=0;this.tint=16777215;this.blendMode=l.BLEND_MODES.NORMAL;this.shader=null;this.cachedTint=16777215;this.texture=m||h.EMPTY}c.prototype=Object.create(g.prototype);c.prototype.constructor=c;d.exports=c;Object.defineProperties(c.prototype,{width:{get:function(){return this.scale.x*this.texture._frame.width},set:function(m){this.scale.x=m/this.texture._frame.width;this._width=m}},height:{get:function(){return this.scale.y*this.texture._frame.height},set:function(m){this.scale.y=m/this.texture._frame.height;this._height=m}},texture:{get:function(){return this._texture},set:function(m){if(this._texture===m){return}this._texture=m;this.cachedTint=16777215;if(m){if(m.baseTexture.hasLoaded){this._onTextureUpdate()}else{m.once("update",this._onTextureUpdate,this)}}}}});c.prototype._onTextureUpdate=function(){if(this._width){this.scale.x=this._width/this.texture.frame.width}if(this._height){this.scale.y=this._height/this.texture.frame.height}};c.prototype._renderWebGL=function(m){m.setObjectRenderer(m.plugins.sprite);m.plugins.sprite.render(this)};c.prototype.getBounds=function(z){if(!this._currentBounds){var w=this._texture._frame.width;var v=this._texture._frame.height;var u=w*(1-this.anchor.x);var t=w*-this.anchor.x;var s=v*(1-this.anchor.y);var r=v*-this.anchor.y;var x=z||this.worldTransform;var M=x.a;var K=x.b;var I=x.c;var F=x.d;var N=x.tx;var L=x.ty;var J,H,G,D;if(K===0&&I===0){if(M<0){M*=-1}if(F<0){F*=-1}J=M*t+N;H=M*u+N;G=F*r+L;D=F*s+L}else{var C=M*t+I*r+N;var p=F*r+K*t+L;var B=M*u+I*r+N;var o=F*r+K*u+L;var A=M*u+I*s+N;var n=F*s+K*u+L;var y=M*t+I*s+N;var m=F*s+K*t+L;J=C;J=B<J?B:J;J=A<J?A:J;J=y<J?y:J;G=p;G=o<G?o:G;G=n<G?n:G;G=m<G?m:G;H=C;H=B>H?B:H;H=A>H?A:H;H=y>H?y:H;D=p;D=o>D?o:D;D=n>D?n:D;D=m>D?m:D}if(this.children.length){var E=this.containerGetBounds();u=E.x;t=E.x+E.width;s=E.y;r=E.y+E.height;J=(J<u)?J:u;G=(G<s)?G:s;H=(H>t)?H:t;D=(D>r)?D:r}var q=this._bounds;q.x=J;q.width=H-J;q.y=G;q.height=D-G;this._currentBounds=q}return this._currentBounds};c.prototype.getLocalBounds=function(){this._bounds.x=-this._texture._frame.width*this.anchor.x;this._bounds.y=-this._texture._frame.height*this.anchor.y;this._bounds.width=this._texture._frame.width;this._bounds.height=this._texture._frame.height;return this._bounds};c.prototype.containsPoint=function(n){this.worldTransform.applyInverse(n,a);var q=this._texture._frame.width;var m=this._texture._frame.height;var o=-q*this.anchor.x;var p;if(a.x>o&&a.x<o+q){p=-m*this.anchor.y;if(a.y>p&&a.y<p+m){return true}}return false};c.prototype._renderCanvas=function(p){if(this.texture.crop.width<=0||this.texture.crop.height<=0){return}if(this.blendMode!==p.currentBlendMode){p.currentBlendMode=this.blendMode;p.context.globalCompositeOperation=p.blendModes[p.currentBlendMode]}if(this.texture.valid){var q=this._texture,o=this.worldTransform,v,u,m,t;var n=q.baseTexture.resolution/p.resolution;p.context.globalAlpha=this.worldAlpha;if(p.smoothProperty&&p.currentScaleMode!==q.baseTexture.scaleMode){p.currentScaleMode=q.baseTexture.scaleMode;p.context[p.smoothProperty]=(p.currentScaleMode===l.SCALE_MODES.LINEAR)}if(q.rotate){var s=o.a;var r=o.b;o.a=-o.c;o.b=-o.d;o.c=s;o.d=r;m=q.crop.height;t=q.crop.width;v=(q.trim)?q.trim.y-this.anchor.y*q.trim.height:this.anchor.y*-q._frame.height;u=(q.trim)?q.trim.x-this.anchor.x*q.trim.width:this.anchor.x*-q._frame.width}else{m=q.crop.width;t=q.crop.height;v=(q.trim)?q.trim.x-this.anchor.x*q.trim.width:this.anchor.x*-q._frame.width;u=(q.trim)?q.trim.y-this.anchor.y*q.trim.height:this.anchor.y*-q._frame.height}if(p.roundPixels){p.context.setTransform(o.a,o.b,o.c,o.d,(o.tx*p.resolution)|0,(o.ty*p.resolution)|0);v=v|0;u=u|0}else{p.context.setTransform(o.a,o.b,o.c,o.d,o.tx*p.resolution,o.ty*p.resolution)}if(this.tint!==16777215){if(this.cachedTint!==this.tint){this.cachedTint=this.tint;this.tintedTexture=b.getTintedTexture(this,this.tint)}p.context.drawImage(this.tintedTexture,0,0,m*n*p.resolution,t*n*p.resolution,v,u,m*p.resolution,t*p.resolution)}else{p.context.drawImage(q.baseTexture.source,q.crop.x*n,q.crop.y*n,m*n*p.resolution,t*n*p.resolution,v,u,m*p.resolution,t*p.resolution)}}};c.prototype.destroy=function(m,n){g.prototype.destroy.call(this);this.anchor=null;if(m){this._texture.destroy(n)}this._texture=null;this.shader=null};c.fromFrame=function(n){var m=k.TextureCache[n];if(!m){throw new Error('The frameId "'+n+'" does not exist in the texture cache')}return new c(m)};c.fromImage=function(n,m,o){return new c(h.fromImage(n,m,o))}},{"../const":15,"../display/Container":16,"../math":25,"../renderers/canvas/utils/CanvasTinter":40,"../textures/Texture":64,"../utils":68}],60:[function(d,f,c){var h=d("../../renderers/webgl/utils/ObjectRenderer"),b=d("../../renderers/webgl/WebGLRenderer"),a=d("../../const");function g(n){h.call(this,n);this.vertSize=5;this.vertByteSize=this.vertSize*4;this.size=a.SPRITE_BATCH_SIZE;var k=this.size*4*this.vertByteSize;var o=this.size*6;this.vertices=new ArrayBuffer(k);this.positions=new Float32Array(this.vertices);this.colors=new Uint32Array(this.vertices);this.indices=new Uint16Array(o);this.lastIndexCount=0;for(var m=0,l=0;m<o;m+=6,l+=4){this.indices[m+0]=l+0;this.indices[m+1]=l+1;this.indices[m+2]=l+2;this.indices[m+3]=l+0;this.indices[m+4]=l+2;this.indices[m+5]=l+3}this.drawing=false;this.currentBatchSize=0;this.currentBaseTexture=null;this.textures=[];this.blendModes=[];this.shaders=[];this.sprites=[];this.shader=null}g.prototype=Object.create(h.prototype);g.prototype.constructor=g;f.exports=g;b.registerPlugin("sprite",g);g.prototype.onContextChange=function(){var i=this.renderer.gl;this.shader=this.renderer.shaderManager.defaultShader;this.vertexBuffer=i.createBuffer();this.indexBuffer=i.createBuffer();i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,this.indexBuffer);i.bufferData(i.ELEMENT_ARRAY_BUFFER,this.indices,i.STATIC_DRAW);i.bindBuffer(i.ARRAY_BUFFER,this.vertexBuffer);i.bufferData(i.ARRAY_BUFFER,this.vertices,i.DYNAMIC_DRAW);this.currentBlendMode=99999};g.prototype.render=function(u){var t=u._texture;if(this.currentBatchSize>=this.size){this.flush();this.currentBaseTexture=t.baseTexture}var q=t._uvs;if(!q){return}var j=u.anchor.x;var i=u.anchor.y;var s,r,o,n;if(t.trim){var w=t.trim;r=w.x-j*w.width;s=r+t.crop.width;n=w.y-i*w.height;o=n+t.crop.height}else{s=(t._frame.width)*(1-j);r=(t._frame.width)*-j;o=t._frame.height*(1-i);n=t._frame.height*-i}var k=this.currentBatchSize*this.vertByteSize;var v=u.worldTransform;var B=v.a;var A=v.b;var y=v.c;var x=v.d;var C=v.tx;var z=v.ty;var p=this.colors;var m=this.positions;if(this.renderer.roundPixels){m[k]=B*r+y*n+C|0;m[k+1]=x*n+A*r+z|0;m[k+5]=B*s+y*n+C|0;m[k+6]=x*n+A*s+z|0;m[k+10]=B*s+y*o+C|0;m[k+11]=x*o+A*s+z|0;m[k+15]=B*r+y*o+C|0;m[k+16]=x*o+A*r+z|0}else{m[k]=B*r+y*n+C;m[k+1]=x*n+A*r+z;m[k+5]=B*s+y*n+C;m[k+6]=x*n+A*s+z;m[k+10]=B*s+y*o+C;m[k+11]=x*o+A*s+z;m[k+15]=B*r+y*o+C;m[k+16]=x*o+A*r+z}m[k+2]=q.x0;m[k+3]=q.y0;m[k+7]=q.x1;m[k+8]=q.y1;m[k+12]=q.x2;m[k+13]=q.y2;m[k+17]=q.x3;m[k+18]=q.y3;var l=u.tint;p[k+4]=p[k+9]=p[k+14]=p[k+19]=(l>>16)+(l&65280)+((l&255)<<16)+(u.worldAlpha*255<<24);this.sprites[this.currentBatchSize++]=u};g.prototype.flush=function(){if(this.currentBatchSize===0){return}var s=this.renderer.gl;var u;if(this.currentBatchSize>(this.size*0.5)){s.bufferSubData(s.ARRAY_BUFFER,0,this.vertices)}else{var w=this.positions.subarray(0,this.currentBatchSize*this.vertByteSize);s.bufferSubData(s.ARRAY_BUFFER,0,w)}var z,o,k;var v=0;var m=0;var t=null;var n=this.renderer.blendModeManager.currentBlendMode;var l=null;var r=false;var x=false;var y;for(var q=0,p=this.currentBatchSize;q<p;q++){y=this.sprites[q];z=y._texture.baseTexture;o=y.blendMode;k=y.shader||this.shader;r=n!==o;x=l!==k;if(t!==z||r||x){this.renderBatch(t,v,m);m=q;v=0;t=z;if(r){n=o;this.renderer.blendModeManager.setBlendMode(n)}if(x){l=k;u=l.shaders?l.shaders[s.id]:l;if(!u){u=l.getShader(this.renderer)}this.renderer.shaderManager.setShader(u);u.uniforms.projectionMatrix.value=this.renderer.currentRenderTarget.projectionMatrix.toArray(true);u.syncUniforms();s.activeTexture(s.TEXTURE0)}}v++}this.renderBatch(t,v,m);this.currentBatchSize=0};g.prototype.renderBatch=function(j,i,l){if(i===0){return}var k=this.renderer.gl;if(!j._glTextures[k.id]){this.renderer.updateTexture(j)}else{k.bindTexture(k.TEXTURE_2D,j._glTextures[k.id])}k.drawElements(k.TRIANGLES,i*6,k.UNSIGNED_SHORT,l*6*2);this.renderer.drawCount++};g.prototype.start=function(){var j=this.renderer.gl;j.bindBuffer(j.ARRAY_BUFFER,this.vertexBuffer);j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var i=this.vertByteSize;j.vertexAttribPointer(this.shader.attributes.aVertexPosition,2,j.FLOAT,false,i,0);j.vertexAttribPointer(this.shader.attributes.aTextureCoord,2,j.FLOAT,false,i,2*4);j.vertexAttribPointer(this.shader.attributes.aColor,4,j.UNSIGNED_BYTE,true,i,4*4)};g.prototype.destroy=function(){this.renderer.gl.deleteBuffer(this.vertexBuffer);this.renderer.gl.deleteBuffer(this.indexBuffer);this.shader.destroy();this.renderer=null;this.vertices=null;this.positions=null;this.colors=null;this.indices=null;this.vertexBuffer=null;this.indexBuffer=null;this.currentBaseTexture=null;this.drawing=false;this.textures=null;this.blendModes=null;this.shaders=null;this.sprites=null;this.shader=null}},{"../../const":15,"../../renderers/webgl/WebGLRenderer":41,"../../renderers/webgl/utils/ObjectRenderer":55}],61:[function(d,g,b){var c=d("../sprites/Sprite"),f=d("../textures/Texture"),i=d("../math"),a=d("../const");function h(m,k,j){this.canvas=document.createElement("canvas");this.context=this.canvas.getContext("2d");this.resolution=j||a.RESOLUTION;this._text=null;this._style=null;var l=f.fromCanvas(this.canvas);l.trim=new i.Rectangle();c.call(this,l);this.text=m;this.style=k}h.prototype=Object.create(c.prototype);h.prototype.constructor=h;g.exports=h;h.fontPropertiesCache={};h.fontPropertiesCanvas=document.createElement("canvas");h.fontPropertiesContext=h.fontPropertiesCanvas.getContext("2d");Object.defineProperties(h.prototype,{width:{get:function(){if(this.dirty){this.updateText()}return this.scale.x*this._texture._frame.width},set:function(j){this.scale.x=j/this._texture._frame.width;this._width=j}},height:{get:function(){if(this.dirty){this.updateText()}return this.scale.y*this._texture._frame.height},set:function(j){this.scale.y=j/this._texture._frame.height;this._height=j}},style:{get:function(){return this._style},set:function(j){j=j||{};j.font=j.font||"bold 20pt Arial";j.fill=j.fill||"black";j.align=j.align||"left";j.stroke=j.stroke||"black";j.strokeThickness=j.strokeThickness||0;j.wordWrap=j.wordWrap||false;j.wordWrapWidth=j.wordWrapWidth||100;j.dropShadow=j.dropShadow||false;j.dropShadowColor=j.dropShadowColor||"#000000";j.dropShadowAngle=j.dropShadowAngle||Math.PI/6;j.dropShadowDistance=j.dropShadowDistance||5;j.padding=j.padding||0;j.textBaseline=j.textBaseline||"alphabetic";j.lineJoin=j.lineJoin||"miter";j.miterLimit=j.miterLimit||10;this._style=j;this.dirty=true}},text:{get:function(){return this._text},set:function(j){j=j.toString()||" ";if(this._text===j){return}this._text=j;this.dirty=true}}});h.prototype.updateText=function(){var k=this._style;this.context.font=k.font;var q=k.wordWrap?this.wordWrap(this._text):this._text;var w=q.split(/(?:\r\n|\r|\n)/);var p=new Array(w.length);var x=0;var n=this.determineFontProperties(k.font);for(var r=0;r<w.length;r++){var s=this.context.measureText(w[r]).width;p[r]=s;x=Math.max(x,s)}var m=x+k.strokeThickness;if(k.dropShadow){m+=k.dropShadowDistance}this.canvas.width=(m+this.context.lineWidth)*this.resolution;var u=this.style.lineHeight||n.fontSize+k.strokeThickness;var v=u*w.length;if(k.dropShadow){v+=k.dropShadowDistance}this.canvas.height=(v+this._style.padding*2)*this.resolution;this.context.scale(this.resolution,this.resolution);if(navigator.isCocoonJS){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}this.context.font=k.font;this.context.strokeStyle=k.stroke;this.context.lineWidth=k.strokeThickness;this.context.textBaseline=k.textBaseline;this.context.lineJoin=k.lineJoin;this.context.miterLimit=k.miterLimit;var o;var l;if(k.dropShadow){this.context.fillStyle=k.dropShadowColor;var t=Math.cos(k.dropShadowAngle)*k.dropShadowDistance;var j=Math.sin(k.dropShadowAngle)*k.dropShadowDistance;for(r=0;r<w.length;r++){o=k.strokeThickness/2;l=(k.strokeThickness/2+r*u)+n.ascent;if(k.align==="right"){o+=x-p[r]}else{if(k.align==="center"){o+=(x-p[r])/2}}if(k.fill){this.context.fillText(w[r],o+t,l+j+this._style.padding)}}}this.context.fillStyle=k.fill;for(r=0;r<w.length;r++){o=k.strokeThickness/2;l=(k.strokeThickness/2+r*u)+n.ascent;if(k.align==="right"){o+=x-p[r]}else{if(k.align==="center"){o+=(x-p[r])/2}}if(k.stroke&&k.strokeThickness){this.context.strokeText(w[r],o,l+this._style.padding)}if(k.fill){this.context.fillText(w[r],o,l+this._style.padding)}}this.updateTexture()};h.prototype.updateTexture=function(){var j=this._texture;j.baseTexture.hasLoaded=true;j.baseTexture.resolution=this.resolution;j.baseTexture.width=this.canvas.width/this.resolution;j.baseTexture.height=this.canvas.height/this.resolution;j.crop.width=j._frame.width=this.canvas.width/this.resolution;j.crop.height=j._frame.height=this.canvas.height/this.resolution;j.trim.x=0;j.trim.y=-this._style.padding;j.trim.width=j._frame.width;j.trim.height=j._frame.height-this._style.padding*2;this._width=this.canvas.width/this.resolution;this._height=this.canvas.height/this.resolution;j.baseTexture.emit("update",j.baseTexture);this.dirty=false};h.prototype.renderWebGL=function(j){if(this.dirty){this.updateText()}c.prototype.renderWebGL.call(this,j)};h.prototype._renderCanvas=function(j){if(this.dirty){this.updateText()}c.prototype._renderCanvas.call(this,j)};h.prototype.determineFontProperties=function(p){var s=h.fontPropertiesCache[p];if(!s){s={};var m=h.fontPropertiesCanvas;var l=h.fontPropertiesContext;l.font=p;var k=Math.ceil(l.measureText("|MÉq").width);var r=Math.ceil(l.measureText("M").width);var w=2*r;r=r*1.4|0;m.width=k;m.height=w;l.fillStyle="#f00";l.fillRect(0,0,k,w);l.font=p;l.textBaseline="alphabetic";l.fillStyle="#000";l.fillText("|MÉq",0,r);var t=l.getImageData(0,0,k,w).data;var n=t.length;var x=k*4;var q,o;var v=0;var u=false;for(q=0;q<r;q++){for(o=0;o<x;o+=4){if(t[v+o]!==255){u=true;break}}if(!u){v+=x}else{break}}s.ascent=r-q;v=n-x;u=false;for(q=w;q>r;q--){for(o=0;o<x;o+=4){if(t[v+o]!==255){u=true;break}}if(!u){v-=x}else{break}}s.descent=q-r;s.fontSize=s.ascent+s.descent;h.fontPropertiesCache[p]=s}return s};h.prototype.wordWrap=function(q){var t="";var s=q.split("\n");var k=this._style.wordWrapWidth;for(var n=0;n<s.length;n++){var m=k;var p=s[n].split(" ");for(var l=0;l<p.length;l++){var r=this.context.measureText(p[l]).width;var o=r+this.context.measureText(" ").width;if(l===0||o>m){if(l>0){t+="\n"}t+=p[l];m=k-r}else{m-=o;t+=" "+p[l]}}if(n<s.length-1){t+="\n"}}return t};h.prototype.getBounds=function(j){if(this.dirty){this.updateText()}return c.prototype.getBounds.call(this,j)};h.prototype.destroy=function(j){this.context=null;this.canvas=null;this._style=null;this._texture.destroy(j===undefined?true:j)}},{"../const":15,"../math":25,"../sprites/Sprite":59,"../textures/Texture":64}],62:[function(d,f,c){var b=d("../utils"),a=d("../const"),g=d("eventemitter3");function h(k,j,i){g.call(this);this.uuid=b.uuid();this.resolution=i||1;this.width=100;this.height=100;this.realWidth=100;this.realHeight=100;this.scaleMode=j||a.SCALE_MODES.DEFAULT;this.hasLoaded=false;this.isLoading=false;this.source=null;this.premultipliedAlpha=true;this.imageUrl=null;this.isPowerOfTwo=false;this.mipmap=false;this._glTextures=[];if(k){this.loadSource(k)}}h.prototype=Object.create(g.prototype);h.prototype.constructor=h;f.exports=h;h.prototype.update=function(){this.realWidth=this.source.naturalWidth||this.source.width;this.realHeight=this.source.naturalHeight||this.source.height;this.width=this.realWidth/this.resolution;this.height=this.realHeight/this.resolution;this.isPowerOfTwo=b.isPowerOfTwo(this.realWidth,this.realHeight);this.emit("update",this)};h.prototype.loadSource=function(k){var j=this.isLoading;this.hasLoaded=false;this.isLoading=false;if(j&&this.source){this.source.onload=null;this.source.onerror=null}this.source=k;if((this.source.complete||this.source.getContext)&&this.source.width&&this.source.height){this._sourceLoaded()}else{if(!k.getContext){this.isLoading=true;var i=this;k.onload=function(){k.onload=null;k.onerror=null;if(!i.isLoading){return}i.isLoading=false;i._sourceLoaded();i.emit("loaded",i)};k.onerror=function(){k.onload=null;k.onerror=null;if(!i.isLoading){return}i.isLoading=false;i.emit("error",i)};if(k.complete&&k.src){this.isLoading=false;k.onload=null;k.onerror=null;if(k.width&&k.height){this._sourceLoaded();if(j){this.emit("loaded",this)}}else{if(j){this.emit("error",this)}}}}}};h.prototype._sourceLoaded=function(){this.hasLoaded=true;this.update()};h.prototype.destroy=function(){if(this.imageUrl){delete b.BaseTextureCache[this.imageUrl];delete b.TextureCache[this.imageUrl];this.imageUrl=null;if(!navigator.isCocoonJS){this.source.src=""}}else{if(this.source&&this.source._pixiId){delete b.BaseTextureCache[this.source._pixiId]}}this.source=null;this.dispose()};h.prototype.dispose=function(){this.emit("dispose",this)};h.prototype.updateSourceImage=function(i){this.source.src=i;this.loadSource(this.source)};h.fromImage=function(j,i,k){var l=b.BaseTextureCache[j];if(i===undefined&&j.indexOf("data:")!==0){i=true}if(!l){var m=new Image();if(i){m.crossOrigin=""}l=new h(m,k);l.imageUrl=j;m.src=j;b.BaseTextureCache[j]=l;l.resolution=b.getResolutionOfUrl(j)}return l};h.fromCanvas=function(i,j){if(!i._pixiId){i._pixiId="canvas_"+b.uuid()}var k=b.BaseTextureCache[i._pixiId];if(!k){k=new h(i,j);b.BaseTextureCache[i._pixiId]=k}return k}},{"../const":15,"../utils":68,eventemitter3:4}],63:[function(c,b,f){var h=c("./BaseTexture"),d=c("./Texture"),a=c("../renderers/webgl/utils/RenderTarget"),i=c("../renderers/webgl/managers/FilterManager"),k=c("../renderers/canvas/utils/CanvasBuffer"),l=c("../math"),m=c("../const"),j=new l.Matrix();function g(s,q,n,p,o){if(!s){throw new Error("Unable to create RenderTexture, you must pass a renderer into the constructor.")}q=q||100;n=n||100;o=o||m.RESOLUTION;var r=new h();r.width=q;r.height=n;r.resolution=o;r.scaleMode=p||m.SCALE_MODES.DEFAULT;r.hasLoaded=true;d.call(this,r,new l.Rectangle(0,0,q,n));this.width=q;this.height=n;this.resolution=o;this.render=null;this.renderer=s;if(this.renderer.type===m.RENDERER_TYPE.WEBGL){var t=this.renderer.gl;this.textureBuffer=new a(t,this.width,this.height,r.scaleMode,this.resolution);this.baseTexture._glTextures[t.id]=this.textureBuffer.texture;this.filterManager=new i(this.renderer);this.filterManager.onContextChange();this.filterManager.resize(q,n);this.render=this.renderWebGL;this.renderer.currentRenderer.start();this.renderer.currentRenderTarget.activate()}else{this.render=this.renderCanvas;this.textureBuffer=new k(this.width*this.resolution,this.height*this.resolution);this.baseTexture.source=this.textureBuffer.canvas}this.valid=true;this._updateUvs()}g.prototype=Object.create(d.prototype);g.prototype.constructor=g;b.exports=g;g.prototype.resize=function(p,n,o){if(p===this.width&&n===this.height){return}this.valid=(p>0&&n>0);this.width=this._frame.width=this.crop.width=p;this.height=this._frame.height=this.crop.height=n;if(o){this.baseTexture.width=this.width;this.baseTexture.height=this.height}if(!this.valid){return}this.textureBuffer.resize(this.width*this.resolution,this.height*this.resolution);if(this.filterManager){this.filterManager.resize(this.width,this.height)}};g.prototype.clear=function(){if(!this.valid){return}if(this.renderer.type===m.RENDERER_TYPE.WEBGL){this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER,this.textureBuffer.frameBuffer)}this.textureBuffer.clear()};g.prototype.renderWebGL=function(u,p,n,t){if(!this.valid){return}t=(t!==undefined)?t:true;this.textureBuffer.transform=p;this.textureBuffer.activate();u.worldAlpha=u.alpha;if(t){u.worldTransform.identity();u.currentBounds=null;var s=u.children;var r,q;for(r=0,q=s.length;r<q;++r){s[r].updateTransform()}}var o=this.renderer.filterManager;this.renderer.filterManager=this.filterManager;this.renderer.renderDisplayObject(u,this.textureBuffer,n);this.renderer.filterManager=o};g.prototype.renderCanvas=function(v,x,t,q){if(!this.valid){return}q=!!q;var o=v.worldTransform;var u=j;u.identity();if(x){u.append(x)}v.worldTransform=u;v.worldAlpha=1;var p=v.children;var s,r;for(s=0,r=p.length;s<r;++s){p[s].updateTransform()}if(t){this.textureBuffer.clear()}v.worldTransform=o;var n=this.textureBuffer.context;var w=this.renderer.resolution;this.renderer.resolution=this.resolution;this.renderer.renderDisplayObject(v,n);this.renderer.resolution=w};g.prototype.destroy=function(){d.prototype.destroy.call(this,true);this.textureBuffer.destroy();if(this.filterManager){this.filterManager.destroy()}this.renderer=null};g.prototype.getImage=function(){var n=new Image();n.src=this.getBase64();return n};g.prototype.getBase64=function(){return this.getCanvas().toDataURL()};g.prototype.getCanvas=function(){if(this.renderer.type===m.RENDERER_TYPE.WEBGL){var s=this.renderer.gl;var q=this.textureBuffer.size.width;var n=this.textureBuffer.size.height;var o=new Uint8Array(4*q*n);s.bindFramebuffer(s.FRAMEBUFFER,this.textureBuffer.frameBuffer);s.readPixels(0,0,q,n,s.RGBA,s.UNSIGNED_BYTE,o);s.bindFramebuffer(s.FRAMEBUFFER,null);var r=new k(q,n);var p=r.context.getImageData(0,0,q,n);p.data.set(o);r.context.putImageData(p,0,0);return r.canvas}else{return this.textureBuffer.canvas}};g.prototype.getPixels=function(){var p,n;if(this.renderer.type===m.RENDERER_TYPE.WEBGL){var q=this.renderer.gl;p=this.textureBuffer.size.width;n=this.textureBuffer.size.height;var o=new Uint8Array(4*p*n);q.bindFramebuffer(q.FRAMEBUFFER,this.textureBuffer.frameBuffer);q.readPixels(0,0,p,n,q.RGBA,q.UNSIGNED_BYTE,o);q.bindFramebuffer(q.FRAMEBUFFER,null);return o}else{p=this.textureBuffer.canvas.width;n=this.textureBuffer.canvas.height;return this.textureBuffer.canvas.getContext("2d").getImageData(0,0,p,n).data}};g.prototype.getPixel=function(n,q){if(this.renderer.type===m.RENDERER_TYPE.WEBGL){var p=this.renderer.gl;var o=new Uint8Array(4);p.bindFramebuffer(p.FRAMEBUFFER,this.textureBuffer.frameBuffer);p.readPixels(n,q,1,1,p.RGBA,p.UNSIGNED_BYTE,o);p.bindFramebuffer(p.FRAMEBUFFER,null);return o}else{return this.textureBuffer.canvas.getContext("2d").getImageData(n,q,1,1).data}}},{"../const":15,"../math":25,"../renderers/canvas/utils/CanvasBuffer":37,"../renderers/webgl/managers/FilterManager":46,"../renderers/webgl/utils/RenderTarget":57,"./BaseTexture":62,"./Texture":64}],64:[function(b,a,d){var f=b("./BaseTexture"),j=b("./VideoBaseTexture"),g=b("./TextureUvs"),k=b("eventemitter3"),h=b("../math"),i=b("../utils");function c(o,p,n,l,m){k.call(this);this.noFrame=false;if(!p){this.noFrame=true;p=new h.Rectangle(0,0,1,1)}if(o instanceof c){o=o.baseTexture}this.baseTexture=o;this._frame=p;this.trim=l;this.valid=false;this.requiresUpdate=false;this._uvs=null;this.width=0;this.height=0;this.crop=n||p;this.rotate=!!m;if(o.hasLoaded){if(this.noFrame){p=new h.Rectangle(0,0,o.width,o.height);o.on("update",this.onBaseTextureUpdated,this)}this.frame=p}else{o.once("loaded",this.onBaseTextureLoaded,this)}}c.prototype=Object.create(k.prototype);c.prototype.constructor=c;a.exports=c;Object.defineProperties(c.prototype,{frame:{get:function(){return this._frame},set:function(l){this._frame=l;this.noFrame=false;this.width=l.width;this.height=l.height;if(!this.trim&&!this.rotate&&(l.x+l.width>this.baseTexture.width||l.y+l.height>this.baseTexture.height)){throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this)}this.valid=l&&l.width&&l.height&&this.baseTexture.hasLoaded;if(this.trim){this.width=this.trim.width;this.height=this.trim.height;this._frame.width=this.trim.width;this._frame.height=this.trim.height}else{this.crop=l}if(this.valid){this._updateUvs()}}}});c.prototype.update=function(){this.baseTexture.update()};c.prototype.onBaseTextureLoaded=function(l){if(this.noFrame){this.frame=new h.Rectangle(0,0,l.width,l.height)}else{this.frame=this._frame}this.emit("update",this)};c.prototype.onBaseTextureUpdated=function(l){this._frame.width=l.width;this._frame.height=l.height;this.emit("update",this)};c.prototype.destroy=function(l){if(l){this.baseTexture.destroy()}this.baseTexture.off("update",this.onBaseTextureUpdated);this.baseTexture.off("loaded",this.onBaseTextureLoaded);this.valid=false};c.prototype.clone=function(){return new c(this.baseTexture,this.frame,this.crop,this.trim,this.rotate)};c.prototype._updateUvs=function(){if(!this._uvs){this._uvs=new g()}this._uvs.set(this.crop,this.baseTexture,this.rotate)};c.fromImage=function(m,l,n){var o=i.TextureCache[m];if(!o){o=new c(f.fromImage(m,l,n));i.TextureCache[m]=o}return o};c.fromFrame=function(m){var l=i.TextureCache[m];if(!l){throw new Error('The frameId "'+m+'" does not exist in the texture cache')}return l};c.fromCanvas=function(l,m){return new c(f.fromCanvas(l,m))};c.fromVideo=function(m,l){if(typeof m==="string"){return c.fromVideoUrl(m,l)}else{return new c(j.fromVideo(m,l))}};c.fromVideoUrl=function(m,l){return new c(j.fromUrl(m,l))};c.addTextureToCache=function(l,m){i.TextureCache[m]=l};c.removeTextureFromCache=function(m){var l=i.TextureCache[m];delete i.TextureCache[m];delete i.BaseTextureCache[m];return l};c.EMPTY=new c(new f())},{"../math":25,"../utils":68,"./BaseTexture":62,"./TextureUvs":65,"./VideoBaseTexture":66,eventemitter3:4}],65:[function(b,c,a){function d(){this.x0=0;this.y0=0;this.x1=1;this.y1=0;this.x2=1;this.y2=1;this.x3=0;this.y3=1}c.exports=d;d.prototype.set=function(j,i,g){var f=i.width;var h=i.height;if(g){this.x0=(j.x+j.height)/f;this.y0=j.y/h;this.x1=(j.x+j.height)/f;this.y1=(j.y+j.width)/h;this.x2=j.x/f;this.y2=(j.y+j.width)/h;this.x3=j.x/f;this.y3=j.y/h}else{this.x0=j.x/f;this.y0=j.y/h;this.x1=(j.x+j.width)/f;this.y1=j.y/h;this.x2=(j.x+j.width)/f;this.y2=(j.y+j.height)/h;this.x3=j.x/f;this.y3=(j.y+j.height)/h}}},{}],66:[function(d,f,c){var h=d("./BaseTexture"),b=d("../utils");function a(j,i){if(!j){throw new Error("No video source element specified.")}if((j.readyState===j.HAVE_ENOUGH_DATA||j.readyState===j.HAVE_FUTURE_DATA)&&j.width&&j.height){j.complete=true}h.call(this,j,i);this.autoUpdate=false;this._onUpdate=this._onUpdate.bind(this);this._onCanPlay=this._onCanPlay.bind(this);if(!j.complete){j.addEventListener("canplay",this._onCanPlay);j.addEventListener("canplaythrough",this._onCanPlay);j.addEventListener("play",this._onPlayStart.bind(this));j.addEventListener("pause",this._onPlayStop.bind(this))}this.__loaded=false}a.prototype=Object.create(h.prototype);a.prototype.constructor=a;f.exports=a;a.prototype._onUpdate=function(){if(this.autoUpdate){window.requestAnimationFrame(this._onUpdate);this.update()}};a.prototype._onPlayStart=function(){if(!this.autoUpdate){window.requestAnimationFrame(this._onUpdate);this.autoUpdate=true}};a.prototype._onPlayStop=function(){this.autoUpdate=false};a.prototype._onCanPlay=function(){this.hasLoaded=true;if(this.source){this.source.removeEventListener("canplay",this._onCanPlay);this.source.removeEventListener("canplaythrough",this._onCanPlay);this.width=this.source.videoWidth;this.height=this.source.videoHeight;this.source.play();if(!this.__loaded){this.__loaded=true;this.emit("loaded",this)}}};a.prototype.destroy=function(){if(this.source&&this.source._pixiId){delete b.BaseTextureCache[this.source._pixiId];delete this.source._pixiId}h.prototype.destroy.call(this)};a.fromVideo=function(k,i){if(!k._pixiId){k._pixiId="video_"+b.uuid()}var j=b.BaseTextureCache[k._pixiId];if(!j){j=new a(k,i);b.BaseTextureCache[k._pixiId]=j}return j};a.fromUrl=function(j,l){var m=document.createElement("video");if(Array.isArray(j)){for(var k=0;k<j.length;++k){m.appendChild(g(j.src||j,j.mime))}}else{m.appendChild(g(j.src||j,j.mime))}m.load();m.play();return a.fromVideo(m,l)};a.fromUrls=a.fromUrl;function g(k,i){if(!i){i="video/"+k.substr(k.lastIndexOf(".")+1)}var j=document.createElement("source");j.src=k;j.type=i;return j}},{"../utils":68,"./BaseTexture":62}],67:[function(c,d,b){var a=d.exports={};a.Triangulate=function(o){var B=true;var q=o.length>>1;if(q<3){return[]}var y=[];var m=[];for(var w=0;w<q;w++){m.push(w)}w=0;var t=q;while(t>3){var u=m[(w+0)%t];var s=m[(w+1)%t];var r=m[(w+2)%t];var l=o[2*u],h=o[2*u+1];var z=o[2*s],x=o[2*s+1];var g=o[2*r],f=o[2*r+1];var k=false;if(a._convex(l,h,z,x,g,f,B)){k=true;for(var v=0;v<t;v++){var A=m[v];if(A===u||A===s||A===r){continue}if(a._PointInTriangle(o[2*A],o[2*A+1],l,h,z,x,g,f)){k=false;break}}}if(k){y.push(u,s,r);m.splice((w+1)%t,1);t--;w=0}else{if(w++>3*t){if(B){y=[];m=[];for(w=0;w<q;w++){m.push(w)}w=0;t=q;B=false}else{return null}}}}y.push(m[0],m[1],m[2]);return y};a._PointInTriangle=function(t,s,p,o,C,B,l,j){var i=l-p;var h=j-o;var n=C-p;var m=B-o;var A=t-p;var y=s-o;var z=i*i+h*h;var x=i*n+h*m;var w=i*A+h*y;var g=n*n+m*m;var f=n*A+m*y;var k=1/(z*g-x*x);var r=(g*w-x*f)*k;var q=(z*f-x*w)*k;return(r>=0)&&(q>=0)&&(r+q<1)};a._convex=function(i,h,k,j,f,l,g){return((h-j)*(f-k)+(k-i)*(l-j)>=0)===g}},{}],68:[function(d,f,c){var a=d("../const");var b=f.exports={_uid:0,_saidHello:false,pluginTarget:d("./pluginTarget"),PolyK:d("./PolyK"),async:d("async"),uuid:function(){return ++b._uid},hex2rgb:function(h,g){g=g||[];g[0]=(h>>16&255)/255;g[1]=(h>>8&255)/255;g[2]=(h&255)/255;return g},hex2string:function(g){g=g.toString(16);g="000000".substr(0,6-g.length)+g;return"#"+g},rgb2hex:function(g){return((g[0]*255<<16)+(g[1]*255<<8)+g[2]*255)},canUseNewCanvasBlendModes:function(){if(typeof document==="undefined"){return false}var h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/";var l="AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==";var g=new Image();g.src=h+"AP804Oa6"+l;var m=new Image();m.src=h+"/wCKxvRF"+l;var i=document.createElement("canvas");i.width=6;i.height=1;var j=i.getContext("2d");j.globalCompositeOperation="multiply";j.drawImage(g,0,0);j.drawImage(m,2,0);var k=j.getImageData(2,0,1,1).data;return(k[0]===255&&k[1]===0&&k[2]===0)},getNextPowerOfTwo:function(h){if(h>0&&(h&(h-1))===0){return h}else{var g=1;while(g<h){g<<=1}return g}},isPowerOfTwo:function(h,g){return(h>0&&(h&(h-1))===0&&g>0&&(g&(g-1))===0)},getResolutionOfUrl:function(h){var g=a.RETINA_PREFIX.exec(h);if(g){return parseFloat(g[1])}return 1},sayHello:function(h){if(b._saidHello){return}if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var g=["\n %c %c %c Pixi.js "+a.VERSION+" - ✰ "+h+" ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n","background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];window.console.log.apply(console,g)}else{if(window.console){window.console.log("Pixi.js "+a.VERSION+" - "+h+" - http://www.pixijs.com/")}}b._saidHello=true},isWebGLSupported:function(){var g={stencil:true};try{if(!window.WebGLRenderingContext){return false}var h=document.createElement("canvas"),j=h.getContext("webgl",g)||h.getContext("experimental-webgl",g);return !!(j&&j.getContextAttributes().stencil)}catch(i){return false}},TextureCache:{},BaseTextureCache:{}}},{"../const":15,"./PolyK":67,"./pluginTarget":69,async:1}],69:[function(d,f,c){function a(g){g.__plugins={};g.registerPlugin=function(i,h){g.__plugins[i]=h};g.prototype.initPlugins=function(){this.plugins=this.plugins||{};for(var h in g.__plugins){this.plugins[h]=new (g.__plugins[h])(this)}};g.prototype.destroyPlugins=function(){for(var h in this.plugins){this.plugins[h].destroy();this.plugins[h]=null}this.plugins=null}}f.exports={mixin:function b(g){a(g)}}},{}],70:[function(d,f,c){var b=d("./core"),h=d("./mesh"),g=d("./extras"),a=d("./core/utils");b.SpriteBatch=function(){throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")};b.AssetLoader=function(){throw new ReferenceError("The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.")};Object.defineProperties(b,{Stage:{get:function(){console.warn("You do not need to use a PIXI Stage any more, you can simply render any container.");return b.Container}},DisplayObjectContainer:{get:function(){console.warn("DisplayObjectContainer has been shortened to Container, please use Container from now on.");return b.Container}},Strip:{get:function(){console.warn("The Strip class has been renamed to Mesh, please use Mesh from now on.");return h.Mesh}},MovieClip:{get:function(){console.warn("The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on.");return g.MovieClip}},TilingSprite:{get:function(){console.warn("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on.");return g.TilingSprite}},TextureCache:{get:function(){console.warn("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on.");return a.TextureCache}},BitmapText:{get:function(){console.warn("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on.");return g.BitmapText}},blendModes:{get:function(){console.warn("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on.");return b.BLEND_MODES}},scaleModes:{get:function(){console.warn("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on.");return b.SCALE_MODES}}});b.Sprite.prototype.setTexture=function(i){this.texture=i;console.warn("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")};g.BitmapText.prototype.setText=function(i){this.text=i;console.warn("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")};b.Text.prototype.setText=function(i){this.text=i;console.warn("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")};b.Text.prototype.setStyle=function(i){this.style=i;console.warn("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")};b.Texture.prototype.setFrame=function(i){this.frame=i;console.warn("setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;")}},{"./core":22,"./core/utils":68,"./extras":77,"./mesh":118}],71:[function(c,d,b){var a=c("../core");function f(h,g){a.Container.call(this);this.textWidth=0;this.textHeight=0;this._glyphs=[];this._font={tint:g.tint!==undefined?g.tint:16777215,align:g.align||"left",name:null,size:0};this.font=g.font;this._text=h;this.maxWidth=0;this.dirty=false;this.updateText()}f.prototype=Object.create(a.Container.prototype);f.prototype.constructor=f;d.exports=f;Object.defineProperties(f.prototype,{tint:{get:function(){return this._font.tint},set:function(g){this._font.tint=(typeof g==="number"&&g>=0)?g:16777215;this.dirty=true}},align:{get:function(){return this._font.align},set:function(g){this._font.align=g;this.dirty=true}},font:{get:function(){return this._font},set:function(g){if(typeof g==="string"){g=g.split(" ");this._font.name=g.length===1?g[0]:g.slice(1).join(" ");this._font.size=g.length>=2?parseInt(g[0],10):f.fonts[this._font.name].size}else{this._font.name=g.name;this._font.size=typeof g.size==="number"?g.size:parseInt(g.size,10)}this.dirty=true}},text:{get:function(){return this._text},set:function(g){this._text=g;this.dirty=true}}});f.prototype.updateText=function(){var v=f.fonts[this._font.name];var k=new a.math.Point();var l=null;var q=[];var p=0;var r=0;var y=[];var o=0;var w=this._font.size/v.size;var m=-1;for(var t=0;t<this.text.length;t++){var h=this.text.charCodeAt(t);m=/(\s)/.test(this.text.charAt(t))?t:m;if(/(?:\r\n|\r|\n)/.test(this.text.charAt(t))){y.push(p);r=Math.max(r,p);o++;k.x=0;k.y+=v.lineHeight;l=null;continue}if(m!==-1&&this.maxWidth>0&&k.x*w>this.maxWidth){q.splice(m,t-m);t=m;m=-1;y.push(p);r=Math.max(r,p);o++;k.x=0;k.y+=v.lineHeight;l=null;continue}var g=v.chars[h];if(!g){continue}if(l&&g.kerning[l]){k.x+=g.kerning[l]}q.push({texture:g.texture,line:o,charCode:h,position:new a.math.Point(k.x+g.xOffset,k.y+g.yOffset)});p=k.x+(g.texture.width+g.xOffset);k.x+=g.xAdvance;l=h}y.push(p);r=Math.max(r,p);var s=[];for(t=0;t<=o;t++){var x=0;if(this._font.align==="right"){x=r-y[t]}else{if(this._font.align==="center"){x=(r-y[t])/2}}s.push(x)}var j=q.length;var n=this.tint;for(t=0;t<j;t++){var u=this._glyphs[t];if(u){u.texture=q[t].texture}else{u=new a.Sprite(q[t].texture);this._glyphs.push(u)}u.position.x=(q[t].position.x+s[q[t].line])*w;u.position.y=q[t].position.y*w;u.scale.x=u.scale.y=w;u.tint=n;if(!u.parent){this.addChild(u)}}for(t=j;t<this._glyphs.length;++t){this.removeChild(this._glyphs[t])}this.textWidth=r*w;this.textHeight=(k.y+v.lineHeight)*w};f.prototype.updateTransform=function(){if(this.dirty){this.updateText();this.dirty=false}this.containerUpdateTransform()};f.fonts={}},{"../core":22}],72:[function(c,d,b){var a=c("../core"),g=c("../ticker");function f(h){a.Sprite.call(this,h[0]);this._textures=h;this.animationSpeed=1;this.loop=true;this.onComplete=null;this._currentTime=0;this.playing=false}f.prototype=Object.create(a.Sprite.prototype);f.prototype.constructor=f;d.exports=f;Object.defineProperties(f.prototype,{totalFrames:{get:function(){return this._textures.length}},textures:{get:function(){return this._textures},set:function(h){this._textures=h;this.texture=this._textures[Math.floor(this._currentTime)%this._textures.length]}},currentFrame:{get:function(){return Math.floor(this._currentTime)%this._texture.length}}});f.prototype.stop=function(){if(!this.playing){return}this.playing=false;g.shared.remove(this.update,this)};f.prototype.play=function(){if(this.playing){return}this.playing=true;g.shared.add(this.update,this)};f.prototype.gotoAndStop=function(i){this.stop();this._currentTime=i;var h=Math.floor(this._currentTime);this._texture=this._textures[h%this._textures.length]};f.prototype.gotoAndPlay=function(h){this._currentTime=h;this.play()};f.prototype.update=function(h){this._currentTime+=this.animationSpeed*h;var i=Math.floor(this._currentTime);if(i<0){if(this.loop){this._currentTime+=this._textures.length;this._texture=this._textures[this._currentTime]}else{this.gotoAndStop(0);if(this.onComplete){this.onComplete()}}}else{if(this.loop||i<this._textures.length){this._texture=this._textures[i%this._textures.length]}else{if(i>=this._textures.length){this.gotoAndStop(this.textures.length-1);if(this.onComplete){this.onComplete()}}}}};f.prototype.destroy=function(){this.stop();a.Sprite.prototype.destroy.call(this)};f.fromFrames=function(k){var h=[];for(var j=0;j<k.length;++j){h.push(new a.Texture.fromFrame(k[j]))}return new f(h)};f.fromImages=function(j){var h=[];for(var k=0;k<j.length;++k){h.push(new a.Texture.fromImage(j[k]))}return new f(h)}},{"../core":22,"../ticker":125}],73:[function(c,d,b){var a=c("../core"),g=new a.Point();function f(j,i,h){a.Sprite.call(this,j);this.tileScale=new a.math.Point(1,1);this.tilePosition=new a.math.Point(0,0);this._width=i||100;this._height=h||100;this._uvs=new a.TextureUvs();this._canvasPattern=null;this.shader=new a.AbstractFilter(["precision lowp float;","attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec4 aColor;","uniform mat3 projectionMatrix;","uniform vec4 uFrame;","uniform vec4 uTransform;","varying vec2 vTextureCoord;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vec2 coord = aTextureCoord;","   coord -= uTransform.xy;","   coord /= uTransform.zw;","   coord /= uFrame.zw;","   vTextureCoord = coord;","   vColor = vec4(aColor.rgb * aColor.a, aColor.a);","}"].join("\n"),["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform vec4 uFrame;","void main(void){","   vec2 coord = fract(vTextureCoord);","   coord *= uFrame.zw;","   coord += uFrame.xy;","   gl_FragColor =  texture2D(uSampler, coord) * vColor ;","}"].join("\n"),{uFrame:{type:"4fv",value:[0,0,1,1]},uTransform:{type:"4fv",value:[0,0,1,1]}})}f.prototype=Object.create(a.Sprite.prototype);f.prototype.constructor=f;d.exports=f;Object.defineProperties(f.prototype,{width:{get:function(){return this._width},set:function(h){this._width=h}},height:{get:function(){return this._height},set:function(h){this._height=h}}});f.prototype._onTextureUpdate=function(){return};f.prototype._renderWebGL=function(m){var l=this._texture;if(!l||!l._uvs){return}var n=l._uvs,j=l._frame.width,i=l._frame.height,h=l.baseTexture.width,k=l.baseTexture.height;l._uvs=this._uvs;l._frame.width=this.width;l._frame.height=this.height;this.shader.uniforms.uFrame.value[0]=n.x0+(0.5/h);this.shader.uniforms.uFrame.value[1]=n.y0+(0.5/k);this.shader.uniforms.uFrame.value[2]=n.x1-n.x0+(-1/h);this.shader.uniforms.uFrame.value[3]=n.y2-n.y0+(-1/k);this.shader.uniforms.uTransform.value[0]=(this.tilePosition.x%h)/this._width;this.shader.uniforms.uTransform.value[1]=(this.tilePosition.y%k)/this._height;this.shader.uniforms.uTransform.value[2]=(h/this._width)*this.tileScale.x;this.shader.uniforms.uTransform.value[3]=(k/this._height)*this.tileScale.y;m.setObjectRenderer(m.plugins.sprite);m.plugins.sprite.render(this);l._uvs=n;l._frame.width=j;l._frame.height=i};f.prototype._renderCanvas=function(n){var o=this._texture;if(!o.baseTexture.hasLoaded){return}var k=n.context,l=this.worldTransform,m=n.resolution,i=o.baseTexture,j=this.tilePosition.x%i.width,h=this.tilePosition.y%i.height;if(!this._canvasPattern){var p=new a.CanvasBuffer(o._frame.width,o._frame.height);p.context.drawImage(i.source,-o._frame.x,-o._frame.y);this._canvasPattern=p.context.createPattern(p.canvas,"repeat")}k.globalAlpha=this.worldAlpha;k.setTransform(l.a*m,l.b*m,l.c*m,l.d*m,l.tx*m,l.ty*m);k.scale(this.tileScale.x,this.tileScale.y);k.translate(j+(this.anchor.x*-this._width),h+(this.anchor.y*-this._height));if(this.blendMode!==n.currentBlendMode){n.currentBlendMode=this.blendMode;k.globalCompositeOperation=n.blendModes[n.currentBlendMode]}k.fillStyle=this._canvasPattern;k.fillRect(-j,-h,this._width/this.tileScale.x,this._height/this.tileScale.y)};f.prototype.getBounds=function(){var r=this._width;var q=this._height;var p=r*(1-this.anchor.x);var o=r*-this.anchor.x;var n=q*(1-this.anchor.y);var m=q*-this.anchor.y;var s=this.worldTransform;var F=s.a;var D=s.b;var C=s.c;var A=s.d;var G=s.tx;var E=s.ty;var w=F*o+C*m+G;var k=A*m+D*o+E;var v=F*p+C*m+G;var j=A*m+D*p+E;var u=F*p+C*n+G;var i=A*n+D*p+E;var t=F*o+C*n+G;var h=A*n+D*o+E;var B,z,y,x;B=w;B=v<B?v:B;B=u<B?u:B;B=t<B?t:B;y=k;y=j<y?j:y;y=i<y?i:y;y=h<y?h:y;z=w;z=v>z?v:z;z=u>z?u:z;z=t>z?t:z;x=k;x=j>x?j:x;x=i>x?i:x;x=h>x?h:x;var l=this._bounds;l.x=B;l.width=z-B;l.y=y;l.height=x-y;this._currentBounds=l;return l};f.prototype.containsPoint=function(i){this.worldTransform.applyInverse(i,g);var l=this._width;var h=this._height;var j=-l*this.anchor.x;var k;if(g.x>j&&g.x<j+l){k=-h*this.anchor.y;if(g.y>k&&g.y<k+h){return true}}return false};f.prototype.destroy=function(){a.Sprite.prototype.destroy.call(this);this.tileScale=null;this._tileScaleOffset=null;this.tilePosition=null;this._uvs=null};f.fromFrame=function(k,i,h){var j=a.utils.TextureCache[k];if(!j){throw new Error('The frameId "'+k+'" does not exist in the texture cache '+this)}return new f(j,i,h)};f.fromImage=function(j,l,h,i,k){return new f(a.Texture.fromImage(j,i,k),l,h)}},{"../core":22}],74:[function(f,g,d){var b=f("../core"),c=b.DisplayObject,a=new b.Matrix();c.prototype._cacheAsBitmap=false;c.prototype._originalRenderWebGL=null;c.prototype._originalRenderCanvas=null;c.prototype._originalUpdateTransform=null;c.prototype._originalHitTest=null;c.prototype._cachedSprite=null;Object.defineProperties(c.prototype,{cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(h){if(this._cacheAsBitmap===h){return}this._cacheAsBitmap=h;if(h){this._originalRenderWebGL=this.renderWebGL;this._originalRenderCanvas=this.renderCanvas;this._originalUpdateTransform=this.updateTransform;this._originalGetBounds=this.getBounds;this._originalContainesPoint=this.containsPoint;this.renderWebGL=this._renderCachedWebGL;this.renderCanvas=this._renderCachedCanvas}else{if(this._cachedSprite){this._destroyCachedDisplayObject()}this.renderWebGL=this._originalRenderWebGL;this.renderCanvas=this._originalRenderCanvas;this.getBounds=this._originalGetBounds;this.updateTransform=this._originalUpdateTransform;this.containsPoint=this._originalContainsPoint}}}});c.prototype._renderCachedWebGL=function(h){this._initCachedDisplayObject(h);this._cachedSprite.worldAlpha=this.worldAlpha;h.setObjectRenderer(h.plugins.sprite);h.plugins.sprite.render(this._cachedSprite)};c.prototype._initCachedDisplayObject=function(n){if(this._cachedSprite){return}n.currentRenderer.flush();var l=this.getLocalBounds().clone();if(this._filters){var o=this._filters[0].padding;l.x-=o;l.y-=o;l.width+=o*2;l.height+=o*2}var k=n.currentRenderTarget;var i=n.filterManager.filterStack;var j=new b.RenderTexture(n,l.width|0,l.height|0);var h=a;h.tx=-l.x;h.ty=-l.y;this.renderWebGL=this._originalRenderWebGL;j.render(this,h,true,true);n.setRenderTarget(k);n.filterManager.filterStack=i;this.renderWebGL=this._renderCachedWebGL;this.updateTransform=this.displayObjectUpdateTransform;this.getBounds=this._getCachedBounds;this._cachedSprite=new b.Sprite(j);this._cachedSprite.worldTransform=this.worldTransform;this._cachedSprite.anchor.x=-(l.x/l.width);this._cachedSprite.anchor.y=-(l.y/l.height);this.updateTransform();this.containsPoint=this._cachedSprite.containsPoint.bind(this._cachedSprite)};c.prototype._renderCachedCanvas=function(h){this._initCachedDisplayObjectCanvas(h);this._cachedSprite.worldAlpha=this.worldAlpha;this._cachedSprite.renderCanvas(h)};c.prototype._initCachedDisplayObjectCanvas=function(l){if(this._cachedSprite){return}var k=this.getLocalBounds();var j=l.context;var i=new b.RenderTexture(l,k.width|0,k.height|0);var h=a;h.tx=-k.x;h.ty=-k.y;this.renderCanvas=this._originalRenderCanvas;i.render(this,h,true);l.context=j;this.renderCanvas=this._renderCachedCanvas;this.updateTransform=this.displayObjectUpdateTransform;this.getBounds=this._getCachedBounds;this._cachedSprite=new b.Sprite(i);this._cachedSprite.worldTransform=this.worldTransform;this._cachedSprite.anchor.x=-(k.x/k.width);this._cachedSprite.anchor.y=-(k.y/k.height);this.updateTransform();this.containsPoint=this._cachedSprite.containsPoint.bind(this._cachedSprite)};c.prototype._getCachedBounds=function(){this._cachedSprite._currentBounds=null;return this._cachedSprite.getBounds()};c.prototype._destroyCachedDisplayObject=function(){this._cachedSprite._texture.destroy();this._cachedSprite=null}},{"../core":22}],75:[function(c,d,b){var a=c("../core");a.DisplayObject.prototype.name=null;a.Container.prototype.getChildByName=function(f){for(var g=0;g<this.children.length;g++){if(this.children[g].name===f){return this.children[g]}}return null}},{"../core":22}],76:[function(c,d,b){var a=c("../core");a.DisplayObject.prototype.getGlobalPosition=function(f){f=f||new a.Point();if(this.parent){this.displayObjectUpdateTransform();f.x=this.worldTransform.tx;f.y=this.worldTransform.ty}else{f.x=this.position.x;f.y=this.position.y}return f}},{"../core":22}],77:[function(b,c,a){b("./cacheAsBitmap");b("./getChildByName");b("./getGlobalPosition");c.exports={MovieClip:b("./MovieClip"),TilingSprite:b("./TilingSprite"),BitmapText:b("./BitmapText")}},{"./BitmapText":71,"./MovieClip":72,"./TilingSprite":73,"./cacheAsBitmap":74,"./getChildByName":75,"./getGlobalPosition":76}],78:[function(c,d,b){var a=c("../../core");function f(){a.AbstractFilter.call(this,null,"precision mediump float;\n\nuniform vec4 dimensions;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 uv = gl_FragCoord.xy;\n\n    vec3 col = texture2D(uSampler, floor( uv / pixelSize ) * pixelSize / dimensions.xy).rgb;\n\n    float gray = (col.r + col.g + col.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    vec2 p = mod( uv / ( pixelSize * 0.5 ), 2.0) - vec2(1.0);\n    col = col * character(n, p);\n\n    gl_FragColor = vec4(col, 1.0);\n}\n",{dimensions:{type:"4fv",value:new Float32Array([0,0,0,0])},pixelSize:{type:"1f",value:8}})}f.prototype=Object.create(a.AbstractFilter.prototype);f.prototype.constructor=f;d.exports=f;Object.defineProperties(f.prototype,{size:{get:function(){return this.uniforms.pixelSize.value},set:function(g){this.uniforms.pixelSize.value=g}}})},{"../../core":22}],79:[function(c,d,b){var a=c("../../core"),g=c("../blur/BlurXFilter"),h=c("../blur/BlurYFilter");function f(){a.AbstractFilter.call(this);this.blurXFilter=new g();this.blurYFilter=new h();this.defaultFilter=new a.AbstractFilter()}f.prototype=Object.create(a.AbstractFilter.prototype);f.prototype.constructor=f;d.exports=f;f.prototype.applyFilter=function(l,j,i){var k=l.filterManager.getRenderTarget(true);this.defaultFilter.applyFilter(l,j,i);this.blurXFilter.applyFilter(l,j,k);l.blendModeManager.setBlendMode(a.BLEND_MODES.SCREEN);this.blurYFilter.applyFilter(l,k,i);l.blendModeManager.setBlendMode(a.BLEND_MODES.NORMAL);l.filterManager.returnRenderTarget(k)};Object.defineProperties(f.prototype,{blur:{get:function(){return this.blurXFilter.blur},set:function(i){this.blurXFilter.blur=this.blurYFilter.blur=i}},blurX:{get:function(){return this.blurXFilter.blur},set:function(i){this.blurXFilter.blur=i}},blurY:{get:function(){return this.blurYFilter.blur},set:function(i){this.blurYFilter.blur=i}}})},{"../../core":22,"../blur/BlurXFilter":82,"../blur/BlurYFilter":83}],80:[function(c,d,b){var a=c("../../core");function f(h,g){a.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform float dirX;\nuniform float dirY;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[3];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[0] = aTextureCoord + vec2( (0.004 * strength) * dirX, (0.004 * strength) * dirY );\n    vBlurTexCoords[1] = aTextureCoord + vec2( (0.008 * strength) * dirX, (0.008 * strength) * dirY );\n    vBlurTexCoords[2] = aTextureCoord + vec2( (0.012 * strength) * dirX, (0.012 * strength) * dirY );\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[3];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vTextureCoord     ) * 0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0]) * 0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1]) * 0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2]) * 0.004431848411938341;\n}\n",{strength:{type:"1f",value:1},dirX:{type:"1f",value:h||0},dirY:{type:"1f",value:g||0}});this.defaultFilter=new a.AbstractFilter();this.passes=1;this.dirX=h||0;this.dirY=g||0;this.strength=4}f.prototype=Object.create(a.AbstractFilter.prototype);f.prototype.constructor=f;d.exports=f;f.prototype.applyFilter=function(n,j,h,g){var l=this.getShader(n);this.uniforms.strength.value=this.strength/4/this.passes*(j.frame.width/j.size.width);if(this.passes===1){n.filterManager.applyFilter(l,j,h,g)}else{var m=n.filterManager.getRenderTarget(true);n.filterManager.applyFilter(l,j,m,g);for(var k=0;k<this.passes-2;k++){n.filterManager.applyFilter(l,m,m,g)}n.filterManager.applyFilter(l,m,h,g);n.filterManager.returnRenderTarget(m)}};Object.defineProperties(f.prototype,{blur:{get:function(){return this.strength},set:function(g){this.padding=g*0.5;this.strength=g}},dirX:{get:function(){return this.dirX},set:function(g){this.uniforms.dirX.value=g}},dirY:{get:function(){return this.dirY},set:function(g){this.uniforms.dirY.value=g}}})},{"../../core":22}],81:[function(c,d,b){var a=c("../../core"),f=c("./BlurDirFilter");function g(){a.AbstractFilter.call(this);this.defaultFilter=new a.AbstractFilter();this.blurFilters=[new f(1,0),new f(-1,0),new f(0,1),new f(0,-1),new f(0.7,0.7),new f(-0.7,0.7),new f(0.7,-0.7),new f(-0.7,-0.7)]}g.prototype=Object.create(a.AbstractFilter.prototype);g.prototype.constructor=g;d.exports=g;g.prototype.applyFilter=function(k,i,h){var j=k.filterManager.getRenderTarget(true);for(var l=0;l<this.blurFilters.length;l++){this.blurFilters[l].applyFilter(k,i,j)}this.defaultFilter.applyFilter(k,j,h);k.filterManager.returnRenderTarget(j)};Object.defineProperties(g.prototype,{blur:{get:function(){return this.blurFilters[0].blur},set:function(j){this.padding=j*0.5;for(var h=0;h<this.blurFilters.length;h++){this.blurFilters[h].blur=j}}},passes:{get:function(){return this.blurFilters[0].passes},set:function(j){for(var h=0;h<this.blurFilters.length;h++){this.blurFilters[h].passes=j}}},blurX:{get:function(){return this.blurFilters[0].blur},set:function(h){this.blurFilters[0].blur=h;this.blurFilters[1].blur=h;this.blurFilters[4].blur=h*this.blurFilters[2].blur;this.blurFilters[5].blur=h*this.blurFilters[2].blur;this.blurFilters[6].blur=h*this.blurFilters[3].blur;this.blurFilters[7].blur=h*this.blurFilters[3].blur}},blurY:{get:function(){return this.blurYFilter.blur},set:function(h){this.blurFilters[2].blur=h;this.blurFilters[3].blur=h;this.blurFilters[4].blur=h*this.blurFilters[0].blur;this.blurFilters[5].blur=h*this.blurFilters[0].blur;this.blurFilters[6].blur=h*this.blurFilters[1].blur;this.blurFilters[7].blur=h*this.blurFilters[1].blur}}})},{"../../core":22,"./BlurDirFilter":80}],82:[function(c,d,b){var a=c("../../core");function f(){a.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(-0.012 * strength, 0.0);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(-0.008 * strength, 0.0);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(-0.004 * strength, 0.0);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2( 0.004 * strength, 0.0);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2( 0.008 * strength, 0.0);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2( 0.012 * strength, 0.0);\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n",{strength:{type:"1f",value:1}});this.passes=1;this.strength=4}f.prototype=Object.create(a.AbstractFilter.prototype);f.prototype.constructor=f;d.exports=f;f.prototype.applyFilter=function(o,p,g,m){var n=this.getShader(o);this.uniforms.strength.value=this.strength/4/this.passes*(p.frame.width/p.size.width);if(this.passes===1){o.filterManager.applyFilter(n,p,g,m)}else{var l=o.filterManager.getRenderTarget(true);var k=p;var h=l;for(var j=0;j<this.passes-1;j++){o.filterManager.applyFilter(n,k,h,m);var q=h;h=k;k=q}o.filterManager.applyFilter(n,k,g,m);o.filterManager.returnRenderTarget(l)}};Object.defineProperties(f.prototype,{blur:{get:function(){return this.strength},set:function(g){this.padding=g*0.5;this.strength=g}}})},{"../../core":22}],83:[function(c,d,b){var a=c("../../core");function f(){a.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n",{strength:{type:"1f",value:1}});this.passes=1;this.strength=4}f.prototype=Object.create(a.AbstractFilter.prototype);f.prototype.constructor=f;d.exports=f;f.prototype.applyFilter=function(o,p,g,m){var n=this.getShader(o);this.uniforms.strength.value=this.strength/4/this.passes*(p.frame.height/p.size.height);if(this.passes===1){o.filterManager.applyFilter(n,p,g,m)}else{var l=o.filterManager.getRenderTarget(true);var k=p;var h=l;for(var j=0;j<this.passes-1;j++){o.filterManager.applyFilter(n,k,h,m);var q=h;h=k;k=q}o.filterManager.applyFilter(n,k,g,m);o.filterManager.returnRenderTarget(l)}};Object.defineProperties(f.prototype,{blur:{get:function(){return this.strength},set:function(g){this.padding=g*0.5;this.strength=g}}})},{"../../core":22}],84:[function(d,f,c){var b=d("../../core");function a(){b.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 delta;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta * percent);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n",{delta:{type:"v2",value:{x:0.1,y:0}}})}a.prototype=Object.create(b.AbstractFilter.prototype);a.prototype.constructor=a;f.exports=a},{"../../core":22}],85:[function(c,f,b){var a=c("../../core");function d(){a.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float m[24];\n\nuniform vec4 d;\n\nvoid main(void)\n{\n    \n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n\tgl_FragColor.r = m[0] * c.r + m[1] * c.g + m[2] * c.b + m[3] * c.a + m[4];\n\tgl_FragColor.g = m[5] * c.r + m[6] * c.g + m[7] * c.b + m[8] * c.a + m[9];\n\tgl_FragColor.b = m[10] * c.r + m[11] * c.g + m[12] * c.b + m[13] * c.a + m[14];\n\tgl_FragColor.a = c.a;\n}\n",{m:{type:"1fv",value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1]}})}d.prototype=Object.create(a.AbstractFilter.prototype);d.prototype.constructor=d;f.exports=d;d.prototype._loadMatrix=function(h,g){g=!!g;var i=h;if(g){this._multiply(i,this.uniforms.m.value,h);i=this._colorMatrix(i)}this.uniforms.m.value=i};d.prototype._multiply=function(i,h,g){i[0]=h[0]*g[0]+h[1]*g[5]+h[2]*g[10]+h[3]*g[15]+h[4]*g[20];i[1]=h[0]*g[1]+h[1]*g[6]+h[2]*g[11]+h[3]*g[16]+h[4]*g[21];i[2]=h[0]*g[2]+h[1]*g[7]+h[2]*g[12]+h[3]*g[17]+h[4]*g[22];i[3]=h[0]*g[3]+h[1]*g[8]+h[2]*g[13]+h[3]*g[18]+h[4]*g[23];i[4]=h[0]*g[4]+h[1]*g[9]+h[2]*g[14]+h[3]*g[19]+h[4]*g[24];i[5]=h[5]*g[0]+h[6]*g[5]+h[7]*g[10]+h[8]*g[15]+h[9]*g[20];i[6]=h[5]*g[1]+h[6]*g[6]+h[7]*g[11]+h[8]*g[16]+h[9]*g[21];i[7]=h[5]*g[2]+h[6]*g[7]+h[7]*g[12]+h[8]*g[17]+h[9]*g[22];i[8]=h[5]*g[3]+h[6]*g[8]+h[7]*g[13]+h[8]*g[18]+h[9]*g[23];i[9]=h[5]*g[4]+h[6]*g[9]+h[7]*g[14]+h[8]*g[19]+h[9]*g[24];i[10]=h[10]*g[0]+h[11]*g[5]+h[12]*g[10]+h[13]*g[15]+h[14]*g[20];i[11]=h[10]*g[1]+h[11]*g[6]+h[12]*g[11]+h[13]*g[16]+h[14]*g[21];i[12]=h[10]*g[2]+h[11]*g[7]+h[12]*g[12]+h[13]*g[17]+h[14]*g[22];i[13]=h[10]*g[3]+h[11]*g[8]+h[12]*g[13]+h[13]*g[18]+h[14]*g[23];i[14]=h[10]*g[4]+h[11]*g[9]+h[12]*g[14]+h[13]*g[19]+h[14]*g[24];i[15]=h[15]*g[0]+h[16]*g[5]+h[17]*g[10]+h[18]*g[15]+h[19]*g[20];i[16]=h[15]*g[1]+h[16]*g[6]+h[17]*g[11]+h[18]*g[16]+h[19]*g[21];i[17]=h[15]*g[2]+h[16]*g[7]+h[17]*g[12]+h[18]*g[17]+h[19]*g[22];i[18]=h[15]*g[3]+h[16]*g[8]+h[17]*g[13]+h[18]*g[18]+h[19]*g[23];i[19]=h[15]*g[4]+h[16]*g[9]+h[17]*g[14]+h[18]*g[19]+h[19]*g[24];i[20]=h[20]*g[0]+h[21]*g[5]+h[22]*g[10]+h[23]*g[15]+h[24]*g[20];i[21]=h[20]*g[1]+h[21]*g[6]+h[22]*g[11]+h[23]*g[16]+h[24]*g[21];i[22]=h[20]*g[2]+h[21]*g[7]+h[22]*g[12]+h[23]*g[17]+h[24]*g[22];i[23]=h[20]*g[3]+h[21]*g[8]+h[22]*g[13]+h[23]*g[18]+h[24]*g[23];i[24]=h[20]*g[4]+h[21]*g[9]+h[22]*g[14]+h[23]*g[19]+h[24]*g[24];return i};d.prototype._colorMatrix=function(h){var g=new Float32Array(h);g[4]/=255;g[9]/=255;g[14]/=255;g[19]/=255;return g};d.prototype.brightness=function(g,i){var h=[g,0,0,0,0,0,g,0,0,0,0,0,g,0,0,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(h,i)};d.prototype.greyscale=function(i,h){var g=[i,i,i,0,0,i,i,i,0,0,i,i,i,0,0,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(g,h)};d.prototype.blackAndWhite=function(h){var g=[0.3,0.6,0.1,0,0,0.3,0.6,0.1,0,0,0.3,0.6,0.1,0,0,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(g,h)};d.prototype.hue=function(l,i){l=(l||0)/180*Math.PI;var m=Math.cos(l),h=Math.sin(l);var k=0.213,j=0.715,n=0.072;var g=[k+m*(1-k)+h*(-k),j+m*(-j)+h*(-j),n+m*(-n)+h*(1-n),0,0,k+m*(-k)+h*(0.143),j+m*(1-j)+h*(0.14),n+m*(-n)+h*(-0.283),0,0,k+m*(-k)+h*(-(1-k)),j+m*(-j)+h*(j),n+m*(1-n)+h*(n),0,0,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(g,i)};d.prototype.contrast=function(j,i){var h=(j||0)+1;var k=-128*(h-1);var g=[h,0,0,0,k,0,h,0,0,k,0,0,h,0,k,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(g,i)};d.prototype.saturation=function(j,i){var g=(j||0)*2/3+1;var k=((g-1)*-0.5);var h=[g,k,k,0,0,k,g,k,0,0,k,k,g,0,0,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(h,i)};d.prototype.desaturate=function(g){this.saturation(-1)};d.prototype.negative=function(h){var g=[0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(g,h)};d.prototype.sepia=function(h){var g=[0.393,0.7689999,0.18899999,0,0,0.349,0.6859999,0.16799999,0,0,0.272,0.5339999,0.13099999,0,0,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(g,h)};d.prototype.technicolor=function(h){var g=[1.9125277891456083,-0.8545344976951645,-0.09155508482755585,0,11.793603434377337,-0.3087833385928097,1.7658908555458428,-0.10601743074722245,0,-70.35205161461398,-0.231103377548616,-0.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0,0,0,0,0,0];this._loadMatrix(g,h)};d.prototype.polaroid=function(h){var g=[1.438,-0.062,-0.062,0,0,-0.122,1.378,-0.122,0,0,-0.016,-0.016,1.483,0,0,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(g,h)};d.prototype.toBGR=function(h){var g=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(g,h)};d.prototype.kodachrome=function(h){var g=[1.1285582396593525,-0.3967382283601348,-0.03992559172921793,0,63.72958762196502,-0.16404339962244616,1.0835251566291304,-0.05498805115633132,0,24.732407896706203,-0.16786010706155763,-0.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(g,h)};d.prototype.browni=function(h){var g=[0.5997023498159715,0.34553243048391263,-0.2708298674538042,0,47.43192855600873,-0.037703249837783157,0.8609577587992641,0.15059552388459913,0,-36.96841498319127,0.24113635128153335,-0.07441037908422492,0.44972182064877153,0,-7.562075277591283,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(g,h)};d.prototype.vintage=function(h){var g=[0.6279345635605994,0.3202183420819367,-0.03965408211312453,0,9.651285835294123,0.02578397704808868,0.6441188644374771,0.03259127616149294,0,7.462829176470591,0.0466055556782719,-0.0851232987247891,0.5241648018700465,0,5.159190588235296,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(g,h)};d.prototype.colorTone=function(o,l,k,p,h){o=o||0.2;l=l||0.15;k=k||16770432;p=p||3375104;var r=((k>>16)&255)/255;var j=((k>>8)&255)/255;var m=(k&255)/255;var n=((p>>16)&255)/255;var g=((p>>8)&255)/255;var i=(p&255)/255;var q=[0.3,0.59,0.11,0,0,r,j,m,o,0,n,g,i,l,0,r-n,j-g,m-i,0,0,0,0,0,0,1];this._loadMatrix(q,h)};d.prototype.night=function(g,i){g=g||0.1;var h=[g*(-2),-g,0,0,0,-g,0,g,0,0,0,g,g*2,0,0,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(h,i)};d.prototype.predator=function(i,h){var g=[11.224130630493164*i,-4.794486999511719*i,-2.8746118545532227*i,0*i,0.40342438220977783*i,-3.6330697536468506*i,9.193157196044922*i,-2.951810836791992*i,0*i,-1.316135048866272*i,-3.2184197902679443*i,-4.2375030517578125*i,7.476448059082031*i,0*i,0.8044459223747253*i,0,0,0,1,0,0,0,0,0,0];this._loadMatrix(g,h)};d.prototype.lsd=function(h){var g=[2,-0.4,0.5,0,0,-0.5,2,-0.4,0,0,-0.4,-0.5,3,0,0,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(g,h)};d.prototype.reset=function(){var g=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1];this._loadMatrix(g,false)};Object.defineProperties(d.prototype,{matrix:{get:function(){return this.uniforms.m.value},set:function(g){this.uniforms.m.value=g}}})},{"../../core":22}],86:[function(d,f,c){var b=d("../../core");function a(){b.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float step;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    color = floor(color * step) / step;\n\n    gl_FragColor = color;\n}\n",{step:{type:"1f",value:5}})}a.prototype=Object.create(b.AbstractFilter.prototype);a.prototype.constructor=a;f.exports=a;Object.defineProperties(a.prototype,{step:{get:function(){return this.uniforms.step.value},set:function(g){this.uniforms.step.value=g}}})},{"../../core":22}],87:[function(d,f,c){var b=d("../../core");function a(h,i,g){b.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n",{matrix:{type:"1fv",value:new Float32Array(h)},texelSize:{type:"2v",value:{x:1/i,y:1/g}}})}a.prototype=Object.create(b.AbstractFilter.prototype);a.prototype.constructor=a;f.exports=a;Object.defineProperties(a.prototype,{matrix:{get:function(){return this.uniforms.matrix.value},set:function(g){this.uniforms.matrix.value=new Float32Array(g)}},width:{get:function(){return 1/this.uniforms.texelSize.value.x},set:function(g){this.uniforms.texelSize.value.x=1/g}},height:{get:function(){return 1/this.uniforms.texelSize.value.y},set:function(g){this.uniforms.texelSize.value.y=1/g}}})},{"../../core":22}],88:[function(c,d,b){var a=c("../../core");function f(){a.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n")}f.prototype=Object.create(a.AbstractFilter.prototype);f.prototype.constructor=f;d.exports=f},{"../../core":22}],89:[function(c,f,b){var a=c("../../core");function d(g){var h=new a.math.Matrix();g.renderable=false;a.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vMapCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nvoid main(void)\n{\n   vec4 original =  texture2D(uSampler, vTextureCoord);\n   vec4 map =  texture2D(mapSampler, vMapCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y));\n}\n",{mapSampler:{type:"sampler2D",value:g.texture},otherMatrix:{type:"mat3",value:h.toArray(true)},scale:{type:"v2",value:{x:1,y:1}}});this.maskSprite=g;this.maskMatrix=h;this.scale=new a.math.Point(20,20)}d.prototype=Object.create(a.AbstractFilter.prototype);d.prototype.constructor=d;f.exports=d;d.prototype.applyFilter=function(k,i,h){var g=k.filterManager;g.calculateMappedMatrix(i.frame,this.maskSprite,this.maskMatrix);this.uniforms.otherMatrix.value=this.maskMatrix.toArray(true);this.uniforms.scale.value.x=this.scale.x*(1/i.frame.width);this.uniforms.scale.value.y=this.scale.y*(1/i.frame.height);var j=this.getShader(k);g.applyFilter(j,i,h)};Object.defineProperties(d.prototype,{map:{get:function(){return this.uniforms.mapSampler.value},set:function(g){this.uniforms.mapSampler.value=g}}})},{"../../core":22}],90:[function(d,f,c){var a=d("../../core");function b(){a.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 dimensions;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * dimensions.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n",{scale:{type:"1f",value:1},angle:{type:"1f",value:5},dimensions:{type:"4fv",value:[0,0,0,0]}})}b.prototype=Object.create(a.AbstractFilter.prototype);b.prototype.constructor=b;f.exports=b;Object.defineProperties(b.prototype,{scale:{get:function(){return this.uniforms.scale.value},set:function(g){this.uniforms.scale.value=g}},angle:{get:function(){return this.uniforms.angle.value},set:function(g){this.uniforms.angle.value=g}}})},{"../../core":22}],91:[function(d,f,c){var b=d("../../core");function a(){b.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform vec2 offset;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition+offset), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform vec3 color;\nuniform float alpha;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec4 sum = vec4(0.0);\n\n    sum += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    sum += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    sum += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    sum += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    sum += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n\n    gl_FragColor = vec4( color.rgb * sum.a * alpha, sum.a * alpha );\n}\n",{blur:{type:"1f",value:1/512},color:{type:"c",value:[0,0,0]},alpha:{type:"1f",value:0.7},offset:{type:"2f",value:[5,5]},strength:{type:"1f",value:1}});this.passes=1;this.strength=4}a.prototype=Object.create(b.AbstractFilter.prototype);a.prototype.constructor=a;f.exports=a;a.prototype.applyFilter=function(o,p,g,m){var n=this.getShader(o);this.uniforms.strength.value=this.strength/4/this.passes*(p.frame.height/p.size.height);if(this.passes===1){o.filterManager.applyFilter(n,p,g,m)}else{var l=o.filterManager.getRenderTarget(true);var k=p;var h=l;for(var j=0;j<this.passes-1;j++){o.filterManager.applyFilter(n,k,h,m);var q=h;h=k;k=q}o.filterManager.applyFilter(n,k,g,m);o.filterManager.returnRenderTarget(l)}};Object.defineProperties(a.prototype,{blur:{get:function(){return this.strength},set:function(g){this.padding=g*0.5;this.strength=g}}})},{"../../core":22}],92:[function(d,f,c){var b=d("../../core"),g=d("../blur/BlurXFilter"),a=d("./BlurYTintFilter");function h(){b.AbstractFilter.call(this);this.blurXFilter=new g();this.blurYTintFilter=new a();this.defaultFilter=new b.AbstractFilter();this.padding=30;this._dirtyPosition=true;this._angle=45*Math.PI/180;this._distance=10;this.alpha=0.75;this.hideObject=false;this.blendMode=b.BLEND_MODES.MULTIPLY}h.prototype=Object.create(b.AbstractFilter.prototype);h.prototype.constructor=h;f.exports=h;h.prototype.applyFilter=function(l,j,i){var k=l.filterManager.getRenderTarget(true);if(this._dirtyPosition){this._dirtyPosition=false;this.blurYTintFilter.uniforms.offset.value[0]=Math.sin(this._angle)*this._distance;this.blurYTintFilter.uniforms.offset.value[1]=Math.cos(this._angle)*this._distance}this.blurXFilter.applyFilter(l,j,k);l.blendModeManager.setBlendMode(this.blendMode);this.blurYTintFilter.applyFilter(l,k,i);l.blendModeManager.setBlendMode(b.BLEND_MODES.NORMAL);if(!this.hideObject){this.defaultFilter.applyFilter(l,j,i)}l.filterManager.returnRenderTarget(k)};Object.defineProperties(h.prototype,{blur:{get:function(){return this.blurXFilter.blur},set:function(i){this.blurXFilter.blur=this.blurYTintFilter.blur=i}},blurX:{get:function(){return this.blurXFilter.blur},set:function(i){this.blurXFilter.blur=i}},blurY:{get:function(){return this.blurYTintFilter.blur},set:function(i){this.blurYTintFilter.blur=i}},color:{get:function(){return b.utils.rgb2hex(this.blurYTintFilter.uniforms.color.value)},set:function(i){this.blurYTintFilter.uniforms.color.value=b.utils.hex2rgb(i)}},alpha:{get:function(){return this.blurYTintFilter.uniforms.alpha.value},set:function(i){this.blurYTintFilter.uniforms.alpha.value=i}},distance:{get:function(){return this._distance},set:function(i){this._dirtyPosition=true;this._distance=i}},angle:{get:function(){return this._angle},set:function(i){this._dirtyPosition=true;this._angle=i}}})},{"../../core":22,"../blur/BlurXFilter":82,"./BlurYTintFilter":91}],93:[function(d,f,b){var a=d("../../core");function c(){a.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float gray;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);\n}\n",{gray:{type:"1f",value:1}})}c.prototype=Object.create(a.AbstractFilter.prototype);c.prototype.constructor=c;f.exports=c;Object.defineProperties(c.prototype,{gray:{get:function(){return this.uniforms.gray.value},set:function(g){this.uniforms.gray.value=g}}})},{"../../core":22}],94:[function(b,c,a){c.exports={AbstractFilter:b("../core/renderers/webgl/filters/AbstractFilter"),FXAAFilter:b("../core/renderers/webgl/filters/FXAAFilter"),SpriteMaskFilter:b("../core/renderers/webgl/filters/SpriteMaskFilter"),AsciiFilter:b("./ascii/AsciiFilter"),BloomFilter:b("./bloom/BloomFilter"),BlurFilter:b("./blur/BlurFilter"),BlurXFilter:b("./blur/BlurXFilter"),BlurYFilter:b("./blur/BlurYFilter"),BlurDirFilter:b("./blur/BlurDirFilter"),ColorMatrixFilter:b("./color/ColorMatrixFilter"),ColorStepFilter:b("./color/ColorStepFilter"),ConvolutionFilter:b("./convolution/ConvolutionFilter"),CrossHatchFilter:b("./crosshatch/CrossHatchFilter"),DisplacementFilter:b("./displacement/DisplacementFilter"),DotScreenFilter:b("./dot/DotScreenFilter"),GrayFilter:b("./gray/GrayFilter"),DropShadowFilter:b("./dropshadow/DropShadowFilter"),InvertFilter:b("./invert/InvertFilter"),NoiseFilter:b("./noise/NoiseFilter"),NormalMapFilter:b("./normal/NormalMapFilter"),PixelateFilter:b("./pixelate/PixelateFilter"),RGBSplitFilter:b("./rgb/RGBSplitFilter"),ShockwaveFilter:b("./shockwave/ShockwaveFilter"),SepiaFilter:b("./sepia/SepiaFilter"),SmartBlurFilter:b("./blur/SmartBlurFilter"),TiltShiftFilter:b("./tiltshift/TiltShiftFilter"),TiltShiftXFilter:b("./tiltshift/TiltShiftXFilter"),TiltShiftYFilter:b("./tiltshift/TiltShiftYFilter"),TwistFilter:b("./twist/TwistFilter")}},{"../core/renderers/webgl/filters/AbstractFilter":42,"../core/renderers/webgl/filters/FXAAFilter":43,"../core/renderers/webgl/filters/SpriteMaskFilter":44,"./ascii/AsciiFilter":78,"./bloom/BloomFilter":79,"./blur/BlurDirFilter":80,"./blur/BlurFilter":81,"./blur/BlurXFilter":82,"./blur/BlurYFilter":83,"./blur/SmartBlurFilter":84,"./color/ColorMatrixFilter":85,"./color/ColorStepFilter":86,"./convolution/ConvolutionFilter":87,"./crosshatch/CrossHatchFilter":88,"./displacement/DisplacementFilter":89,"./dot/DotScreenFilter":90,"./dropshadow/DropShadowFilter":92,"./gray/GrayFilter":93,"./invert/InvertFilter":95,"./noise/NoiseFilter":96,"./normal/NormalMapFilter":97,"./pixelate/PixelateFilter":98,"./rgb/RGBSplitFilter":99,"./sepia/SepiaFilter":100,"./shockwave/ShockwaveFilter":101,"./tiltshift/TiltShiftFilter":103,"./tiltshift/TiltShiftXFilter":104,"./tiltshift/TiltShiftYFilter":105,"./twist/TwistFilter":106}],95:[function(d,f,c){var a=d("../../core");function b(){a.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform float invert;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);\n}\n",{invert:{type:"1f",value:1}})}b.prototype=Object.create(a.AbstractFilter.prototype);b.prototype.constructor=b;f.exports=b;Object.defineProperties(b.prototype,{invert:{get:function(){return this.uniforms.invert.value},set:function(g){this.uniforms.invert.value=g}}})},{"../../core":22}],96:[function(c,d,b){var a=c("../../core");function f(){a.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(vTextureCoord) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n",{noise:{type:"1f",value:0.5}})}f.prototype=Object.create(a.AbstractFilter.prototype);f.prototype.constructor=f;d.exports=f;Object.defineProperties(f.prototype,{noise:{get:function(){return this.uniforms.noise.value},set:function(g){this.uniforms.noise.value=g}}})},{"../../core":22}],97:[function(c,d,b){var a=c("../../core");function f(g){a.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying float vColor;\n\nuniform sampler2D displacementMap;\nuniform sampler2D uSampler;\n\nuniform vec4 dimensions;\n\nconst vec2 Resolution = vec2(1.0,1.0);      //resolution of screen\nuniform vec3 LightPos;    //light position, normalized\nconst vec4 LightColor = vec4(1.0, 1.0, 1.0, 1.0);      //light RGBA -- alpha is intensity\nconst vec4 AmbientColor = vec4(1.0, 1.0, 1.0, 0.5);    //ambient RGBA -- alpha is intensity\nconst vec3 Falloff = vec3(0.0, 1.0, 0.2);         //attenuation coefficients\n\nuniform vec3 LightDir; // = vec3(1.0, 0.0, 1.0);\n\nuniform vec2 mapDimensions; // = vec2(256.0, 256.0);\n\n\nvoid main(void)\n{\n    vec2 mapCords = vTextureCoord.xy;\n\n    vec4 color = texture2D(uSampler, vTextureCoord.st);\n    vec3 nColor = texture2D(displacementMap, vTextureCoord.st).rgb;\n\n\n    mapCords *= vec2(dimensions.x/512.0, dimensions.y/512.0);\n\n    mapCords.y *= -1.0;\n    mapCords.y += 1.0;\n\n    // RGBA of our diffuse color\n    vec4 DiffuseColor = texture2D(uSampler, vTextureCoord);\n\n    // RGB of our normal map\n    vec3 NormalMap = texture2D(displacementMap, mapCords).rgb;\n\n    // The delta position of light\n    // vec3 LightDir = vec3(LightPos.xy - (gl_FragCoord.xy / Resolution.xy), LightPos.z);\n    vec3 LightDir = vec3(LightPos.xy - (mapCords.xy), LightPos.z);\n\n    // Correct for aspect ratio\n    // LightDir.x *= Resolution.x / Resolution.y;\n\n    // Determine distance (used for attenuation) BEFORE we normalize our LightDir\n    float D = length(LightDir);\n\n    // normalize our vectors\n    vec3 N = normalize(NormalMap * 2.0 - 1.0);\n    vec3 L = normalize(LightDir);\n\n    // Pre-multiply light color with intensity\n    // Then perform 'N dot L' to determine our diffuse term\n    vec3 Diffuse = (LightColor.rgb * LightColor.a) * max(dot(N, L), 0.0);\n\n    // pre-multiply ambient color with intensity\n    vec3 Ambient = AmbientColor.rgb * AmbientColor.a;\n\n    // calculate attenuation\n    float Attenuation = 1.0 / ( Falloff.x + (Falloff.y*D) + (Falloff.z*D*D) );\n\n    // the calculation which brings it all together\n    vec3 Intensity = Ambient + Diffuse * Attenuation;\n    vec3 FinalColor = DiffuseColor.rgb * Intensity;\n    gl_FragColor = vColor * vec4(FinalColor, DiffuseColor.a);\n\n    // gl_FragColor = vec4(1.0, 0.0, 0.0, Attenuation); // vColor * vec4(FinalColor, DiffuseColor.a);\n\n/*\n    // normalise color\n    vec3 normal = normalize(nColor * 2.0 - 1.0);\n\n    vec3 deltaPos = vec3( (light.xy - gl_FragCoord.xy) / resolution.xy, light.z );\n\n    float lambert = clamp(dot(normal, lightDir), 0.0, 1.0);\n\n    float d = sqrt(dot(deltaPos, deltaPos));\n    float att = 1.0 / ( attenuation.x + (attenuation.y*d) + (attenuation.z*d*d) );\n\n    vec3 result = (ambientColor * ambientIntensity) + (lightColor.rgb * lambert) * att;\n    result *= color.rgb;\n\n    gl_FragColor = vec4(result, 1.0);\n*/\n}\n",{displacementMap:{type:"sampler2D",value:g},scale:{type:"2f",value:{x:15,y:15}},offset:{type:"2f",value:{x:0,y:0}},mapDimensions:{type:"2f",value:{x:1,y:1}},dimensions:{type:"4f",value:[0,0,0,0]},LightPos:{type:"3f",value:[0,1,0]}});g.baseTexture._powerOf2=true;if(g.baseTexture.hasLoaded){this.onTextureLoaded()}else{g.baseTexture.once("loaded",this.onTextureLoaded,this)}}f.prototype=Object.create(a.AbstractFilter.prototype);f.prototype.constructor=f;d.exports=f;f.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.displacementMap.value.width;this.uniforms.mapDimensions.value.y=this.uniforms.displacementMap.value.height};Object.defineProperties(f.prototype,{map:{get:function(){return this.uniforms.displacementMap.value},set:function(g){this.uniforms.displacementMap.value=g}},scale:{get:function(){return this.uniforms.scale.value},set:function(g){this.uniforms.scale.value=g}},offset:{get:function(){return this.uniforms.offset.value},set:function(g){this.uniforms.offset.value=g}}})},{"../../core":22}],98:[function(c,d,b){var a=c("../../core");function f(){a.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 dimensions;\nuniform vec2 pixelSize;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord;\n\n    vec2 size = dimensions.xy / pixelSize;\n\n    vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;\n\n    gl_FragColor = texture2D(uSampler, color);\n}\n",{dimensions:{type:"4fv",value:new Float32Array([0,0,0,0])},pixelSize:{type:"v2",value:{x:10,y:10}}})}f.prototype=Object.create(a.AbstractFilter.prototype);f.prototype.constructor=f;d.exports=f;Object.defineProperties(f.prototype,{size:{get:function(){return this.uniforms.pixelSize.value},set:function(g){this.uniforms.pixelSize.value=g}}})},{"../../core":22}],99:[function(c,d,b){var a=c("../../core");function f(){a.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 dimensions;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n",{red:{type:"v2",value:{x:20,y:20}},green:{type:"v2",value:{x:-20,y:20}},blue:{type:"v2",value:{x:20,y:-20}},dimensions:{type:"4fv",value:[0,0,0,0]}})}f.prototype=Object.create(a.AbstractFilter.prototype);f.prototype.constructor=f;d.exports=f;Object.defineProperties(f.prototype,{red:{get:function(){return this.uniforms.red.value},set:function(g){this.uniforms.red.value=g}},green:{get:function(){return this.uniforms.green.value},set:function(g){this.uniforms.green.value=g}},blue:{get:function(){return this.uniforms.blue.value},set:function(g){this.uniforms.blue.value=g}}})},{"../../core":22}],100:[function(d,f,b){var a=d("../../core");function c(){a.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float sepia;\n\nconst mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);\n}\n",{sepia:{type:"1f",value:1}})}c.prototype=Object.create(a.AbstractFilter.prototype);c.prototype.constructor=c;f.exports=c;Object.defineProperties(c.prototype,{sepia:{get:function(){return this.uniforms.sepia.value},set:function(g){this.uniforms.sepia.value=g}}})},{"../../core":22}],101:[function(c,d,b){var a=c("../../core");function f(){a.AbstractFilter.call(this,null,"precision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nuniform vec2 center;\nuniform vec3 params; // 10.0, 0.8, 0.1\nuniform float time;\n\nvoid main()\n{\n    vec2 uv = vTextureCoord;\n    vec2 texCoord = uv;\n\n    float dist = distance(uv, center);\n\n    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )\n    {\n        float diff = (dist - time);\n        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);\n\n        float diffTime = diff  * powDiff;\n        vec2 diffUV = normalize(uv - center);\n        texCoord = uv + (diffUV * diffTime);\n    }\n\n    gl_FragColor = texture2D(uSampler, texCoord);\n}\n",{center:{type:"v2",value:{x:0.5,y:0.5}},params:{type:"v3",value:{x:10,y:0.8,z:0.1}},time:{type:"1f",value:0}})}f.prototype=Object.create(a.AbstractFilter.prototype);f.prototype.constructor=f;d.exports=f;Object.defineProperties(f.prototype,{center:{get:function(){return this.uniforms.center.value},set:function(g){this.uniforms.center.value=g}},params:{get:function(){return this.uniforms.params.value},set:function(g){this.uniforms.params.value=g}},time:{get:function(){return this.uniforms.time.value},set:function(g){this.uniforms.time.value=g}}})},{"../../core":22}],102:[function(c,d,b){var a=c("../../core");function f(){a.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n",{blur:{type:"1f",value:100},gradientBlur:{type:"1f",value:600},start:{type:"v2",value:{x:0,y:window.innerHeight/2}},end:{type:"v2",value:{x:600,y:window.innerHeight/2}},delta:{type:"v2",value:{x:30,y:30}},texSize:{type:"v2",value:{x:window.innerWidth,y:window.innerHeight}}});this.updateDelta()}f.prototype=Object.create(a.AbstractFilter.prototype);f.prototype.constructor=f;d.exports=f;f.prototype.updateDelta=function(){this.uniforms.delta.value.x=0;this.uniforms.delta.value.y=0};Object.defineProperties(f.prototype,{blur:{get:function(){return this.uniforms.blur.value},set:function(g){this.uniforms.blur.value=g}},gradientBlur:{get:function(){return this.uniforms.gradientBlur.value},set:function(g){this.uniforms.gradientBlur.value=g}},start:{get:function(){return this.uniforms.start.value},set:function(g){this.uniforms.start.value=g;this.updateDelta()}},end:{get:function(){return this.uniforms.end.value},set:function(g){this.uniforms.end.value=g;this.updateDelta()}}})},{"../../core":22}],103:[function(c,f,b){var a=c("../../core"),g=c("./TiltShiftXFilter"),h=c("./TiltShiftYFilter");function d(){a.AbstractFilter.call(this);this.tiltShiftXFilter=new g();this.tiltShiftYFilter=new h()}d.prototype=Object.create(a.AbstractFilter.prototype);d.prototype.constructor=d;f.exports=d;d.prototype.applyFilter=function(l,j,i){var k=l.filterManager.getRenderTarget(true);this.tiltShiftXFilter.applyFilter(l,j,k);this.tiltShiftYFilter.applyFilter(l,k,i);l.filterManager.returnRenderTarget(k)};Object.defineProperties(d.prototype,{blur:{get:function(){return this.tiltShiftXFilter.blur},set:function(i){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=i}},gradientBlur:{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(i){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=i}},start:{get:function(){return this.tiltShiftXFilter.start},set:function(i){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=i}},end:{get:function(){return this.tiltShiftXFilter.end},set:function(i){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=i}}})},{"../../core":22,"./TiltShiftXFilter":104,"./TiltShiftYFilter":105}],104:[function(b,c,a){var f=b("./TiltShiftAxisFilter");function d(){f.call(this)}d.prototype=Object.create(f.prototype);d.prototype.constructor=d;c.exports=d;d.prototype.updateDelta=function(){var h=this.uniforms.end.value.x-this.uniforms.start.value.x;var g=this.uniforms.end.value.y-this.uniforms.start.value.y;var i=Math.sqrt(h*h+g*g);this.uniforms.delta.value.x=h/i;this.uniforms.delta.value.y=g/i}},{"./TiltShiftAxisFilter":102}],105:[function(b,c,a){var d=b("./TiltShiftAxisFilter");function f(){d.call(this)}f.prototype=Object.create(d.prototype);f.prototype.constructor=f;c.exports=f;f.prototype.updateDelta=function(){var h=this.uniforms.end.value.x-this.uniforms.start.value.x;var g=this.uniforms.end.value.y-this.uniforms.start.value.y;var i=Math.sqrt(h*h+g*g);this.uniforms.delta.value.x=-g/i;this.uniforms.delta.value.y=h/i}},{"./TiltShiftAxisFilter":102}],106:[function(c,d,b){var a=c("../../core");function f(){a.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\n\nvoid main(void)\n{\n   vec2 coord = vTextureCoord - offset;\n   float dist = length(coord);\n\n   if (dist < radius)\n   {\n       float ratio = (radius - dist) / radius;\n       float angleMod = ratio * ratio * angle;\n       float s = sin(angleMod);\n       float c = cos(angleMod);\n       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n   }\n\n   gl_FragColor = texture2D(uSampler, coord+offset);\n}\n",{radius:{type:"1f",value:0.5},angle:{type:"1f",value:5},offset:{type:"v2",value:{x:0.5,y:0.5}}})}f.prototype=Object.create(a.AbstractFilter.prototype);f.prototype.constructor=f;d.exports=f;Object.defineProperties(f.prototype,{offset:{get:function(){return this.uniforms.offset.value},set:function(g){this.uniforms.offset.value=g}},radius:{get:function(){return this.uniforms.radius.value},set:function(g){this.uniforms.radius.value=g}},angle:{get:function(){return this.uniforms.angle.value},set:function(g){this.uniforms.angle.value=g}}})},{"../../core":22}],107:[function(d,f,b){var a=d("../core");function c(){this.global=new a.Point();this.target=null;this.originalEvent=null}c.prototype.constructor=c;f.exports=c;c.prototype.getLocalPosition=function(m,o,n){var g=m.worldTransform;var i=n?n:this.global;var l=g.a,k=g.c,j=g.tx,r=g.b,q=g.d,p=g.ty,h=1/(l*q+k*-r);o=o||new a.math.Point();o.x=q*h*i.x+-k*h*i.y+(p*k-j*q)*h;o.y=l*h*i.y+-r*h*i.x+(-p*l+j*r)*h;return o}},{"../core":22}],108:[function(d,f,b){var a=d("../core"),c=d("./InteractionData");Object.assign(a.DisplayObject.prototype,d("./interactiveTarget"));function g(i,h){h=h||{};this.renderer=i;this.autoPreventDefault=h.autoPreventDefault!==undefined?h.autoPreventDefault:true;this.interactionFrequency=h.interactionFrequency||10;this.mouse=new c();this.eventData={stopped:false,target:null,type:null,data:this.mouse,stopPropagation:function(){this.stopped=true}};this.interactiveDataPool=[];this.interactionDOMElement=null;this.eventsAdded=false;this.onMouseUp=this.onMouseUp.bind(this);this.processMouseUp=this.processMouseUp.bind(this);this.onMouseDown=this.onMouseDown.bind(this);this.processMouseDown=this.processMouseDown.bind(this);this.onMouseMove=this.onMouseMove.bind(this);this.processMouseMove=this.processMouseMove.bind(this);this.onMouseOut=this.onMouseOut.bind(this);this.processMouseOverOut=this.processMouseOverOut.bind(this);this.onTouchStart=this.onTouchStart.bind(this);this.processTouchStart=this.processTouchStart.bind(this);this.onTouchEnd=this.onTouchEnd.bind(this);this.processTouchEnd=this.processTouchEnd.bind(this);this.onTouchMove=this.onTouchMove.bind(this);this.processTouchMove=this.processTouchMove.bind(this);this.last=0;this.currentCursorStyle="inherit";this._tempPoint=new a.Point();this.resolution=1;this.setTargetElement(this.renderer.view,this.renderer.resolution)}g.prototype.constructor=g;f.exports=g;g.prototype.setTargetElement=function(i,h){this.removeEvents();this.interactionDOMElement=i;this.resolution=h||1;this.addEvents()};g.prototype.addEvents=function(){if(!this.interactionDOMElement){return}a.ticker.shared.add(this.update,this);if(window.navigator.msPointerEnabled){this.interactionDOMElement.style["-ms-content-zooming"]="none";this.interactionDOMElement.style["-ms-touch-action"]="none"}window.document.addEventListener("mousemove",this.onMouseMove,true);this.interactionDOMElement.addEventListener("mousedown",this.onMouseDown,true);this.interactionDOMElement.addEventListener("mouseout",this.onMouseOut,true);this.interactionDOMElement.addEventListener("touchstart",this.onTouchStart,true);this.interactionDOMElement.addEventListener("touchend",this.onTouchEnd,true);this.interactionDOMElement.addEventListener("touchmove",this.onTouchMove,true);window.addEventListener("mouseup",this.onMouseUp,true);this.eventsAdded=true};g.prototype.removeEvents=function(){if(!this.interactionDOMElement){return}a.ticker.shared.remove(this.update);if(window.navigator.msPointerEnabled){this.interactionDOMElement.style["-ms-content-zooming"]="";this.interactionDOMElement.style["-ms-touch-action"]=""}window.document.removeEventListener("mousemove",this.onMouseMove,true);this.interactionDOMElement.removeEventListener("mousedown",this.onMouseDown,true);this.interactionDOMElement.removeEventListener("mouseout",this.onMouseOut,true);this.interactionDOMElement.removeEventListener("touchstart",this.onTouchStart,true);this.interactionDOMElement.removeEventListener("touchend",this.onTouchEnd,true);this.interactionDOMElement.removeEventListener("touchmove",this.onTouchMove,true);this.interactionDOMElement=null;window.removeEventListener("mouseup",this.onMouseUp,true);this.eventsAdded=false};g.prototype.update=function(h){this._deltaTime+=h;if(this._deltaTime<this.interactionFrequency){return}this._deltaTime=0;if(!this.interactionDOMElement){return}if(this.didMove){this.didMove=false;return}this.cursor="inherit";this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseOverOut,true);if(this.currentCursorStyle!==this.cursor){this.currentCursorStyle=this.cursor;this.interactionDOMElement.style.cursor=this.cursor}};g.prototype.dispatchEvent=function(j,h,i){if(!i.stopped){i.target=j;i.type=h;j.emit(h,i);if(j[h]){j[h](i)}}};g.prototype.mapPositionToPoint=function(i,h,k){var j=this.interactionDOMElement.getBoundingClientRect();i.x=((h-j.left)*(this.interactionDOMElement.width/j.width))/this.resolution;i.y=((k-j.top)*(this.interactionDOMElement.height/j.height))/this.resolution};g.prototype.processInteractive=function(h,p,n,k,j){if(!p.visible){return false}var m=p.children;var o=false;j=j||p.interactive;if(p.interactiveChildren){for(var l=m.length-1;l>=0;l--){if(!o&&k){o=this.processInteractive(h,m[l],n,true,j)}else{this.processInteractive(h,m[l],n,false,false)}}}if(j){if(k){if(p.hitArea){p.worldTransform.applyInverse(h,this._tempPoint);o=p.hitArea.contains(this._tempPoint.x,this._tempPoint.y)}else{if(p.containsPoint){o=p.containsPoint(h)}}}if(p.interactive){n(p,o)}}return o};g.prototype.onMouseDown=function(h){this.mouse.originalEvent=h;this.eventData.data=this.mouse;this.eventData.stopped=false;this.mapPositionToPoint(this.mouse.global,h.clientX,h.clientY);if(this.autoPreventDefault){this.mouse.originalEvent.preventDefault()}this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseDown,true)};g.prototype.processMouseDown=function(k,h){var i=this.mouse.originalEvent;var j=i.button===2||i.which===3;if(h){k[j?"_isRightDown":"_isLeftDown"]=true;this.dispatchEvent(k,j?"rightdown":"mousedown",this.eventData)}};g.prototype.onMouseUp=function(h){this.mouse.originalEvent=h;this.eventData.data=this.mouse;this.eventData.stopped=false;this.mapPositionToPoint(this.mouse.global,h.clientX,h.clientY);this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseUp,true)};g.prototype.processMouseUp=function(l,i){var j=this.mouse.originalEvent;var k=j.button===2||j.which===3;var h=k?"_isRightDown":"_isLeftDown";if(i){this.dispatchEvent(l,k?"rightup":"mouseup",this.eventData);if(l[h]){l[h]=false;this.dispatchEvent(l,k?"rightclick":"click",this.eventData)}}else{if(l[h]){l[h]=false;this.dispatchEvent(l,k?"rightupoutside":"mouseupoutside",this.eventData)}}};g.prototype.onMouseMove=function(h){this.mouse.originalEvent=h;this.eventData.data=this.mouse;this.eventData.stopped=false;this.mapPositionToPoint(this.mouse.global,h.clientX,h.clientY);this.didMove=true;this.cursor="inherit";this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseMove,true);if(this.currentCursorStyle!==this.cursor){this.currentCursorStyle=this.cursor;this.interactionDOMElement.style.cursor=this.cursor}};g.prototype.processMouseMove=function(i,h){this.dispatchEvent(i,"mousemove",this.eventData);this.processMouseOverOut(i,h)};g.prototype.onMouseOut=function(h){this.mouse.originalEvent=h;this.eventData.stopped=false;this.mapPositionToPoint(this.mouse.global,h.clientX,h.clientY);this.interactionDOMElement.style.cursor="inherit";this.mapPositionToPoint(this.mouse.global,h.clientX,h.clientY);this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseOverOut,false)};g.prototype.processMouseOverOut=function(i,h){if(h){if(!i._over){i._over=true;this.dispatchEvent(i,"mouseover",this.eventData)}if(i.buttonMode){this.cursor=i.defaultCursor}}else{if(i._over){i._over=false;this.dispatchEvent(i,"mouseout",this.eventData)}}};g.prototype.onTouchStart=function(m){if(this.autoPreventDefault){m.preventDefault()}var l=m.changedTouches;var n=l.length;for(var k=0;k<n;k++){var h=l[k];var j=this.getTouchData(h);j.originalEvent=m;this.eventData.data=j;this.eventData.stopped=false;this.processInteractive(j.global,this.renderer._lastObjectRendered,this.processTouchStart,true);this.returnTouchData(j)}};g.prototype.processTouchStart=function(i,h){if(h){i._touchDown=true;this.dispatchEvent(i,"touchstart",this.eventData)}};g.prototype.onTouchEnd=function(m){if(this.autoPreventDefault){m.preventDefault()}var l=m.changedTouches;var n=l.length;for(var k=0;k<n;k++){var h=l[k];var j=this.getTouchData(h);j.originalEvent=m;this.eventData.data=j;this.eventData.stopped=false;this.processInteractive(j.global,this.renderer._lastObjectRendered,this.processTouchEnd,true);this.returnTouchData(j)}};g.prototype.processTouchEnd=function(i,h){if(h){this.dispatchEvent(i,"touchend",this.eventData);if(i._touchDown){i._touchDown=false;this.dispatchEvent(i,"tap",this.eventData)}}else{if(i._touchDown){i._touchDown=false;this.dispatchEvent(i,"touchendoutside",this.eventData)}}};g.prototype.onTouchMove=function(m){if(this.autoPreventDefault){m.preventDefault()}var l=m.changedTouches;var n=l.length;for(var k=0;k<n;k++){var h=l[k];var j=this.getTouchData(h);j.originalEvent=m;this.eventData.data=j;this.eventData.stopped=false;this.processInteractive(j.global,this.renderer._lastObjectRendered,this.processTouchMove,false);this.returnTouchData(j)}};g.prototype.processTouchMove=function(i,h){h=h;this.dispatchEvent(i,"touchmove",this.eventData)};g.prototype.getTouchData=function(h){var i=this.interactiveDataPool.pop();if(!i){i=new c()}i.identifier=h.identifier;this.mapPositionToPoint(i.global,h.clientX,h.clientY);h.globalX=i.global.x;h.globalY=i.global.y;return i};g.prototype.returnTouchData=function(h){this.interactiveDataPool.push(h)};g.prototype.destroy=function(){this.removeEvents();this.renderer=null;this.mouse=null;this.eventData=null;this.interactiveDataPool=null;this.interactionDOMElement=null;this.onMouseUp=null;this.processMouseUp=null;this.onMouseDown=null;this.processMouseDown=null;this.onMouseMove=null;this.processMouseMove=null;this.onMouseOut=null;this.processMouseOverOut=null;this.onTouchStart=null;this.processTouchStart=null;this.onTouchEnd=null;this.processTouchEnd=null;this.onTouchMove=null;this.processTouchMove=null;this._tempPoint=null};a.WebGLRenderer.registerPlugin("interaction",g);a.CanvasRenderer.registerPlugin("interaction",g)},{"../core":22,"./InteractionData":107,"./interactiveTarget":110}],109:[function(b,c,a){c.exports={InteractionData:b("./InteractionData"),InteractionManager:b("./InteractionManager"),interactiveTarget:b("./interactiveTarget")}},{"./InteractionData":107,"./InteractionManager":108,"./interactiveTarget":110}],110:[function(b,c,a){c.exports={interactive:false,buttonMode:false,interactiveChildren:true,defaultCursor:"pointer",_over:false,_touchDown:false}},{}],111:[function(c,b,h){var a=c("resource-loader").Resource,d=c("../core"),i=c("../core/utils"),g=c("../extras"),j=c("path");function f(m,t){var n={};var l=m.data.getElementsByTagName("info")[0];var r=m.data.getElementsByTagName("common")[0];n.font=l.getAttribute("face");n.size=parseInt(l.getAttribute("size"),10);n.lineHeight=parseInt(r.getAttribute("lineHeight"),10);n.chars={};var s=m.data.getElementsByTagName("char");for(var o=0;o<s.length;o++){var w=parseInt(s[o].getAttribute("id"),10);var v=new d.math.Rectangle(parseInt(s[o].getAttribute("x"),10)+t.frame.x,parseInt(s[o].getAttribute("y"),10)+t.frame.y,parseInt(s[o].getAttribute("width"),10),parseInt(s[o].getAttribute("height"),10));n.chars[w]={xOffset:parseInt(s[o].getAttribute("xoffset"),10),yOffset:parseInt(s[o].getAttribute("yoffset"),10),xAdvance:parseInt(s[o].getAttribute("xadvance"),10),kerning:{},texture:new d.Texture(t.baseTexture,v)}}var u=m.data.getElementsByTagName("kerning");for(o=0;o<u.length;o++){var q=parseInt(u[o].getAttribute("first"),10);var k=parseInt(u[o].getAttribute("second"),10);var p=parseInt(u[o].getAttribute("amount"),10);n.chars[k].kerning[q]=p}m.bitmapFont=n;g.BitmapText.fonts[n.font]=n}b.exports=function(){return function(o,m){if(!o.data||!o.isXml){return m()}if(o.data.getElementsByTagName("page").length===0||o.data.getElementsByTagName("info").length===0||o.data.getElementsByTagName("info")[0].getAttribute("face")===null){return m()}var l=j.dirname(o.url);if(l==="."){l=""}if(this.baseUrl&&l){if(this.baseUrl.charAt(this.baseUrl.length-1)==="/"){l+="/"}l=l.replace(this.baseUrl,"")}if(l&&l.charAt(l.length-1)!=="/"){l+="/"}var k=l+o.data.getElementsByTagName("page")[0].getAttribute("file");if(i.TextureCache[k]){f(o,i.TextureCache[k]);m()}else{var n={crossOrigin:o.crossOrigin,loadType:a.LOAD_TYPE.IMAGE};this.add(o.name+"_image",k,n,function(p){f(o,p.texture);m()})}}}},{"../core":22,"../core/utils":68,"../extras":77,path:2,"resource-loader":11}],112:[function(b,c,a){c.exports={Loader:b("./loader"),bitmapFontParser:b("./bitmapFontParser"),spritesheetParser:b("./spritesheetParser"),textureParser:b("./textureParser"),Resource:b("resource-loader").Resource}},{"./bitmapFontParser":111,"./loader":113,"./spritesheetParser":114,"./textureParser":115,"resource-loader":11}],113:[function(d,f,b){var i=d("resource-loader"),c=d("./textureParser"),a=d("./spritesheetParser"),g=d("./bitmapFontParser");function h(k,j){i.call(this,k,j);this.use(i.middleware.parsing.blob());this.use(c());this.use(a());this.use(g())}h.prototype=Object.create(i.prototype);h.prototype.constructor=h;f.exports=h},{"./bitmapFontParser":111,"./spritesheetParser":114,"./textureParser":115,"resource-loader":11}],114:[function(c,d,b){var g=c("resource-loader").Resource,f=c("path"),a=c("../core");d.exports=function(){return function(l,j){if(!l.data||!l.isJson||!l.data.frames){return j()}var k={crossOrigin:l.crossOrigin,loadType:g.LOAD_TYPE.IMAGE};var h=f.dirname(l.url.replace(this.baseUrl,""));var i=a.utils.getResolutionOfUrl(l.url);this.add(l.name+"_image",h+"/"+l.data.meta.image,k,function(q){l.textures={};var s=l.data.frames;for(var p in s){var r=s[p].frame;if(r){var o=null;var m=null;if(s[p].rotated){o=new a.math.Rectangle(r.x,r.y,r.h,r.w)}else{o=new a.math.Rectangle(r.x,r.y,r.w,r.h)}if(s[p].trimmed){m=new a.math.Rectangle(s[p].spriteSourceSize.x/i,s[p].spriteSourceSize.y/i,s[p].sourceSize.w/i,s[p].sourceSize.h/i)}if(s[p].rotated){var n=o.width;o.width=o.height;o.height=n}o.x/=i;o.y/=i;o.width/=i;o.height/=i;l.textures[p]=new a.Texture(q.texture.baseTexture,o,o.clone(),m,s[p].rotated);a.utils.TextureCache[p]=l.textures[p]}}j()})}}},{"../core":22,path:2,"resource-loader":11}],115:[function(c,d,b){var a=c("../core");d.exports=function(){return function(g,f){if(g.data&&g.isImage){g.texture=new a.Texture(new a.BaseTexture(g.data,null,a.utils.getResolutionOfUrl(g.url)));a.utils.TextureCache[g.url]=g.texture}f()}}},{"../core":22}],116:[function(c,d,b){var a=c("../core");function f(i,g,h,k,j){a.Container.call(this);this.texture=i;this.uvs=h||new Float32Array([0,1,1,1,1,0,0,1]);this.vertices=g||new Float32Array([0,0,100,0,100,100,0,100]);this.indices=k||new Uint16Array([0,1,2,3]);this.dirty=true;this.blendMode=a.BLEND_MODES.NORMAL;this.canvasPadding=0;this.drawMode=j||f.DRAW_MODES.TRIANGLE_MESH}f.prototype=Object.create(a.Container.prototype);f.prototype.constructor=f;d.exports=f;f.prototype._renderWebGL=function(g){g.setObjectRenderer(g.plugins.mesh);g.plugins.mesh.render(this)};f.prototype._renderCanvas=function(i){var h=i.context;var g=this.worldTransform;if(i.roundPixels){h.setTransform(g.a,g.b,g.c,g.d,g.tx|0,g.ty|0)}else{h.setTransform(g.a,g.b,g.c,g.d,g.tx,g.ty)}if(this.drawMode===f.DRAW_MODES.TRIANGLE_MESH){this._renderCanvasTriangleMesh(h)}else{this._renderCanvasTriangles(h)}};f.prototype._renderCanvasTriangleMesh=function(l){var h=this.vertices;var k=this.uvs;var m=h.length/2;for(var j=0;j<m-2;j++){var g=j*2;this._renderCanvasDrawTriangle(l,h,k,g,(g+2),(g+4))}};f.prototype._renderCanvasTriangles=function(g){var m=this.vertices;var j=this.uvs;var p=this.indices;var h=p.length;for(var k=0;k<h;k+=3){var o=p[k]*2,n=p[k+1]*2,l=p[k+2]*2;this._renderCanvasDrawTriangle(g,m,j,o,n,l)}};f.prototype._renderCanvasDrawTriangle=function(l,r,B,t,q,p){var i=this.texture.baseTexture.source;var g=this.texture.width;var C=this.texture.height;var N=r[t],M=r[q],K=r[p];var o=r[t+1],n=r[q+1],k=r[p+1];var L=B[t]*g,J=B[q]*g,I=B[p]*g;var m=B[t+1]*C,j=B[q+1]*C,h=B[p+1]*C;if(this.canvasPadding>0){var H=this.canvasPadding/this.worldTransform.a;var G=this.canvasPadding/this.worldTransform.d;var z=(N+M+K)/3;var x=(o+n+k)/3;var F=N-z;var E=o-x;var D=Math.sqrt(F*F+E*E);N=z+(F/D)*(D+H);o=x+(E/D)*(D+G);F=M-z;E=n-x;D=Math.sqrt(F*F+E*E);M=z+(F/D)*(D+H);n=x+(E/D)*(D+G);F=K-z;E=k-x;D=Math.sqrt(F*F+E*E);K=z+(F/D)*(D+H);k=x+(E/D)*(D+G)}l.save();l.beginPath();l.moveTo(N,o);l.lineTo(M,n);l.lineTo(K,k);l.closePath();l.clip();var O=(L*j)+(m*I)+(J*h)-(j*I)-(m*J)-(L*h);var A=(N*j)+(m*K)+(M*h)-(j*K)-(m*M)-(N*h);var y=(L*M)+(N*I)+(J*K)-(M*I)-(N*J)-(L*K);var w=(L*j*K)+(m*M*I)+(N*J*h)-(N*j*I)-(m*J*K)-(L*M*h);var v=(o*j)+(m*k)+(n*h)-(j*k)-(m*n)-(o*h);var u=(L*n)+(o*I)+(J*k)-(n*I)-(o*J)-(L*k);var s=(L*j*k)+(m*n*I)+(o*J*h)-(o*j*I)-(m*J*k)-(L*n*h);l.transform(A/O,v/O,y/O,u/O,w/O,s/O);l.drawImage(i,0,0);l.restore()};f.prototype.renderMeshFlat=function(m){var h=this.context;var p=m.vertices;var k=p.length/2;h.beginPath();for(var n=1;n<k-2;n++){var o=n*2;var l=p[o],j=p[o+2],g=p[o+4];var s=p[o+1],r=p[o+3],q=p[o+5];h.moveTo(l,s);h.lineTo(j,r);h.lineTo(g,q)}h.fillStyle="#FF0000";h.fill();h.closePath()};f.prototype.onTextureUpdate=function(){this.updateFrame=true};f.prototype.getBounds=function(q){var p=q||this.worldTransform;var C=p.a;var A=p.b;var w=p.c;var t=p.d;var D=p.tx;var B=p.ty;var v=-Infinity;var s=-Infinity;var z=Infinity;var u=Infinity;var j=this.vertices;for(var r=0,o=j.length;r<o;r+=2){var h=j[r],g=j[r+1];var m=(C*h)+(w*g)+D;var l=(t*g)+(A*h)+B;z=m<z?m:z;u=l<u?l:u;v=m>v?m:v;s=l>s?l:s}if(z===-Infinity||s===Infinity){return a.math.Rectangle.EMPTY}var k=this._bounds;k.x=z;k.width=v-z;k.y=u;k.height=s-u;this._currentBounds=k;return k};f.DRAW_MODES={TRIANGLE_MESH:0,TRIANGLES:1}},{"../core":22}],117:[function(b,d,a){var f=b("./Mesh");function c(h,g){f.call(this,h);this.points=g;this.vertices=new Float32Array(g.length*4);this.uvs=new Float32Array(g.length*4);this.colors=new Float32Array(g.length*2);this.indices=new Uint16Array(g.length*2);this.refresh()}c.prototype=Object.create(f.prototype);c.prototype.constructor=c;d.exports=c;c.prototype.refresh=function(){var o=this.points;if(o.length<1){return}var h=this.uvs;var p=this.indices;var g=this.colors;h[0]=0;h[1]=0;h[2]=0;h[3]=1;g[0]=1;g[1]=1;p[0]=0;p[1]=1;var m=o.length,n,l,k;for(var j=1;j<m;j++){n=o[j];l=j*4;k=j/(m-1);if(j%2){h[l]=k;h[l+1]=0;h[l+2]=k;h[l+3]=1}else{h[l]=k;h[l+1]=0;h[l+2]=k;h[l+3]=1}l=j*2;g[l]=1;g[l+1]=1;l=j*2;p[l]=l;p[l+1]=l+1}};c.prototype.updateTransform=function(){var r=this.points;if(r.length<1){return}var p=r[0];var n;var t=0;var s=0;var l=this.vertices;var o=r.length,q,k,m,g,j;for(var h=0;h<o;h++){q=r[h];k=h*4;if(h<r.length-1){n=r[h+1]}else{n=q}s=-(n.x-p.x);t=n.y-p.y;m=(1-(h/(o-1)))*10;if(m>1){m=1}g=Math.sqrt(t*t+s*s);j=this.texture.height/2;t/=g;s/=g;t*=j;s*=j;l[k]=q.x+t;l[k+1]=q.y+s;l[k+2]=q.x-t;l[k+3]=q.y-s;p=q}this.containerUpdateTransform()}},{"./Mesh":116}],118:[function(b,c,a){c.exports={Mesh:b("./Mesh"),Rope:b("./Rope"),MeshRenderer:b("./webgl/MeshRenderer"),MeshShader:b("./webgl/MeshShader")}},{"./Mesh":116,"./Rope":117,"./webgl/MeshRenderer":119,"./webgl/MeshShader":120}],119:[function(d,f,c){var g=d("../../core/renderers/webgl/utils/ObjectRenderer"),a=d("../../core/renderers/webgl/WebGLRenderer");function b(l){g.call(this,l);this.indices=new Uint16Array(15000);for(var k=0,h=0;k<15000;k+=6,h+=4){this.indices[k+0]=h+0;this.indices[k+1]=h+1;this.indices[k+2]=h+2;this.indices[k+3]=h+0;this.indices[k+4]=h+2;this.indices[k+5]=h+3}}b.prototype=Object.create(g.prototype);b.prototype.constructor=b;f.exports=b;a.registerPlugin("mesh",b);b.prototype.onContextChange=function(){};b.prototype.render=function(m){if(!m._vertexBuffer){this._initWebGL(m)}var k=this.renderer,l=k.gl,i=m.texture.baseTexture,h=k.shaderManager.plugins.meshShader;var j=l.TRIANGLE_STRIP;k.blendModeManager.setBlendMode(m.blendMode);l.uniformMatrix3fv(h.uniforms.translationMatrix._location,false,m.worldTransform.toArray(true));l.uniformMatrix3fv(h.uniforms.projectionMatrix._location,false,k.currentRenderTarget.projectionMatrix.toArray(true));l.uniform1f(h.uniforms.alpha._location,m.worldAlpha);if(!m.dirty){l.bindBuffer(l.ARRAY_BUFFER,m._vertexBuffer);l.bufferSubData(l.ARRAY_BUFFER,0,m.vertices);l.vertexAttribPointer(h.attributes.aVertexPosition,2,l.FLOAT,false,0,0);l.bindBuffer(l.ARRAY_BUFFER,m._uvBuffer);l.vertexAttribPointer(h.attributes.aTextureCoord,2,l.FLOAT,false,0,0);l.activeTexture(l.TEXTURE0);if(!i._glTextures[l.id]){this.renderer.updateTexture(i)}else{l.bindTexture(l.TEXTURE_2D,i._glTextures[l.id])}}else{m.dirty=false;l.bindBuffer(l.ARRAY_BUFFER,m._vertexBuffer);l.bufferData(l.ARRAY_BUFFER,m.vertices,l.STATIC_DRAW);l.vertexAttribPointer(h.attributes.aVertexPosition,2,l.FLOAT,false,0,0);l.bindBuffer(l.ARRAY_BUFFER,m._uvBuffer);l.bufferData(l.ARRAY_BUFFER,m.uvs,l.STATIC_DRAW);l.vertexAttribPointer(h.attributes.aTextureCoord,2,l.FLOAT,false,0,0);l.activeTexture(l.TEXTURE0);if(!i._glTextures[l.id]){this.renderer.updateTexture(i)}else{l.bindTexture(l.TEXTURE_2D,i._glTextures[l.id])}l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,m._indexBuffer);l.bufferData(l.ELEMENT_ARRAY_BUFFER,m.indices,l.STATIC_DRAW)}l.drawElements(j,m.indices.length,l.UNSIGNED_SHORT,0)};b.prototype._initWebGL=function(i){var h=this.renderer.gl;i._vertexBuffer=h.createBuffer();i._indexBuffer=h.createBuffer();i._uvBuffer=h.createBuffer();i._colorBuffer=h.createBuffer();h.bindBuffer(h.ARRAY_BUFFER,i._vertexBuffer);h.bufferData(h.ARRAY_BUFFER,i.vertices,h.DYNAMIC_DRAW);h.bindBuffer(h.ARRAY_BUFFER,i._uvBuffer);h.bufferData(h.ARRAY_BUFFER,i.uvs,h.STATIC_DRAW);h.bindBuffer(h.ARRAY_BUFFER,i._colorBuffer);h.bufferData(h.ARRAY_BUFFER,i.colors,h.STATIC_DRAW);h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,i._indexBuffer);h.bufferData(h.ELEMENT_ARRAY_BUFFER,i.indices,h.STATIC_DRAW)};b.prototype.flush=function(){};b.prototype.start=function(){var h=this.renderer.shaderManager.plugins.meshShader;this.renderer.shaderManager.setShader(h)};b.prototype.destroy=function(){}},{"../../core/renderers/webgl/WebGLRenderer":41,"../../core/renderers/webgl/utils/ObjectRenderer":55}],120:[function(d,f,c){var a=d("../../core");function b(g){a.Shader.call(this,g,["precision lowp float;","attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","uniform mat3 translationMatrix;","uniform mat3 projectionMatrix;","varying vec2 vTextureCoord;","void main(void){","   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","}"].join("\n"),["precision lowp float;","varying vec2 vTextureCoord;","uniform float alpha;","uniform sampler2D uSampler;","void main(void){","   gl_FragColor = texture2D(uSampler, vTextureCoord) * alpha ;","}"].join("\n"),{alpha:{type:"1f",value:0},translationMatrix:{type:"mat3",value:new Float32Array(9)},projectionMatrix:{type:"mat3",value:new Float32Array(9)}},{aVertexPosition:0,aTextureCoord:0})}b.prototype=Object.create(a.Shader.prototype);b.prototype.constructor=b;f.exports=b;a.ShaderManager.registerPlugin("meshShader",b)},{"../../core":22}],121:[function(b,c,a){if(!Object.assign){Object.assign=b("object-assign")}},{"object-assign":5}],122:[function(b,c,a){b("./Object.assign");b("./requestAnimationFrame")},{"./Object.assign":121,"./requestAnimationFrame":123}],123:[function(b,c,a){(function(h){if(!(Date.now&&Date.prototype.getTime)){Date.now=function f(){return new Date().getTime()}}if(!(h.performance&&h.performance.now)){var g=Date.now();if(!h.performance){h.performance={}}h.performance.now=function(){return Date.now()-g}}var i=Date.now();var j=["ms","moz","webkit","o"];for(var d=0;d<j.length&&!h.requestAnimationFrame;++d){h.requestAnimationFrame=h[j[d]+"RequestAnimationFrame"];h.cancelAnimationFrame=h[j[d]+"CancelAnimationFrame"]||h[j[d]+"CancelRequestAnimationFrame"]}if(!h.requestAnimationFrame){h.requestAnimationFrame=function(m){if(typeof m!=="function"){throw new TypeError(m+"is not a function")}var l=Date.now(),k=16+i-l;if(k<0){k=0}i=l;return setTimeout(function(){i=Date.now();m(performance.now())},k)}}if(!h.cancelAnimationFrame){h.cancelAnimationFrame=function(k){clearTimeout(k)}}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],124:[function(g,d,k){var h=g("../core"),q=g("eventemitter3"),j="tick";function a(){var s=this;this._tick=function r(t){s._requestId=null;if(s.started){s.update(t);if(s.started&&s._requestId===null&&s._emitter.listeners(j,true)){s._requestId=requestAnimationFrame(s._tick)}}};this._emitter=new q();this._requestId=null;this._maxElapsedMS=100;this.autoStart=false;this.deltaTime=1;this.elapsedMS=1/h.TARGET_FPMS;this.lastTime=0;this.speed=1;this.started=false}Object.defineProperties(a.prototype,{FPS:{get:function(){return 1000/this.elapsedMS}},minFPS:{get:function(){return 1000/this._maxElapsedMS},set:function(r){var s=Math.min(Math.max(0,r)/1000,h.TARGET_FPMS);this._maxElapsedMS=1/s}}});a.prototype._requestIfNeeded=function p(){if(this._requestId===null&&this._emitter.listeners(j,true)){this.lastTime=performance.now();this._requestId=requestAnimationFrame(this._tick)}};a.prototype._cancelIfNeeded=function f(){if(this._requestId!==null){cancelAnimationFrame(this._requestId);this._requestId=null}};a.prototype._startIfPossible=function o(){if(this.started){this._requestIfNeeded()}else{if(this.autoStart){this.start()}}};a.prototype.add=function n(s,r){this._emitter.on(j,s,r);this._startIfPossible();return this};a.prototype.addOnce=function b(s,r){this._emitter.once(j,s,r);this._startIfPossible();return this};a.prototype.remove=function l(s,r){this._emitter.off(j,s,r);if(!this._emitter.listeners(j,true)){this._cancelIfNeeded()}return this};a.prototype.start=function c(){if(!this.started){this.started=true;this._requestIfNeeded()}};a.prototype.stop=function m(){if(this.started){this.started=false;this._cancelIfNeeded()}};a.prototype.update=function i(s){var r;s=s||performance.now();r=this.elapsedMS=s-this.lastTime;if(r>this._maxElapsedMS){r=this._maxElapsedMS}this.deltaTime=r*h.TARGET_FPMS*this.speed;this._emitter.emit(j,this.deltaTime);this.lastTime=s};d.exports=a},{"../core":22,eventemitter3:4}],125:[function(b,c,a){var f=b("./Ticker");var d=new f();d.autoStart=true;c.exports={shared:d,Ticker:f}},{"./Ticker":124}],"pixi.js":[function(b,c,a){(function(f){b("./polyfill");var d=c.exports=b("./core");d.extras=b("./extras");d.filters=b("./filters");d.interaction=b("./interaction");d.loaders=b("./loaders");d.mesh=b("./mesh");d.ticker=b("./ticker");d.loader=new d.loaders.Loader();Object.assign(d,b("./deprecation"));f.PIXI=d;if(typeof define==="function"&&define.amd){define(function(){return d})}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./core":22,"./deprecation":70,"./extras":77,"./filters":94,"./interaction":109,"./loaders":112,"./mesh":118,"./polyfill":122,"./ticker":125}]},{},["pixi.js"]);
/*!
* @license CreateJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011-2013 gskinner.com, inc.
*
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/
this.createjs=this.createjs||{},createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var b=a.prototype;b.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},b.stopPropagation=function(){this.propagationStopped=!0},b.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},b.remove=function(){this.removed=!0},b.clone=function(){return new a(this.type,this.bubbles,this.cancelable)},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this._listeners=null,this._captureListeners=null}var b=a.prototype;a.initialize=function(a){a.addEventListener=b.addEventListener,a.on=b.on,a.removeEventListener=a.off=b.removeEventListener,a.removeAllEventListeners=b.removeAllEventListeners,a.hasEventListener=b.hasEventListener,a.dispatchEvent=b.dispatchEvent,a._dispatchEvent=b._dispatchEvent,a.willTrigger=b.willTrigger},b.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},b.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},b.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},b.off=b.removeEventListener,b.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},b.dispatchEvent=function(a){if("string"==typeof a){var b=this._listeners;if(!b||!b[a])return!1;a=new createjs.Event(a)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(c){}if(a.bubbles&&this.parent){for(var d=this,e=[d];d.parent;)e.push(d=d.parent);var f,g=e.length;for(f=g-1;f>=0&&!a.propagationStopped;f--)e[f]._dispatchEvent(a,1+(0==f));for(f=1;g>f&&!a.propagationStopped;f++)e[f]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return a.defaultPrevented},b.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},b.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},b.toString=function(){return"[EventDispatcher]"},b._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;try{a.currentTarget=this}catch(f){}try{a.eventPhase=b}catch(f){}a.removed=!1,e=e.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=e[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}},createjs.EventDispatcher=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Ticker cannot be instantiated."}a.RAF_SYNCHED="synched",a.RAF="raf",a.TIMEOUT="timeout",a.useRAF=!1,a.timingMode=null,a.maxDelta=0,a.paused=!1,a.removeEventListener=null,a.removeAllEventListeners=null,a.dispatchEvent=null,a.hasEventListener=null,a._listeners=null,createjs.EventDispatcher.initialize(a),a._addEventListener=a.addEventListener,a.addEventListener=function(){return!a._inited&&a.init(),a._addEventListener.apply(a,arguments)},a._inited=!1,a._startTime=0,a._pausedTime=0,a._ticks=0,a._pausedTicks=0,a._interval=50,a._lastTime=0,a._times=null,a._tickTimes=null,a._timerId=null,a._raf=!0,a.setInterval=function(b){a._interval=b,a._inited&&a._setupTick()},a.getInterval=function(){return a._interval},a.setFPS=function(b){a.setInterval(1e3/b)},a.getFPS=function(){return 1e3/a._interval};try{Object.defineProperties(a,{interval:{get:a.getInterval,set:a.setInterval},framerate:{get:a.getFPS,set:a.setFPS}})}catch(b){console.log(b)}a.init=function(){a._inited||(a._inited=!0,a._times=[],a._tickTimes=[],a._startTime=a._getTime(),a._times.push(a._lastTime=0),a.interval=a._interval)},a.reset=function(){if(a._raf){var b=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame;b&&b(a._timerId)}else clearTimeout(a._timerId);a.removeAllEventListeners("tick"),a._timerId=a._times=a._tickTimes=null,a._startTime=a._lastTime=a._ticks=0,a._inited=!1},a.getMeasuredTickTime=function(b){var c=0,d=a._tickTimes;if(!d||d.length<1)return-1;b=Math.min(d.length,b||0|a.getFPS());for(var e=0;b>e;e++)c+=d[e];return c/b},a.getMeasuredFPS=function(b){var c=a._times;return!c||c.length<2?-1:(b=Math.min(c.length-1,b||0|a.getFPS()),1e3/((c[0]-c[b])/b))},a.setPaused=function(b){a.paused=b},a.getPaused=function(){return a.paused},a.getTime=function(b){return a._startTime?a._getTime()-(b?a._pausedTime:0):-1},a.getEventTime=function(b){return a._startTime?(a._lastTime||a._startTime)-(b?a._pausedTime:0):-1},a.getTicks=function(b){return a._ticks-(b?a._pausedTicks:0)},a._handleSynch=function(){a._timerId=null,a._setupTick(),a._getTime()-a._lastTime>=.97*(a._interval-1)&&a._tick()},a._handleRAF=function(){a._timerId=null,a._setupTick(),a._tick()},a._handleTimeout=function(){a._timerId=null,a._setupTick(),a._tick()},a._setupTick=function(){if(null==a._timerId){var b=a.timingMode||a.useRAF&&a.RAF_SYNCHED;if(b==a.RAF_SYNCHED||b==a.RAF){var c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(c)return a._timerId=c(b==a.RAF?a._handleRAF:a._handleSynch),void(a._raf=!0)}a._raf=!1,a._timerId=setTimeout(a._handleTimeout,a._interval)}},a._tick=function(){var b=a.paused,c=a._getTime(),d=c-a._lastTime;if(a._lastTime=c,a._ticks++,b&&(a._pausedTicks++,a._pausedTime+=d),a.hasEventListener("tick")){var e=new createjs.Event("tick"),f=a.maxDelta;e.delta=f&&d>f?f:d,e.paused=b,e.time=c,e.runTime=c-a._pausedTime,a.dispatchEvent(e)}for(a._tickTimes.unshift(a._getTime()-c);a._tickTimes.length>100;)a._tickTimes.pop();for(a._times.unshift(c);a._times.length>100;)a._times.pop()};var c=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);a._getTime=function(){return(c&&c.call(performance)||(new Date).getTime())-a._startTime},createjs.Ticker=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"UID cannot be instantiated"}a._nextID=0,a.get=function(){return a._nextID++},createjs.UID=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h,i,j){this.Event_constructor(a,b,c),this.stageX=d,this.stageY=e,this.rawX=null==i?d:i,this.rawY=null==j?e:j,this.nativeEvent=f,this.pointerID=g,this.primary=!!h}var b=createjs.extend(a,createjs.Event);b._get_localX=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).x},b._get_localY=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).y},b._get_isTouch=function(){return-1!==this.pointerID};try{Object.defineProperties(b,{localX:{get:b._get_localX},localY:{get:b._get_localY},isTouch:{get:b._get_isTouch}})}catch(c){}b.clone=function(){return new a(this.type,this.bubbles,this.cancelable,this.stageX,this.stageY,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)},b.toString=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]"},createjs.MouseEvent=createjs.promote(a,"Event")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f){this.setValues(a,b,c,d,e,f)}var b=a.prototype;a.DEG_TO_RAD=Math.PI/180,a.identity=null,b.setValues=function(a,b,c,d,e,f){return this.a=null==a?1:a,this.b=b||0,this.c=c||0,this.d=null==d?1:d,this.tx=e||0,this.ty=f||0,this},b.append=function(a,b,c,d,e,f){var g=this.a,h=this.b,i=this.c,j=this.d;return(1!=a||0!=b||0!=c||1!=d)&&(this.a=g*a+i*b,this.b=h*a+j*b,this.c=g*c+i*d,this.d=h*c+j*d),this.tx=g*e+i*f+this.tx,this.ty=h*e+j*f+this.ty,this},b.prepend=function(a,b,c,d,e,f){var g=this.a,h=this.c,i=this.tx;return this.a=a*g+c*this.b,this.b=b*g+d*this.b,this.c=a*h+c*this.d,this.d=b*h+d*this.d,this.tx=a*i+c*this.ty+e,this.ty=b*i+d*this.ty+f,this},b.appendMatrix=function(a){return this.append(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.prependMatrix=function(a){return this.prepend(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.appendTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.append(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c),this.append(l*d,m*d,-m*e,l*e,0,0)):this.append(l*d,m*d,-m*e,l*e,b,c),(i||j)&&(this.tx-=i*this.a+j*this.c,this.ty-=i*this.b+j*this.d),this},b.prependTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return(i||j)&&(this.tx-=i,this.ty-=j),g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.prepend(l*d,m*d,-m*e,l*e,0,0),this.prepend(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c)):this.prepend(l*d,m*d,-m*e,l*e,b,c),this},b.rotate=function(b){b*=a.DEG_TO_RAD;var c=Math.cos(b),d=Math.sin(b),e=this.a,f=this.b;return this.a=e*c+this.c*d,this.b=f*c+this.d*d,this.c=-e*d+this.c*c,this.d=-f*d+this.d*c,this},b.skew=function(b,c){return b*=a.DEG_TO_RAD,c*=a.DEG_TO_RAD,this.append(Math.cos(c),Math.sin(c),-Math.sin(b),Math.cos(b),0,0),this},b.scale=function(a,b){return this.a*=a,this.b*=a,this.c*=b,this.d*=b,this},b.translate=function(a,b){return this.tx+=this.a*a+this.c*b,this.ty+=this.b*a+this.d*b,this},b.identity=function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},b.invert=function(){var a=this.a,b=this.b,c=this.c,d=this.d,e=this.tx,f=a*d-b*c;return this.a=d/f,this.b=-b/f,this.c=-c/f,this.d=a/f,this.tx=(c*this.ty-d*e)/f,this.ty=-(a*this.ty-b*e)/f,this},b.isIdentity=function(){return 0===this.tx&&0===this.ty&&1===this.a&&0===this.b&&0===this.c&&1===this.d},b.equals=function(a){return this.tx===a.tx&&this.ty===a.ty&&this.a===a.a&&this.b===a.b&&this.c===a.c&&this.d===a.d},b.transformPoint=function(a,b,c){return c=c||{},c.x=a*this.a+b*this.c+this.tx,c.y=a*this.b+b*this.d+this.ty,c},b.decompose=function(b){null==b&&(b={}),b.x=this.tx,b.y=this.ty,b.scaleX=Math.sqrt(this.a*this.a+this.b*this.b),b.scaleY=Math.sqrt(this.c*this.c+this.d*this.d);var c=Math.atan2(-this.c,this.d),d=Math.atan2(this.b,this.a),e=Math.abs(1-c/d);return 1e-5>e?(b.rotation=d/a.DEG_TO_RAD,this.a<0&&this.d>=0&&(b.rotation+=b.rotation<=0?180:-180),b.skewX=b.skewY=0):(b.skewX=c/a.DEG_TO_RAD,b.skewY=d/a.DEG_TO_RAD),b},b.copy=function(a){return this.setValues(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.clone=function(){return new a(this.a,this.b,this.c,this.d,this.tx,this.ty)},b.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"},a.identity=new a,createjs.Matrix2D=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e){this.setValues(a,b,c,d,e)}var b=a.prototype;b.setValues=function(a,b,c,d,e){return this.visible=null==a?!0:!!a,this.alpha=null==b?1:b,this.shadow=c,this.compositeOperation=c,this.matrix=e||this.matrix&&this.matrix.identity()||new createjs.Matrix2D,this},b.append=function(a,b,c,d,e){return this.alpha*=b,this.shadow=c||this.shadow,this.compositeOperation=d||this.compositeOperation,this.visible=this.visible&&a,e&&this.matrix.appendMatrix(e),this},b.prepend=function(a,b,c,d,e){return this.alpha*=b,this.shadow=this.shadow||c,this.compositeOperation=this.compositeOperation||d,this.visible=this.visible&&a,e&&this.matrix.prependMatrix(e),this},b.identity=function(){return this.visible=!0,this.alpha=1,this.shadow=this.compositeOperation=null,this.matrix.identity(),this},b.clone=function(){return new a(this.alpha,this.shadow,this.compositeOperation,this.visible,this.matrix.clone())},createjs.DisplayProps=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.setValues(a,b)}var b=a.prototype;b.setValues=function(a,b){return this.x=a||0,this.y=b||0,this},b.copy=function(a){return this.x=a.x,this.y=a.y,this},b.clone=function(){return new a(this.x,this.y)},b.toString=function(){return"[Point (x="+this.x+" y="+this.y+")]"},createjs.Point=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setValues(a,b,c,d)}var b=a.prototype;b.setValues=function(a,b,c,d){return this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0,this},b.extend=function(a,b,c,d){return c=c||0,d=d||0,a+c>this.x+this.width&&(this.width=a+c-this.x),b+d>this.y+this.height&&(this.height=b+d-this.y),a<this.x&&(this.width+=this.x-a,this.x=a),b<this.y&&(this.height+=this.y-b,this.y=b),this},b.pad=function(a,b,c,d){return this.x-=a,this.y-=b,this.width+=a+c,this.height+=b+d,this},b.copy=function(a){return this.setValues(a.x,a.y,a.width,a.height)},b.contains=function(a,b,c,d){return c=c||0,d=d||0,a>=this.x&&a+c<=this.x+this.width&&b>=this.y&&b+d<=this.y+this.height},b.union=function(a){return this.clone().extend(a.x,a.y,a.width,a.height)},b.intersection=function(b){var c=b.x,d=b.y,e=c+b.width,f=d+b.height;return this.x>c&&(c=this.x),this.y>d&&(d=this.y),this.x+this.width<e&&(e=this.x+this.width),this.y+this.height<f&&(f=this.y+this.height),c>=e||d>=f?null:new a(c,d,e-c,f-d)},b.intersects=function(a){return a.x<=this.x+this.width&&this.x<=a.x+a.width&&a.y<=this.y+this.height&&this.y<=a.y+a.height},b.isEmpty=function(){return this.width<=0||this.height<=0},b.clone=function(){return new a(this.x,this.y,this.width,this.height)},b.toString=function(){return"[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]"},createjs.Rectangle=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g){a.addEventListener&&(this.target=a,this.overLabel=null==c?"over":c,this.outLabel=null==b?"out":b,this.downLabel=null==d?"down":d,this.play=e,this._isPressed=!1,this._isOver=!1,this._enabled=!1,a.mouseChildren=!1,this.enabled=!0,this.handleEvent({}),f&&(g&&(f.actionsEnabled=!1,f.gotoAndStop&&f.gotoAndStop(g)),a.hitArea=f))}var b=a.prototype;b.setEnabled=function(a){if(a!=this._enabled){var b=this.target;this._enabled=a,a?(b.cursor="pointer",b.addEventListener("rollover",this),b.addEventListener("rollout",this),b.addEventListener("mousedown",this),b.addEventListener("pressup",this)):(b.cursor=null,b.removeEventListener("rollover",this),b.removeEventListener("rollout",this),b.removeEventListener("mousedown",this),b.removeEventListener("pressup",this))}},b.getEnabled=function(){return this._enabled};try{Object.defineProperties(b,{enabled:{get:b.getEnabled,set:b.setEnabled}})}catch(c){}b.toString=function(){return"[ButtonHelper]"},b.handleEvent=function(a){var b,c=this.target,d=a.type;"mousedown"==d?(this._isPressed=!0,b=this.downLabel):"pressup"==d?(this._isPressed=!1,b=this._isOver?this.overLabel:this.outLabel):"rollover"==d?(this._isOver=!0,b=this._isPressed?this.downLabel:this.overLabel):(this._isOver=!1,b=this._isPressed?this.overLabel:this.outLabel),this.play?c.gotoAndPlay&&c.gotoAndPlay(b):c.gotoAndStop&&c.gotoAndStop(b)},createjs.ButtonHelper=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.color=a||"black",this.offsetX=b||0,this.offsetY=c||0,this.blur=d||0}var b=a.prototype;a.identity=new a("transparent",0,0,0),b.toString=function(){return"[Shadow]"},b.clone=function(){return new a(this.color,this.offsetX,this.offsetY,this.blur)},createjs.Shadow=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.EventDispatcher_constructor(),this.complete=!0,this.framerate=0,this._animations=null,this._frames=null,this._images=null,this._data=null,this._loadCount=0,this._frameHeight=0,this._frameWidth=0,this._numFrames=0,this._regX=0,this._regY=0,this._spacing=0,this._margin=0,this._parseData(a)}var b=createjs.extend(a,createjs.EventDispatcher);b.getAnimations=function(){return this._animations.slice()};try{Object.defineProperties(b,{animations:{get:b.getAnimations}})}catch(c){}b.getNumFrames=function(a){if(null==a)return this._frames?this._frames.length:this._numFrames||0;var b=this._data[a];return null==b?0:b.frames.length},b.getAnimation=function(a){return this._data[a]},b.getFrame=function(a){var b;return this._frames&&(b=this._frames[a])?b:null},b.getFrameBounds=function(a,b){var c=this.getFrame(a);return c?(b||new createjs.Rectangle).setValues(-c.regX,-c.regY,c.rect.width,c.rect.height):null},b.toString=function(){return"[SpriteSheet]"},b.clone=function(){throw"SpriteSheet cannot be cloned."},b._parseData=function(a){var b,c,d,e;if(null!=a){if(this.framerate=a.framerate||0,a.images&&(c=a.images.length)>0)for(e=this._images=[],b=0;c>b;b++){var f=a.images[b];if("string"==typeof f){var g=f;f=document.createElement("img"),f.src=g}e.push(f),f.getContext||f.complete||(this._loadCount++,this.complete=!1,function(a){f.onload=function(){a._handleImageLoad()}}(this))}if(null==a.frames);else if(a.frames instanceof Array)for(this._frames=[],e=a.frames,b=0,c=e.length;c>b;b++){var h=e[b];this._frames.push({image:this._images[h[4]?h[4]:0],rect:new createjs.Rectangle(h[0],h[1],h[2],h[3]),regX:h[5]||0,regY:h[6]||0})}else d=a.frames,this._frameWidth=d.width,this._frameHeight=d.height,this._regX=d.regX||0,this._regY=d.regY||0,this._spacing=d.spacing||0,this._margin=d.margin||0,this._numFrames=d.count,0==this._loadCount&&this._calculateFrames();if(this._animations=[],null!=(d=a.animations)){this._data={};var i;for(i in d){var j={name:i},k=d[i];if("number"==typeof k)e=j.frames=[k];else if(k instanceof Array)if(1==k.length)j.frames=[k[0]];else for(j.speed=k[3],j.next=k[2],e=j.frames=[],b=k[0];b<=k[1];b++)e.push(b);else{j.speed=k.speed,j.next=k.next;var l=k.frames;e=j.frames="number"==typeof l?[l]:l.slice(0)}(j.next===!0||void 0===j.next)&&(j.next=i),(j.next===!1||e.length<2&&j.next==i)&&(j.next=null),j.speed||(j.speed=1),this._animations.push(i),this._data[i]=j}}}},b._handleImageLoad=function(){0==--this._loadCount&&(this._calculateFrames(),this.complete=!0,this.dispatchEvent("complete"))},b._calculateFrames=function(){if(!this._frames&&0!=this._frameWidth){this._frames=[];var a=this._numFrames||1e5,b=0,c=this._frameWidth,d=this._frameHeight,e=this._spacing,f=this._margin;a:for(var g=0,h=this._images;g<h.length;g++)for(var i=h[g],j=i.width,k=i.height,l=f;k-f-d>=l;){for(var m=f;j-f-c>=m;){if(b>=a)break a;b++,this._frames.push({image:i,rect:new createjs.Rectangle(m,l,c,d),regX:this._regX,regY:this._regY}),m+=c+e}l+=d+e}this._numFrames=b}},createjs.SpriteSheet=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.command=null,this._stroke=null,this._strokeStyle=null,this._strokeIgnoreScale=!1,this._fill=null,this._instructions=[],this._commitIndex=0,this._activeInstructions=[],this._dirty=!1,this._storeIndex=0,this.clear()}var b=a.prototype,c=a;a.getRGB=function(a,b,c,d){return null!=a&&null==c&&(d=b,c=255&a,b=a>>8&255,a=a>>16&255),null==d?"rgb("+a+","+b+","+c+")":"rgba("+a+","+b+","+c+","+d+")"},a.getHSL=function(a,b,c,d){return null==d?"hsl("+a%360+","+b+"%,"+c+"%)":"hsla("+a%360+","+b+"%,"+c+"%,"+d+")"},a.BASE_64={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,0:52,1:53,2:54,3:55,4:56,5:57,6:58,7:59,8:60,9:61,"+":62,"/":63},a.STROKE_CAPS_MAP=["butt","round","square"],a.STROKE_JOINTS_MAP=["miter","round","bevel"];var d=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");d.getContext&&(a._ctx=d.getContext("2d"),d.width=d.height=1),b.getInstructions=function(){return this._updateInstructions(),this._instructions};try{Object.defineProperties(b,{instructions:{get:b.getInstructions}})}catch(e){}b.isEmpty=function(){return!(this._instructions.length||this._activeInstructions.length)},b.draw=function(a,b){this._updateInstructions();for(var c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)c[d].exec(a,b)},b.drawAsPath=function(a){this._updateInstructions();for(var b,c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)(b=c[d]).path!==!1&&b.exec(a)},b.moveTo=function(a,b){return this.append(new c.MoveTo(a,b),!0)},b.lineTo=function(a,b){return this.append(new c.LineTo(a,b))},b.arcTo=function(a,b,d,e,f){return this.append(new c.ArcTo(a,b,d,e,f))},b.arc=function(a,b,d,e,f,g){return this.append(new c.Arc(a,b,d,e,f,g))},b.quadraticCurveTo=function(a,b,d,e){return this.append(new c.QuadraticCurveTo(a,b,d,e))},b.bezierCurveTo=function(a,b,d,e,f,g){return this.append(new c.BezierCurveTo(a,b,d,e,f,g))},b.rect=function(a,b,d,e){return this.append(new c.Rect(a,b,d,e))},b.closePath=function(){return this._activeInstructions.length?this.append(new c.ClosePath):this},b.clear=function(){return this._instructions.length=this._activeInstructions.length=this._commitIndex=0,this._strokeStyle=this._stroke=this._fill=null,this._dirty=this._strokeIgnoreScale=!1,this},b.beginFill=function(a){return this._setFill(a?new c.Fill(a):null)},b.beginLinearGradientFill=function(a,b,d,e,f,g){return this._setFill((new c.Fill).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientFill=function(a,b,d,e,f,g,h,i){return this._setFill((new c.Fill).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapFill=function(a,b,d){return this._setFill(new c.Fill(null,d).bitmap(a,b))},b.endFill=function(){return this.beginFill()},b.setStrokeStyle=function(a,b,d,e,f){return this._updateInstructions(!0),this._strokeStyle=this.command=new c.StrokeStyle(a,b,d,e,f),this._stroke&&(this._stroke.ignoreScale=f),this._strokeIgnoreScale=f,this},b.beginStroke=function(a){return this._setStroke(a?new c.Stroke(a):null)},b.beginLinearGradientStroke=function(a,b,d,e,f,g){return this._setStroke((new c.Stroke).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientStroke=function(a,b,d,e,f,g,h,i){return this._setStroke((new c.Stroke).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapStroke=function(a,b){return this._setStroke((new c.Stroke).bitmap(a,b))},b.endStroke=function(){return this.beginStroke()},b.curveTo=b.quadraticCurveTo,b.drawRect=b.rect,b.drawRoundRect=function(a,b,c,d,e){return this.drawRoundRectComplex(a,b,c,d,e,e,e,e)},b.drawRoundRectComplex=function(a,b,d,e,f,g,h,i){return this.append(new c.RoundRect(a,b,d,e,f,g,h,i))},b.drawCircle=function(a,b,d){return this.append(new c.Circle(a,b,d))},b.drawEllipse=function(a,b,d,e){return this.append(new c.Ellipse(a,b,d,e))},b.drawPolyStar=function(a,b,d,e,f,g){return this.append(new c.PolyStar(a,b,d,e,f,g))},b.append=function(a,b){return this._activeInstructions.push(a),this.command=a,b||(this._dirty=!0),this},b.decodePath=function(b){for(var c=[this.moveTo,this.lineTo,this.quadraticCurveTo,this.bezierCurveTo,this.closePath],d=[2,2,4,6,0],e=0,f=b.length,g=[],h=0,i=0,j=a.BASE_64;f>e;){var k=b.charAt(e),l=j[k],m=l>>3,n=c[m];if(!n||3&l)throw"bad path data (@"+e+"): "+k;var o=d[m];m||(h=i=0),g.length=0,e++;for(var p=(l>>2&1)+2,q=0;o>q;q++){var r=j[b.charAt(e)],s=r>>5?-1:1;r=(31&r)<<6|j[b.charAt(e+1)],3==p&&(r=r<<6|j[b.charAt(e+2)]),r=s*r/10,q%2?h=r+=h:i=r+=i,g[q]=r,e+=p}n.apply(this,g)}return this},b.store=function(){return this._updateInstructions(!0),this._storeIndex=this._instructions.length,this},b.unstore=function(){return this._storeIndex=0,this},b.clone=function(){var b=new a;return b.command=this.command,b._stroke=this._stroke,b._strokeStyle=this._strokeStyle,b._strokeIgnoreScale=this._strokeIgnoreScale,b._fill=this._fill,b._instructions=this._instructions.slice(),b._commitIndex=this._commitIndex,b._activeInstructions=this._activeInstructions.slice(),b._dirty=this._dirty,b._storeIndex=this._storeIndex,b},b.toString=function(){return"[Graphics]"},b.mt=b.moveTo,b.lt=b.lineTo,b.at=b.arcTo,b.bt=b.bezierCurveTo,b.qt=b.quadraticCurveTo,b.a=b.arc,b.r=b.rect,b.cp=b.closePath,b.c=b.clear,b.f=b.beginFill,b.lf=b.beginLinearGradientFill,b.rf=b.beginRadialGradientFill,b.bf=b.beginBitmapFill,b.ef=b.endFill,b.ss=b.setStrokeStyle,b.s=b.beginStroke,b.ls=b.beginLinearGradientStroke,b.rs=b.beginRadialGradientStroke,b.bs=b.beginBitmapStroke,b.es=b.endStroke,b.dr=b.drawRect,b.rr=b.drawRoundRect,b.rc=b.drawRoundRectComplex,b.dc=b.drawCircle,b.de=b.drawEllipse,b.dp=b.drawPolyStar,b.p=b.decodePath,b._updateInstructions=function(b){var c=this._instructions,d=this._activeInstructions,e=this._commitIndex;if(this._dirty&&d.length){c.length=e,c.push(a.beginCmd);var f=d.length,g=c.length;c.length=g+f;for(var h=0;f>h;h++)c[h+g]=d[h];this._fill&&c.push(this._fill),this._stroke&&this._strokeStyle&&c.push(this._strokeStyle),this._stroke&&c.push(this._stroke),this._dirty=!1}b&&(d.length=0,this._commitIndex=c.length)},b._setFill=function(a){return this._updateInstructions(!0),(this._fill=a)&&(this.command=a),this},b._setStroke=function(a){return this._updateInstructions(!0),(this._stroke=a)&&(this.command=a,a.ignoreScale=this._strokeIgnoreScale),this},(c.LineTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.lineTo(this.x,this.y)},(c.MoveTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.moveTo(this.x,this.y)},(c.ArcTo=function(a,b,c,d,e){this.x1=a,this.y1=b,this.x2=c,this.y2=d,this.radius=e}).prototype.exec=function(a){a.arcTo(this.x1,this.y1,this.x2,this.y2,this.radius)},(c.Arc=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.startAngle=d,this.endAngle=e,this.anticlockwise=!!f}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,this.anticlockwise)},(c.QuadraticCurveTo=function(a,b,c,d){this.cpx=a,this.cpy=b,this.x=c,this.y=d}).prototype.exec=function(a){a.quadraticCurveTo(this.cpx,this.cpy,this.x,this.y)},(c.BezierCurveTo=function(a,b,c,d,e,f){this.cp1x=a,this.cp1y=b,this.cp2x=c,this.cp2y=d,this.x=e,this.y=f}).prototype.exec=function(a){a.bezierCurveTo(this.cp1x,this.cp1y,this.cp2x,this.cp2y,this.x,this.y)},(c.Rect=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){a.rect(this.x,this.y,this.w,this.h)},(c.ClosePath=function(){}).prototype.exec=function(a){a.closePath()},(c.BeginPath=function(){}).prototype.exec=function(a){a.beginPath()},b=(c.Fill=function(a,b){this.style=a,this.matrix=b}).prototype,b.exec=function(a){if(this.style){a.fillStyle=this.style;var b=this.matrix;b&&(a.save(),a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty)),a.fill(),b&&a.restore()}},b.linearGradient=function(b,c,d,e,f,g){for(var h=this.style=a._ctx.createLinearGradient(d,e,f,g),i=0,j=b.length;j>i;i++)h.addColorStop(c[i],b[i]);return h.props={colors:b,ratios:c,x0:d,y0:e,x1:f,y1:g,type:"linear"},this},b.radialGradient=function(b,c,d,e,f,g,h,i){for(var j=this.style=a._ctx.createRadialGradient(d,e,f,g,h,i),k=0,l=b.length;l>k;k++)j.addColorStop(c[k],b[k]);return j.props={colors:b,ratios:c,x0:d,y0:e,r0:f,x1:g,y1:h,r1:i,type:"radial"},this},b.bitmap=function(b,c){var d=this.style=a._ctx.createPattern(b,c||"");return d.props={image:b,repetition:c,type:"bitmap"},this},b.path=!1,b=(c.Stroke=function(a,b){this.style=a,this.ignoreScale=b}).prototype,b.exec=function(a){this.style&&(a.strokeStyle=this.style,this.ignoreScale&&(a.save(),a.setTransform(1,0,0,1,0,0)),a.stroke(),this.ignoreScale&&a.restore())},b.linearGradient=c.Fill.prototype.linearGradient,b.radialGradient=c.Fill.prototype.radialGradient,b.bitmap=c.Fill.prototype.bitmap,b.path=!1,b=(c.StrokeStyle=function(a,b,c,d){this.width=a,this.caps=b,this.joints=c,this.miterLimit=d}).prototype,b.exec=function(b){b.lineWidth=null==this.width?"1":this.width,b.lineCap=null==this.caps?"butt":isNaN(this.caps)?this.caps:a.STROKE_CAPS_MAP[this.caps],b.lineJoin=null==this.joints?"miter":isNaN(this.joints)?this.joints:a.STROKE_JOINTS_MAP[this.joints],b.miterLimit=null==this.miterLimit?"10":this.miterLimit},b.path=!1,(c.RoundRect=function(a,b,c,d,e,f,g,h){this.x=a,this.y=b,this.w=c,this.h=d,this.radiusTL=e,this.radiusTR=f,this.radiusBR=g,this.radiusBL=h}).prototype.exec=function(a){var b=(j>i?i:j)/2,c=0,d=0,e=0,f=0,g=this.x,h=this.y,i=this.w,j=this.h,k=this.radiusTL,l=this.radiusTR,m=this.radiusBR,n=this.radiusBL;0>k&&(k*=c=-1),k>b&&(k=b),0>l&&(l*=d=-1),l>b&&(l=b),0>m&&(m*=e=-1),m>b&&(m=b),0>n&&(n*=f=-1),n>b&&(n=b),a.moveTo(g+i-l,h),a.arcTo(g+i+l*d,h-l*d,g+i,h+l,l),a.lineTo(g+i,h+j-m),a.arcTo(g+i+m*e,h+j+m*e,g+i-m,h+j,m),a.lineTo(g+n,h+j),a.arcTo(g-n*f,h+j+n*f,g,h+j-n,n),a.lineTo(g,h+k),a.arcTo(g-k*c,h-k*c,g+k,h,k),a.closePath()},(c.Circle=function(a,b,c){this.x=a,this.y=b,this.radius=c}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,0,2*Math.PI)},(c.Ellipse=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.w,e=this.h,f=.5522848,g=d/2*f,h=e/2*f,i=b+d,j=c+e,k=b+d/2,l=c+e/2;a.moveTo(b,l),a.bezierCurveTo(b,l-h,k-g,c,k,c),a.bezierCurveTo(k+g,c,i,l-h,i,l),a.bezierCurveTo(i,l+h,k+g,j,k,j),a.bezierCurveTo(k-g,j,b,l+h,b,l)},(c.PolyStar=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.sides=d,this.pointSize=e,this.angle=f}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.radius,e=(this.angle||0)/180*Math.PI,f=this.sides,g=1-(this.pointSize||0),h=Math.PI/f;a.moveTo(b+Math.cos(e)*d,c+Math.sin(e)*d);for(var i=0;f>i;i++)e+=h,1!=g&&a.lineTo(b+Math.cos(e)*d*g,c+Math.sin(e)*d*g),e+=h,a.lineTo(b+Math.cos(e)*d,c+Math.sin(e)*d);a.closePath()},a.beginCmd=new c.BeginPath,createjs.Graphics=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.EventDispatcher_constructor(),this.alpha=1,this.cacheCanvas=null,this.cacheID=0,this.id=createjs.UID.get(),this.mouseEnabled=!0,this.tickEnabled=!0,this.name=null,this.parent=null,this.regX=0,this.regY=0,this.rotation=0,this.scaleX=1,this.scaleY=1,this.skewX=0,this.skewY=0,this.shadow=null,this.visible=!0,this.x=0,this.y=0,this.transformMatrix=null,this.compositeOperation=null,this.snapToPixel=!0,this.filters=null,this.mask=null,this.hitArea=null,this.cursor=null,this._cacheOffsetX=0,this._cacheOffsetY=0,this._filterOffsetX=0,this._filterOffsetY=0,this._cacheScale=1,this._cacheDataURLID=0,this._cacheDataURL=null,this._props=new createjs.DisplayProps,this._rectangle=new createjs.Rectangle,this._bounds=null}var b=createjs.extend(a,createjs.EventDispatcher);a._MOUSE_EVENTS=["click","dblclick","mousedown","mouseout","mouseover","pressmove","pressup","rollout","rollover"],a.suppressCrossDomainErrors=!1,a._snapToPixelEnabled=!1;var c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._hitTestCanvas=c,a._hitTestContext=c.getContext("2d"),c.width=c.height=1),a._nextCacheID=1,b.getStage=function(){for(var a=this,b=createjs.Stage;a.parent;)a=a.parent;return a instanceof b?a:null};try{Object.defineProperties(b,{stage:{get:b.getStage}})}catch(d){}b.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},b.draw=function(a,b){var c=this.cacheCanvas;if(b||!c)return!1;var d=this._cacheScale;return a.drawImage(c,this._cacheOffsetX+this._filterOffsetX,this._cacheOffsetY+this._filterOffsetY,c.width/d,c.height/d),!0},b.updateContext=function(b){var c=this,d=c.mask,e=c._props.matrix;
d&&d.graphics&&!d.graphics.isEmpty()&&(d.getMatrix(e),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty),d.graphics.drawAsPath(b),b.clip(),e.invert(),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty)),this.getMatrix(e);var f=e.tx,g=e.ty;a._snapToPixelEnabled&&c.snapToPixel&&(f=f+(0>f?-.5:.5)|0,g=g+(0>g?-.5:.5)|0),b.transform(e.a,e.b,e.c,e.d,f,g),b.globalAlpha*=c.alpha,c.compositeOperation&&(b.globalCompositeOperation=c.compositeOperation),c.shadow&&this._applyShadow(b,c.shadow)},b.cache=function(a,b,c,d,e){e=e||1,this.cacheCanvas||(this.cacheCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),this._cacheWidth=c,this._cacheHeight=d,this._cacheOffsetX=a,this._cacheOffsetY=b,this._cacheScale=e,this.updateCache()},b.updateCache=function(b){var c=this.cacheCanvas;if(!c)throw"cache() must be called before updateCache()";var d=this._cacheScale,e=this._cacheOffsetX*d,f=this._cacheOffsetY*d,g=this._cacheWidth,h=this._cacheHeight,i=c.getContext("2d"),j=this._getFilterBounds();e+=this._filterOffsetX=j.x,f+=this._filterOffsetY=j.y,g=Math.ceil(g*d)+j.width,h=Math.ceil(h*d)+j.height,g!=c.width||h!=c.height?(c.width=g,c.height=h):b||i.clearRect(0,0,g+1,h+1),i.save(),i.globalCompositeOperation=b,i.setTransform(d,0,0,d,-e,-f),this.draw(i,!0),this._applyFilters(),i.restore(),this.cacheID=a._nextCacheID++},b.uncache=function(){this._cacheDataURL=this.cacheCanvas=null,this.cacheID=this._cacheOffsetX=this._cacheOffsetY=this._filterOffsetX=this._filterOffsetY=0,this._cacheScale=1},b.getCacheDataURL=function(){return this.cacheCanvas?(this.cacheID!=this._cacheDataURLID&&(this._cacheDataURL=this.cacheCanvas.toDataURL()),this._cacheDataURL):null},b.localToGlobal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).transformPoint(a,b,c||new createjs.Point)},b.globalToLocal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(a,b,c||new createjs.Point)},b.localToLocal=function(a,b,c,d){return d=this.localToGlobal(a,b,d),c.globalToLocal(d.x,d.y,d)},b.setTransform=function(a,b,c,d,e,f,g,h,i){return this.x=a||0,this.y=b||0,this.scaleX=null==c?1:c,this.scaleY=null==d?1:d,this.rotation=e||0,this.skewX=f||0,this.skewY=g||0,this.regX=h||0,this.regY=i||0,this},b.getMatrix=function(a){var b=this,c=a&&a.identity()||new createjs.Matrix2D;return b.transformMatrix?c.copy(b.transformMatrix):c.appendTransform(b.x,b.y,b.scaleX,b.scaleY,b.rotation,b.skewX,b.skewY,b.regX,b.regY)},b.getConcatenatedMatrix=function(a){for(var b=this,c=this.getMatrix(a);b=b.parent;)c.prependMatrix(b.getMatrix(b._props.matrix));return c},b.getConcatenatedDisplayProps=function(a){a=a?a.identity():new createjs.DisplayProps;var b=this,c=b.getMatrix(a.matrix);do a.prepend(b.visible,b.alpha,b.shadow,b.compositeOperation),b!=this&&c.prependMatrix(b.getMatrix(b._props.matrix));while(b=b.parent);return a},b.hitTest=function(b,c){var d=a._hitTestContext;d.setTransform(1,0,0,1,-b,-c),this.draw(d);var e=this._testHit(d);return d.setTransform(1,0,0,1,0,0),d.clearRect(0,0,2,2),e},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.getBounds=function(){if(this._bounds)return this._rectangle.copy(this._bounds);var a=this.cacheCanvas;if(a){var b=this._cacheScale;return this._rectangle.setValues(this._cacheOffsetX,this._cacheOffsetY,a.width/b,a.height/b)}return null},b.getTransformedBounds=function(){return this._getBounds()},b.setBounds=function(a,b,c,d){null==a&&(this._bounds=a),this._bounds=(this._bounds||new createjs.Rectangle).setValues(a,b,c,d)},b.clone=function(){return this._cloneProps(new a)},b.toString=function(){return"[DisplayObject (name="+this.name+")]"},b._cloneProps=function(a){return a.alpha=this.alpha,a.mouseEnabled=this.mouseEnabled,a.tickEnabled=this.tickEnabled,a.name=this.name,a.regX=this.regX,a.regY=this.regY,a.rotation=this.rotation,a.scaleX=this.scaleX,a.scaleY=this.scaleY,a.shadow=this.shadow,a.skewX=this.skewX,a.skewY=this.skewY,a.visible=this.visible,a.x=this.x,a.y=this.y,a.compositeOperation=this.compositeOperation,a.snapToPixel=this.snapToPixel,a.filters=null==this.filters?null:this.filters.slice(0),a.mask=this.mask,a.hitArea=this.hitArea,a.cursor=this.cursor,a._bounds=this._bounds,a},b._applyShadow=function(a,b){b=b||Shadow.identity,a.shadowColor=b.color,a.shadowOffsetX=b.offsetX,a.shadowOffsetY=b.offsetY,a.shadowBlur=b.blur},b._tick=function(a){var b=this._listeners;b&&b.tick&&(a.target=null,a.propagationStopped=a.immediatePropagationStopped=!1,this.dispatchEvent(a))},b._testHit=function(b){try{var c=b.getImageData(0,0,1,1).data[3]>1}catch(d){if(!a.suppressCrossDomainErrors)throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."}return c},b._applyFilters=function(){if(this.filters&&0!=this.filters.length&&this.cacheCanvas)for(var a=this.filters.length,b=this.cacheCanvas.getContext("2d"),c=this.cacheCanvas.width,d=this.cacheCanvas.height,e=0;a>e;e++)this.filters[e].applyFilter(b,0,0,c,d)},b._getFilterBounds=function(){var a,b=this.filters,c=this._rectangle.setValues(0,0,0,0);if(!b||!(a=b.length))return c;for(var d=0;a>d;d++){var e=this.filters[d];e.getBounds&&e.getBounds(c)}return c},b._getBounds=function(a,b){return this._transformBounds(this.getBounds(),a,b)},b._transformBounds=function(a,b,c){if(!a)return a;var d=a.x,e=a.y,f=a.width,g=a.height,h=this._props.matrix;h=c?h.identity():this.getMatrix(h),(d||e)&&h.appendTransform(0,0,1,1,0,0,0,-d,-e),b&&h.prependMatrix(b);var i=f*h.a,j=f*h.b,k=g*h.c,l=g*h.d,m=h.tx,n=h.ty,o=m,p=m,q=n,r=n;return(d=i+m)<o?o=d:d>p&&(p=d),(d=i+k+m)<o?o=d:d>p&&(p=d),(d=k+m)<o?o=d:d>p&&(p=d),(e=j+n)<q?q=e:e>r&&(r=e),(e=j+l+n)<q?q=e:e>r&&(r=e),(e=l+n)<q?q=e:e>r&&(r=e),a.setValues(o,q,p-o,r-q)},b._hasMouseEventListener=function(){for(var b=a._MOUSE_EVENTS,c=0,d=b.length;d>c;c++)if(this.hasEventListener(b[c]))return!0;return!!this.cursor},createjs.DisplayObject=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.DisplayObject_constructor(),this.children=[],this.mouseChildren=!0,this.tickChildren=!0}var b=createjs.extend(a,createjs.DisplayObject);b.getNumChildren=function(){return this.children.length};try{Object.defineProperties(b,{numChildren:{get:b.getNumChildren}})}catch(c){}b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.children.length;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;for(var c=this.children.slice(),d=0,e=c.length;e>d;d++){var f=c[d];f.isVisible()&&(a.save(),f.updateContext(a),f.draw(a),a.restore())}return!0},b.addChild=function(a){if(null==a)return a;var b=arguments.length;if(b>1){for(var c=0;b>c;c++)this.addChild(arguments[c]);return arguments[b-1]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.push(a),a.dispatchEvent("added"),a},b.addChildAt=function(a,b){var c=arguments.length,d=arguments[c-1];if(0>d||d>this.children.length)return arguments[c-2];if(c>2){for(var e=0;c-1>e;e++)this.addChildAt(arguments[e],d+e);return arguments[c-2]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.splice(b,0,a),a.dispatchEvent("added"),a},b.removeChild=function(a){var b=arguments.length;if(b>1){for(var c=!0,d=0;b>d;d++)c=c&&this.removeChild(arguments[d]);return c}return this.removeChildAt(createjs.indexOf(this.children,a))},b.removeChildAt=function(a){var b=arguments.length;if(b>1){for(var c=[],d=0;b>d;d++)c[d]=arguments[d];c.sort(function(a,b){return b-a});for(var e=!0,d=0;b>d;d++)e=e&&this.removeChildAt(c[d]);return e}if(0>a||a>this.children.length-1)return!1;var f=this.children[a];return f&&(f.parent=null),this.children.splice(a,1),f.dispatchEvent("removed"),!0},b.removeAllChildren=function(){for(var a=this.children;a.length;)this.removeChildAt(0)},b.getChildAt=function(a){return this.children[a]},b.getChildByName=function(a){for(var b=this.children,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},b.sortChildren=function(a){this.children.sort(a)},b.getChildIndex=function(a){return createjs.indexOf(this.children,a)},b.swapChildrenAt=function(a,b){var c=this.children,d=c[a],e=c[b];d&&e&&(c[a]=e,c[b]=d)},b.swapChildren=function(a,b){for(var c,d,e=this.children,f=0,g=e.length;g>f&&(e[f]==a&&(c=f),e[f]==b&&(d=f),null==c||null==d);f++);f!=g&&(e[c]=b,e[d]=a)},b.setChildIndex=function(a,b){var c=this.children,d=c.length;if(!(a.parent!=this||0>b||b>=d)){for(var e=0;d>e&&c[e]!=a;e++);e!=d&&e!=b&&(c.splice(e,1),c.splice(b,0,a))}},b.contains=function(a){for(;a;){if(a==this)return!0;a=a.parent}return!1},b.hitTest=function(a,b){return null!=this.getObjectUnderPoint(a,b)},b.getObjectsUnderPoint=function(a,b,c){var d=[],e=this.localToGlobal(a,b);return this._getObjectsUnderPoint(e.x,e.y,d,c>0,1==c),d},b.getObjectUnderPoint=function(a,b,c){var d=this.localToGlobal(a,b);return this._getObjectsUnderPoint(d.x,d.y,null,c>0,1==c)},b.getBounds=function(){return this._getBounds(null,!0)},b.getTransformedBounds=function(){return this._getBounds()},b.clone=function(b){var c=this._cloneProps(new a);return b&&this._cloneChildren(c),c},b.toString=function(){return"[Container (name="+this.name+")]"},b._tick=function(a){if(this.tickChildren)for(var b=this.children.length-1;b>=0;b--){var c=this.children[b];c.tickEnabled&&c._tick&&c._tick(a)}this.DisplayObject__tick(a)},b._cloneChildren=function(a){a.children.length&&a.removeAllChildren();for(var b=a.children,c=0,d=this.children.length;d>c;c++){var e=this.children[c].clone(!0);e.parent=a,b.push(e)}},b._getObjectsUnderPoint=function(b,c,d,e,f,g){if(g=g||0,!g&&!this._testMask(this,b,c))return null;var h,i=createjs.DisplayObject._hitTestContext;f=f||e&&this._hasMouseEventListener();for(var j=this.children,k=j.length,l=k-1;l>=0;l--){var m=j[l],n=m.hitArea;if(m.visible&&(n||m.isVisible())&&(!e||m.mouseEnabled)&&(n||this._testMask(m,b,c)))if(!n&&m instanceof a){var o=m._getObjectsUnderPoint(b,c,d,e,f,g+1);if(!d&&o)return e&&!this.mouseChildren?this:o}else{if(e&&!f&&!m._hasMouseEventListener())continue;var p=m.getConcatenatedDisplayProps(m._props);if(h=p.matrix,n&&(h.appendMatrix(n.getMatrix(n._props.matrix)),p.alpha=n.alpha),i.globalAlpha=p.alpha,i.setTransform(h.a,h.b,h.c,h.d,h.tx-b,h.ty-c),(n||m).draw(i),!this._testHit(i))continue;if(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,2,2),!d)return e&&!this.mouseChildren?this:m;d.push(m)}}return null},b._testMask=function(a,b,c){var d=a.mask;if(!d||!d.graphics||d.graphics.isEmpty())return!0;var e=this._props.matrix,f=a.parent;e=f?f.getConcatenatedMatrix(e):e.identity(),e=d.getMatrix(d._props.matrix).prependMatrix(e);var g=createjs.DisplayObject._hitTestContext;return g.setTransform(e.a,e.b,e.c,e.d,e.tx-b,e.ty-c),d.graphics.drawAsPath(g),g.fillStyle="#000",g.fill(),this._testHit(g)?(g.setTransform(1,0,0,1,0,0),g.clearRect(0,0,2,2),!0):!1},b._getBounds=function(a,b){var c=this.DisplayObject_getBounds();if(c)return this._transformBounds(c,a,b);var d=this._props.matrix;d=b?d.identity():this.getMatrix(d),a&&d.prependMatrix(a);for(var e=this.children.length,f=null,g=0;e>g;g++){var h=this.children[g];h.visible&&(c=h._getBounds(d))&&(f?f.extend(c.x,c.y,c.width,c.height):f=c.clone())}return f},createjs.Container=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.Container_constructor(),this.autoClear=!0,this.canvas="string"==typeof a?document.getElementById(a):a,this.mouseX=0,this.mouseY=0,this.drawRect=null,this.snapToPixelEnabled=!1,this.mouseInBounds=!1,this.tickOnUpdate=!0,this.mouseMoveOutside=!1,this.preventSelection=!0,this._pointerData={},this._pointerCount=0,this._primaryPointerID=null,this._mouseOverIntervalID=null,this._nextStage=null,this._prevStage=null,this.enableDOMEvents(!0)}var b=createjs.extend(a,createjs.Container);b._get_nextStage=function(){return this._nextStage},b._set_nextStage=function(a){this._nextStage&&(this._nextStage._prevStage=null),a&&(a._prevStage=this),this._nextStage=a};try{Object.defineProperties(b,{nextStage:{get:b._get_nextStage,set:b._set_nextStage}})}catch(c){}b.update=function(a){if(this.canvas&&(this.tickOnUpdate&&this.tick(a),!this.dispatchEvent("drawstart"))){createjs.DisplayObject._snapToPixelEnabled=this.snapToPixelEnabled;var b=this.drawRect,c=this.canvas.getContext("2d");c.setTransform(1,0,0,1,0,0),this.autoClear&&(b?c.clearRect(b.x,b.y,b.width,b.height):c.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)),c.save(),this.drawRect&&(c.beginPath(),c.rect(b.x,b.y,b.width,b.height),c.clip()),this.updateContext(c),this.draw(c,!1),c.restore(),this.dispatchEvent("drawend")}},b.tick=function(a){if(this.tickEnabled&&!this.dispatchEvent("tickstart")){var b=new createjs.Event("tick");if(a)for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);this._tick(b),this.dispatchEvent("tickend")}},b.handleEvent=function(a){"tick"==a.type&&this.update(a)},b.clear=function(){if(this.canvas){var a=this.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)}},b.toDataURL=function(a,b){var c,d=this.canvas.getContext("2d"),e=this.canvas.width,f=this.canvas.height;if(a){c=d.getImageData(0,0,e,f);var g=d.globalCompositeOperation;d.globalCompositeOperation="destination-over",d.fillStyle=a,d.fillRect(0,0,e,f)}var h=this.canvas.toDataURL(b||"image/png");return a&&(d.putImageData(c,0,0),d.globalCompositeOperation=g),h},b.enableMouseOver=function(a){if(this._mouseOverIntervalID&&(clearInterval(this._mouseOverIntervalID),this._mouseOverIntervalID=null,0==a&&this._testMouseOver(!0)),null==a)a=20;else if(0>=a)return;var b=this;this._mouseOverIntervalID=setInterval(function(){b._testMouseOver()},1e3/Math.min(50,a))},b.enableDOMEvents=function(a){null==a&&(a=!0);var b,c,d=this._eventListeners;if(!a&&d){for(b in d)c=d[b],c.t.removeEventListener(b,c.f,!1);this._eventListeners=null}else if(a&&!d&&this.canvas){var e=window.addEventListener?window:document,f=this;d=this._eventListeners={},d.mouseup={t:e,f:function(a){f._handleMouseUp(a)}},d.mousemove={t:e,f:function(a){f._handleMouseMove(a)}},d.dblclick={t:this.canvas,f:function(a){f._handleDoubleClick(a)}},d.mousedown={t:this.canvas,f:function(a){f._handleMouseDown(a)}};for(b in d)c=d[b],c.t.addEventListener(b,c.f,!1)}},b.clone=function(){throw"Stage cannot be cloned."},b.toString=function(){return"[Stage (name="+this.name+")]"},b._getElementRect=function(a){var b;try{b=a.getBoundingClientRect()}catch(c){b={top:a.offsetTop,left:a.offsetLeft,width:a.offsetWidth,height:a.offsetHeight}}var d=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||document.body.clientLeft||0),e=(window.pageYOffset||document.scrollTop||0)-(document.clientTop||document.body.clientTop||0),f=window.getComputedStyle?getComputedStyle(a,null):a.currentStyle,g=parseInt(f.paddingLeft)+parseInt(f.borderLeftWidth),h=parseInt(f.paddingTop)+parseInt(f.borderTopWidth),i=parseInt(f.paddingRight)+parseInt(f.borderRightWidth),j=parseInt(f.paddingBottom)+parseInt(f.borderBottomWidth);return{left:b.left+d+g,right:b.right+d-i,top:b.top+e+h,bottom:b.bottom+e-j}},b._getPointerData=function(a){var b=this._pointerData[a];return b||(b=this._pointerData[a]={x:0,y:0}),b},b._handleMouseMove=function(a){a||(a=window.event),this._handlePointerMove(-1,a,a.pageX,a.pageY)},b._handlePointerMove=function(a,b,c,d,e){if((!this._prevStage||void 0!==e)&&this.canvas){var f=this._nextStage,g=this._getPointerData(a),h=g.inBounds;this._updatePointerPosition(a,b,c,d),(h||g.inBounds||this.mouseMoveOutside)&&(-1===a&&g.inBounds==!h&&this._dispatchMouseEvent(this,h?"mouseleave":"mouseenter",!1,a,g,b),this._dispatchMouseEvent(this,"stagemousemove",!1,a,g,b),this._dispatchMouseEvent(g.target,"pressmove",!0,a,g,b)),f&&f._handlePointerMove(a,b,c,d,null)}},b._updatePointerPosition=function(a,b,c,d){var e=this._getElementRect(this.canvas);c-=e.left,d-=e.top;var f=this.canvas.width,g=this.canvas.height;c/=(e.right-e.left)/f,d/=(e.bottom-e.top)/g;var h=this._getPointerData(a);(h.inBounds=c>=0&&d>=0&&f-1>=c&&g-1>=d)?(h.x=c,h.y=d):this.mouseMoveOutside&&(h.x=0>c?0:c>f-1?f-1:c,h.y=0>d?0:d>g-1?g-1:d),h.posEvtObj=b,h.rawX=c,h.rawY=d,(a===this._primaryPointerID||-1===a)&&(this.mouseX=h.x,this.mouseY=h.y,this.mouseInBounds=h.inBounds)},b._handleMouseUp=function(a){this._handlePointerUp(-1,a,!1)},b._handlePointerUp=function(a,b,c,d){var e=this._nextStage,f=this._getPointerData(a);if(!this._prevStage||void 0!==d){f.down&&this._dispatchMouseEvent(this,"stagemouseup",!1,a,f,b),f.down=!1;var g=null,h=f.target;d||!h&&!e||(g=this._getObjectsUnderPoint(f.x,f.y,null,!0)),g==h&&this._dispatchMouseEvent(h,"click",!0,a,f,b),this._dispatchMouseEvent(h,"pressup",!0,a,f,b),c?(a==this._primaryPointerID&&(this._primaryPointerID=null),delete this._pointerData[a]):f.target=null,e&&e._handlePointerUp(a,b,c,d||g&&this)}},b._handleMouseDown=function(a){this._handlePointerDown(-1,a,a.pageX,a.pageY)},b._handlePointerDown=function(a,b,c,d,e){this.preventSelection&&b.preventDefault(),(null==this._primaryPointerID||-1===a)&&(this._primaryPointerID=a),null!=d&&this._updatePointerPosition(a,b,c,d);var f=null,g=this._nextStage,h=this._getPointerData(a);h.inBounds&&(this._dispatchMouseEvent(this,"stagemousedown",!1,a,h,b),h.down=!0),e||(f=h.target=this._getObjectsUnderPoint(h.x,h.y,null,!0),this._dispatchMouseEvent(h.target,"mousedown",!0,a,h,b)),g&&g._handlePointerDown(a,b,c,d,e||f&&this)},b._testMouseOver=function(a,b,c){if(!this._prevStage||void 0!==b){var d=this._nextStage;if(!this._mouseOverIntervalID)return void(d&&d._testMouseOver(a,b,c));var e=this._getPointerData(-1);if(e&&(a||this.mouseX!=this._mouseOverX||this.mouseY!=this._mouseOverY||!this.mouseInBounds)){var f,g,h,i=e.posEvtObj,j=c||i&&i.target==this.canvas,k=null,l=-1,m="";!b&&(a||this.mouseInBounds&&j)&&(k=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,!0),this._mouseOverX=this.mouseX,this._mouseOverY=this.mouseY);var n=this._mouseOverTarget||[],o=n[n.length-1],p=this._mouseOverTarget=[];for(f=k;f;)p.unshift(f),null!=f.cursor&&(m=f.cursor),f=f.parent;for(this.canvas.style.cursor=m,!b&&c&&(c.canvas.style.cursor=m),g=0,h=p.length;h>g&&p[g]==n[g];g++)l=g;for(o!=k&&this._dispatchMouseEvent(o,"mouseout",!0,-1,e,i),g=n.length-1;g>l;g--)this._dispatchMouseEvent(n[g],"rollout",!1,-1,e,i);for(g=p.length-1;g>l;g--)this._dispatchMouseEvent(p[g],"rollover",!1,-1,e,i);o!=k&&this._dispatchMouseEvent(k,"mouseover",!0,-1,e,i),d&&d._testMouseOver(a,b||k&&this,c||j&&this)}}},b._handleDoubleClick=function(a,b){var c=null,d=this._nextStage,e=this._getPointerData(-1);b||(c=this._getObjectsUnderPoint(e.x,e.y,null,!0),this._dispatchMouseEvent(c,"dblclick",!0,-1,e,a)),d&&d._handleDoubleClick(a,b||c&&this)},b._dispatchMouseEvent=function(a,b,c,d,e,f){if(a&&(c||a.hasEventListener(b))){var g=new createjs.MouseEvent(b,c,!1,e.x,e.y,f,d,d===this._primaryPointerID||-1===d,e.rawX,e.rawY);a.dispatchEvent(g)}},createjs.Stage=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){function a(a){this.DisplayObject_constructor(),"string"==typeof a?(this.image=document.createElement("img"),this.image.src=a):this.image=a,this.sourceRect=null}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.image&&(this.image.complete||this.image.getContext||this.image.readyState>=2);return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b)||!this.image)return!0;var c=this.image,d=this.sourceRect;if(d){var e=d.x,f=d.y,g=e+d.width,h=f+d.height,i=0,j=0,k=c.width,l=c.height;0>e&&(i-=e,e=0),g>k&&(g=k),0>f&&(j-=f,f=0),h>l&&(h=l),a.drawImage(c,e,f,g-e,h-f,i,j,g-e,h-f)}else a.drawImage(c,0,0);return!0},b.getBounds=function(){var a=this.DisplayObject_getBounds();if(a)return a;var b=this.sourceRect||this.image,c=this.image&&(this.image.complete||this.image.getContext||this.image.readyState>=2);return c?this._rectangle.setValues(0,0,b.width,b.height):null},b.clone=function(){var b=new a(this.image);return this.sourceRect&&(b.sourceRect=this.sourceRect.clone()),this._cloneProps(b),b},b.toString=function(){return"[Bitmap (name="+this.name+")]"},createjs.Bitmap=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.DisplayObject_constructor(),this.currentFrame=0,this.currentAnimation=null,this.paused=!0,this.spriteSheet=a,this.currentAnimationFrame=0,this.framerate=0,this._animation=null,this._currentFrame=null,this._skipAdvance=!1,b&&this.gotoAndPlay(b)}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet.complete;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;this._normalizeFrame();var c=this.spriteSheet.getFrame(0|this._currentFrame);if(!c)return!1;var d=c.rect;return d.width&&d.height&&a.drawImage(c.image,d.x,d.y,d.width,d.height,-c.regX,-c.regY,d.width,d.height),!0},b.play=function(){this.paused=!1},b.stop=function(){this.paused=!0},b.gotoAndPlay=function(a){this.paused=!1,this._skipAdvance=!0,this._goto(a)},b.gotoAndStop=function(a){this.paused=!0,this._goto(a)},b.advance=function(a){var b=this.framerate||this.spriteSheet.framerate,c=b&&null!=a?a/(1e3/b):1;this._normalizeFrame(c)},b.getBounds=function(){return this.DisplayObject_getBounds()||this.spriteSheet.getFrameBounds(this.currentFrame,this._rectangle)},b.clone=function(){return this._cloneProps(new a(this.spriteSheet))},b.toString=function(){return"[Sprite (name="+this.name+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.currentFrame=this.currentFrame,a.currentAnimation=this.currentAnimation,a.paused=this.paused,a.currentAnimationFrame=this.currentAnimationFrame,a.framerate=this.framerate,a._animation=this._animation,a._currentFrame=this._currentFrame,a._skipAdvance=this._skipAdvance,a},b._tick=function(a){this.paused||(this._skipAdvance||this.advance(a&&a.delta),this._skipAdvance=!1),this.DisplayObject__tick(a)},b._normalizeFrame=function(a){a=a||0;var b,c=this._animation,d=this.paused,e=this._currentFrame;if(c){var f=c.speed||1,g=this.currentAnimationFrame;if(b=c.frames.length,g+a*f>=b){var h=c.next;if(this._dispatchAnimationEnd(c,e,d,h,b-1))return;if(h)return this._goto(h,a-(b-g)/f);this.paused=!0,g=c.frames.length-1}else g+=a*f;this.currentAnimationFrame=g,this._currentFrame=c.frames[0|g]}else if(e=this._currentFrame+=a,b=this.spriteSheet.getNumFrames(),e>=b&&b>0&&!this._dispatchAnimationEnd(c,e,d,b-1)&&(this._currentFrame-=b)>=b)return this._normalizeFrame();e=0|this._currentFrame,this.currentFrame!=e&&(this.currentFrame=e,this.dispatchEvent("change"))},b._dispatchAnimationEnd=function(a,b,c,d,e){var f=a?a.name:null;if(this.hasEventListener("animationend")){var g=new createjs.Event("animationend");g.name=f,g.next=d,this.dispatchEvent(g)}var h=this._animation!=a||this._currentFrame!=b;return h||c||!this.paused||(this.currentAnimationFrame=e,h=!0),h},b._goto=function(a,b){if(this.currentAnimationFrame=0,isNaN(a)){var c=this.spriteSheet.getAnimation(a);c&&(this._animation=c,this.currentAnimation=a,this._normalizeFrame(b))}else this.currentAnimation=this._animation=null,this._currentFrame=a,this._normalizeFrame()},createjs.Sprite=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),this.graphics=a?a:new createjs.Graphics}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){var a=this.cacheCanvas||this.graphics&&!this.graphics.isEmpty();return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this.graphics.draw(a,this),!0)},b.clone=function(b){var c=b&&this.graphics?this.graphics.clone():this.graphics;return this._cloneProps(new a(c))},b.toString=function(){return"[Shape (name="+this.name+")]"},createjs.Shape=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.DisplayObject_constructor(),this.text=a,this.font=b,this.color=c,this.textAlign="left",this.textBaseline="top",this.maxWidth=null,this.outline=0,this.lineHeight=0,this.lineWidth=null}var b=createjs.extend(a,createjs.DisplayObject),c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._workingContext=c.getContext("2d"),c.width=c.height=1),a.H_OFFSETS={start:0,left:0,center:-.5,end:-1,right:-1},a.V_OFFSETS={top:0,hanging:-.01,middle:-.4,alphabetic:-.8,ideographic:-.85,bottom:-1},b.isVisible=function(){var a=this.cacheCanvas||null!=this.text&&""!==this.text;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;var c=this.color||"#000";return this.outline?(a.strokeStyle=c,a.lineWidth=1*this.outline):a.fillStyle=c,this._drawText(this._prepContext(a)),!0},b.getMeasuredWidth=function(){return this._getMeasuredWidth(this.text)},b.getMeasuredLineHeight=function(){return 1.2*this._getMeasuredWidth("M")},b.getMeasuredHeight=function(){return this._drawText(null,{}).height},b.getBounds=function(){var b=this.DisplayObject_getBounds();if(b)return b;if(null==this.text||""==this.text)return null;var c=this._drawText(null,{}),d=this.maxWidth&&this.maxWidth<c.width?this.maxWidth:c.width,e=d*a.H_OFFSETS[this.textAlign||"left"],f=this.lineHeight||this.getMeasuredLineHeight(),g=f*a.V_OFFSETS[this.textBaseline||"top"];return this._rectangle.setValues(e,g,d,c.height)},b.getMetrics=function(){var b={lines:[]};return b.lineHeight=this.lineHeight||this.getMeasuredLineHeight(),b.vOffset=b.lineHeight*a.V_OFFSETS[this.textBaseline||"top"],this._drawText(null,b,b.lines)},b.clone=function(){return this._cloneProps(new a(this.text,this.font,this.color))},b.toString=function(){return"[Text (text="+(this.text.length>20?this.text.substr(0,17)+"...":this.text)+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.textAlign=this.textAlign,a.textBaseline=this.textBaseline,a.maxWidth=this.maxWidth,a.outline=this.outline,a.lineHeight=this.lineHeight,a.lineWidth=this.lineWidth,a},b._prepContext=function(a){return a.font=this.font||"10px sans-serif",a.textAlign=this.textAlign||"left",a.textBaseline=this.textBaseline||"top",a},b._drawText=function(b,c,d){var e=!!b;e||(b=a._workingContext,b.save(),this._prepContext(b));for(var f=this.lineHeight||this.getMeasuredLineHeight(),g=0,h=0,i=String(this.text).split(/(?:\r\n|\r|\n)/),j=0,k=i.length;k>j;j++){var l=i[j],m=null;if(null!=this.lineWidth&&(m=b.measureText(l).width)>this.lineWidth){var n=l.split(/(\s)/);l=n[0],m=b.measureText(l).width;for(var o=1,p=n.length;p>o;o+=2){var q=b.measureText(n[o]+n[o+1]).width;m+q>this.lineWidth?(e&&this._drawTextLine(b,l,h*f),d&&d.push(l),m>g&&(g=m),l=n[o+1],m=b.measureText(l).width,h++):(l+=n[o]+n[o+1],m+=q)}}e&&this._drawTextLine(b,l,h*f),d&&d.push(l),c&&null==m&&(m=b.measureText(l).width),m>g&&(g=m),h++}return c&&(c.width=g,c.height=h*f),e||b.restore(),c},b._drawTextLine=function(a,b,c){this.outline?a.strokeText(b,0,c,this.maxWidth||65535):a.fillText(b,0,c,this.maxWidth||65535)},b._getMeasuredWidth=function(b){var c=a._workingContext;c.save();var d=this._prepContext(c).measureText(b).width;return c.restore(),d},createjs.Text=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.Container_constructor(),this.text=a||"",this.spriteSheet=b,this.lineHeight=0,this.letterSpacing=0,this.spaceWidth=0,this._oldProps={text:0,spriteSheet:0,lineHeight:0,letterSpacing:0,spaceWidth:0}}var b=createjs.extend(a,createjs.Container);a.maxPoolSize=100,a._spritePool=[],b.draw=function(a,b){this.DisplayObject_draw(a,b)||(this._updateText(),this.Container_draw(a,b))},b.getBounds=function(){return this._updateText(),this.Container_getBounds()},b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet&&this.spriteSheet.complete&&this.text;return!!(this.visible&&this.alpha>0&&0!==this.scaleX&&0!==this.scaleY&&a)},b.clone=function(){return this._cloneProps(new a(this.text,this.spriteSheet))},b.addChild=b.addChildAt=b.removeChild=b.removeChildAt=b.removeAllChildren=function(){},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.lineHeight=this.lineHeight,a.letterSpacing=this.letterSpacing,a.spaceWidth=this.spaceWidth,a},b._getFrameIndex=function(a,b){var c,d=b.getAnimation(a);return d||(a!=(c=a.toUpperCase())||a!=(c=a.toLowerCase())||(c=null),c&&(d=b.getAnimation(c))),d&&d.frames[0]},b._getFrame=function(a,b){var c=this._getFrameIndex(a,b);return null==c?c:b.getFrame(c)},b._getLineHeight=function(a){var b=this._getFrame("1",a)||this._getFrame("T",a)||this._getFrame("L",a)||a.getFrame(0);return b?b.rect.height:1},b._getSpaceWidth=function(a){var b=this._getFrame("1",a)||this._getFrame("l",a)||this._getFrame("e",a)||this._getFrame("a",a)||a.getFrame(0);return b?b.rect.width:1},b._updateText=function(){var b,c=0,d=0,e=this._oldProps,f=!1,g=this.spaceWidth,h=this.lineHeight,i=this.spriteSheet,j=a._spritePool,k=this.children,l=0,m=k.length;for(var n in e)e[n]!=this[n]&&(e[n]=this[n],f=!0);if(f){var o=!!this._getFrame(" ",i);o||g||(g=this._getSpaceWidth(i)),h||(h=this._getLineHeight(i));for(var p=0,q=this.text.length;q>p;p++){var r=this.text.charAt(p);if(" "!=r||o)if("\n"!=r&&"\r"!=r){var s=this._getFrameIndex(r,i);null!=s&&(m>l?b=k[l]:(k.push(b=j.length?j.pop():new createjs.Sprite),b.parent=this,m++),b.spriteSheet=i,b.gotoAndStop(s),b.x=c,b.y=d,l++,c+=b.getBounds().width+this.letterSpacing)}else"\r"==r&&"\n"==this.text.charAt(p+1)&&p++,c=0,d+=h;else c+=g}for(;m>l;)j.push(b=k.pop()),b.parent=null,m--;j.length>a.maxPoolSize&&(j.length=a.maxPoolSize)}},createjs.BitmapText=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"SpriteSheetUtils cannot be instantiated"}var b=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");b.getContext&&(a._workingCanvas=b,a._workingContext=b.getContext("2d"),b.width=b.height=1),a.addFlippedFrames=function(b,c,d,e){if(c||d||e){var f=0;c&&a._flip(b,++f,!0,!1),d&&a._flip(b,++f,!1,!0),e&&a._flip(b,++f,!0,!0)}},a.extractFrame=function(b,c){isNaN(c)&&(c=b.getAnimation(c).frames[0]);var d=b.getFrame(c);if(!d)return null;var e=d.rect,f=a._workingCanvas;f.width=e.width,f.height=e.height,a._workingContext.drawImage(d.image,e.x,e.y,e.width,e.height,0,0,e.width,e.height);var g=document.createElement("img");return g.src=f.toDataURL("image/png"),g},a.mergeAlpha=function(a,b,c){c||(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),c.width=Math.max(b.width,a.width),c.height=Math.max(b.height,a.height);var d=c.getContext("2d");return d.save(),d.drawImage(a,0,0),d.globalCompositeOperation="destination-in",d.drawImage(b,0,0),d.restore(),c},a._flip=function(b,c,d,e){for(var f=b._images,g=a._workingCanvas,h=a._workingContext,i=f.length/c,j=0;i>j;j++){var k=f[j];k.__tmp=j,h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,g.width+1,g.height+1),g.width=k.width,g.height=k.height,h.setTransform(d?-1:1,0,0,e?-1:1,d?k.width:0,e?k.height:0),h.drawImage(k,0,0);var l=document.createElement("img");l.src=g.toDataURL("image/png"),l.width=k.width,l.height=k.height,f.push(l)}var m=b._frames,n=m.length/c;for(j=0;n>j;j++){k=m[j];var o=k.rect.clone();l=f[k.image.__tmp+i*c];var p={image:l,rect:o,regX:k.regX,regY:k.regY};d&&(o.x=l.width-o.x-o.width,p.regX=o.width-k.regX),e&&(o.y=l.height-o.y-o.height,p.regY=o.height-k.regY),m.push(p)}var q="_"+(d?"h":"")+(e?"v":""),r=b._animations,s=b._data,t=r.length/c;for(j=0;t>j;j++){var u=r[j];k=s[u];var v={name:u+q,speed:k.speed,next:k.next,frames:[]};k.next&&(v.next+=q),m=k.frames;for(var w=0,x=m.length;x>w;w++)v.frames.push(m[w]+n*c);s[v.name]=v,r.push(v.name)}},createjs.SpriteSheetUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.EventDispatcher_constructor(),this.maxWidth=2048,this.maxHeight=2048,this.spriteSheet=null,this.scale=1,this.padding=1,this.timeSlice=.3,this.progress=-1,this._frames=[],this._animations={},this._data=null,this._nextFrameIndex=0,this._index=0,this._timerID=null,this._scale=1
}var b=createjs.extend(a,createjs.EventDispatcher);a.ERR_DIMENSIONS="frame dimensions exceed max spritesheet dimensions",a.ERR_RUNNING="a build is already running",b.addFrame=function(b,c,d,e,f){if(this._data)throw a.ERR_RUNNING;var g=c||b.bounds||b.nominalBounds;return!g&&b.getBounds&&(g=b.getBounds()),g?(d=d||1,this._frames.push({source:b,sourceRect:g,scale:d,funct:e,data:f,index:this._frames.length,height:g.height*d})-1):null},b.addAnimation=function(b,c,d,e){if(this._data)throw a.ERR_RUNNING;this._animations[b]={frames:c,next:d,frequency:e}},b.addMovieClip=function(b,c,d,e,f,g){if(this._data)throw a.ERR_RUNNING;var h=b.frameBounds,i=c||b.bounds||b.nominalBounds;if(!i&&b.getBounds&&(i=b.getBounds()),i||h){var j,k,l=this._frames.length,m=b.timeline.duration;for(j=0;m>j;j++){var n=h&&h[j]?h[j]:i;this.addFrame(b,n,d,this._setupMovieClipFrame,{i:j,f:e,d:f})}var o=b.timeline._labels,p=[];for(var q in o)p.push({index:o[q],label:q});if(p.length)for(p.sort(function(a,b){return a.index-b.index}),j=0,k=p.length;k>j;j++){for(var r=p[j].label,s=l+p[j].index,t=l+(j==k-1?m:p[j+1].index),u=[],v=s;t>v;v++)u.push(v);(!g||(r=g(r,b,s,t)))&&this.addAnimation(r,u,!0)}}},b.build=function(){if(this._data)throw a.ERR_RUNNING;for(this._startBuild();this._drawNext(););return this._endBuild(),this.spriteSheet},b.buildAsync=function(b){if(this._data)throw a.ERR_RUNNING;this.timeSlice=b,this._startBuild();var c=this;this._timerID=setTimeout(function(){c._run()},50-50*Math.max(.01,Math.min(.99,this.timeSlice||.3)))},b.stopAsync=function(){clearTimeout(this._timerID),this._data=null},b.clone=function(){throw"SpriteSheetBuilder cannot be cloned."},b.toString=function(){return"[SpriteSheetBuilder]"},b._startBuild=function(){var b=this.padding||0;this.progress=0,this.spriteSheet=null,this._index=0,this._scale=this.scale;var c=[];this._data={images:[],frames:c,animations:this._animations};var d=this._frames.slice();if(d.sort(function(a,b){return a.height<=b.height?-1:1}),d[d.length-1].height+2*b>this.maxHeight)throw a.ERR_DIMENSIONS;for(var e=0,f=0,g=0;d.length;){var h=this._fillRow(d,e,g,c,b);if(h.w>f&&(f=h.w),e+=h.h,!h.h||!d.length){var i=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");i.width=this._getSize(f,this.maxWidth),i.height=this._getSize(e,this.maxHeight),this._data.images[g]=i,h.h||(f=e=0,g++)}}},b._setupMovieClipFrame=function(a,b){var c=a.actionsEnabled;a.actionsEnabled=!1,a.gotoAndStop(b.i),a.actionsEnabled=c,b.f&&b.f(a,b.d,b.i)},b._getSize=function(a,b){for(var c=4;Math.pow(2,++c)<a;);return Math.min(b,Math.pow(2,c))},b._fillRow=function(b,c,d,e,f){var g=this.maxWidth,h=this.maxHeight;c+=f;for(var i=h-c,j=f,k=0,l=b.length-1;l>=0;l--){var m=b[l],n=this._scale*m.scale,o=m.sourceRect,p=m.source,q=Math.floor(n*o.x-f),r=Math.floor(n*o.y-f),s=Math.ceil(n*o.height+2*f),t=Math.ceil(n*o.width+2*f);if(t>g)throw a.ERR_DIMENSIONS;s>i||j+t>g||(m.img=d,m.rect=new createjs.Rectangle(j,c,t,s),k=k||s,b.splice(l,1),e[m.index]=[j,c,t,s,d,Math.round(-q+n*p.regX-f),Math.round(-r+n*p.regY-f)],j+=t)}return{w:j,h:k}},b._endBuild=function(){this.spriteSheet=new createjs.SpriteSheet(this._data),this._data=null,this.progress=1,this.dispatchEvent("complete")},b._run=function(){for(var a=50*Math.max(.01,Math.min(.99,this.timeSlice||.3)),b=(new Date).getTime()+a,c=!1;b>(new Date).getTime();)if(!this._drawNext()){c=!0;break}if(c)this._endBuild();else{var d=this;this._timerID=setTimeout(function(){d._run()},50-a)}var e=this.progress=this._index/this._frames.length;if(this.hasEventListener("progress")){var f=new createjs.Event("progress");f.progress=e,this.dispatchEvent(f)}},b._drawNext=function(){var a=this._frames[this._index],b=a.scale*this._scale,c=a.rect,d=a.sourceRect,e=this._data.images[a.img],f=e.getContext("2d");return a.funct&&a.funct(a.source,a.data),f.save(),f.beginPath(),f.rect(c.x,c.y,c.width,c.height),f.clip(),f.translate(Math.ceil(c.x-d.x*b),Math.ceil(c.y-d.y*b)),f.scale(b,b),a.source.draw(f),f.restore(),++this._index<this._frames.length},createjs.SpriteSheetBuilder=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),"string"==typeof a&&(a=document.getElementById(a)),this.mouseEnabled=!1;var b=a.style;b.position="absolute",b.transformOrigin=b.WebkitTransformOrigin=b.msTransformOrigin=b.MozTransformOrigin=b.OTransformOrigin="0% 0%",this.htmlElement=a,this._oldProps=null}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){return null!=this.htmlElement},b.draw=function(){return!0},b.cache=function(){},b.uncache=function(){},b.updateCache=function(){},b.hitTest=function(){},b.localToGlobal=function(){},b.globalToLocal=function(){},b.localToLocal=function(){},b.clone=function(){throw"DOMElement cannot be cloned."},b.toString=function(){return"[DOMElement (name="+this.name+")]"},b._tick=function(a){var b=this.getStage();b&&b.on("drawend",this._handleDrawEnd,this,!0),this.DisplayObject__tick(a)},b._handleDrawEnd=function(){var a=this.htmlElement;if(a){var b=a.style,c=this.getConcatenatedDisplayProps(this._props),d=c.matrix,e=c.visible?"visible":"hidden";if(e!=b.visibility&&(b.visibility=e),c.visible){var f=this._oldProps,g=f&&f.matrix,h=1e4;if(!g||!g.equals(d)){var i="matrix("+(d.a*h|0)/h+","+(d.b*h|0)/h+","+(d.c*h|0)/h+","+(d.d*h|0)/h+","+(d.tx+.5|0);b.transform=b.WebkitTransform=b.OTransform=b.msTransform=i+","+(d.ty+.5|0)+")",b.MozTransform=i+"px,"+(d.ty+.5|0)+"px)",f||(f=this._oldProps=new createjs.DisplayProps(!0,0/0)),f.matrix.copy(d)}f.alpha!=c.alpha&&(b.opacity=""+(c.alpha*h|0)/h,f.alpha=c.alpha)}}},createjs.DOMElement=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){}var b=a.prototype;b.getBounds=function(a){return a},b.applyFilter=function(a,b,c,d,e,f,g,h){f=f||a,null==g&&(g=b),null==h&&(h=c);try{var i=a.getImageData(b,c,d,e)}catch(j){return!1}return this._applyFilter(i)?(f.putImageData(i,g,h),!0):!1},b.toString=function(){return"[Filter]"},b.clone=function(){return new a},b._applyFilter=function(){return!0},createjs.Filter=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){(isNaN(a)||0>a)&&(a=0),(isNaN(b)||0>b)&&(b=0),(isNaN(c)||1>c)&&(c=1),this.blurX=0|a,this.blurY=0|b,this.quality=0|c}var b=createjs.extend(a,createjs.Filter);a.MUL_TABLE=[1,171,205,293,57,373,79,137,241,27,391,357,41,19,283,265,497,469,443,421,25,191,365,349,335,161,155,149,9,278,269,261,505,245,475,231,449,437,213,415,405,395,193,377,369,361,353,345,169,331,325,319,313,307,301,37,145,285,281,69,271,267,263,259,509,501,493,243,479,118,465,459,113,446,55,435,429,423,209,413,51,403,199,393,97,3,379,375,371,367,363,359,355,351,347,43,85,337,333,165,327,323,5,317,157,311,77,305,303,75,297,294,73,289,287,71,141,279,277,275,68,135,67,133,33,262,260,129,511,507,503,499,495,491,61,121,481,477,237,235,467,232,115,457,227,451,7,445,221,439,218,433,215,427,425,211,419,417,207,411,409,203,202,401,399,396,197,49,389,387,385,383,95,189,47,187,93,185,23,183,91,181,45,179,89,177,11,175,87,173,345,343,341,339,337,21,167,83,331,329,327,163,81,323,321,319,159,79,315,313,39,155,309,307,153,305,303,151,75,299,149,37,295,147,73,291,145,289,287,143,285,71,141,281,35,279,139,69,275,137,273,17,271,135,269,267,133,265,33,263,131,261,130,259,129,257,1],a.SHG_TABLE=[0,9,10,11,9,12,10,11,12,9,13,13,10,9,13,13,14,14,14,14,10,13,14,14,14,13,13,13,9,14,14,14,15,14,15,14,15,15,14,15,15,15,14,15,15,15,15,15,14,15,15,15,15,15,15,12,14,15,15,13,15,15,15,15,16,16,16,15,16,14,16,16,14,16,13,16,16,16,15,16,13,16,15,16,14,9,16,16,16,16,16,16,16,16,16,13,14,16,16,15,16,16,10,16,15,16,14,16,16,14,16,16,14,16,16,14,15,16,16,16,14,15,14,15,13,16,16,15,17,17,17,17,17,17,14,15,17,17,16,16,17,16,15,17,16,17,11,17,16,17,16,17,16,17,17,16,17,17,16,17,17,16,16,17,17,17,16,14,17,17,17,17,15,16,14,16,15,16,13,16,15,16,14,16,15,16,12,16,15,16,17,17,17,17,17,13,16,15,17,17,17,16,15,17,17,17,16,15,17,17,14,16,17,17,16,17,17,16,15,17,16,14,17,16,15,17,16,17,17,16,17,15,16,17,14,17,16,15,17,16,17,13,17,16,17,17,16,17,14,17,16,17,16,17,16,17,9],b.getBounds=function(a){var b=0|this.blurX,c=0|this.blurY;if(0>=b&&0>=c)return a;var d=Math.pow(this.quality,.2);return(a||new createjs.Rectangle).pad(b*d+1,c*d+1,b*d+1,c*d+1)},b.clone=function(){return new a(this.blurX,this.blurY,this.quality)},b.toString=function(){return"[BlurFilter]"},b._applyFilter=function(b){var c=this.blurX>>1;if(isNaN(c)||0>c)return!1;var d=this.blurY>>1;if(isNaN(d)||0>d)return!1;if(0==c&&0==d)return!1;var e=this.quality;(isNaN(e)||1>e)&&(e=1),e|=0,e>3&&(e=3),1>e&&(e=1);var f=b.data,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=c+c+1|0,w=d+d+1|0,x=0|b.width,y=0|b.height,z=x-1|0,A=y-1|0,B=c+1|0,C=d+1|0,D={r:0,b:0,g:0,a:0},E=D;for(i=1;v>i;i++)E=E.n={r:0,b:0,g:0,a:0};E.n=D;var F={r:0,b:0,g:0,a:0},G=F;for(i=1;w>i;i++)G=G.n={r:0,b:0,g:0,a:0};G.n=F;for(var H=null,I=0|a.MUL_TABLE[c],J=0|a.SHG_TABLE[c],K=0|a.MUL_TABLE[d],L=0|a.SHG_TABLE[d];e-->0;){m=l=0;var M=I,N=J;for(h=y;--h>-1;){for(n=B*(r=f[0|l]),o=B*(s=f[l+1|0]),p=B*(t=f[l+2|0]),q=B*(u=f[l+3|0]),E=D,i=B;--i>-1;)E.r=r,E.g=s,E.b=t,E.a=u,E=E.n;for(i=1;B>i;i++)j=l+((i>z?z:i)<<2)|0,n+=E.r=f[j],o+=E.g=f[j+1],p+=E.b=f[j+2],q+=E.a=f[j+3],E=E.n;for(H=D,g=0;x>g;g++)f[l++]=n*M>>>N,f[l++]=o*M>>>N,f[l++]=p*M>>>N,f[l++]=q*M>>>N,j=m+((j=g+c+1)<z?j:z)<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n;m+=x}for(M=K,N=L,g=0;x>g;g++){for(l=g<<2|0,n=C*(r=f[l])|0,o=C*(s=f[l+1|0])|0,p=C*(t=f[l+2|0])|0,q=C*(u=f[l+3|0])|0,G=F,i=0;C>i;i++)G.r=r,G.g=s,G.b=t,G.a=u,G=G.n;for(k=x,i=1;d>=i;i++)l=k+g<<2,n+=G.r=f[l],o+=G.g=f[l+1],p+=G.b=f[l+2],q+=G.a=f[l+3],G=G.n,A>i&&(k+=x);if(l=g,H=F,e>0)for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(f[j]=n*M>>>N,f[j+1]=o*M>>>N,f[j+2]=p*M>>>N):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x;else for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(u=255/u,f[j]=(n*M>>>N)*u,f[j+1]=(o*M>>>N)*u,f[j+2]=(p*M>>>N)*u):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x}}return!0},createjs.BlurFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.alphaMap=a,this._alphaMap=null,this._mapData=null}var b=createjs.extend(a,createjs.Filter);b.clone=function(){var b=new a(this.alphaMap);return b._alphaMap=this._alphaMap,b._mapData=this._mapData,b},b.toString=function(){return"[AlphaMapFilter]"},b._applyFilter=function(a){if(!this.alphaMap)return!0;if(!this._prepAlphaMap())return!1;for(var b=a.data,c=this._mapData,d=0,e=b.length;e>d;d+=4)b[d+3]=c[d]||0;return!0},b._prepAlphaMap=function(){if(!this.alphaMap)return!1;if(this.alphaMap==this._alphaMap&&this._mapData)return!0;this._mapData=null;var a,b=this._alphaMap=this.alphaMap,c=b;b instanceof HTMLCanvasElement?a=c.getContext("2d"):(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"),c.width=b.width,c.height=b.height,a=c.getContext("2d"),a.drawImage(b,0,0));try{var d=a.getImageData(0,0,b.width,b.height)}catch(e){return!1}return this._mapData=d.data,!0},createjs.AlphaMapFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.mask=a}var b=createjs.extend(a,createjs.Filter);b.applyFilter=function(a,b,c,d,e,f,g,h){return this.mask?(f=f||a,null==g&&(g=b),null==h&&(h=c),f.save(),a!=f?!1:(f.globalCompositeOperation="destination-in",f.drawImage(this.mask,g,h),f.restore(),!0)):!0},b.clone=function(){return new a(this.mask)},b.toString=function(){return"[AlphaMaskFilter]"},createjs.AlphaMaskFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h){this.redMultiplier=null!=a?a:1,this.greenMultiplier=null!=b?b:1,this.blueMultiplier=null!=c?c:1,this.alphaMultiplier=null!=d?d:1,this.redOffset=e||0,this.greenOffset=f||0,this.blueOffset=g||0,this.alphaOffset=h||0}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorFilter]"},b.clone=function(){return new a(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset)},b._applyFilter=function(a){for(var b=a.data,c=b.length,d=0;c>d;d+=4)b[d]=b[d]*this.redMultiplier+this.redOffset,b[d+1]=b[d+1]*this.greenMultiplier+this.greenOffset,b[d+2]=b[d+2]*this.blueMultiplier+this.blueOffset,b[d+3]=b[d+3]*this.alphaMultiplier+this.alphaOffset;return!0},createjs.ColorFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setColor(a,b,c,d)}var b=a.prototype;a.DELTA_INDEX=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10],a.IDENTITY_MATRIX=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],a.LENGTH=a.IDENTITY_MATRIX.length,b.setColor=function(a,b,c,d){return this.reset().adjustColor(a,b,c,d)},b.reset=function(){return this.copy(a.IDENTITY_MATRIX)},b.adjustColor=function(a,b,c,d){return this.adjustHue(d),this.adjustContrast(b),this.adjustBrightness(a),this.adjustSaturation(c)},b.adjustBrightness=function(a){return 0==a||isNaN(a)?this:(a=this._cleanValue(a,255),this._multiplyMatrix([1,0,0,0,a,0,1,0,0,a,0,0,1,0,a,0,0,0,1,0,0,0,0,0,1]),this)},b.adjustContrast=function(b){if(0==b||isNaN(b))return this;b=this._cleanValue(b,100);var c;return 0>b?c=127+b/100*127:(c=b%1,c=0==c?a.DELTA_INDEX[b]:a.DELTA_INDEX[b<<0]*(1-c)+a.DELTA_INDEX[(b<<0)+1]*c,c=127*c+127),this._multiplyMatrix([c/127,0,0,0,.5*(127-c),0,c/127,0,0,.5*(127-c),0,0,c/127,0,.5*(127-c),0,0,0,1,0,0,0,0,0,1]),this},b.adjustSaturation=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,100);var b=1+(a>0?3*a/100:a/100),c=.3086,d=.6094,e=.082;return this._multiplyMatrix([c*(1-b)+b,d*(1-b),e*(1-b),0,0,c*(1-b),d*(1-b)+b,e*(1-b),0,0,c*(1-b),d*(1-b),e*(1-b)+b,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.adjustHue=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,180)/180*Math.PI;var b=Math.cos(a),c=Math.sin(a),d=.213,e=.715,f=.072;return this._multiplyMatrix([d+b*(1-d)+c*-d,e+b*-e+c*-e,f+b*-f+c*(1-f),0,0,d+b*-d+.143*c,e+b*(1-e)+.14*c,f+b*-f+c*-.283,0,0,d+b*-d+c*-(1-d),e+b*-e+c*e,f+b*(1-f)+c*f,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.concat=function(b){return b=this._fixMatrix(b),b.length!=a.LENGTH?this:(this._multiplyMatrix(b),this)},b.clone=function(){return(new a).copy(this)},b.toArray=function(){for(var b=[],c=0,d=a.LENGTH;d>c;c++)b[c]=this[c];return b},b.copy=function(b){for(var c=a.LENGTH,d=0;c>d;d++)this[d]=b[d];return this},b.toString=function(){return"[ColorMatrix]"},b._multiplyMatrix=function(a){var b,c,d,e=[];for(b=0;5>b;b++){for(c=0;5>c;c++)e[c]=this[c+5*b];for(c=0;5>c;c++){var f=0;for(d=0;5>d;d++)f+=a[c+5*d]*e[d];this[c+5*b]=f}}},b._cleanValue=function(a,b){return Math.min(b,Math.max(-b,a))},b._fixMatrix=function(b){return b instanceof a&&(b=b.toArray()),b.length<a.LENGTH?b=b.slice(0,b.length).concat(a.IDENTITY_MATRIX.slice(b.length,a.LENGTH)):b.length>a.LENGTH&&(b=b.slice(0,a.LENGTH)),b},createjs.ColorMatrix=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.matrix=a}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorMatrixFilter]"},b.clone=function(){return new a(this.matrix)},b._applyFilter=function(a){for(var b,c,d,e,f=a.data,g=f.length,h=this.matrix,i=h[0],j=h[1],k=h[2],l=h[3],m=h[4],n=h[5],o=h[6],p=h[7],q=h[8],r=h[9],s=h[10],t=h[11],u=h[12],v=h[13],w=h[14],x=h[15],y=h[16],z=h[17],A=h[18],B=h[19],C=0;g>C;C+=4)b=f[C],c=f[C+1],d=f[C+2],e=f[C+3],f[C]=b*i+c*j+d*k+e*l+m,f[C+1]=b*n+c*o+d*p+e*q+r,f[C+2]=b*s+c*t+d*u+e*v+w,f[C+3]=b*x+c*y+d*z+e*A+B;return!0},createjs.ColorMatrixFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Touch cannot be instantiated"}a.isSupported=function(){return!!("ontouchstart"in window||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0)},a.enable=function(b,c,d){return b&&b.canvas&&a.isSupported()?b.__touch?!0:(b.__touch={pointers:{},multitouch:!c,preventDefault:!d,count:0},"ontouchstart"in window?a._IOS_enable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_enable(b),!0):!1},a.disable=function(b){b&&("ontouchstart"in window?a._IOS_disable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_disable(b),delete b.__touch)},a._IOS_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IOS_handleEvent(b,c)};c.addEventListener("touchstart",d,!1),c.addEventListener("touchmove",d,!1),c.addEventListener("touchend",d,!1),c.addEventListener("touchcancel",d,!1)},a._IOS_disable=function(a){var b=a.canvas;if(b){var c=a.__touch.f;b.removeEventListener("touchstart",c,!1),b.removeEventListener("touchmove",c,!1),b.removeEventListener("touchend",c,!1),b.removeEventListener("touchcancel",c,!1)}},a._IOS_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();for(var c=b.changedTouches,d=b.type,e=0,f=c.length;f>e;e++){var g=c[e],h=g.identifier;g.target==a.canvas&&("touchstart"==d?this._handleStart(a,h,b,g.pageX,g.pageY):"touchmove"==d?this._handleMove(a,h,b,g.pageX,g.pageY):("touchend"==d||"touchcancel"==d)&&this._handleEnd(a,h,b))}}},a._IE_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IE_handleEvent(b,c)};void 0===window.navigator.pointerEnabled?(c.addEventListener("MSPointerDown",d,!1),window.addEventListener("MSPointerMove",d,!1),window.addEventListener("MSPointerUp",d,!1),window.addEventListener("MSPointerCancel",d,!1),b.__touch.preventDefault&&(c.style.msTouchAction="none")):(c.addEventListener("pointerdown",d,!1),window.addEventListener("pointermove",d,!1),window.addEventListener("pointerup",d,!1),window.addEventListener("pointercancel",d,!1),b.__touch.preventDefault&&(c.style.touchAction="none")),b.__touch.activeIDs={}},a._IE_disable=function(a){var b=a.__touch.f;void 0===window.navigator.pointerEnabled?(window.removeEventListener("MSPointerMove",b,!1),window.removeEventListener("MSPointerUp",b,!1),window.removeEventListener("MSPointerCancel",b,!1),a.canvas&&a.canvas.removeEventListener("MSPointerDown",b,!1)):(window.removeEventListener("pointermove",b,!1),window.removeEventListener("pointerup",b,!1),window.removeEventListener("pointercancel",b,!1),a.canvas&&a.canvas.removeEventListener("pointerdown",b,!1))},a._IE_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();var c=b.type,d=b.pointerId,e=a.__touch.activeIDs;if("MSPointerDown"==c||"pointerdown"==c){if(b.srcElement!=a.canvas)return;e[d]=!0,this._handleStart(a,d,b,b.pageX,b.pageY)}else e[d]&&("MSPointerMove"==c||"pointermove"==c?this._handleMove(a,d,b,b.pageX,b.pageY):("MSPointerUp"==c||"MSPointerCancel"==c||"pointerup"==c||"pointercancel"==c)&&(delete e[d],this._handleEnd(a,d,b)))}},a._handleStart=function(a,b,c,d,e){var f=a.__touch;if(f.multitouch||!f.count){var g=f.pointers;g[b]||(g[b]=!0,f.count++,a._handlePointerDown(b,c,d,e))}},a._handleMove=function(a,b,c,d,e){a.__touch.pointers[b]&&a._handlePointerMove(b,c,d,e)},a._handleEnd=function(a,b,c){var d=a.__touch,e=d.pointers;e[b]&&(d.count--,a._handlePointerUp(b,c,!0),delete e[b])},createjs.Touch=a}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.EaselJS=createjs.EaselJS||{};a.version="0.8.0",a.buildDate="Thu, 11 Dec 2014 23:32:09 GMT"}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.PreloadJS=createjs.PreloadJS||{};a.version="0.6.0",a.buildDate="Thu, 11 Dec 2014 23:32:09 GMT"}(),this.createjs=this.createjs||{},function(){"use strict";createjs.proxy=function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){return a.apply(b,Array.prototype.slice.call(arguments,0).concat(c))}}}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"BrowserDetect cannot be instantiated"}var b=a.agent=window.navigator.userAgent;a.isWindowPhone=b.indexOf("IEMobile")>-1||b.indexOf("Windows Phone")>-1,a.isFirefox=b.indexOf("Firefox")>-1,a.isOpera=null!=window.opera,a.isChrome=b.indexOf("Chrome")>-1,a.isIOS=(b.indexOf("iPod")>-1||b.indexOf("iPhone")>-1||b.indexOf("iPad")>-1)&&!a.isWindowPhone,a.isAndroid=b.indexOf("Android")>-1&&!a.isWindowPhone,a.isBlackberry=b.indexOf("Blackberry")>-1,createjs.BrowserDetect=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.Event_constructor("error"),this.title=a,this.message=b,this.data=c}var b=createjs.extend(a,createjs.Event);b.clone=function(){return new createjs.ErrorEvent(this.title,this.message,this.data)},createjs.ErrorEvent=createjs.promote(a,"Event")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.Event_constructor("progress"),this.loaded=a,this.total=null==b?1:b,this.progress=0==b?0:this.loaded/this.total}var b=createjs.extend(a,createjs.Event);b.clone=function(){return new createjs.ProgressEvent(this.loaded,this.total)},createjs.ProgressEvent=createjs.promote(a,"Event")}(window),function(){function a(b,d){function f(a){if(f[a]!==q)return f[a];var b;if("bug-string-char-index"==a)b="a"!="a"[0];else if("json"==a)b=f("json-stringify")&&f("json-parse");else{var c,e='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==a){var i=d.stringify,k="function"==typeof i&&t;if(k){(c=function(){return 1}).toJSON=c;try{k="0"===i(0)&&"0"===i(new g)&&'""'==i(new h)&&i(s)===q&&i(q)===q&&i()===q&&"1"===i(c)&&"[1]"==i([c])&&"[null]"==i([q])&&"null"==i(null)&&"[null,null,null]"==i([q,s,null])&&i({a:[c,!0,!1,null,"\x00\b\n\f\r	"]})==e&&"1"===i(null,c)&&"[\n 1,\n 2\n]"==i([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==i(new j(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==i(new j(864e13))&&'"-000001-01-01T00:00:00.000Z"'==i(new j(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==i(new j(-1))}catch(l){k=!1}}b=k}if("json-parse"==a){var m=d.parse;if("function"==typeof m)try{if(0===m("0")&&!m(!1)){c=m(e);var n=5==c.a.length&&1===c.a[0];if(n){try{n=!m('"	"')}catch(l){}if(n)try{n=1!==m("01")}catch(l){}if(n)try{n=1!==m("1.")}catch(l){}}}}catch(l){n=!1}b=n}}return f[a]=!!b}b||(b=e.Object()),d||(d=e.Object());var g=b.Number||e.Number,h=b.String||e.String,i=b.Object||e.Object,j=b.Date||e.Date,k=b.SyntaxError||e.SyntaxError,l=b.TypeError||e.TypeError,m=b.Math||e.Math,n=b.JSON||e.JSON;"object"==typeof n&&n&&(d.stringify=n.stringify,d.parse=n.parse);var o,p,q,r=i.prototype,s=r.toString,t=new j(-0xc782b5b800cec);try{t=-109252==t.getUTCFullYear()&&0===t.getUTCMonth()&&1===t.getUTCDate()&&10==t.getUTCHours()&&37==t.getUTCMinutes()&&6==t.getUTCSeconds()&&708==t.getUTCMilliseconds()}catch(u){}if(!f("json")){var v="[object Function]",w="[object Date]",x="[object Number]",y="[object String]",z="[object Array]",A="[object Boolean]",B=f("bug-string-char-index");if(!t)var C=m.floor,D=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,b){return D[b]+365*(a-1970)+C((a-1969+(b=+(b>1)))/4)-C((a-1901+b)/100)+C((a-1601+b)/400)};if((o=r.hasOwnProperty)||(o=function(a){var b,c={};return(c.__proto__=null,c.__proto__={toString:1},c).toString!=s?o=function(a){var b=this.__proto__,c=a in(this.__proto__=null,this);return this.__proto__=b,c}:(b=c.constructor,o=function(a){var c=(this.constructor||b).prototype;return a in this&&!(a in c&&this[a]===c[a])}),c=null,o.call(this,a)}),p=function(a,b){var d,e,f,g=0;(d=function(){this.valueOf=0}).prototype.valueOf=0,e=new d;for(f in e)o.call(e,f)&&g++;return d=e=null,g?p=2==g?function(a,b){var c,d={},e=s.call(a)==v;for(c in a)e&&"prototype"==c||o.call(d,c)||!(d[c]=1)||!o.call(a,c)||b(c)}:function(a,b){var c,d,e=s.call(a)==v;for(c in a)e&&"prototype"==c||!o.call(a,c)||(d="constructor"===c)||b(c);(d||o.call(a,c="constructor"))&&b(c)}:(e=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],p=function(a,b){var d,f,g=s.call(a)==v,h=!g&&"function"!=typeof a.constructor&&c[typeof a.hasOwnProperty]&&a.hasOwnProperty||o;for(d in a)g&&"prototype"==d||!h.call(a,d)||b(d);for(f=e.length;d=e[--f];h.call(a,d)&&b(d));}),p(a,b)},!f("json-stringify")){var F={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},G="000000",H=function(a,b){return(G+(b||0)).slice(-a)},I="\\u00",J=function(a){for(var b='"',c=0,d=a.length,e=!B||d>10,f=e&&(B?a.split(""):a);d>c;c++){var g=a.charCodeAt(c);switch(g){case 8:case 9:case 10:case 12:case 13:case 34:case 92:b+=F[g];break;default:if(32>g){b+=I+H(2,g.toString(16));break}b+=e?f[c]:a.charAt(c)}}return b+'"'},K=function(a,b,c,d,e,f,g){var h,i,j,k,m,n,r,t,u,v,B,D,F,G,I,L;try{h=b[a]}catch(M){}if("object"==typeof h&&h)if(i=s.call(h),i!=w||o.call(h,"toJSON"))"function"==typeof h.toJSON&&(i!=x&&i!=y&&i!=z||o.call(h,"toJSON"))&&(h=h.toJSON(a));else if(h>-1/0&&1/0>h){if(E){for(m=C(h/864e5),j=C(m/365.2425)+1970-1;E(j+1,0)<=m;j++);for(k=C((m-E(j,0))/30.42);E(j,k+1)<=m;k++);m=1+m-E(j,k),n=(h%864e5+864e5)%864e5,r=C(n/36e5)%24,t=C(n/6e4)%60,u=C(n/1e3)%60,v=n%1e3}else j=h.getUTCFullYear(),k=h.getUTCMonth(),m=h.getUTCDate(),r=h.getUTCHours(),t=h.getUTCMinutes(),u=h.getUTCSeconds(),v=h.getUTCMilliseconds();h=(0>=j||j>=1e4?(0>j?"-":"+")+H(6,0>j?-j:j):H(4,j))+"-"+H(2,k+1)+"-"+H(2,m)+"T"+H(2,r)+":"+H(2,t)+":"+H(2,u)+"."+H(3,v)+"Z"}else h=null;if(c&&(h=c.call(b,a,h)),null===h)return"null";if(i=s.call(h),i==A)return""+h;if(i==x)return h>-1/0&&1/0>h?""+h:"null";if(i==y)return J(""+h);if("object"==typeof h){for(G=g.length;G--;)if(g[G]===h)throw l();if(g.push(h),B=[],I=f,f+=e,i==z){for(F=0,G=h.length;G>F;F++)D=K(F,h,c,d,e,f,g),B.push(D===q?"null":D);L=B.length?e?"[\n"+f+B.join(",\n"+f)+"\n"+I+"]":"["+B.join(",")+"]":"[]"}else p(d||h,function(a){var b=K(a,h,c,d,e,f,g);b!==q&&B.push(J(a)+":"+(e?" ":"")+b)}),L=B.length?e?"{\n"+f+B.join(",\n"+f)+"\n"+I+"}":"{"+B.join(",")+"}":"{}";return g.pop(),L}};d.stringify=function(a,b,d){var e,f,g,h;if(c[typeof b]&&b)if((h=s.call(b))==v)f=b;else if(h==z){g={};for(var i,j=0,k=b.length;k>j;i=b[j++],h=s.call(i),(h==y||h==x)&&(g[i]=1));}if(d)if((h=s.call(d))==x){if((d-=d%1)>0)for(e="",d>10&&(d=10);e.length<d;e+=" ");}else h==y&&(e=d.length<=10?d:d.slice(0,10));return K("",(i={},i[""]=a,i),f,g,e,"",[])}}if(!f("json-parse")){var L,M,N=h.fromCharCode,O={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},P=function(){throw L=M=null,k()},Q=function(){for(var a,b,c,d,e,f=M,g=f.length;g>L;)switch(e=f.charCodeAt(L)){case 9:case 10:case 13:case 32:L++;break;case 123:case 125:case 91:case 93:case 58:case 44:return a=B?f.charAt(L):f[L],L++,a;case 34:for(a="@",L++;g>L;)if(e=f.charCodeAt(L),32>e)P();else if(92==e)switch(e=f.charCodeAt(++L)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:a+=O[e],L++;break;case 117:for(b=++L,c=L+4;c>L;L++)e=f.charCodeAt(L),e>=48&&57>=e||e>=97&&102>=e||e>=65&&70>=e||P();a+=N("0x"+f.slice(b,L));break;default:P()}else{if(34==e)break;for(e=f.charCodeAt(L),b=L;e>=32&&92!=e&&34!=e;)e=f.charCodeAt(++L);a+=f.slice(b,L)}if(34==f.charCodeAt(L))return L++,a;P();default:if(b=L,45==e&&(d=!0,e=f.charCodeAt(++L)),e>=48&&57>=e){for(48==e&&(e=f.charCodeAt(L+1),e>=48&&57>=e)&&P(),d=!1;g>L&&(e=f.charCodeAt(L),e>=48&&57>=e);L++);if(46==f.charCodeAt(L)){for(c=++L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}if(e=f.charCodeAt(L),101==e||69==e){for(e=f.charCodeAt(++L),(43==e||45==e)&&L++,c=L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}return+f.slice(b,L)}if(d&&P(),"true"==f.slice(L,L+4))return L+=4,!0;if("false"==f.slice(L,L+5))return L+=5,!1;if("null"==f.slice(L,L+4))return L+=4,null;P()}return"$"},R=function(a){var b,c;if("$"==a&&P(),"string"==typeof a){if("@"==(B?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(b=[];a=Q(),"]"!=a;c||(c=!0))c&&(","==a?(a=Q(),"]"==a&&P()):P()),","==a&&P(),b.push(R(a));return b}if("{"==a){for(b={};a=Q(),"}"!=a;c||(c=!0))c&&(","==a?(a=Q(),"}"==a&&P()):P()),(","==a||"string"!=typeof a||"@"!=(B?a.charAt(0):a[0])||":"!=Q())&&P(),b[a.slice(1)]=R(Q());return b}P()}return a},S=function(a,b,c){var d=T(a,b,c);d===q?delete a[b]:a[b]=d},T=function(a,b,c){var d,e=a[b];if("object"==typeof e&&e)if(s.call(e)==z)for(d=e.length;d--;)S(e,d,c);else p(e,function(a){S(e,a,c)});return c.call(a,b,e)};d.parse=function(a,b){var c,d;return L=0,M=""+a,c=R(Q()),"$"!=Q()&&P(),L=M=null,b&&s.call(b)==v?T((d={},d[""]=c,d),"",b):c}}}return d.runInContext=a,d}var b="function"==typeof define&&define.amd,c={"function":!0,object:!0},d=c[typeof exports]&&exports&&!exports.nodeType&&exports,e=c[typeof window]&&window||this,f=d&&c[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!f||f.global!==f&&f.window!==f&&f.self!==f||(e=f),d&&!b)a(e,d);else{var g=e.JSON,h=e.JSON3,i=!1,j=a(e,e.JSON3={noConflict:function(){return i||(i=!0,e.JSON=g,e.JSON3=h,g=h=null),j}});e.JSON={parse:j.parse,stringify:j.stringify}}b&&define(function(){return j})}.call(this),function(){var a={};a.parseXML=function(a,b){var c=null;try{if(window.DOMParser){var d=new DOMParser;c=d.parseFromString(a,b)}else c=new ActiveXObject("Microsoft.XMLDOM"),c.async=!1,c.loadXML(a)}catch(e){}return c},a.parseJSON=function(a){if(null==a)return null;try{return JSON.parse(a)}catch(b){throw b}},createjs.DataUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.src=null,this.type=null,this.id=null,this.maintainOrder=!1,this.callback=null,this.data=null,this.method=createjs.LoadItem.GET,this.values=null,this.headers=null,this.withCredentials=!1,this.mimeType=null,this.crossOrigin=null,this.loadTimeout=8e3}var b=a.prototype={},c=a;c.create=function(b){if("string"==typeof b){var d=new a;return d.src=b,d}if(b instanceof c)return b;if(b instanceof Object)return b;throw new Error("Type not recognized.")},b.set=function(a){for(var b in a)this[b]=a[b];return this},createjs.LoadItem=c}(),function(){var a={};a.ABSOLUTE_PATT=/^(?:\w+:)?\/{2}/i,a.RELATIVE_PATT=/^[./]*?\//i,a.EXTENSION_PATT=/\/?[^/]+\.(\w{1,5})$/i,a.parseURI=function(b){var c={absolute:!1,relative:!1};if(null==b)return c;var d=b.indexOf("?");d>-1&&(b=b.substr(0,d));var e;return a.ABSOLUTE_PATT.test(b)?c.absolute=!0:a.RELATIVE_PATT.test(b)&&(c.relative=!0),(e=b.match(a.EXTENSION_PATT))&&(c.extension=e[1].toLowerCase()),c},a.formatQueryString=function(a,b){if(null==a)throw new Error("You must specify data.");var c=[];for(var d in a)c.push(d+"="+escape(a[d]));return b&&(c=c.concat(b)),c.join("&")},a.buildPath=function(a,b){if(null==b)return a;var c=[],d=a.indexOf("?");if(-1!=d){var e=a.slice(d+1);c=c.concat(e.split("&"))}return-1!=d?a.slice(0,d)+"?"+this._formatQueryString(b,c):a+"?"+this._formatQueryString(b,c)},a.isCrossDomain=function(a){var b=document.createElement("a");b.href=a.src;var c=document.createElement("a");c.href=location.href;var d=""!=b.hostname&&(b.port!=c.port||b.protocol!=c.protocol||b.hostname!=c.hostname);return d},a.isLocal=function(a){var b=document.createElement("a");return b.href=a.src,""==b.hostname&&"file:"==b.protocol},a.isBinary=function(a){switch(a){case createjs.AbstractLoader.IMAGE:case createjs.AbstractLoader.BINARY:return!0;default:return!1}},a.isImageTag=function(a){return a instanceof HTMLImageElement},a.isAudioTag=function(a){return window.HTMLAudioElement?a instanceof HTMLAudioElement:!1},a.isVideoTag=function(a){return window.HTMLVideoElement?a instanceof HTMLVideoElement:void 0},a.isText=function(a){switch(a){case createjs.AbstractLoader.TEXT:case createjs.AbstractLoader.JSON:case createjs.AbstractLoader.MANIFEST:case createjs.AbstractLoader.XML:case createjs.AbstractLoader.CSS:case createjs.AbstractLoader.SVG:case createjs.AbstractLoader.JAVASCRIPT:return!0;
default:return!1}},a.getTypeByExtension=function(a){if(null==a)return createjs.AbstractLoader.TEXT;switch(a.toLowerCase()){case"jpeg":case"jpg":case"gif":case"png":case"webp":case"bmp":return createjs.AbstractLoader.IMAGE;case"ogg":case"mp3":case"webm":return createjs.AbstractLoader.SOUND;case"mp4":case"webm":case"ts":return createjs.AbstractLoader.VIDEO;case"json":return createjs.AbstractLoader.JSON;case"xml":return createjs.AbstractLoader.XML;case"css":return createjs.AbstractLoader.CSS;case"js":return createjs.AbstractLoader.JAVASCRIPT;case"svg":return createjs.AbstractLoader.SVG;default:return createjs.AbstractLoader.TEXT}},createjs.RequestUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.EventDispatcher_constructor(),this.loaded=!1,this.canceled=!1,this.progress=0,this.type=c,this.resultFormatter=null,this._item=a?createjs.LoadItem.create(a):null,this._preferXHR=b,this._result=null,this._rawResult=null,this._loadedItems=null,this._tagSrcAttribute=null,this._tag=null}var b=createjs.extend(a,createjs.EventDispatcher),c=a;c.POST="POST",c.GET="GET",c.BINARY="binary",c.CSS="css",c.IMAGE="image",c.JAVASCRIPT="javascript",c.JSON="json",c.JSONP="jsonp",c.MANIFEST="manifest",c.SOUND="sound",c.VIDEO="video",c.SPRITESHEET="spritesheet",c.SVG="svg",c.TEXT="text",c.XML="xml",b.getItem=function(){return this._item},b.getResult=function(a){return a?this._rawResult:this._result},b.getTag=function(){return this._tag},b.setTag=function(a){this._tag=a},b.load=function(){this._createRequest(),this._request.on("complete",this,this),this._request.on("progress",this,this),this._request.on("loadStart",this,this),this._request.on("abort",this,this),this._request.on("timeout",this,this),this._request.on("error",this,this);var a=new createjs.Event("initialize");a.loader=this._request,this.dispatchEvent(a),this._request.load()},b.cancel=function(){this.canceled=!0,this.destroy()},b.destroy=function(){this._request&&(this._request.removeAllEventListeners(),this._request.destroy()),this._request=null,this._item=null,this._rawResult=null,this._result=null,this._loadItems=null,this.removeAllEventListeners()},b.getLoadedItems=function(){return this._loadedItems},b._createRequest=function(){this._request=this._preferXHR?new createjs.XHRRequest(this._item):new createjs.TagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},b._createTag=function(){return null},b._sendLoadStart=function(){this._isCanceled()||this.dispatchEvent("loadstart")},b._sendProgress=function(a){if(!this._isCanceled()){var b=null;"number"==typeof a?(this.progress=a,b=new createjs.ProgressEvent(this.progress)):(b=a,this.progress=a.loaded/a.total,b.progress=this.progress,(isNaN(this.progress)||1/0==this.progress)&&(this.progress=0)),this.hasEventListener("progress")&&this.dispatchEvent(b)}},b._sendComplete=function(){if(!this._isCanceled()){this.loaded=!0;var a=new createjs.Event("complete");a.rawResult=this._rawResult,null!=this._result&&(a.result=this._result),this.dispatchEvent(a)}},b._sendError=function(a){!this._isCanceled()&&this.hasEventListener("error")&&(null==a&&(a=new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),this.dispatchEvent(a))},b._isCanceled=function(){return null==window.createjs||this.canceled?!0:!1},b.resultFormatter=null,b.handleEvent=function(a){switch(a.type){case"complete":this._rawResult=a.target._response;var b=this.resultFormatter&&this.resultFormatter(this),c=this;b instanceof Function?b(function(a){c._result=a,c._sendComplete()}):(this._result=b||this._rawResult,this._sendComplete());break;case"progress":this._sendProgress(a);break;case"error":this._sendError(a);break;case"loadstart":this._sendLoadStart();break;case"abort":case"timeout":this._isCanceled()||this.dispatchEvent(a.type)}},b.buildPath=function(a,b){return createjs.RequestUtils.buildPath(a,b)},b.toString=function(){return"[PreloadJS AbstractLoader]"},createjs.AbstractLoader=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.AbstractLoader_constructor(a,b,c),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src"}var b=createjs.extend(a,createjs.AbstractLoader);b.load=function(){this._tag||(this._tag=this._createTag(this._item.src)),this._tag.preload="auto",this._tag.load(),this.AbstractLoader_load()},b._createTag=function(){},b._createRequest=function(){this._request=this._preferXHR?new createjs.XHRRequest(this._item):new createjs.MediaTagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},b._formatResult=function(a){return this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.onstalled=null,this._preferXHR&&(a.getTag().src=a.getResult(!0)),a.getTag()},createjs.AbstractMediaLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";var a=function(a){this._item=a},b=createjs.extend(a,createjs.EventDispatcher);b.load=function(){},b.destroy=function(){},b.cancel=function(){},createjs.AbstractRequest=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.AbstractRequest_constructor(a),this._tag=b,this._tagSrcAttribute=c,this._loadedHandler=createjs.proxy(this._handleTagComplete,this),this._addedToDOM=!1,this._startTagVisibility=null}var b=createjs.extend(a,createjs.AbstractRequest);b.load=function(){null==this._tag.parentNode&&(window.document.body.appendChild(this._tag),this._addedToDOM=!0),this._tag.onload=createjs.proxy(this._handleTagComplete,this),this._tag.onreadystatechange=createjs.proxy(this._handleReadyStateChange,this);var a=new createjs.Event("initialize");a.loader=this._tag,this.dispatchEvent(a),this._hideTag(),this._tag[this._tagSrcAttribute]=this._item.src},b.destroy=function(){this._clean(),this._tag=null,this.AbstractRequest_destroy()},b._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this._tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleTagComplete()},b._handleTagComplete=function(){this._rawResult=this._tag,this._result=this.resultFormatter&&this.resultFormatter(this)||this._rawResult,this._clean(),this._showTag(),this.dispatchEvent("complete")},b._clean=function(){this._tag.onload=null,this._tag.onreadystatechange=null,this._addedToDOM&&null!=this._tag.parentNode&&this._tag.parentNode.removeChild(this._tag)},b._hideTag=function(){this._startTagVisibility=this._tag.style.visibility,this._tag.style.visibility="hidden"},b._showTag=function(){this._tag.style.visibility=this._startTagVisibility},b._handleStalled=function(){},createjs.TagRequest=createjs.promote(a,"AbstractRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.AbstractRequest_constructor(a),this._tag=b,this._tagSrcAttribute=c,this._loadedHandler=createjs.proxy(this._handleTagComplete,this)}var b=createjs.extend(a,createjs.TagRequest);b.load=function(){this._tag.onstalled=createjs.proxy(this._handleStalled,this),this._tag.onprogress=createjs.proxy(this._handleProgress,this),this._tag.addEventListener&&this._tag.addEventListener("canplaythrough",this._loadedHandler,!1),this.TagRequest_load()},b._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this._tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleTagComplete()},b._handleStalled=function(){},b._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.ProgressEvent(a.loaded,a.total);this.dispatchEvent(b)}},b._clean=function(){this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.onstalled=null,this._tag.onprogress=null,this.TagRequest__clean()},createjs.MediaTagRequest=createjs.promote(a,"TagRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractRequest_constructor(a),this._request=null,this._loadTimeout=null,this._xhrLevel=1,this._response=null,this._rawResponse=null,this._canceled=!1,this._handleLoadStartProxy=createjs.proxy(this._handleLoadStart,this),this._handleProgressProxy=createjs.proxy(this._handleProgress,this),this._handleAbortProxy=createjs.proxy(this._handleAbort,this),this._handleErrorProxy=createjs.proxy(this._handleError,this),this._handleTimeoutProxy=createjs.proxy(this._handleTimeout,this),this._handleLoadProxy=createjs.proxy(this._handleLoad,this),this._handleReadyStateChangeProxy=createjs.proxy(this._handleReadyStateChange,this),!this._createXHR(a)}var b=createjs.extend(a,createjs.AbstractRequest);a.ACTIVEX_VERSIONS=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],b.getResult=function(a){return a&&this._rawResponse?this._rawResponse:this._response},b.cancel=function(){this.canceled=!0,this._clean(),this._request.abort()},b.load=function(){if(null==this._request)return void this._handleError();this._request.addEventListener("loadstart",this._handleLoadStartProxy,!1),this._request.addEventListener("progress",this._handleProgressProxy,!1),this._request.addEventListener("abort",this._handleAbortProxy,!1),this._request.addEventListener("error",this._handleErrorProxy,!1),this._request.addEventListener("timeout",this._handleTimeoutProxy,!1),this._request.addEventListener("load",this._handleLoadProxy,!1),this._request.addEventListener("readystatechange",this._handleReadyStateChangeProxy,!1),1==this._xhrLevel&&(this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout));try{this._item.values&&this._item.method!=createjs.AbstractLoader.GET?this._item.method==createjs.AbstractLoader.POST&&this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)):this._request.send()}catch(a){this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND",null,a))}},b.setResponseType=function(a){this._request.responseType=a},b.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders instanceof Function?this._request.getAllResponseHeaders():null},b.getResponseHeader=function(a){return this._request.getResponseHeader instanceof Function?this._request.getResponseHeader(a):null},b._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.ProgressEvent(a.loaded,a.total);this.dispatchEvent(b)}},b._handleLoadStart=function(){clearTimeout(this._loadTimeout),this.dispatchEvent("loadstart")},b._handleAbort=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED",null,a))},b._handleError=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent(a.message))},b._handleReadyStateChange=function(){4==this._request.readyState&&this._handleLoad()},b._handleLoad=function(){if(!this.loaded){this.loaded=!0;var a=this._checkError();if(a)return void this._handleError(a);this._response=this._getResponse(),this._clean(),this.dispatchEvent(new createjs.Event("complete"))}},b._handleTimeout=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT",null,a))},b._checkError=function(){var a=parseInt(this._request.status);switch(a){case 404:case 0:return new Error(a)}return null},b._getResponse=function(){if(null!=this._response)return this._response;if(null!=this._request.response)return this._request.response;try{if(null!=this._request.responseText)return this._request.responseText}catch(a){}try{if(null!=this._request.responseXML)return this._request.responseXML}catch(a){}return null},b._createXHR=function(a){var b=createjs.RequestUtils.isCrossDomain(a),c={},d=null;if(window.XMLHttpRequest)d=new XMLHttpRequest,b&&void 0===d.withCredentials&&window.XDomainRequest&&(d=new XDomainRequest);else{for(var e=0,f=s.ACTIVEX_VERSIONS.length;f>e;e++){{s.ACTIVEX_VERSIONS[e]}try{d=new ActiveXObject(axVersions);break}catch(g){}}if(null==d)return!1}a.mimeType&&d.overrideMimeType&&d.overrideMimeType(a.mimeType),this._xhrLevel="string"==typeof d.responseType?2:1;var h=null;if(h=a.method==createjs.AbstractLoader.GET?createjs.RequestUtils.buildPath(a.src,a.values):a.src,d.open(a.method||createjs.AbstractLoader.GET,h,!0),b&&d instanceof XMLHttpRequest&&1==this._xhrLevel&&(c.Origin=location.origin),a.values&&a.method==createjs.AbstractLoader.POST&&(c["Content-Type"]="application/x-www-form-urlencoded"),b||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest"),a.headers)for(var i in a.headers)c[i]=a.headers[i];for(i in c)d.setRequestHeader(i,c[i]);return d instanceof XMLHttpRequest&&void 0!==a.withCredentials&&(d.withCredentials=a.withCredentials),this._request=d,!0},b._clean=function(){clearTimeout(this._loadTimeout),this._request.removeEventListener("loadstart",this._handleLoadStartProxy),this._request.removeEventListener("progress",this._handleProgressProxy),this._request.removeEventListener("abort",this._handleAbortProxy),this._request.removeEventListener("error",this._handleErrorProxy),this._request.removeEventListener("timeout",this._handleTimeoutProxy),this._request.removeEventListener("load",this._handleLoadProxy),this._request.removeEventListener("readystatechange",this._handleReadyStateChangeProxy)},b.toString=function(){return"[PreloadJS XHRRequest]"},createjs.XHRRequest=createjs.promote(a,"AbstractRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.AbstractLoader_constructor(),this.init(a,b,c)}var b=createjs.extend(a,createjs.AbstractLoader),c=a;b.init=function(a,b,c){this.useXHR=!0,this.preferXHR=!0,this._preferXHR=!0,this.setPreferXHR(a),this.stopOnError=!1,this.maintainScriptOrder=!0,this.next=null,this._paused=!1,this._basePath=b,this._crossOrigin=c,this._typeCallbacks={},this._extensionCallbacks={},this._loadStartWasDispatched=!1,this._maxConnections=1,this._currentlyLoadingScript=null,this._currentLoads=[],this._loadQueue=[],this._loadQueueBackup=[],this._loadItemsById={},this._loadItemsBySrc={},this._loadedResults={},this._loadedRawResults={},this._numItems=0,this._numItemsLoaded=0,this._scriptOrder=[],this._loadedScripts=[],this._lastProgress=0/0,this._availableLoaders=[createjs.ImageLoader,createjs.JavaScriptLoader,createjs.CSSLoader,createjs.JSONLoader,createjs.JSONPLoader,createjs.SoundLoader,createjs.ManifestLoader,createjs.SpriteSheetLoader,createjs.XMLLoader,createjs.SVGLoader,createjs.BinaryLoader,createjs.VideoLoader,createjs.TextLoader],this._defaultLoaderLength=this._availableLoaders.length},c.loadTimeout=8e3,c.LOAD_TIMEOUT=0,c.BINARY=createjs.AbstractLoader.BINARY,c.CSS=createjs.AbstractLoader.CSS,c.IMAGE=createjs.AbstractLoader.IMAGE,c.JAVASCRIPT=createjs.AbstractLoader.JAVASCRIPT,c.JSON=createjs.AbstractLoader.JSON,c.JSONP=createjs.AbstractLoader.JSONP,c.MANIFEST=createjs.AbstractLoader.MANIFEST,c.SOUND=createjs.AbstractLoader.SOUND,c.VIDEO=createjs.AbstractLoader.VIDEO,c.SVG=createjs.AbstractLoader.SVG,c.TEXT=createjs.AbstractLoader.TEXT,c.XML=createjs.AbstractLoader.XML,c.POST=createjs.AbstractLoader.POST,c.GET=createjs.AbstractLoader.GET,b.registerLoader=function(a){if(!a||!a.canLoadItem)throw new Error("loader is of an incorrect type.");if(-1!=this._availableLoaders.indexOf(a))throw new Error("loader already exists.");this._availableLoaders.unshift(a)},b.unregisterLoader=function(a){var b=this._availableLoaders.indexOf(a);-1!=b&&b<this._defaultLoaderLength-1&&this._availableLoaders.splice(b,1)},b.setUseXHR=function(a){return this.setPreferXHR(a)},b.setPreferXHR=function(a){return this.preferXHR=0!=a&&null!=window.XMLHttpRequest,this.preferXHR},b.removeAll=function(){this.remove()},b.remove=function(a){var b=null;if(!a||a instanceof Array){if(a)b=a;else if(arguments.length>0)return}else b=[a];var c=!1;if(b){for(;b.length;){var d=b.pop(),e=this.getResult(d);for(f=this._loadQueue.length-1;f>=0;f--)if(g=this._loadQueue[f].getItem(),g.id==d||g.src==d){this._loadQueue.splice(f,1)[0].cancel();break}for(f=this._loadQueueBackup.length-1;f>=0;f--)if(g=this._loadQueueBackup[f].getItem(),g.id==d||g.src==d){this._loadQueueBackup.splice(f,1)[0].cancel();break}if(e)delete this._loadItemsById[e.id],delete this._loadItemsBySrc[e.src],this._disposeItem(e);else for(var f=this._currentLoads.length-1;f>=0;f--){var g=this._currentLoads[f].getItem();if(g.id==d||g.src==d){this._currentLoads.splice(f,1)[0].cancel(),c=!0;break}}}c&&this._loadNext()}else{this.close();for(var h in this._loadItemsById)this._disposeItem(this._loadItemsById[h]);this.init(this.preferXHR,this._basePath)}},b.reset=function(){this.close();for(var a in this._loadItemsById)this._disposeItem(this._loadItemsById[a]);for(var b=[],c=0,d=this._loadQueueBackup.length;d>c;c++)b.push(this._loadQueueBackup[c].getItem());this.loadManifest(b,!1)},b.installPlugin=function(a){if(null!=a&&null!=a.getPreloadHandlers){var b=a.getPreloadHandlers();if(b.scope=a,null!=b.types)for(var c=0,d=b.types.length;d>c;c++)this._typeCallbacks[b.types[c]]=b;if(null!=b.extensions)for(c=0,d=b.extensions.length;d>c;c++)this._extensionCallbacks[b.extensions[c]]=b}},b.setMaxConnections=function(a){this._maxConnections=a,!this._paused&&this._loadQueue.length>0&&this._loadNext()},b.loadFile=function(a,b,c){if(null==a){var d=new createjs.ErrorEvent("PRELOAD_NO_FILE");return void this._sendError(d)}this._addItem(a,null,c),this.setPaused(b!==!1?!1:!0)},b.loadManifest=function(a,b,d){var e=null,f=null;if(a instanceof Array){if(0==a.length){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");return void this._sendError(g)}e=a}else if("string"==typeof a)e=[{src:a,type:c.MANIFEST}];else{if("object"!=typeof a){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");return void this._sendError(g)}if(void 0!==a.src){if(null==a.type)a.type=c.MANIFEST;else if(a.type!=c.MANIFEST){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");this._sendError(g)}e=[a]}else void 0!==a.manifest&&(e=a.manifest,f=a.path)}for(var h=0,i=e.length;i>h;h++)this._addItem(e[h],f,d);this.setPaused(b!==!1?!1:!0)},b.load=function(){this.setPaused(!1)},b.getItem=function(a){return this._loadItemsById[a]||this._loadItemsBySrc[a]},b.getResult=function(a,b){var c=this._loadItemsById[a]||this._loadItemsBySrc[a];if(null==c)return null;var d=c.id;return b&&this._loadedRawResults[d]?this._loadedRawResults[d]:this._loadedResults[d]},b.getItems=function(a){for(var b=[],c=0,d=this._loadQueueBackup.length;d>c;c++){var e=this._loadQueueBackup[c],f=e.getItem();(a!==!0||e.loaded)&&b.push({item:f,result:this.getResult(f.id),rawResult:this.getResult(f.id,!0)})}return b},b.setPaused=function(a){this._paused=a,this._paused||this._loadNext()},b.close=function(){for(;this._currentLoads.length;)this._currentLoads.pop().cancel();this._scriptOrder.length=0,this._loadedScripts.length=0,this.loadStartWasDispatched=!1,this._itemCount=0,this._lastProgress=0/0},b._addItem=function(a,b,c){var d=this._createLoadItem(a,b,c);if(null!=d){var e=this._createLoader(d);null!=e&&(d._loader=e,this._loadQueue.push(e),this._loadQueueBackup.push(e),this._numItems++,this._updateProgress(),(this.maintainScriptOrder&&d.type==createjs.LoadQueue.JAVASCRIPT||d.maintainOrder===!0)&&(this._scriptOrder.push(d),this._loadedScripts.push(null)))}},b._createLoadItem=function(a,b,d){var e=createjs.LoadItem.create(a);if(null==e)return null;var f=createjs.RequestUtils.parseURI(e.src);f.extension&&(e.ext=f.extension),null==e.type&&(e.type=createjs.RequestUtils.getTypeByExtension(e.ext));var g="",h=d||this._basePath,i=e.src;if(!f.absolute&&!f.relative)if(b){g=b;var j=createjs.RequestUtils.parseURI(b);i=b+i,null==h||j.absolute||j.relative||(g=h+g)}else null!=h&&(g=h);e.src=g+e.src,e.path=g,(void 0===e.id||null===e.id||""===e.id)&&(e.id=i);var k=this._typeCallbacks[e.type]||this._extensionCallbacks[e.ext];if(k){var l=k.callback.call(k.scope,e,this);if(l===!1)return null;l===!0||null!=l&&(e._loader=l),f=createjs.RequestUtils.parseURI(e.src),null!=f.extension&&(e.ext=f.extension)}return this._loadItemsById[e.id]=e,this._loadItemsBySrc[e.src]=e,null==e.loadTimeout&&(e.loadTimeout=c.loadTimeout),null==e.crossOrigin&&(e.crossOrigin=this._crossOrigin),e},b._createLoader=function(a){if(null!=a._loader)return a._loader;for(var b=this.preferXHR,c=0;c<this._availableLoaders.length;c++){var d=this._availableLoaders[c];if(d&&d.canLoadItem(a))return new d(a,b)}return null},b._loadNext=function(){if(!this._paused){this._loadStartWasDispatched||(this._sendLoadStart(),this._loadStartWasDispatched=!0),this._numItems==this._numItemsLoaded?(this.loaded=!0,this._sendComplete(),this.next&&this.next.load&&this.next.load()):this.loaded=!1;for(var a=0;a<this._loadQueue.length&&!(this._currentLoads.length>=this._maxConnections);a++){var b=this._loadQueue[a];this._canStartLoad(b)&&(this._loadQueue.splice(a,1),a--,this._loadItem(b))}}},b._loadItem=function(a){a.on("fileload",this._handleFileLoad,this),a.on("progress",this._handleProgress,this),a.on("complete",this._handleFileComplete,this),a.on("error",this._handleError,this),a.on("fileerror",this._handleFileError,this),this._currentLoads.push(a),this._sendFileStart(a.getItem()),a.load()},b._handleFileLoad=function(a){a.target=null,this.dispatchEvent(a)},b._handleFileError=function(a){var b=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,a.item);this._sendError(b)},b._handleError=function(a){var b=a.target;this._numItemsLoaded++,this._finishOrderedItem(b,!0),this._updateProgress();var c=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,b.getItem());this._sendError(c),this.stopOnError||(this._removeLoadItem(b),this._loadNext())},b._handleFileComplete=function(a){var b=a.target,c=b.getItem(),d=b.getResult();this._loadedResults[c.id]=d;var e=b.getResult(!0);null!=e&&e!==d&&(this._loadedRawResults[c.id]=e),this._saveLoadedItems(b),this._removeLoadItem(b),this._finishOrderedItem(b)||this._processFinishedLoad(c,b)},b._saveLoadedItems=function(a){var b=a.getLoadedItems();if(null!==b)for(var c=0;c<b.length;c++){var d=b[c].item;this._loadItemsBySrc[d.src]=d,this._loadItemsById[d.id]=d,this._loadedResults[d.id]=b[c].result,this._loadedRawResults[d.id]=b[c].rawResult}},b._finishOrderedItem=function(a,b){var c=a.getItem();if(this.maintainScriptOrder&&c.type==createjs.LoadQueue.JAVASCRIPT||c.maintainOrder){a instanceof createjs.JavaScriptLoader&&(this._currentlyLoadingScript=!1);var d=createjs.indexOf(this._scriptOrder,c);return-1==d?!1:(this._loadedScripts[d]=b===!0?!0:c,this._checkScriptLoadOrder(),!0)}return!1},b._checkScriptLoadOrder=function(){for(var a=this._loadedScripts.length,b=0;a>b;b++){var c=this._loadedScripts[b];if(null===c)break;if(c!==!0){var d=this._loadedResults[c.id];c.type==createjs.LoadQueue.JAVASCRIPT&&(document.body||document.getElementsByTagName("body")[0]).appendChild(d);var e=c._loader;this._processFinishedLoad(c,e),this._loadedScripts[b]=!0}}},b._processFinishedLoad=function(a,b){this._numItemsLoaded++,this._updateProgress(),this._sendFileComplete(a,b),this._loadNext()},b._canStartLoad=function(a){if(!this.maintainScriptOrder||a.preferXHR)return!0;var b=a.getItem();if(b.type!=createjs.LoadQueue.JAVASCRIPT)return!0;if(this._currentlyLoadingScript)return!1;for(var c=this._scriptOrder.indexOf(b),d=0;c>d;){var e=this._loadedScripts[d];if(null==e)return!1;d++}return this._currentlyLoadingScript=!0,!0},b._removeLoadItem=function(a){var b=a.getItem();delete b._loader;for(var c=this._currentLoads.length,d=0;c>d;d++)if(this._currentLoads[d]==a){this._currentLoads.splice(d,1);break}},b._handleProgress=function(a){var b=a.target;this._sendFileProgress(b.getItem(),b.progress),this._updateProgress()},b._updateProgress=function(){var a=this._numItemsLoaded/this._numItems,b=this._numItems-this._numItemsLoaded;if(b>0){for(var c=0,d=0,e=this._currentLoads.length;e>d;d++)c+=this._currentLoads[d].progress;a+=c/b*(b/this._numItems)}this._lastProgress!=a&&(this._sendProgress(a),this._lastProgress=a)},b._disposeItem=function(a){delete this._loadedResults[a.id],delete this._loadedRawResults[a.id],delete this._loadItemsById[a.id],delete this._loadItemsBySrc[a.src]},b._sendFileProgress=function(a,b){if(this._isCanceled())return void this._cleanUp();if(this.hasEventListener("fileprogress")){var c=new createjs.Event("fileprogress");c.progress=b,c.loaded=b,c.total=1,c.item=a,this.dispatchEvent(c)}},b._sendFileComplete=function(a,b){if(!this._isCanceled()){var c=new createjs.Event("fileload");c.loader=b,c.item=a,c.result=this._loadedResults[a.id],c.rawResult=this._loadedRawResults[a.id],a.completeHandler&&a.completeHandler(c),this.hasEventListener("fileload")&&this.dispatchEvent(c)}},b._sendFileStart=function(a){var b=new createjs.Event("filestart");b.item=a,this.hasEventListener("filestart")&&this.dispatchEvent(b)},b.toString=function(){return"[PreloadJS LoadQueue]"},createjs.LoadQueue=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.TEXT)}var b=(createjs.extend(a,createjs.AbstractLoader),a);b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.TEXT},createjs.TextLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.BINARY),this.on("initialize",this._updateXHR,this)}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.BINARY},b._updateXHR=function(a){a.loader.setResponseType("arraybuffer")},createjs.BinaryLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.CSS),this.resultFormatter=this._formatResult,this._tagSrcAttribute="href",this._tag=document.createElement(b?"style":"link"),this._tag.rel="stylesheet",this._tag.type="text/css"}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.CSS},b._formatResult=function(a){if(this._preferXHR){var b=a.getTag(),c=document.getElementsByTagName("head")[0];if(c.appendChild(b),b.styleSheet)b.styleSheet.cssText=a.getResult(!0);else{var d=document.createTextNode(a.getResult(!0));b.appendChild(d)}}else b=this._tag;return b},createjs.CSSLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.IMAGE),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",createjs.RequestUtils.isImageTag(a)?this._tag=a:createjs.RequestUtils.isImageTag(a.src)?this._tag=a.src:createjs.RequestUtils.isImageTag(a.tag)&&(this._tag=a.tag),null!=this._tag?this._preferXHR=!1:this._tag=document.createElement("img"),this.on("initialize",this._updateXHR,this)}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.IMAGE},b.load=function(){if(""!=this._tag.src&&this._tag.complete)return void this._sendComplete();var a=this._item.crossOrigin;1==a&&(a="Anonymous"),null==a||createjs.RequestUtils.isLocal(this._item.src)||(this._tag.crossOrigin=a),this.AbstractLoader_load()},b._updateXHR=function(a){a.loader.mimeType="text/plain; charset=x-user-defined-binary",a.loader.setResponseType&&a.loader.setResponseType("blob")},b._formatResult=function(a){var b=this;return function(c){var d=b._tag,e=window.URL||window.webkitURL;if(b._preferXHR)if(e){var f=e.createObjectURL(a.getResult(!0));d.src=f,d.onload=function(){e.revokeObjectURL(b.src)}}else d.src=a.getItem().src;else;d.complete?c(d):d.onload=function(){c(this)}}},createjs.ImageLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.JAVASCRIPT),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.setTag(document.createElement("script"))}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JAVASCRIPT},b._formatResult=function(a){var b=a.getTag();return this._preferXHR&&(b.text=a.getResult(!0)),b},createjs.JavaScriptLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.JSON),this.resultFormatter=this._formatResult}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JSON&&!a._loadAsJSONP},b._formatResult=function(a){var b=null;try{b=createjs.DataUtils.parseJSON(a.getResult(!0))}catch(c){var d=new createjs.ErrorEvent("JSON_FORMAT",null,c);return this._sendError(d),c}return b},createjs.JSONLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!1,createjs.AbstractLoader.JSONP),this.setTag(document.createElement("script")),this.getTag().type="text/javascript"}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JSONP||a._loadAsJSONP},b.cancel=function(){this.AbstractLoader_cancel(),this._dispose()},b.load=function(){if(null==this._item.callback)throw new Error("callback is required for loading JSONP requests.");if(null!=window[this._item.callback])throw new Error("JSONP callback '"+this._item.callback+"' already exists on window. You need to specify a different callback or re-name the current one.");window[this._item.callback]=createjs.proxy(this._handleLoad,this),window.document.body.appendChild(this._tag),this._tag.src=this._item.src},b._handleLoad=function(a){this._result=this._rawResult=a,this._sendComplete(),this._dispose()},b._dispose=function(){window.document.body.removeChild(this._tag),delete window[this._item.callback]},createjs.JSONPLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,null,createjs.AbstractLoader.MANIFEST),this._manifestQueue=null}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.MANIFEST_PROGRESS=.25,c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.MANIFEST},b.load=function(){this.AbstractLoader_load()},b._createRequest=function(){var a=this._item.callback;this._request=null!=a?new createjs.JSONPLoader(this._item):new createjs.JSONLoader(this._item)},b.handleEvent=function(a){switch(a.type){case"complete":return this._rawResult=a.target.getResult(!0),this._result=a.target.getResult(),this._sendProgress(c.MANIFEST_PROGRESS),void this._loadManifest(this._result);case"progress":return a.loaded*=c.MANIFEST_PROGRESS,this.progress=a.loaded/a.total,(isNaN(this.progress)||1/0==this.progress)&&(this.progress=0),void this._sendProgress(a)}this.AbstractLoader_handleEvent(a)},b.destroy=function(){this.AbstractLoader_destroy(),this._manifestQueue.close()},b._loadManifest=function(a){if(a&&a.manifest){var b=this._manifestQueue=new createjs.LoadQueue;b.on("fileload",this._handleManifestFileLoad,this),b.on("progress",this._handleManifestProgress,this),b.on("complete",this._handleManifestComplete,this,!0),b.on("error",this._handleManifestError,this,!0),b.loadManifest(a)}else this._sendComplete()},b._handleManifestFileLoad=function(a){a.target=null,this.dispatchEvent(a)},b._handleManifestComplete=function(){this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},b._handleManifestProgress=function(a){this.progress=a.progress*(1-c.MANIFEST_PROGRESS)+c.MANIFEST_PROGRESS,this._sendProgress(this.progress)},b._handleManifestError=function(a){var b=new createjs.Event("fileerror");b.item=a.data,this.dispatchEvent(b)},createjs.ManifestLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractMediaLoader_constructor(a,b,createjs.AbstractLoader.SOUND),createjs.RequestUtils.isAudioTag(a)?this._tag=a:createjs.RequestUtils.isAudioTag(a.src)?this._tag=a:createjs.RequestUtils.isAudioTag(a.tag)&&(this._tag=createjs.RequestUtils.isAudioTag(a)?a:a.src),null!=this._tag&&(this._preferXHR=!1)
}var b=createjs.extend(a,createjs.AbstractMediaLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SOUND},b._createTag=function(a){var b=document.createElement("audio");return b.autoplay=!1,b.preload="none",b.src=a,b},createjs.SoundLoader=createjs.promote(a,"AbstractMediaLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractMediaLoader_constructor(a,b,createjs.AbstractLoader.VIDEO),createjs.RequestUtils.isVideoTag(a)||createjs.RequestUtils.isVideoTag(a.src)?(this.setTag(createjs.RequestUtils.isVideoTag(a)?a:a.src),this._preferXHR=!1):this.setTag(this._createTag())}var b=createjs.extend(a,createjs.AbstractMediaLoader),c=a;b._createTag=function(){return document.createElement("video")},c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.VIDEO},createjs.VideoLoader=createjs.promote(a,"AbstractMediaLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,null,createjs.AbstractLoader.SPRITESHEET),this._manifestQueue=null}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.SPRITESHEET_PROGRESS=.25,c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SPRITESHEET},b.destroy=function(){this.AbstractLoader_destroy,this._manifestQueue.close()},b._createRequest=function(){var a=this._item.callback;this._request=null!=a&&a instanceof Function?new createjs.JSONPLoader(this._item):new createjs.JSONLoader(this._item)},b.handleEvent=function(a){switch(a.type){case"complete":return this._rawResult=a.target.getResult(!0),this._result=a.target.getResult(),this._sendProgress(c.SPRITESHEET_PROGRESS),void this._loadManifest(this._result);case"progress":return a.loaded*=c.SPRITESHEET_PROGRESS,this.progress=a.loaded/a.total,(isNaN(this.progress)||1/0==this.progress)&&(this.progress=0),void this._sendProgress(a)}this.AbstractLoader_handleEvent(a)},b._loadManifest=function(a){if(a&&a.images){var b=this._manifestQueue=new createjs.LoadQueue;b.on("complete",this._handleManifestComplete,this,!0),b.on("fileload",this._handleManifestFileLoad,this),b.on("progress",this._handleManifestProgress,this),b.on("error",this._handleManifestError,this,!0),b.loadManifest(a.images)}},b._handleManifestFileLoad=function(a){var b=a.result;if(null!=b){var c=this.getResult().images,d=c.indexOf(a.item.src);c[d]=b}},b._handleManifestComplete=function(){this._result=new createjs.SpriteSheet(this._result),this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},b._handleManifestProgress=function(a){this.progress=a.progress*(1-c.SPRITESHEET_PROGRESS)+c.SPRITESHEET_PROGRESS,this._sendProgress(this.progress)},b._handleManifestError=function(a){var b=new createjs.Event("fileerror");b.item=a.data,this.dispatchEvent(b)},createjs.SpriteSheetLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.SVG),this.resultFormatter=this._formatResult,this._tagSrcAttribute="data",b?this.setTag(document.createElement("svg")):(this.setTag(document.createElement("object")),this.getTag().type="image/svg+xml"),this.getTag().style.visibility="hidden"}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SVG},b._formatResult=function(a){var b=createjs.DataUtils.parseXML(a.getResult(!0),"text/xml"),c=a.getTag();return!this._preferXHR&&document.body.contains(c)&&document.body.removeChild(c),null!=b.documentElement?(c.appendChild(b.documentElement),c.style.visibility="visible",c):b},createjs.SVGLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.XML),this.resultFormatter=this._formatResult}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.XML},b._formatResult=function(a){return createjs.DataUtils.parseXML(a.getResult(!0),"text/xml")},createjs.XMLLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){var a=createjs.SoundJS=createjs.SoundJS||{};a.version="0.6.0",a.buildDate="Thu, 11 Dec 2014 23:32:09 GMT"}(),this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";createjs.proxy=function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){return a.apply(b,Array.prototype.slice.call(arguments,0).concat(c))}}}(),this.createjs=this.createjs||{},function(){"use strict";var a=Object.defineProperty?!0:!1,b={};try{Object.defineProperty(b,"bar",{get:function(){return this._bar},set:function(a){this._bar=a}})}catch(c){a=!1}createjs.definePropertySupported=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Sound cannot be instantiated"}function b(a,b){this.init(a,b)}var c=a;c.INTERRUPT_ANY="any",c.INTERRUPT_EARLY="early",c.INTERRUPT_LATE="late",c.INTERRUPT_NONE="none",c.PLAY_INITED="playInited",c.PLAY_SUCCEEDED="playSucceeded",c.PLAY_INTERRUPTED="playInterrupted",c.PLAY_FINISHED="playFinished",c.PLAY_FAILED="playFailed",c.SUPPORTED_EXTENSIONS=["mp3","ogg","mpeg","wav","m4a","mp4","aiff","wma","mid"],c.EXTENSION_MAP={m4a:"mp4"},c.FILE_PATTERN=/^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/,c.defaultInterruptBehavior=c.INTERRUPT_NONE,c.alternateExtensions=[],c.activePlugin=null,c._pluginsRegistered=!1,c._lastID=0,c._masterVolume=1,c._masterMute=!1,c._instances=[],c._idHash={},c._preloadHash={},c.addEventListener=null,c.removeEventListener=null,c.removeAllEventListeners=null,c.dispatchEvent=null,c.hasEventListener=null,c._listeners=null,createjs.EventDispatcher.initialize(c),c.getPreloadHandlers=function(){return{callback:createjs.proxy(c.initLoad,c),types:["sound"],extensions:c.SUPPORTED_EXTENSIONS}},c._handleLoadComplete=function(a){var b=a.target.getItem().src;if(c._preloadHash[b])for(var d=0,e=c._preloadHash[b].length;e>d;d++){var f=c._preloadHash[b][d];if(c._preloadHash[b][d]=!0,c.hasEventListener("fileload")){var a=new createjs.Event("fileload");a.src=f.src,a.id=f.id,a.data=f.data,a.sprite=f.sprite,c.dispatchEvent(a)}}},c._handleLoadError=function(a){var b=a.target.getItem().src;if(c._preloadHash[b])for(var d=0,e=c._preloadHash[b].length;e>d;d++){var f=c._preloadHash[b][d];if(c._preloadHash[b][d]=!1,c.hasEventListener("fileerror")){var a=new createjs.Event("fileerror");a.src=f.src,a.id=f.id,a.data=f.data,a.sprite=f.sprite,c.dispatchEvent(a)}}},c._registerPlugin=function(a){return a.isSupported()?(c.activePlugin=new a,!0):!1},c.registerPlugins=function(a){c._pluginsRegistered=!0;for(var b=0,d=a.length;d>b;b++)if(c._registerPlugin(a[b]))return!0;return!1},c.initializeDefaultPlugins=function(){return null!=c.activePlugin?!0:c._pluginsRegistered?!1:c.registerPlugins([createjs.WebAudioPlugin,createjs.HTMLAudioPlugin])?!0:!1},c.isReady=function(){return null!=c.activePlugin},c.getCapabilities=function(){return null==c.activePlugin?null:c.activePlugin._capabilities},c.getCapability=function(a){return null==c.activePlugin?null:c.activePlugin._capabilities[a]},c.initLoad=function(a){return c._registerSound(a)},c._registerSound=function(a){if(!c.initializeDefaultPlugins())return!1;var d=c._parsePath(a.src);if(null==d)return!1;a.src=d.src,a.type="sound";var e=a.data,f=c.activePlugin.defaultNumChannels||null;if(null!=e&&(isNaN(e.channels)?isNaN(e)||(f=parseInt(e)):f=parseInt(e.channels),e.audioSprite))for(var g,h=e.audioSprite.length;h--;)g=e.audioSprite[h],c._idHash[g.id]={src:a.src,startTime:parseInt(g.startTime),duration:parseInt(g.duration)};null!=a.id&&(c._idHash[a.id]={src:a.src});var i=c.activePlugin.register(a,f);return b.create(a.src,f),null!=e&&isNaN(e)?a.data.channels=f||b.maxPerChannel():a.data=f||b.maxPerChannel(),i.type&&(a.type=i.type),i},c.registerSound=function(a,b,d,e){var f={src:a,id:b,data:d};a instanceof Object&&(e=b,f=a),f=createjs.LoadItem.create(f),null!=e&&(f.src=e+a);var g=c._registerSound(f);if(!g)return!1;if(c._preloadHash[f.src]||(c._preloadHash[f.src]=[]),c._preloadHash[f.src].push(f),1==c._preloadHash[f.src].length)g.on("complete",createjs.proxy(this._handleLoadComplete,this)),g.on("error",createjs.proxy(this._handleLoadError,this)),c.activePlugin.preload(g);else if(1==c._preloadHash[f.src][0])return!0;return f},c.registerSounds=function(a,b){var c=[];a.path&&(b?b+=a.path:b=a.path);for(var d=0,e=a.length;e>d;d++)c[d]=createjs.Sound.registerSound(a[d].src,a[d].id,a[d].data,b);return c},c.registerManifest=function(a,b){try{console.log("createjs.Sound.registerManifest is deprecated, please use createjs.Sound.registerSounds.")}catch(c){}return this.registerSounds(a,b)},c.removeSound=function(a,d){if(null==c.activePlugin)return!1;a instanceof Object&&(a=a.src),a=c._getSrcById(a).src,null!=d&&(a=d+a);var e=c._parsePath(a);if(null==e)return!1;a=e.src;for(var f in c._idHash)c._idHash[f].src==a&&delete c._idHash[f];return b.removeSrc(a),delete c._preloadHash[a],c.activePlugin.removeSound(a),!0},c.removeSounds=function(a,b){var c=[];a.path&&(b?b+=a.path:b=a.path);for(var d=0,e=a.length;e>d;d++)c[d]=createjs.Sound.removeSound(a[d].src,b);return c},c.removeManifest=function(a,b){try{console.log("createjs.Sound.removeManifest is deprecated, please use createjs.Sound.removeSounds.")}catch(d){}return c.removeSounds(a,b)},c.removeAllSounds=function(){c._idHash={},c._preloadHash={},b.removeAll(),c.activePlugin&&c.activePlugin.removeAllSounds()},c.loadComplete=function(a){if(!c.isReady())return!1;var b=c._parsePath(a);return a=b?c._getSrcById(b.src).src:c._getSrcById(a).src,1==c._preloadHash[a][0]},c._parsePath=function(a){"string"!=typeof a&&(a=a.toString());var b=a.match(c.FILE_PATTERN);if(null==b)return!1;for(var d=b[4],e=b[5],f=c.getCapabilities(),g=0;!f[e];)if(e=c.alternateExtensions[g++],g>c.alternateExtensions.length)return null;a=a.replace("."+b[5],"."+e);var h={name:d,src:a,extension:e};return h},c.play=function(a,b,d,e,f,g,h,i,j){b instanceof Object&&(d=b.delay,e=b.offset,f=b.loop,g=b.volume,h=b.pan,i=b.startTime,j=b.duration,b=b.interrupt);var k=c.createInstance(a,i,j),l=c._playInstance(k,b,d,e,f,g,h);return l||k._playFailed(),k},c.createInstance=function(a,d,e){if(!c.initializeDefaultPlugins())return new createjs.DefaultSoundInstance(a,d,e);a=c._getSrcById(a);var f=c._parsePath(a.src),g=null;return null!=f&&null!=f.src?(b.create(f.src),null==d&&(d=a.startTime),g=c.activePlugin.create(f.src,d,e||a.duration)):g=new createjs.DefaultSoundInstance(a,d,e),g.uniqueId=c._lastID++,g},c.setVolume=function(a){if(null==Number(a))return!1;if(a=Math.max(0,Math.min(1,a)),c._masterVolume=a,!this.activePlugin||!this.activePlugin.setVolume||!this.activePlugin.setVolume(a))for(var b=this._instances,d=0,e=b.length;e>d;d++)b[d].setMasterVolume(a)},c.getVolume=function(){return c._masterVolume},c.setMute=function(a){if(null==a)return!1;if(this._masterMute=a,!this.activePlugin||!this.activePlugin.setMute||!this.activePlugin.setMute(a))for(var b=this._instances,c=0,d=b.length;d>c;c++)b[c].setMasterMute(a);return!0},c.getMute=function(){return this._masterMute},c.stop=function(){for(var a=this._instances,b=a.length;b--;)a[b].stop()},c._playInstance=function(a,b,d,e,f,g,h){if(b instanceof Object&&(d=b.delay,e=b.offset,f=b.loop,g=b.volume,h=b.pan,b=b.interrupt),b=b||c.defaultInterruptBehavior,null==d&&(d=0),null==e&&(e=a.getPosition()),null==f&&(f=a.loop),null==g&&(g=a.volume),null==h&&(h=a.pan),0==d){var i=c._beginPlaying(a,b,e,f,g,h);if(!i)return!1}else{var j=setTimeout(function(){c._beginPlaying(a,b,e,f,g,h)},d);a.delayTimeoutId=j}return this._instances.push(a),!0},c._beginPlaying=function(a,c,d,e,f,g){if(!b.add(a,c))return!1;var h=a._beginPlaying(d,e,f,g);if(!h){var i=createjs.indexOf(this._instances,a);return i>-1&&this._instances.splice(i,1),!1}return!0},c._getSrcById=function(a){return c._idHash[a]||{src:a}},c._playFinished=function(a){b.remove(a);var c=createjs.indexOf(this._instances,a);c>-1&&this._instances.splice(c,1)},createjs.Sound=a,b.channels={},b.create=function(a,c){var d=b.get(a);return null==d?(b.channels[a]=new b(a,c),!0):!1},b.removeSrc=function(a){var c=b.get(a);return null==c?!1:(c._removeAll(),delete b.channels[a],!0)},b.removeAll=function(){for(var a in b.channels)b.channels[a]._removeAll();b.channels={}},b.add=function(a,c){var d=b.get(a.src);return null==d?!1:d._add(a,c)},b.remove=function(a){var c=b.get(a.src);return null==c?!1:(c._remove(a),!0)},b.maxPerChannel=function(){return d.maxDefault},b.get=function(a){return b.channels[a]};var d=b.prototype;d.constructor=b,d.src=null,d.max=null,d.maxDefault=100,d.length=0,d.init=function(a,b){this.src=a,this.max=b||this.maxDefault,-1==this.max&&(this.max=this.maxDefault),this._instances=[]},d._get=function(a){return this._instances[a]},d._add=function(a,b){return this._getSlot(b,a)?(this._instances.push(a),this.length++,!0):!1},d._remove=function(a){var b=createjs.indexOf(this._instances,a);return-1==b?!1:(this._instances.splice(b,1),this.length--,!0)},d._removeAll=function(){for(var a=this.length-1;a>=0;a--)this._instances[a].stop()},d._getSlot=function(b){var c,d;if(b!=a.INTERRUPT_NONE&&(d=this._get(0),null==d))return!0;for(var e=0,f=this.max;f>e;e++){if(c=this._get(e),null==c)return!0;if(c.playState==a.PLAY_FINISHED||c.playState==a.PLAY_INTERRUPTED||c.playState==a.PLAY_FAILED){d=c;break}b!=a.INTERRUPT_NONE&&(b==a.INTERRUPT_EARLY&&c.getPosition()<d.getPosition()||b==a.INTERRUPT_LATE&&c.getPosition()>d.getPosition())&&(d=c)}return null!=d?(d._interrupt(),this._remove(d),!0):!1},d.toString=function(){return"[Sound SoundChannel]"}}(),this.createjs=this.createjs||{},function(){"use strict";var a=function(a,b,c,d){this.EventDispatcher_constructor(),this.src=a,this.uniqueId=-1,this.playState=null,this.delayTimeoutId=null,this._startTime=Math.max(0,b||0),this._volume=1,createjs.definePropertySupported&&Object.defineProperty(this,"volume",{get:this.getVolume,set:this.setVolume}),this._pan=0,createjs.definePropertySupported&&Object.defineProperty(this,"pan",{get:this.getPan,set:this.setPan}),this._duration=Math.max(0,c||0),createjs.definePropertySupported&&Object.defineProperty(this,"duration",{get:this.getDuration,set:this.setDuration}),this._playbackResource=null,createjs.definePropertySupported&&Object.defineProperty(this,"playbackResource",{get:this.getPlaybackResource,set:this.setPlaybackResource}),d!==!1&&d!==!0&&this.setPlaybackResource(d),this._position=0,createjs.definePropertySupported&&Object.defineProperty(this,"position",{get:this.getPosition,set:this.setPosition}),this._loop=0,createjs.definePropertySupported&&Object.defineProperty(this,"loop",{get:this.getLoop,set:this.setLoop}),this._muted=!1,createjs.definePropertySupported&&Object.defineProperty(this,"muted",{get:this.getMuted,set:this.setMuted}),this._paused=!1,createjs.definePropertySupported&&Object.defineProperty(this,"paused",{get:this.getPaused,set:this.setPaused})},b=createjs.extend(a,createjs.EventDispatcher);b.play=function(a,b,c,d,e,f){return this.playState==createjs.Sound.PLAY_SUCCEEDED?(a instanceof Object&&(c=a.offset,d=a.loop,e=a.volume,f=a.pan),null!=c&&this.setPosition(c),null!=d&&this.setLoop(d),null!=e&&this.setVolume(e),null!=f&&this.setPan(f),void(this._paused&&this.setPaused(!1))):(this._cleanUp(),createjs.Sound._playInstance(this,a,b,c,d,e,f),this)},b.pause=function(){return this._paused||this.playState!=createjs.Sound.PLAY_SUCCEEDED?!1:(this.setPaused(!0),!0)},b.resume=function(){return this._paused?(this.setPaused(!1),!0):!1},b.stop=function(){return this._position=0,this._paused=!1,this._handleStop(),this._cleanUp(),this.playState=createjs.Sound.PLAY_FINISHED,this},b.destroy=function(){this._cleanUp(),this.src=null,this.playbackResource=null,this.removeAllEventListeners()},b.toString=function(){return"[AbstractSoundInstance]"},b.getPaused=function(){return this._paused},b.setPaused=function(a){return a!==!0&&a!==!1||this._paused==a||1==a&&this.playState!=createjs.Sound.PLAY_SUCCEEDED?void 0:(this._paused=a,a?this._pause():this._resume(),clearTimeout(this.delayTimeoutId),this)},b.setVolume=function(a){return a==this._volume?this:(this._volume=Math.max(0,Math.min(1,a)),this._muted||this._updateVolume(),this)},b.getVolume=function(){return this._volume},b.setMute=function(a){this.setMuted(a)},b.getMute=function(){return this._muted},b.setMuted=function(a){return a===!0||a===!1?(this._muted=a,this._updateVolume(),this):void 0},b.getMuted=function(){return this._muted},b.setPan=function(a){return a==this._pan?this:(this._pan=Math.max(-1,Math.min(1,a)),this._updatePan(),this)},b.getPan=function(){return this._pan},b.getPosition=function(){return this._paused||this.playState!=createjs.Sound.PLAY_SUCCEEDED?this._position:this._calculateCurrentPosition()},b.setPosition=function(a){return this._position=Math.max(0,a),this.playState==createjs.Sound.PLAY_SUCCEEDED&&this._updatePosition(),this},b.getDuration=function(){return this._duration},b.setDuration=function(a){return a==this._duration?this:(this._duration=Math.max(0,a||0),this._updateDuration(),this)},b.setPlaybackResource=function(a){return this._playbackResource=a,0==this._duration&&this._setDurationFromSource(),this},b.getPlaybackResource=function(){return this._playbackResource},b.getLoop=function(){return this._loop},b.setLoop=function(a){null!=this._playbackResource&&(0!=this._loop&&0==a&&this._removeLooping(a),0==this._loop&&0!=a&&this._addLooping(a)),this._loop=a},b._sendEvent=function(a){var b=new createjs.Event(a);this.dispatchEvent(b)},b._cleanUp=function(){clearTimeout(this.delayTimeoutId),this._handleCleanUp(),this._paused=!1,createjs.Sound._playFinished(this)},b._interrupt=function(){this._cleanUp(),this.playState=createjs.Sound.PLAY_INTERRUPTED,this._sendEvent("interrupted")},b._beginPlaying=function(a,b,c,d){return this.setPosition(a),this.setLoop(b),this.setVolume(c),this.setPan(d),null!=this._playbackResource&&this._position<this._duration?(this._paused=!1,this._handleSoundReady(),this.playState=createjs.Sound.PLAY_SUCCEEDED,this._sendEvent("succeeded"),!0):(this._playFailed(),!1)},b._playFailed=function(){this._cleanUp(),this.playState=createjs.Sound.PLAY_FAILED,this._sendEvent("failed")},b._handleSoundComplete=function(){return this._position=0,0!=this._loop?(this._loop--,this._handleLoop(),void this._sendEvent("loop")):(this._cleanUp(),this.playState=createjs.Sound.PLAY_FINISHED,void this._sendEvent("complete"))},b._handleSoundReady=function(){},b._updateVolume=function(){},b._updatePan=function(){},b._updateDuration=function(){},b._setDurationFromSource=function(){},b._calculateCurrentPosition=function(){},b._updatePosition=function(){},b._removeLooping=function(){},b._addLooping=function(){},b._pause=function(){},b._resume=function(){},b._handleStop=function(){},b._handleCleanUp=function(){},b._handleLoop=function(){},createjs.AbstractSoundInstance=createjs.promote(a,"EventDispatcher"),createjs.DefaultSoundInstance=createjs.AbstractSoundInstance}(),this.createjs=this.createjs||{},function(){"use strict";var a=function(){this._capabilities=null,this._loaders={},this._audioSources={},this._soundInstances={},this._loaderClass,this._soundInstanceClass},b=a.prototype;a._capabilities=null,a.isSupported=function(){return!0},b.register=function(a){if(this._audioSources[a.src]=!0,this._soundInstances[a.src]=[],this._loaders[a.src])return this._loaders[a.src];var b=new this._loaderClass(a);return b.on("complete",createjs.proxy(this._handlePreloadComplete,this)),this._loaders[a.src]=b,b},b.preload=function(a){a.on("error",createjs.proxy(this._handlePreloadError,this)),a.load()},b.isPreloadStarted=function(a){return null!=this._audioSources[a]},b.isPreloadComplete=function(a){return!(null==this._audioSources[a]||1==this._audioSources[a])},b.removeSound=function(a){if(this._soundInstances[a]){for(var b=this._soundInstances[a].length;b--;){var c=this._soundInstances[a][b];c.destroy()}delete this._soundInstances[a],delete this._audioSources[a],this._loaders[a]&&this._loaders[a].destroy(),delete this._loaders[a]}},b.removeAllSounds=function(){for(var a in this._audioSources)this.removeSound(a)},b.create=function(a,b,c){this.isPreloadStarted(a)||this.preload(this.register(a));var d=new this._soundInstanceClass(a,b,c,this._audioSources[a]);return this._soundInstances[a].push(d),d},b.setVolume=function(a){return this._volume=a,this._updateVolume(),!0},b.getVolume=function(){return this._volume},b.setMute=function(){return this._updateVolume(),!0},b.toString=function(){return"[AbstractPlugin]"},b._handlePreloadComplete=function(a){var b=a.target.getItem().src;this._audioSources[b]=a.result;for(var c=0,d=this._soundInstances[b].length;d>c;c++){var e=this._soundInstances[b][c];e.setPlaybackResource(this._audioSources[b])}},b._handlePreloadError=function(){},b._updateVolume=function(){},createjs.AbstractPlugin=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.SOUND)}var b=createjs.extend(a,createjs.AbstractLoader);a.context=null,b.toString=function(){return"[WebAudioLoader]"},b._createRequest=function(){this._request=new createjs.XHRRequest(this._item,!1),this._request.setResponseType("arraybuffer")},b._sendComplete=function(){a.context.decodeAudioData(this._rawResult,createjs.proxy(this._handleAudioDecoded,this),createjs.proxy(this._handleError,this))},b._handleAudioDecoded=function(a){this._result=a,this.AbstractLoader__sendComplete()},createjs.WebAudioLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,d,e){this.AbstractSoundInstance_constructor(a,b,d,e),this.gainNode=c.context.createGain(),this.panNode=c.context.createPanner(),this.panNode.panningModel=c._panningModel,this.panNode.connect(this.gainNode),this.sourceNode=null,this._soundCompleteTimeout=null,this._sourceNodeNext=null,this._playbackStartTime=0,this._endedHandler=createjs.proxy(this._handleSoundComplete,this)}var b=createjs.extend(a,createjs.AbstractSoundInstance),c=a;c.context=null,c.destinationNode=null,c._panningModel="equalpower",b.destroy=function(){this.AbstractSoundInstance_destroy(),this.panNode.disconnect(0),this.panNode=null,this.gainNode.disconnect(0),this.gainNode=null},b.toString=function(){return"[WebAudioSoundInstance]"},b._updatePan=function(){this.panNode.setPosition(this._pan,0,-.5)},b._removeLooping=function(){this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext)},b._addLooping=function(){this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0))},b._setDurationFromSource=function(){this._duration=1e3*this.playbackResource.duration},b._handleCleanUp=function(){this.sourceNode&&this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext)),0!=this.gainNode.numberOfOutputs&&this.gainNode.disconnect(0),clearTimeout(this._soundCompleteTimeout),this._playbackStartTime=0},b._cleanUpAudioNode=function(a){return a&&(a.stop(0),a.disconnect(0),a=null),a},b._handleSoundReady=function(){this.gainNode.connect(c.destinationNode);var a=.001*this._duration,b=.001*this._position;this.sourceNode=this._createAndPlayAudioNode(c.context.currentTime-a,b),this._playbackStartTime=this.sourceNode.startTime-b,this._soundCompleteTimeout=setTimeout(this._endedHandler,1e3*(a-b)),0!=this._loop&&(this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0))},b._createAndPlayAudioNode=function(a,b){var d=c.context.createBufferSource();d.buffer=this.playbackResource,d.connect(this.panNode);var e=.001*this._duration;return d.startTime=a+e,d.start(d.startTime,b+.001*this._startTime,e-b),d},b._pause=function(){this._position=1e3*(c.context.currentTime-this._playbackStartTime),this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext),0!=this.gainNode.numberOfOutputs&&this.gainNode.disconnect(0),clearTimeout(this._soundCompleteTimeout)},b._resume=function(){this._handleSoundReady()},b._updateVolume=function(){var a=this._muted?0:this._volume;a!=this.gainNode.gain.value&&(this.gainNode.gain.value=a)},b._calculateCurrentPosition=function(){return 1e3*(c.context.currentTime-this._playbackStartTime)},b._updatePosition=function(){this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext),clearTimeout(this._soundCompleteTimeout),this._paused||this._handleSoundReady()},b._handleLoop=function(){this._cleanUpAudioNode(this.sourceNode),this.sourceNode=this._sourceNodeNext,this._playbackStartTime=this.sourceNode.startTime,this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0),this._soundCompleteTimeout=setTimeout(this._endedHandler,this._duration)},b._updateDuration=function(){this._pause(),this._resume()},createjs.WebAudioSoundInstance=createjs.promote(a,"AbstractSoundInstance")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.AbstractPlugin_constructor(),this._panningModel=c._panningModel,this._volume=1,this.context=c.context,this.dynamicsCompressorNode=this.context.createDynamicsCompressor(),this.dynamicsCompressorNode.connect(this.context.destination),this.gainNode=this.context.createGain(),this.gainNode.connect(this.dynamicsCompressorNode),createjs.WebAudioSoundInstance.destinationNode=this.gainNode,this._capabilities=c._capabilities,this._loaderClass=createjs.WebAudioLoader,this._soundInstanceClass=createjs.WebAudioSoundInstance,this._addPropsToClasses()}var b=createjs.extend(a,createjs.AbstractPlugin),c=a;c._capabilities=null,c._panningModel="equalpower",c.context=null,c.isSupported=function(){var a=createjs.BrowserDetect.isIOS||createjs.BrowserDetect.isAndroid||createjs.BrowserDetect.isBlackberry;return"file:"!=location.protocol||a||this._isFileXHRSupported()?(c._generateCapabilities(),null==c.context?!1:!0):!1},c.playEmptySound=function(){var a=c.context.createBufferSource();a.buffer=c.context.createBuffer(1,1,22050),a.connect(c.context.destination),a.start(0,0,0)},c._isFileXHRSupported=function(){var a=!0,b=new XMLHttpRequest;try{b.open("GET","WebAudioPluginTest.fail",!1)}catch(c){return a=!1}b.onerror=function(){a=!1},b.onload=function(){a=404==this.status||200==this.status||0==this.status&&""!=this.response};try{b.send()}catch(c){a=!1}return a},c._generateCapabilities=function(){if(null==c._capabilities){var a=document.createElement("audio");if(null==a.canPlayType)return null;if(null==c.context)if(window.AudioContext)c.context=new AudioContext;else{if(!window.webkitAudioContext)return null;c.context=new webkitAudioContext}c._compatibilitySetUp(),c.playEmptySound(),c._capabilities={panning:!0,volume:!0,tracks:-1};for(var b=createjs.Sound.SUPPORTED_EXTENSIONS,d=createjs.Sound.EXTENSION_MAP,e=0,f=b.length;f>e;e++){var g=b[e],h=d[g]||g;c._capabilities[g]="no"!=a.canPlayType("audio/"+g)&&""!=a.canPlayType("audio/"+g)||"no"!=a.canPlayType("audio/"+h)&&""!=a.canPlayType("audio/"+h)}c.context.destination.numberOfChannels<2&&(c._capabilities.panning=!1)}},c._compatibilitySetUp=function(){if(c._panningModel="equalpower",!c.context.createGain){c.context.createGain=c.context.createGainNode;var a=c.context.createBufferSource();a.__proto__.start=a.__proto__.noteGrainOn,a.__proto__.stop=a.__proto__.noteOff,c._panningModel=0}},b.toString=function(){return"[WebAudioPlugin]"},b._addPropsToClasses=function(){var a=this._soundInstanceClass;a.context=this.context,a.destinationNode=this.gainNode,a._panningModel=this._panningModel,this._loaderClass.context=this.context},b._updateVolume=function(){var a=createjs.Sound._masterMute?0:this._volume;a!=this.gainNode.gain.value&&(this.gainNode.gain.value=a)},createjs.WebAudioPlugin=createjs.promote(a,"AbstractPlugin")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.src=a,this.length=0,this.available=0,this.tags=[],this.duration=0}var b=a.prototype;b.constructor=a;var c=a;c.tags={},c.get=function(b){var d=c.tags[b];return null==d&&(d=c.tags[b]=new a(b)),d},c.remove=function(a){var b=c.tags[a];return null==b?!1:(b.removeAll(),delete c.tags[a],!0)},c.getInstance=function(a){var b=c.tags[a];return null==b?null:b.get()},c.setInstance=function(a,b){var d=c.tags[a];return null==d?null:d.set(b)},c.getDuration=function(a){var b=c.tags[a];return null==b?0:b.getDuration()},b.add=function(a){this.tags.push(a),this.length++,this.available++},b.removeAll=function(){for(var a;this.length--;)a=this.tags[this.length],a.parentNode&&a.parentNode.removeChild(a),delete this.tags[this.length];this.src=null,this.tags.length=0},b.get=function(){if(0==this.tags.length)return null;this.available=this.tags.length;var a=this.tags.pop();return null==a.parentNode&&document.body.appendChild(a),a},b.set=function(a){var b=createjs.indexOf(this.tags,a);-1==b&&this.tags.push(a),this.available=this.tags.length},b.getDuration=function(){return this.duration||(this.duration=1e3*this.tags[this.tags.length-1].duration),this.duration},b.toString=function(){return"[HTMLAudioTagPool]"},createjs.HTMLAudioTagPool=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.AbstractSoundInstance_constructor(a,b,c,d),this._audioSpriteStopTime=null,this._delayTimeoutId=null,this._endedHandler=createjs.proxy(this._handleSoundComplete,this),this._readyHandler=createjs.proxy(this._handleTagReady,this),this._stalledHandler=createjs.proxy(this.playFailed,this),this._audioSpriteEndHandler=createjs.proxy(this._handleAudioSpriteLoop,this),this._loopHandler=createjs.proxy(this._handleSoundComplete,this),c?this._audioSpriteStopTime=.001*(b+c):this._duration=createjs.HTMLAudioTagPool.getDuration(this.src)}var b=createjs.extend(a,createjs.AbstractSoundInstance);b.setMasterVolume=function(){this._updateVolume()},b.setMasterMute=function(){this._updateVolume()},b.toString=function(){return"[HTMLAudioSoundInstance]"},b._removeLooping=function(){null!=this._playbackResource&&(this._playbackResource.loop=!1,this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},b._addLooping=function(){null==this._playbackResource||this._audioSpriteStopTime||(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.loop=!0)},b._handleCleanUp=function(){var a=this._playbackResource;if(null!=a){a.pause(),a.loop=!1,a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1);try{a.currentTime=this._startTime}catch(b){}createjs.HTMLAudioTagPool.setInstance(this.src,a),this._playbackResource=null}},b._beginPlaying=function(a,b,c,d){return this._playbackResource=createjs.HTMLAudioTagPool.getInstance(this.src),this.AbstractSoundInstance__beginPlaying(a,b,c,d)},b._handleSoundReady=function(){if(4!==this._playbackResource.readyState){var a=this._playbackResource;return a.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),a.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),a.preload="auto",void a.load()}this._updateVolume(),this._playbackResource.currentTime=.001*(this._startTime+this._position),this._audioSpriteStopTime?this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1):(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),0!=this._loop&&(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.loop=!0)),this._playbackResource.play()
},b._handleTagReady=function(){this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),this._handleSoundReady()},b._pause=function(){this._playbackResource.pause()},b._resume=function(){this._playbackResource.play()},b._updateVolume=function(){if(null!=this._playbackResource){var a=this._muted||createjs.Sound._masterMute?0:this._volume*createjs.Sound._masterVolume;a!=this._playbackResource.volume&&(this._playbackResource.volume=a)}},b._calculateCurrentPosition=function(){return 1e3*this._playbackResource.currentTime-this._startTime},b._updatePosition=function(){this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._handleSetPositionSeek,!1);try{this._playbackResource.currentTime=.001*(this._position+this._startTime)}catch(a){this._handleSetPositionSeek(null)}},b._handleSetPositionSeek=function(){null!=this._playbackResource&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._handleSetPositionSeek,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},b._handleAudioSpriteLoop=function(){this._playbackResource.currentTime<=this._audioSpriteStopTime||(this._playbackResource.pause(),0==this._loop?this._handleSoundComplete(null):(this._position=0,this._loop--,this._playbackResource.currentTime=.001*this._startTime,this._paused||this._playbackResource.play(),this._sendEvent("loop")))},b._handleLoop=function(){0==this._loop&&(this._playbackResource.loop=!1,this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},b._updateDuration=function(){this._audioSpriteStopTime=.001*(startTime+duration),this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1))},createjs.HTMLAudioSoundInstance=createjs.promote(a,"AbstractSoundInstance")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.AbstractPlugin_constructor(),this.defaultNumChannels=2,this._capabilities=c._capabilities,this._loaderClass=createjs.SoundLoader,this._soundInstanceClass=createjs.HTMLAudioSoundInstance}var b=createjs.extend(a,createjs.AbstractPlugin),c=a;c.MAX_INSTANCES=30,c._AUDIO_READY="canplaythrough",c._AUDIO_ENDED="ended",c._AUDIO_SEEKED="seeked",c._AUDIO_STALLED="stalled",c._TIME_UPDATE="timeupdate",c._capabilities=null,c.enableIOS=!1,c.isSupported=function(){return c._generateCapabilities(),null==c._capabilities?!1:!0},c._generateCapabilities=function(){if(null==c._capabilities){var a=document.createElement("audio");if(null==a.canPlayType)return null;c._capabilities={panning:!0,volume:!0,tracks:-1};for(var b=createjs.Sound.SUPPORTED_EXTENSIONS,d=createjs.Sound.EXTENSION_MAP,e=0,f=b.length;f>e;e++){var g=b[e],h=d[g]||g;c._capabilities[g]="no"!=a.canPlayType("audio/"+g)&&""!=a.canPlayType("audio/"+g)||"no"!=a.canPlayType("audio/"+h)&&""!=a.canPlayType("audio/"+h)}}},b.register=function(a,b){for(var c=createjs.HTMLAudioTagPool.get(a.src),d=null,e=0;b>e;e++)d=this._createTag(a.src),c.add(d);var f=this.AbstractPlugin_register(a,b);return f.setTag(d),f},b.removeSound=function(a){this.AbstractPlugin_removeSound(a),createjs.HTMLAudioTagPool.remove(a)},b.create=function(a,b,c){var d=this.AbstractPlugin_create(a,b,c);return d.setPlaybackResource(null),d},b.toString=function(){return"[HTMLAudioPlugin]"},b.setVolume=b.getVolume=b.setMute=null,b._createTag=function(a){var b=document.createElement("audio");return b.autoplay=!1,b.preload="none",b.src=a,b},createjs.HTMLAudioPlugin=createjs.promote(a,"AbstractPlugin")}(),this.createjs=this.createjs||{},function(){"use strict";function a(b,c,d){this.ignoreGlobalPause=!1,this.loop=!1,this.duration=0,this.pluginData=d||{},this.target=b,this.position=null,this.passive=!1,this._paused=!1,this._curQueueProps={},this._initQueueProps={},this._steps=[],this._actions=[],this._prevPosition=0,this._stepPosition=0,this._prevPos=-1,this._target=b,this._useTicks=!1,this._inited=!1,c&&(this._useTicks=c.useTicks,this.ignoreGlobalPause=c.ignoreGlobalPause,this.loop=c.loop,c.onChange&&this.addEventListener("change",c.onChange),c.override&&a.removeTweens(b)),c&&c.paused?this._paused=!0:createjs.Tween._register(this,!0),c&&null!=c.position&&this.setPosition(c.position,a.NONE)}var b=createjs.extend(a,createjs.EventDispatcher);a.NONE=0,a.LOOP=1,a.REVERSE=2,a.IGNORE={},a._tweens=[],a._plugins={},a.get=function(b,c,d,e){return e&&a.removeTweens(b),new a(b,c,d)},a.tick=function(b,c){for(var d=a._tweens.slice(),e=d.length-1;e>=0;e--){var f=d[e];c&&!f.ignoreGlobalPause||f._paused||f.tick(f._useTicks?1:b)}},a.handleEvent=function(a){"tick"==a.type&&this.tick(a.delta,a.paused)},a.removeTweens=function(b){if(b.tweenjs_count){for(var c=a._tweens,d=c.length-1;d>=0;d--){var e=c[d];e._target==b&&(e._paused=!0,c.splice(d,1))}b.tweenjs_count=0}},a.removeAllTweens=function(){for(var b=a._tweens,c=0,d=b.length;d>c;c++){var e=b[c];e._paused=!0,e.target.tweenjs_count=0}b.length=0},a.hasActiveTweens=function(b){return b?b.tweenjs_count:a._tweens&&!!a._tweens.length},a.installPlugin=function(b,c){var d=b.priority;null==d&&(b.priority=d=0);for(var e=0,f=c.length,g=a._plugins;f>e;e++){var h=c[e];if(g[h]){for(var i=g[h],j=0,k=i.length;k>j&&!(d<i[j].priority);j++);g[h].splice(j,0,b)}else g[h]=[b]}},a._register=function(b,c){var d=b._target,e=a._tweens;if(c)d&&(d.tweenjs_count=d.tweenjs_count?d.tweenjs_count+1:1),e.push(b),!a._inited&&createjs.Ticker&&(createjs.Ticker.addEventListener("tick",a),a._inited=!0);else{d&&d.tweenjs_count--;for(var f=e.length;f--;)if(e[f]==b)return void e.splice(f,1)}},b.wait=function(a,b){if(null==a||0>=a)return this;var c=this._cloneProps(this._curQueueProps);return this._addStep({d:a,p0:c,e:this._linearEase,p1:c,v:b})},b.to=function(a,b,c){return(isNaN(b)||0>b)&&(b=0),this._addStep({d:b||0,p0:this._cloneProps(this._curQueueProps),e:c,p1:this._cloneProps(this._appendQueueProps(a))})},b.call=function(a,b,c){return this._addAction({f:a,p:b?b:[this],o:c?c:this._target})},b.set=function(a,b){return this._addAction({f:this._set,o:this,p:[a,b?b:this._target]})},b.play=function(a){return a||(a=this),this.call(a.setPaused,[!1],a)},b.pause=function(a){return a||(a=this),this.call(a.setPaused,[!0],a)},b.setPosition=function(a,b){0>a&&(a=0),null==b&&(b=1);var c=a,d=!1;if(c>=this.duration&&(this.loop?c%=this.duration:(c=this.duration,d=!0)),c==this._prevPos)return d;var e=this._prevPos;if(this.position=this._prevPos=c,this._prevPosition=a,this._target)if(d)this._updateTargetProps(null,1);else if(this._steps.length>0){for(var f=0,g=this._steps.length;g>f&&!(this._steps[f].t>c);f++);var h=this._steps[f-1];this._updateTargetProps(h,(this._stepPosition=c-h.t)/h.d)}return 0!=b&&this._actions.length>0&&(this._useTicks?this._runActions(c,c):1==b&&e>c?(e!=this.duration&&this._runActions(e,this.duration),this._runActions(0,c,!0)):this._runActions(e,c)),d&&this.setPaused(!0),this.dispatchEvent("change"),d},b.tick=function(a){this._paused||this.setPosition(this._prevPosition+a)},b.setPaused=function(b){return this._paused===!!b?this:(this._paused=!!b,a._register(this,!b),this)},b.w=b.wait,b.t=b.to,b.c=b.call,b.s=b.set,b.toString=function(){return"[Tween]"},b.clone=function(){throw"Tween can not be cloned."},b._updateTargetProps=function(b,c){var d,e,f,g,h,i;if(b||1!=c){if(this.passive=!!b.v,this.passive)return;b.e&&(c=b.e(c,0,1,1)),d=b.p0,e=b.p1}else this.passive=!1,d=e=this._curQueueProps;for(var j in this._initQueueProps){null==(g=d[j])&&(d[j]=g=this._initQueueProps[j]),null==(h=e[j])&&(e[j]=h=g),f=g==h||0==c||1==c||"number"!=typeof g?1==c?h:g:g+(h-g)*c;var k=!1;if(i=a._plugins[j])for(var l=0,m=i.length;m>l;l++){var n=i[l].tween(this,j,f,d,e,c,!!b&&d==e,!b);n==a.IGNORE?k=!0:f=n}k||(this._target[j]=f)}},b._runActions=function(a,b,c){var d=a,e=b,f=-1,g=this._actions.length,h=1;for(a>b&&(d=b,e=a,f=g,g=h=-1);(f+=h)!=g;){var i=this._actions[f],j=i.t;(j==e||j>d&&e>j||c&&j==a)&&i.f.apply(i.o,i.p)}},b._appendQueueProps=function(b){var c,d,e,f,g;for(var h in b)if(void 0===this._initQueueProps[h]){if(d=this._target[h],c=a._plugins[h])for(e=0,f=c.length;f>e;e++)d=c[e].init(this,h,d);this._initQueueProps[h]=this._curQueueProps[h]=void 0===d?null:d}else d=this._curQueueProps[h];for(var h in b){if(d=this._curQueueProps[h],c=a._plugins[h])for(g=g||{},e=0,f=c.length;f>e;e++)c[e].step&&c[e].step(this,h,d,b[h],g);this._curQueueProps[h]=b[h]}return g&&this._appendQueueProps(g),this._curQueueProps},b._cloneProps=function(a){var b={};for(var c in a)b[c]=a[c];return b},b._addStep=function(a){return a.d>0&&(this._steps.push(a),a.t=this.duration,this.duration+=a.d),this},b._addAction=function(a){return a.t=this.duration,this._actions.push(a),this},b._set=function(a,b){for(var c in a)b[c]=a[c]},createjs.Tween=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.EventDispatcher_constructor(),this.ignoreGlobalPause=!1,this.duration=0,this.loop=!1,this.position=null,this._paused=!1,this._tweens=[],this._labels=null,this._labelList=null,this._prevPosition=0,this._prevPos=-1,this._useTicks=!1,c&&(this._useTicks=c.useTicks,this.loop=c.loop,this.ignoreGlobalPause=c.ignoreGlobalPause,c.onChange&&this.addEventListener("change",c.onChange)),a&&this.addTween.apply(this,a),this.setLabels(b),c&&c.paused?this._paused=!0:createjs.Tween._register(this,!0),c&&null!=c.position&&this.setPosition(c.position,createjs.Tween.NONE)}var b=createjs.extend(a,createjs.EventDispatcher);b.addTween=function(a){var b=arguments.length;if(b>1){for(var c=0;b>c;c++)this.addTween(arguments[c]);return arguments[0]}return 0==b?null:(this.removeTween(a),this._tweens.push(a),a.setPaused(!0),a._paused=!1,a._useTicks=this._useTicks,a.duration>this.duration&&(this.duration=a.duration),this._prevPos>=0&&a.setPosition(this._prevPos,createjs.Tween.NONE),a)},b.removeTween=function(a){var b=arguments.length;if(b>1){for(var c=!0,d=0;b>d;d++)c=c&&this.removeTween(arguments[d]);return c}if(0==b)return!1;for(var e=this._tweens,d=e.length;d--;)if(e[d]==a)return e.splice(d,1),a.duration>=this.duration&&this.updateDuration(),!0;return!1},b.addLabel=function(a,b){this._labels[a]=b;var c=this._labelList;if(c){for(var d=0,e=c.length;e>d&&!(b<c[d].position);d++);c.splice(d,0,{label:a,position:b})}},b.setLabels=function(a){this._labels=a?a:{}},b.getLabels=function(){var a=this._labelList;if(!a){a=this._labelList=[];var b=this._labels;for(var c in b)a.push({label:c,position:b[c]});a.sort(function(a,b){return a.position-b.position})}return a},b.getCurrentLabel=function(){var a=this.getLabels(),b=this.position,c=a.length;if(c){for(var d=0;c>d&&!(b<a[d].position);d++);return 0==d?null:a[d-1].label}return null},b.gotoAndPlay=function(a){this.setPaused(!1),this._goto(a)},b.gotoAndStop=function(a){this.setPaused(!0),this._goto(a)},b.setPosition=function(a,b){0>a&&(a=0);var c=this.loop?a%this.duration:a,d=!this.loop&&a>=this.duration;if(c==this._prevPos)return d;this._prevPosition=a,this.position=this._prevPos=c;for(var e=0,f=this._tweens.length;f>e;e++)if(this._tweens[e].setPosition(c,b),c!=this._prevPos)return!1;return d&&this.setPaused(!0),this.dispatchEvent("change"),d},b.setPaused=function(a){this._paused=!!a,createjs.Tween._register(this,!a)},b.updateDuration=function(){this.duration=0;for(var a=0,b=this._tweens.length;b>a;a++){var c=this._tweens[a];c.duration>this.duration&&(this.duration=c.duration)}},b.tick=function(a){this.setPosition(this._prevPosition+a)},b.resolve=function(a){var b=Number(a);return isNaN(b)&&(b=this._labels[a]),b},b.toString=function(){return"[Timeline]"},b.clone=function(){throw"Timeline can not be cloned."},b._goto=function(a){var b=this.resolve(a);null!=b&&this.setPosition(b)},createjs.Timeline=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Ease cannot be instantiated."}a.linear=function(a){return a},a.none=a.linear,a.get=function(a){return-1>a&&(a=-1),a>1&&(a=1),function(b){return 0==a?b:0>a?b*(b*-a+1+a):b*((2-b)*a+(1-a))}},a.getPowIn=function(a){return function(b){return Math.pow(b,a)}},a.getPowOut=function(a){return function(b){return 1-Math.pow(1-b,a)}},a.getPowInOut=function(a){return function(b){return(b*=2)<1?.5*Math.pow(b,a):1-.5*Math.abs(Math.pow(2-b,a))}},a.quadIn=a.getPowIn(2),a.quadOut=a.getPowOut(2),a.quadInOut=a.getPowInOut(2),a.cubicIn=a.getPowIn(3),a.cubicOut=a.getPowOut(3),a.cubicInOut=a.getPowInOut(3),a.quartIn=a.getPowIn(4),a.quartOut=a.getPowOut(4),a.quartInOut=a.getPowInOut(4),a.quintIn=a.getPowIn(5),a.quintOut=a.getPowOut(5),a.quintInOut=a.getPowInOut(5),a.sineIn=function(a){return 1-Math.cos(a*Math.PI/2)},a.sineOut=function(a){return Math.sin(a*Math.PI/2)},a.sineInOut=function(a){return-.5*(Math.cos(Math.PI*a)-1)},a.getBackIn=function(a){return function(b){return b*b*((a+1)*b-a)}},a.backIn=a.getBackIn(1.7),a.getBackOut=function(a){return function(b){return--b*b*((a+1)*b+a)+1}},a.backOut=a.getBackOut(1.7),a.getBackInOut=function(a){return a*=1.525,function(b){return(b*=2)<1?.5*b*b*((a+1)*b-a):.5*((b-=2)*b*((a+1)*b+a)+2)}},a.backInOut=a.getBackInOut(1.7),a.circIn=function(a){return-(Math.sqrt(1-a*a)-1)},a.circOut=function(a){return Math.sqrt(1- --a*a)},a.circInOut=function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},a.bounceIn=function(b){return 1-a.bounceOut(1-b)},a.bounceOut=function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},a.bounceInOut=function(b){return.5>b?.5*a.bounceIn(2*b):.5*a.bounceOut(2*b-1)+.5},a.getElasticIn=function(a,b){var c=2*Math.PI;return function(d){if(0==d||1==d)return d;var e=b/c*Math.asin(1/a);return-(a*Math.pow(2,10*(d-=1))*Math.sin((d-e)*c/b))}},a.elasticIn=a.getElasticIn(1,.3),a.getElasticOut=function(a,b){var c=2*Math.PI;return function(d){if(0==d||1==d)return d;var e=b/c*Math.asin(1/a);return a*Math.pow(2,-10*d)*Math.sin((d-e)*c/b)+1}},a.elasticOut=a.getElasticOut(1,.3),a.getElasticInOut=function(a,b){var c=2*Math.PI;return function(d){var e=b/c*Math.asin(1/a);return(d*=2)<1?-.5*a*Math.pow(2,10*(d-=1))*Math.sin((d-e)*c/b):a*Math.pow(2,-10*(d-=1))*Math.sin((d-e)*c/b)*.5+1}},a.elasticInOut=a.getElasticInOut(1,.3*1.5),createjs.Ease=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"MotionGuidePlugin cannot be instantiated."}a.priority=0,a._rotOffS,a._rotOffE,a._rotNormS,a._rotNormE,a.install=function(){return createjs.Tween.installPlugin(a,["guide","x","y","rotation"]),createjs.Tween.IGNORE},a.init=function(a,b,c){var d=a.target;return d.hasOwnProperty("x")||(d.x=0),d.hasOwnProperty("y")||(d.y=0),d.hasOwnProperty("rotation")||(d.rotation=0),"rotation"==b&&(a.__needsRot=!0),"guide"==b?null:c},a.step=function(b,c,d,e,f){if("rotation"==c&&(b.__rotGlobalS=d,b.__rotGlobalE=e,a.testRotData(b,f)),"guide"!=c)return e;var g,h=e;h.hasOwnProperty("path")||(h.path=[]);var i=h.path;if(h.hasOwnProperty("end")||(h.end=1),h.hasOwnProperty("start")||(h.start=d&&d.hasOwnProperty("end")&&d.path===i?d.end:0),h.hasOwnProperty("_segments")&&h._length)return e;var j=i.length,k=10;if(!(j>=6&&(j-2)%4==0))throw"invalid 'path' data, please see documentation for valid paths";h._segments=[],h._length=0;for(var l=2;j>l;l+=4){for(var m,n,o=i[l-2],p=i[l-1],q=i[l+0],r=i[l+1],s=i[l+2],t=i[l+3],u=o,v=p,w=0,x=[],y=1;k>=y;y++){var z=y/k,A=1-z;m=A*A*o+2*A*z*q+z*z*s,n=A*A*p+2*A*z*r+z*z*t,w+=x[x.push(Math.sqrt((g=m-u)*g+(g=n-v)*g))-1],u=m,v=n}h._segments.push(w),h._segments.push(x),h._length+=w}g=h.orient,h.orient=!0;var B={};return a.calc(h,h.start,B),b.__rotPathS=Number(B.rotation.toFixed(5)),a.calc(h,h.end,B),b.__rotPathE=Number(B.rotation.toFixed(5)),h.orient=!1,a.calc(h,h.end,f),h.orient=g,h.orient?(b.__guideData=h,a.testRotData(b,f),e):e},a.testRotData=function(a,b){if(void 0===a.__rotGlobalS||void 0===a.__rotGlobalE){if(a.__needsRot)return;a.__rotGlobalS=a.__rotGlobalE=void 0!==a._curQueueProps.rotation?a._curQueueProps.rotation:b.rotation=a.target.rotation||0}if(void 0!==a.__guideData){var c=a.__guideData,d=a.__rotGlobalE-a.__rotGlobalS,e=a.__rotPathE-a.__rotPathS,f=d-e;if("auto"==c.orient)f>180?f-=360:-180>f&&(f+=360);else if("cw"==c.orient){for(;0>f;)f+=360;0==f&&d>0&&180!=d&&(f+=360)}else if("ccw"==c.orient){for(f=d-(e>180?360-e:e);f>0;)f-=360;0==f&&0>d&&-180!=d&&(f-=360)}c.rotDelta=f,c.rotOffS=a.__rotGlobalS-a.__rotPathS,a.__rotGlobalS=a.__rotGlobalE=a.__guideData=a.__needsRot=void 0}},a.tween=function(b,c,d,e,f,g,h){var i=f.guide;if(void 0==i||i===e.guide)return d;if(i.lastRatio!=g){var j=(i.end-i.start)*(h?i.end:g)+i.start;switch(a.calc(i,j,b.target),i.orient){case"cw":case"ccw":case"auto":b.target.rotation+=i.rotOffS+i.rotDelta*g;break;case"fixed":default:b.target.rotation+=i.rotOffS}i.lastRatio=g}return"rotation"!=c||i.orient&&"false"!=i.orient?b.target[c]:d},a.calc=function(b,c,d){void 0==b._segments&&a.validate(b),void 0==d&&(d={x:0,y:0,rotation:0});for(var e=b._segments,f=b.path,g=b._length*c,h=e.length-2,i=0;g>e[i]&&h>i;)g-=e[i],i+=2;var j=e[i+1],k=0;for(h=j.length-1;g>j[k]&&h>k;)g-=j[k],k++;var l=k/++h+g/(h*j[k]);i=2*i+2;var m=1-l;return d.x=m*m*f[i-2]+2*m*l*f[i+0]+l*l*f[i+2],d.y=m*m*f[i-1]+2*m*l*f[i+1]+l*l*f[i+3],b.orient&&(d.rotation=57.2957795*Math.atan2((f[i+1]-f[i-1])*m+(f[i+3]-f[i+1])*l,(f[i+0]-f[i-2])*m+(f[i+2]-f[i+0])*l)),d},createjs.MotionGuidePlugin=a}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.TweenJS=createjs.TweenJS||{};a.version="0.6.0",a.buildDate="Thu, 11 Dec 2014 23:32:09 GMT"}();
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
/* QuoJS v2.3.6 - 2013/5/13
   http://quojs.tapquo.com
   Copyright (c) 2013 Javi Jimenez Villar (@soyjavi) - Licensed MIT */
(function(){var e;e=function(){var e,t,n;t=[];e=function(t,r){var i;if(!t){return n()}else if(e.toType(t)==="function"){return e(document).ready(t)}else{i=e.getDOMObject(t,r);return n(i,t)}};n=function(e,r){e=e||t;e.__proto__=n.prototype;e.selector=r||"";return e};e.extend=function(e){Array.prototype.slice.call(arguments,1).forEach(function(t){var n,r;r=[];for(n in t){r.push(e[n]=t[n])}return r});return e};n.prototype=e.fn={};return e}();window.Quo=e;"$$"in window||(window.$$=e)}).call(this);(function(){(function(e){var t,n,r,i,u,a,o,s,c,f,l;t={TYPE:"GET",MIME:"json"};r={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"};n=0;e.ajaxSettings={type:t.TYPE,async:true,success:{},error:{},context:null,dataType:t.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:false,timeout:0};e.ajax=function(n){var r,o,f,h;f=e.mix(e.ajaxSettings,n);if(f.type===t.TYPE){f.url+=e.serializeParameters(f.data,"?")}else{f.data=e.serializeParameters(f.data)}if(i(f.url)){return e.jsonp(f)}h=f.xhr();h.onreadystatechange=function(){if(h.readyState===4){clearTimeout(r);return c(h,f)}};h.open(f.type,f.url,f.async);s(h,f);if(f.timeout>0){r=setTimeout(function(){return l(h,f)},f.timeout)}try{h.send(f.data)}catch(d){o=d;h=o;a("Resource not found",h,f)}if(f.async){return h}else{return u(h,f)}};e.jsonp=function(t){var r,i,u,a;if(t.async){i="jsonp"+ ++n;u=document.createElement("script");a={abort:function(){e(u).remove();if(i in window){return window[i]={}}}};r=void 0;window[i]=function(n){clearTimeout(r);e(u).remove();delete window[i];return f(n,a,t)};u.src=t.url.replace(RegExp("=\\?"),"="+i);e("head").append(u);if(t.timeout>0){r=setTimeout(function(){return l(a,t)},t.timeout)}return a}else{return console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")}};e.get=function(t,n,r,i){return e.ajax({url:t,data:n,success:r,dataType:i})};e.post=function(e,t,n,r){return o("POST",e,t,n,r)};e.put=function(e,t,n,r){return o("PUT",e,t,n,r)};e["delete"]=function(e,t,n,r){return o("DELETE",e,t,n,r)};e.json=function(n,r,i){return e.ajax({url:n,data:r,success:i,dataType:t.MIME})};e.serializeParameters=function(e,t){var n,r;if(t==null){t=""}r=t;for(n in e){if(e.hasOwnProperty(n)){if(r!==t){r+="&"}r+=""+encodeURIComponent(n)+"="+encodeURIComponent(e[n])}}if(r===t){return""}else{return r}};c=function(e,t){if(e.status>=200&&e.status<300||e.status===0){if(t.async){f(u(e,t),e,t)}}else{a("QuoJS.ajax: Unsuccesful request",e,t)}};f=function(e,t,n){n.success.call(n.context,e,t)};a=function(e,t,n){n.error.call(n.context,e,t,n)};s=function(e,t){var n;if(t.contentType){t.headers["Content-Type"]=t.contentType}if(t.dataType){t.headers["Accept"]=r[t.dataType]}for(n in t.headers){e.setRequestHeader(n,t.headers[n])}};l=function(e,t){e.onreadystatechange={};e.abort();a("QuoJS.ajax: Timeout exceeded",e,t)};o=function(t,n,r,i,u){return e.ajax({type:t,url:n,data:r,success:i,dataType:u,contentType:"application/x-www-form-urlencoded"})};u=function(e,n){var r,i;i=e.responseText;if(i){if(n.dataType===t.MIME){try{i=JSON.parse(i)}catch(u){r=u;i=r;a("QuoJS.ajax: Parse Error",e,n)}}else{if(n.dataType==="xml"){i=e.responseXML}}}return i};return i=function(e){return RegExp("=\\?").test(e)}})(Quo)}).call(this);(function(){(function(e){var t,n,r,i,u,a,o,s;t=[];i=Object.prototype;r=/^\s*<(\w+|!)[^>]*>/;u=document.createElement("table");a=document.createElement("tr");n={tr:document.createElement("tbody"),tbody:u,thead:u,tfoot:u,td:a,th:a,"*":document.createElement("div")};e.toType=function(e){return i.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()};e.isOwnProperty=function(e,t){return i.hasOwnProperty.call(e,t)};e.getDOMObject=function(t,n){var i,u,a;i=null;u=[1,9,11];a=e.toType(t);if(a==="array"){i=o(t)}else if(a==="string"&&r.test(t)){i=e.fragment(t.trim(),RegExp.$1);t=null}else if(a==="string"){i=e.query(document,t);if(n){if(i.length===1){i=e.query(i[0],n)}else{i=e.map(function(){return e.query(i,n)})}}}else if(u.indexOf(t.nodeType)>=0||t===window){i=[t];t=null}return i};e.map=function(t,n){var r,i,u,a;a=[];r=void 0;i=void 0;if(e.toType(t)==="array"){r=0;while(r<t.length){u=n(t[r],r);if(u!=null){a.push(u)}r++}}else{for(i in t){u=n(t[i],i);if(u!=null){a.push(u)}}}return s(a)};e.each=function(t,n){var r,i;r=void 0;i=void 0;if(e.toType(t)==="array"){r=0;while(r<t.length){if(n.call(t[r],r,t[r])===false){return t}r++}}else{for(i in t){if(n.call(t[i],i,t[i])===false){return t}}}return t};e.mix=function(){var t,n,r,i,u;r={};t=0;i=arguments.length;while(t<i){n=arguments[t];for(u in n){if(e.isOwnProperty(n,u)&&n[u]!==undefined){r[u]=n[u]}}t++}return r};e.fragment=function(t,r){var i;if(r==null){r="*"}if(!(r in n)){r="*"}i=n[r];i.innerHTML=""+t;return e.each(Array.prototype.slice.call(i.childNodes),function(){return i.removeChild(this)})};e.fn.map=function(t){return e.map(this,function(e,n){return t.call(e,n,e)})};e.fn.instance=function(e){return this.map(function(){return this[e]})};e.fn.filter=function(t){return e([].filter.call(this,function(n){return n.parentNode&&e.query(n.parentNode,t).indexOf(n)>=0}))};e.fn.forEach=t.forEach;e.fn.indexOf=t.indexOf;o=function(e){return e.filter(function(e){return e!==void 0&&e!==null})};return s=function(e){if(e.length>0){return[].concat.apply([],e)}else{return e}}})(Quo)}).call(this);(function(){(function(e){e.fn.attr=function(t,n){if(this.length===0){null}if(e.toType(t)==="string"&&n===void 0){return this[0].getAttribute(t)}else{return this.each(function(){return this.setAttribute(t,n)})}};e.fn.removeAttr=function(e){return this.each(function(){return this.removeAttribute(e)})};e.fn.data=function(e,t){return this.attr("data-"+e,t)};e.fn.removeData=function(e){return this.removeAttr("data-"+e)};e.fn.val=function(t){if(e.toType(t)==="string"){return this.each(function(){return this.value=t})}else{if(this.length>0){return this[0].value}else{return null}}};e.fn.show=function(){return this.style("display","block")};e.fn.hide=function(){return this.style("display","none")};e.fn.height=function(){var e;e=this.offset();return e.height};e.fn.width=function(){var e;e=this.offset();return e.width};e.fn.offset=function(){var e;e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:e.width,height:e.height}};return e.fn.remove=function(){return this.each(function(){if(this.parentNode!=null){return this.parentNode.removeChild(this)}})}})(Quo)}).call(this);(function(){(function(e){var t,n,r,i,u,a,o;r=null;t=/WebKit\/([\d.]+)/;n={Android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,Blackberry:/(BlackBerry|BB10|Playbook).*Version\/([\d.]+)/,FirefoxOS:/(Mozilla).*Mobile[^\/]*\/([\d\.]*)/,webOS:/(webOS|hpwOS)[\s\/]([\d.]+)/};e.isMobile=function(){r=r||u();return r.isMobile&&r.os.name!=="firefoxOS"};e.environment=function(){r=r||u();return r};e.isOnline=function(){return navigator.onLine};u=function(){var e,t;t=navigator.userAgent;e={};e.browser=i(t);e.os=a(t);e.isMobile=!!e.os;e.screen=o();return e};i=function(e){var n;n=e.match(t);if(n){return n[0]}else{return e}};a=function(e){var t,r,i;t=null;for(r in n){i=e.match(n[r]);if(i){t={name:r==="iphone"||r==="ipad"?"ios":r,version:i[2].replace("_",".")};break}}return t};return o=function(){return{width:window.innerWidth,height:window.innerHeight}}})(Quo)}).call(this);(function(){(function(e){var t,n,r,i,u,a,o,s,c,f,l,h;t=1;i={};r={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};n={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touch:"click",doubletap:"dblclick",orientationchange:"resize"};u=/complete|loaded|interactive/;e.fn.on=function(t,n,r){if(n==="undefined"||e.toType(n)==="function"){return this.bind(t,n)}else{return this.delegate(n,t,r)}};e.fn.off=function(t,n,r){if(n==="undefined"||e.toType(n)==="function"){return this.unbind(t,n)}else{return this.undelegate(n,t,r)}};e.fn.ready=function(t){if(u.test(document.readyState)){return t(e)}else{return e.fn.addEvent(document,"DOMContentLoaded",function(){return t(e)})}};e.Event=function(e,t){var n,r;n=document.createEvent("Events");n.initEvent(e,true,true,null,null,null,null,null,null,null,null,null,null,null,null);if(t){for(r in t){n[r]=t[r]}}return n};e.fn.bind=function(e,t){return this.each(function(){l(this,e,t)})};e.fn.unbind=function(e,t){return this.each(function(){h(this,e,t)})};e.fn.delegate=function(t,n,r){return this.each(function(i,u){l(u,n,r,t,function(n){return function(r){var i,o;o=e(r.target).closest(t,u).get(0);if(o){i=e.extend(a(r),{currentTarget:o,liveFired:u});return n.apply(o,[i].concat([].slice.call(arguments,1)))}}})})};e.fn.undelegate=function(e,t,n){return this.each(function(){h(this,t,n,e)})};e.fn.trigger=function(t,n,r){if(e.toType(t)==="string"){t=e.Event(t,n)}if(r!=null){t.originalEvent=r}return this.each(function(){this.dispatchEvent(t)})};e.fn.addEvent=function(e,t,n){if(e.addEventListener){return e.addEventListener(t,n,false)}else if(e.attachEvent){return e.attachEvent("on"+t,n)}else{return e["on"+t]=n}};e.fn.removeEvent=function(e,t,n){if(e.removeEventListener){return e.removeEventListener(t,n,false)}else if(e.detachEvent){return e.detachEvent("on"+t,n)}else{return e["on"+t]=null}};l=function(t,n,r,u,a){var c,l,h,d;n=s(n);h=f(t);l=i[h]||(i[h]=[]);c=a&&a(r,n);d={event:n,callback:r,selector:u,proxy:o(c,r,t),delegate:c,index:l.length};l.push(d);return e.fn.addEvent(t,d.event,d.proxy)};h=function(t,n,r,u){var a;n=s(n);a=f(t);return c(a,n,r,u).forEach(function(n){delete i[a][n.index];return e.fn.removeEvent(t,n.event,n.proxy)})};f=function(e){return e._id||(e._id=t++)};s=function(t){var r;r=e.isMobile()?t:n[t];return r||t};o=function(e,t,n){var r;t=e||t;r=function(e){var r;r=t.apply(n,[e].concat(e.data));if(r===false){e.preventDefault()}return r};return r};c=function(e,t,n,r){return(i[e]||[]).filter(function(e){return e&&(!t||e.event===t)&&(!n||e.callback===n)&&(!r||e.selector===r)})};return a=function(t){var n;n=e.extend({originalEvent:t},t);e.each(r,function(e,r){n[e]=function(){this[r]=function(){return true};return t[e].apply(t,arguments)};return n[r]=function(){return false}});return n}})(Quo)}).call(this);(function(){(function($$){var CURRENT_TOUCH,EVENT,FIRST_TOUCH,GESTURE,GESTURES,HOLD_DELAY,TAPS,TOUCH_TIMEOUT,_angle,_capturePinch,_captureRotation,_cleanGesture,_distance,_fingersPosition,_getTouches,_hold,_isSwipe,_listenTouches,_onTouchEnd,_onTouchMove,_onTouchStart,_parentIfText,_swipeDirection,_trigger;TAPS=null;EVENT=void 0;GESTURE={};FIRST_TOUCH=[];CURRENT_TOUCH=[];TOUCH_TIMEOUT=void 0;HOLD_DELAY=650;GESTURES=["touch","tap","singleTap","doubleTap","hold","swipe","swiping","swipeLeft","swipeRight","swipeUp","swipeDown","rotate","rotating","rotateLeft","rotateRight","pinch","pinching","pinchIn","pinchOut","drag","dragLeft","dragRight","dragUp","dragDown"];GESTURES.forEach(function(e){$$.fn[e]=function(t){var n;n=e==="touch"?"touchend":e;return $$(document.body).delegate(this.selector,n,t)};return this});$$(document).ready(function(){return _listenTouches()});_listenTouches=function(){var e;e=$$(document.body);e.bind("touchstart",_onTouchStart);e.bind("touchmove",_onTouchMove);e.bind("touchend",_onTouchEnd);return e.bind("touchcancel",_cleanGesture)};_onTouchStart=function(e){var t,n,r,i;EVENT=e;r=Date.now();t=r-(GESTURE.last||r);TOUCH_TIMEOUT&&clearTimeout(TOUCH_TIMEOUT);i=_getTouches(e);n=i.length;FIRST_TOUCH=_fingersPosition(i,n);GESTURE.el=$$(_parentIfText(i[0].target));GESTURE.fingers=n;GESTURE.last=r;if(!GESTURE.taps){GESTURE.taps=0}GESTURE.taps++;if(n===1){if(n>=1){GESTURE.gap=t>0&&t<=250}return setTimeout(_hold,HOLD_DELAY)}else if(n===2){GESTURE.initial_angle=parseInt(_angle(FIRST_TOUCH),10);GESTURE.initial_distance=parseInt(_distance(FIRST_TOUCH),10);GESTURE.angle_difference=0;return GESTURE.distance_difference=0}};_onTouchMove=function(e){var t,n,r;EVENT=e;if(GESTURE.el){r=_getTouches(e);t=r.length;if(t===GESTURE.fingers){CURRENT_TOUCH=_fingersPosition(r,t);n=_isSwipe(e);if(n){GESTURE.prevSwipe=true}if(n||GESTURE.prevSwipe===true){_trigger("swiping")}if(t===2){_captureRotation();_capturePinch();e.preventDefault()}}else{_cleanGesture()}}return true};_isSwipe=function(e){var t,n,r;t=false;if(CURRENT_TOUCH[0]){n=Math.abs(FIRST_TOUCH[0].x-CURRENT_TOUCH[0].x)>30;r=Math.abs(FIRST_TOUCH[0].y-CURRENT_TOUCH[0].y)>30;t=GESTURE.el&&(n||r)}return t};_onTouchEnd=function(e){var t,n,r,i,u;EVENT=e;_trigger("touch");if(GESTURE.fingers===1){if(GESTURE.taps===2&&GESTURE.gap){_trigger("doubleTap");_cleanGesture()}else if(_isSwipe()||GESTURE.prevSwipe){_trigger("swipe");u=_swipeDirection(FIRST_TOUCH[0].x,CURRENT_TOUCH[0].x,FIRST_TOUCH[0].y,CURRENT_TOUCH[0].y);_trigger("swipe"+u);_cleanGesture()}else{_trigger("tap");if(GESTURE.taps===1){TOUCH_TIMEOUT=setTimeout(function(){_trigger("singleTap");return _cleanGesture()},100)}}}else{t=false;if(GESTURE.angle_difference!==0){_trigger("rotate",{angle:GESTURE.angle_difference});i=GESTURE.angle_difference>0?"rotateRight":"rotateLeft";_trigger(i,{angle:GESTURE.angle_difference});t=true}if(GESTURE.distance_difference!==0){_trigger("pinch",{angle:GESTURE.distance_difference});r=GESTURE.distance_difference>0?"pinchOut":"pinchIn";_trigger(r,{distance:GESTURE.distance_difference});t=true}if(!t&&CURRENT_TOUCH[0]){if(Math.abs(FIRST_TOUCH[0].x-CURRENT_TOUCH[0].x)>10||Math.abs(FIRST_TOUCH[0].y-CURRENT_TOUCH[0].y)>10){_trigger("drag");n=_swipeDirection(FIRST_TOUCH[0].x,CURRENT_TOUCH[0].x,FIRST_TOUCH[0].y,CURRENT_TOUCH[0].y);_trigger("drag"+n)}}_cleanGesture()}return EVENT=void 0};_fingersPosition=function(e,t){var n,r;r=[];n=0;e=e[0].targetTouches?e[0].targetTouches:e;while(n<t){r.push({x:e[n].pageX,y:e[n].pageY});n++}return r};_captureRotation=function(){var angle,diff,i,symbol;angle=parseInt(_angle(CURRENT_TOUCH),10);diff=parseInt(GESTURE.initial_angle-angle,10);if(Math.abs(diff)>20||GESTURE.angle_difference!==0){i=0;symbol=GESTURE.angle_difference<0?"-":"+";while(Math.abs(diff-GESTURE.angle_difference)>90&&i++<10){eval("diff "+symbol+"= 180;")}GESTURE.angle_difference=parseInt(diff,10);return _trigger("rotating",{angle:GESTURE.angle_difference})}};_capturePinch=function(){var e,t;t=parseInt(_distance(CURRENT_TOUCH),10);e=GESTURE.initial_distance-t;if(Math.abs(e)>10){GESTURE.distance_difference=e;return _trigger("pinching",{distance:e})}};_trigger=function(e,t){if(GESTURE.el){t=t||{};if(CURRENT_TOUCH[0]){t.iniTouch=GESTURE.fingers>1?FIRST_TOUCH:FIRST_TOUCH[0];t.currentTouch=GESTURE.fingers>1?CURRENT_TOUCH:CURRENT_TOUCH[0]}return GESTURE.el.trigger(e,t,EVENT)}};_cleanGesture=function(e){FIRST_TOUCH=[];CURRENT_TOUCH=[];GESTURE={};return clearTimeout(TOUCH_TIMEOUT)};_angle=function(e){var t,n,r;t=e[0];n=e[1];r=Math.atan((n.y-t.y)*-1/(n.x-t.x))*(180/Math.PI);if(r<0){return r+180}else{return r}};_distance=function(e){var t,n;t=e[0];n=e[1];return Math.sqrt((n.x-t.x)*(n.x-t.x)+(n.y-t.y)*(n.y-t.y))*-1};_getTouches=function(e){if($$.isMobile()){return e.touches}else{return[e]}};_parentIfText=function(e){if("tagName"in e){return e}else{return e.parentNode}};_swipeDirection=function(e,t,n,r){var i,u;i=Math.abs(e-t);u=Math.abs(n-r);if(i>=u){if(e-t>0){return"Left"}else{return"Right"}}else{if(n-r>0){return"Up"}else{return"Down"}}};return _hold=function(){if(GESTURE.last&&Date.now()-GESTURE.last>=HOLD_DELAY){_trigger("hold");return GESTURE.taps=0}}})(Quo)}).call(this);(function(){(function(e){e.fn.text=function(t){if(t||e.toType(t)==="number"){return this.each(function(){return this.textContent=t})}else{return this[0].textContent}};e.fn.html=function(t){var n;n=e.toType(t);if(t||n==="number"||n==="string"){return this.each(function(){var e,r,i,u;if(n==="string"||n==="number"){return this.innerHTML=t}else{this.innerHTML=null;if(n==="array"){u=[];for(r=0,i=t.length;r<i;r++){e=t[r];u.push(this.appendChild(e))}return u}else{return this.appendChild(t)}}})}else{return this[0].innerHTML}};e.fn.append=function(t){var n;n=e.toType(t);return this.each(function(){var e=this;if(n==="string"){return this.insertAdjacentHTML("beforeend",t)}else if(n==="array"){return t.each(function(t,n){return e.appendChild(n)})}else{return this.appendChild(t)}})};e.fn.prepend=function(t){var n;n=e.toType(t);return this.each(function(){var e=this;if(n==="string"){return this.insertAdjacentHTML("afterbegin",t)}else if(n==="array"){return t.each(function(t,n){return e.insertBefore(n,e.firstChild)})}else{return this.insertBefore(t,this.firstChild)}})};e.fn.replaceWith=function(t){var n;n=e.toType(t);this.each(function(){var e=this;if(this.parentNode){if(n==="string"){return this.insertAdjacentHTML("beforeBegin",t)}else if(n==="array"){return t.each(function(t,n){return e.parentNode.insertBefore(n,e)})}else{return this.parentNode.insertBefore(t,this)}}});return this.remove()};return e.fn.empty=function(){return this.each(function(){return this.innerHTML=null})}})(Quo)}).call(this);(function(){(function(e){var t,n,r,i,u,a;r="parentNode";t=/^\.([\w-]+)$/;n=/^#[\w\d-]+$/;i=/^[\w-]+$/;e.query=function(e,r){var u;r=r.trim();if(t.test(r)){u=e.getElementsByClassName(r.replace(".",""))}else if(i.test(r)){u=e.getElementsByTagName(r)}else if(n.test(r)&&e===document){u=e.getElementById(r.replace("#",""));if(!u){u=[]}}else{u=e.querySelectorAll(r)}if(u.nodeType){return[u]}else{return Array.prototype.slice.call(u)}};e.fn.find=function(t){var n;if(this.length===1){n=Quo.query(this[0],t)}else{n=this.map(function(){return Quo.query(this,t)})}return e(n)};e.fn.parent=function(e){var t;t=e?a(this):this.instance(r);return u(t,e)};e.fn.siblings=function(e){var t;t=this.map(function(e,t){return Array.prototype.slice.call(t.parentNode.children).filter(function(e){return e!==t})});return u(t,e)};e.fn.children=function(e){var t;t=this.map(function(){return Array.prototype.slice.call(this.children)});return u(t,e)};e.fn.get=function(e){if(e===undefined){return this}else{return this[e]}};e.fn.first=function(){return e(this[0])};e.fn.last=function(){return e(this[this.length-1])};e.fn.closest=function(t,n){var r,i;i=this[0];r=e(t);if(!r.length){i=null}while(i&&r.indexOf(i)<0){i=i!==n&&i!==document&&i.parentNode}return e(i)};e.fn.each=function(e){this.forEach(function(t,n){return e.call(t,n,t)});return this};a=function(t){var n;n=[];while(t.length>0){t=e.map(t,function(e){if((e=e.parentNode)&&e!==document&&n.indexOf(e)<0){n.push(e);return e}})}return n};return u=function(t,n){if(n===undefined){return e(t)}else{return e(t).filter(n)}}})(Quo)}).call(this);(function(){(function(e){var t,n,r;t=["-webkit-","-moz-","-ms-","-o-",""];e.fn.addClass=function(e){return this.each(function(){if(!r(e,this.className)){this.className+=" "+e;return this.className=this.className.trim()}})};e.fn.removeClass=function(e){return this.each(function(){if(!e){return this.className=""}else{if(r(e,this.className)){return this.className=this.className.replace(e," ").replace(/\s+/g," ").trim()}}})};e.fn.toggleClass=function(e){return this.each(function(){if(r(e,this.className)){return this.className=this.className.replace(e," ")}else{this.className+=" "+e;return this.className=this.className.trim()}})};e.fn.hasClass=function(e){return r(e,this[0].className)};e.fn.style=function(e,t){if(t){return this.each(function(){return this.style[e]=t})}else{return this[0].style[e]||n(this[0],e)}};e.fn.css=function(e,t){return this.style(e,t)};e.fn.vendor=function(e,n){var r,i,u,a;a=[];for(i=0,u=t.length;i<u;i++){r=t[i];a.push(this.style(""+r+e,n))}return a};r=function(e,t){var n;n=t.split(/\s+/g);return n.indexOf(e)>=0};return n=function(e,t){return document.defaultView.getComputedStyle(e,"")[t]}})(Quo)}).call(this);
/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||"toggle"==d){if(!b)a[_callback]("ifClicked");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,
v=b==n,s=u?_determinate:e?y:"enabled",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest("form"),p='input[name="'+c.name+'"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,"force")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"default");g[_add](B||l(a,b)||"");g.attr("role")&&!u&&g.attr("aria-"+(v?n:k),"true");
g[_remove](F||l(a,s)||"")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:"enabled",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||"force"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"pointer");g[_remove](r||l(a,b)||"");g.attr("role")&&!f&&g.attr("aria-"+(m?n:k),"false");g[_add](q||l(a,s)||"")}function E(a,b){if(a.data(m)){a.parent().html(a.attr("style",a.data(m).s||""));if(b)a[_callback](b);a.off(".i").unwrap();
f(_label+'[for="'+a[0].id+'"]').add(a.closest(_label)).off(".i")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?"":"Class")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if"+t(f))}}var m="iCheck",C=m+"-helper",r="radio",k="checked",y="un"+k,n="disabled";_determinate="determinate";_indeterminate="in"+_determinate;_update="update";_type="type";_click="click";_touch="touchbegin.i touchend.i";
_add="addClass";_remove="removeClass";_callback="trigger";_label="label";_cursor="cursor";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type="checkbox"], input[type="'+r+'"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=
f(this);"destroy"==a?E(c,"ifDestroyed"):A(c,!0,a);f.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||"hover",s=e.focusClass||"focus",t=e.activeClass||"active",B=!!e.labelHover,w=e.labelHoverClass||"hover",p=(""+e.increaseArea).replace("%","")|0;if("checkbox"==l||l==r)d='input[type="'+l+'"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,
b=c.id,g=-p+"%",d=100+2*p+"%",d={position:"absolute",top:g,left:g,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},g=_mobile?{position:"absolute",visibility:"hidden"}:p?d:{position:"absolute",opacity:0},l="checkbox"==c[_type]?e.checkboxClass||"icheckbox":e.radioClass||"i"+r,z=f(_label+'[for="'+b+'"]').add(a.closest(_label)),u=!!e.aria,y=m+"-"+Math.random().toString(36).substr(2,6),h='<div class="'+l+'" '+(u?'role="'+c[_type]+'" ':"");u&&z.each(function(){h+=
'aria-labelledby="';this.id?h+=this.id:(this.id=y,h+=y);h+='"'});h=a.wrap(h+"/>")[_callback]("ifCreated").parent().append(e.insert);d=f('<ins class="'+C+'"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr("style")}).css(g);e.inheritClass&&h[_add](c.className||"");e.inheritID&&b&&h.attr("id",m+"-"+b);"static"==h.css("position")&&h.css("position","relative");A(a,!0,_update);if(z.length)z.on(_click+".i mouseover.i mouseout.i "+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is("a"))return;
A(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if("keydown"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if("keyup"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h["blur"==d?_remove:_add](s)});d.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(b){var d=
b[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+" "+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);
// Ion.RangeSlider | version 2.0.6 | https://github.com/IonDen/ion.rangeSlider
(function(g,q,h,r,u){var t=0,n=function(){var a=r.userAgent,b=/msie\s\d+/i;return 0<a.search(b)&&(a=b.exec(a).toString(),a=a.split(" ")[1],9>a)?(g("html").addClass("lt-ie9"),!0):!1}();Function.prototype.bind||(Function.prototype.bind=function(a){var b=this,c=[].slice;if("function"!=typeof b)throw new TypeError;var d=c.call(arguments,1),e=function(){if(this instanceof e){var f=function(){};f.prototype=b.prototype;var f=new f,k=b.apply(f,d.concat(c.call(arguments)));return Object(k)===k?k:f}return b.apply(a,
d.concat(c.call(arguments)))};return e});Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){var c;if(null==this)throw new TypeError('"this" is null or not defined');var d=Object(this),e=d.length>>>0;if(0===e)return-1;c=+b||0;Infinity===Math.abs(c)&&(c=0);if(c>=e)return-1;for(c=Math.max(0<=c?c:e-Math.abs(c),0);c<e;){if(c in d&&d[c]===a)return c;c++}return-1});var p=function(a,b,c){this.VERSION="2.0.6";this.input=a;this.plugin_count=c;this.old_to=this.old_from=this.calc_count=this.current_plugin=
0;this.raf_id=null;this.is_update=this.is_key=this.force_redraw=this.dragging=!1;this.is_start=!0;this.is_click=this.is_resize=this.is_active=!1;this.$cache={win:g(h),body:g(q.body),input:g(a),cont:null,rs:null,min:null,max:null,from:null,to:null,single:null,bar:null,line:null,s_single:null,s_from:null,s_to:null,shad_single:null,shad_from:null,shad_to:null,grid:null,grid_labels:[]};c=this.$cache.input;a={type:c.data("type"),min:c.data("min"),max:c.data("max"),from:c.data("from"),to:c.data("to"),step:c.data("step"),
min_interval:c.data("minInterval"),max_interval:c.data("maxInterval"),drag_interval:c.data("dragInterval"),values:c.data("values"),from_fixed:c.data("fromFixed"),from_min:c.data("fromMin"),from_max:c.data("fromMax"),from_shadow:c.data("fromShadow"),to_fixed:c.data("toFixed"),to_min:c.data("toMin"),to_max:c.data("toMax"),to_shadow:c.data("toShadow"),prettify_enabled:c.data("prettifyEnabled"),prettify_separator:c.data("prettifySeparator"),force_edges:c.data("forceEdges"),keyboard:c.data("keyboard"),
keyboard_step:c.data("keyboardStep"),grid:c.data("grid"),grid_margin:c.data("gridMargin"),grid_num:c.data("gridNum"),grid_snap:c.data("gridSnap"),hide_min_max:c.data("hideMinMax"),hide_from_to:c.data("hideFromTo"),prefix:c.data("prefix"),postfix:c.data("postfix"),max_postfix:c.data("maxPostfix"),decorate_both:c.data("decorateBoth"),values_separator:c.data("valuesSeparator"),disable:c.data("disable")};a.values=a.values&&a.values.split(",");b=g.extend(a,b);if(c=c.prop("value"))c=c.split(";"),c[0]&&
c[0]==+c[0]&&(c[0]=+c[0]),c[1]&&c[1]==+c[1]&&(c[1]=+c[1]),b.values&&b.values.length?(a.from=c[0]&&b.values.indexOf(c[0]),a.to=c[1]&&b.values.indexOf(c[1])):(a.from=c[0]&&+c[0],a.to=c[1]&&+c[1]);this.options=g.extend({type:"single",min:10,max:100,from:null,to:null,step:1,min_interval:0,max_interval:0,drag_interval:!1,values:[],p_values:[],from_fixed:!1,from_min:null,from_max:null,from_shadow:!1,to_fixed:!1,to_min:null,to_max:null,to_shadow:!1,prettify_enabled:!0,prettify_separator:" ",prettify:null,
force_edges:!1,keyboard:!1,keyboard_step:5,grid:!1,grid_margin:!0,grid_num:4,grid_snap:!1,hide_min_max:!1,hide_from_to:!1,prefix:"",postfix:"",max_postfix:"",decorate_both:!0,values_separator:" \u2014 ",disable:!1,onStart:null,onChange:null,onFinish:null,onUpdate:null},b);this.validate();this.result={input:this.$cache.input,slider:null,min:this.options.min,max:this.options.max,from:this.options.from,from_percent:0,from_value:null,to:this.options.to,to_percent:0,to_value:null};this.coords={x_gap:0,
x_pointer:0,w_rs:0,w_rs_old:0,w_handle:0,p_gap:0,p_gap_left:0,p_gap_right:0,p_step:0,p_pointer:0,p_handle:0,p_single:0,p_single_real:0,p_from:0,p_from_real:0,p_to:0,p_to_real:0,p_bar_x:0,p_bar_w:0,grid_gap:0,big_num:0,big:[],big_w:[],big_p:[],big_x:[]};this.labels={w_min:0,w_max:0,w_from:0,w_to:0,w_single:0,p_min:0,p_max:0,p_from:0,p_from_left:0,p_to:0,p_to_left:0,p_single:0,p_single_left:0};this.init()};p.prototype={init:function(a){this.coords.p_step=this.options.step/((this.options.max-this.options.min)/
100);this.target="base";this.toggleInput();this.append();this.setMinMax();if(a){if(this.force_redraw=!0,this.calc(!0),this.options.onUpdate&&"function"===typeof this.options.onUpdate)this.options.onUpdate(this.result)}else if(this.force_redraw=!0,this.calc(!0),this.options.onStart&&"function"===typeof this.options.onStart)this.options.onStart(this.result);this.updateScene();this.raf_id=requestAnimationFrame(this.updateScene.bind(this))},append:function(){this.$cache.input.before('<span class="irs js-irs-'+
this.plugin_count+'"></span>');this.$cache.input.prop("readonly",!0);this.$cache.cont=this.$cache.input.prev();this.result.slider=this.$cache.cont;this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>');
this.$cache.rs=this.$cache.cont.find(".irs");this.$cache.min=this.$cache.cont.find(".irs-min");this.$cache.max=this.$cache.cont.find(".irs-max");this.$cache.from=this.$cache.cont.find(".irs-from");this.$cache.to=this.$cache.cont.find(".irs-to");this.$cache.single=this.$cache.cont.find(".irs-single");this.$cache.bar=this.$cache.cont.find(".irs-bar");this.$cache.line=this.$cache.cont.find(".irs-line");this.$cache.grid=this.$cache.cont.find(".irs-grid");"single"===this.options.type?(this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'),
this.$cache.s_single=this.$cache.cont.find(".single"),this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.shad_single=this.$cache.cont.find(".shadow-single")):(this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'),this.$cache.s_from=this.$cache.cont.find(".from"),this.$cache.s_to=this.$cache.cont.find(".to"),this.$cache.shad_from=
this.$cache.cont.find(".shadow-from"),this.$cache.shad_to=this.$cache.cont.find(".shadow-to"));this.options.hide_from_to&&(this.$cache.from[0].style.display="none",this.$cache.to[0].style.display="none",this.$cache.single[0].style.display="none");this.appendGrid();this.options.disable?(this.appendDisableMask(),this.$cache.input[0].disabled=!0):(this.$cache.cont.removeClass("irs-disabled"),this.$cache.input[0].disabled=!1,this.bindEvents())},appendDisableMask:function(){this.$cache.cont.append('<span class="irs-disable-mask"></span>');
this.$cache.cont.addClass("irs-disabled")},remove:function(){this.$cache.cont.remove();this.$cache.cont=null;this.$cache.line.off("keydown.irs_"+this.plugin_count);this.$cache.body.off("touchmove.irs_"+this.plugin_count);this.$cache.body.off("mousemove.irs_"+this.plugin_count);this.$cache.win.off("touchend.irs_"+this.plugin_count);this.$cache.win.off("mouseup.irs_"+this.plugin_count);n&&(this.$cache.body.off("mouseup.irs_"+this.plugin_count),this.$cache.body.off("mouseleave.irs_"+this.plugin_count));
this.$cache.grid_labels=[];this.coords.big=[];this.coords.big_w=[];this.coords.big_p=[];this.coords.big_x=[];cancelAnimationFrame(this.raf_id)},bindEvents:function(){this.$cache.body.on("touchmove.irs_"+this.plugin_count,this.pointerMove.bind(this));this.$cache.body.on("mousemove.irs_"+this.plugin_count,this.pointerMove.bind(this));this.$cache.win.on("touchend.irs_"+this.plugin_count,this.pointerUp.bind(this));this.$cache.win.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this));this.$cache.line.on("touchstart.irs_"+
this.plugin_count,this.pointerClick.bind(this,"click"));this.$cache.line.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"));this.options.drag_interval&&"double"===this.options.type?(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"both")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"both"))):(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.bar.on("mousedown.irs_"+
this.plugin_count,this.pointerClick.bind(this,"click")));"single"===this.options.type?(this.$cache.s_single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.shad_single.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.s_single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.shad_single.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))):(this.$cache.s_from.on("touchstart.irs_"+
this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.s_from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,
"to")),this.$cache.shad_from.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")));if(this.options.keyboard)this.$cache.line.on("keydown.irs_"+this.plugin_count,this.key.bind(this,"keyboard"));n&&(this.$cache.body.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.body.on("mouseleave.irs_"+this.plugin_count,this.pointerUp.bind(this)))},pointerMove:function(a){this.dragging&&
(this.coords.x_pointer=(a.pageX||a.originalEvent.touches&&a.originalEvent.touches[0].pageX)-this.coords.x_gap,this.calc())},pointerUp:function(a){if(this.current_plugin===this.plugin_count&&this.is_active){this.is_active=!1;var b=this.options.onFinish&&"function"===typeof this.options.onFinish;a=g.contains(this.$cache.cont[0],a.target)||this.dragging;if(b&&a)this.options.onFinish(this.result);this.$cache.cont.find(".state_hover").removeClass("state_hover");this.force_redraw=!0;this.dragging=!1;n&&
g("*").prop("unselectable",!1)}},pointerDown:function(a,b){b.preventDefault();var c=b.pageX||b.originalEvent.touches&&b.originalEvent.touches[0].pageX;if(2!==b.button){this.current_plugin=this.plugin_count;this.target=a;this.dragging=this.is_active=!0;this.coords.x_gap=this.$cache.rs.offset().left;this.coords.x_pointer=c-this.coords.x_gap;this.calcPointer();switch(a){case "single":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_single);break;case "from":this.coords.p_gap=this.toFixed(this.coords.p_pointer-
this.coords.p_from);this.$cache.s_from.addClass("state_hover");this.$cache.s_from.addClass("type_last");this.$cache.s_to.removeClass("type_last");break;case "to":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_to);this.$cache.s_to.addClass("state_hover");this.$cache.s_to.addClass("type_last");this.$cache.s_from.removeClass("type_last");break;case "both":this.coords.p_gap_left=this.toFixed(this.coords.p_pointer-this.coords.p_from),this.coords.p_gap_right=this.toFixed(this.coords.p_to-
this.coords.p_pointer),this.$cache.s_to.removeClass("type_last"),this.$cache.s_from.removeClass("type_last")}n&&g("*").prop("unselectable",!0);this.$cache.line.trigger("focus")}},pointerClick:function(a,b){b.preventDefault();var c=b.pageX||b.originalEvent.touches&&b.originalEvent.touches[0].pageX;2!==b.button&&(this.current_plugin=this.plugin_count,this.target=a,this.is_click=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=+(c-this.coords.x_gap).toFixed(),this.force_redraw=
!0,this.calc(),this.$cache.line.trigger("focus"))},key:function(a,b){if(!(this.current_plugin!==this.plugin_count||b.altKey||b.ctrlKey||b.shiftKey||b.metaKey)){switch(b.which){case 83:case 65:case 40:case 37:b.preventDefault();this.moveByKey(!1);break;case 87:case 68:case 38:case 39:b.preventDefault(),this.moveByKey(!0)}return!0}},moveByKey:function(a){var b=this.coords.p_pointer,b=a?b+this.options.keyboard_step:b-this.options.keyboard_step;this.coords.x_pointer=this.toFixed(this.coords.w_rs/100*
b);this.is_key=!0;this.calc()},setMinMax:function(){this.options&&(this.options.hide_min_max?(this.$cache.min[0].style.display="none",this.$cache.max[0].style.display="none"):(this.options.values.length?(this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])),this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))):(this.$cache.min.html(this.decorate(this._prettify(this.options.min),this.options.min)),this.$cache.max.html(this.decorate(this._prettify(this.options.max),
this.options.max))),this.labels.w_min=this.$cache.min.outerWidth(!1),this.labels.w_max=this.$cache.max.outerWidth(!1)))},calc:function(a){if(this.options){this.calc_count++;if(10===this.calc_count||a)this.calc_count=0,this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_handle="single"===this.options.type?this.$cache.s_single.outerWidth(!1):this.$cache.s_from.outerWidth(!1);if(this.coords.w_rs){this.calcPointer();this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100);
a=100-this.coords.p_handle;var b=this.toFixed(this.coords.p_pointer-this.coords.p_gap);"click"===this.target&&(b=this.toFixed(this.coords.p_pointer-this.coords.p_handle/2),this.target=this.chooseHandle(b));0>b?b=0:b>a&&(b=a);switch(this.target){case "base":b=(this.options.max-this.options.min)/100;a=(this.result.from-this.options.min)/b;b=(this.result.to-this.options.min)/b;this.coords.p_single_real=this.toFixed(a);this.coords.p_from_real=this.toFixed(a);this.coords.p_to_real=this.toFixed(b);this.coords.p_single_real=
this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max);this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max);this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max);this.coords.p_single=this.toFixed(a-this.coords.p_handle/100*a);this.coords.p_from=this.toFixed(a-this.coords.p_handle/100*a);this.coords.p_to=this.toFixed(b-this.coords.p_handle/100*b);this.target=
null;break;case "single":if(this.options.from_fixed)break;this.coords.p_single_real=this.calcWithStep(b/a*100);this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max);this.coords.p_single=this.toFixed(this.coords.p_single_real/100*a);break;case "from":if(this.options.from_fixed)break;this.coords.p_from_real=this.calcWithStep(b/a*100);this.coords.p_from_real>this.coords.p_to_real&&(this.coords.p_from_real=this.coords.p_to_real);this.coords.p_from_real=
this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max);this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from");this.coords.p_from_real=this.checkMaxInterval(this.coords.p_from_real,this.coords.p_to_real,"from");this.coords.p_from=this.toFixed(this.coords.p_from_real/100*a);break;case "to":if(this.options.to_fixed)break;this.coords.p_to_real=this.calcWithStep(b/a*100);this.coords.p_to_real<this.coords.p_from_real&&(this.coords.p_to_real=
this.coords.p_from_real);this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max);this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to");this.coords.p_to_real=this.checkMaxInterval(this.coords.p_to_real,this.coords.p_from_real,"to");this.coords.p_to=this.toFixed(this.coords.p_to_real/100*a);break;case "both":b=this.toFixed(b+.1*this.coords.p_handle),this.coords.p_from_real=this.calcWithStep((b-this.coords.p_gap_left)/
a*100),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from=this.toFixed(this.coords.p_from_real/100*a),this.coords.p_to_real=this.calcWithStep((b+this.coords.p_gap_right)/a*100),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,
this.coords.p_from_real,"to"),this.coords.p_to=this.toFixed(this.coords.p_to_real/100*a)}"single"===this.options.type?(this.coords.p_bar_x=this.coords.p_handle/2,this.coords.p_bar_w=this.coords.p_single,this.result.from_percent=this.coords.p_single_real,this.result.from=this.calcReal(this.coords.p_single_real),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from])):(this.coords.p_bar_x=this.toFixed(this.coords.p_from+this.coords.p_handle/2),this.coords.p_bar_w=
this.toFixed(this.coords.p_to-this.coords.p_from),this.result.from_percent=this.coords.p_from_real,this.result.from=this.calcReal(this.coords.p_from_real),this.result.to_percent=this.coords.p_to_real,this.result.to=this.calcReal(this.coords.p_to_real),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from],this.result.to_value=this.options.values[this.result.to]));this.calcMinMax();this.calcLabels()}}},calcPointer:function(){this.coords.w_rs?(0>this.coords.x_pointer||
isNaN(this.coords.x_pointer)?this.coords.x_pointer=0:this.coords.x_pointer>this.coords.w_rs&&(this.coords.x_pointer=this.coords.w_rs),this.coords.p_pointer=this.toFixed(this.coords.x_pointer/this.coords.w_rs*100)):this.coords.p_pointer=0},chooseHandle:function(a){return"single"===this.options.type?"single":a>=this.coords.p_from_real+(this.coords.p_to_real-this.coords.p_from_real)/2?"to":"from"},calcMinMax:function(){this.coords.w_rs&&(this.labels.p_min=this.labels.w_min/this.coords.w_rs*100,this.labels.p_max=
this.labels.w_max/this.coords.w_rs*100)},calcLabels:function(){this.coords.w_rs&&!this.options.hide_from_to&&("single"===this.options.type?(this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=this.coords.p_single+this.coords.p_handle/2-this.labels.p_single/2):(this.labels.w_from=this.$cache.from.outerWidth(!1),this.labels.p_from=this.labels.w_from/this.coords.w_rs*100,this.labels.p_from_left=this.coords.p_from+
this.coords.p_handle/2-this.labels.p_from/2,this.labels.p_from_left=this.toFixed(this.labels.p_from_left),this.labels.p_from_left=this.checkEdges(this.labels.p_from_left,this.labels.p_from),this.labels.w_to=this.$cache.to.outerWidth(!1),this.labels.p_to=this.labels.w_to/this.coords.w_rs*100,this.labels.p_to_left=this.coords.p_to+this.coords.p_handle/2-this.labels.p_to/2,this.labels.p_to_left=this.toFixed(this.labels.p_to_left),this.labels.p_to_left=this.checkEdges(this.labels.p_to_left,this.labels.p_to),
this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=(this.labels.p_from_left+this.labels.p_to_left+this.labels.p_to)/2-this.labels.p_single/2,this.labels.p_single_left=this.toFixed(this.labels.p_single_left)),this.labels.p_single_left=this.checkEdges(this.labels.p_single_left,this.labels.p_single))},updateScene:function(){this.options&&(this.drawHandles(),this.raf_id=requestAnimationFrame(this.updateScene.bind(this)))},
drawHandles:function(){this.coords.w_rs=this.$cache.rs.outerWidth(!1);if(this.coords.w_rs){this.coords.w_rs!==this.coords.w_rs_old&&(this.target="base",this.is_resize=!0);if(this.coords.w_rs!==this.coords.w_rs_old||this.force_redraw)this.setMinMax(),this.calc(!0),this.drawLabels(),this.options.grid&&(this.calcGridMargin(),this.calcGridLabels()),this.force_redraw=!0,this.coords.w_rs_old=this.coords.w_rs,this.drawShadow();if(this.coords.w_rs&&(this.dragging||this.force_redraw||this.is_key)){if(this.old_from!==
this.result.from||this.old_to!==this.result.to||this.force_redraw||this.is_key){this.drawLabels();this.$cache.bar[0].style.left=this.coords.p_bar_x+"%";this.$cache.bar[0].style.width=this.coords.p_bar_w+"%";if("single"===this.options.type)this.$cache.s_single[0].style.left=this.coords.p_single+"%",this.$cache.single[0].style.left=this.labels.p_single_left+"%",this.options.values.length?(this.$cache.input.prop("value",this.result.from_value),this.$cache.input.data("from",this.result.from_value)):(this.$cache.input.prop("value",
this.result.from),this.$cache.input.data("from",this.result.from));else{this.$cache.s_from[0].style.left=this.coords.p_from+"%";this.$cache.s_to[0].style.left=this.coords.p_to+"%";if(this.old_from!==this.result.from||this.force_redraw)this.$cache.from[0].style.left=this.labels.p_from_left+"%";if(this.old_to!==this.result.to||this.force_redraw)this.$cache.to[0].style.left=this.labels.p_to_left+"%";this.$cache.single[0].style.left=this.labels.p_single_left+"%";this.options.values.length?(this.$cache.input.prop("value",
this.result.from_value+";"+this.result.to_value),this.$cache.input.data("from",this.result.from_value),this.$cache.input.data("to",this.result.to_value)):(this.$cache.input.prop("value",this.result.from+";"+this.result.to),this.$cache.input.data("from",this.result.from),this.$cache.input.data("to",this.result.to))}this.old_from===this.result.from&&this.old_to===this.result.to||this.is_start||this.$cache.input.trigger("change");this.old_from=this.result.from;this.old_to=this.result.to;if(this.options.onChange&&
"function"===typeof this.options.onChange&&!this.is_resize&&!this.is_update&&!this.is_start)this.options.onChange(this.result);if(this.options.onFinish&&"function"===typeof this.options.onFinish&&(this.is_key||this.is_click))this.options.onFinish(this.result);this.is_resize=this.is_update=!1}this.force_redraw=this.is_click=this.is_key=this.is_start=!1}}},drawLabels:function(){if(this.options){var a=this.options.values.length,b=this.options.p_values,c;if(!this.options.hide_from_to)if("single"===this.options.type)a=
a?this.decorate(b[this.result.from]):this.decorate(this._prettify(this.result.from),this.result.from),this.$cache.single.html(a),this.calcLabels(),this.$cache.min[0].style.visibility=this.labels.p_single_left<this.labels.p_min+1?"hidden":"visible",this.$cache.max[0].style.visibility=this.labels.p_single_left+this.labels.p_single>100-this.labels.p_max-1?"hidden":"visible";else{a?(this.options.decorate_both?(a=this.decorate(b[this.result.from]),a+=this.options.values_separator,a+=this.decorate(b[this.result.to])):
a=this.decorate(b[this.result.from]+this.options.values_separator+b[this.result.to]),c=this.decorate(b[this.result.from]),b=this.decorate(b[this.result.to])):(this.options.decorate_both?(a=this.decorate(this._prettify(this.result.from)),a+=this.options.values_separator,a+=this.decorate(this._prettify(this.result.to))):a=this.decorate(this._prettify(this.result.from)+this.options.values_separator+this._prettify(this.result.to),this.result.from),c=this.decorate(this._prettify(this.result.from),this.result.from),
b=this.decorate(this._prettify(this.result.to),this.result.to));this.$cache.single.html(a);this.$cache.from.html(c);this.$cache.to.html(b);this.calcLabels();b=Math.min(this.labels.p_single_left,this.labels.p_from_left);a=this.labels.p_single_left+this.labels.p_single;c=this.labels.p_to_left+this.labels.p_to;var d=Math.max(a,c);this.labels.p_from_left+this.labels.p_from>=this.labels.p_to_left?(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility=
"visible",this.result.from===this.result.to?(this.$cache.from[0].style.visibility="visible",this.$cache.single[0].style.visibility="hidden",d=c):(this.$cache.from[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",d=Math.max(a,c))):(this.$cache.from[0].style.visibility="visible",this.$cache.to[0].style.visibility="visible",this.$cache.single[0].style.visibility="hidden");this.$cache.min[0].style.visibility=b<this.labels.p_min+1?"hidden":"visible";this.$cache.max[0].style.visibility=
d>100-this.labels.p_max-1?"hidden":"visible"}}},drawShadow:function(){var a=this.options,b=this.$cache,c="number"===typeof a.from_min&&!isNaN(a.from_min),d="number"===typeof a.from_max&&!isNaN(a.from_max),e="number"===typeof a.to_min&&!isNaN(a.to_min),f="number"===typeof a.to_max&&!isNaN(a.to_max);"single"===a.type?a.from_shadow&&(c||d)?(c=this.calcPercent(a.from_min||a.min),d=this.calcPercent(a.from_max||a.max)-c,c=this.toFixed(c-this.coords.p_handle/100*c),d=this.toFixed(d-this.coords.p_handle/
100*d),c+=this.coords.p_handle/2,b.shad_single[0].style.display="block",b.shad_single[0].style.left=c+"%",b.shad_single[0].style.width=d+"%"):b.shad_single[0].style.display="none":(a.from_shadow&&(c||d)?(c=this.calcPercent(a.from_min||a.min),d=this.calcPercent(a.from_max||a.max)-c,c=this.toFixed(c-this.coords.p_handle/100*c),d=this.toFixed(d-this.coords.p_handle/100*d),c+=this.coords.p_handle/2,b.shad_from[0].style.display="block",b.shad_from[0].style.left=c+"%",b.shad_from[0].style.width=d+"%"):
b.shad_from[0].style.display="none",a.to_shadow&&(e||f)?(e=this.calcPercent(a.to_min||a.min),a=this.calcPercent(a.to_max||a.max)-e,e=this.toFixed(e-this.coords.p_handle/100*e),a=this.toFixed(a-this.coords.p_handle/100*a),e+=this.coords.p_handle/2,b.shad_to[0].style.display="block",b.shad_to[0].style.left=e+"%",b.shad_to[0].style.width=a+"%"):b.shad_to[0].style.display="none")},toggleInput:function(){this.$cache.input.toggleClass("irs-hidden-input")},calcPercent:function(a){return this.toFixed((a-
this.options.min)/((this.options.max-this.options.min)/100))},calcReal:function(a){var b=this.options.min,c=this.options.max,d=0;0>b&&(d=Math.abs(b),b+=d,c+=d);a=(c-b)/100*a+b;(b=this.options.step.toString().split(".")[1])?a=+a.toFixed(b.length):(a/=this.options.step,a*=this.options.step,a=+a.toFixed(0));d&&(a-=d);a<this.options.min?a=this.options.min:a>this.options.max&&(a=this.options.max);return b?+a.toFixed(b.length):this.toFixed(a)},calcWithStep:function(a){var b=Math.round(a/this.coords.p_step)*
this.coords.p_step;100<b&&(b=100);100===a&&(b=100);return this.toFixed(b)},checkMinInterval:function(a,b,c){var d=this.options;if(!d.min_interval)return a;a=this.calcReal(a);b=this.calcReal(b);"from"===c?b-a<d.min_interval&&(a=b-d.min_interval):a-b<d.min_interval&&(a=b+d.min_interval);return this.calcPercent(a)},checkMaxInterval:function(a,b,c){var d=this.options;if(!d.max_interval)return a;a=this.calcReal(a);b=this.calcReal(b);"from"===c?b-a>d.max_interval&&(a=b-d.max_interval):a-b>d.max_interval&&
(a=b+d.max_interval);return this.calcPercent(a)},checkDiapason:function(a,b,c){a=this.calcReal(a);var d=this.options;b&&"number"===typeof b||(b=d.min);c&&"number"===typeof c||(c=d.max);a<b&&(a=b);a>c&&(a=c);return this.calcPercent(a)},toFixed:function(a){a=a.toFixed(5);return+a},_prettify:function(a){return this.options.prettify_enabled?this.options.prettify&&"function"===typeof this.options.prettify?this.options.prettify(a):this.prettify(a):a},prettify:function(a){return a.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
"$1"+this.options.prettify_separator)},checkEdges:function(a,b){if(!this.options.force_edges)return this.toFixed(a);0>a?a=0:a>100-b&&(a=100-b);return this.toFixed(a)},validate:function(){var a=this.options,b=this.result,c=a.values,d=c.length,e,f;"string"===typeof a.min&&(a.min=+a.min);"string"===typeof a.max&&(a.max=+a.max);"string"===typeof a.from&&(a.from=+a.from);"string"===typeof a.to&&(a.to=+a.to);"string"===typeof a.step&&(a.step=+a.step);"string"===typeof a.from_min&&(a.from_min=+a.from_min);
"string"===typeof a.from_max&&(a.from_max=+a.from_max);"string"===typeof a.to_min&&(a.to_min=+a.to_min);"string"===typeof a.to_max&&(a.to_max=+a.to_max);"string"===typeof a.keyboard_step&&(a.keyboard_step=+a.keyboard_step);"string"===typeof a.grid_num&&(a.grid_num=+a.grid_num);a.max<=a.min&&(a.max=a.min?2*a.min:a.min+1,a.step=1);if(d)for(a.p_values=[],a.min=0,a.max=d-1,a.step=1,a.grid_num=a.max,a.grid_snap=!0,f=0;f<d;f++)e=+c[f],isNaN(e)?e=c[f]:(c[f]=e,e=this._prettify(e)),a.p_values.push(e);if("number"!==
typeof a.from||isNaN(a.from))a.from=a.min;if("number"!==typeof a.to||isNaN(a.from))a.to=a.max;if(a.from<a.min||a.from>a.max)a.from=a.min;if(a.to>a.max||a.to<a.min)a.to=a.max;"double"===a.type&&a.from>a.to&&(a.from=a.to);if("number"!==typeof a.step||isNaN(a.step)||!a.step||0>a.step)a.step=1;if("number"!==typeof a.keyboard_step||isNaN(a.keyboard_step)||!a.keyboard_step||0>a.keyboard_step)a.keyboard_step=5;a.from_min&&a.from<a.from_min&&(a.from=a.from_min);a.from_max&&a.from>a.from_max&&(a.from=a.from_max);
a.to_min&&a.to<a.to_min&&(a.to=a.to_min);a.to_max&&a.from>a.to_max&&(a.to=a.to_max);if(b){b.min!==a.min&&(b.min=a.min);b.max!==a.max&&(b.max=a.max);if(b.from<b.min||b.from>b.max)b.from=a.from;if(b.to<b.min||b.to>b.max)b.to=a.to}if("number"!==typeof a.min_interval||isNaN(a.min_interval)||!a.min_interval||0>a.min_interval)a.min_interval=0;if("number"!==typeof a.max_interval||isNaN(a.max_interval)||!a.max_interval||0>a.max_interval)a.max_interval=0;a.min_interval&&a.min_interval>a.max-a.min&&(a.min_interval=
a.max-a.min);a.max_interval&&a.max_interval>a.max-a.min&&(a.max_interval=a.max-a.min)},decorate:function(a,b){var c="",d=this.options;d.prefix&&(c+=d.prefix);c+=a;d.max_postfix&&(d.values.length&&a===d.p_values[d.max]?(c+=d.max_postfix,d.postfix&&(c+=" ")):b===d.max&&(c+=d.max_postfix,d.postfix&&(c+=" ")));d.postfix&&(c+=d.postfix);return c},updateFrom:function(){this.result.from=this.options.from;this.result.from_percent=this.calcPercent(this.result.from);this.options.values&&(this.result.from_value=
this.options.values[this.result.from])},updateTo:function(){this.result.to=this.options.to;this.result.to_percent=this.calcPercent(this.result.to);this.options.values&&(this.result.to_value=this.options.values[this.result.to])},updateResult:function(){this.result.min=this.options.min;this.result.max=this.options.max;this.updateFrom();this.updateTo()},appendGrid:function(){if(this.options.grid){var a=this.options,b,c;b=a.max-a.min;var d=a.grid_num,e=0,f=0,k=4,g,h,l=0,m="";this.calcGridMargin();a.grid_snap?
(d=b/a.step,e=this.toFixed(a.step/(b/100))):e=this.toFixed(100/d);4<d&&(k=3);7<d&&(k=2);14<d&&(k=1);28<d&&(k=0);for(b=0;b<d+1;b++){g=k;f=this.toFixed(e*b);100<f&&(f=100,g-=2,0>g&&(g=0));this.coords.big[b]=f;h=(f-e*(b-1))/(g+1);for(c=1;c<=g&&0!==f;c++)l=this.toFixed(f-h*c),m+='<span class="irs-grid-pol small" style="left: '+l+'%"></span>';m+='<span class="irs-grid-pol" style="left: '+f+'%"></span>';l=this.calcReal(f);l=a.values.length?a.p_values[l]:this._prettify(l);m+='<span class="irs-grid-text js-grid-text-'+
b+'" style="left: '+f+'%">'+l+"</span>"}this.coords.big_num=Math.ceil(d+1);this.$cache.cont.addClass("irs-with-grid");this.$cache.grid.html(m);this.cacheGridLabels()}},cacheGridLabels:function(){var a,b,c=this.coords.big_num;for(b=0;b<c;b++)a=this.$cache.grid.find(".js-grid-text-"+b),this.$cache.grid_labels.push(a);this.calcGridLabels()},calcGridLabels:function(){var a,b;b=[];var c=[],d=this.coords.big_num;for(a=0;a<d;a++)this.coords.big_w[a]=this.$cache.grid_labels[a].outerWidth(!1),this.coords.big_p[a]=
this.toFixed(this.coords.big_w[a]/this.coords.w_rs*100),this.coords.big_x[a]=this.toFixed(this.coords.big_p[a]/2),b[a]=this.toFixed(this.coords.big[a]-this.coords.big_x[a]),c[a]=this.toFixed(b[a]+this.coords.big_p[a]);this.options.force_edges&&(b[0]<this.coords.grid_gap&&(b[0]=this.coords.grid_gap,c[0]=this.toFixed(b[0]+this.coords.big_p[0]),this.coords.big_x[0]=this.coords.grid_gap),c[d-1]>100-this.coords.grid_gap&&(c[d-1]=100-this.coords.grid_gap,b[d-1]=this.toFixed(c[d-1]-this.coords.big_p[d-1]),
this.coords.big_x[d-1]=this.toFixed(this.coords.big_p[d-1]-this.coords.grid_gap)));this.calcGridCollision(2,b,c);this.calcGridCollision(4,b,c);for(a=0;a<d;a++)b=this.$cache.grid_labels[a][0],b.style.marginLeft=-this.coords.big_x[a]+"%"},calcGridCollision:function(a,b,c){var d,e,f,g=this.coords.big_num;for(d=0;d<g;d+=a){e=d+a/2;if(e>=g)break;f=this.$cache.grid_labels[e][0];f.style.visibility=c[d]<=b[e]?"visible":"hidden"}},calcGridMargin:function(){this.options.grid_margin&&(this.coords.w_rs=this.$cache.rs.outerWidth(!1),
this.coords.w_rs&&(this.coords.w_handle="single"===this.options.type?this.$cache.s_single.outerWidth(!1):this.$cache.s_from.outerWidth(!1),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100),this.coords.grid_gap=this.toFixed(this.coords.p_handle/2-.1),this.$cache.grid[0].style.width=this.toFixed(100-this.coords.p_handle)+"%",this.$cache.grid[0].style.left=this.coords.grid_gap+"%"))},update:function(a){this.input&&(this.is_update=!0,this.options.from=this.result.from,this.options.to=
this.result.to,this.options=g.extend(this.options,a),this.validate(),this.updateResult(a),this.toggleInput(),this.remove(),this.init(!0))},reset:function(){this.input&&(this.updateResult(),this.update())},destroy:function(){this.input&&(this.toggleInput(),this.$cache.input.prop("readonly",!1),g.data(this.input,"ionRangeSlider",null),this.remove(),this.options=this.input=null)}};g.fn.ionRangeSlider=function(a){return this.each(function(){g.data(this,"ionRangeSlider")||g.data(this,"ionRangeSlider",
new p(this,a,t++))})};(function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!h.requestAnimationFrame;++c)h.requestAnimationFrame=h[b[c]+"RequestAnimationFrame"],h.cancelAnimationFrame=h[b[c]+"CancelAnimationFrame"]||h[b[c]+"CancelRequestAnimationFrame"];h.requestAnimationFrame||(h.requestAnimationFrame=function(b,c){var f=(new Date).getTime(),g=Math.max(0,16-(f-a)),n=h.setTimeout(function(){b(f+g)},g);a=f+g;return n});h.cancelAnimationFrame||(h.cancelAnimationFrame=function(a){clearTimeout(a)})})()})(jQuery,
document,window,navigator);
// START: Variables
window.App = window.App || {};

var $body = $("body"),
	$preloader = $(".preloader"),
	$footer = $("footer"),
	$main_menu = $(".main-menu"),
	$menu_icon = $(".menu-icon-wrp"),
	$menu_popup = $(".menu-popup"),
	$menu_popup_nav = $(".menu-popup-nav"),
	$menu_close_btn = $(".popup-closebtn"),
	$step_pult = $(".step-pult ul"),
	$hyde_menu = $(".hyde-menu"),
	$hover = $(".hyde-menu-hover"),
	$anketa = $(".anketa"),
	$order_btn = $(".order-btn"),

	w_width = $(window).width(),
	w_height = $(window).height(),
	renderer = new PIXI.autoDetectRenderer(w_width, w_height, { transparent: true }),
	stage = new PIXI.Container(),

	slide_container_1 = null,
	slide_container_2 = null,
	slide_container_3 = null,
	slide_container_4 = null,
	slide_container_5 = null,
	slide_container_6 = null,
	slide_container_7 = null,
	slide_container_8 = null,

	active_slide = 1,
	active_scene = 1,

	slide_3_complete = false,
	slide_6_complete = false,

	mobile_version = false,

	SLIDE_ANIMATION_TIME_1 = 500,
	SLIDE_ANIMATION_TIME_2 = 2000,
	SLIDE_ANIMATION_TIME_3 = 2000,
	SLIDE_ANIMATION_TIME_4 = 2000,
	SLIDE_ANIMATION_TIME_5 = 2500,
	SLIDE_ANIMATION_TIME_6 = 2000,
	SLIDE_ANIMATION_TIME_7 = 2000,
	SLIDE_ANIMATION_TIME_8 = 2000,

	SCENE_ANIMATION_TIME = 1500;
// END: Variables



// Start: App
App.init = function() {
	createjs.Ticker.setFPS(60);
	$body.append(renderer.view);
	requestAnimationFrame(animate);

    function animate() {
    	App.managerService["slide_" + active_slide].update();

        renderer.render(stage);
        requestAnimationFrame(animate);
    }	

    if( $(window).width() <= 1000 ) mobile_version = true;

  	App.Binder();
  	App.SlideController.init();
};
// END: App



// START: Web Font
window.WebFontConfig = {
    custom: {
        families: ["HelveticaNeueCyr-Light", "Plumb-Black", "PlumbCondensed-Bold", "FiraSansMedium", "BebasRegular"],
        urls: ['css/build/build.css']
    },
    active: function() {
    	App.init();
    }
};

(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();
// END: Web font
App.SlideController = {

	init: function() {
		App.managerService.slide_1.init().then(function() { 
			App.WheelController.unlockWheel();
			App.SwipeController.unlockSwipe();
		});
	},

	moveTo: function(from, to) {
		console.log([from, to]);

		App.NavController.setActive();
		App.SwipeController.lockSwipe();

		if( to == 3 && slide_3_complete == false ) {
			App.managerService["slide_" + from].destroy();
			App.managerService["slide_3"].init();

			return;
		}

		if( to == 6 && slide_6_complete == false ) {
			App.managerService["slide_" + from].destroy();
			App.managerService["slide_6"].init();

			return;
		}

		App.managerService["slide_" + from].destroy();
		App.managerService["slide_" + to].init().then(function() { 
			App.WheelController.unlockWheel();
			App.SwipeController.unlockSwipe();
		});
	}

};
App.WheelController = {

	checkDirection: function(event) {

		if(event) {
			if(event.originalEvent.wheelDelta < 0) {
				// scroll down
				if( active_slide < Object.keys(App.managerService).length ) App.SlideController.moveTo(active_slide, ++active_slide);
				else App.WheelController.unlockWheel();
			} else {
				// scroll top
				if( active_slide > 1 ) App.SlideController.moveTo(active_slide, --active_slide);
				else App.WheelController.unlockWheel();
			}
		}

    },

    unlockWheel: function() {
		$body.unbind("mousewheel").one("mousewheel", App.WheelController.checkDirection);
	},

};
App.SwipeController = {

	lockSwipe: function() {
		
		$$("body").off("swipeUp");
		$$("body").off("swipeDown");

	},

	unlockSwipe: function() {
		
		$$("body").on("swipeUp", function() {
			if( active_slide < Object.keys(App.managerService).length ) App.SlideController.moveTo(active_slide, ++active_slide);
			else App.SwipeController.unlockSwipe();
		});

		$$("body").on("swipeDown", function() {
			if( active_slide > 1 ) App.SlideController.moveTo(active_slide, --active_slide);
			else App.SwipeController.unlockSwipe();
		});

	}

};
App.NavController = {

	setActive: function() {
		$main_menu.find("a").removeClass("main-menu-link-active");
		$main_menu.find("li").eq(active_slide - 1).children().addClass("main-menu-link-active");

	}

};
App.Binder = function() {

	$(window).resize($.debounce(500, function() {
		console.log("resize");

		w_width = $(window).width();
        w_height = $(window).height();
        renderer.resize(w_width, w_height);
	}));

	$menu_icon.on("click", function() {
		$menu_popup.fadeIn();
		$(this).fadeOut();
	});

	$menu_close_btn.on("click", function() {
		$menu_icon.fadeIn();
		$menu_popup.hide();
	});

	$main_menu.find("li").on("click", function() {
		if( active_slide != $(this).index() + 1 ) {
			App.SlideController.moveTo(active_slide, $(this).index() + 1);
			active_slide = $(this).index() + 1;
			App.NavController.setActive();
		}

		return false;
	});

	$menu_popup_nav.find("li").on("click", function() {
		$menu_popup.hide();
		App.SlideController.moveTo(active_slide, $(this).index() + 1);
		active_slide = $(this).index() + 1;
		App.NavController.setActive();

		return false;
	});

	$order_btn.on("click", function() {
		App.SlideController.moveTo(active_slide, 7);
		active_slide = 7;
		App.NavController.setActive();
	});

	// For Anketa
	$("input").iCheck({
		checkboxClass: "icheckbox_minimal",
		increaseArea: "20%"
	});

  	$(".anketa-season").on("click", function() {
  		$(".anketa-season").removeClass("anketa-season_selected");
  		$(this).addClass("anketa-season_selected");
  	});

  	$(".age-range").ionRangeSlider();

};
App.managerService = {
	
};
App.managerService.slide_1 = {

	update_flag: false,

	init: function() {
		console.log("Slide 1 init");

		$preloader.hide();
		slide_container_1 = new PIXI.Container();
		slide_container_1.alpha = 0;
		for (var key in this.elems) this.elems[key].init();
		stage.addChild(slide_container_1);

		createjs.Tween.get(slide_container_1)
				.to({ alpha: 1 }, 500, createjs.Ease.getPowInOut(4))
				.call(function() {
					$main_menu.css({ "top" : -70 });
					$menu_icon.show();
				});

			var deferred = $.Deferred(),
				that = this;

			setTimeout(function() {
			deferred.resolve();
			that.update_flag = true;
		}, SLIDE_ANIMATION_TIME_1);

			return deferred;
	},

	destroy: function() {
		console.log("Slide 1 destroy");

		createjs.Tween.get(slide_container_1)
				.to({ alpha: 0 }, 1000, createjs.Ease.getPowInOut(4))
				.call(function() {
					slide_container_1 = null;

					setTimeout(function() {
						if( mobile_version != true ) $main_menu.css({ "top" : 0 });
					}, 1000);

					if( mobile_version == true ) $menu_icon.addClass("red");
					else $menu_icon.hide();

					$menu_popup.hide();
				});

			this.update_flag = false;
	},

	update: function() {
		if( this.update_flag == true ) {
			for (var key in this.elems) this.elems[key].update();
		}
	},

	elems: {

		slider: {

			el: null,
			slides: null,
			reverse: false,

			init: function() {

				var data = [
					{ url: "i/s1/slide_1.jpg", x_pos: -25, color: "0xffffff" },
					{ url: "i/s1/slide_2.jpg", x_pos: 0, color: "0xffffff" },
					{ url: "i/s1/slide_3.jpg", x_pos: 25, color: "0xffffff" }
				],
					data_length = data.length,
					slides = new PIXI.Container(),
					dotes = new PIXI.Container(),
					slide_ind = 0;

				this.slides = slides;
				this.el = dotes;

				var Slide = function(index, url) {
					this.texture = PIXI.Texture.fromImage(url);
					this.sprite = new PIXI.Sprite(this.texture);
					this.sprite.anchor.x = .5;
					this.sprite.anchor.y = .5;
					this.sprite.position.x = renderer.width / 2;
					this.sprite.position.y = renderer.height / 2;
					if( mobile_version == true ) this.sprite.scale.set(1.2); 
					if( index != data.length - 1 ) this.sprite.alpha = 0;

					return this.sprite;
				};

				while(data_length--) {
					var slide = new Slide( data_length, data[data_length].url );

					slides.addChild(slide);
				}

				slide_container_1.addChild(slides);

				// Navigation
				var Dot = function(index, x_pos, color) {
					var dot = new PIXI.Graphics();
					dot.index = index;
					dot.lineStyle(0);
					dot.beginFill(color, 1);
					if( mobile_version == true ) {
						dot.drawCircle(0, 20, 10);
						dot.x_pos = x_pos * 2;
						dot.position.x = renderer.width / 2 + dot.x_pos;
						dot.position.y = renderer.height / 2 + 420;
					} else {
						dot.drawCircle(0, 20, 5);
						dot.x_pos = x_pos;
						dot.position.x = renderer.width / 2 + dot.x_pos;
						dot.position.y = renderer.height / 2 + 200;
					}
					dot.endFill();
					dot.buttonMode = true;
					dot.interactive = true;
					dot.on("click", function() {
						draw(this.index);

						createjs.Tween.get(slides.children[index])
								.to({ alpha: 1 }, 2000, createjs.Ease.getPowInOut(4));

						for(var i = 0; i < slides.children.length; i++) {
							if(i != index) {
								createjs.Tween.get(slides.children[i])
										.to({ alpha: 0}, 2000, createjs.Ease.getPowInOut(4));
								}
						}
					});

					return dot;
				}

				function draw(index){
					for(var i = 0; i < dotes.children.length; i++) {
						dotes.removeChild(dotes.children[i]);
					}

					if(index == undefined) index = 0;

					for(var i = 0; i < data.length; i++) {
						if(i == index) {
							var color = "0xff7d7a";
						} else {
							var color = data[i].color;
						}
						var dot = new Dot( i, data[i].x_pos, color );	
					
						dotes.addChild(dot);
					}
				}

				draw();

				slide_container_1.addChild(dotes);

			},

			update: function() {

				if( this.slides != null) {
					if( this.reverse == false ) {
						if( this.slides.scale.x < 1.1 ) {
							this.slides.scale.x += 0.00008;
						} else {
							this.reverse = true;
						}
					} else {
						if( this.slides.scale.x > 1 ) {
							this.slides.scale.x -= 0.00008;
						} else {
							this.reverse = false;
						}
					}
					
					if( this.reverse == false ) {
						if( this.slides.scale.y < 1.1 ) {
							this.slides.scale.y += 0.00008;
						} else {
							this.reverse = true;
						}
					} else {
						if( this.slides.scale.y > 1 ) {
							this.slides.scale.y -= 0.00008;
						} else {
							this.reverse = false;
						}
					}
				}

				// on resize 
				// slides
				for(var i = 0; i < this.slides.children.length; i++) {
					this.slides.children[i].position.x = renderer.width / 2;
					this.slides.children[i].position.y = renderer.height / 2;
				}

				// dotes
				for(var i = 0; i < this.el.children.length; i++) {
					if( mobile_version == true ) {
						this.el.children[i].position.x = renderer.width / 2 + this.el.children[i].x_pos;
						this.el.children[i].position.y = renderer.height / 2 + 420;
					} else {
						this.el.children[i].position.x = renderer.width / 2 + this.el.children[i].x_pos;
						this.el.children[i].position.y = renderer.height / 2 + 200;
					}
				}

			}

		},

		logo: {

			el: null,

			init: function() {
				var logo_texture = PIXI.Texture.fromImage("i/s1/logo_main.svg");
				this.el = new PIXI.Sprite(logo_texture);
				this.el.anchor.set(0.5);
				this.el.position.x = renderer.width / 2;
				this.el.position.y = renderer.height / 2;
				if( mobile_version == true ) {
					this.el.position.y = renderer.height / 2 - 50;
					this.el.scale.x = 1;
					this.el.scale.y = 1;
				} else {
					this.el.scale.x = .45;
					this.el.scale.y = .45;
				}

				slide_container_1.addChild(this.el);
			},

			update: function() {
				if( mobile_version == true ) {
					this.el.position.x = renderer.width / 2;
					this.el.position.y = renderer.height / 2 - 50;
				} else {
					this.el.position.x = renderer.width / 2;
					this.el.position.y = renderer.height / 2;
				}
			}

		},

		title: {

			el: null,

			init: function() {
				if( mobile_version == true ) {
					var style = {
						font : '65px HelveticaNeueCyr-Light',
					    fill : '#fff',
					    align : "center",
					    padding : 50
					};
					
					this.el = new PIXI.Text("ДОБРО ПОЖАЛОВАТЬ\nВ ЛАБОРАТОРИЮ СТИЛЯ\n«МОДНОГО ПРИГОВОРА»!", style);
					this.el.x = (renderer.width - this.el.width) / 2;
					this.el.y = ((renderer.height - this.el.height) / 2) + 310;
				} else {
					var style = {
						font : '38px HelveticaNeueCyr-Light',
					    fill : '#fff',
					    align : "center",
					    lineHeight : 50,
					    padding : 50
					};

					this.el = new PIXI.Text("ДОБРО ПОЖАЛОВАТЬ В ЛАБОРАТОРИЮ\nСТИЛЯ «МОДНОГО ПРИГОВОРА»!", style);
					this.el.x = (renderer.width - this.el.width) / 2;
					this.el.y = ((renderer.height - this.el.height) / 2) + 180;
				}

				slide_container_1.addChild(this.el);
			},

			update: function() {
				// on resize							
				if( mobile_version == true ) {
					this.el.x = (renderer.width - this.el.width) / 2;
					this.el.y = ((renderer.height - this.el.height) / 2) + 310;
				} else {
					this.el.x = (renderer.width - this.el.width) / 2;
					this.el.y = ((renderer.height - this.el.height) / 2) + 180;
				}
			}

		},

		spinner: {

			el_1: null,
			el_2: null,
			step: 0,

			init: function() {
				var texture_1 = PIXI.Texture.fromImage("i/s1/spin1.svg"),
					texture_2 = PIXI.Texture.fromImage("i/s1/spin2.svg");

				this.el_1 = new PIXI.Sprite(texture_1);
				this.el_1.anchor.set(0.5);
				this.el_1.buttonMode = true;
				this.el_1.interactive = true;
				this.el_1.on("click", function() {
					App.SlideController.moveTo(active_slide, ++active_slide);
				});

				this.el_2 = new PIXI.Sprite(texture_2);
				this.el_2.anchor.set(0.5);

				if( mobile_version == true ) {
					this.el_1.position.x = renderer.width / 2 - 5;
					this.el_1.position.y = renderer.height / 2 + 600;
				} else {
					this.el_1.position.x = renderer.width / 2 - 5;
					this.el_1.position.y = renderer.height / 2 + 350;
				}

				this.el_1.addChild(this.el_2);
				slide_container_1.addChild(this.el_1); 
			},

			update: function() {
				this.step += 0.06;

				if( mobile_version == true ) {
					this.el_1.position.x = renderer.width / 2 - 5;
					this.el_1.position.y = renderer.height / 2 + 600;
					this.el_2.position.y += Math.sin(this.step);
				} else {
					this.el_1.position.x = renderer.width / 2 - 5;
					this.el_1.position.y = renderer.height / 2 + 350;
					this.el_2.position.y += Math.sin(this.step);
				}
			}

		}

	}

};
App.managerService.slide_2 = {

	update_flag: false,

	init: function() {
		console.log("Slide 2 init");

		slide_container_2 = new PIXI.Container();
		for (var key in this.elems) this.elems[key].init();
		stage.addChild(slide_container_2);

		var deferred = $.Deferred(),
			that = this;

		setTimeout(function() {
			deferred.resolve();
			that.update_flag = true;
		}, SLIDE_ANIMATION_TIME_2);

		return deferred;
	},

	destroy: function() {
		console.log("Slide 2 destroy");

		for (var key in this.elems) this.elems[key].destroy();
		this.update_flag = false;
		slide_container_2 = null;
	},

	update: function() {
		if( this.update_flag == true ) {
			for (var key in this.elems) this.elems[key].update();
		}
	},

	elems: {

		title_1: {

			el: null,

			anim_params: {
				speed: 300,
				init_wait: 900,
				destroy_wait: 200
			},

			init: function() {

				if( mobile_version == true ) {
					var style = {
						font : '48px HelveticaNeueCyr-Light',
					    fill : '#3c3c3c',
					    align : "center",
					    lineHeight : 50,
					    padding : 50
					};

					this.el = new PIXI.Text("ЛУЧШИЕ СТИЛИСТЫ РОССИИ\nПРЕДЛАГАЮТ ВАМ СОЗДАТЬ", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = -this.el.height;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: (renderer.height / 2 - this.el.height / 2) - 340 }, this.anim_params.speed, createjs.Ease.quadOut());
				} else {
					var style = {
						font : '38px HelveticaNeueCyr-Light',
					    fill : '#3c3c3c',
					    align : "center",
					    lineHeight : 50,
					    padding : 50
					};

					this.el = new PIXI.Text("ЛУЧШИЕ СТИЛИСТЫ РОССИИ\nПРЕДЛАГАЮТ ВАМ СОЗДАТЬ", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = -this.el.height;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: (renderer.height / 2 - this.el.height / 2) - 140 }, this.anim_params.speed, createjs.Ease.quadOut());
				}

			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2;
				},

				destroy: function() {
					createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -this.el.height }, this.anim_params.speed, createjs.Ease.quadOut());
				}

		},

		title_2: {

			el: null,

			anim_params: {
				speed: 500,
				init_wait: 500,
				destroy_wait: 300
			},

			init: function() {
				if( mobile_version == true ) {
					var style = {
						font : '65px HelveticaNeueCyr-Light',
					    fill : '#fa6464',
					    align : "center",
					    lineHeight : 50,
					    padding : 50
					};
					
					this.el = new PIXI.Text("ПЕРСОНАЛЬНЫЙ", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = -this.el.height;
					this.el.resolution = 2;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: ((renderer.height - this.el.height) / 2) - 250 }, this.anim_params.speed, createjs.Ease.linear());
				} else {
					var style = {
						font : '52px HelveticaNeueCyr-Light',
					    fill : '#fa6464',
					    align : "center",
					    lineHeight : 50,
					    padding : 50
					};
					
					this.el = new PIXI.Text("ПЕРСОНАЛЬНЫЙ", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = -this.el.height;
					this.el.resolution = 2;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: ((renderer.height - this.el.height) / 2) - 60 }, this.anim_params.speed, createjs.Ease.linear());
				}

			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2;
			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -this.el.height }, this.anim_params.speed, createjs.Ease.linear());
			}

		},

		title_3: {

			el: null,

			anim_params: {
				speed: 500,
				speed2: 200,
				init_wait: 200,
				destroy_wait: 500
			},

			init: function() {
				if( mobile_version == true ) {
					var style = {
						font : 'bold 125px Plumb-Black',
					    fill : '#fa6464',
					    align : "center",
					    lineHeight : 50,
					    padding : 90
					};

					this.el = new PIXI.Text("ИМИДЖ-ГАЙД", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = -this.el.height;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: ((renderer.height - this.el.height) / 2) - 80 }, this.anim_params.speed, createjs.Ease.linear())
							.to({ y: ((renderer.height - this.el.height) / 2) - 160 }, this.anim_params.speed2, createjs.Ease.linear());
				} else {
					var style = {
						font : 'bold 100px Plumb-Black',
					    fill : '#fa6464',
					    align : "center",
					    lineHeight : 50,
					    padding : 90
					};

					this.el = new PIXI.Text("ИМИДЖ-ГАЙД", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = -this.el.height;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: ((renderer.height - this.el.height) / 2) + 80 }, this.anim_params.speed, createjs.Ease.linear())
							.to({ y: ((renderer.height - this.el.height) / 2) + 20 }, this.anim_params.speed2, createjs.Ease.linear());
				}
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2;	
			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -this.el.height }, this.anim_params.speed, createjs.Ease.linear());
			}

		},

		title_4: {

			el: null,

			anim_params: {
				speed: 300,
				init_wait: 900,
				destroy_wait: 200
			},

			init: function() {
				if( mobile_version == true ){
					var style = {
						font : '48px HelveticaNeueCyr-Light',
					    fill : '#3c3c3c',
					    align : "center",
					    lineHeight : 50,
					    padding : 50
					};

					this.el = new PIXI.Text("- ПОДРОБНОЕ РУКОВОДСТВО\nПО ПРЕОБРАЖЕНИЮ", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = renderer.height;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: (renderer.height / 2 - this.el.height / 2) - 20 }, this.anim_params.speed, createjs.Ease.quadOut());
				} else {
					var style = {
						font : '38px HelveticaNeueCyr-Light',
					    fill : '#3c3c3c',
					    align : "center",
					    lineHeight : 50,
					    padding : 50
					};

					this.el = new PIXI.Text("- ПОДРОБНОЕ РУКОВОДСТВО\nПО ПРЕОБРАЖЕНИЮ", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = renderer.height;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: (renderer.height / 2 - this.el.height / 2) + 130 }, this.anim_params.speed, createjs.Ease.quadOut());
				}

			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2;	
				},

				destroy: function() {
					createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: renderer.height }, this.anim_params.speed, createjs.Ease.quadOut());
				}

		},

		info: {

			el: null,

			anim_params: {
				speed: 500,
				init_wait: 1100,
			},

			init: function() {
				if( mobile_version == true ) {
					var style = {
						font : '40px HelveticaNeueCyr-Light',
					    fill : '#fa6464',
					    align : "center",
					    padding : 20
					};


					this.el = new PIXI.Text("Имидж-гайд – это ваша\nличная книга стиля. Десятки\nкрасочных иллюстраций,\nдетальный разбор вашего\nгардероба и практические\nсоветы по улучшению\nвашего образа – все это на\nстраницах персонального\nимидж-гайда. ", style);
					this.el.x = renderer.width;	
					this.el.y = ((renderer.height - this.el.height) / 2) + 310;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ x: (renderer.width - this.el.width) / 2 + 20 }, this.anim_params.speed, createjs.Ease.quadOut());
				} else {
					var style = {
						font : '21px HelveticaNeueCyr-Light',
					    fill : '#fa6464',
					    align : "center",
					    padding : 20
					};


					this.el = new PIXI.Text("Имидж-гайд – это ваша личная книга стиля. Десятки\nкрасочных иллюстраций, детальный разбор вашего\nгардероба и практические советы по улучшению\nвашего образа – все это на страницах\nперсонального имидж-гайда. ", style);
					this.el.x = renderer.width;	
					this.el.y = ((renderer.height - this.el.height) / 2) + 250;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ x: (renderer.width - this.el.width) / 2 }, this.anim_params.speed, createjs.Ease.quadOut());
				}

			},

			update: function() {
				if( mobile_version == true ) this.el.x = (renderer.width - this.el.width) / 2 + 20;
				else this.el.x = (renderer.width - this.el.width) / 2;
			},

			destroy: function() {
				createjs.Tween.get(this.el)
						.to({ x: renderer.width }, this.anim_params.speed, createjs.Ease.quadOut());
			}

		},

		border: {

			el: null,

			anim_params: {
				speed: 500,
				init_wait: 1100,
			},

			init: function() {
				if( mobile_version == true ) {
					this.el = new PIXI.Graphics();

					this.el.lineStyle(6, 0xfa6464, 1);
					this.el.beginFill(0x000000, 0);
					this.el.drawRect( -600 , renderer.height/2 + 50 , 590 , 490);

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ x: renderer.width/2 + 320 }, this.anim_params.speed, createjs.Ease.quadOut());
				} else {
					this.el = new PIXI.Graphics();

					this.el.lineStyle(3, 0xfa6464, 1);
					this.el.beginFill(0x000000, 0);
					this.el.drawRect( -600 , renderer.height/2 + 150 , 560 , 170);

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ x: renderer.width/2 + 320 }, this.anim_params.speed, createjs.Ease.quadOut());
				}
			},

			update: function() {
				this.el.x = renderer.width/2 + 320;
			},

			destroy: function() {
				createjs.Tween.get(this.el)
						.to({ x: -560 }, this.anim_params.speed, createjs.Ease.quadOut());
			}

		},

		arrowDown: {

			element: null,

			anim_params: {
				speed: 300,
				init_wait: 2000,
				destroy_wait: 500
			},

			init: function() {

			},

			update: function() {

			},

			destroy: function() {

			}

		}

	}

};
App.managerService.slide_3 = {

	init: function() {

		console.log("Slide 3 init");

		slide_container_3 = new PIXI.Container();	
		this.SceneController.init();	
		this.NavController.setActive(0, 0);
		this.Binder.init();
		stage.addChild(slide_container_3);	

		if( slide_3_complete == true ) {

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_3);

				return deferred;
		}		

	},

	destroy: function() {

		console.log("Slide 3 destroy");

		this.elems.menu.destroy();
		stage.removeChild(slide_container_3);
		slide_container_3 = null;
		if( active_scene == 6 ) slide_3_complete = true;
		active_scene = 1;	

		if( slide_3_complete == false ) {
			var deferred = $.Deferred();
			
			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_3);

				return deferred;
		}	

	},

	update: function() {

	},

	Binder: {

		init: function() {
			$hyde_menu.addClass("complete").find(".hyde-menu-item").on("click", function() {
				var prev_scene = active_scene;
				active_scene = $(this).index() + 1;
				App.managerService.slide_3.SceneController.moveTo(prev_scene, active_scene);							
			});
		}

	},

	SceneController: {

		init: function() {
			App.managerService.slide_3.elems.menu["scene_1"].init().then(function() { 
				App.managerService.slide_3.WheelController.unlockWheel();
				App.managerService.slide_3.SwipeController.unlockSwipe();
			});
		},

		moveTo: function(from, to) {
			console.log("Scene: " + [from, to]);

			App.managerService.slide_3.SwipeController.lockSwipe();

			if( from == to ) return;

			var top_pos = 0,
				left_pos = 0;

			switch(active_scene) {
				case 1: 
					top_pos = 0;
					left_pos = 0;

					break;

				case 2:
					top_pos = 0;
					left_pos = $hyde_menu.children().width();

					break;

				case 3:
					top_pos = $hyde_menu.children().height();
					left_pos = 0;

					break;

				case 4: 
					top_pos = $hyde_menu.children().height();
					left_pos = $hyde_menu.children().width();

					break;

				case 5:
					top_pos = $hyde_menu.children().height() * 2;
					left_pos = 0;

					break;

				case 6:
					top_pos = $hyde_menu.children().height() * 2;
					left_pos = $hyde_menu.children().width();

					break;

			}

			App.managerService.slide_3.NavController.setActive(top_pos, left_pos);
			App.managerService.slide_3.elems.menu["scene_" + from].destroy();
			App.managerService.slide_3.elems.menu["scene_" + to].init().then(function() { 
				App.managerService.slide_3.WheelController.unlockWheel();
				App.managerService.slide_3.SwipeController.unlockSwipe();
			});

		}

	},

	WheelController: {

		checkDirection: function(event) {
			if(event) {
				if(event.originalEvent.wheelDelta < 0) {
					// scroll top
					if( active_scene < 6 ) App.managerService.slide_3.SceneController.moveTo(active_scene, ++active_scene);
					else App.SlideController.moveTo(active_slide, ++active_slide);
				} else {
					// scroll down
					if( active_scene > 1 ) App.managerService.slide_3.SceneController.moveTo(active_scene, --active_scene);
					else App.SlideController.moveTo(active_slide, --active_slide);
				}
			}
		},

		unlockWheel: function() {
			if( slide_3_complete == false ) $body.unbind("mousewheel").one("mousewheel", App.managerService.slide_3.WheelController.checkDirection);
		}

	},

	SwipeController: {

		lockSwipe: function() {
			
			$$("body").off("swipeUp");
			$$("body").off("swipeDown");

		},

		unlockSwipe: function() {
			
			$$("body").on("swipeUp", function() {
				if( active_scene < 6 ) App.managerService.slide_3.SceneController.moveTo(active_scene, ++active_scene);
				else App.SlideController.moveTo(active_slide, ++active_slide);
			});

			$$("body").on("swipeDown", function() {
				if( active_scene > 1 ) App.managerService.slide_3.SceneController.moveTo(active_scene, --active_scene);
				else App.SlideController.moveTo(active_slide, --active_slide);
			});

		}

	},

	NavController: {

		setActive: function(top, left) {
			if( mobile_version == true ) {
				$hyde_menu.children().removeClass("active").eq(active_scene - 1).addClass("active");
			} else {
				$hover.animate({ "top" : top, "left" : left }, function() {
					$hyde_menu.children().removeClass("active").eq(active_scene - 1).addClass("active");
				});
			}
		}

	},

	elems: {

		menu: {

			anim_params: {
				speed: 1000
			},

			init: function() {
				if( mobile_version == true ) $hyde_menu.addClass("active");
				else $hyde_menu.addClass("active").css({ "height" : $(window).height() - $main_menu.height() });
			},

			destroy: function() {
				$hyde_menu.removeClass("active");
			},

			Scene: function(url, title_top, title_down) {
				// Titles
				if( mobile_version == true ) {
					var style = {
						font : "35px PlumbCondensed-Bold",
					    fill : "#000000",
					    align : "center"
					},
					title_top = new PIXI.Text(title_top, style),
					title_down = new PIXI.Text(title_down, style);

					title_top.x = -1000;
					title_top.y = -300;
					title_top.anchor.set(0.5);

					title_down.x = 1000;
					title_down.y = 300;
					title_down.anchor.set(0.5);
				} else {
					var style = {
						font : "22px PlumbCondensed-Bold",
					    fill : "#000000",
					    align : "center"
					},
					title_top = new PIXI.Text(title_top, style),
					title_down = new PIXI.Text(title_down, style);

					title_top.x = -1000;
					title_top.y = -50;

					title_down.x = 1000;
					title_down.y = 450;
				}

				// Title's lines
				if( mobile_version == true ) {
					var data_lines = [
						{ color: "0x000000", size: title_top.width - 100, 	x: -15, 						y: 50, pos: "top" },
						{ color: "0x000000", size: title_top.width - 100, 	x: title_top.height + 15, 		y: 50, pos: "top" },
						{ color: "0x000000", size: title_down.width - 100, 	x: -15, 						y: 50, pos: "down" },
						{ color: "0x000000", size: title_down.width - 100, 	x: title_down.height + 15, 		y: 50, pos: "down" },
					];

					var Line = function(color, size, x, y) {
						this.el = new PIXI.Graphics();
						this.el.beginFill(0xffffff);
						this.el.lineStyle(3, color, 1);
						this.el.moveTo(0,0);
						this.el.lineTo(size,0);
						this.el.endFill();
						this.el.position.x = y;
						this.el.position.y = x;

						return this.el;
					};

					/*for(var i = 0; i < data_lines.length; i++) {
						var line = new Line( data_lines[i].color, data_lines[i].size, data_lines[i].x, data_lines[i].y );

						switch(data_lines[i].pos) {
							case "top":
								title_top.addChild(line);
								break;
							case "down":
								title_down.addChild(line);
								break;
						}
					}*/
				} else {
					var data_lines = [
						{ color: "0x000000", size: title_top.width - 100, 	x: -15, 						y: 50, pos: "top" },
						{ color: "0x000000", size: title_top.width - 100, 	x: title_top.height + 15, 		y: 50, pos: "top" },
						{ color: "0x000000", size: title_down.width - 100, 	x: -15, 						y: 50, pos: "down" },
						{ color: "0x000000", size: title_down.width - 100, 	x: title_down.height + 15, 		y: 50, pos: "down" },
					];

					var Line = function(color, size, x, y) {
						this.el = new PIXI.Graphics();
						this.el.beginFill(0xffffff);
						this.el.lineStyle(1, color, 1);
						this.el.moveTo(0,0);
						this.el.lineTo(size,0);
						this.el.endFill();
						this.el.position.x = y;
						this.el.position.y = x;

						return this.el;
					};

					for(var i = 0; i < data_lines.length; i++) {
						var line = new Line( data_lines[i].color, data_lines[i].size, data_lines[i].x, data_lines[i].y );

						switch(data_lines[i].pos) {
							case "top":
								title_top.addChild(line);
								break;
							case "down":
								title_down.addChild(line);
								break;
						}
					}
				}

				// Photo
				if( mobile_version == true ) {
					this.texture = PIXI.Texture.fromImage(url);
					this.el = new PIXI.Sprite(this.texture);
					this.el.scale.set(1.2);
					this.el.anchor.set(0.5);
					this.el.position.x = renderer.width / 2;
					this.el.position.y = renderer.height * 2;
					this.el.addChild(title_top);
					this.el.addChild(title_down);
				} else {
					this.texture = PIXI.Texture.fromImage(url);
					this.el = new PIXI.Sprite(this.texture);
					this.el.position.x = renderer.width / 2;
					this.el.position.y = renderer.height * 2;
					this.el.addChild(title_top);
					this.el.addChild(title_down);
				}

				this.el.init = function(element) {
					if( mobile_version == true ) {
						createjs.Tween.get(element)
							.to({ y: renderer.height / 2 + 250 }, 1000, createjs.Ease.getPowInOut(4));
						createjs.Tween.get(title_top)
							.wait(500)
							.to({ x: 0 }, 1000, createjs.Ease.getPowInOut(4));
						createjs.Tween.get(title_down)
							.wait(500)
							.to({ x: 0 }, 1000, createjs.Ease.getPowInOut(4));
					} else {
						createjs.Tween.get(element)
							.to({ y: renderer.height / 2 - 250 }, 1000, createjs.Ease.getPowInOut(4));
						createjs.Tween.get(title_top)
							.wait(500)
							.to({ x: -50 }, 1000, createjs.Ease.getPowInOut(4));
						createjs.Tween.get(title_down)
							.wait(500)
							.to({ x: 350 }, 1000, createjs.Ease.getPowInOut(4));
					}
				}

				this.el.destroy = function(element) {
					createjs.Tween.get(title_top).to({ x: -1000 }, 500, createjs.Ease.getPowInOut(4));
					createjs.Tween.get(title_down).to({ x: 1000 }, 500, createjs.Ease.getPowInOut(4));
					createjs.Tween.get(element)
						.wait(200)
						.to({ y: -renderer.height * 2 }, 1000, createjs.Ease.getPowInOut(4))
							.call(function() {
								slide_container_3.removeChild(this.el);
							});
				}

				return this.el;
			},

			scene_1: {

				el: null,

				init: function() {
					var deferred = $.Deferred(),
						title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
						title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

					App.managerService.slide_3.elems.menu.init();
					this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/1/wears.jpg", title_top, title_down);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					setTimeout(function() {
						deferred.resolve();
					}, SCENE_ANIMATION_TIME);

  					return deferred;
				},

				destroy: function() {
					this.el.destroy(this.el);
				}

			},

			scene_2: {

				el: null,

				init: function() {
					var deferred = $.Deferred(),
						title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
						title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

					this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/2/wears.jpg", title_top, title_down);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					setTimeout(function() {
						deferred.resolve();
					}, SCENE_ANIMATION_TIME);

  					return deferred;

				},

				destroy: function() {
					this.el.destroy(this.el);
				}

			},

			scene_3: {

				el: null,

				init: function() {
					var deferred = $.Deferred(),
						title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
						title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

					this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/3/wears.jpg", title_top, title_down);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					setTimeout(function() {
						deferred.resolve();
					}, SCENE_ANIMATION_TIME);

  					return deferred;

				},

				destroy: function() {
					this.el.destroy(this.el);
				}

			},

			scene_4: {

				el: null,

				init: function() {
					var deferred = $.Deferred(),
						title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
						title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

					this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/4/wears.jpg", title_top, title_down);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					setTimeout(function() {
						deferred.resolve();
					}, SCENE_ANIMATION_TIME);

  					return deferred;

				},

				destroy: function() {
					this.el.destroy(this.el);
				}

			},

			scene_5: {

				el: null,

				init: function() {
					var deferred = $.Deferred(),
						title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
						title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

					this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/5/wears.jpg", title_top, title_down);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					setTimeout(function() {
						deferred.resolve();
					}, SCENE_ANIMATION_TIME);

  					return deferred;

				},

				destroy: function() {
					this.el.destroy(this.el);
				}

			},

			scene_6: {

				el: null,

				init: function() {
					var deferred = $.Deferred(),
						title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
						title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

					this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/6/wears.jpg", title_top, title_down);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					setTimeout(function() {
						deferred.resolve();
					}, SCENE_ANIMATION_TIME);

  					return deferred;

				},

				destroy: function() {
					this.el.destroy(this.el);
				}

			},

			order_btn: {

				el: null,

				init: function() {

					var style = {
						font : "20px PlumbCondensed-Bold",
					    fill : "#ffffff",
					    align : "center"
					},
						title = new PIXI.Text("ЗАКАЗАТЬ\nИМИДЖ-ГАЙД", style);

					title.x = renderer.width / 2 + 50;
					title.y = -120;

					this.el = new PIXI.Graphics();
					this.el.lineStyle(0);
					this.el.beginFill(0xff7d7a, 1);
					this.el.drawCircle(renderer.width / 2 + 100, -100, 60);
					this.el.endFill();
					this.el.buttonMode = true;
					this.el.interactive = true;
					this.el.on("click", function() {
						step = 6;
						active_slide = 7;
						App.managerService.slide_3.scroll(); // for reset timer
						App.WheelController.init();
					});

					this.el.addChild(title);
					slide_container_3.addChild(this.el);

					createjs.Tween.get(this.el)
						.to({ y: renderer.height / 2 }, 1000, createjs.Ease.getPowInOut(4));

				},

				destroy: function() {
					createjs.Tween.get(this.el)
						.to({ y: -1000 }, 1000, createjs.Ease.getPowInOut(4))
						.call(function() {
							this.el = null;
						});
				}

			}

		},

	}

};
App.managerService.slide_4 = {

	update_flag: false,

	init: function() {
		console.log("Slide 4 init");

		slide_container_4 = new PIXI.Container();
		for (var key in this.elems) this.elems[key].init();
		stage.addChild(slide_container_4);

		var deferred = $.Deferred(),
			that = this;

		setTimeout(function() {
			deferred.resolve();
			that.update_flag = true;
		}, SLIDE_ANIMATION_TIME_4);

		return deferred;
	},

	destroy: function() {
		console.log("Slide 4 destroy");

		for (var key in this.elems) this.elems[key].destroy();
		slide_container_4 = null;
		this.update_flag = false;
	},

	update: function() {
		if( this.update_flag == true ) {
			for (var key in this.elems) this.elems[key].update();
		}
	},

	elems: {

		title: {

			anim_params: {
				speed: 500,
				init_wait: 1700,
				destroy_wait: 200
			},

			el: null,

			init: function() {

				var style = {
						font : "30px HelveticaNeueCyr-Light",
					    fill : "#ff7d7a"
					};

				this.el = new PIXI.Text("Выберите стиль", style);
				this.el.anchor.x = .5;
				this.el.anchor.y = .5;
				this.el.x = renderer.width / 2;
				this.el.y = -100;

				slide_container_4.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: 120 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {

				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -100 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			update: function() {
				this.el.x = renderer.width / 2;
				this.el.y = 120;
			}

		},

		info: {

			anim_params: {
				speed: 500,
				init_wait: 1500,
				destroy_wait: 400
			},

			el: null,

			init: function() {

				var style = {
						font : "16px HelveticaNeueCyr-Light",
					    fill : "#3c3c3c",
					    align: "center"
					};

				this.el = new PIXI.Text("Хотите стать более женственной, спортивной, строгой или утонченной? Специально\nдля вас, учитывая особенности вашей внешности, профессиональные стилисты\nсоставят пять комплектов одежды в выбранном стиле.", style);
				this.el.anchor.x = .5;
				this.el.anchor.y = .5;
				this.el.x = renderer.width / 2;
				this.el.y = -100;

				slide_container_4.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: 180 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {

				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -100 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			update: function() {
				this.el.x = renderer.width / 2;
				this.el.y = 180;
			}

		},

		slider: {

			el: 		null,
			prev_btn: 	null,
			next_btn: 	null,
			slides: null,

			init: function() {

				var data = [
					{ url: "i/s4/slide_1.png", title: "Casual", description: "Одежда для настоящих\nмечтательниц" },
					{ url: "i/s4/slide_2.png", title: "Романтический", description: "Одежда для настоящих\nмечтательниц" },
					{ url: "i/s4/slide_3.png", title: "Классика", description: "Одежда для настоящих\nмечтательниц" },
					{ url: "i/s4/slide_1.png", title: "Casual", description: "Одежда для настоящих\nмечтательниц" },
					{ url: "i/s4/slide_2.png", title: "Романтический", description: "Одежда для настоящих\nметчательниц" },
					{ url: "i/s4/slide_3.png", title: "Классика", description: "Одежда для настоящих\nмечтательниц" }
				],
					slides = new PIXI.Container(),
					slide_ind = 0,
					slide_scale = 1;

				this.slides = slides;
				slides.alpha = 0;
				slides = new PIXI.Graphics();
				slides.lineStyle(2, 0x0000FF, 0);
				slides.beginFill(0xff7d7a, 1);
				slides.drawRect(0, 0, renderer.width, 250);
				slides.y = renderer.height * 2;

				this.el = slides;

				var Slide = function(index, url, title, description) {

					// Title
					var title_style = {
						font : "30px HelveticaNeueCyr-Light",
					    fill : "#ffffff"
					};

					this.title = new PIXI.Text(title, title_style);
					this.title.position.y = 430;
					this.title.anchor.x = .5;

					// Line
					this.line = new PIXI.Graphics();
					this.line.beginFill(0xffffff);
					this.line.lineStyle(1, 0xffffff, 1);
					this.line.moveTo(0,0);
					this.line.lineTo(100,0);
					this.line.endFill();
					this.line.position.x = -50;
					this.line.position.y = 475;

					// Description
					var description_style = {
						font : "16px HelveticaNeueCyr-Light",
					    fill : "#ffffff",
					    align: "center"
					};

					this.description = new PIXI.Text(description, description_style);
					this.description.position.y = 485;
					this.description.anchor.x = .5;

					// Photo
					this.texture = PIXI.Texture.fromImage(url);
					this.sprite = new PIXI.Sprite(this.texture);
					this.sprite.anchor.x = .5;
					this.sprite.position.y = renderer.height / 2;
					this.sprite.scale.x = slide_scale;
					this.sprite.scale.y = slide_scale;
					switch(index) {
						case 0:
							this.sprite.position.x = renderer.width / 2 - 350;
							break;
						case 1:
							this.sprite.position.x = renderer.width / 2;
							break;
						case 2:
							this.sprite.position.x = renderer.width / 2 + 350;
							break;
						default: 
							this.sprite.position.x = renderer.width * 2;
							break;
					}

					if( renderer.height < 900 ) {
						slide_scale = 0.7;
						this.sprite.scale.x = slide_scale;
						this.sprite.scale.y = slide_scale;
					}

					this.sprite.addChild(this.title);
					this.sprite.addChild(this.line);
					this.sprite.addChild(this.description);

					return this.sprite;

				}

				for(var i = 0; i < data.length; i++) {
					var slide = new Slide( i, data[i].url, data[i].title, data[i].description );
					
					slides.addChild(slide);
				}

				slide_container_4.addChild(slides);

				createjs.Tween.get(slides)
					.to({ alpha: 1, y: renderer.height - 250 }, 1000, createjs.Ease.getPowInOut(4))
					.call(function() {
						for(var i = 0; i < slides.children.length; i++) {
							createjs.Tween.get(slides.children[i])
								.to({ y: -400 * slide_scale }, 1000, createjs.Ease.getPowInOut(4));
						}
					});

				// Prev btn
				var prev_btn_texture = PIXI.Texture.fromImage("i/s4/prev.png"),
					prev_btn = new PIXI.Sprite(prev_btn_texture);

				this.prev_btn = prev_btn;

				prev_btn.anchor.x = .5;
				prev_btn.anchor.y = .5;
				prev_btn.position.x = -200;
				prev_btn.position.y = renderer.height / 2;
				prev_btn.buttonMode = true;
				prev_btn.interactive = true;
				prev_btn.on("click", function() {
					if(slide_ind != 0) {
						createjs.Tween.get(slides.children[slide_ind - 1])
								.to({ x: renderer.width / 2 - 350 }, 800, createjs.Ease.getPowInOut(4));

						for(var i = slide_ind; i < slide_ind + 2; i++) {
							createjs.Tween.get(slides.children[i])
								.to({ x: slides.children[i].position.x + 350 }, 800, createjs.Ease.getPowInOut(4));
						}

						createjs.Tween.get(slides.children[slide_ind + 2])
								.to({ x: renderer.width * 2}, 800, createjs.Ease.getPowInOut(4));

						slide_ind--;
					}
				});

				slide_container_4.addChild(prev_btn);

				createjs.Tween.get(prev_btn)
					.wait(1200)
					.to({ x: 100 }, 1000, createjs.Ease.getPowInOut(4));

				// Next btn
				var next_btn_texture = PIXI.Texture.fromImage("i/s4/next.png"),
					next_btn = new PIXI.Sprite(next_btn_texture);

				this.next_btn = next_btn;

				next_btn.anchor.x = .5;
				next_btn.anchor.y = .5;
				next_btn.position.x = renderer.width + 100;
				next_btn.position.y = renderer.height / 2;
				next_btn.buttonMode = true;
				next_btn.interactive = true;
				next_btn.on("click", function() {
					if(slide_ind != slides.children.length - 3) {
						createjs.Tween.get(slides.children[slide_ind])
								.to({ x: -renderer.width * 2 }, 800, createjs.Ease.getPowInOut(4));

						for(var i = slide_ind + 1; i < slide_ind + 3; i++) {
							createjs.Tween.get(slides.children[i])
								.to({ x: slides.children[i].position.x - 350 }, 800, createjs.Ease.getPowInOut(4));
						}

						createjs.Tween.get(slides.children[slide_ind + 3])
								.to({ x: renderer.width / 2 + 350}, 800, createjs.Ease.getPowInOut(4));

						slide_ind++;
					}
				});

				slide_container_4.addChild(next_btn);

				createjs.Tween.get(next_btn)
					.wait(1200)
					.to({ x: renderer.width - 100 }, 1000, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.to({ y: 2000 }, 1000, createjs.Ease.getPowInOut(4));

				createjs.Tween.get(this.prev_btn)
					.to({ x: -200 }, 1000, createjs.Ease.getPowInOut(4));

				createjs.Tween.get(this.next_btn)
					.to({ x: renderer.width + 200 }, 1000, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.slides.position.y = renderer.height - 250;
				this.prev_btn.position.x = 100;
				this.prev_btn.position.y = renderer.height / 2;
				this.next_btn.position.x = renderer.width - 100;
				this.next_btn.position.y = renderer.height / 2;
			}

		}

	}

};
App.managerService.slide_5 = {

	update_flag: false,

	init: function(active) {
		console.log("Slide 5 init");

		slide_container_5 = new PIXI.Container();
		for (var key in this.elems) this.elems[key].init();
		stage.addChild(slide_container_5);

		var deferred = $.Deferred(),
			that = this;

		setTimeout(function() {
			deferred.resolve();
			that.update_flag = true;
		}, SLIDE_ANIMATION_TIME_5);

		return deferred;
	},

	destroy: function() {
		console.log("Slide 5 destroy");

		for (var key in this.elems) this.elems[key].destroy();
		this.update_flag = false;
		slide_container_5 = null;
	},

	update: function() {
		if( this.update_flag == true ) {
			for (var key in this.elems) this.elems[key].update();
		}
	},

	elems: {

		magazine: {

			el: null,

			anim_params: {
				speed: 2000,
				destroy_wait: 0
			},

			init: function() {

				var texture = PIXI.Texture.fromImage("i/s5/magazine.png");

				this.el = new PIXI.Sprite(texture);

				this.el.anchor.set(0.5);
				this.el.position.x = renderer.width / 2;
				this.el.position.y = renderer.height * 2;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
						.to({ y: renderer.height / 2 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: renderer.height * 2 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.position.x = renderer.width / 2;
				this.el.position.y = renderer.height / 2;
			}

		},

		orderBtn: {

			init: function() {

				setTimeout(function() {
					$order_btn.addClass("active");
				}, 1000);

			},

			destroy: function() {
				
				$order_btn.removeClass("active");

			},

			update: function() {

			}

		},

		title_1: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {
				var style = {
						font : '20px Myriad Pro',
					    fill : '#3c3c3c',
					    align : "left",
					    padding : 50
					};

				this.el = new PIXI.Text("Стоимость базовой\nверсии", style);

				this.el.x = (renderer.width - this.el.width) / 2 - 350;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) - 220 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 - 350;	
				this.el.y = ((renderer.height - this.el.height) / 2) - 220;
			}

		},

		title_2: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {
				var style = {
						font : '20px Myriad Pro',
					    fill : '#3c3c3c'
					};

				this.el = new PIXI.Text("Срок изготовления", style);

				this.el.x = (renderer.width - this.el.width) / 2 + 260;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) - 230 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));	

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));	
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 + 260;	
				this.el.y = ((renderer.height - this.el.height) / 2) - 230;
			}

		},

		title_3: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {
				var style = {
						font : '14px HelveticaNeueCyr-Light',
					    fill : '#3c3c3c'
					};

				this.el = new PIXI.Text("Стоимость за каждый\nдополнительный", style);

				this.el.x = (renderer.width - this.el.width) / 2 + 175;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) + 220 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));	

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));	
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 + 175;	
				this.el.y = ((renderer.height - this.el.height) / 2) + 220;
			}

		},

		title_4: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {
				var style = {
						font : '14px HelveticaNeueCyr-Light',
					    fill : '#b48264'
					};

				this.el = new PIXI.Text("Стиль, мероприятие или праздник", style);

				this.el.x = (renderer.width - this.el.width) / 2 + 215;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) + 247 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));	

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));	
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 + 215;	
				this.el.y = ((renderer.height - this.el.height) / 2) + 247;
			}

		},

		price_1: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {

				var style = {
						font : '120px Plumb-Black',
					    fill : '#fa6464'
					};

				this.el = new PIXI.Text("2999", style);

				this.el.x = (renderer.width - this.el.width) / 2 - 230;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) - 225 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));	
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 - 230;	
				this.el.y = ((renderer.height - this.el.height) / 2) - 225;
			}

		},

		price_2: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {

				var style = {
						font : '60px Plumb-Black',
					    fill : '#fa6464'
					};

				this.el = new PIXI.Text("РУБЛЕЙ", style);

				this.el.x = (renderer.width - this.el.width) / 2 - 270;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) - 150 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 - 270;	
				this.el.y = ((renderer.height - this.el.height) / 2) - 150;
			}

		},

		price_3: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {

				var style = {
						font : '80px Plumb-Black',
					    fill : '#fa6464'
					};

				this.el = new PIXI.Text("+999", style);

				this.el.x = (renderer.width - this.el.width) / 2 + 140;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) + 130 },this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height },this.anim_params.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 + 140;	
				this.el.y = ((renderer.height - this.el.height) / 2) + 130;
			}

		},

		price_4: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {

				var style = {
						font : '40px Plumb-Black',
					    fill : '#fa6464'
					};

				this.el = new PIXI.Text("РУБЛЕЙ", style);

				this.el.x = (renderer.width - this.el.width) / 2 + 180;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) + 180 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 + 180;	
				this.el.y = ((renderer.height - this.el.height) / 2) + 180;
			}

		},

		time_1: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {

				var style = {
						font : '100px Plumb-Black',
					    fill : '#b48264'
					};

				this.el = new PIXI.Text("3", style);

				this.el.x = (renderer.width - this.el.width) / 2 + 200;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) - 180 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 + 200;	
				this.el.y = ((renderer.height - this.el.height) / 2) - 180;
			}

		},

		time_2: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {

				var style = {
						font : '30px Plumb-Black',
					    fill : '#b48264'
					};

				this.el = new PIXI.Text("РАБОЧИХ\nДНЯ", style);

				this.el.x = (renderer.width - this.el.width) / 2 + 300;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) - 180 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 + 300;	
				this.el.y = ((renderer.height - this.el.height) / 2) - 180;
			}

		}

	}

};
App.managerService.slide_6 = {

	init: function(active) {

		console.log("Slide 6 init");

		slide_container_6 = new PIXI.Container();

		$step_pult.parent().addClass("active");
		this.NavController.setActive();
		this.SceneController.init();
		this.spinner.init();
		this.Binder.init();

		stage.addChild(slide_container_6);

		if( slide_6_complete == true ) {
			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

				return deferred;
		}

	},

	destroy: function() {

		console.log("Slide 6 destroy");

		$step_pult.parent().removeClass("active");
		this.spinner.destroy();
		App.managerService.slide_6["scene_" + active_scene].destroy();
		if( active_scene == 6 ) slide_6_complete = true;
		active_scene = 1;

		slide_container_6 = null;
		
		if( slide_6_complete == false ) {
			var deferred = $.Deferred();
			
			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

				return deferred;
		}	

	},

	update: function() {
		this.spinner.update();
	},

	Binder: {

		init: function() {
			$step_pult.children().on("click", function() {
				App.managerService.slide_6.SceneController.moveTo(active_scene, $(this).index() + 1);
				active_scene = $(this).index() + 1;
				App.managerService.slide_6.NavController.setActive();
			});
		}

	},

	SceneController: {

		init: function() {
			App.managerService.slide_6["scene_" + active_scene].init().then(function() { 
				App.managerService.slide_6.WheelController.unlockWheel();
				App.managerService.slide_6.SwipeController.unlockSwipe();
			});
		},

		moveTo: function(from, to) {
			console.log([from, to]);

			App.managerService.slide_6.SwipeController.lockSwipe();

			if( from == to ) return;

			App.managerService.slide_6.NavController.setActive();

			App.managerService.slide_6["scene_" + from].destroy();
			App.managerService.slide_6["scene_" + to].init().then(function() { 
				App.managerService.slide_6.WheelController.unlockWheel();
				App.managerService.slide_6.SwipeController.unlockSwipe();
			});
		}

	},

	WheelController: {

		checkDirection: function(event) {
			if(event) {
				if(event.originalEvent.wheelDelta < 0) {
					// scroll down
					if( active_scene < 6 ) App.managerService.slide_6.SceneController.moveTo(active_scene, ++active_scene);
					else {
						App.managerService.slide_6["scene_" + active_scene].destroy();
						App.SlideController.moveTo(active_slide, ++active_slide);
					}
				} else {
					// scroll top
					if( active_scene > 1 ) App.managerService.slide_6.SceneController.moveTo(active_scene, --active_scene);
					else {
						App.managerService.slide_6["scene_" + active_scene].destroy();
						App.SlideController.moveTo(active_slide, --active_slide);
					}
				}
			}
		},

		unlockWheel: function() {
			if( slide_6_complete == false ) $body.unbind("mousewheel").one("mousewheel", App.managerService.slide_6.WheelController.checkDirection);
		}

	},

	SwipeController: {

		lockSwipe: function() {
			
			$$("body").off("swipeUp");
			$$("body").off("swipeDown");

		},

		unlockSwipe: function() {
			
			$$("body").on("swipeUp", function() {
				if( active_scene < 6 ) App.managerService.slide_6.SceneController.moveTo(active_scene, ++active_scene);
				else {
					App.managerService.slide_6["scene_" + active_scene].destroy();
					App.SlideController.moveTo(active_slide, ++active_slide);
				}
			});

			$$("body").on("swipeDown", function() {
				if( active_scene > 1 ) App.managerService.slide_6.SceneController.moveTo(active_scene, --active_scene);
				else {
					App.managerService.slide_6["scene_" + active_scene].destroy();
					App.SlideController.moveTo(active_slide, --active_slide);
				}
			});

		}

	},

	NavController: {

		setActive: function() {
			$step_pult.children().removeClass("step-pult-item-active");
			$step_pult.children().eq(active_scene - 1).addClass("step-pult-item-active");
		}

	},

	Scene: function(title, info, btn_title, pic) {

		// pic
		var pic_texture = PIXI.Texture.fromImage(pic.url),
			Pic = new PIXI.Sprite(pic_texture);
		Pic.anchor.set(0.5);
		Pic.position.x = pic.x;
		Pic.position.y = pic.y;

		// title
		var style = {
				font : '110px Plumb-Black',
			    fill : '#fa6464',
			    align : "center",
			    padding : 20,
			    lineHeight : 105
			},
			Title = new PIXI.Text(title.text, style);
		Title.x = title.x;	
		Title.y = title.y;
		Title.anchor.x = .5;
		Title.anchor.y = .5;

			// info
			var style = {
			font : '16px HelveticaNeueCyr-Light',
		    fill : '#3c3c3c',
		    align : "center"
		},
			Info = new PIXI.Text(info.text, style);
		Info.x = info.x;	
		Info.y = info.y;

		var Border = new PIXI.Graphics();
		Border.lineStyle(3, 0x3c3c3c, 1);
		Border.beginFill(0x000000, 0);
		Border.drawRect( 0, 0, Info.width + 40, Info.height + 40 );
		Border.position.x = -info.x;
		Border.position.y = info.y - 17;

			// btn
			var btn_texture = PIXI.Texture.fromImage("i/s6/circle.svg"),
			Btn = new PIXI.Sprite(btn_texture);
		Btn.anchor.set(0.5);
		Btn.position.x = btn_title.x;
		Btn.position.y = btn_title.y;
		Btn.buttonMode = true;
		Btn.interactive = true;
		Btn.on("click", function() {
			App.SlideController.moveTo(active_slide, 7);
			active_slide = 7;
			App.NavController.setActive();
		});

		var style = {
			font : '24px BebasRegular',
		    fill : '#ffffff'
		},
			Btn_title = new PIXI.Text(btn_title.text, style);
		
		Btn_title.x = btn_title.x;	
		Btn_title.y = btn_title.y;
		Btn_title.anchor.set(0.5);
		Btn_title.rotation = -0.3;


		var scene = new PIXI.Container();
		scene.addChild(Pic);
		scene.addChild(Title);
		scene.addChild(Info);
		scene.addChild(Border);
		scene.addChild(Btn);
		scene.addChild(Btn_title);


			scene.init = function() {
				// pic
				createjs.Tween.get(Pic)
					.to({ y: pic.y_to }, 3000, createjs.Ease.getPowInOut(4));

				// title 
				createjs.Tween.get(Title)
				.to({ y: title.y_to }, 2000, createjs.Ease.getPowInOut(4));

				// info 
				createjs.Tween.get(Info)
				.wait(600)
					.to({ x: info.x_to - Info.width/2 }, 1000, createjs.Ease.getPowInOut(4));

				createjs.Tween.get(Border)
				.wait(600)
					.to({ x: info.x_to - Border.width/2}, 1000, createjs.Ease.getPowInOut(4));

				// btn
				createjs.Tween.get(Btn)
				.wait(0)
					.to({ y: btn_title.y_to }, 1000, createjs.Ease.getPowInOut(4));

				createjs.Tween.get(Btn_title)
				.wait(200)
					.to({ y: btn_title.y_to }, 1000, createjs.Ease.getPowInOut(4));
			};

			scene.destroy = function() {
				// pic
				createjs.Tween.get(Pic)
						.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

				// title
				createjs.Tween.get(Title)
					.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

				// info 
				createjs.Tween.get(Info)
					.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

				createjs.Tween.get(Border)
					.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

				// btn 
				createjs.Tween.get(Btn)
					.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

				createjs.Tween.get(Btn_title)
					.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));
			};

		return scene;
	},

	scene_1: {

		el: null,

		init: function() {
			var title = {
					text: "ЗАПОЛНИТЕ\nАНКЕТУ\nНА САЙТЕ",
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 - 50
				}, 
				info = {
					text: "Стилисты “Модного приговора” получат Ваши данные,\nопределят Ваш цветотип, тип фигуры, овал лица\nи составят подробную инструкцию преображения!",
					x: renderer.width,
					y: renderer.height / 2 + 200,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 + 200
				},
				btn_title = {
					text: "ЗАПОЛНИТЬ",
					x: renderer.width / 2 - 280,
					y: -renderer.height,
					x_to: renderer.width / 2 - 280,
					y_to: renderer.height / 2 - 10
				},
				pic = {
					url: "i/s6/notepade.png",
					x: renderer.width / 2 + 300,
					y: -renderer.height,
					x_to: renderer.width / 2 + 300,
					y_to: renderer.height / 2
				},
				scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

			this.el = scene;
			slide_container_6.addChild(scene);
			scene.init();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

				return deferred;
		},

		destroy: function() {
			this.el.destroy();
		}

	},

	scene_2: {

		el: null,

		init: function() {
			var title = {
					text: "ПОЛУЧИТЕ\nИМИДЖ-ГАЙД",
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 - 50
				}, 
				info = {
					text: "Имидж-гайд придет на Ваш e-mail в формате PDF.\nВы можете его распечатать или читать с экрана\nмобильного устройства.\nВаш личный стилист в кармане!",
					x: renderer.width,
					y: renderer.height / 2 + 130,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 + 130
				},
				btn_title = {
					text: "ПОЛУЧИТЬ",
					x: renderer.width / 2 + 340,
					y: -renderer.height,
					x_to: renderer.width / 2 + 340,
					y_to: renderer.height / 2 - 75
				},
				pic = {
					url: "i/s6/book.png",
					x: renderer.width / 2 - 300,
					y: -renderer.height,
					x_to: renderer.width / 2 - 300,
					y_to: renderer.height / 2 - 50
				},
				scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

			this.el = scene;
			slide_container_6.addChild(scene);
			scene.init();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

				return deferred;
		},

		destroy: function() {
			this.el.destroy();
		}

	},

	scene_3: {

		el: null,

		init: function() {
			var title = {
					text: "УЗНАВАЙТЕ",
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 - 50
				}, 
				info = {
					text: "В имидж-гайде Вы найдете описание своего\nцветотипа, типа фигуры и формы лица. Взгляните\nна себя новым взглядом и откройте секреты\nсобственной красоты!",
					x: renderer.width,
					y: renderer.height / 2 + 120,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 + 120
				},
				btn_title = {
					text: "ЗАКАЗАТЬ",
					x: renderer.width / 2 - 320,
					y: -renderer.height,
					x_to: renderer.width / 2 - 320,
					y_to: renderer.height / 2 + 50
				},
				pic = {
					url: "i/s6/lamp.png",
					x: renderer.width / 2 + 300,
					y: -renderer.height,
					x_to: renderer.width / 2 + 300,
					y_to: renderer.height / 2 - 80
				},
				scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

			this.el = scene;
			slide_container_6.addChild(scene);
			scene.init();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

				return deferred;
		},

		destroy: function() {
			this.el.destroy();
		}

	},

	scene_4: {

		el: null,

		init: function() {
			var title = {
					text: "МЕНЯЙТЕСЬ",
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 - 50
				}, 
				info = {
					text: "Отправляйтесь в магазин или салон красоты -\nпрактические рекомендации помогут Вам\nс уверенностью профи создавать модные\nи яркие образы.",
					x: renderer.width,
					y: renderer.height / 2 + 120,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 + 120
				},
				btn_title = {
					text: "ЗАКАЗАТЬ",
					x: renderer.width / 2 + 320,
					y: -renderer.height,
					x_to: renderer.width / 2 + 320,
					y_to: renderer.height / 2 + 50
				},
				pic = {
					url: "i/s6/fen.png",
					x: renderer.width / 2 - 300,
					y: -renderer.height,
					x_to: renderer.width / 2 - 300,
					y_to: renderer.height / 2 - 80
				},
				scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

			this.el = scene;
			slide_container_6.addChild(scene);
			scene.init();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

				return deferred;
		},

		destroy: function() {
			this.el.destroy();
		}

	},

	scene_5: {

		el: null,

		init: function() {
			var title = {
					text: "ПРОБУЙТЕ",
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 - 50
				}, 
				info = {
					text: "Благодаря имидж-гайду Вы научитесь\nсамостоятельно сочетать аксессуары\nи элементы одежды.",
					x: renderer.width,
					y: renderer.height / 2 + 120,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 + 120
				},
				btn_title = {
					text: "ЗАКАЗАТЬ",
					x: renderer.width / 2 - 280,
					y: -renderer.height,
					x_to: renderer.width / 2 - 280,
					y_to: renderer.height / 2 - 120
				},
				pic = {
					url: "i/s6/dress.png",
					x: renderer.width / 2 + 300,
					y: -renderer.height,
					x_to: renderer.width / 2 + 300,
					y_to: renderer.height / 2 - 80
				},
				scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

			this.el = scene;
			slide_container_6.addChild(scene);
			scene.init();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

				return deferred;
		},

		destroy: function() {
			this.el.destroy();
		}

	},

	scene_6: {

		el: null,

		init: function() {
			var title = {
					text: "ЧУВСТВУЙТЕ",
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 - 50
				}, 
				info = {
					text: "Новый имидж – шаг в новую жизнь.\nЧувствуйте перемены, наслаждайтесь собой!",
					x: renderer.width,
					y: renderer.height / 2 + 120,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 + 120
				},
				btn_title = {
					text: "ЗАКАЗАТЬ",
					x: renderer.width / 2 + 250,
					y: -renderer.height,
					x_to: renderer.width / 2 + 250,
					y_to: renderer.height / 2 - 130
				},
				pic = {
					url: "i/s6/hair.png",
					x: renderer.width / 2 - 250,
					y: -renderer.height,
					x_to: renderer.width / 2 - 250,
					y_to: renderer.height / 2 - 80
				},
				scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

			this.el = scene;
			slide_container_6.addChild(scene);
			scene.init();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

				return deferred;
		},

		destroy: function() {
			this.el.destroy();
		}

	},

	spinner: {

		vars: {
			spin1_texture: 	null,
			spin1: 			null,
			spin2_texture: 	null,
			spin2: 			null,
			pos: 			0,
			alpha: 			0,
			init: false
		},

		init: function() {
			var vars = this.vars;

			vars.init = true;
			vars.spin1_texture = PIXI.Texture.fromImage("i/s6/spin1.svg");
			vars.spin1 = new PIXI.Sprite(vars.spin1_texture);
			vars.spin2_texture = PIXI.Texture.fromImage("i/s6/spin2.svg");
			vars.spin2 = new PIXI.Sprite(vars.spin2_texture);

			vars.spin1.anchor.set(0.5);
			vars.spin1.position.x = renderer.width / 2 - 5;
			vars.spin1.position.y = renderer.height / 2 + 350;
			vars.spin1.alpha = 0;
			vars.spin1.buttonMode = true;
			vars.spin1.interactive = true;
			vars.spin1.on("click", function() {
				App.SlideController.moveTo(active_slide, ++active_slide);
			});

			vars.spin2.anchor.set(0.5);
			vars.spin2.position.x = renderer.width / 2 - 5;
			vars.spin2.position.y = renderer.height / 2 + 345;
			vars.spin2.alpha = 0;

			slide_container_6.addChild(vars.spin1);
			slide_container_6.addChild(vars.spin2); 
		},

		update: function() {
			var vars = this.vars;

			if(vars.init == true) {
				vars.pos += 0.06;
				vars.spin2.y += Math.sin(vars.pos);
			}

			if( vars.spin1 != null ) {
				if( vars.spin1.alpha < 1 ) vars.spin1.alpha += 0.01;
			}
			
			if( vars.spin2 != null ) {
				if( vars.spin2.alpha < 1 ) vars.spin2.alpha += 0.01;
			}

		},

		destroy: function() {
			var vars = this.vars;

			slide_container_6.removeChild(vars.spin1);
			slide_container_6.removeChild(vars.spin2);
		}

	}

};
App.managerService.slide_7 = {

	init: function() {
		console.log("Slide 7 init");

		var deferred = $.Deferred();

		slide_container_7 = new PIXI.Container();

		$anketa.fadeIn(function() {
			var row = $anketa.find(".anketa-row"),
				delay = 100;

			row.each(function() {
				var that = $(this);

				setTimeout(function() {
					that.animate({ "opacity" : 1 }, 500);
				}, delay);

				delay += 100;
			});
		});

		setTimeout(function() {
			deferred.resolve();
		}, SLIDE_ANIMATION_TIME_7);

		return deferred;
	},

	destroy: function() {
		console.log("Slide 7 destroy");

		$anketa.fadeOut(function() {
			$(this).find(".anketa-row").css({ "opacity" : 0 });
		});

		slide_container_7 = null;
	},

	update: function() {

	},

	elems: {

	}

};
App.managerService.slide_8 = {

	init: function(active) {
		console.log("Slide 8 init");

		slide_container_8 = new PIXI.Container();
		slide_container_8.alpha = 0;
		for (var key in this.elems) this.elems[key].init();
		stage.addChild(slide_container_8);

		var deferred = $.Deferred();

		setTimeout(function() {
			deferred.resolve();
		}, SLIDE_ANIMATION_TIME_8);

		return deferred;
	},

	destroy: function() {
		console.log("Slide 8 destroy");

		for (var key in this.elems) this.elems[key].destroy();
		stage.removeChild(slide_container_8);
		slide_container_8 = null;
	},

	update: function() {
		if( slide_container_8 != null ) {
			if( slide_container_8.alpha < 1 ) slide_container_8.alpha += 0.05;
		}
		for (var key in this.elems) this.elems[key].update();
	},

	elems: {

		slider: {

			slides: null,
			next_btn: null,
			prev_btn: null,

			init: function() {

				var data = [
					{ url: "i/s8/slide_4.jpg", title: "Восхищенные\nвзгляды!" },
					{ url: "i/s8/slide_3.jpg", title: "Красивый\nдизайн!" },
					{ url: "i/s8/slide_2.jpg", title: "Игоровой\nпроцесс!" },
					{ url: "i/s8/slide_1.jpg", title: "Быстрый\nотклик!" }
				],
					slides = new PIXI.Container(),
					slide_ind = 0;

				this.slides = slides;

				var Slide = function(index, url, title) {
					// Photo
					this.texture = PIXI.Texture.fromImage(url);
					this.sprite = new PIXI.Sprite(this.texture);
					this.sprite.anchor.x = .5;
					this.sprite.anchor.y = .5;
					this.sprite.position.x = renderer.width / 2;
					this.sprite.position.y = renderer.height / 2;
					if( index != data.length - 1 ) this.sprite.alpha = 0;

					// Title
					var style = {
							font : '65px FiraSansRegular',
						    fill : '#fff',
						    lineHeight: 65,
						    padding: 10,
						    align : "center"
						};

					this.title = new PIXI.Text(title, style);
					this.title.anchor.x = .5;
					this.title.anchor.y = .5;
					this.title.x = 0;
					this.title.y = 0;

					this.sprite.addChild(this.title);

					return this.sprite;
				};

				for(var i = 0; i < data.length; i++) {
					var slide = new Slide( i, data[i].url, data[i].title );

					slides.addChild(slide);
				}

				slide_container_8.addChild(slides);

				slide_ind = slides.children.length - 1;

				// Prev btn
				var prev_btn_texture = PIXI.Texture.fromImage("i/s8/prev.png");

				this.prev_btn = new PIXI.Sprite(prev_btn_texture);
				this.prev_btn.width = 45;
				this.prev_btn.height = 45;
				this.prev_btn.x = 150;
				this.prev_btn.y = renderer.height / 2;
				this.prev_btn.buttonMode = true;
				this.prev_btn.interactive = true;
				this.prev_btn.on("click", function() {
					if( slide_ind <= slides.children.length - 1 ) {
						createjs.Tween.get(slides.children[slide_ind])
							.to({ alpha: 0 }, 1000, createjs.Ease.getPowInOut(4));

						if(slide_ind == slides.children.length - 1) {
							slide_ind = -1;
						}

						createjs.Tween.get(slides.children[++slide_ind])
							.to({ alpha: 1 }, 1000, createjs.Ease.getPowInOut(4));
					}
				});

				slide_container_8.addChild(this.prev_btn);

				// Next btn
				var next_btn_texture = PIXI.Texture.fromImage("i/s8/next.png");

				this.next_btn = new PIXI.Sprite(next_btn_texture);
				this.next_btn.width = 45;
				this.next_btn.height = 45;
				this.next_btn.x = renderer.width - 150;
				this.next_btn.y = renderer.height / 2;
				this.next_btn.buttonMode = true;
				this.next_btn.interactive = true;
				this.next_btn.on("click", function() {
					console.log(slide_ind, slides.children.length);
					if( slide_ind >= 0 ) {						
						createjs.Tween.get(slides.children[slide_ind])
							.to({ alpha: 0 }, 1000, createjs.Ease.getPowInOut(4));

						if(slide_ind == 0) {
							slide_ind = slides.children.length;
						}

						createjs.Tween.get(slides.children[--slide_ind])
							.to({ alpha: 1 }, 1000, createjs.Ease.getPowInOut(4));
					} else {
						slide_ind = 0;
					}
				});

				slide_container_8.addChild(this.next_btn);
		
			},

			update: function() {
				for(var i = 0; i < this.slides.children.length; i++) {
					this.slides.children[i].position.x = renderer.width / 2;
					this.slides.children[i].position.y = renderer.height / 2;
				}

				this.prev_btn.x = 150;
				this.prev_btn.y = renderer.height / 2;
				this.next_btn.x = renderer.width - 150;
				this.next_btn.y = renderer.height / 2;
			},

			destroy: function() {

			}

		},

		orderBtn: {

			init: function() {

				$order_btn.addClass("active").addClass("white");

			},

			destroy: function() {

				$order_btn.removeClass("active").removeClass("white");

			},

			update: function() {

			}

		},

		footer: {

			init: function() {

				$footer.addClass("active");

			},

			destroy: function() {

				$footer.removeClass("active");

			},

			update: function() {

			}

		}

	}

};