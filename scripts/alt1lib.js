/// <reference path="runeappslib.js">
/// <reference path="imagedetect.js">
/// <reference path="apps/alt1/alt1doc.js">

window.a1lib={},a1lib.newestversionint=1005e3,a1lib.newestversion="1.5.0",a1lib.hslitenames=["totra","totlv","totxp","attra","-----","attxp","defra","-----","defxp","strra","-----","strxp","hpxra","-----","hpxxp","ranra","-----","ranxp","prara","-----","praxp","magra","-----","magxp","coora","-----","cooxp","woora","-----","wooxp","flera","-----","flexp","fisra","-----","fisxp","firra","-----","firxp","crara","-----","craxp","smira","-----","smixp","minra","-----","minxp","herra","-----","herxp","agira","-----","agixp","thira","-----","thixp","slara","-----","slaxp","farra","-----","farxp","runra","-----","runxp","hunra","-----","hunxp","conra","-----","conxp","sumra","-----","sumxp","dunra","-----","dunxp","divra","-----","divxp","invra","-----","invxp","-----","-----","-----","-----","domra","domsc","crura","crusc","casra","cassc","baara","baasc","badra","badsc","bacra","bacsc","bahra","bahsc","-----","-----","mobra","mobsc","cnqra","cnqsc","fogra","fogsc","-----","-----","-----","-----","-----","-----","-----","-----","-----","-----","-----","-----","-----","-----","-----","-----"],a1lib.maxtransfer=4e6,a1lib.trackinterval=window.alt1&&alt1.captureInterval||300,a1lib.openbrowser=function(a){window.alt1?alt1.openBrowser(a):window.open(a,"_blank")},a1lib.getdisplaybounds=function(){return!!window.alt1&&new Rect(alt1.screenX,alt1.screenY,alt1.screenWidth,alt1.screenHeight)},a1lib.getstats=function(a,t){a1lib.dlpage("/data/getstats.php?player="+a1lib.lowname(a),function(e){var n;-1==e.indexOf("Fatal error")?(n=JSON.parse(e),t(n,a)):t(!1,a)},function(){t(!1,a)})},a1lib.getregion=function(a,t,e,n){if(a=Math.round(a),t=Math.round(t),e=Math.round(e),n=Math.round(n),!window.alt1)return null;var r=new ImageData(e,n);if(r.x=a,r.y=t,e*n*4<=a1lib.maxtransfer){if(!(l=alt1.getRegion(a,t,e,n)))return null;a1lib.alt1imgdecode(l,r,a,t,e,n)}else{var i=a,o=alt1.bindRegion(a,t,e,n);if(o<=0)return null;for(;i<a+e;){var l,d=Math.min(a+e,Math.floor(i+a1lib.maxtransfer/4/n));if(!(l=alt1.bindGetRegion(o,i-a,0,d-i,n)))return null;a1lib.alt1imgdecode(l,r,i,t,d-i,n),i=d}}return r},a1lib.bindregion=function(a,t,e,n){var r,i;return a=Math.round(a),t=Math.round(t),e=Math.round(e),n=Math.round(n),!!window.alt1&&(!((r=alt1.bindRegion(a,t,e,n))<=0)&&(i=new Rect(a,t,e,n),new ImgRefBind(r,i)))},a1lib.bindscreenregion=function(a,t,e,n){var r,i;return a=Math.round(a),t=Math.round(t),e=Math.round(e),n=Math.round(n),!!window.alt1&&(!((r=alt1.bindScreenRegion(a,t,e,n))<=0)&&(i=new Rect(a,t,e,n),new ImgRefBind(r,i)))},a1lib.bindfullscreen=function(){return!!window.alt1&&a1lib.bindregion(alt1.screenX,alt1.screenY,alt1.screenWidth,alt1.screenHeight)},a1lib.bindfullrs=function(){return a1lib.aboveversion("1.1.0")?a1lib.bindregion(0,0,alt1.rsWidth,alt1.rsHeight):a1lib.bindfullscreen()},a1lib.bindgetregion=function(a,t,e,n,r){var i,o,l,d;if(t=Math.round(t),e=Math.round(e),n=Math.round(n),r=Math.round(r),!window.alt1)return!1;for((d=new ImageData(n,r)).x=t,d.y=e,o=t;;){if(l=Math.min(t+n,Math.floor(o+a1lib.maxtransfer/4/r)),!(i=alt1.bindGetRegion(a,o,e,l-o,r)))return!1;if(a1lib.alt1imgdecode(i,d,o,e,l-o,r),(o=l)==t+n)break}return d},a1lib.alt1imgdecode=function(a,t,e,n,r,i){"use strict";var o=atob(a);t||((t=new ImageData(r,i)).x=e,t.y=n);var l=t.data;r|=0,i|=0;for(var d=4*(e-t.x)+4*(n-t.y)*t.width,s=0;s<r;s++)for(var u=0;u<i;u++){var c=d+(4*s|0)+(u*t.width*4|0)|0,f=(4*s|0)+(4*u*r|0)|0;l[c+0|0]=o.charCodeAt(f+2|0),l[c+1|0]=o.charCodeAt(f+1|0),l[c+2|0]=o.charCodeAt(f+0|0),l[c+3|0]=o.charCodeAt(f+3|0)}return t},a1lib.alt1imgencode=function(a,t,e,n,r){void 0==t&&(t=0,e=0,n=a.width,r=a.height);for(var i="",o=e;o<e+r;o++)for(var l=t;l<t+n;l++){var d=4*l+4*a.width*o;i+=String.fromCharCode(a.data[d+2]),i+=String.fromCharCode(a.data[d+1]),i+=String.fromCharCode(a.data[d+0]),i+=String.fromCharCode(a.data[d+3])}return btoa(i)},a1lib.resetscroll=function(){document.body.classList.add("scrollreset"),setTimeout(function(){document.body.classList.remove("scrollreset")},50)},a1lib.coloravg=function(a,t,e,n,r){var i,o,l,d,s,u;for(l=0,d=0,s=0,i=t;i<t+n;i++)for(o=e;o<e+r;o++)u=4*a.width*o+4*i,l+=a.data[u],d+=a.data[u+1],s+=a.data[u+2];return[l/=n*r,d/=n*r,s/=n*r]},a1lib.colordifsum=function(a,t,e,n,r){var i,o,l,d,s;for(s=4*a.width,4,l=0,i=t;i<t+n;i++)for(o=e;o<e+r;o++)d=s*o+4*i,l+=Math.abs(a.data[d]-a.data[d+4]),l+=Math.abs(a.data[d]-a.data[d+s]),l+=Math.abs(a.data[d+1]-a.data[d+1+4]),l+=Math.abs(a.data[d+1]-a.data[d+1+s]),l+=Math.abs(a.data[d+2]-a.data[d+2+4]),l+=Math.abs(a.data[d+2]-a.data[d+2+s]);return l},a1lib.tiledata=function(a,t,e,n,r,i,o){var l,d,s,u,c,f,h,b;for(c=[(u=rgbtohsl(a1lib.coloravg(a,n,r,i,o)))[0],u[1],u[2]],f=0;(f+1)*t<=i;f++)for(d=n+f*t,h=0;(h+1)*e<=o;h++)s=r+h*e,b=5*f+h*Math.floor(i/t)*5+3,l=rgbtohsl(a1lib.coloravg(a,d,s,t,e)),c[b+0]=l[0],c[b+0]>128&&(c[b+1]-=256),c[b+0]<-128&&(c[b+1]+=256),c[b+1]=l[1],c[b+2]=u[2]-l[2],c[b+3]=Math.floor(a1lib.colordifsum(a,d+1,s+1,t-2,e-2)/t/e),c[b+4]=Math.floor(a1lib.colordifsum(a,d,s,t,e)/t/e);return c},a1lib.comparetiledata=function(a,t){var e,n,r,i;for(i=0,r=Math.abs(a[0]-t[0]),i+=Math.max(0,5*(r>128?255-r:r)-100),i+=Math.max(0,5*Math.abs(a[1]-t[1])-100),e=3;e<a.length;e+=5)n=0,n+=((r=Math.abs(a[e]-t[e]))>128?255-r:r)*Math.max(a[e],t[e])/255,n+=Math.abs(a[e+1]-t[e+1]),n+=100*Math.max(0,a[e+3]-t[e+4]),i+=n+=100*Math.max(0,t[e+3]-a[e+4]);return i},a1lib.mixcolor=function(a,t,e,n){return void 0==n&&(n=255),(e<<0)+(t<<8)+(a<<16)+(n<<24)},a1lib.findsubimg=function(a,t,e,n,r,i,o){var l,d,s;if(!a)return console.log("Warning - no large image provided in a1lib.findsubimg."),!1;if(!t)return console.log("Warning - no small searchimg provided in a1lib.findsubimg."),!1;if(a1lib.simplecomparemax,void 0==n&&(n=0),void 0==r&&(r=0),void 0==i&&(i=a.width),void 0==o&&(o=a.height),"bind"==a.t&&window.alt1&&alt1.bindFindSubImg){if(l=a1lib.alt1imgencode(t),s=alt1.bindFindSubImg(a.handle,l,t.width,n,r,i,o),!(s=JSON.parse(s)))return!1;for(l in s)s[l].x+=a.x,s[l].y+=a.y;return s}return d=a instanceof ImageData?a:a.toData(),s=[],a1lib.findsubbuffer(d,t,n,r,i,o)},a1lib.findsubbuffer=function(a,t,e,n,r,i){"use strict";null==e&&(e=0),null==n&&(n=0),null==r&&(r=a.width),null==i&&(i=a.height);for(var o=[],l=4*t.width,d=4*a.width,s=[],u=0;u<t.width;u++){for(var c=0;c<t.height;c++){var f=4*u+c*l;if(255==t.data[f+3]&&s.push({x:u,y:c}),10==s.length)break}if(10==s.length)break}var h=e+r-t.width,b=n+i-t.height,p=s.length;for(u=e;u<=h;u++)for(c=n;c<=b;c++){for(var m=!1,v=0;v<p;v++){if(v>3);var g=4*(u+s[v].x)+(c+s[v].y)*d,w=4*s[v].x+s[v].y*l;if(a1lib.coldif(a.data[g],a.data[g+1],a.data[g+2],a.data[g+3],t.data[w],t.data[w+1],t.data[w+2],t.data[w+3])>30){m=!0;break}}if(!m&&(!1!==a1lib.simplecompare(a,t,u,c,30)&&(o.push({x:u,y:c}),o.length>50)))return o}return o},a1lib.simplecomparemax=30,a1lib.simplecompare=function(a,t,e,n,r){var i,o,l,d,s;if(e<0||n<0)return!1;if(e+t.width>a.width||n+t.height>a.height)return!1;for(r||0===r||(r=a1lib.simplecomparemax),(r<0||null==r)&&(r=1020),!0,l=0,s=8;s>=1;s/=2)for(i=0;i<t.width;i+=s)for(o=0;o<t.height;o+=s)if(d=a1lib.coldifat(a,e+i,n+o,t,i,o),1==s&&(l+=d),d>r)return!1;return l/t.width/t.height},a1lib.coldif=function(a,t,e,n,r,i,o,l){return(Math.abs(a-r)+Math.abs(t-i)+Math.abs(e-o))*l/255},a1lib.coldifat=function(a,t,e,n,r,i){var o,l;return o=4*t+e*a.width*4,l=4*r+i*n.width*4,a1lib.coldif(a.data[o],a.data[o+1],a.data[o+2],a.data[o+3],n.data[l],n.data[l+1],n.data[l+2],n.data[l+3])},a1lib.lvltoxp=function(a){var t,e;if(isNaN(a)||a>200)return 0;for(e=0,t=1;t<a;t+=1)e+=Math.floor(t+300*Math.pow(2,t/7));return Math.floor(e/4)},a1lib.xptolvl=function(a){for(var t=0;a>-1;)t+=1,a-=Math.floor(t+300*Math.pow(2,t/7))/4;return t},a1lib.lowname=function(a,t,e){return a=(a=(a=a.replace(/\+/g," ")).replace(/\%20/g," ")).replace(/[^\w \-]/g,""),e||(a=a.replace(/[ _\-]/g,"_").toLowerCase()),t&&((a=(a=(a=a.replace(/^[ _\-]+/,"")).replace(/[ _\-]+$/,"")).replace(/[ _\-]{2,}/,function(a){return"__________".slice(0,a.length)})).length>12||""==a)?"":a},a1lib.dlpage=function(a,t,e){var n;n=new XMLHttpRequest,t&&(n.onload=function(){t(n.responseText)}),e&&(n.onerror=function(){e()}),n.open("GET",a,!0),n.send()},a1lib.tablink=function(parent,id){var me,fn;me=this,this.loaded=!parent,this.parent=parent,this.load=null,this.exit=null,this.id=id||Math.floor(1e5*Math.random()),this.call=function(a,t){localStorage[(this.parent?"popup_call_":"popup_callback_")+this.id]=Date.now()+"-"+a+":"+(void 0==t?'""':JSON.stringify(t))},parent?localStorage.popup_id=this.id:delete localStorage.popup_id,fn=function(e){var match,arg;if(e.key==(me.parent?"popup_callback_":"popup_call_")+me.id){if(!e.newValue)return;if(match=e.newValue.match(/^\d+-(\w+):([\s\S]*)$/),!match)return;if(arg=JSON.parse(match[2]),clog(match[1],arg),"close"!=match[1]||me.parent||window.close(),"load"==match[1]&&(me.loaded=!0,clog("loaded")),"exit"==match[1]&&(me.loaded=!1,clog("exited"),window.removeEventListener("storage",fn)),"eval"==match[1])return void eval(arg);me[match[1]]&&me[match[1]](arg)}},window.addEventListener("storage",fn)},a1lib.requireparentlink=function(){var a;a1lib.parentlink||((a=document.createElement("div")).setAttribute("style","position:absolute; top:0px; left:0px; right:0px; bottom:0px; background:rgba(255,255,255,0.9); font-size:30px; text-align:center; padding:30px 10px; z-index:1000000;"),a.innerHTML="Failed to connect to parent window",document.body.appendChild(a))},a1lib.identifyUrl=function(a){window.alt1&&alt1.identifyAppUrl(a)},a1lib.aboveversion=function(a){var t,e;return!!window.alt1&&(!!(t=a.match(/^(\d+)\.(\d+)\.(\d+)$/))&&(e=1e3*t[1]*1e3+1e3*t[2]+1*t[3],alt1.versionint>=e))},a1lib.mousePosition=function(){var a=alt1.mousePosition;return-1==a?{x:-1,y:-1}:{x:a>>>16,y:65535&a}},a1lib.addResizeElement=function(a,t,e,n,r){window.alt1&&alt1.userResize&&a.addEventListener("mousedown",function(a){alt1.userResize(t,e,n,r),a.preventDefault()})},a1lib.doSomethingCool=function(a,t){a=a||0,t=t||1,window.alt1&&alt1.permissionInstalled&&alt1.doSomethingCool&&Math.random()<t&&setTimeout(alt1.doSomethingCool,a)},a1lib.skinName=window.alt1?alt1.skinName:"default",window.alt1&&(alt1.events||(alt1.events={}),alt1.events.alt1pressed||(alt1.events.alt1pressed=[]),alt1.events.menudetected||(alt1.events.menudetected=[]),alt1.events.interfacefound||(alt1.events.interfacefound=[]),alt1.events.interfacesearching||(alt1.events.interfacesearching=[]),alt1.events.interfacenotfound||(alt1.events.interfacenotfound=[]),alt1.events.interfaceread||(alt1.events.interfaceread=[]),alt1.events.xprise||(alt1.events.xprise=[]),alt1.events.xpcounter||(alt1.events.xpcounter=[]),alt1.events.rslinked||(alt1.events.rslinked=[]),alt1.events.rsunlinked||(alt1.events.rsunlinked=[]),alt1.events.posreset||(alt1.events.posreset=[]),alt1.events.permissionchanged||(alt1.events.permissionchanged=[]),alt1.events.daemonrun||(alt1.events.daemonrun=[]),alt1.events.userevent||(alt1.events.userevent=[]),alt1.events.rsfocus||(alt1.events.rsfocus=[]),alt1.events.rsblur||(alt1.events.rsblur=[]));