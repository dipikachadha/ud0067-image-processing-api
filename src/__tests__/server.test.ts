import request from "supertest";
// import {Server} from "express";
// import { App } from "../server/App";
// import { server } from "../server/server";
// const app = request(server);

// test("Checks if functions exist", async () => {
//     expect(app).toBeDefined();
// }, 1000);

// test("Test init", () => {
//     app.get("/test").expect(200);
// })

// test("Test endpoint", () => {
//     app.get("/api?img=fjord&height=100&width=100")
//         .expect(200);
// }, 1000)
// describe("test", () => {
//     it("Tests endpoint", _ => {
//         expect(app).toBeDefined();
//         //.get()
//         //   .expect(200);
//     });
// });

describe('/api endpoint test', () => {
    let server: any;
    beforeAll(async () => {
      const mod = await import('../server/server');
      server = mod.default;
    });
  
    afterAll((done) => {
      if (server) {
        server.close(done);
      }
    });
  
    it('should return 400 if email is invalid', async () => {
      const res = await request(server)
        .get("/api?img=fjord&height=100&width=100");

  
      expect(res.status).toBe(200);
      // expect(res.body).toHaveProperty('errArray');
    }, 1000);
  });