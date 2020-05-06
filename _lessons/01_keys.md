---
layout: lesson
title: Introduction to Keys
date: 2020-04-11 12:00
author: Cayle Sharrock
thumbnail: learn-intro-to-keys.png
lead: A lot of cryptocurrency is built on top of public and private key infrastructure.
subtitle: 
class: subpage
---

The [tari_crypto](https://docs.rs/tari_crypto) crate carries the fundamental Tari cryptography primitives. It wraps the
Ristretto elliptic curve, and provides ergonomic methods for using private and public keys, Pedersen commitments  and
digital signatures.


{% include rustpen.html code="keys.rs" %}

{% include spoiler.html id="key" content="bec7f50a7307aff31eef64789bcd50e996e4b16b9f974cabef4800add830392f" %}
