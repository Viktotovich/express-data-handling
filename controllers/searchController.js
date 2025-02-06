const usersStorage = require("../storages/usersStorage");

exports.searchGet = (req, res) => {
  const title = "Search Results";
  const { firstName, lastName, email } = req.query;
  const searchResult = usersStorage.findUser({ firstName, lastName, email });
  res.render("pages/search", { title, searchResult });
};
