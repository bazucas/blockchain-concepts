const cryptoHash = require("./crypto-hash");

describe("cryptoHash()", () => {

    it("generates a SHA-256 hashed output", () => {
        const testHash = "4955eec4a6aa801a5dac3c298d21ab46b43d12e1c6435bbb5bddb62177afaaa0";

        expect(cryptoHash("teste")).toEqual(testHash);
    });

    it("produces the same hash with the same input arguments in any order", () => {
        expect(cryptoHash("one", "two", "three")).toEqual(cryptoHash("two", "one", "three"));
    });

    it("produces a unique hash when the properties have changed on an input", () => {
        const something = { "teste": "teste"};
        const originalHash = cryptoHash();
        something["hello"] = "world";

        expect(cryptoHash(something)).not.toEqual(originalHash);
    });
});