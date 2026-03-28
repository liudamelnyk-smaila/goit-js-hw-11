import{a as m,S as d,i as o}from"./assets/vendor-DUFFgfoe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="55217481-c9b20e60bb4f0a7ff60eb70d3";function y(r){return m.get(g,{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader-wrapper"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const s=r.map(({webformatURL:a,largeImageURL:i,tags:e,likes:t,views:n,comments:p,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${a}"
              alt="${e}"
            />
            <div class="gallery-info">
              <p class="info-item">
                <span class="info-label">Likes</span>
                <span class="info-value">${t}</span>
              </p>
              <p class="info-item">
                <span class="info-label">Views</span>
                <span class="info-value">${n}</span>
              </p>
              <p class="info-item">
                <span class="info-label">Comments</span>
                <span class="info-value">${p}</span>
              </p>
              <p class="info-item">
                <span class="info-label">Downloads</span>
                <span class="info-value">${u}</span>
              </p>
            </div>
          </a>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",s),b.refresh()}function v(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function w(){c.classList.add("is-hidden")}const f=document.querySelector(".form");f.addEventListener("submit",P);function P(r){r.preventDefault();const s=r.currentTarget.elements["search-text"].value.trim();if(!s){o.warning({message:"Please fill in the search field!",position:"topRight"});return}v(),S(),y(s).then(a=>{if(!a.hits||a.hits.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(a.hits)}).catch(()=>{o.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w(),f.reset()})}
//# sourceMappingURL=index.js.map
