chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    // Wait for interactive for best UX
    if (document.readyState === "interactive") {
      clearInterval(readyStateCheckInterval);

      // Always hide banner and sidebar ads
      hideBanner();
      hideSidebar();

      // Hide hideabe ads with a small offset to avoid Kiss* ad block detection
      setTimeout(hideSimple, 1000);
    }
  }, 10);
});

// Hides simple ads
function hideSimple() {
  var hideButtons = document.getElementsByClassName("divCloseBut");
  for (var key in hideButtons) {
    while (hideButtons.hasOwnProperty(key)) {
      hideButtons[key].firstChild.click();
    }
  }
}

// Hides banner ads
function hideBanner() {
  var banners = document.querySelectorAll('[id^="divAds"]');
  for (var key in banners) {
    if (banners.hasOwnProperty(key)) {
      banners[key].remove();
    }
  }
}

// Hides sidebar ads
function hideSidebar() {
  var sidebars = document.querySelectorAll('[id^="BB_"]');
  for (var key in sidebars) {
    if (sidebars.hasOwnProperty(key)) {
      sidebars[key].remove();
    }
  }
}