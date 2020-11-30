---
id: disclosures
title: Security Disclosures
sidebar_label: Security Disclosures
slug: /security/disclosures
---


This document outlines Concordium’s current security disclosure process & scope. We expect to expand this in future as we get closer to mainnet release in Q1 2021.

Concordium currently has no official bug bounty program. We may launch one with the open-source code release before mainnet.


## Responsible Disclosure

Our development team has up to 90 days to implement a fix based on the severity of the report.

Any researcher found publicly disclosing reported vulnerabilities without Concordium's written consent will have any allocated reward withdrawn.


## Submission Process

Until the launch of the bounty program, all Security Disclosures should be submitted to testnet@concordium.com with full details allowing our team to reproduce the issue independently and determine severity.


## Rewards

Currently, all eligible and in-scope disclosures (see definitions below) will be treated as a contribution under the Testnet Challenges program, with a discretionary bonus reward between GTU 2,500 - GTU 10,000 for submissions that meet the Eligibility requirements below.


## Eligibility

Generally speaking, any bug that poses a significant vulnerability to the security or integrity of the Concordium Network could be eligible for reward. However, it’s entirely at our discretion to decide whether a bug is significant enough to be eligible for reward.

In general, anything which has the potential for financial loss or data breach is of sufficient severity, including:

- Implementation bugs that can lead to financial loss
- Access to our production servers
- Unintended Remote Code Execution
- Protocol bugs
- Crash bug in Concordium Node (i.e. a bug that can crash the app by sending a special request, not by sending thousands requests).

The following reports are reported very often and will not be eligible:

- SPF/DMARC records
- CORS headers on endpoints meant to be accessible from other domains
- Issues with 3rd party services we use
- Vulnerabilities in 3rd party libraries without working exploits against our apps/servers
- Wordpress admins usernames disclosure

In general, the following would not meet the threshold for severity and are not eligible:

- Version disclosure
- Lack of security headers
- Cookies without the secure flag
- Recently disclosed 0-day vulnerabilities
- Vulnerabilities on sites hosted by third parties unless they lead to a vulnerability on the main website
- Vulnerabilities contingent on physical attack, social engineering, spamming, DDOS attack, etc
- Vulnerabilities affecting outdated or unpatched browsers
- Vulnerabilities in third party applications that make use of Concordium’s API
- Bugs that have not been responsibly investigated and reported
- Bugs already known to us, or already reported by someone else (reward goes to first reporter)
- Issues that aren't reproducible
- Issues that we can't reasonably be expected to do anything about

## In Scope

- Concordium Node software
- Concordium Mobile Reference Wallet (iOS / Android)
- Concordium Wallet Proxy Service

## Out of scope

Disclosures related to any of these will not be considered, unless impact to in-scope areas with relevant eligibility can be demonstrated.

- Concordium Node Dashboard UI
- Testnet GTU Drop service
- Testnet Stake Delegation service
- https://concordium.com/
- https://developers.concordium.com/
- https://dashboard.testnet.concordium.com/
- Any other non-public assets not mentioned above
