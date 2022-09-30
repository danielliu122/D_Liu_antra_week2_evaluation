console.log('Hello!');
console.log('Hello!');
// & ~~~~~~~~~~~~~~ get 20 random users info from 20 api call
// get name,email,phone dob for each person
var siteData, test;
for (var i = 0; i < 2; i++) {
  fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((json) => {
      //console.log(JSON.stringify(json));
      //siteData = JSON.stringify(json);
      siteData = json;
      console.log(siteData.results[0]);
    });
}
