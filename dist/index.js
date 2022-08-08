(()=>{"use strict";var e,n,t,a,i,s={426:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(645),i=t.n(a)()((function(e){return e[1]}));i.push([e.id,"* {\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  overflow-x: hidden;\n  color: #e0e0e0;\n  font-family: 'Roboto Mono', monospace;\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: #2b2b2b;\n  height: 100vh;\n}\n\n.header {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  margin: 20px;\n}\n\n.btn {\n  width: 120px;\n  height: 30px;\n  color: #e0e0e0;\n  border-radius: 5px;\n  font-family: 'Roboto Mono', monospace;\n  text-transform: uppercase;\n  border: 1px solid currentColor;\n  background-color: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  outline: none;\n}\n\n.btn:hover {\n  background-color: #585858;\n}\n\n.garage-view {\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n\n}\n\n.garage-view__container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.garage-view__forms {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.winners-view {\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n  gap: 10px;\n}\n\n.hidden {\n  display: none;\n}\n\n.form {\n  width: 350px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n}\n\n.controls {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  width: 350px;\n}\n\n.title {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n}\n\n.winner-message {\n  text-align: center;\n}\n\n.text {\n  margin-bottom: 5px;\n}\n\n.garage__cars {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.car__btns {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n\n.btn--select, .btn--remove {\n  width: 70px;\n  height: 25px;\n  padding: 0 10px;\n}\n\n.btn--start, .btn--stop {\n  width: 50px;\n  height: 25px;\n}\n\n.btn:disabled {\n  background-color: #777777;\n  cursor: auto;\n}\n\n.car__name {\n  font-weight: 800;\n}\n\n.car__img {\n  width: 35px;\n}\n\n.car__road {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: dashed #e0e0e0;\n}\n\n.finish__img {\n  width: 50px;\n  margin-right: 50px;\n\n}\n\n.finish__img img {\n  height: 20px;\n  background-color: transparent;\n}\n\nul {\n  list-style-type: none;\n}\n\n.table {\n  display: block;\n  font-family: 'Roboto Mono', monospace;\n  overflow: auto;\n  width: auto;\n}\n\nth {\n  background-color: #777777;\n  color: white;\n  font-weight: normal;\n  padding: 5px;\n  text-align: center;\n}\n\ntd {\n  background-color: rgb(173, 173, 173);\n  color: #777777;\n  padding: 5px;\n  text-align: center;\n}\n\n",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(i[r]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);a&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},654:(e,n,t)=>{var a=t(379),i=t.n(a),s=t(426);i()(s.Z,{insert:"head",singleton:!1}),s.Z.locals},379:(e,n,t)=>{var a,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),s=[];function r(e){for(var n=-1,t=0;t<s.length;t++)if(s[t].identifier===e){n=t;break}return n}function o(e,n){for(var t={},a=[],i=0;i<e.length;i++){var o=e[i],c=n.base?o[0]+n.base:o[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=r(l),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(s[u].references++,s[u].updater(m)):s.push({identifier:l,updater:p(m,n),references:1}),a.push(l)}return a}function c(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var s=t.nc;s&&(a.nonce=s)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,a){var i=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=l(n,i);else{var s=document.createTextNode(i),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(s,r[n]):e.appendChild(s)}}function m(e,n,t){var a=t.css,i=t.media,s=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var h=null,g=0;function p(e,n){var t,a,i;if(n.singleton){var s=g++;t=h||(h=c(n)),a=u.bind(null,t,s,!1),i=u.bind(null,t,s,!0)}else t=c(n),a=m.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var t=o(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var i=r(t[a]);s[i].references--}for(var c=o(e,n),d=0;d<t.length;d++){var l=r(t[d]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}t=c}}}},847:(e,n,t)=>{t.d(n,{Rn:()=>i,oX:()=>s,DT:()=>r,tD:()=>o,Bo:()=>c,p6:()=>d,yQ:()=>l,Ag:()=>u,ix:()=>m,H9:()=>h,BS:()=>g,IO:()=>p,AV:()=>b});const a="http://localhost:3000",i=async(e,n=7)=>{const t=await fetch(`${a}/garage/?_page=${e}&_limit=${n}`);return{items:await t.json(),count:t.headers.get("X-Total-Count")}},s=async e=>(await fetch(`${a}/garage/${e}`)).json(),r=async e=>(await fetch(`${a}/garage`,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json(),o=async e=>(await fetch(`${a}/garage/${e}`,{method:"DELETE"})).json(),c=async(e,n)=>(await fetch(`${a}/garage/${e}`,{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).json(),d=async e=>(await fetch(`${a}/engine?id=${e}&status=started`,{method:"PATCH"})).json(),l=async e=>(await fetch(`${a}/engine?id=${e}&status=stopped`,{method:"PATCH"})).json(),u=async e=>{const n=await fetch(`${a}/engine?id=${e}&status=drive`,{method:"PATCH"}).catch();return 200!==n.status?{success:!1}:Object.assign({},await n.json())},m=async({page:e,limit:n=10,sort:t,order:i})=>{const r=await fetch(`${a}/winners?_page=${e}&_limit=${n}${((e,n)=>e&&n?`&_sort=${e}&_order=${n}`:"")(t,i)}`),o=await r.json();return{items:await Promise.all(o.map((async e=>Object.assign(Object.assign({},e),{car:await s(e.id)})))),count:r.headers.get("X-Total-Count")}},h=async e=>(await fetch(`${a}/winners/${e}`)).json(),g=async e=>(await fetch(`${a}/winners/${e}`,{method:"DELETE"})).json(),p=async(e,n)=>(await fetch(`${a}/winners/${e}`,{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).json(),b=async(e,n)=>{const t=await(async e=>(await fetch(`${a}/winners/${e}`)).status)(e);if(404===t)await(async e=>(await fetch(`${a}/winners`,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json())({id:e,wins:1,time:n});else{const t=await h(e);await p(e,{id:e,wins:t.wins+1,time:n<t.time?n:t.time})}}},570:(e,n,t)=>{t.a(e,(async e=>{t.d(n,{Z:()=>c});var a=t(847);const{items:i,count:s}=await(0,a.Rn)(1),{items:r,count:o}=await(0,a.ix)({page:1}),c={carsPage:1,winnersPage:1,cars:i,carsCount:s,winners:r,winnersCount:o,animation:{},view:"garage",sortBy:"",sortOrder:""};e()}),1)},768:(e,n,t)=>{t.d(n,{Q:()=>o});var a=t(847);const i=["Acura","Alfa Romeo","Alpine","Apollo","Apple","Aston Martin","Audi","Automobili Pininfarina","Bentley","BMW","Bollinger","Brilliance","Bugatti","Buick","BYD","Cadillac","Chana","Chery","Chevrolet","Chrysler","Citroen","Continental","CUPRA","Dacia","Daewoo","Daihatsu","Datsun","Detroit Electric","Dodge","DS Automobiles","FAW","Ferrari","Fiat","Fisker","Ford","Foxtron","Geely","Genesis","GMC","Great Wall","Haval","Honda","Hummer","Hyundai","Ineos","Infiniti","Iran Khodro","JAC","Jaguar","Jeep","JETOUR","KIA","Koenigsegg","Lada","Lamborghini","Lancia","Land Rover","Lexus","Lifan","Lincoln","Lordstown","Lotus","Lucid","LvChi","Lynk & Co","Maserati","Maybach","Mazda","MCLaren","Mercedes-Benz","MG","MINI","Mitsubishi","Nikola","NIO","Nissan","Opel","Pagani","Peugeot","Polestar","Porsche","Qoros","Range Rover","Ravon","Renault","Rimac","Rivian","Rolls-Royce","Saab","Saipa","SEAT","Skoda","smart","SsangYong","SSC North America","Stellantis","Subaru","Suzuki","Tata","Tesla","Torsus","Toyota","VinFast","Volkswagen","Volvo","Xpeng","Zotye"],s=["Durango","Ram","Challenger","Charger","Grand Caravan","X7","X5","X3","X6 M","X6","X1","X4","C3 Aircross","C5 Aircross","Duster","CR-V","Corolla","C4 Cactus","DS3 Crossback","C1","C3","Berlingo Multispace","DS4 Crossback","UX 250h","NX 300h","LC 500","RX 350/200t","Rapid","Largus","IS 200t","LS 500h","RX","ES 200/250/350","Hatchback","CX-5","Sedan","CX-30","CX-9","CX-3","MX-5 Roadster","Phantom","Camry","Polo","Cullinan","Ghost","Dawn","Duster","Arkana","Sandero","Logan","Trafic Fourgon","Logan MCV","Captur","Kadjar","RAV4","Rio","Creta","Solaris"],r=()=>{let e="#";for(let n=0;n<6;n+=1)e+="0123456789abcdef"[Math.floor(16*Math.random())];return e};class o{constructor(e){this.view=e}init(){this.view.listenCarBtns(this),this.view.listenCreateCar(this),this.view.listenGenerateBtn(this),this.view.listenNextPage(),this.view.listenPrevPage(),this.view.listenRace(this)}async getCar(e){return await(0,a.oX)(e)}async addCar(e,n){await(0,a.DT)({name:e,color:n}),this.view.updateGarageContainer()}async deleteCar(e){await(0,a.tD)(e),await(0,a.BS)(e),this.view.updateGarageContainer(),this.view.updateWinnersContainer()}async updateCar(e,n){await(0,a.Bo)(e,n);const t=await(0,a.H9)(e);t&&(await(0,a.IO)(e,t),this.view.updateWinnersContainer()),this.view.updateGarageContainer()}async generateCars(){const e=((e=100)=>new Array(e).fill(1).map((()=>({name:`${i[Math.floor(Math.random()*i.length)]} ${s[Math.floor(Math.random()*s.length)]}`,color:r()}))))();await Promise.all(e.map((async e=>(0,a.DT)(e))))}async getAnimationTime(e){const{velocity:n,distance:t}=await(0,a.p6)(e);return Math.round(t/n)}async stopDriving(e){await(0,a.yQ)(e)}async saveWinner(e,n){await(0,a.AV)(e,n)}}},109:(e,n,t)=>{t.d(n,{f:()=>a});class a{constructor(){this.animateCar=(e,n,t)=>{let a=null;const i={id:1},s=r=>{a||(a=r);const o=r-a,c=Math.round(o*(n/t));e.style.transform=`translateX(${Math.min(c,n)}px)`,c<n&&(i.id=window.requestAnimationFrame(s))};return i.id=window.requestAnimationFrame(s),i}}getElemPosition(e){const{top:n,left:t,width:a,height:i}=e.getBoundingClientRect();return{x:t+a/2,y:n+i/2}}getDistanceBetweenElem(e,n){const t=this.getElemPosition(e),a=this.getElemPosition(n);return Math.hypot(t.x-a.x,t.y-a.y)}}},113:(e,n,t)=>{t.a(e,(async e=>{t.d(n,{G:()=>o});var a=t(847),i=t(570),s=t(109),r=e([i]);i=(r.then?await r:r)[0];class o{constructor(){this.renderPage=()=>{const e=`\n    <header class="header">\n      <button type="button" class="btn header__garage" disabled>To Garage</button>\n      <button type="button" class="btn header__winners">To Winners</button>\n    </header>\n  \n    <main class="container">\n      <div class="garage-view">\n        <div class="garage-view__container">\n          <div class="garage-view__forms">\n            <form class="form from--create" id="form-create">\n              <input class="input" id="create-name" name="name" type="text" required />\n              <input class="color" id="create-color" name="color" type="color" value="#ffffff" />\n              <button class="btn" type="submit">Create</button>\n            </form>\n            <form class="form form--update" id="form-update">\n              <input class="input" id="update-name" name="name" type="text" disabled />\n              <input class="color" id="update-color" name="color" type="color" value="#ffffff" disabled />\n              <button class="btn" id="update-btn" type="submit" disabled>Update</button>\n            </form>\n            <div class="controls">\n              <button class="btn controls--race" id="race">Race</button>\n              <button class="btn controls--reset" id="reset" disabled>Reset</button>\n              <button class="btn controls--gen" id="generate">Generate</button>\n            </div>\n          </div>\n\n          <div class="garage-view__modal">\n            <h2 class="winner-message hidden"></h2>\n          </div>\n        </div>\n        <div class="garage-container">\n        ${this.renderGarageContainer()}\n        </div>\n        <div class="pagination">\n          <button class="btn btn--prev" id="prev" disabled>PREV</button>\n          <button class="btn btn--next" id="next" disabled>NEXT</button>\n        </div>\n      </div>\n      <div class="winners-view hidden">\n        ${this.renderWinnersContainer()}\n      </div>\n    </main>\n  `;document.body.innerHTML=e;const n=document.getElementById("next"),t=document.getElementById("next-win");this.listenWinners(),Number(i.Z.carsCount)>7&&(n.disabled=!1),Number(i.Z.winnersCount)>10&&(t.disabled=!1)},this.renderGarageContainer=()=>`\n    <h2 class="title"> \n      <span class="material-symbols-outlined">\n        directions_car\n      </span>Garage (${i.Z.carsCount} cars)\n    </h2>\n    <p class="text">Page #${i.Z.carsPage}</p>\n    <ul class="garage__cars">\n      ${i.Z.cars.map((e=>`<li>${this.renderCarContainer(e)}</li>`)).join("")}\n    </ul>\n    `,this.renderWinnersContainer=()=>`\n    <h2 class='title'><span class="material-symbols-outlined">\n    star\n    </span>Winners (${i.Z.winnersCount})</h2>\n    <p class='text'>Page #${i.Z.winnersPage}</p>\n    <table class='table' cellspacing='0' border='0' cellpadding='0'>\n      <thead>\n        <th>Number</th>\n        <th>Car</th>\n        <th>Name</th>\n        <th>Wins</th>\n        <th>Best time(sec)</th>\n      </thead>\n      <tbody>\n        ${i.Z.winners.map(((e,n)=>`\n          <tr>\n            <td>${1===i.Z.winnersPage?"":i.Z.winnersPage-1}${n+1}</td>\n            <td>${this.renderCarImg(e.car.color)}</td>\n            <td>${e.car.name}</td>\n            <td>${e.wins}</td>\n            <td>${e.time}</td>\n          </tr>\n          `)).join("")}\n      </tbody>\n    </table>\n    <div class='pagination'>\n      <button class='btn winners-btn' id='prev-win' disabled>PREV</button>\n      <button class='btn winners-btn' id='next-win' disabled>NEXT</button>\n    </div>\n    `,this.renderCarContainer=({id:e,name:n,color:t})=>`\n      <div class="car">\n        <div class="car__btns">\n          <button class="btn btn--select" id="select-car-${e}">Select</button>\n          <button class="btn btn--remove" id="remove-car-${e}">Remove</button>\n          <button class="btn btn--start" id="start-engine-${e}">\n              start\n          </button>\n          <button class="btn btn--stop" id = "stop-engine-${e}" disabled>\n              stop\n          </button>\n          <span class="car__name">${n}</span>\n        </div>\n        <div class="car__road">\n          <div class="car__img" id = "car-${e}">\n            ${this.renderCarImg(t)}\n          </div>\n          <div class="finish__img" id = "finish-${e}">\n            <img src="assets/race-flag-15.gif" alt = "finish" />\n          </div>\n        </div>\n      </div>\n    `,this.renderCarImg=e=>`<?xml version='1.0' encoding = 'iso-8859-1' ?>\n    <svg version="1.1" xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 470 470"\n    xmlns: xlink = "http://www.w3.org/1999/xlink" enable - background="new 0 0 470 470" >\n    <g fill="${e}">\n        <path\n          d="m126.184,358.951c19.299,0 35-15.701 35-35s-15.701-35-35-35-35,15.701-35,35 15.701,35 35,35zm0-55c11.028,0 20,8.972 20,20s-8.972,20-20,20-20-8.972-20-20 8.971-20 20-20z" />\n    <path\n          d="m343.816,288.951c-19.299,0-35,15.701-35,35s15.701,35 35,35 35-15.701 35-35-15.701-35-35-35zm0,55c-11.028,0-20-8.972-20-20s8.972-20 20-20 20,8.972 20,20-8.971,20-20,20z" />\n    <path\n          d="m137.5,116.049h23.779c4.143,0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-23.779c-10.423,0-27.031,7.176-34.177,14.767l-60.088,63.845c-2.051,2.179-2.609,5.368-1.423,8.115 1.187,2.747 3.893,4.525 6.885,4.525h290.271c2.562,0 4.945-1.307 6.323-3.467 1.377-2.159 1.558-4.873 0.478-7.195l-30.854-66.365c-3.315-7.046-14.628-14.225-22.415-14.225h-101.221c-4.143,0-7.5,3.358-7.5,7.5l-.001,68.752h-117.722l48.19-51.204c4.243-4.508 17.066-10.048 23.254-10.048zm61.279,0h93.7c2.203,0.103 7.842,3.681 8.849,5.581l25.883,55.671h-128.433l.001-61.252z" />\n    <path\n          d="m470,257.692c0-26.631-20.555-55.149-45.819-63.57-0.017-0.006-35.078-11.693-35.078-11.693-5.854-1.951-13.576-8.812-16.203-14.394l-30.84-65.535c-8.299-17.636-30.068-31.451-49.56-31.451h-155c-18.639,0-43.247,10.632-56.022,24.206l-69.158,73.482c-6.909,7.34-12.32,20.984-12.32,31.064v94.15c0,20.678 16.822,37.5 37.5,37.5h14.06c3.775,37.846 35.8,67.5 74.624,67.5s70.849-29.654 74.624-67.5h45.509c4.143,0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-45.509c-3.775-37.846-35.8-67.5-74.624-67.5s-70.849,29.654-74.624,67.5h-14.06c-12.406,0-22.5-10.093-22.5-22.5v-94.15c0-6.294 3.929-16.2 8.242-20.783l69.159-73.483c9.941-10.563 30.594-19.486 45.099-19.486h155c13.682,0 30.162,10.458 35.987,22.838l30.84,65.535c4.421,9.395 15.182,18.955 25.031,22.238l28.498,9.499c-0.492,2.841-0.748,5.729-0.748,8.642 0,25.238 18.65,46.198 42.892,49.831v29.32c0,12.407-8.357,22.5-18.631,22.5h-17.929c-3.775-37.846-35.8-67.5-74.624-67.5-41.355,0-75,33.645-75,75s33.645,75 75,75c38.824,0 70.849-29.654 74.624-67.5h17.929c18.544,0 33.631-16.822 33.631-37.5v-36.26zm-343.816,6.259c33.084,0 60,26.916 60,60s-26.916,60-60,60-60-26.916-60-60 26.916-60 60-60zm217.632,120c-33.084,0-60-26.916-60-60s26.916-60 60-60 60,26.916 60,60-26.916,60-60,60zm83.292-169.15c0-0.969 0.04-1.934 0.117-2.893 13.16,7.627 23.787,22.37 26.864,37.266-15.466-3.785-26.981-17.756-26.981-34.373z" />\n    </g>\n    </svg>\n  `,this.renderPage(),this.animation=new s.f}async updateGarageContainer(){const e=document.querySelector(".garage-container"),n=document.getElementById("next"),t=document.getElementById("prev");if(e){const{items:n,count:t}=await(0,a.Rn)(i.Z.carsPage);i.Z.cars=n,i.Z.carsCount=t,e.innerHTML=this.renderGarageContainer()}i.Z.carsPage<Number(i.Z.carsCount)/7?n.disabled=!1:n.disabled=!0,1!==i.Z.carsPage?t.disabled=!1:t.disabled=!0}async updateWinnersContainer(){const e=document.querySelector(".winners-view");if(e){const{items:n,count:t}=await(0,a.ix)({page:i.Z.winnersPage});i.Z.winners=n,i.Z.winnersCount=t,e.innerHTML=this.renderWinnersContainer();const s=document.getElementById("next-win"),r=document.getElementById("prev-win");i.Z.winnersPage<Number(i.Z.winnersCount)/10?s.disabled=!1:s.disabled=!0,1!==i.Z.winnersPage?r.disabled=!1:r.disabled=!0,this.listenPrevPageWin(),this.listenNextPageWin()}}listenWinners(){const e=document.querySelector(".header__winners"),n=document.querySelector(".header__garage"),t=document.querySelector(".winners-view"),a=document.querySelector(".garage-view");e&&n&&t&&a&&e.addEventListener("click",(()=>{t.classList.remove("hidden"),a.classList.add("hidden"),i.Z.view="winners",n.disabled=!1,e.disabled=!0,this.listenGarage()}))}listenGarage(){const e=document.querySelector(".header__winners"),n=document.querySelector(".header__garage"),t=document.querySelector(".winners-view"),a=document.querySelector(".garage-view");e&&n&&t&&a&&n.addEventListener("click",(()=>{t.classList.add("hidden"),a.classList.remove("hidden"),i.Z.view="garage",n.disabled=!0,e.disabled=!1,this.listenWinners()}))}listenCreateCar(e){const n=document.getElementById("form-create"),t=document.getElementById("create-name"),a=document.getElementById("create-color");n&&n.addEventListener("submit",(async n=>{n.preventDefault();const i=t.value,s=a.value;i&&s&&e.addCar(i,s),t.value=""}))}listenUpdateCar(e,n){const t=document.getElementById("form-update"),i=document.getElementById("update-name"),s=document.getElementById("update-color"),r=document.getElementById("update-btn");i.disabled=!1,s.disabled=!1,r.disabled=!1,t&&t.addEventListener("submit",(async t=>{t.preventDefault();const o=i.value,c=s.value,d=await(0,a.oX)(n),l={name:o||d.name,color:c};e.updateCar(n,l),i.value="",i.disabled=!0,s.disabled=!0,r.disabled=!0}))}listenCarBtns(e){window.addEventListener("click",(async n=>{const t=n.target,a=Number(t.id.split("-")[2]);switch(t.className){case"btn btn--remove":e.deleteCar(a);break;case"btn btn--select":this.listenUpdateCar(e,a);break;case"btn btn--start":this.startDriving(e,a);break;case"btn btn--stop":this.stopDriving(e,a)}}))}listenGenerateBtn(e){const n=document.getElementById("generate");n&&n.addEventListener("click",(async()=>{n.disabled=!0,await e.generateCars(),await this.updateGarageContainer(),document.getElementById("next").disabled=!1,n.disabled=!1}))}resetRaceResetBtns(){const e=document.getElementById("race");document.getElementById("reset").disabled=!0,e.disabled=!1}listenNextPage(){const e=document.getElementById("next");e&&e.addEventListener("click",(()=>{i.Z.carsPage+=1,this.resetRaceResetBtns(),this.updateGarageContainer()}))}listenNextPageWin(){const e=document.getElementById("next-win");e&&e.addEventListener("click",(()=>{i.Z.winnersPage+=1,this.updateWinnersContainer()}))}listenPrevPage(){const e=document.getElementById("prev");e&&e.addEventListener("click",(()=>{this.resetRaceResetBtns(),i.Z.carsPage>1&&(i.Z.carsPage-=1,this.updateGarageContainer())}))}listenPrevPageWin(){const e=document.getElementById("prev-win");e&&e.addEventListener("click",(()=>{i.Z.winnersPage-=1,this.updateWinnersContainer()}))}async startDriving(e,n){const t=document.getElementById(`start-engine-${n}`),s=document.getElementById(`stop-engine-${n}`);t.disabled=!0,s.disabled=!1;const r=await e.getAnimationTime(n),o=document.getElementById(`car-${n}`),c=document.getElementById(`finish-${n}`);if(o&&c){const e=Math.floor(this.animation.getDistanceBetweenElem(o,c)+50);i.Z.animation[n]=this.animation.animateCar(o,e,r);const{success:t}=await(0,a.Ag)(n);return t||window.cancelAnimationFrame(i.Z.animation[n].id),{success:t,id:n,animationTime:r}}}async stopDriving(e,n){const t=document.getElementById(`start-engine-${n}`),a=document.getElementById(`stop-engine-${n}`);t.disabled=!1,a.disabled=!0,await e.stopDriving(n);const s=document.getElementById(`car-${n}`);s&&(s.style.transform="translateX(0)",i.Z.animation[n]&&window.cancelAnimationFrame(i.Z.animation[n].id))}listenRace(e){const n=document.getElementById("race"),t=document.getElementById("reset");let s,r;n.addEventListener("click",(async()=>{let o=!1;t.disabled=!1,n.disabled=!0;const c=await(0,a.Rn)(i.Z.carsPage);c.items.forEach((async n=>{s=await this.startDriving(e,n.id),s&&s.success&&!o&&(o=!0,r=Number((s.animationTime/1e3).toFixed(1)),this.showWinnerMessage(n.name,r),await e.saveWinner(s.id,r),this.updateWinnersContainer())})),this.listenReset(e,c)}))}showWinnerMessage(e,n){const t=document.querySelector(".winner-message"),a=`The winner is ${e}, time is ${n}`;t&&(console.log(a),t.classList.remove("hidden"),t.innerHTML=a,setTimeout((()=>{null==t||t.classList.add("hidden")}),3e3))}listenReset(e,n){const t=document.getElementById("race"),a=document.getElementById("reset");a.addEventListener("click",(async()=>{a.disabled=!0,t.disabled=!1,n.items.forEach((n=>{this.stopDriving(e,n.id)}))}))}}}))},607:(e,n,t)=>{t.a(e,(async e=>{var n=t(768),a=t(113),i=(t(654),e([a]));const s=new(a=(i.then?await i:i)[0]).G;new n.Q(s).init(),console.log('\nBasic structure:\n\n(5/5) There should be two views on the site: "Garage" and "Winners".\n\n(5/5) "Garage" view should contain its name, page number, and the full amount of items in the database (how many car user has in his garage).\n\n(5/5) "Winners" view should contain its name, page number, and the full amount of items in the database (how many records the winners table contains).\n\n(10/10) View state should be saved when user switches from one view to another. For example, page number shouldn\'t be reset, input controls should contain that they contained before switching, etc.\n\n"Garage" view:\n\n(15/15) User should be able to create, update, delete a car, and see the list of the cars. Car has only two attributes: "name" and "color". For "delete"-operation car should be deleted from "garage" table as well as from "winners".\n\n(10/10) User should be able to select any color from an RGB-Palete like here and see the picture of the car colored with the color selected and car\'s name.\n\n(5/5) Near the car\'s picture should be buttons to update its attributes or delete it.\n\n(10/10) There should be pagination on the "Garage" view (7 cars per one page).\n\n(10/10) There should be a button to create random cars (100 cars per click). Name should be assembled from two random parts, for example "Tesla" + "Model S", or "Ford" + "Mustang" (At least 10 different names for each part). Color should be also generated randomly.\n\nCar animation:\n\n(5/5) Near the car\'s picture should be buttons for starting / stoping the car engine.\n\n(20/20) User clicks to the engine start button -> UI is waiting for car\'s velocity answer -> animate the car and makes another request to drive. In case api returned 500 error car animation should be stopped.\n\n(5/5) User clicks to the engine stop button -> UI is waiting for answer for stopping engine -> car returned to it\'s initial place.\n\n(5/5) Start engine button should be disabled in case car is already in driving mode. As well as stop engine button should be disabled when car is on it\'s initial place.\n\n(15/15) Car animation should work fine on any screen (smallest screen size is 500px).\n\nRace animation:\n\n(10/10) There should be a button to start race. After user clicks this button all the cars on the current page start driving.\n\n(10/10) There should be a button to reset race. After user clicks this button all the cars return to it\'s initial places.\n\n(10/10) After some car finishes first user should see the message contains car\'s name that shows which one has won.\n\n"Winners" view:\n\n(10/10) After some car wins it should be displayed at the "Winners view" table.\n\n(5/5) There should be pagination (10 winners per one page).\n\n(10/10) Table should include the next columns: "№", "Image of the car", "Name of the car", "Wins number", "Best time in seconds" (names of the columns can differ). If the same car wins more than once the number of wins should be incremented while best time should be saved only if it\'s better than the stored one.\n\n(0/10) User should be able to sort cars by wins number and by best time (ASC, DESC).\n\n\n\nTotal score: 180/190')}))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var t=r[e]={id:e,exports:{}};return s[e](t,t.exports,o),t.exports}e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t=e=>{e&&(e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},a=e=>!--e.r&&e(),i=(e,n)=>e?e.push(n):a(n),o.a=(s,r,o)=>{var c,d,l,u=o&&[],m=s.exports,h=!0,g=!1,p=(n,t,a)=>{g||(g=!0,t.r+=n.length,n.map(((n,i)=>n[e](t,a))),g=!1)},b=new Promise(((e,n)=>{l=n,d=()=>(e(m),t(u),u=0)}));b[n]=m,b[e]=(e,n)=>{if(h)return a(e);c&&p(c,e,n),i(u,e),b.catch(n)},s.exports=b,r((s=>{if(!s)return d();var r,o;c=(s=>s.map((s=>{if(null!==s&&"object"==typeof s){if(s[e])return s;if(s.then){var r=[];s.then((e=>{o[n]=e,t(r),r=0}));var o={};return o[e]=(e,n)=>(i(r,e),s.catch(n)),o}}var c={};return c[e]=e=>a(e),c[n]=s,c})))(s);var l=new Promise(((e,t)=>{(r=()=>e(o=c.map((e=>e[n])))).r=0,p(c,r,t)}));return r.r?l:o})).then(d,l),h=!1},o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o(607)})();