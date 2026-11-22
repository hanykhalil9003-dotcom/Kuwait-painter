// تتبع التحويلات: استبدل AW_ID وCALL_LABEL وWA_LABEL من حساب Google Ads (Conversions)
const AW_ID='AW-XXXXXXXXXX',LABELS={call:'CALL_LABEL',whatsapp:'WA_LABEL'};
document.addEventListener('click',e=>{
  const a=e.target.closest('[data-track]');if(!a||typeof gtag!=='function')return;
  const t=a.dataset.track;
  gtag('event','contact_'+t,{page:location.pathname});
  gtag('event','conversion',{send_to:AW_ID+'/'+LABELS[t]});
});
const y=document.getElementById('y');if(y)y.textContent=new Date().getFullYear();
