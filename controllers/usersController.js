const usersStorage = require("../storages/usersStorage");

exports.usersListGet = (req, res) => {
  res.render("pages/index", {
    title: "User List",
    users: usersStorage.getUsers(),
  });
};

exports.usersCreateGet = (req, res) => {
  res.render("partials/createUser", {
    title: "Create user",
  });
};

exports.usersCreatePost = (req, res) => {
  const { firstName, lastName } = req.body;
  usersStorage.addUser({ firstName, lastName });
  res.redirect("/");
};
