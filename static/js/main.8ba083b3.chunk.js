(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{179:function(e,t,a){e.exports=a.p+"static/media/006-thunderstorm.a3ae7e9e.svg"},180:function(e,t,a){e.exports=a.p+"static/media/019-raining.f334d20a.svg"},181:function(e,t,a){e.exports=a.p+"static/media/023-rain-4.66e73bdb.svg"},182:function(e,t,a){e.exports=a.p+"static/media/016-snowing-1.d416e972.svg"},183:function(e,t,a){e.exports=a.p+"static/media/031-cloudy.a510d1e4.svg"},184:function(e,t,a){e.exports=a.p+"static/media/013-sunny.fa3a4662.svg"},185:function(e,t,a){e.exports=a.p+"static/media/035-cloud.e12bfaaf.svg"},187:function(e,t,a){e.exports=a(392)},391:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t);a(188),a(197);var n=a(0),r=a.n(n),c=a(81),i=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(21),s=a(82),o=a(28),m={data:{current:{},forecast:{}},search:void 0},u=Object(s.b)((function(e,t){var a=t.type,n=t.payload;switch(a){case"SET_CURRENT":return Object(o.a)(Object(o.a)({},e),{},{data:Object(o.a)(Object(o.a)({},e.data),{},{current:n})});case"SET_FORECAST":return Object(o.a)(Object(o.a)({},e),{},{data:Object(o.a)(Object(o.a)({},e.data),{},{forecast:n})});case"HANDLE_SEARCH":return Object(o.a)(Object(o.a)({},e),{},{search:n});default:return Object(o.a)({},e)}}),m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),d=function(e){return{type:"HANDLE_SEARCH",payload:e}},_=function(e){var t=Object(l.d)(),a=Object(l.c)(),n=function(e){return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=bdb758c73d929483146ad6c4d174a694")).then((function(e){return e.json()})).then((function(e){a({type:"SET_CURRENT",payload:e}),fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.coord.lat,"&lon=").concat(e.coord.lon,"&exclude=current,minutely,hourly,alerts&appid=bdb758c73d929483146ad6c4d174a694")).then((function(e){return e.json()})).then((function(e){return a(function(e){return{type:"SET_FORECAST",payload:e}}(e))}))}))};return a(d("Simferopol")),n(t.getState().search),r.a.createElement("form",{className:"search__bar",onSubmit:function(e){return function(e){e.preventDefault();var a=t.getState().search;if(a&&""!==a.trim())return n(a)}(e)}},r.a.createElement("input",{type:"text",placeholder:"Your City",defaultValue:t.getState().search,className:"text--reg search__input",onChange:function(e){return function(e){return a(d(e.target.value))}(e)}}),r.a.createElement("span",{className:"search__input-bg"}),r.a.createElement("input",{type:"submit",className:"search__button",value:""}))},p=a(179),f=a.n(p),g=a(180),x=a.n(g),E=a(181),h=a.n(E),b=a(182),w=a.n(b),N=a(183),v=a.n(N),O=a(184),y=a.n(O),D=a(185),j=a.n(D),S=function(e){return["Wen","Thu","Fri","Sat","Sun","Mon","Tue"][e%7]},F=function(e){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e]},k=function(e){return e>=200&&e<300?f.a:e>=300&&e<400?x.a:e>=500&&e<600?h.a:e>=600&&e<700?w.a:e>=700&&e<800?v.a:800===e?y.a:e>=801&&e<900?j.a:void 0},C=Object(l.b)((function(e){return{current:e.data.current}}))((function(e){var t=Object(l.d)().getState().data.current;return r.a.createElement("section",{className:"dashboard"},0===Object.keys(t).length?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dashboard__icon"},r.a.createElement("img",{src:k(t.weather[0].id),alt:k(t.weather[0].main),className:"dashboard__icon-image"}),r.a.createElement("p",{className:"text text--reg dashboard__icon-text"},t.weather[0].main)),r.a.createElement("div",{className:"dashboard__temperature"},r.a.createElement("h1",{className:"text text--header dashboard__temperature-text--main"},Math.round(t.main.temp-273.15).toFixed(1),"\xb0C"),r.a.createElement("h3",{className:"text text--orange text--header dashboard__temperature-text--fl"},"Feels like ",Math.round(t.main.feels_like-273.15).toFixed(1),"\xb0C")),r.a.createElement("div",{className:"dashboard__date"},r.a.createElement("p",{className:"text text--reg dashboard__date-text"},S((new Date).getDate()),", ",r.a.createElement("span",{className:"text--orange"},(new Date).getDate()," ",F((new Date).getMonth())," ",(new Date).getFullYear())))))})),T=Object(l.b)((function(e){return{current:e.data.current}}))((function(e){var t=Object(l.d)().getState().data.current;return r.a.createElement("ul",{className:"list info"},0===Object.keys(t).length?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"text text--reg info__item"},r.a.createElement("p",{className:"text info__text--key info__text--humidity"},"Humidity"),r.a.createElement("strong",{className:"text info__text--value"},t.main.humidity,"%")),r.a.createElement("li",{className:"text text--reg info__item"},r.a.createElement("p",{className:"text info__text--key info__text--pressure"},"Air pressure"),r.a.createElement("strong",{className:"text info__text--value"},(.750063755419211*t.main.pressure).toFixed(2),"mm")),r.a.createElement("li",{className:"text text--reg info__item"},r.a.createElement("p",{className:"text info__text--key info__text--wind"},"Wind"),r.a.createElement("strong",{className:"text info__text--value"},t.wind.speed,"m/s ",(a=t.wind.deg)>=0&&a<45?"\ud83e\udc6c":a>=45&&a<90?"\ud83e\udc69":a>=90&&a<135?"\ud83e\udc6d":a>=135&&a<180?"\ud83e\udc6a":a>=180&&a<225?"\ud83e\udc6e":a>=225&&a<270?"\ud83e\udc6b":a>=270&&a<315?"\ud83e\udc6f":a>=315&&a<360?"\ud83e\udc68":void 0)));var a}()))})),M=a(186),R=a(395),A=a(394),W=(a(390),Object(l.b)((function(e){return{forecast:e.data.forecast}}))((function(e){var t=Object(n.useState)(window.innerWidth),a=Object(M.a)(t,2),c=a[0],i=a[1],s=Object(l.d)().getState().data.forecast;Object(n.useEffect)((function(e){window.addEventListener("resize",(function(e){return i(window.innerWidth)})),window.addEventListener("rotationchange",(function(e){return i(window.innerWidth)}))}));var o;return 0===Object.keys(s).length?null:r.a.createElement(r.a.Fragment,null,c>1024?(o=s.daily,r.a.createElement("ul",{className:"list slider"},o.map((function(e,t){var a=e.temp,n=e.feels_like,c=e.weather;return r.a.createElement("li",{className:"text--center slider__item",key:t},r.a.createElement("p",{className:"text text--reg slider__item-text--date"},S((new Date).getDate()+(t+1)),", ",(new Date).getDate()+(t+1),"\xa0",F(new Date(Date.now()+864e5*(t+1)).getMonth()),"\xa0",new Date(Date.now()+864e5*(t+1)).getFullYear()),r.a.createElement("img",{src:k(c[0].id),alt:c[0].main,className:"slider__item-logo"}),r.a.createElement("div",null,r.a.createElement("p",{className:"text text--reg slider__item-text--temperature"},Math.round((a.min+a.max)/2-273.15).toFixed(1),"\xb0C"),r.a.createElement("p",{className:"text text--orange text--reg slider__item-text--fl"},"Feels like ",Math.round((n.day+n.night+n.eve+n.morn)/4-273.15).toFixed(1),"\xb0C")))})))):function(e){return r.a.createElement(R.a,{slidesPerView:3,loop:!1,className:"slider"},e.map((function(e,t){var a=e.temp,n=e.feels_like,c=e.weather;return r.a.createElement(A.a,{className:"text--center slider__item",key:t},r.a.createElement("p",{className:"text text--reg slider__item-text--date"},S((new Date).getDate()+(t+1)),", ",(new Date).getDate()+(t+1),"\xa0",F(new Date(Date.now()+864e5*(t+1)).getMonth()),"\xa0",new Date(Date.now()+864e5*(t+1)).getFullYear()),r.a.createElement("img",{src:k(c[0].id),alt:c[0].main,className:"slider__item-logo"}),r.a.createElement("div",null,r.a.createElement("p",{className:"text text--reg slider__item-text--temperature"},Math.round((a.min+a.max)/2-273.15).toFixed(1),"\xb0C"),r.a.createElement("p",{className:"text text--orange text--reg slider__item-text--fl"},"Feels like ",Math.round((n.day+n.night+n.eve+n.morn)/4-273.15).toFixed(1),"\xb0C")))})))}(s.daily))}))),L=(a(391),function(e){return r.a.createElement("div",{className:"app__background-wrapper"},r.a.createElement("div",{className:"app__background"}))});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:u},r.a.createElement(L,null),r.a.createElement(_,null),r.a.createElement(C,null),r.a.createElement(W,null),r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[187,1,2]]]);
//# sourceMappingURL=main.8ba083b3.chunk.js.map