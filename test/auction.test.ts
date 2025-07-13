import { ethers } from "hardhat";
import { expect } from "chai";
import { getSigners, deployContract, createFhevmInstance } from "../utils/fhevm";
import { FhevmInstance } from "fhevmjs";

describe("ConfidentialAuction", function () {
  let contract;
  let instance: FhevmInstance;

  before(async function () {
    const signers = await getSigners();
    instance = await createFhevmInstance();
    const Contract = await ethers.getContractFactory("ConfidentialAuction");
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("should handle encrypted bids correctly", async function () {
    const bid1 = 10;
    const bid2 = 20;
    const bid3 = 15;

    const encryptedBid1 = await instance.encrypt_uint32(bid1);
    const encryptedBid2 = await instance.encrypt_uint32(bid2);
    const encryptedBid3 = await instance.encrypt_uint32(bid3);

    await contract.bid(encryptedBid1);
    await contract.bid(encryptedBid2);
    await contract.bid(encryptedBid3);

    await contract.revealWinner();

    const highestBid = await contract.highestBid();
    const decryptedHighestBid = await instance.decrypt(highestBid);

    expect(decryptedHighestBid).to.equal(bid2);
  });
});
