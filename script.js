// & ~~~~~~~~~~~~~~ get 20 random users info from 20 api call
// get name,email,phone dob for each person
var siteData;
var name, email, phone, dob;
var users = {};
for (var i = 0; i < 2; i++) {
  fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((json) => {
      siteData = json.results[0];
      //console.log(siteData.name);
      Object.values(siteData.name).forEach((item) => {
        console.log(item);
        if (item.length > 0) {
          name += item + ' ';
        }
      });
      name = name.substring(9);
      email = siteData.email;
      phone = siteData.phone;
      dob = siteData.dob.date;
      console.log(i, name, email, phone, dob);
      users.push(name, email, phone, dob);
    });
}
