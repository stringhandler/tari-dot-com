---
layout: lesson
title: Signing a Message
date: 2020-04-20 12:00
author: Cayle Sharrock
thumbnail: learn-signing-a-message.png
lead: Let's sign a message with our private key 🔐
subtitle: 
class: subpage
---

For details on the mathematics behind digital signatures,
[Tari Labs University](https://tlu.tarilabs.com/cryptography/digital_signatures/introduction_schnorr_signatures.html)
has a good introduction.

For now let's have Alice sign a message and have Bob verify that it is from her.

Let's assume that Alice has published her public key as `42b0c615e38cc7deaf574fd7127c8c58a3e654137415feb59770f3c110dca378`.

{% include rustpen.html code="sign.rs" %}

{% include spoiler.html id="signature" content="Alice's public key is `42b0c615e38cc7deaf574fd7127c8c58a3e654137415feb59770f3c110dca378`
Alice sends the message and signature to Bob:  
msg: `Hello, Bob.`  
sig: `97938897220dcff9016af881d547d1ba1ef07b8465b1885f183c3872e142f40e`, `8e1cfbb2973d9d5b52e84816a78f6adc876b91d31cde7ea9cd16f1093927be4a`  
The message is signed by Alice
" %}
