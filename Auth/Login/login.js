"use strict";

const loginBtn = document.querySelector(".sign-in-btn");
const inputs = document.querySelectorAll(".inputs");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let requestBody = {};

  inputs.forEach((inp) => {
    requestBody = { ...requestBody, [`${inp.name}`]: inp.value };
  });

  if (!requestBody.Password?.length || !requestBody.UserName?.length) {
    alert("Please add your credentials");
    return;
  }

  let savedUsers = localStorageGetter();

  let userChecker = savedUsers.find(
    (user) => user.UserName == requestBody.UserName
  );

  if (!userChecker) {
    alert("User is not authorized");
    return;
  }
  location.href = "../../Home/e-learning.html";
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
