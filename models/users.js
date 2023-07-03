const fs = require("fs");
let users = [];

const getUsers = () => {
  fs.readFile("database/blog_users.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let parsedData = JSON.parse(data);
    users = parsedData.blog_users;
  });
  return users;
};

const getUserById = (id) => {
  fs.readFile("database/blog_users.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let parsedData = JSON.parse(data);
    users = parsedData.blog_users;
  });
  return users.find((user) => user.uid === id);
};

const addUser = (newUser) => {
  fs.readFile("database/blog_users.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let parsedData = JSON.parse(data);
    users = parsedData.blog_users;
    newUser = { id: users.length + 1, ...newUser };
    users.push(newUser);

    fs.writeFile(
      "database/blog_users.json",
      JSON.stringify({ blog_users: users }),
      "utf8",
      (error) => {
        if (error) console.log(error);
        return;
      }
    );
  });
  return newUser;
};

const updateUser = (id, updatedUser) => {
  fs.readFile("database/blog_users.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let parsedData = JSON.parse(data);
    users = parsedData.blog_users;
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) return null;
    users[index] = { id, ...updatedUser };

    fs.writeFile(
      "database/blog_users.json",
      JSON.stringify({ blog_users: users }),
      "utf8",
      (error) => {
        if (error) console.log(error);
        return;
      }
    );
  });
  return { id, ...updatedUser };
};

const deleteUser = (id) => {
  let foundId = id;

  fs.readFile("database/blog_users.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let parsedData = JSON.parse(data);
    users = parsedData.blog_users;
    const index = users.findIndex((user) => user.uid === id);
    if (index === -1) {
      foundId = null;
      return;
    } else {
      foundId = users[index].id;
      users.splice(index, 1);

      fs.writeFile(
        "database/blog_users.json",
        JSON.stringify({ blog_users: users }),
        "utf8",
        (error) => {
          if (error) console.log(error);
          return;
        }
      );
    }
  });
  return foundId;
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
