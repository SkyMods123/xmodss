import Head from 'next/head';

const SinglePage = ()=>{
    return(
        <>
            <head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!-- /Added by HTTrack -->
<meta name="viewport" content="width=device-width, initial-scale=1"><link rel="preload" as="image" href="https://rscripts.net/logo.svg"><link rel="preload" as="image" imagesrcset="/_next/image?url=%2Fassets%2Fscripts%2F67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW.webp&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fscripts%2F67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW.webp&amp;w=384&amp;q=75 2x" fetchpriority="high"><link rel="preload" as="image" imagesrcset="/_next/image?url=%2Fassets%2Fscripts%2F67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW.webp&amp;w=640&amp;q=85 1x, /_next/image?url=%2Fassets%2Fscripts%2F67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW.webp&amp;w=1920&amp;q=85 2x" fetchpriority="high"><link rel="stylesheet" href="./kola3_files/0d7c83ff46c8f2cd.css" data-precedence="next"><link rel="stylesheet" href="./kola3_files/e27b94790ece9e59.css" data-precedence="next"><link rel="stylesheet" href="./kola3_files/4932d2e513585f8a.css" data-precedence="next"><link rel="preload" as="script" fetchpriority="low" href="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/webpack-6f4a5718b9aa184c.js"><script defer="" referrerpolicy="origin" src="../cdn-cgi/zaraz/sd0d9.js?z=JTdCJTIyZXhlY3V0ZWQlMjIlM0ElNUIlNUQlMkMlMjJ0JTIyJTNBJTIyRGVhZCUyMFJhaWxzJTIwQWxwaGElMjAlN0MlMjBFU1AlMjAoRnJlZSklMjAtJTIwUm9ibG94JTIwU2NyaXB0cyUyMCU3QyUyMFJzY3JpcHRzLm5ldCUyMiUyQyUyMnglMjIlM0EwLjUwNDczOTU2NjQ2ODk3OTElMkMlMjJ3JTIyJTNBNDA5NiUyQyUyMmglMjIlM0ExMTUyJTJDJTIyaiUyMiUzQTc4NiUyQyUyMmUlMjIlM0EzMjc3JTJDJTIybCUyMiUzQSUyMmZpbGUlM0ElMkYlMkYlMkZDJTNBJTJGVXNlcnMlMkZrbGVzaSUyRk9uZURyaXZlJTJGUmFkbmElMjUyMHBvdnIlMjVDNSUyNUExaW5hJTJGa29sYTMuaHRtJTIyJTJDJTIyciUyMiUzQSUyMiUyMiUyQyUyMmslMjIlM0EyNCUyQyUyMm4lMjIlM0ElMjJVVEYtOCUyMiUyQyUyMm8lMjIlM0EtNjAlMkMlMjJxJTIyJTNBJTVCJTVEJTdE"></script><script defer="" referrerpolicy="origin" src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/cdn-cgi/zaraz/sd0d9.js?z=JTdCJTIyZXhlY3V0ZWQlMjIlM0ElNUIlNUQlMkMlMjJ0JTIyJTNBJTIyRGVhZCUyMFJhaWxzJTIwQWxwaGElMjAlN0MlMjBFU1AlMjAoRnJlZSklMjAtJTIwUm9ibG94JTIwU2NyaXB0cyUyMCU3QyUyMFJzY3JpcHRzLm5ldCUyMiUyQyUyMnglMjIlM0EwLjk0NjUyODk0NDExNzcxNjklMkMlMjJ3JTIyJTNBNDA5NiUyQyUyMmglMjIlM0ExMTUyJTJDJTIyaiUyMiUzQTc4NiUyQyUyMmUlMjIlM0EyMzU4JTJDJTIybCUyMiUzQSUyMmZpbGUlM0ElMkYlMkYlMkZDJTNBJTJGVXNlcnMlMkZrbGVzaSUyRk9uZURyaXZlJTJGUmFkbmElMjUyMHBvdnIlMjVDNSUyNUExaW5hJTJGRFJVR0klMkZOT1ZPLmh0bWwlMjIlMkMlMjJyJTIyJTNBJTIyJTIyJTJDJTIyayUyMiUzQTI0JTJDJTIybiUyMiUzQSUyMlVURi04JTIyJTJDJTIybyUyMiUzQS02MCUyQyUyMnElMjIlM0ElNUIlNUQlN0Q="></script><script defer="" referrerpolicy="origin" src="file:///C:/Users/klesi/OneDrive/cdn-cgi/zaraz/sd0d9.js?z=JTdCJTIyZXhlY3V0ZWQlMjIlM0ElNUIlNUQlMkMlMjJ0JTIyJTNBJTIyRGVhZCUyMFJhaWxzJTIwQWxwaGElMjAlN0MlMjBFU1AlMjAoRnJlZSklMjAtJTIwUm9ibG94JTIwU2NyaXB0cyUyMCU3QyUyMFJzY3JpcHRzLm5ldCUyMiUyQyUyMnglMjIlM0EwLjUyMTMxODE0NzE5ODczMjclMkMlMjJ3JTIyJTNBNDA5NiUyQyUyMmglMjIlM0ExMTUyJTJDJTIyaiUyMiUzQTg2NiUyQyUyMmUlMjIlM0EyNjIyJTJDJTIybCUyMiUzQSUyMmZpbGUlM0ElMkYlMkYlMkZDJTNBJTJGVXNlcnMlMkZrbGVzaSUyRk9uZURyaXZlJTJGUmFkbmElMjUyMHBvdnIlMjVDNSUyNUExaW5hJTJGZGQlMjUyMC0lMjUyMENvcHkuaHRtbCUyMiUyQyUyMnIlMjIlM0ElMjIlMjIlMkMlMjJrJTIyJTNBMjQlMkMlMjJuJTIyJTNBJTIyVVRGLTglMjIlMkMlMjJvJTIyJTNBLTYwJTJDJTIycSUyMiUzQSU1QiU1RCU3RA=="></script><script defer="" referrerpolicy="origin" src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/sd0d9.js"></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/3335-1b76623d5548a914.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/main-app-95b14e1c32b6f74b.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/1503-5461481c7b9d7270.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/231-348a9680c01044d1.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/error-07c0916232dd05ab.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/5584-60d2db952e048d10.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/6412-5b1bc638998071aa.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/5386-0ac14f10599ccb87.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/8173-ecad8efdeb5b773d.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/7776-fbc6eaa4d479d7f2.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/9692-69a99ebf8219a98f.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/7226-652043c5051cde9d.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/998-4741831b309470d0.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/9658-247e6aa30b500907.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/5656-1a252a501ee6f57d.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/1703-c400f628ea6d690b.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/7602-dca5c649728ab6c8.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/4777-7d70cb124b72dc67.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/6474-f507177266ea23e1.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/2256-e35c9c408ee24143.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/layout-8147d828a9ddb96a.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/2897-06a39d4e5b0bf763.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/3954-5e4c715706fc92f7.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/219-2492d49c3b52f2b1.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/5223-3cb911852920a239.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/8394-86e500fae6e5cccf.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/8046-46d2ab7b5e091501.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/4117-55bbd6012586d548.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/6880-c79774a49a237d86.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/page-05488e902c050b26.js" async=""></script><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/error-cdfb56d419f787de.js" async=""></script><link rel="preload" href="http://d1nubxdgom3wqt.cloudfront.net/?xbund=958688" as="script"><meta name="theme-color" content="#FEFEFE"><title>Dead Rails Alpha | ESP (Free) - Roblox Scripts | Rscripts.net</title><meta name="description" content="Dead Rails Alpha - ESPItem ESP (Charms / nametag  / distance)Player ESP (Charms / nametag / health / distance)Charms Configurable (Color, Size, Effects) "><meta name="author" content="0x256"><meta name="keywords" content="Dead Rails ESP,Dead Rails Script,ESP Script Dead Rails"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"><meta name="google-adsense-account" content="ca-pub-2192724296802940"><link rel="canonical" href="file:///C:/My%20Web%20Sites/rsc/rscripts.net/script/dead-rails-esp-free-0n4E.html"><meta name="format-detection" content="telephone=no"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta property="og:title" content="Dead Rails Alpha | ESP (Free) - Roblox Scripts | Rscripts.net"><meta property="og:description" content="Dead Rails Alpha - ESPItem ESP (Charms / nametag  / distance)Player ESP (Charms / nametag / health / distance)Charms Configurable (Color, Size, Effects) "><meta property="og:url" content="https://rscripts.net/script/dead-rails-esp-free-0n4E"><meta property="og:image" content="https://rscripts.net/assets/scripts/67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW.webp"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="unknown"><meta name="twitter:creator" content="@unknown"><meta name="twitter:title" content="ESP (Free)"><meta name="twitter:description" content="ESPItem ESP (Charms / nametag  / distance)Player ESP (Charms / nametag / health / distance)Charms Configurable (Color, Size, Effects) "><meta name="twitter:image" content="https://rscripts.net/assets/scripts/67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW.webp"><link rel="icon" href="https://rscripts.net/favicon.ico" type="image/x-icon" sizes="16x16"><meta name="next-size-adjust"><script src="file:///C:/Users/klesi/OneDrive/Radna%20povr%C5%A1ina/Dead%20Rails%20Alpha%20_%20ESP%20(Free)%20-%20Roblox%20Scripts%20_%20Rscripts.net_files/polyfills-78c92fac7aa8fdd8.js" nomodule=""></script><script data-cfasync="false" nonce="b14b2d2b-0145-433a-ba70-e62bde289745">try{(function(w,d){!function(j,k,l,m){if(j.zaraz)console.error("zaraz is loaded twice");else{j[l]=j[l]||{};j[l].executed=[];j.zaraz={deferred:[],listeners:[]};j.zaraz._v="5850";j.zaraz._n="b14b2d2b-0145-433a-ba70-e62bde289745";j.zaraz.q=[];j.zaraz._f=function(n){return async function(){var o=Array.prototype.slice.call(arguments);j.zaraz.q.push({m:n,a:o})}};for(const p of["track","set","debug"])j.zaraz[p]=j.zaraz._f(p);j.zaraz.init=()=>{var q=k.getElementsByTagName(m)[0],r=k.createElement(m),s=k.getElementsByTagName("title")[0];s&&(j[l].t=k.getElementsByTagName("title")[0].text);j[l].x=Math.random();j[l].w=j.screen.width;j[l].h=j.screen.height;j[l].j=j.innerHeight;j[l].e=j.innerWidth;j[l].l=j.location.href;j[l].r=k.referrer;j[l].k=j.screen.colorDepth;j[l].n=k.characterSet;j[l].o=(new Date).getTimezoneOffset();if(j.dataLayer)for(const t of Object.entries(Object.entries(dataLayer).reduce(((u,v)=>({...u[1],...v[1]})),{})))zaraz.set(t[0],t[1],{scope:"page"});j[l].q=[];for(;j.zaraz.q.length;){const w=j.zaraz.q.shift();j[l].q.push(w)}r.defer=!0;for(const x of[localStorage,sessionStorage])Object.keys(x||{}).filter((z=>z.startsWith("_zaraz_"))).forEach((y=>{try{j[l]["z_"+y.slice(7)]=JSON.parse(x.getItem(y))}catch{j[l]["z_"+y.slice(7)]=x.getItem(y)}}));r.referrerPolicy="origin";r.src="../cdn-cgi/zaraz/sd0d9.js?z="+btoa(encodeURIComponent(JSON.stringify(j[l])));q.parentNode.insertBefore(r,q)};["complete","interactive"].includes(k.readyState)?zaraz.init():j.addEventListener("DOMContentLoaded",zaraz.init)}}(w,d,"zarazData","script");window.zaraz._p=async bs=>new Promise((bt=>{if(bs){bs.e&&bs.e.forEach((bu=>{try{const bv=d.querySelector("script[nonce]"),bw=bv?.nonce||bv?.getAttribute("nonce"),bx=d.createElement("script");bw&&(bx.nonce=bw);bx.innerHTML=bu;bx.onload=()=>{d.head.removeChild(bx)};d.head.appendChild(bx)}catch(by){console.error(`Error executing script: ${bu}\n`,by)}}));Promise.allSettled((bs.f||[]).map((bz=>fetch(bz[0],bz[1]))))}bt()}));zaraz._p({"e":["(function(w,d){})(window,document)"]});})(window,document)}catch(e){throw fetch("/cdn-cgi/zaraz/t"),e;};</script><script>(function(w,d){})(window,document)</script><script>(function(w,d){})(window,document)</script><script>(function(w,d){})(window,document)</script><script>(function(w,d){})(window,document)</script><link rel="preload" href="file:///C:/_next/static/media/e11418ac562b8ac1-s.p.woff2" as="font" crossorigin="" type="font/woff2"><link rel="preload" href="file:///C:/_next/static/css/0d7c83ff46c8f2cd.css" as="style"><link rel="preload" href="file:///C:/_next/static/css/e27b94790ece9e59.css" as="style"><link rel="preload" href="file:///C:/_next/static/css/4932d2e513585f8a.css" as="style"><style type="text/css">:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
</style><style type="text/css">[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
</style></head>
           <body class="bg-background __className_3a0388 min-h-screen"><div class="coverimg absolute -top-[380px] hidden h-[50rem] w-full opacity-30 blur-[2px] md:block"><img alt="background coverart" fetchpriority="high" loading="eager" width="135" height="160" decoding="async" data-nimg="1" class="h-[800px] w-full object-cover object-top" style="color:transparent" srcset="/_next/image?url=%2Fassets%2Fscripts%2F67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW.webp&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fscripts%2F67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW.webp&amp;w=384&amp;q=75 2x" src="./kola3_files/67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW.jpeg"></div><div class="absolute -top-[370px] hidden h-[50rem] w-full bg-gradient-to-b from-gray-200/40 to-white dark:from-muted/20 dark:to-background md:block"></div><div class="min-h-screen bg-background"><main class="container px-4 py-6 lg:px-14"><div class="grid grid-cols-1 gap-6 lg:grid-cols-3"><div class="z-10 space-y-6 lg:col-span-2"><header class="!mt-0"><div class="rounded-lg border text-card-foreground shadow-sm bg-card/70 backdrop-blur-sm"><div class="flex flex-col space-y-1.5 p-6 pb-4"><div class="flex flex-col gap-1"><div class="flex items-center justify-between gap-3"><div class="flex min-w-0 items-center gap-3"><img alt="Game icon" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" class="flex-shrink-0 rounded-lg" style="color:transparent" srcset="/_next/image?url=https%3A%2F%2Ftr.rbxcdn.com%2F180DAY-2bb40bb06d20b6fd38cdd2c19ec2ba61%2F128%2F128%2FImage%2FWebp%2FnoFilter&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Ftr.rbxcdn.com%2F180DAY-2bb40bb06d20b6fd38cdd2c19ec2ba61%2F128%2F128%2FImage%2FWebp%2FnoFilter&amp;w=64&amp;q=75 2x" src="./kola3_files/noFilter.webp"><div class="min-w-0"><div class="text-2xl font-semibold leading-none tracking-tight"><h1 class="truncate text-xl font-bold sm:text-2xl">ESP (Free)</h1></div></div></div></div><div class="flex items-center gap-2 text-sm text-muted-foreground"><a aria-label="Search for game" class="hover:text-green-500 hover:underline" href="https://rscripts.net/scripts?q=Dead%20Rails%20Alpha">Dead Rails Alpha</a><span>•</span><div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-3.5 w-3.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>2 days ago</div></div></div></div><div class="p-6 pt-0"><div class="flex flex-col gap-6 lg:flex-row"><div class="group relative w-full overflow-hidden rounded-lg lg:w-7/12"><img alt="Script preview thumbnail" fetchpriority="high" loading="eager" width="640" height="360" decoding="async" data-nimg="1" class="aspect-video object-cover transition-transform duration-500 group-hover:scale-105" style="color:transparent;background-size:cover;background-position:50% 50%;background-repeat:no-repeat;background-image:url(_data_image/svg%2bxml%3bcharset%3dutf-8%2c_svg%20xmlns%3d%27http_/www.w3.org/2000/svg%27%20viewBox%3d%270%200%20640%20360%27__filter%20id%3d%27b%27%20color/__feColorMatrix%20values%3d%271%200%200%200%200%200%201%200%200%200%200%200/__feFloo/filter__image%20width%3d%2710);' href='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='/%3E%3C/svg%3E&quot;)" srcset="/_next/image?url=%2Fassets%2Fscripts%2F67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW.webp&amp;w=640&amp;q=85 1x, /_next/image?url=%2Fassets%2Fscripts%2F67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW.webp&amp;w=1920&amp;q=85 2x" src="./kola3_files/67d20c8e55c1051e1ca379c4_1741819023043_MAAGrEkPrW(1).jpeg"><div class="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div><div class="absolute bottom-3 left-3 text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">Script Preview</div><div class="absolute right-3 top-3 flex flex-col items-end gap-2"><button data-state="closed"></button></div></div><div class="flex flex-col justify-between gap-4 lg:w-5/12"><div class="space-y-4"><div class="flex items-center justify-between"><a class="flex items-center gap-2" href="https://rscripts.net/@0x256"><span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">0x</span></span><span class="flex cursor-pointer items-center gap-1 text-base font-medium text-foreground hover:text-primary">0x256</span></a></div></div><div class="grid grid-cols-2 gap-3"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:text-accent-foreground h-10 px-4 py-2 col-span-2 transition-colors duration-200 hover:bg-accent"><span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy mr-2 h-4 w-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>Download</span></button></div></div></div></div></div></header><section class="script-description"><div class="rounded-lg border bg-card text-card-foreground shadow-sm"><div class="flex flex-col space-y-1.5 p-6"><div class="text-2xl font-semibold leading-none tracking-tight"><h2>Description</h2></div></div><div class="p-6 pt-0 space-y-4"><div class="description prose prose-invert max-w-none"><h2>ESP</h2>
  
  
</div><div class="mt-4 flex flex-col gap-4 sm:flex-row"></div></div></div></section></div><div class="w-full flex-col rounded border bg-card/40 pb-2 block sm:hidden" id="advert1"><div class="flex w-full items-center justify-between px-2 py-2 text-left"><strong class="block text-[11px] text-foreground/50">ADVERTISEMENT</strong></div><div class="mx-auto flex items-center justify-center min-h-[250px]"><div data-fuse="23117773104"></div></div></div><aside class="script-similar-scripts lg:col-span-1"><!--$--><div class="rounded-lg border text-card-foreground shadow-sm sticky top-20 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"><div class="flex flex-col space-y-1.5 p-6 pb-3"><div class="text-2xl font-semibold leading-none tracking-tight"><h2>Similar Scripts</h2></div></div></div><!--/$--></aside></div></main></div>


</body>
            
        </>
        
    )
}
export default SinglePage
