!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body");t.addEventListener("click",(function(d){var n=setInterval((function(){var d="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));a.style.backgroundColor=d,!0&&(t.disabled=!0,e.disabled=!1),e.addEventListener("click",(function(a){clearInterval(n),!1,t.disabled=!1,e.disabled=!0}))}),1e3)}));e.disabled=!0}();
//# sourceMappingURL=01-color-switcher.94b08c04.js.map
