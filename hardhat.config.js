require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
const process = require("process");

const INFURA_API_KEY = process.env.INFURA_API_KEY;

const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

//const hardhat = require("hardhat");
task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs, hre) => {
    const balance = await hre.ethers.provider.getBalance(taskArgs.account);
    //const balance = "66666666666666";
    //console.log(ehters.formatEther(balance), "ETH");
    console.log(balance);
  });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
    /*hardhat: {
      chainID: 1337,
    },*/
  },
  etherscan: {
    apiKey: {
      sepolia: "3RYX4I2NCI1I2J2JSE2VJJ29VP8YXFWFVX",
    },
  },
};
