import { FHEClient } from '@zama/fhevm-sdk';
import { ethers } from 'ethers';

#Use this snippet to submit bids:
async function sendBid(amountWei) {
  const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
  const signer = provider.getSigner();
  const client = new FHEClient(provider, signer);
  const encrypted = await client.encryptUint(amountWei);
  const tx = await contract.bid(encrypted.ct, encrypted.proof);
  await tx.wait();
}
#To reveal and decrypt:
async function revealAndDecrypt() {
  await contract.revealWinner();
  const highestEncrypted = await contract.getEncryptedHighestBid();
  const plain = await client.decryptUint(highestEncrypted);
  console.log("Winning bid:", plain.toString());
}
