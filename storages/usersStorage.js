class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  findUser({ firstName, lastName, email }) {
    const arr = Object.values(this.storage);
    if (firstName !== undefined && firstName !== "") {
      const filteredArr = arr.filter((item) => {
        return item.firstName === firstName;
      });
      return filteredArr;
    } else if (lastName !== undefined && lastName !== "") {
      const filteredArr = arr.filter((item) => {
        return item.lastName === lastName;
      });
      return filteredArr;
    } else if (email !== undefined && email !== "") {
      const filteredArr = arr.filter((item) => {
        console.dir(item.email, email);
        return item.email === email;
      });
      return filteredArr;
    } else {
      return arr;
    }
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
