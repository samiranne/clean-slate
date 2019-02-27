function unhideElementsByClass(className) {
	elts = document.getElementsByClassName(className)
	for (let e of elts) {
		e.style.display = "block";
	}
}

chrome.storage.sync.get('hide_posts', function(data) {
	if (!data.hide_posts) {
		unhideElementsByClass("not_mine");
	}
});

chrome.storage.sync.get('hide_ads', function(data) {
	if (!data.hide_ads) {
		unhideElementsByClass("standalone-ad-container");
		unhideElementsByClass("sidebar-ad")
	}
});

chrome.storage.sync.get('hide_feed_notifications', function(data) {
	if (!data.hide_feed_notifications) {
		unhideElementsByClass("notification");
	}
});

chrome.storage.sync.get('hide_radar_sidebar', function(data) {
	if (!data.hide_radar_sidebar) {
		unhideElementsByClass("radar_header");
		unhideElementsByClass("radar_footer");
		unhideElementsByClass("radar");
	}
});

chrome.storage.sync.get('hide_explore_sidebar', function(data) {
	if (!data.hide_explore_sidebar) {
		unhideElementsByClass("follow_list");
		unhideElementsByClass("explore_link");
	}
});

