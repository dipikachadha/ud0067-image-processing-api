import request from "supertest";
import { server } from "../src/server/server";
const app = request(server);

test("Checks if functions exist", async () => {
    expect(app).toBeDefined();
}, 1000);

test("Test init", () => {
    app.get("/test").expect(200);
})
// describe("test", () => {
//     it("Tests endpoint", _ => {
//         expect(app).toBeDefined();
//         //.get("/api?img=fjord&height=100&width=100")
//         //   .expect(200);
//     });
// });