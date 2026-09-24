(function () {
  function appUrl() {
    var path = window.location.pathname.replace(/[^/]+$/, '');
    return window.location.origin + path + 'app.html';
  }

  var TEXT =
    'LifePilot — your all-in-one personal life assistant\n\n' +
    'Stay on top of everything that matters — without accounts, ads, or clutter. Your data stays on your phone.\n\n' +
    'What you can do with LifePilot:\n' +
    '• Dashboard for today & upcoming tasks, bills, calls, and more\n' +
    '• Tasks, reminders, follow-ups, and important dates\n' +
    '• Expense & income tracking, bills, subscriptions, and loans/IOUs\n' +
    '• Schedule calls, call trees, favourite contacts & groups, Bulk SMS\n' +
    '• Journal with photos, notes, goals & habits\n' +
    '• Document vault with expiry reminders\n' +
    '• Period calendar\n' +
    '• Optional PIN lock for privacy\n' +
    '• Google Drive backup & restore (Pro)\n\n' +
    'Free to start. Upgrade to Pro when you need the vault, Drive backup, reports, and higher limits.\n\n' +
    'Install LifePilot:\n' +
    appUrl();

  var ICON =
    '<svg class="share-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';

  function shareApp() {
    var text = TEXT;
    if (navigator.share) {
      navigator.share({
        title: 'LifePilot',
        text: text,
      }).catch(function () {});
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        alert('Share text copied. Paste it in WhatsApp, email, or any app.');
      }).catch(function () {
        window.prompt('Copy this text to share:', text);
      });
      return;
    }
    window.prompt('Copy this text to share:', text);
  }

  document.querySelectorAll('[data-share-app]').forEach(function (el) {
    if (!el.querySelector('.share-icon')) {
      el.insertAdjacentHTML('afterbegin', ICON);
    }
    el.addEventListener('click', function (e) {
      e.preventDefault();
      shareApp();
    });
  });
})();
