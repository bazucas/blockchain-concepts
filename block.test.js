const Block = require("./block");

describe("Block", () => {
    
    const timestamp = "some date";
    const lasthash = "last-hash";
    const hash = "some-hash";
    const data = ["blockchain", "data"];
    const block = new Block({timestamp, lasthash, hash, data});

    it("has a timestamp property", () => {
        expect(block.timestamp).toEqual(timestamp);
    })
    it("has a lasthash property", () => {
        expect(block.lasthash).toEqual(lasthash);
    })
    it("has a hash property", () => {
        expect(block.hash).toEqual(hash);
    })
    it("has a data property", () => {
        expect(block.data).toEqual(data);
    })
});