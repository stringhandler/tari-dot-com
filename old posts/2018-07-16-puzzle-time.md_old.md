---
layout: post
title: "The Tari launch puzzle: REVEALED!"
#subtitle: 
date: 2018-07-16 13:00
author: Cayle Sharrock
thumbnail: assets/img/posts/puzzle_lock.png
lead: The idea behind the Tari 15 XMR giveaway, and how it was solved.
class: subpage
---

## Genesis Block

The week before the Tari website launch, we were brainstorming ways of 
adding something unique to the site. Naveen suggested an easter egg hidden in the page source.
So we did that. And then I came up with the idea for a five layer scavenger hunt with a Monero bounty ($3000 at launch time)
 for the puzzle slayer with the tenacity (and luck) to see it to the end.

Augustus Baggins was that hero. 

In a tell-all blog post, Augustus reveals how he solved the puzzle. He shares the highs. The lows.
The tears of frustration. The midnight incantations against Tari devs and all that is holy. And finally,
vindication. 

Are you **ready, player one**? Then read on! But first, this:

[![RICKROLL!](http://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](http://www.youtube.com/watch?v=dQw4w9WgXcQ)

## Block 1

To be honest, I had no idea how difficult to make the puzzle. My biggest fear was
that the nascent Tari community, being brimful of genius types, would find and solve the puzzle
before our shiny new website was even unwrapped. So I erred on the side of "challenging"
and figured I could always drop hints to help folks on their way. As it turned out, it took
5 weeks and several rounds of hints before the prize was claimed.

The first clue was to stick a message in the [Tari website source code](https://tari.com/about):

```
0dc:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:lxOKNWMMMMMMMM
WNXK0kxdol::;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:ldk0NWMMMM
MMMMMMMMWNX0Okxdlc::;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cox0XW
MMMMMMMMMMMMMMMWNXK0Oxdolc:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;co
MMMMMMMMMMMMMMMMMMMMMMMWNXK0kxdol::;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNX0Okxxdlc:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXK0Oxdolc:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
kO0KXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNK0Okdolc::;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;:clodkO0KXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXKOkxdlc:;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;::cldxkO0XNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNK0Okdolc:;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;::cdKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXK0kxdoc:;;;;
;;;;;;;;;;;;;;;;;;;;;c0MMMMMMMMMMMWNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXKOkx
;;;;;;;;;;;;;;;;;;;;;c0MMMMMMMMMMMKlclodxk0KXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
;;;;;;;;;;;;;;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;:cldxkOKXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
;;;;;;;;;;;;;;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;:clodxk0KXNWMMMMMMMMMMMMMMMMMMMMMMM
;;;;;;;;;;;;;;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;;;;;:clodxO0KXWMMMMMMMMMMMMMMMM
;;;;;;;;;;;;;;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:cldxkO0XNWMMMMMMMM
;;;;;;;;;;;;;;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:codxkOKXNW
;;;;;;;;;;;;;;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:dKW
;;;;;;;;;;;;;;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cx0WMM
;;;;;;;;;;;;;;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:okXWMMMM
;;;;;;;;;;;;;;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cx0WMMMMMMM
kc;;;;;;;;;;;;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:oOXWMMMMMMMMM
WKd:;;;;;;;;;;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cxKWMMMMMMMMMMMM
MMW0o:;;;;;;;;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:oOXWMMMMMMMMMMMMMM
MMMMNOl;;;;;;;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;;;;;;;;;;;lxKWMMMMMMMMMMMMMMMMN
MMMMMMNkc;;;;;;;;;;;;:0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;;;;;;;;:oONMMMMMMMMMMMMMMMMWXko
MMMMMMMWXxc;;;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;;;;;;lxKWMMMMMMMMMMMMMMMMN0dc;;
MMMMMMMMMWKd:;;;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;;;:dONMMMMMMMMMMMMMMMMWXkl:;;;;
MMMMMMMMMMMW0o:;;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;;;;lkKWMMMMMMMMMMMMMMMMN0dc;;;;;;;
MMMMMMMMMMMMMNkl;;;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;;;;cdONMMMMMMMMMMMMMMMMWXkl:;;;;;;;;;
NMMMMMMMMMMMMMWXxc;;;c0MMMMMMMMMMMKl;;;;;;;;;;;;:lkKWMMMMMMMMMMMMMMMMN0dc;;;;;;;;;;;;
o0WMMMMMMMMMMMMMWKd:;c0MMMMMMMMMMMKl;;;;;;;;;;cd0NMMMMMMMMMMMMMMMMWKkl:;;;;;;;;;;;;;;
;:dKWMMMMMMMMMMMMMW0oc0MMMMMMMMMMMKl;;;;;;;:lkXWMMMMMMMMMMMMMMMMN0dc;;;;;;;;;;;;;;;;;
;;;cxXWMMMMMMMMMMMMMN0XMMMMMMMMMMMKl;;;;;cd0NMMMMMMMMMMMMMMMMWKkl;;;;;;;;;;;;;;;;;;;;
;;;;;ckNMMMMMMMMMMMMMMMMMMMMMMMMMMKl;;:lkXWMMMMMMMMMMMMMMMMNOd:;;;;;;;;;;;;;;;;;;;;;;
;;;;;;:lONMMMMMMMMMMMMMMMMMMMMMMMMKddk0NMMMMMMMMMMMMMMMMWKxl;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;:o0WMMMMMMMMMMMMMMMMMMMMMMWNWMMMMMMMMMMMMMMMMMNOd:;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;:dKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKxl;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;ckXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOo:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(c) 2018. With ❤ From Tari. 4ATarimB5qPfZgCoLAZ6TRA2oNoLvcFGXBSjHyJaRupx7Kf2GLTe4rwEW
```

The website launched. After 24 hours no-one had spotted the clue. Or if they had, didn't think 
anything of it. After about a week, we started dropping some hints. Slowly, the penny dropped.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Sweet hidden gem on your site! 
<a href="https://twitter.com/tari?ref_src=twsrc%5Etfw">@tari</a>
<a href="https://t.co/PDtJHpcJt6">pic.twitter.com/PDtJHpcJt6</a></p>&mdash; Raymond Prince (@sXpher) 
<a href="https://twitter.com/sXpher/status/1004268443863003136?ref_src=twsrc%5Etfw">June 6, 2018</a>
</blockquote>


While some eagle-eyed community members noticed the vanity monero address in the ascii art, it took a while before someone
tried typing [https://tari.com/4ATarimB5qPf...](https://tari.com/4ATarimB5qPfZgCoLAZ6TRA2oNoLvcFGXBSjHyJaRupx7Kf2GLTe4rwEWiPhKpagYxXkupFNzaURDEEfKVegS9oSTaJp8a3)
into their browser. Most of those that did simply thought they were rickrolled, had a chuckle and closed their browsers. 
But a handful saw this black-on-black text:

```
Amount: XMR 14.999999999918
Come and get it.
```

Augustus Baggins relates:

{:.letter}
The first steps were the hardest ones: from discovering a Monero address below the hidden ascii art to getting rick-rolled 
to getting to the very first set of questions. Luckily, these steps were discussed in the Telegram group with active 
participation from [Cayle], so we managed to get through them.

## Block 2

After about 2 weeks, the community knew something was up, but couldn't find the next step. I don't blame them, it was 
pretty evil: [https://www.tari.com/nevergonnagiveyouup/](/nevergonnagiveyouup). Things didn't improve from there.

![screenshot1](/img/posts/screen1.png)

As Augustus Baggins admits:

{:.letter}
When I saw the first set of questions - I gave up almost immediately. There was no information about the limited 
dictionary back then and the questions were too vague. So I patiently waited for the hints...

{:.letter}
When they arrived, I actually only used two: 1) that the answers come from a fairly small dictionary and 
2) the "polymer" hint [ed: an additional hidden hint for clue 4]. "Polymer" meant that the Morse code is most probably limited 
to characters "C", "H" and numbers. 
After that it was possible to decode the message as "CH2=C(CH3)CH=CH2", which Google suggested to be "isoprene", 
which Wikipedia suggested to be just "rubber". 

{:.letter}
The only mnemonic word list with this word I have found was the standard BIP39 English list.

Bam! This is the key insight that everyone solving the puzzle would need. Most modern Bitcoin wallets use
a set of _seed words_ that come from the same set of just 2048 words: The [BIP39 English list](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

Augustus then quickly inferred that _every riddle's answer would need to come from this list_. This cut the number
of possible answer combinations from infinity to some very large number. But it was a start! Augustus then tried to
reduce the number of possible answer combinations. 

{:.letter}
Ok, now I was relatively sure that I got the fourth question. My starting guess-list for the first question was 
['general', 'motor', 'auto', 'car']. For the second one: ['zero', 'ice', 'water']. For the third one: ['oak', 'tree']. 
I honestly had no idea about five and six, so I decided right away that they need to be brute-forced.

{:.letter}
Quite soon I realized that this combination does not work, so some of my candidates should have been completely wrong. 
I replaced them one by one with a full word list, which exploded my search from minutes to hours on my old laptop. 
But within a day or two I got the answers: ['general', 'north', 'oak', 'rubber', 'park', 'patient'].

{:.letter}
The first answer was kind of boring, which is totally ok for the very first question. 
The second one was tricky, but I liked it when I saw the answer. 

I thought that this would be immediately obvious. Maybe my years in Boy Scouts conditioned me to think zero degrees
is north.

{:.letter}
The third and fourth were logical and very exciting to solve. Five and six - well, I still have no idea if it was at 
all possible to solve them.

Number 5 stumped everybody. The full clue was: `Bronze in Korea. It was Williams in England.`.
Bronze is third. I guess that nobody googled quite the right combination of "third", "williams", "england" and
 "surname" to find an article
similar to [this one](https://www.independent.co.uk/news/uk/home-news/the-25-common-surnames-britain-family-history-university-west-england-bristol-uk-a7423196.html).

From there, one would need to find the [third most common surname in Korea](https://en.wiktionary.org/wiki/Appendix:Korean_surnames): Park.

A step too far? Maybe.

Number 6 was originally intended to be solved exactly as Augustus did: By brute force. The Monty Python clip says about
Number 6, "there is no.. number 6". If you had all 5 other words (or even 4), one could try all 2048 (or 4 million)
and see if you matched the hash given in the hints.

Later on, I decided to give a more explicit hint. But I think it just confused everyone more. Anyway, here's the clue:

`Content to wait for medical attention`

And the answer? 'Content' is a synonym for 'patient'. And someone waiting for medical attention? Also a patient. Good ol'
cryptic crossword puzzle clues.

## Block 3

Augustus Baggins continues:

{:.letter}
When I had time to look at the second set of questions - there were already some first hints, so it was easy to start.

![Screenshot 2](/img/posts/screen2.png)

{:.letter}
The first one was to "invert" a hash, which gave me the word 'push'. Easy, but still interesting. The second one was to 
translate a word from Afrikaans - I am wondering if I could have solved it without a hint, it would probably have been 
more fun. The fifth one was hilarious, I laughed a lot when I realized it was 'mandate'.

I'm glad you enjoyed it. I knew I wanted the clue to be two images: one representing 'man', and the other, 'date'.
When I googled for pictures of dates, I imagined two men holding hands or something, but the moment I saw this picture
I knew I had struck gold. It was perfect-- it matched the first picture visually and threw people off the scent 
by appearing to be, uh, something else entirely.  

{:.letter}
From there I could have already brute-forced the rest, but there were too many hashes starting with `df8...`

This wasn't an accident. By this point I knew brute forcing would be in everybody's arsenal and I wanted 
to make it tough to start searching with only 2 or 3 words.

{:.letter}
and I was too lazy to read through all of them to see which fits. So I decided to tackle more questions. 

See? it worked ;)

{:.letter} 
For the fourth one, I had a random thought that this could be 'patient' again, but I decided to look at the XOR one.

{:.letter}
I must say that this one was the most fun, I really appreciate the effort put in its preparation. Initially I thought 
that the key needs to be three characters to nicely align with the encoded input. But in the Telegram group someone 
mentioned that this was not true. So I have brute-forced over four characters, limiting the decoded message to be 
human-readable. In hindsight, I could have guessed that the key is 'tari', but I arrived there the long way around.

Awesome work. I think this was the most labour-intensive clue to solve, but I wanted to have at least one clue in the puzzle
that involved real code-breaking. This is a crypto-puzzle after all!

{:.letter}
The second set of answers I got that matched `df8...` and reasonably corresponded to the questions: ['push', 'wait', 
'vote', 'patient', 'mandate', 'debate']. The more boring one was 'vote', but overall this page was the most exciting one.

{:.letter}
We also had to encode some mission to get to the next page. I took Tari mission from the website and from the puzzle 
page and augmented it with different capitalizations and punctuation before encoding. I was quite surprised to discover 
that two text variations (with and without a dot in the end) lead to two different pages, but decided to discard the one
with fewer questions.

After one of the first set of hints, I decided to put the last 12 clues on a single
 page (rather than over two pages), but I left the original pages in place, as easter eggs, which several folks found.
 Mystery solved.
 
## Block 4

{:.letter}
The final page had 12 questions. I like that this was much harder to brute-force knowing only half the answers, 
and it forced me to aggressively limit the candidates to check.

![Final Puzzle Page](/img/posts/screen4.png)

{:.letter}
I again only started looking after the first round of hints. My initial thoughts were: the first should be 'ten', 
the third should be 'pride', the seventh should be either 'left' or 'wrong', the last one should be 'abstract' 
(I laughed almost as hard as when I got 'mandate' :)

Close. The first answer is 'carry', as in 'carry the one'.

{:.letter}
After some research, I additionally thought that the second should be 'museum' (though I was confused by a broken 
coordinate converter at first) 

This is actually the clue I most enjoyed making. The numbers are geographical co-ordinates in the UTM system, which,
if you convert to Latitude-Longitude and type into Google Maps, takes you here:

![Apartheid Museum](/img/posts/screen3.png)

The Apartheid Museum. 'Museum' is in the word list and is the answer for number 2. **Side note:** The Apartheid Museum is 
 an absolute must-see if you're ever in Johannesburg. It presents this dark period of South Africa's history poignantly
 and objectively. Come and visit. You will be moved.
 
{:.letter} 
[I decided that] the tenth should be 'sound'. I was less sure about the fifth, but I decided to try 
either 'want' or 'alone' (sixth song from the "Glass Houses" album) or 'weekend' or 'all' (sixth word from the song 
"You May Be Right"). These questions were very engaging.

Correct. Faulkner's fourth novel was _The sound and the fury_. And Simon and Garfunkel's most famous hit was _The sound
of silence_, 'sound' being the common word.

There was an additional hidden clue for number 5, which would tell you that the image of a glass house referred to 
something related to Billy Joel. The 6th word of the 6th track on the Glass Houses album was 'alone'. By the way, it's
a great album. 

{:.letter}
I tried multiple versions of candidate lists for some of the other questions. For example I tried 
['book', 'text', 'novel', 'poem', 'paper', 'script', 'diary'] for the fourth question, or 
['yard', 'inch', 'foot', 'small', 'tiny', 'large', 'huge'] for the eighths. 

{:.letter}
I tried 'service' for the sixth, 'picture' for the ninth, everything related to time for eleventh.

{:.letter}
But nothing worked until we got the last hint in a form of a crossword, and this is when it all became crystal clear. 
This was super fun: trying to guess a word, rethinking all the previous hypotheses, brute-forcing some answers with newly 
discovered limitations. I immediately realized that my major culprit was the word 'ten' [clue 1], which I was so sure about. 
And I was a bit disappointed in myself for not thinking about 'essay' (yeah, I was too lazy to read all 2048 words).

{:.letter}
The 12 words that finally worked were: ['carry', 'museum', 'pride', 'essay', 'alone', 'service', 'wrong', 'length', 'ancient', 'sound', 'install', 'abstract'].

{:.letter}
I liked most of the problems on this page a lot, but I think 'essay' was a bit boring, and I still have no idea why the 
answer to the three pictures is 'ancient'. Extra kudos for trolling ETH :)

The hidden clue for #10 was: `A 7-letter synonymn for these hieroglyphs`. If you google "hieroglyphics", [the first link](https://www.natgeokids.com/za/discover/history/egypt/hieroglyphics-uncovered/)
has a hieroglyphic "dictionary", A lasso is O, a lion is L, and hand is D. OLD, or ancient. The first word in the article is also 
"ancient", but that's just coincidence.

## Block 5 - Cracking the private key

Augustus explains how he solved the last piece of the puzzle:

{:.letter}
I was almost ready to get back to work, when [Cayle] gave another hint:

{:.letter}
It's not a valid bip39 mnemonic. One thing I will say is that regardless of what the private key was, the last word would 
always start with an A. Because `11*24 > 256`.

{:.letter}
That was a huge boost. We have 24 words, Monero private key is 256 bits, 11 is the number of bits required to encode 
2048 numbers (the number of words in the list), and the "last word" part hints at inverted word order.

Exactly. Or to put it another way, think in terms of _encoding_ instead of _decoding_. Starting with the private key
and popping off the leading 11 bits to get each word, after 23 words, you'll be left with 3 bits, which will always be a 
number less than 8. And the first 8 words of BIP39 all start with 'a'.

{:.letter}
For every word I got its order in the BIP39 word list, converted to 11 bits in binary, concatenated in inverse order, 
converted the result to hex, and got something that looks like a private key. This was fun, especially realizing that 
there are many more people trying to solve it at the same time.

{:.letter}
To check if that was actually a private spend key, I went to [a block explorer](https://xmr.llcoins.net/), opened a developer console and 
simply verified that `sc_reduce32(cn_fast_hash(sec_key_to_pub(private_spend_key)))` is equal to the private view key from 
the very first page of the puzzle.

{:.letter}
The rest is history...

{:.letter}
Thanks to the Tari labs and especially [Cayle] for this very cool puzzle and good luck with the project!

From Tari's side, congratulations to Augustus Baggins for sticking with it! For everyone else that got close, 
I hope you enjoyed it, even though you missed the prize. It's my sincerest hope that everybody learned something 
about how private and public keys work in cryptocurrencies. 

For those that missed out, all the puzzle pages are still there, so go and check them out. 

We're already working on the next puzzle, which will be even more fun, and something completely different, so join
our [telegram group](https://t.me/tariproject) to catch any announcements.

We're hiring! If you're feeling FOMO and want to be part of the fun at Tari, check out our [available openings](https://www.tari.com/contribute/)

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
