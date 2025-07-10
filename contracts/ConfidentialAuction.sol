// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "fhevm/lib/FHE.sol";

contract ConfidentialAuction {
    euint public highestBid;
    address public highestBidder;
    bool public ended;

    mapping(address => euint) public bids;

    function bid(externalEuint encryptedBid, bytes calldata bidProof) external {
        euint bidValue = FHE.fromExternal(encryptedBid, bidProof);

        // Enforce highest bid selection without revealing amounts
        ebool isHigher = FHE.gt(bidValue, highestBid);
        highestBid = FHE.select(isHigher, bidValue, highestBid);
        highestBidder = FHE.select(isHigher, FHE.asEaddress(msg.sender), FHE.asEaddress(highestBidder));

        bids[msg.sender] = bidValue;

        FHE.allow(bids[msg.sender], msg.sender);
        FHE.allowThis(bids[msg.sender]);
    }

    function revealWinner() external {
        require(!ended, "Already ended");
        ended = true;
        FHE.allow(highestBid, address(this));  // allow decryption
    }

    function getEncryptedHighestBid() external view returns (euint) {
        return highestBid;
    }
}
