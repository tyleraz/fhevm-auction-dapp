# 🔐 FHEVM Sealed-Bid Auction dApp

This project demonstrates a **confidential sealed-bid auction** smart contract using [Zama's FHEVM Protocol](https://docs.zama.ai/protocol). All bids are encrypted using **Fully Homomorphic Encryption (FHE)**, allowing private comparisons and selection of the highest bidder directly on-chain — without revealing any bid values.

---

## 🚀 Features

- 🛡️ Privacy-preserving bidding using homomorphic encryption
- ✅ Smart contract written in Solidity for the FHEVM
- ⚙️ Uses `fhevm-hardhat` for development and testing
- 🧪 Encrypted bid submissions and highest bid comparisons
- 🔓 Reveal stage to decrypt and display the winner

---

## 📦 Tech Stack

- Solidity + Hardhat
- Zama FHEVM SDK
- Dockerized local FHEVM testnet
- Ethers.js (optional for front-end or scripts)

---

## 🧪 Local Development

### 1. Clone the repo and install dependencies:

```bash
git clone https://github.com/tyleraz/fhevm-auction-dapp.git
cd fhevm-auction-dapp
pnpm install
