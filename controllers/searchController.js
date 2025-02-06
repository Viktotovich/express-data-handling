const usersStorage = require("../storages/usersStorage");

exports.searchGet = [
  (req, res) => {
    const title = "Search Results";

    const { firstName, lastName, email } = req.body;
    res.redirect(
      `pages/search?firstName=${firstName}&lastName=${lastName}&email=${email}`,
      { title, searchResult }
    );
  },
];

exports.searchLoad = (req, res) => {
  const { firstName, lastName, email } = req.params;
  const searchResult = usersStorage.findUser({ firstName, lastName, email });
  res.redirect;
};
