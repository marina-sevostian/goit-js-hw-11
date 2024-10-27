import{i as c,S as l}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();function i(s){return fetch(`https://pixabay.com/api/?key=46729875-7729b8e358007a47de817f6d1&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok){if(t.status===404)return[];throw new Error(t.status)}return t.json()})}function u(s){const t=s.map(e=>(console.log("img",e),`
   <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      alt="${e.tags}"
    />
  </a>
  <p class="">Likes ${e.likes}</p>
  <p class="">Views ${e.views}</p>
  <p class="">Comments ${e.comments}</p>
  <p class="">Downloads ${e.downloads}</p>
      `)).join("");gallery.insertAdjacentHTML("beforeend",t)}let f=document.querySelector(".gallery");document.querySelector(".search-form-btn");let d=document.querySelector(".search-form"),m=document.querySelector(".search-form-input");d.addEventListener("submit",s=>{s.preventDefault();const t=m.value.trim();p(),t!==""&&i(t).then(e=>{if(!e.hits)return c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",close:!1});u(e),l.refresh()}).catch(e=>console.log(e))});new l(".gallery a",{captionsData:"alt",captionDelay:250});function p(){f.innerHTML=""}
//# sourceMappingURL=index.js.map
