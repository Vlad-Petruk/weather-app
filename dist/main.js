(()=>{"use strict";!async function(){const t=await async function(t){try{const t=await fetch("https://api.weatherapi.com/v1/forecast.json?key=7a84c19e7f6245b7814141628240402&q=kyiv&days=3&aqi=no&alerts=no",{mode:"cors"});return await t.json()}catch(t){console.log(t)}}();console.log(t);const c=function(t){const c={conditions:{icon:t.current.condition.icon,text:t.current.condition.text},temp_c:t.current.temp_c,feelslike_c:t.current.feelslike_c,temp_f:t.current.temp_f,feelslike_f:t.current.feelslike_f,wind_speed:t.current.wind_kph,cloud:t.current.cloud,location:{country:t.location.country,city:t.location.name,time:t.location.localtime}};return console.log(c),c}(t);console.log(c.cloud)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoib0JBRUFBLGlCQUNFLE1BQU1DLFFDSFJELGVBQXFDRSxHQUNqQyxJQUNFLE1BQU1DLFFBQWlCQyxNQUNyQixpSEFDQSxDQUFFQyxLQUFNLFNBTVYsYUFKMEJGLEVBQVNHLE1BS3JDLENBQUUsTUFBT0MsR0FDUEMsUUFBUUMsSUFBSUYsRUFDZCxDQUNGLENEWHFCRyxHQUNyQkYsUUFBUUMsSUFBSVIsR0FDWixNQUFNVSxFQ1dOLFNBQTRCQyxHQUMxQixNQUFNQyxFQUFnQixDQUNwQkMsV0FBWSxDQUNWQyxLQUFNSCxFQUFZSSxRQUFRQyxVQUFVRixLQUNwQ0csS0FBTU4sRUFBWUksUUFBUUMsVUFBVUMsTUFFdENDLE9BQVFQLEVBQVlJLFFBQVFHLE9BQzVCQyxZQUFhUixFQUFZSSxRQUFRSSxZQUNqQ0MsT0FBUVQsRUFBWUksUUFBUUssT0FDNUJDLFlBQWFWLEVBQVlJLFFBQVFNLFlBQ2pDQyxXQUFZWCxFQUFZSSxRQUFRUSxTQUNoQ0MsTUFBT2IsRUFBWUksUUFBUVMsTUFDM0J2QixTQUFVLENBQ1J3QixRQUFTZCxFQUFZVixTQUFTd0IsUUFDOUJDLEtBQU1mLEVBQVlWLFNBQVMwQixLQUMzQkMsS0FBTWpCLEVBQVlWLFNBQVM0QixZQUkvQixPQURBdEIsUUFBUUMsSUFBSUksR0FDTEEsQ0FDVCxDRC9CbUJrQixDQUFtQjlCLEdBQ3RDTyxRQUFRQyxJQUFJRSxFQUFXYyxNQUN6QixDQUNBTyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEN1cnJlbnRXZWF0aGVyRGF0YSwgcHJvY2Vzc1dlYXRoZXJEYXRhIH0gZnJvbSBcIi4vYXBpXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEQoKSB7XG4gIGNvbnN0IG15RGF0YSA9IGF3YWl0IGdldEN1cnJlbnRXZWF0aGVyRGF0YShcImt5aXZcIik7XG4gIGNvbnNvbGUubG9nKG15RGF0YSk7XG4gIGNvbnN0IHBhcnNlZERhdGEgPSBwcm9jZXNzV2VhdGhlckRhdGEobXlEYXRhKTtcbiAgY29uc29sZS5sb2cocGFyc2VkRGF0YS5jbG91ZCk7XG59XG5nZXREKCk7XG4iLCJhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlckRhdGEobG9jYXRpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTdhODRjMTllN2Y2MjQ1Yjc4MTQxNDE2MjgyNDA0MDImcT0ke2xvY2F0aW9ufSZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub2AsXHJcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9LFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgLy8gY29uc3Qgd2VhdGhlckRhdGFzID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2M7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YXMpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKVxyXG4gICAgICByZXR1cm4gd2VhdGhlckRhdGE7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBwcm9jZXNzV2VhdGhlckRhdGEod2VhdGhlckRhdGEpIHtcclxuICAgIGNvbnN0IG15V2VhdGhlckRhdGEgPSB7XHJcbiAgICAgIGNvbmRpdGlvbnM6IHtcclxuICAgICAgICBpY29uOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLFxyXG4gICAgICAgIHRleHQ6IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlbXBfYzogd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2MsXHJcbiAgICAgIGZlZWxzbGlrZV9jOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxyXG4gICAgICB0ZW1wX2Y6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mLFxyXG4gICAgICBmZWVsc2xpa2VfZjogd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZixcclxuICAgICAgd2luZF9zcGVlZDogd2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaCxcclxuICAgICAgY2xvdWQ6IHdlYXRoZXJEYXRhLmN1cnJlbnQuY2xvdWQsXHJcbiAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgY291bnRyeTogd2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeSxcclxuICAgICAgICBjaXR5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lLFxyXG4gICAgICAgIHRpbWU6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhteVdlYXRoZXJEYXRhKTtcclxuICAgIHJldHVybiBteVdlYXRoZXJEYXRhO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgZXhwb3J0IHtnZXRDdXJyZW50V2VhdGhlckRhdGEsIHByb2Nlc3NXZWF0aGVyRGF0YX0gIl0sIm5hbWVzIjpbImFzeW5jIiwibXlEYXRhIiwibG9jYXRpb24iLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImpzb24iLCJlIiwiY29uc29sZSIsImxvZyIsImdldEN1cnJlbnRXZWF0aGVyRGF0YSIsInBhcnNlZERhdGEiLCJ3ZWF0aGVyRGF0YSIsIm15V2VhdGhlckRhdGEiLCJjb25kaXRpb25zIiwiaWNvbiIsImN1cnJlbnQiLCJjb25kaXRpb24iLCJ0ZXh0IiwidGVtcF9jIiwiZmVlbHNsaWtlX2MiLCJ0ZW1wX2YiLCJmZWVsc2xpa2VfZiIsIndpbmRfc3BlZWQiLCJ3aW5kX2twaCIsImNsb3VkIiwiY291bnRyeSIsImNpdHkiLCJuYW1lIiwidGltZSIsImxvY2FsdGltZSIsInByb2Nlc3NXZWF0aGVyRGF0YSIsImdldEQiXSwic291cmNlUm9vdCI6IiJ9