const Wallet = require(".");
const { verifySignature } = require("../util");
const Transaction = require("./transaction");

describe("Transaction", () => {
    let transaction, senderWallet, recipient, amount;

    beforeEach(() => {
        senderWallet = new Wallet();
        recipient = "recipient-pub-key";
        amount = 50;

        transaction = new Transaction({ senderWallet, recipient, amount });
    });

    it("has an `id`", () => {
        expect(transaction).toHaveProperty("id");
    });

    describe("outputMap", () => {
        it("has an `outputMap`", () => {
            expect(transaction).toHaveProperty("outputMap");
        });

        it("outputs the amount to the recipient", () => {
            expect(transaction.outputMap[recipient]).toEqual(amount);
        });

        it("outputs the remaining balance to the `senderWallet`", () => {
            expect(transaction.outputMap[senderWallet.publicKey]).toEqual(senderWallet.balance - amount);
        });
    });

    describe("input", () => {
        it("has an `input`", () => {
            expect(transaction).toHaveProperty("input");
        });

        it("has an `timestamp` in the input", () => {
            expect(transaction.input).toHaveProperty("timestamp");
        });

        it("sets the `amount` to the `senderWallet` balance", () => {
            expect(transaction.input.amount).toEqual(senderWallet.balance);
        });
        
        it("sets the `address` to the `senderWallet` publicKey", () => {
            expect(transaction.input.address).toEqual(senderWallet.publicKey);
        });

        it("signs de input", () => {
            expect(
                verifySignature({
                    publicKey: senderWallet.publicKey,
                    data: transaction.outputMap,
                    signature: transaction.input.signature
                })
            ).toBe(true);
        });
    });
});