const Block = require("./block");
const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./crypto-hash");

describe("Block", () => {
    
    const timestamp = "some date";
    const lastHash = "last-hash";
    const hash = "some-hash";
    const data = ["blockchain", "data"];
    const block = new Block({timestamp, lastHash, hash, data});

    it("has a timestamp property", () => {
        expect(block.timestamp).toEqual(timestamp);
    });

    it("has a lastlastHashhash property", () => {
        expect(block.lastHash).toEqual(lastHash);
    });

    it("has a hash property", () => {
        expect(block.hash).toEqual(hash);
    });

    it("has a data property", () => {
        expect(block.data).toEqual(data);
    });

    describe("genesis()", () => {
        const genesisBlock = Block.genesis();

        it("returns a Block instance", () => {
            expect(genesisBlock instanceof Block).toBeTruthy;
        });

        it("returns the genesis data", () => {
            expect(genesisBlock).toEqual(GENESIS_DATA);
        });
    });

    describe("mineBlock()", () => {
        const lastBlock = Block.genesis();
        const data = "mined data";
        const minedBlock = Block.mineBlock({lastBlock, data});

        it("returns a Block instance", () => {
            expect(minedBlock instanceof Block).toBeTruthy;
        });

        it("sets the `lastHash` to be the `hash` of the lastBlock", () => {
            expect(minedBlock.lastHash).toEqual(lastBlock.hash);
        });
        
        it("sets the `data`", () => {
            expect(minedBlock.data).toEqual(data);
        });

        it("sets the `timestamp`", () => {
            expect(minedBlock.timestamp).not.toBeUndefined;
        });

        it("creates a SHA-256 `hash` based on the proper args", () => {
            expect(minedBlock.hash).toEqual(cryptoHash(minedBlock.timestamp, lastBlock.hash, data));
        });
    });
});