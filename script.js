// & ~~~~~~~~~~~~~~ get 20 random users info from 20 api call
// get name,email,phone dob for each person
var siteData;
var username, email, phone, dob;
var users,
  temp = [];
for (var i = 0; i < 2; i++) {
  fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((json) => {
      siteData = json.results[0];
      userName = siteData.name;
      console.log(siteData.name);

      email = siteData.email;
      phone = siteData.phone;
      dob = siteData.dob.date.substring(0, 10);
      console.log(i, username, email, phone, dob);
      temp = (username, email, phone, dob);
      users.push(temp);
      console.log(users);
      // username = '';
    });
}
console.log(users);
