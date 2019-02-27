colorThemes = {
  'new': '#001935',
  'classic': '#36465D',
  'blue': '#066',
  'green': '#174',
  'purple': '#603',
  'white': '#FFF'
}

dashboardSettings = [
  'hide_posts',
  'hide_ads',
  'hide_feed_notifications',
  'hide_radar_sidebar',
  'hide_explore_sidebar'
]

function initializeDashboardSetting(settingName) {
  chrome.storage.sync.get(settingName, function(data) {
    var checkbox = document.getElementById(settingName);
    checkbox.checked = data[settingName];
    checkbox.addEventListener('change', function() {
      if (this.checked) {
          chrome.storage.sync.set({[settingName]: true}, function() {
            console.log(settingName + ' is set to true');
          });
      } else {
          chrome.storage.sync.set({[settingName]: false}, function() {
            console.log(settingName + ' is set to false');
          });
      }
    });
  });
}

function constructColorOptions(colorThemes) {
    let themeColorSelectors = document.getElementById('themeColorSelectors');  
    Object.entries(colorThemes).forEach(([color_name, color_value]) => {
      let buttonContainer = document.createElement('div')
      buttonContainer.classList.add('color-selector')
      let button = document.createElement('button');
      button.style.backgroundColor = color_value;
      button.addEventListener('click', function() {
      chrome.storage.sync.set({theme_color: color_value}, function() {
        console.log('Theme color set to ' + color_name + ' ' + color_value);
        });
      });
      let label = document.createElement('div')
      label.innerText = color_name
      buttonContainer.appendChild(button)
      buttonContainer.appendChild(label)
      themeColorSelectors.appendChild(buttonContainer);
  });
}

constructColorOptions(colorThemes);
for (let settingName of dashboardSettings) {
    initializeDashboardSetting(settingName);
  }