import{S as i,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function u(s){return fetch(`https://pixabay.com/api/?key=46729875-7729b8e358007a47de817f6d1&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok){if(e.status===404)return[];throw new Error(e.status)}return e.json()}).catch(e=>{console.error(e)})}let f=document.querySelector(".gallery");function d(s){const e=s.map(t=>(console.log("img",t),`<div class="photo">
   <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      data-source="${t.largeImageURL}"
      alt="${t.tags}"
    />
  </a>
  <div class="info">
  <p class="">Likes ${t.likes}</p>
  <p class="">Views ${t.views}</p>
  <p class="">Comments ${t.comments}</p>
  <p class="">Downloads ${t.downloads}</p>
  </div>
     </div> `)).join("");f.insertAdjacentHTML("beforeend",e)}let m=document.querySelector(".gallery");document.querySelector(".search-form-btn");let a=document.querySelector(".search-form"),p=document.querySelector(".search-form-input"),h=new i(".gallery a");a.addEventListener("submit",s=>{s.preventDefault();const e=p.value.trim();y(),e!==""&&(u(e).then(t=>{t.hits.length===0&&c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",close:!1}),d(t.hits),h.refresh()}),a.reset())});new i(".gallery a",{captionsData:"alt",captionDelay:250});function y(){m.innerHTML=""}
//# sourceMappingURL=index.js.map
