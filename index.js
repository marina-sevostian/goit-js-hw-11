import{i as c,S as l}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function i(s){return fetch(`https://pixabay.com/api/?key=46729875-7729b8e358007a47de817f6d1&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok){if(e.status===404)return[];throw new Error(e.status)}return e.json()}).catch(e=>{console.error(e)})}function u(s){const e=s.map(t=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      data-source="${t.largeImageURL}"
      alt="${t.tags}"
    />
  </a>
  <p class="">Likes ${t.likes}</p>
  <p class="">Views ${t.views}</p>
  <p class="">Comments ${t.comments}</p>
  <p class="">Downloads ${t.downloads}</p>
</li>
      `).join("");gallery.insertAdjacentHTML("beforeend",e)}let f=document.querySelector(".gallery");const d=document.querySelector(".search-form-btn");document.querySelector(".search-form");d.addEventListener("submit",s=>{s.preventDefault();const e=input.value.trim();m(),e!==""&&i(e).then(t=>{if(t.length===0)return c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",close:!1});u(t),l.refresh()}).catch(t=>console.log(t))});new l(".gallery a",{captionsData:"alt",captionDelay:250});function m(){f.innerHTML=""}
//# sourceMappingURL=index.js.map
