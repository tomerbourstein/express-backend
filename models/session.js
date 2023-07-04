const fs = require("fs");
let users = [];
let tokens = [];

function generateToken() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const tokenLength = 32;
  let newToken = "";

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    newToken += characters.charAt(randomIndex);
  }

  return newToken;
}

const login = (email, password) => {
  fs.readFile("database/blog_users.json", "urf8", (usersErr, usersData) => {
    if (usersErr) {
      console.log(usersErr);
      return;
    }
    const parsedUsersData = JSON.parse(usersData);
    users = parsedUsersData.blog_users;
    const foundUserByEmail = users.find((user) => user.email === email);
    if (foundUserByEmail.password != password) return null;
    else {
      const newGeneratedToken = generateToken();

      fs.readFile("database/session.json", "utf8", (tokensErr, tokensData) => {
        if (tokensErr) {
          console.log(tokensErr);
          return;
        }
        const parsedTokensData = JSON.parse(tokensData).tokens_list;
        tokens = parsedTokensData;
        tokens.push(newGeneratedToken);

        fs.writeFile(
          "database/session.json",
          JSON.stringify({ tokens_list: tokens }),
          "utf8",
          (writeError) => {
            if (writeError) {
              console.log(writeError);
              return;
            }
          }
        );
      });
      return newGeneratedToken;
    }
  });
};

const logout = (token) => {
  let isDeleted = false;
  fs.readFile("database/session.json", "utf8", (tokensErr, tokensData) => {
    if (tokensErr) {
      console.log(tokensErr);
      return;
    }
    const parsedTokensData = JSON.parse(tokensData).tokens_list;
    tokens = parsedTokensData;
    const index = tokens.findIndex((t) => t === token);
    if (index === -1) {
      isDeleted = true;
      return;
    }
    tokens[index].splice(index, 1);

    fs.writeFile(
      "database/session.json",
      JSON.stringify({ tokens_list: tokens }),
      "utf8",
      (writeError) => {
        if (writeError) {
          console.log(writeError);
          return;
        }
      }
    );
    isDeleted = true;

    return isDeleted;
  });
};

module.exports = { login, logout };
