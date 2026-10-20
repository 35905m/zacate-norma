// ============ FORM ENDPOINT: PLACEHOLDER ============
// Not connected to any live service. Paste your Zapier "Catch Hook" URL (or other endpoint) here.
// Fields posted (form-urlencoded): name, phone, trade, email, source, lang, utm
var TS_ENDPOINT = 'https://hooks.zapier.com/hooks/catch/REPLACE_ME/REPLACE_ME/';
// ====================================================
(function(){
var f=document.getElementById('f');if(!f)return;
document.getElementById('utm').value=location.search.slice(1);
var q=new URLSearchParams(location.search);if(q.get('name'))f.name.value=q.get('name');if(q.get('phone'))f.phone.value=q.get('phone');
function done(){f.hidden=true;document.getElementById('ty').hidden=false;document.getElementById('box').scrollIntoView({behavior:'smooth'});}
f.addEventListener('submit',function(e){e.preventDefault();
 var ok=f.name.value.trim()&&f.phone.value.replace(/\D/g,'').length>=10&&f.trade.value;
 document.getElementById('err').hidden=!!ok;if(!ok)return;
 if(TS_ENDPOINT.indexOf('REPLACE_ME')>-1){console.warn('Tool Shield: placeholder endpoint, lead NOT sent');done();return;}
 fetch(TS_ENDPOINT,{method:'POST',mode:'no-cors',body:new URLSearchParams(new FormData(f))}).finally(done);
});
if(location.hash==='#thanks')done();
})();
(function(){var v=document.getElementById('hero-video'),pb=document.getElementById('vid-play'),sb=document.getElementById('vid-sound');if(!v)return;
function sync(){var pl=!v.paused;pb.textContent=pl?pb.dataset.pause:pb.dataset.play;pb.setAttribute('aria-pressed',String(pl));sb.textContent=v.muted?sb.dataset.un:sb.dataset.mu;sb.setAttribute('aria-pressed',String(!v.muted));}
pb.addEventListener('click',function(){v.paused?v.play():v.pause();});sb.addEventListener('click',function(){v.muted=!v.muted;if(!v.muted&&v.paused)v.play();sync();});
v.addEventListener('play',sync);v.addEventListener('pause',sync);v.addEventListener('volumechange',sync);
var rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!rm){var p=v.play();if(p&&p.catch)p.catch(function(){});}sync();})();
