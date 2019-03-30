function setVisibilityForClass(className, visible) {
	let elts = document.getElementsByClassName(className)
	let visibility = visible ? "block" : "none";
	for (let e of elts) {
		e.style.display = visibility;
	}
}

function updateElementVisibility() {
	chrome.storage.sync.get('hide_posts', function(data) {
		setVisibilityForClass("not_mine", !data.hide_posts);
	});

	chrome.storage.sync.get('hide_ads', function(data) {
		setVisibilityForClass("standalone-ad-container", !data.hide_ads);
		setVisibilityForClass("sidebar-ad", !data.hide_ads)
	});

	chrome.storage.sync.get('hide_feed_notifications', function(data) {
		setVisibilityForClass("notification", !data.hide_feed_notifications);
	});

	chrome.storage.sync.get('hide_radar_sidebar', function(data) {
		setVisibilityForClass("radar_header", !data.hide_radar_sidebar);
		setVisibilityForClass("radar_footer", !data.hide_radar_sidebar);
		setVisibilityForClass("radar", !data.hide_radar_sidebar);
	});

	chrome.storage.sync.get('hide_explore_sidebar', function(data) {
		setVisibilityForClass("follow_list", !data.hide_explore_sidebar);
		setVisibilityForClass("explore_link", !data.hide_explore_sidebar);
	});
}

chrome.storage.onChanged.addListener(function(changes, namespace) {
        // for (var key in changes) {
        //   var storageChange = changes[key];
        // }
        console.log("updating element visibility");
        updateElementVisibility();
 });

updateElementVisibility();
