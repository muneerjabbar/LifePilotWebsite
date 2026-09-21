(function () {
  function appUrl() {
    var path = window.location.pathname.replace(/[^/]+$/, '');
    return window.location.origin + path + 'app.html';
  }

  var TEXT =
    'Hi!\n\n' +
    'I use LifePilot to organise everyday life in one place.\n\n' +
    'With the app, you can:\n\n' +
    '• Track tasks, reminders, and follow-ups\n' +
    '• Manage expenses, bills, and subscriptions\n' +
    '• Remember important dates, notes, and goals\n' +
    '• Keep everything local on your device — no account needed\n\n' +
    'Install LifePilot:\n' +
    appUrl() +
    '\n\n' +
    'Organise. Remember. Manage.';

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
