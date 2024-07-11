require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "ganache",
  networks: {
    hardhat: {},
    ganache: {
      url: 'http://127.0.0.1:7545',
      chainId: 1337,
      from: `0xBBa01D04472709990D41A8493D5fDbc8E5cEd9F6`,
      gas: 3000000
    }
    // sepolia: {
    //   url: `${process.env.SEPOLIA_URL}`,
    //   accounts: [`${process.env.PRIVATE_KEY}`]
    // }
  }
};
