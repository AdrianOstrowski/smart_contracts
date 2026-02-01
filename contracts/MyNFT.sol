// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MyNFT is ERC721 {
    IERC20 public paymentToken;
    uint256 public mintPrice;
    uint256 public tokenCounter;

    constructor(address _paymentToken, uint256 _mintPrice)
        ERC721("OSTR NFT", "ONFT")
    {
        paymentToken = IERC20(_paymentToken);
        mintPrice = _mintPrice;
    }

    function mint() external {
        require(
            paymentToken.transferFrom(msg.sender, address(this), mintPrice),
            "Payment failed"
        );

        _safeMint(msg.sender, tokenCounter);
        tokenCounter++;
    }
}

