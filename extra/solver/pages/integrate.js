(()=>{var c=chrome;var o="https://api.nopecha.com",e="https://www.nopecha.com",n="https://developers.nopecha.com",i={doc:{url:n,automation:{url:`${n}/guides/extension_advanced/#automation-build`}},api:{url:o,recognition:{url:`${o}/recognition`},status:{url:`${o}/status`}},www:{url:e,annoucement:{url:`${e}/json/announcement.json`},demo:{url:`${e}/demo`,hcaptcha:{url:`${e}/demo/hcaptcha`},recaptcha:{url:`${e}/demo/recaptcha`},funcaptcha:{url:`${e}/demo/funcaptcha`},awscaptcha:{url:`${e}/demo/awscaptcha`},turnstile:{url:`${e}/demo/turnstile`},textcaptcha:{url:`${e}/demo/textcaptcha`},perimeterx:{url:`${e}/demo/perimeterx`}},manage:{url:`${e}/manage`},pricing:{url:`${e}/pricing`},setup:{url:`${e}/setup`}},discord:{url:`${e}/discord`},github:{url:`${e}/github`,release:{url:`${e}/github/release`}}};function a(r){if(document.readyState!=="loading")setTimeout(r,0);else{let t;t=()=>{removeEventListener("DOMContentLoaded",t),r()},addEventListener("DOMContentLoaded",t)}}function u(){document.documentElement.setAttribute("installed","yes"),document.documentElement.setAttribute("data",JSON.stringify({version:c.runtime.getManifest().version}))}a(u);})();