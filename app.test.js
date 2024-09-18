const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/test authors endpoint", () => {
    test("Test generic error message", async () => {
        const response = await request.get("/authors")
        const body = JSON.parse(response.text);
        expect(response.status).toBe(200);
        expect(body.message).toBe("GET for authors response");
    })
})

describe("/test books endpoint", () => {
    test("Test generic error message", async () => {
        const response = await request.get("/books")
        const body = JSON.parse(response.text);
        expect(response.status).toBe(200);
        expect(body.message).toBe("GET for books response");
    })
})

describe("/test generic endpoint", () => {
    test("Test generic error message", async () => {
        const response = await request.get("/whatever")
        const body = JSON.parse(response.text);
        expect(response.status).toBe(404);
        expect(body.message).toBe("Unexistant route");
    })
})