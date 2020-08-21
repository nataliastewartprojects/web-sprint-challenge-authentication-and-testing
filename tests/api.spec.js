const db = require("../database/dbConfig");
const Users = require("../users/users-model");
const request = require("supertest");
const server = require("../api/server");
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
        username: "userThree", //we have to change the username evrytime before run the test
        password: "secret",
      });

      // check the user is in the database (without using the GET / route)
      const users = await db("users");

      expect(users).toHaveLength(1);
    });
  });

  describe("GET /Jokes", () => {
    it("should GET jokes", async () => {
      // truncate the table to make sure it's empty
      // happens in the beforeEach() global

      // make request, send data
      const res = await request(server).get("/jokes");

      // check the jokes is in the database (without using the GET / route)

      expect(res.status).toBe(404);
    });
  });
});
