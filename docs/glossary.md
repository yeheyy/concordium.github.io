---
id: glossary
title: Glossary of Concordium Terms
sidebar_label: Glossary
slug: /glossary
---

See also our [whitepaper](https://concordium.com/wp-content/uploads/2020/04/Concordium-White-Paper-Vol.-1.0-April-2020-1.pdf) for more details on the terms described below.

### Account
An addressable store of funds on the blockchain.
An account is associated with one or more _account keys_ that can be used to authorize transactions originating from the account, as
well as with an [encryption key](#encryption-key) that can be used to send encrypted transfers to the account.
An account is also associated with the account holder's [identity](#identity), although this association is encrypted for anonymity.
This anonymity can only be revoked by anonymity revokers, in cooperation with the account's [identity provider](#identity-provider).

### Attribute
User data, such as date of birth or country of residence, that is associated with a user [identity](#identity).
Users can choose which attributes should be revealed in each of their accounts.

### Baker
A node that participates in the production of [blocks](#block), referred to as _baking_.

### Best block

Last block on the [best chain](#best-chain).

### Best chain

The chain a [baker](#baker) will build upon when making a new block.
The best chain selection procedure is determined by the consensus protocol.
In particular, the best chain has the most [finalized](#finalization) blocks, and the most blocks after the last finalized block.

### Block
The basic unit of the blockchain, which is produced by a [baker](#baker).
A block contains a (possibly empty) list of [transactions](#transaction), and has a pointer to a previous block (with the exception of the [genesis block](#genesis-block)).
A block and its predecessors form a chain, and the sequence of transactions they contain form a ledger.
Each block has a [slot time](#slot) that records when it was baked.
A block also contains information relating to consensus, for instance establishing which baker created the block, and that the baker was entitled to do so.

### Catch-up
The mechanism by which a node receive messages that may have been missed, for instance because the node was offline when it was sent.

### Chain
A sequence of [blocks](#block), starting from the [genesis block](#genesis-block), in which each successive block points to the predecessor.
There may be multiple valid chains, and the [consensus](#consensus) protocol establishes which chain is authoritative.

### Consensus
The process by which nodes agree which [transactions](#transaction) have occurred and in what order.
This consists of [baking](#baker) and [finalization](#finalization).

### Decryption key

Dual to [encryption-key](#encryption-key).
In contrast to the encryption key, which is public, this key is only known to the account holder.

### Encrypted amount

An amount of [GTU](#global-transaction-unit-gtu-) that is encrypted with the public key of an account.
Only the owner of the secret key can determine how many GTUs are contained in the encryption.

### Encryption key

An [ElGamal](https://en.wikipedia.org/wiki/ElGamal_encryption) public key associated to an account which is used to encrypt all [encrypted amounts](#encrypted-amount) on the account.

### Epoch
A time period consisting of multiple [slots](#slot) (on the testnet, an epoch lasts for approximately one hour).
At the start of each epoch, we compute a [leadership election nonce](#leader-election)
based on the block nonces of the previous epoch. The leadership election nonce is valid for the duration of the epoch.

### Finalization
The process by which a block is marked to be "finalized", i.e. part of the authoritative [chain](#chain).
Transactions that are part of finalized blocks are considered authoritative.
New blocks can be only added following the last finalized block.
The finalization process is conducted periodically by the bakers with [delegated stake](#stake-delegation) at least 0.1% of the total stake in the system.

### Genesis Block
The first [block](#block) in a [chain](#chain).
The genesis block establishes the starting state of the chain, before any transactions have occurred.

### Global Transaction Unit (GTU)
The currency of the Concordium blockchain. GTU can be used for multiple purposes:
- as a form of payment between users via transactions,
- as a payment for executing smart contracts,
- as a store of value,
- as a reward for honest behaviour (e.g. [baking](#baker) or [finalizing](#finalization) blocks on top of the longest chain),
  to incentivize blockchain users.

The smallest subdivision of GTU is the µGTU (micro GTU), with 1 GTU = 1,000,000 µGTU.
This means that GTU amounts are given with up to six decimal places of precision.

### Identity
Before opening an account on the Concordium Platform, one's real-world identity must be verified and recorded by an
[identity provider](#identity-provider).
A user’s identity is anonymous on-chain, however this anonymity can be revoked and their real-world identity revealed in
response to a valid request from a government authority.

### Identity Issuer
See [identity provider](#identity-provider).

### Identity Provider
A person or organization that performs off-chain identification of users.
Users are required to obtain an identity object from an identity provider in order to open an account on the Concordium Platform.

### Leader Election
To check whether a given [baker](#baker) has won in a given [slot](#slot), the baker uses the slot number and the _leadership election nonce_ to compute a value _r_.
The leadership election nonce is a random value that is periodically updated to prevent parties from predicting too far into the future when they will win.
A baker wins if the value _r_ is below a certain threshold, which depends on the baker’s [lottery power](#lottery-power) and a common difficulty parameter _f_.
The [winning probability](#winning-probability) is roughly proportional to the baker's stake, and higher difficulty parameters decrease the winning probability for all parties.

### Lottery Power
A baker's lottery power is its relative stake and is therefore proportional to the [stake](#stake-delegation) that is delegated to it. The lottery power is updated each [epoch](#epoch),
and is based on the stake distribution at the end of the epoch before last.
(This delay ensures that the stake distribution is determined before the randomness that fixes the bakers for the epoch:
otherwise, stakeholders might redistribute their stake to luckier bakers, which undermines the security of the system.)

### Mainnet

The main Concordium network which is expected to launch in early 2021.
The mainnet will receive periodic upgrades, but in contrast to the [testnet](#testnet),
it will never be reset, and accounts created on the mainnet will remain indefinitely.

### Node
A participant in the Concordium network.
Nodes receive blocks and transactions, and track the current state of the blockchain.
A [_baker node_](#baker) has cryptographic keys that enable it to take part in baking and [finalization](#finalization).
A node without these keys is referred to as a _passive node_.

### Nonce
May refer to:
- *Block Nonce*: a randomized value included by the [baker](#baker) in each [block](#block), and used to determine the leadership election nonce.
- *Leadership Election Nonce*: a randomized value that is updated each [epoch](#epoch) that is used to seed the [leader election](#leader-election) process.
- [Transaction sequence number](#transaction-sequence-number) (same as account sequence number)

### Off-chain

Refers to activities outside of the Concordium blockchain. Some on-chain actions need preliminary actions off-chain, for example
to create an account on the Concordium blockchain the user must first work with an identity provider, e.g., via their website
or mobile application, to obtain a specific digital certificate. We refer to this certificate as the **identity**.

### On-chain

Refers to an an event or activity that is propagated through the Concordium network and recorded on the Concordium blockchain.
The recording can be explicit or implicit as part of the consensus protocol.
An example of the former is a transaction such as a GTU transfer, an example of the latter are the rewards given out to, e.g., bakers.

### Shielded balance

The part of the balance of an [account](#account) that only the owner of the account can see.
This is achieved by encrypting transfers to an account with the account's [encryption key](#encryption-key).
Every participant of the Concordium network can see the [ciphertexts](https://en.wikipedia.org/wiki/Ciphertext) of all the transfers, however they provide no information on how many GTUs were transferred.
The receiver of the transfer can use their secret key to decrypt the ciphertexts, and seeing how many GTUs they have received.

For technical reasons the shielded balance of the account consists of two parts, the "self balance" and the "incoming encrypted amounts".

#### Self balance

This is a single encrypted amount that is updated each time the account performs and encrypted transfer, [shielding](#shielding), or [unshielding](#unshielding).
Only the account itself can update this value.

#### Incoming encrypted amount

This is a list of encrypted amounts that is extended each time an account receives an encrypted transfer.
When the account makes an encrypted transfer it can use a number of encrypted amounts from this list as inputs to the transfer.

### Shielding

The action of transferring a part of the public balance to the [shielded balance](#shielded-balance).

### Slot
In the blockchain, time is divided into equally sized units called _slots_. On the testnet the duration of slot is one second. In every slot,
each baker checks locally whether they won the lottery, which entitles the winner to bake a block in that slot.
Zero, one, or multiple bakers can win the lottery. The probability of these different events is controlled by the difficulty parameter _f_.
For example, with difficulty 0.5 on average every second slot will have a lottery winner.

### Stake Delegation
The association between [accounts](#account) and [bakers](#baker) that determines the stake associated with a baker, and hence its relative power in the [consensus mechanisms](#consensus).
Each account may delegate its stake to any baker, and the stake of a baker is the sum of the funds of the accounts that delegate to it.
This delegation confers power to the baker, and therefore an account holder should trust the delegate baker to act honestly.
Delegating the stake does not affect that account holder's ability to use the funds on the account, and does not give the baker control over the account.

### Testnet

A test network run by Concordium to test its protocols and software.
There can be several test networks in existence at the same time.
All the features are tested on the testnet before they are released on the [mainnet](#mainnet).

### Transaction
An atomic operation that defines a change of state in the ledger, such as transferring funds from one account to another.
A transaction typically has a sender account and a [transaction sequence number](#transaction-sequence-number), and incurs a fee.
The sender account must sign the transaction to authorize it.
(The exception to this is a credential deployment transaction that creates a new account, which does not have a sender account.)

### Transaction Sequence Number
A sequence number that orders [transactions](#transaction) on a given [account](#account).
In a ledger, all transactions for an account must be ordered with consecutive transaction sequence numbers, starting from 1.
Transaction sequence numbers ensure that a transaction cannot be repeated in the ledger, and that the transactions occur in the order intended by the sender account holder.

### Unshielding

The action of transferring a part of the [shielded balance](#shielded-balance) to the public balance.

### Winning probability
The winning probability is the probability that a baker wins in a given slot. The probability is _1-(1-f)<sup>&alpha;</sup>_,
	where _f_ is the difficulty parameter and _&alpha;_ is the [lottery power](#lottery-power).
