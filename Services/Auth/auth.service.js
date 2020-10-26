import moment from "moment";

const AUTH_LOGIN = (email, password) => {
  let user = {
    isLogin: false,
  };

  const localTrackUsersLog = JSON.parse(localStorage.getItem("trackuserslog"));
  let trackUsersLog = localTrackUsersLog;
  const localUsers = JSON.parse(localStorage.getItem("users"));
  localUsers.map((users) => {
    if (users.email === email && users.password === password) {
      user = {
        ...users,
        isLogin: true,
        loginAt: moment(),
      };
      trackUsersLog.push(user);
      localStorage.setItem("trackuserslog", JSON.stringify(trackUsersLog));
    }
    return;
  });
  return user;
};

const EMAIL_CHECK_DUPLICATE = (email) => {
  let isExist = false
  const localUsers = JSON.parse(localStorage.getItem("users"));
  localUsers.map((users) => {
    if (users.email === email) {
      isExist = true
    }
    return;
  });
  return isExist
}

export { AUTH_LOGIN, EMAIL_CHECK_DUPLICATE };
