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
      siteData = convert(json);
      console.log(tyepof(siteData));
    });
}
//
// helper function for flatten json
const convert = (object) => {
  if (!object || typeof object !== 'object') return object;
  if (Array.isArray(object)) {
    return object.every((v) => typeof v === 'string')
      ? object.join()
      : Object.assign({}, ...object.map(convert));
  }
  return Object.fromEntries(
    Object.entries(object).flatMap(([k, v]) =>
      k === '$'
        ? Object.entries(v).map(([k, v]) => [k, convert(v)])
        : [[k, convert(v)]]
    )
  );
};
