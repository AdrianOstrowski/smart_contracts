# Smart Contracts – Zaliczenie

Projekt zaliczeniowy polegający na deploymencie dwóch smart kontraktów
(ERC-20 oraz ERC-721) na testnet EVM wraz z testami i weryfikacją kodu
w eksploratorze blockchain.

---

## Network
- **Testnet:** Sepolia (Ethereum)
---

## ERC-20 Token

- **Name:** OSTR
- **Symbol:** OSTR
- **Standard:** ERC-20
- **Utility:** Token użytkowy służący do mintowania NFT

**Contract address:**  
`0xb6A87D6F8462a53956B166B0ECe7f59a3ebC4B3f`

**Explorer:**  
https://sepolia.etherscan.io/address/0xb6A87D6F8462a53956B166B0ECe7f59a3ebC4B3f

---

## ERC-721 NFT

- **Name:** OSTR NFT
- **Symbol:** ONFT
- **Standard:** ERC-721
- **Mint price:** 100 OSTR

**Contract address:**  
`0x96370a17Dd203AeDBdE2E25d56f8755A3197a431`

**Explorer:**  
https://sepolia.etherscan.io/address/0x96370a17Dd203AeDBdE2E25d56f8755A3197a431

---

## Tests

Projekt zawiera podstawowe testy jednostkowe:
- test mintowania tokenów ERC-20
- test mintowania NFT po zapłacie tokenami ERC-20

---

## Deployment

Kontrakty zostały wdrożone przy użyciu **Hardhat** na testnet **Sepolia**.
Kod smart kontraktów jest zweryfikowany w eksploratorze Etherscan.
