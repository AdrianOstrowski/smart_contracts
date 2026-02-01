async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with:", deployer.address);

  // ERC-20
  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy();
  await token.waitForDeployment();

  // ERC-721
  const NFT = await ethers.getContractFactory("MyNFT");
  const nft = await NFT.deploy(await token.getAddress(), 100);
  await nft.waitForDeployment();

  console.log("OSTR Token deployed to:", await token.getAddress());
  console.log("OSTR NFT deployed to:", await nft.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

