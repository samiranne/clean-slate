 const observer = new MutationObserver(function() {
    if (document.head) {
    	chrome.storage.sync.get('theme_color', function(data) {
			let background_color = data.theme_color;
			const styleElement = document.createElement("style");

			css=`:root{
				    --main-bg-color: ${background_color};
				    --glass-bg-color: rgba(11, 77, 44, .95);
				    --button-color: ${background_color};
				}

				.identity .controls_section.user_list li:active .follow_list_item_blog:before, .identity .controls_section.user_list li:hover .follow_list_item_blog:before {
				    background-image: linear-gradient(90deg,rgba(18,41,67,0),var(--main-bg-color));
				    border-right: 5px solid var(--main-bg-color);
				}

				.identity .controls_section.user_list li .follow_list_item_blog:before {
				    background-image: linear-gradient(90deg,rgba(0,25,53,0),var(--main-bg-color));
				    border-right: var(--main-bg-color);
				}

				.radar .radar_footer .radar_avatar::before {
				    content: ' ';
				    position: absolute;
				    top: 0;
				    right: 0;
				    bottom: 0;
				    width: 20px;
				    background-image: linear-gradient(to right, rgba(0,25,53,0), var(--main-bg-color));
				}


				.identity {
				    background-color: var(--main-bg-color) !important;
				}

				.post_avatar {
				    background-color: var(--main-bg-color) !important;
				}

				.post-forms-glass {
				    background-color: var(--glass-bg-color);
				}

				.l-container.l-container--two-column-dashboard .l-content,
				.l-container.l-container--two-column .l-content {
				    background-color: var(--main-bg-color);
				}

				.l-container.l-container--two-column-dashboard .right_column,
				.l-container.l-container--two-column .right_column {
				    background-color: var(--main-bg-color);
				}

				.l-container.l-container--two-column-dashboard .left_column {
				    background-color: var(--main-bg-color);
				}

				.l-header-container--refresh {
				    background-color: var(--main-bg-color);
				}

				.identity .right_column:after {
				    background: var(--main-bg-color);
				}

				.button {
				    border-color: var(--button-color);
				    background: var(--button-color);
				}

				.chrome.blue {
				    border-color: var(--button-color);
				    background: var(--button-color);
				`
			
			styleElement.innerHTML = css;
			document.head.appendChild(styleElement);
	      	observer.disconnect();
		});
    }
});
observer.observe(document.documentElement, {childList: true});