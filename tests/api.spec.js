const db = require("../database/dbConfig");
const Users = require("../users/users-model");
// const Auth = require("../auth-routerauth/");

describe("usersModel", () => {
  beforeEach(async () => {
    // empty table and reset primary key back to 1
    await db("users").truncate();
  });

  describe("add()", () => {
    it("should add users", async () => {
      // truncate the table to make sure it's empty
      // happens in the beforeEach() global

      // make request, send data
      await Users.add({
        username: "userOne",
        password: "secret",
      });

      // check the user is in the database (without using the GET / route)
      const users = await db("users");

      expect(users).toHaveLength(1);
    });
  });
});
