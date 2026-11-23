// دفع أحداث التتبع إلى Google Tag Manager (GTM)
window.dataLayer = window.dataLayer || [];

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-track]');
  if (!link) return;

  const trackType = link.dataset.track; // 'call' أو 'whatsapp'
  if (!trackType) return;

  window.dataLayer.push({
    event: 'lead_click',
    track_type: trackType,
    page_path: window.location.pathname
  });
});

// تحديث سنة حقوق النشر تلقائياً في الفوتر
const yearEl = document.getElementById('y');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
