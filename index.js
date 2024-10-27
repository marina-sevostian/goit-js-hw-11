import{S as a,i}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function c(s){return fetch(`https://pixabay.com/api/?key=46729875-7729b8e358007a47de817f6d1&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok){if(e.status===404)return[];throw new Error(e.status)}return e.json()}).catch(e=>{console.error(e)})}let u=document.querySelector(".gallery");function f(s){const e=s.map(t=>(console.log("img",t),`<div class="photo">
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
     </div> `)).join("");u.insertAdjacentHTML("beforeend",e)}let d=document.querySelector(".gallery");document.querySelector(".search-form-btn");let m=document.querySelector(".search-form"),p=document.querySelector(".search-form-input"),h=new a(".gallery a");m.addEventListener("submit",s=>{s.preventDefault();const e=p.value.trim();y(),e!==""&&c(e).then(t=>{t.hits.length===0&&i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",close:!1}),f(t.hits),h.refresh()})});new a(".gallery a",{captionsData:"alt",captionDelay:250});function y(){d.innerHTML=""}
//# sourceMappingURL=index.js.map
