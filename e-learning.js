const log = document.getElementsByClassName("sign-in")[0];
const btn = document.getElementsByClassName("login")[0];

btn.addEventListener('click', () => {
    if (log.style.display === 'none') {
      log.style.display = 'block';
    } else {
      log.style.display = 'none';
    }
  });