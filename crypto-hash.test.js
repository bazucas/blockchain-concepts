const cryptoHash = require("./crypto-hash");

describe("cryptoHash()", () => {
    const testHash = "46070d4bf934fb0d4b06d9e2c46e346944e322444900a435d7d9a95e6d7435f5".toLowerCase();

    it("generates a SHA-256 hashed output", () => {
        expect(cryptoHash("teste")).toEqual(testHash);
    });

    it("produces the same hash with the same input arguments in any order", () => {
        expect(cryptoHash("one", "two", "three")).toEqual(cryptoHash("two", "one", "three"));
    });
});