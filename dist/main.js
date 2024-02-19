(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};async function t(e){const t=await i(e);console.log(t),c.innerHTML="";let n=document.createElement("p");n.textContent=`${t.location.city}, ${t.location.country}`;let o=document.createElement("p");o.textContent=t.location.time;let r=document.createElement("div");r.classList.add("flex-centered");let l=document.createElement("img");l.src=t.conditions.icon;let a=document.createElement("p");a.textContent=t.conditions.text,r.appendChild(l),r.appendChild(a),c.appendChild(n),c.appendChild(o),c.appendChild(r)}e.d({},{Q:()=>i,g:()=>c});const n=document.querySelector(".input"),o=document.querySelector(".searchBtn"),c=document.querySelector(".weather-card"),r=document.querySelector(".error");async function i(e){try{r.textContent="";const t=await async function(e){try{const t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7a84c19e7f6245b7814141628240402&q=${e}&days=3&aqi=no&alerts=no`,{mode:"cors"}),n=await t.json();if(!n.location)throw new Error("No matching location found");return n}catch(e){console.log(e)}}(e);return null==t&&(r.textContent="No matching location found"),console.log(t),function(e){try{const t={conditions:{icon:e.current.condition.icon,text:e.current.condition.text},temp_c:e.current.temp_c,feelslike_c:e.current.feelslike_c,temp_f:e.current.temp_f,feelslike_f:e.current.feelslike_f,wind_speed:e.current.wind_kph,cloud:e.current.cloud,location:{country:e.location.country,city:e.location.name,time:e.location.localtime}};return console.log(t),t}catch(e){console.log(e)}}(t)}catch(e){console.log(e)}}o.addEventListener("click",(()=>{t(n.value)})),t("Kamieniec Podolski")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCLHFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IHNlcmNoRm9yV2V0aGVyLCB3ZWF0aGVyQ2FyZCB9IGZyb20gXCIuXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVXZWF0aGVyQ2FyZChjaXR5KXtcclxuICAgIGNvbnN0IGNpdHlXZWF0aGVyRGF0YSA9IGF3YWl0IHNlcmNoRm9yV2V0aGVyKGNpdHkpO1xyXG4gICAgY29uc29sZS5sb2coY2l0eVdlYXRoZXJEYXRhKTtcclxuICAgIHdlYXRoZXJDYXJkLmlubmVySFRNTD0gJyc7XHJcbiAgICBsZXQgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2l0eVdlYXRoZXJEYXRhLmxvY2F0aW9uLmNpdHl9LCAke2NpdHlXZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XHJcbiAgICBsZXQgY3VycmVudFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjdXJyZW50VGltZS50ZXh0Q29udGVudCA9IGNpdHlXZWF0aGVyRGF0YS5sb2NhdGlvbi50aW1lO1xyXG4gIFxyXG4gICAgbGV0IHdlYXRoZXJDb25kaXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHdlYXRoZXJDb25kaXRpb25zLmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY2VudGVyZWQnKVxyXG4gICAgbGV0IGNvbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjb25kSWNvbi5zcmMgPSBjaXR5V2VhdGhlckRhdGEuY29uZGl0aW9ucy5pY29uO1xyXG4gICAgbGV0IGNvbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uZFRleHQudGV4dENvbnRlbnQgPSBjaXR5V2VhdGhlckRhdGEuY29uZGl0aW9ucy50ZXh0O1xyXG4gICAgd2VhdGhlckNvbmRpdGlvbnMuYXBwZW5kQ2hpbGQoY29uZEljb24pO1xyXG4gICAgd2VhdGhlckNvbmRpdGlvbnMuYXBwZW5kQ2hpbGQoY29uZFRleHQpO1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpO1xyXG4gICAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQoY3VycmVudFRpbWUpO1xyXG4gICAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQod2VhdGhlckNvbmRpdGlvbnMpXHJcbiAgfVxyXG5cclxuICBleHBvcnQge2NyZWF0ZVdlYXRoZXJDYXJkfSIsImltcG9ydCB7IGdldEN1cnJlbnRXZWF0aGVyRGF0YSwgcHJvY2Vzc1dlYXRoZXJEYXRhIH0gZnJvbSBcIi4vYXBpXCI7XG5pbXBvcnQgeyBjcmVhdGVXZWF0aGVyQ2FyZCB9IGZyb20gXCIuL2RvbVwiO1xuXG5jb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0XCIpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hCdG5cIik7XG5jb25zdCB3ZWF0aGVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jYXJkXCIpO1xuY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcblxuZnVuY3Rpb24gaGFuZGxlSW5wdXQoKXtcblxufVxuXG5hc3luYyBmdW5jdGlvbiBzZXJjaEZvcldldGhlcihjaXR5KSB7XG4gIHRyeXtcbiAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IG15RGF0YSA9IGF3YWl0IGdldEN1cnJlbnRXZWF0aGVyRGF0YShjaXR5KTtcbiAgICBpZiAobXlEYXRhID09IHVuZGVmaW5lZCl7XG4gICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9ICdObyBtYXRjaGluZyBsb2NhdGlvbiBmb3VuZCdcbiAgICB9XG4gICAgY29uc29sZS5sb2cobXlEYXRhKTtcbiAgICBjb25zdCBwYXJzZWREYXRhID0gcHJvY2Vzc1dlYXRoZXJEYXRhKG15RGF0YSk7XG4gICAgcmV0dXJuIHBhcnNlZERhdGFcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gIH1cbn1cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNyZWF0ZVdlYXRoZXJDYXJkKHVzZXJJbnB1dC52YWx1ZSk7XG59KTtcblxuY3JlYXRlV2VhdGhlckNhcmQoJ0thbWllbmllYyBQb2RvbHNraScpO1xuXG5leHBvcnQge3NlcmNoRm9yV2V0aGVyLCB3ZWF0aGVyQ2FyZH0iLCJhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlckRhdGEobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTdhODRjMTllN2Y2MjQ1Yjc4MTQxNDE2MjgyNDA0MDImcT0ke2xvY2F0aW9ufSZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub2AsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH0sXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoIXdlYXRoZXJEYXRhLmxvY2F0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG1hdGNoaW5nIGxvY2F0aW9uIGZvdW5kJyk7XG4gIH1cbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycilcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSkge1xuICB0cnkge1xuICAgIGNvbnN0IG15V2VhdGhlckRhdGEgPSB7XG4gICAgICBjb25kaXRpb25zOiB7XG4gICAgICAgIGljb246IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gICAgICAgIHRleHQ6IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICB9LFxuICAgICAgdGVtcF9jOiB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgIGZlZWxzbGlrZV9jOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICAgdGVtcF9mOiB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZixcbiAgICAgIGZlZWxzbGlrZV9mOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgICAgd2luZF9zcGVlZDogd2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaCxcbiAgICAgIGNsb3VkOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmNsb3VkLFxuICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgY291bnRyeTogd2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeSxcbiAgICAgICAgY2l0eTogd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZSxcbiAgICAgICAgdGltZTogd2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKG15V2VhdGhlckRhdGEpO1xuICAgIHJldHVybiBteVdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0Q3VycmVudFdlYXRoZXJEYXRhLCBwcm9jZXNzV2VhdGhlckRhdGEgfTtcbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFzeW5jIiwiY3JlYXRlV2VhdGhlckNhcmQiLCJjaXR5IiwiY2l0eVdlYXRoZXJEYXRhIiwic2VyY2hGb3JXZXRoZXIiLCJjb25zb2xlIiwibG9nIiwid2VhdGhlckNhcmQiLCJpbm5lckhUTUwiLCJjaXR5TmFtZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwibG9jYXRpb24iLCJjb3VudHJ5IiwiY3VycmVudFRpbWUiLCJ0aW1lIiwid2VhdGhlckNvbmRpdGlvbnMiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb25kSWNvbiIsInNyYyIsImNvbmRpdGlvbnMiLCJpY29uIiwiY29uZFRleHQiLCJ0ZXh0IiwiYXBwZW5kQ2hpbGQiLCJ1c2VySW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoQnRuIiwiZXJyb3JEaXYiLCJteURhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsIndlYXRoZXJEYXRhIiwianNvbiIsIkVycm9yIiwiZXJyIiwiZ2V0Q3VycmVudFdlYXRoZXJEYXRhIiwidW5kZWZpbmVkIiwibXlXZWF0aGVyRGF0YSIsImN1cnJlbnQiLCJjb25kaXRpb24iLCJ0ZW1wX2MiLCJmZWVsc2xpa2VfYyIsInRlbXBfZiIsImZlZWxzbGlrZV9mIiwid2luZF9zcGVlZCIsIndpbmRfa3BoIiwiY2xvdWQiLCJuYW1lIiwibG9jYWx0aW1lIiwiZSIsInByb2Nlc3NXZWF0aGVyRGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=