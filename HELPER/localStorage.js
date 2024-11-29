export function localStorageGetter() {
  let usersDummyTable = JSON.parse(localStorage.getItem("users"));

  return usersDummyTable;
}
