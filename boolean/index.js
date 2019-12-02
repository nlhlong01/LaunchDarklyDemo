var user = {
  "key": "user1"
};
var ldClient = LDClient.initialize('5dd7c98fe6145e083bd2e08d', user);

ldClient.on('ready', function() {
  console.log("It's now safe to request feature flags");
  const showFeature = ldClient.variation("display-message", false);
  const divEl = document.getElementById('msg');
  const imgEl = document.getElementById('img');

  if (showFeature) {
    divEl.innerHTML = 'Feature is on';
    imgEl.src = './switch-on.jpg';
  } else {
    divEl.innerHTML = 'Feature is off';
    imgEl.src = './switch-off.jpg';
  }
});