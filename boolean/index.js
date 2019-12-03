// create a user
var user = {
  key: 'johndoe',
  name: 'John Doe',
  email: 'foo@autodesk.com',
  country: 'Germany'
};

// initialize a LaunchDarkly client
var ldClient = LDClient.initialize('5de4e5a4c2a942083c638a3c', user); // SDK key of the dev env

ldClient.on('ready', function() {
  console.log("It's now safe to request feature flags");
  // request a feature flag
  const showFeature = ldClient.variation('boolean-feature', false);
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