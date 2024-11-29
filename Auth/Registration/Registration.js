"use strict";
const loginBtn = document.querySelector(".sign-in-btn");
const inputs = document.querySelectorAll(".inputs");
loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  let requestBody = {};

  inputs.forEach((inp) => {
    requestBody = { ...requestBody, [`${inp.name}`]: inp.value };
  });
  if (requestBody.Password != requestBody.ConfirmPassword) {
    alert("Password does not match");
    return;
  }
  if (
    requestBody.Fullname == "" ||
    requestBody.Password == "" ||
    requestBody.Email == "" ||
    requestBody.phone == ""
  ) {
    alert("please fill in the form with data");
    return;
  }
  try {
    await localStorageSetter(requestBody);
    location.href = "../Login/login.html";
  } catch (err) {
    console.log(err);
  }
});

function localStorageGetter() {
  let usersDummyTable = JSON.parse(localStorage.getItem("users"));

  return usersDummyTable;
}
async function localStorageSetter(newUser) {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([newUser]));
    return;
  }

  let savedUsers = await localStorageGetter();

  if (Array.isArray(savedUsers)) {
    savedUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(savedUsers));
    alert("account created successfully");
  }
}
