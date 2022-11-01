const getNewUserInfo = () => {
  fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => displayUserInfo(data))
}


const displayUserInfo = (data) => {
  
  const userInfo = data.results[0];
  const userName = `${userInfo.name.first} ${userInfo.name.last}`;
  const userFullName = `${userInfo.name.title}. ${userInfo.name.first} ${userInfo.name.last}`;
  const userEmailAddress = userInfo.email;
  const userPhoneNumber = userInfo.phone;
  const userGender = userInfo.gender;
  const userAddress = `Street: ${userInfo.location.street.number} ${userInfo.location.street.name}, City: ${userInfo.location.city}, State: ${userInfo.location.state}, ${userInfo.location.country}.`;
  
  document.querySelector("#displayUserPhoto").src = userInfo.picture.large;
  document.querySelector("#displayUserName").innerText = userName;
  document.querySelector("#displayUserFullName").innerText = userFullName;
  document.querySelector("#displayUserEmail").innerText = userEmailAddress;
  document.querySelector("#displayUserPhoneNumber").innerText = userPhoneNumber;
  document.querySelector("#displayUserGander").innerText = userGender;
  document.querySelector("#displayUserDOB").innerText = userDOB;
  document.querySelector("#displayUserAddress").innerText = userAddress;
  
  let userDOB = new Date(userInfo.dob.date);
  userDOB = `${userDOB.getDate()}/${userDOB.getMonth() + 1}/${userDOB.getFullYear()} (${userInfo.dob.age} years old)`;
}

getNewUserInfo();
