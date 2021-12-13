// const { ethers } = require("ethers");
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`Deploying contracts with the account: ${deployer.address}`);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const nftContract = await hre.ethers.getContractFactory("NFTokenMetadataTestMock");
  let nftToken = await nftContract.deploy("Scribbles", "SCRBL");
  await nftToken.deployed();

  console.log(`NFT contract deployed to: ${nftToken.address}`);
}

main()
  .then( () => {
    console.log("NFT contract successfully deployed");
    process.exit(0);
  })
  .catch( error => {
    console.error(error);
    process.exit(1);
  });
