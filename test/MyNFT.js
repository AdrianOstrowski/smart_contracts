const { expect } = require("chai");

describe("MyNFT (paid with OSTR)", function () {
  it("User can mint NFT by paying OSTR tokens", async function () {
    const [owner, user] = await ethers.getSigners();

    // Deploy ERC20
    const Token = await ethers.getContractFactory("MyToken");
    const token = await Token.deploy();

    // Mint OSTR to user
    await token.mint(user.address, 100);

    // Deploy NFT
    const NFT = await ethers.getContractFactory("MyNFT");
    const nft = await NFT.deploy(await token.getAddress(), 10);

    // Approve payment
    await token.connect(user).approve(await nft.getAddress(), 10);

    // Mint NFT
    await nft.connect(user).mint();

    expect(await nft.ownerOf(0)).to.equal(user.address);
  });
});

