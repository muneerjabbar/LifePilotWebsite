(function () {
  // Placeholder store URLs — replace when listings are live.
  var PLAY_STORE =
    'https://play.google.com/store/apps/details?id=com.codex.lifepilot';
  var APP_STORE =
    'https://apps.apple.com/app/lifepilot/id0000000000';

  var ua = navigator.userAgent || navigator.vendor || '';
  var isIos =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isAndroid = /android/i.test(ua);

  var statusEl = document.getElementById('status');
  var iosSoonEl = document.getElementById('ios-soon');
  var playBtn = document.getElementById('play-btn');
  var iosBtn = document.getElementById('ios-btn');

  if (playBtn) playBtn.href = PLAY_STORE;
  if (iosBtn) iosBtn.href = APP_STORE;

  // Keep both buttons visible so desktop visitors can choose.
  // On mobile, auto-route to the matching store when available.
  if (isAndroid) {
    if (statusEl) statusEl.textContent = 'Taking you to Google Play…';
    window.setTimeout(function () {
      window.location.replace(PLAY_STORE);
    }, 400);
    return;
  }

  if (isIos) {
    // Placeholder App Store ID — show coming-soon until published.
    var iosReady = false;
    if (!iosReady) {
      if (statusEl) statusEl.classList.add('hidden');
      if (iosSoonEl) iosSoonEl.classList.remove('hidden');
      if (iosBtn) iosBtn.classList.add('hidden');
      return;
    }
    if (statusEl) statusEl.textContent = 'Taking you to the App Store…';
    window.setTimeout(function () {
      window.location.replace(APP_STORE);
    }, 400);
    return;
  }

  if (statusEl) {
    statusEl.textContent =
      'LifePilot is on Google Play. On iOS, launch is coming soon — use the buttons below.';
  }
})();
