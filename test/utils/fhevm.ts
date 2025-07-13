import { ethers } from "hardhat";
import { FhevmInstance, createInstance } from "fhevmjs";

export async function getSigners() {
  return await ethers.getSigners();
}

export async function deployContract(contractName, ...args) {
  const Contract = await ethers.getContractFactory(contractName);
  const contract = await Contract.deploy(...args);
  await contract.deployed();
  return contract;
}

export async function createFhevmInstance(): Promise<FhevmInstance> {
  const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
  const signers = await getSigners();
  const network = await provider.getNetwork();
  const instance = await createInstance({ chainId: network.chainId, publicKey: signers[0].publicKey });
  return instance;
}
