chrome.browserAction.onClicked.addListener(function(){
	let	options={
		type: "basic",
		title: "Simple Title",
		message: "簡単です",
		iconUrl: "SimpleExtension48.png"
	};
	chrome.notifications.create(options);
	console.log("debug", options);
});
