# 🔐 FHEVM Sealed-Bid Auction dApp

This project demonstrates a **confidential sealed-bid auction** smart contract using [Zama's FHEVM Protocol](https://docs.zama.ai/protocol). All bids are encrypted using **Fully Homomorphic Encryption (FHE)**, allowing private comparisons and selection of the highest bidder directly on-chain — without revealing any bid values.

## 🚀 Features

- 🛡️ Privacy-preserving bidding using homomorphic encryption
- ✅ Smart contract written in Solidity for the FHEVM
- ⚙️ Uses `fhevm-hardhat` for development and testing
- 🧪 Encrypted bid submissions and highest bid comparisons
- 🔓 Reveal stage to decrypt and display the winner

## 📦 Tech Stack

- Solidity + Hardhat  
- Zama FHEVM SDK  
- Dockerized local FHEVM testnet  
- Ethers.js (optional for front-end or scripts)

## 🧪 Local Development

### 1. Clone the repo and install dependencies:

```bash
git clone https://github.com/tyleraz/fhevm-auction-dapp.git
cd fhevm-auction-dapp
pnpm install
```

### 2. Start the local FHEVM chain:

```bash
pnpm fhevm:start
```

### 3. Compile contracts:

```bash
pnpm compile
```

### 4. Run tests:

```bash
pnpm test
```

## 🔐 How It Works

1. Users encrypt their bid amounts client-side using `@zama/fhevm-sdk`.
2. Encrypted values are submitted to the smart contract.
3. The contract compares encrypted values using FHE logic (`FHE.gt`, `FHE.select`).
4. Once the auction ends, the encrypted highest bid is revealed and decrypted.

## 📁 File Structure

```
fhevm-auction-dapp/
│
├── contracts/
│   └── ConfidentialAuction.sol
├── scripts/
├── test/
├── hardhat.config.ts
├── .env
└── README.md
```

## 📚 References

- [Zama Protocol Docs](https://docs.zama.ai/protocol)
- [FHEVM SDK](https://www.npmjs.com/package/@zama/fhevm-sdk)
- [Zama Litepaper](https://docs.zama.ai/protocol/zama-protocol-litepaper)

## 🧠 Use Cases

- Private auctions
- Encrypted on-chain gaming
- Confidential DeFi protocols
- Secure voting and DAO governance

## 📝 License

MIT

