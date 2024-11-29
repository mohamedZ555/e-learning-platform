export function localStorageGetter() {
  let usersDummyTable = JSON.parse(localStorage.getItem("users"));

  return usersDummyTable;
}

export function localStorageSetter(newUser) {
  let savedUsers = localStorageGetter().map((saved) => {
    return [...saved, newUser];
  });

  localStorage.setItem("users", JSON.stringify(savedUsers));
}
