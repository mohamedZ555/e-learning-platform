"use strict";

const loginBtn = document.querySelector(".sign-in-btn");
const inputs = document.querySelectorAll(".inputs");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let requestBody = {};

  inputs.forEach((inp) => {
    requestBody = { ...requestBody, [`${inp.name}`]: inp.value };
  });
  console.log(requestBody);
});
