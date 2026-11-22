// تتبع التحويلات: استبدل AW_ID و CALL_LABEL و WA_LABEL بالقيم الفعلية من حساب Google Ads (Conversions)
const AW_ID = 'AW-XXXXXXXXXX';
const LABELS = {
  call: 'CALL_LABEL',
  whatsapp: 'WA_LABEL'
};

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-track]');
  if (!link || typeof window.gtag !== 'function') return;

  const trackType = link.dataset.track;
  const label = LABELS[trackType];
  if (!label) return;

  // تسجيل حدث تفاعل عام للتتبع والتحليل
  window.gtag('event', 'contact_' + trackType, {
    page_path: window.location.pathname,
    transport_type: 'beacon'
  });

  // إرسال التحويل إلى Google Ads فقط بعد استبدال المعرّفات الافتراضية
  if (
    AW_ID !== 'AW-XXXXXXXXXX' &&
    label !== 'CALL_LABEL' &&
    label !== 'WA_LABEL'
  ) {
    window.gtag('event', 'conversion', {
      send_to: `${AW_ID}/${label}`,
      transport_type: 'beacon'
    });
  }
});

// تحديث سنة حقوق النشر تلقائياً في الفوتر
const yearEl = document.getElementById('y');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
