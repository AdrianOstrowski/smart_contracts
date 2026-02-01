const { expect } = require("chai");

describe("MyToken (OSTR)", function () {
  it("Owner can mint OSTR tokens", async function () {
    const [owner, user] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("MyToken");
    const token = await Token.deploy();

    await token.mint(user.address, 100);

    expect(await token.balanceOf(user.address)).to.equal(100);
  });
});

