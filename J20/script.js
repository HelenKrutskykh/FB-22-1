const getNewUserInfo = () => {
  fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => displayUserInfo(data))
}


const displayUserInfo = (data) => {
  
  const userInfo = data.results[0];

  document.querySelector("#displayUserPhoto").src = userInfo.picture.large;

  const userName = `${userInfo.name.first} ${userInfo.name.last}`;
  document.querySelector("#displayUserName").innerText = userName;

  const userFullName = `${userInfo.name.title}. ${userInfo.name.first} ${userInfo.name.last}`;
  document.querySelector("#displayUserFullName").innerText = userFullName;

  const userEmailAddress = userInfo.email;
  document.querySelector("#displayUserEmail").innerText = userEmailAddress;

  const userPhoneNumber = userInfo.phone;
  document.querySelector("#displayUserPhoneNumber").innerText = userPhoneNumber;

  const userGender = userInfo.gender;
  document.querySelector("#displayUserGander").innerText = userGender;

  let userDOB = new Date(userInfo.dob.date);
  userDOB = `${userDOB.getDate()}/${userDOB.getMonth() + 1}/${userDOB.getFullYear()} (${userInfo.dob.age} years old)`
  document.querySelector("#displayUserDOB").innerText = userDOB;

  const userAddress = `Street: ${userInfo.location.street.number} ${userInfo.location.street.name}, City: ${userInfo.location.city}, State: ${userInfo.location.state}, ${userInfo.location.country}.`;
  document.querySelector("#displayUserAddress").innerText = userAddress;
}


getNewUserInfo();
