class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  findUser({ firstName, lastName, email }) {
    const arr = Object.values(this.storage);

    const filteredArr = arr.filter((item) => {
      return (
        item.firstName === firstName ||
        item.lastName === lastName ||
        item.email === email
      );
    });

    return filteredArr ? filteredArr : arr;
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }
}

//singleton
module.exports = new UsersStorage();
