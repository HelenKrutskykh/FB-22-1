const getNewUserInfo = () => {
  fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => displayUserInfo(data))
}

const user = {
  photo: document.getElementById("displayUserPhoto").src,
  name: document.getElementById("displayUserName").innerText,
  fullname: document.getElementById("displayUserFullName").innerText,
  email: document.getElementById("displayUserEmail").innerText,
  num: document.getElementById("displayUserPhoneNumber").innerText,
  gen: document.getElementById("displayUserGander").innerText,
  dob: document.getElementById("displayUserDOB").innerText,
  adr: document.getElementById("displayUserAddress").innerText,
  
}

const displayUserInfo = (data) => {
  
  const userInfo = data.results[0];

  user.photo = userInfo.picture.large;
  user.name = `${userInfo.name.first} ${userInfo.name.last}`;
  user.fullname = `${userInfo.name.title}. ${user.name}`;
  user.email = userInfo.email;
  user.num = userInfo.phone;
  user.gen = userInfo.gender;

  let userDOB = new Date(userInfo.dob.date);
  userDOB = `${userDOB.getDate()}/${userDOB.getMonth() + 1}/${userDOB.getFullYear()} (${userInfo.dob.age} years old)`
  user.dob = userDOB;

  const location = userInfo.location
  user.adr = `Street: ${location.street.number} ${location.street.name}, City: ${location.city}, State: ${location.state}, ${location.country}.`;
}

getNewUserInfo();
