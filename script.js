// & ~~~~~~~~~~~~~~ get 20 random users info from 20 api call
// get name,email,phone dob for each person
var siteData;
var username, email, phone, dob;
var userList = [];
for (var i = 0; i < 2; i++) {
  fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((json) => {
      siteData = json.results[0];

      username =
        siteData.name.title +
        ' ' +
        siteData.name.first +
        ' ' +
        siteData.name.last;
      //console.log(username);

      email = siteData.email;
      phone = siteData.phone;
      dob = siteData.dob.date.substring(0, 10);

      // console.log(siteData.picture.large);
      // console.log(siteData.picture.large, username, email, phone, dob);
      userList.push(siteData.picture.large, username, email, phone, dob);

      //console.log(userList);

      userList.forEach((item) => {
        if (item.includes('https://')) {
          console.log('url');

          var root = document.getElementById('root');
          // ✅ Create element
          const newContainer = document.createElement('div');

          // ✅ Add classes to element
          newContainer.classList.add('flex-container');

          var img = document.createElement('img');
          img.src = item;

          newContainer.append(img);
          newContainer.append(username, email, phone, dob);

          root.appendChild(newContainer);
        }
        console.log(item);
      });

      // end of fetch
    });
  console.log(userList);
}
//cannot get userList outside of promise
//console.log(userList);
