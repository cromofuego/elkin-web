(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}})();const a=document.getElementById("canvasBackground"),d=a.getContext("2d");a.width=window.innerWidth;const E=document.body,_=document.documentElement;Math.max(E.scrollHeight,E.offsetHeight,_.clientHeight,_.scrollHeight,_.offsetHeight);a.height=document.body.scrollHeight;let r;a.height/80*(a.width/80);class S{constructor(i,t,s,n,l,c){this.x=i,this.y=t,this.directionX=s,this.directionY=n,this.size=l,this.color=c}draw(){d.beginPath(),d.arc(this.x,this.y,this.size,0,Math.PI*2,!1),d.fillStyle="#7b1fa2",d.fill()}update(){(this.x>a.width||this.x<0)&&(this.directionX=-this.directionX),(this.y>a.height||this.y<0)&&(this.directionY=-this.directionY),this.x+=this.directionX,this.y+=this.directionY,this.draw()}}function B(){r=[];let e=40;for(let i=0;i<e;i++){let t=Math.random()*5+1,s=Math.random()*(innerWidth-t*2-t*2)+t*2,n=Math.random()*(document.body.scrollHeight-t*2-t*2)+t*10,l=Math.random()*2-1.5,c=Math.random()*2-1.5,x="#7b1fa2";r.push(new S(s,n,l,c,t,x))}}function M(){let e=1;for(let i=0;i<r.length;i++)for(let t=i;t<r.length;t++){let s=(r[i].x-r[t].x)*(r[i].x-r[t].x)+(r[i].y-r[t].y)*(r[i].y-r[t].y);s<a.width/7*(a.height/7)&&(e=1-s/2e5,d.strokeStyle="rgba(139,146,169,"+e+")",d.beginPath(),d.moveTo(r[i].x,r[i].y),d.lineTo(r[t].x,r[t].y),d.stroke())}}function T(){requestAnimationFrame(T),d.clearRect(0,0,innerWidth,document.body.scrollHeight);for(let e=0;e<r.length;e++)r[e].update();M()}window.addEventListener("resize",function(){a.width=innerWidth,a.height=document.body.scrollHeight,a.height/80*(a.height/80)});B();T();const f=document.getElementById("canvas-text-particles"),o=f.getContext("2d");f.width=window.innerWidth-10;f.height=580;let y=[],w=0,I=0;const u={x:null,y:null,radius:30},P=`Hello!
I am
Elkin`,h=P.split(`
`);f.addEventListener("mousemove",function(e){u.x=e.offsetX,u.y=e.offsetY});window.innerWidth<331?(w=1.5,o.fillStyle="white",o.font="14px Consolas",o.fillText(h[0],0,26),o.fillText(h[1],8,44),o.fillText(h[2],3.5,64)):window.innerWidth<500?(w=5.5,o.fillStyle="white",o.font="14px Consolas",o.fillText(h[0],0,26),o.fillText(h[1],8,44),o.fillText(h[2],3.5,64)):(w=10.5,o.fillStyle="white",o.font="22px Consolas",o.fillText(h[0],0,26),o.fillText(h[1],8,44),o.fillText(h[2],3.5,64));window.addEventListener("resize",function(){f.width=window.innerWidth-10});class C{constructor(i,t){this.x=i,this.y=t,this.size=3,this.baseX=this.x,this.baseY=this.y,this.density=Math.random()*40+5}draw(){o.fillStyle="#8b92a9",o.beginPath(),o.arc(this.x,this.y,this.size,0,Math.PI*2),o.closePath(),o.fill()}update(){let i=u.x-this.x,t=u.y-this.y,s=Math.sqrt(i*i+t*t),n=i/s,l=t/s,c=u.radius,x=(c-s)/c,X=n*x*this.density,Y=l*x*this.density;if(s<u.radius)this.x-=X,this.y-=Y;else{if(this.x!==this.baseX){let v=this.x-this.baseX;this.x-=v/20}if(this.y!==this.baseY){let v=this.y-this.baseY;this.y-=v/20}}}}const g=o.getImageData(0,0,100,100);function H(){y=[];for(let e=0,i=g.height;e<i;e++)for(let t=0,s=g.width;t<s;t++)if(g.data[e*4*g.width+t*4+3]>158){let n=t+w,l=e+I;y.push(new C(n*7,l*7))}}H();function k(){o.clearRect(0,0,f.width,f.height);for(let e=0;e<y.length;e++)y[e].draw(),y[e].update();requestAnimationFrame(k)}k();const W=document.querySelectorAll(".header-section"),A=document.querySelectorAll("#links-a a"),m=document.getElementById("nabvar-a"),b=document.getElementsByClassName("arrow-up"),N=document.getElementsByClassName("btn-nabvar-a"),p=document.getElementsByClassName("i-btn-navbar-a"),q=new IntersectionObserver((e,i)=>{e.forEach(t=>{if(t.isIntersecting){const s="#"+t.target.id;history.pushState({},"",s),A.forEach(n=>{n.classList.remove("navbar-a__ul__li-a__link-icon__link-icon--active"),n.attributes.href.nodeValue===s&&n.classList.add("navbar-a__ul__li-a__link-icon__link-icon--active")})}})},{threshold:1,rootMargin:"0px 0px -70% 0px"});W.forEach(e=>{q.observe(e)});N[0].addEventListener("click",function(){console.log(p[0].style.color),p[0].style.color==="rgba(255, 255, 255, 0.8)"?(m.style="transform: translate(-100px);",p[0].style="color: #8b92a9"):(m.style="transform: translate(0px)",p[0].style="color: hsla(0, 0%, 100%, .8)")});window.innerWidth>900&&window.addEventListener("scroll",function(){const e=window.visualViewport.pageTop;e>3e3?(console.log("holi"),b[0].style="transform: translate(0px)"):b[0].style="transform: translate(100px);",e>655&&e<3450?m.style="transform: translate(0px)":(e<4e3&&e>3450,m.style="transform: translate(-100px);")});window.innerWidth<900&&window.addEventListener("scroll",function(){window.visualViewport.pageTop>5600?b[0].style="transform: translate(0px)":b[0].style="transform: translate(100px);"});const L=document.querySelectorAll(".send-email__form__buttons__btn , .card-header-a__button-cv__btn");for(let e=0;e<L.length;e++)L[e].addEventListener("click",i=>{let t=document.createElement("span");t.classList.add("overlay-animation-button");let s=i.offsetX,n=i.offsetY;t.style.left=s+"px",t.style.top=n+"px",i.target.appendChild(t),setTimeout(()=>{t.remove()},300)});
