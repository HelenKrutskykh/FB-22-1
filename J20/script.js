const getNewUserInfo = () => {
  fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => displayUserInfo(data))
}


const displayUserInfo = (data) => {
  
  const picture = document.getElementById("displayUserPhoto");
  const userName = document.getElementById("displayUserName");
  const userFullName = document.getElementById("displayUserFullName");
  const userEmailAddress = document.getElementById("displayUserEmail");
  const userPhoneNumber = document.getElementById("displayUserPhoneNumber");
  const userGender = document.getElementById("displayUserGander");
  const userAddress = document.getElementById("displayUserAddress");
  const userDOB = document.getElementById("displayUserDOB");
  
  const userInfo = data.results[0];
  const uDOB = new Date(userInfo.dob.date);
  const location = userInfo.location;
  
  const addrText = `Street: ${location.street.number} ${location.street.name}, City: ${location.city}, State: ${location.state}, ${location.country}.`;
  const uDOBText = `${uDOB.getDate()}/${uDOB.getMonth() + 1}/${uDOB.getFullYear()} (${userInfo.dob.age} years old)`;
  
  picture.src = userInfo.picture.large;
  userName.innerText =  `${userInfo.name.first} ${userInfo.name.last}`;
  userFullName.innerText = `${userInfo.name.title}. ${userInfo.name.first} ${userInfo.name.last}`;
  userEmailAddress.innerText = userInfo.email;
  userPhoneNumber.innerText = userInfo.phone;
  userGender.innerText = userInfo.gender;
  userAddress.innerText = addrText;
  userDOB.innerText = uDOBText;
  
}


getNewUserInfo();
