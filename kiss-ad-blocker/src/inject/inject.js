chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "interactive") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// Click on hide button to hide "hidable" ads
		setTimeout(hideSimple, 2000);

		// TODO: Block Banner Ads

		// ----------------------------------------------------------

	}
	}, 10);
});

function hideSimple() {
	var hideButtons = document.getElementsByClassName("divCloseBut");
	for (var key in hideButtons) {
		while (hideButtons.hasOwnProperty(key)) {
			hideButtons[key].firstChild.click();
		}
	}
}