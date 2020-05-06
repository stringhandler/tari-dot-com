---
layout: lesson
title: Working with Emoji Id
date: 2020-04-22 12:00
author: Cayle Sharrock
thumbnail: learn-emoji-id.png
lead: Emoji Ids are a unique Tari feature we know you'll love
subtitle: 
class: subpage
---
The `EmojiID` struct in the
[`tari_wallet` crate](https://docs.rs/tari_wallet) provides everything you need to work with Tari's Emoji ID. In this
tutorial, we will learn how to create an Emoji ID from a public key and vice versa. We will also validate an emoji ID
against transcription errors.


{% include rustpen.html code="emoji.rs" %}

{% include spoiler.html id="emoji"
content="🖖🥴😍🙃💦🤘🤜👁🙃🙌😱🖐🙀🤳🖖👍✊🐈☂💀👚😶🤟😳👢😘😺🙌🎩🤬🐼😎🥺
70350e09c474809209824c6e6888707b7dd09959aa227343b5106382b856f73a  
It's all good!"  
%}
