import{S as c,i as u}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function f(s){return fetch(`https://pixabay.com/api/?key=46729875-7729b8e358007a47de817f6d1&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok){if(e.status===404)return[];throw new Error(e.status)}return e.json()}).catch(e=>{console.error(e)})}let m=document.querySelector(".gallery");function d(s){const e=s.map(r=>`<div class="photo">
   <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.webformatURL}"
      data-source="${r.largeImageURL}"
      alt="${r.tags}"
    />
  </a>
  <div class="info">
  <p class="info-item">Likes <span class="info-item-num">${r.likes}</span></p>
  <p class="info-item">Views <span class="info-item-num">${r.views}</span></p>
  <p class="info-item">Comments <span class="info-item-num">${r.comments}</span></p>
  <p class="info-item">Downloads <span class="info-item-num">${r.downloads}</span></p>
  </div>
     </div> `).join("");m.insertAdjacentHTML("beforeend",e)}let p=document.querySelector(".gallery");document.querySelector(".search-form-btn");let i=document.querySelector(".search-form"),h=document.querySelector(".search-form-input"),y=new c(".gallery a");i.addEventListener("submit",s=>{s.preventDefault();const e=h.value.trim();g(),e!==""&&(f(e).then(r=>{r.hits.length===0&&u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",close:!1}),d(r.hits),y.refresh()}),i.reset())});new c(".gallery a",{captionsData:"alt",captionDelay:250});function g(){p.innerHTML=""}let l=document.querySelector(".mask");window.addEventListener("load",()=>{l.classList.add("hide"),setTimeout(()=>{l.remove()},600)});
//# sourceMappingURL=index.js.map
