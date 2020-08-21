const request = require("supertest");

const server = require("../api/server");
const db = require("../database/dbConfig");

describe("server", () => {
  beforeEach(async () => {
    // empty table and reset primary key back to 1
    await db("users").truncate();
  });

  describe("GET /", () => {
    it("should return 200 OK", () => {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it("should return 200 OK using async/await", async () => {
      const res = await request(server).get("/");

      expect(res.status).toBe(200);
    });

    it("should return 200 No Jest", () => {
      return request(server).get("/").expect(200);
    });

    it("should return 200 No Jest", (done) => {
      request(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
          done();
        });
    });

    // check that the / endpoint returns an `api` property in the body
    // and that the value of that property is `running...`

    // using supertest's .expect()
    it("Should return api: running...", () => {
      return request(server).get("/").expect({ api: "running..." });
    });

    // using jest's expect()
    it("Should return an api property with the value of ...running", () => {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.body.api).toBe("running...");
        });
    });
  });
});
