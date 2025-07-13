import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "fhevm/hardhat";

const config: HardhatUserConfig = {
  solidity: "0.8.26",
  networks: {
    fhevm: {
      url: "http://127.0.0.1:8545",
    },
  },
};

export default config;
