let DummyUsersTable ={UserId : 3, Email:'basem@basem.com' , Password:123456};
const log = document.getElementsByClassName("sign-in")[0];
const SginIn = document.getElementById('sub')
const btn = document.getElementsByClassName("login")[0];
const password = document.getElementById('p')
const email = document.getElementById('e')

btn.addEventListener('click', () => {
    if (log.style.display === 'none') {
      log.style.display = 'block';
    } else {
      log.style.display = 'none';
    }
  });
SginIn.addEventListener('click', () => {
  let passwordValue = password.value
  let emailValue = email.value
  console.log(passwordValue)
  console.log(emailValue)
    if (passwordValue == DummyUsersTable.Password && emailValue == DummyUsersTable.Email) {
     log.style.display = 'none'
     alert(`welcome ${DummyUsersTable.UserId}`)
     return ;
    }
    alert('please enter the correct creds')
    log.style.display = 'block'
  });
  localStorage.setItem('token' , JSON.stringify({UserId:3}))
  let ms = JSON.parse(localStorage.getItem('token'))