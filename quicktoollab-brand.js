(function () {
	"use strict";

	var siteName = "QuickToolLab PS";
	var siteUrl = "https://ps.quicktoollab.top";

	function updateMeta(selector, value, attr) {
		var node = document.querySelector(selector);
		if (node) {
			node.setAttribute(attr || "content", value);
		}
	}

	function applyBranding() {
		document.title = siteName + " | 免费在线图片编辑器";

		var logo = document.querySelector(".logo");
		if (logo) {
			if (logo.textContent.trim() !== siteName) {
				logo.textContent = siteName;
			}
			if (logo.getAttribute("href") !== "https://quicktoollab.top") {
				logo.setAttribute("href", "https://quicktoollab.top");
			}
			if (logo.getAttribute("aria-label") !== siteName) {
				logo.setAttribute("aria-label", siteName);
			}
			logo.classList.add("qt_logo");
		}

		updateMeta('link[rel="canonical"]', siteUrl, "href");
		updateMeta('meta[property="og:url"]', siteUrl);
		updateMeta('meta[property="og:title"]', siteName);
		updateMeta('meta[name="twitter:title"]', siteName);
		updateMeta('meta[itemprop="name"]', siteName);
	}

	function markReady() {
		document.body.classList.add("qt-ready");
		window.setTimeout(function () {
			var boot = document.getElementById("qt_boot");
			if (boot && boot.parentNode) {
				boot.parentNode.removeChild(boot);
			}
		}, 320);
	}

	document.addEventListener("DOMContentLoaded", function () {
		applyBranding();
		window.setTimeout(markReady, 450);

		var observer = new MutationObserver(applyBranding);
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	});
})();
