let DummyUsersTable ={UserId : 3, userName:'basem' , Email:'basem@basem.com' , Password:123456};
const log = document.getElementsByClassName("sign-in")[0];
const signIn = document.getElementById('sub')
const btn = document.getElementsByClassName("login")[0];
const password = document.getElementById('p')
const email = document.getElementById('e')
const logInForm = document.getElementById("logInForm")
const register = document.getElementById("register")
const regist = document.getElementById("regist")
const lom = document.getElementById("lom")


regist.addEventListener("click", () =>{
  if (true) {
    logInForm.style.display = "none"
    register.style.display = "block"
  }
})

lom.addEventListener("click", () =>{
  if (true) {
    logInForm.style.display = "block"
    register.style.display = "none"
  }
})

btn.addEventListener('click', () => {
    if (log.style.display === 'block') {
      log.style.display='none';
    } else {
      log.style.display='block';
    }
  });
signIn.addEventListener('click', () => {
  let passwordValue = password.value
  let emailValue = email.value

    if (passwordValue == DummyUsersTable.Password && emailValue == DummyUsersTable.Email) {
     log.style.display = 'none'
     alert(`welcome ${DummyUsersTable.userName}`)
     return ;
    }
    alert('please enter the correct creds')
    log.style.display = 'block'
  });
  localStorage.setItem('token' , JSON.stringify({userName:'basem'}))
  let ms = JSON.parse(localStorage.getItem('token'))