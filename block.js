class Block {
    constructor ({timestamp, lasthash, hash, data}) {
        this.timestamp = timestamp,
        this.lasthash = lasthash,
        this.hash = hash,
        this.data = data
    }
}

// const block1 = new Block({
//     timestamp: "01/01/01", 
//     lasthash: "lastHash", 
//     hash: "hash", 
//     data: "someData"
// });

// console.log("block", block1);

module.exports = Block;