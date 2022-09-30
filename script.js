// & ~~~~~~~~~~~~~~ get 20 random users info from 20 api call
// get name,email,phone dob for each person
var siteData;
var username, email, phone, dob;

for (var i = 0; i < 4; i += 1) {
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

      email = siteData.email;
      phone = siteData.phone;
      dob = ' Birthday :    ' + siteData.dob.date.substring(0, 10);

      var root = document.getElementById('root');

      const textContainer = document.createElement('div');
      // ✅ Add classes to element
      textContainer.classList.add('text-container');

      // ✅ Create element
      const newContainer = document.createElement('div');

      // ✅ Add classes to element
      newContainer.classList.add('flex-container');

      var img = document.createElement('img');
      img.src = siteData.picture.large;

      var usernameEle = document.createTextNode('Name: ' + username);
      var emailEle = document.createTextNode('email: ' + email);
      var phoneEle = document.createTextNode('phone ' + phone);

      textContainer.append(usernameEle);
      
      var linebreak = document.createElement('br');
      textContainer.appendChild(linebreak);

      textContainer.append(emailEle);
      var linebreak = document.createElement('br');
      textContainer.appendChild(linebreak);
      textContainer.append(phoneEle);

      root.appendChild(newContainer);

      newContainer.append(img);
      newContainer.append(textContainer);
      //hide dob button
      var dobButton = document.createElement('button');
      dobButton.classList.add('dobButton');
      var dobElement = document.createTextNode(dob);
      dobButton.innerHTML = 'Show DOB';

      textContainer.append(dobButton);

      dobButton.addEventListener('click', () => {
        textContainer.append(dobElement);
        showHide(dobButton, dobElement);
      });

      // end of fetch
    });
}

function showHide(button, text) {
  if (button.style.display === 'none') {
    button.style.display = 'block';
    text.display = 'none';
  } else {
    button.style.display = 'none';
    text.display = 'block';
  }
}
