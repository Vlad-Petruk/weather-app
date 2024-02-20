(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{Q2:()=>q,gh:()=>f}),async function(){fetch("https://www.weatherapi.com/docs/weather_conditions.json").then((e=>{if(!e.ok)throw new Error(`Network response was not ok: ${e.statusText}`);return e.json()})).then((e=>{console.log(e)})).catch((e=>{console.error("Fetch error:",e)}))}();const t=document.querySelector(".main-container"),o=document.querySelector(".toggleButtons"),n=document.querySelector(".input-group"),c=document.querySelector(".header"),r=document.querySelector(".conditions"),i=document.querySelector(".cond-icon"),l=document.querySelector(".cond-text"),u=document.querySelector(".temp"),a=document.querySelector(".extra-box"),d=document.querySelector(".wind"),s=document.querySelector(".feels-like"),m=document.querySelector(".time");async function y(e,y){try{const p=await q(e);f.innerHTML="",c.textContent=`${p.location.city}, ${p.location.country}`,i.src=p.conditions.icon,l.textContent=p.conditions.text,f.appendChild(o),f.appendChild(n),f.appendChild(c),"F"===y?u.textContent=`${p.temp_f}°F`:"C"===y&&(u.textContent=`${p.temp_c}°C`),d.textContent=`Wind speed: ${p.wind_speed} km/h`,"F"===y?s.textContent=`Feels like: ${p.feelslike_c}°F`:"C"===y&&(s.textContent=`Feels like: ${p.feelslike_c}°C`),m.textContent=p.location.time,f.appendChild(r),f.appendChild(a),f.classList.add("flex-centered-col"),"Overcast "===p.conditions.text&&(t.style.background="blue")}catch(e){console.log(e)}}const p=document.querySelector(".input"),h=document.querySelector(".searchBtn"),f=document.querySelector(".weather-card"),C=document.querySelector(".error"),w=document.querySelector(".buttonC"),k=document.querySelector(".buttonF");async function q(e){try{C.textContent="";const t=await async function(e){try{const t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7a84c19e7f6245b7814141628240402&q=${e}&days=3&aqi=no&alerts=no`,{mode:"cors"}),o=await t.json();if(!o.location)throw new Error("No matching location found");return o}catch(e){console.log(e)}}(e);return null==t&&(C.textContent="No matching location found"),console.log(t),function(e){try{const t={conditions:{icon:e.current.condition.icon,text:e.current.condition.text},temp_c:e.current.temp_c,feelslike_c:e.current.feelslike_c,temp_f:e.current.temp_f,feelslike_f:e.current.feelslike_f,wind_speed:e.current.wind_kph,cloud:e.current.cloud,location:{country:e.location.country,city:e.location.name,time:e.location.localtime}};return console.log(t),t}catch(e){console.log(e)}}(t)}catch(e){console.log(e)}}p.value="Kamieniec Podolski",w.addEventListener("click",(()=>{y(p.value,"C")})),k.addEventListener("click",(()=>{y(p.value,"F")})),h.addEventListener("click",(()=>{y(p.value,"C")})),y("Kamieniec Podolski","C")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9N2E4NGMxOWU3ZjYyNDViNzgxNDE0MTYyODI0MDQwMiZxPSR7bG9jYXRpb259JmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfSxcbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGlmICghd2VhdGhlckRhdGEubG9jYXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gbWF0Y2hpbmcgbG9jYXRpb24gZm91bmQnKTtcbiAgfVxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKVxuICB9XG5cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbXlXZWF0aGVyRGF0YSA9IHtcbiAgICAgIGNvbmRpdGlvbnM6IHtcbiAgICAgICAgaWNvbjogd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbixcbiAgICAgICAgdGV4dDogd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgIH0sXG4gICAgICB0ZW1wX2M6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jLFxuICAgICAgZmVlbHNsaWtlX2M6IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgICB0ZW1wX2Y6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgICAgZmVlbHNsaWtlX2Y6IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YsXG4gICAgICB3aW5kX3NwZWVkOiB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoLFxuICAgICAgY2xvdWQ6IHdlYXRoZXJEYXRhLmN1cnJlbnQuY2xvdWQsXG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBjb3VudHJ5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgICBjaXR5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgICAgICB0aW1lOiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc29sZS5sb2cobXlXZWF0aGVyRGF0YSk7XG4gICAgcmV0dXJuIG15V2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb25kaXRpb25zTGlzdCAoKSB7XG4gIGNvbnN0IHVybCA9ICdodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS9kb2NzL3dlYXRoZXJfY29uZGl0aW9ucy5qc29uJztcblxuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2s6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZldGNoIGVycm9yOicsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuZ2V0Q29uZGl0aW9uc0xpc3QoKVxuXG5leHBvcnQgeyBnZXRDdXJyZW50V2VhdGhlckRhdGEsIHByb2Nlc3NXZWF0aGVyRGF0YSwgZ2V0Q29uZGl0aW9uc0xpc3QgfTtcbiIsImltcG9ydCB7IHNlcmNoRm9yV2V0aGVyLCB3ZWF0aGVyQ2FyZCwgfSBmcm9tIFwiLlwiO1xyXG5pbXBvcnQgeyBnZXRDb25kaXRpb25zTGlzdCB9IGZyb20gXCIuL2FwaVwiO1xyXG5cclxuY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG5jb25zdCB0b2dnbGVCdXRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlQnV0dG9ucycpO1xyXG5jb25zdCBpbnB1dEdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWdyb3VwJyk7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcbmNvbnN0IGNvbmRpdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9ucycpO1xyXG5jb25zdCBjb25kSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kLWljb24nKTtcclxuY29uc3QgY29uZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZC10ZXh0Jyk7XHJcbmNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcclxuXHJcbmNvbnN0IGV4dHJhQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4dHJhLWJveCcpO1xyXG5jb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKTtcclxuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UnKTtcclxuY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJyk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVXZWF0aGVyQ2FyZChjaXR5LCB1bml0KXtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBjaXR5V2VhdGhlckRhdGEgPSBhd2FpdCBzZXJjaEZvcldldGhlcihjaXR5KTtcclxuICAgICAgICB3ZWF0aGVyQ2FyZC5pbm5lckhUTUw9ICcnO1xyXG5cclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHtjaXR5V2VhdGhlckRhdGEubG9jYXRpb24uY2l0eX0sICR7Y2l0eVdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcclxuICAgICAgICBjb25kSWNvbi5zcmMgPSBjaXR5V2VhdGhlckRhdGEuY29uZGl0aW9ucy5pY29uO1xyXG4gICAgICAgIGNvbmRUZXh0LnRleHRDb250ZW50ID0gY2l0eVdlYXRoZXJEYXRhLmNvbmRpdGlvbnMudGV4dDtcclxuICAgIFxyXG4gICAgICAgIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKHRvZ2dsZUJ1dG9ucylcclxuICAgICAgICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZChpbnB1dEdyb3VwKVxyXG4gICAgICAgIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAgICAgaWYgKHVuaXQgPT09ICdGJykge1xyXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2NpdHlXZWF0aGVyRGF0YS50ZW1wX2Z9wrBGYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdDJyl7XHJcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7Y2l0eVdlYXRoZXJEYXRhLnRlbXBfY33CsENgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZC50ZXh0Q29udGVudCA9IGBXaW5kIHNwZWVkOiAke2NpdHlXZWF0aGVyRGF0YS53aW5kX3NwZWVkfSBrbS9oYDtcclxuICAgICAgICBpZiAodW5pdCA9PT0gJ0YnKSB7XHJcbiAgICAgICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2NpdHlXZWF0aGVyRGF0YS5mZWVsc2xpa2VfY33CsEZgXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ0MnKXtcclxuICAgICAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7Y2l0eVdlYXRoZXJEYXRhLmZlZWxzbGlrZV9jfcKwQ2BcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBjaXR5V2VhdGhlckRhdGEubG9jYXRpb24udGltZTtcclxuICAgICAgICBcclxuICAgICAgICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZChjb25kaXRpb25zKTsgICAgXHJcbiAgICAgICAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQoZXh0cmFCb3gpO1xyXG5cclxuICAgICAgICB3ZWF0aGVyQ2FyZC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNlbnRlcmVkLWNvbCcpXHJcbiAgICAgICAgc3dpdGNoIChjaXR5V2VhdGhlckRhdGEuY29uZGl0aW9ucy50ZXh0KXtcclxuICAgICAgICAgICAgY2FzZSBcIk92ZXJjYXN0IFwiOlxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kID0gJ2JsdWUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiAgZXhwb3J0IHtjcmVhdGVXZWF0aGVyQ2FyZH0iLCJpbXBvcnQgeyBnZXRDdXJyZW50V2VhdGhlckRhdGEsIHByb2Nlc3NXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2FwaVwiO1xuaW1wb3J0IHsgY3JlYXRlV2VhdGhlckNhcmQgfSBmcm9tIFwiLi9kb21cIjtcblxuY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQnRuXCIpO1xuY29uc3Qgd2VhdGhlckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItY2FyZFwiKTtcbmNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG5jb25zdCBidXR0b25DID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbkMnKTtcbmNvbnN0IGJ1dHRvbkYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uRicpO1xuXG51c2VySW5wdXQudmFsdWUgPSAnS2FtaWVuaWVjIFBvZG9sc2tpJ1xuXG5idXR0b25DLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgY3JlYXRlV2VhdGhlckNhcmQodXNlcklucHV0LnZhbHVlLCBcIkNcIilcbn0pXG5idXR0b25GLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgY3JlYXRlV2VhdGhlckNhcmQodXNlcklucHV0LnZhbHVlLCBcIkZcIilcbn0pXG5mdW5jdGlvbiBoYW5kbGVJbnB1dCgpe1xuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlcmNoRm9yV2V0aGVyKGNpdHkpIHtcbiAgdHJ5e1xuICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc3QgbXlEYXRhID0gYXdhaXQgZ2V0Q3VycmVudFdlYXRoZXJEYXRhKGNpdHkpO1xuICAgIGlmIChteURhdGEgPT0gdW5kZWZpbmVkKXtcbiAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gJ05vIG1hdGNoaW5nIGxvY2F0aW9uIGZvdW5kJ1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhteURhdGEpO1xuICAgIGNvbnN0IHBhcnNlZERhdGEgPSBwcm9jZXNzV2VhdGhlckRhdGEobXlEYXRhKTtcbiAgICByZXR1cm4gcGFyc2VkRGF0YVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgfVxufVxuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY3JlYXRlV2VhdGhlckNhcmQodXNlcklucHV0LnZhbHVlLCAnQycpO1xufSk7XG5cblxuY3JlYXRlV2VhdGhlckNhcmQoJ0thbWllbmllYyBQb2RvbHNraScsJ0MnKTtcblxuZXhwb3J0IHtzZXJjaEZvcldldGhlciwgd2VhdGhlckNhcmQsdXNlcklucHV0fSJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFzeW5jIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJnZXRDb25kaXRpb25zTGlzdCIsImJhY2tncm91bmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGVCdXRvbnMiLCJpbnB1dEdyb3VwIiwiaGVhZGVyIiwiY29uZGl0aW9ucyIsImNvbmRJY29uIiwiY29uZFRleHQiLCJ0ZW1wZXJhdHVyZSIsImV4dHJhQm94Iiwid2luZCIsImZlZWxzTGlrZSIsInRpbWUiLCJjcmVhdGVXZWF0aGVyQ2FyZCIsImNpdHkiLCJ1bml0IiwiY2l0eVdlYXRoZXJEYXRhIiwic2VyY2hGb3JXZXRoZXIiLCJ3ZWF0aGVyQ2FyZCIsImlubmVySFRNTCIsInRleHRDb250ZW50IiwibG9jYXRpb24iLCJjb3VudHJ5Iiwic3JjIiwiaWNvbiIsInRleHQiLCJhcHBlbmRDaGlsZCIsInRlbXBfZiIsInRlbXBfYyIsIndpbmRfc3BlZWQiLCJmZWVsc2xpa2VfYyIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwidXNlcklucHV0Iiwic2VhcmNoQnRuIiwiZXJyb3JEaXYiLCJidXR0b25DIiwiYnV0dG9uRiIsIm15RGF0YSIsIm1vZGUiLCJ3ZWF0aGVyRGF0YSIsImVyciIsImdldEN1cnJlbnRXZWF0aGVyRGF0YSIsInVuZGVmaW5lZCIsIm15V2VhdGhlckRhdGEiLCJjdXJyZW50IiwiY29uZGl0aW9uIiwiZmVlbHNsaWtlX2YiLCJ3aW5kX2twaCIsImNsb3VkIiwibmFtZSIsImxvY2FsdGltZSIsImUiLCJwcm9jZXNzV2VhdGhlckRhdGEiLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9