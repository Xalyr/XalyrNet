const { ethers } = require("hardhat");

async function main() {
    const AIModelNFT = await ethers.getContractFactory("AIModelNFT");
    const nft = await AIModelNFT.deploy();
    await nft.deployed();
    console.log("AIModelNFT deployed to:", nft.address);

    const XLYRToken = await ethers.getContractFactory("XLYRToken");
    const token = await XLYRToken.deploy();
    await token.deployed();
    console.log("XLYRToken deployed to:", token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

