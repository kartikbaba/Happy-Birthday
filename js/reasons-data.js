(function() {
  const reasons = [
  {
    "id": 1,
    "emoji": "\ud83d\udcad",
    "reason": "You love me exactly the way I always imagined being loved."
  },
  {
    "id": 2,
    "emoji": "\ud83d\ude0d",
    "reason": "Your smile \u2014 it's the prettiest thing I've ever seen."
  },
  {
    "id": 3,
    "emoji": "\ud83e\udee0",
    "reason": "The way you laugh \u2014 I completely melt."
  },
  {
    "id": 4,
    "emoji": "\ud83c\udfb6",
    "reason": "Your voice is so sweet it stays in my head long after the call ends."
  },
  {
    "id": 5,
    "emoji": "\u2728",
    "reason": "You are beautiful in every single way."
  },
  {
    "id": 6,
    "emoji": "\ud83d\udc9b",
    "reason": "Your heart is pure gold \u2014 genuinely, not just as a phrase."
  },
  {
    "id": 7,
    "emoji": "\ud83d\udd4a\ufe0f",
    "reason": "You are innocent in a way that makes the world feel softer."
  },
  {
    "id": 8,
    "emoji": "\ud83e\uddf8",
    "reason": "Your childishness is the most adorable thing \u2014 you keep me young."
  },
  {
    "id": 9,
    "emoji": "\ud83d\ude02",
    "reason": "You are funny without even trying."
  },
  {
    "id": 10,
    "emoji": "\ud83d\udd12",
    "reason": "You are possessive of me, and honestly I love that."
  },
  {
    "id": 11,
    "emoji": "\ud83c\udf0a",
    "reason": "When you get angry, it's just a splash \u2014 never a storm \u2014 and even then you're cute."
  },
  {
    "id": 12,
    "emoji": "\ud83e\udd2f",
    "reason": "You love me so much it's almost unbelievable."
  },
  {
    "id": 13,
    "emoji": "\ud83c\udf38",
    "reason": "Your hair \u2014 everything about it is perfect."
  },
  {
    "id": 14,
    "emoji": "\ud83d\udc8b",
    "reason": "Your lips."
  },
  {
    "id": 15,
    "emoji": "\ud83e\udd70",
    "reason": "Your face \u2014 I could stare at it forever."
  },
  {
    "id": 16,
    "emoji": "\ud83d\udcab",
    "reason": "Everything about you physically is beautiful to me."
  },
  {
    "id": 17,
    "emoji": "\ud83c\udfe1",
    "reason": "You are family oriented \u2014 that matters more than most people know."
  },
  {
    "id": 18,
    "emoji": "\ud83d\ude4f",
    "reason": "You respect me, truly and genuinely."
  },
  {
    "id": 19,
    "emoji": "\ud83e\udd1d",
    "reason": "You respect everyone around you."
  },
  {
    "id": 20,
    "emoji": "\ud83e\udef6",
    "reason": "You care for me in a way I have never felt before."
  },
  {
    "id": 21,
    "emoji": "\ud83e\ude84",
    "reason": "Your warm touch \u2014 it's magic."
  },
  {
    "id": 22,
    "emoji": "\ud83c\udf1f",
    "reason": "You are magical, full stop."
  },
  {
    "id": 23,
    "emoji": "\ud83c\udf05",
    "reason": "You make ordinary days feel like something worth living."
  },
  {
    "id": 24,
    "emoji": "\ud83d\udcac",
    "reason": "You say 'I love you more' like you mean it every single time \u2014 because you do."
  },
  {
    "id": 25,
    "emoji": "\ud83e\udee7",
    "reason": "I melt when you are happy. Just watching you be happy is enough for me."
  },
  {
    "id": 26,
    "emoji": "\ud83c\udf3a",
    "reason": "You are great \u2014 as a person, as a partner, as everything."
  },
  {
    "id": 27,
    "emoji": "\ud83c\udfaf",
    "reason": "You make me feel wanted in a way no one else ever has."
  },
  {
    "id": 28,
    "emoji": "\u26a1",
    "reason": "You have matched my energy in ways I didn't even know I needed."
  },
  {
    "id": 29,
    "emoji": "\ud83c\udf6f",
    "reason": "Your sweetness \u2014 it never feels performed."
  },
  {
    "id": 30,
    "emoji": "\ud83d\udd25",
    "reason": "You are passionate about the people you love."
  },
  {
    "id": 31,
    "emoji": "\ud83d\udc8e",
    "reason": "You are honest with your emotions, even when they are big."
  },
  {
    "id": 32,
    "emoji": "\ud83e\udec1",
    "reason": "You give your whole heart \u2014 no half measures."
  },
  {
    "id": 33,
    "emoji": "\ud83c\udf3f",
    "reason": "Your innocence protects something in me too."
  },
  {
    "id": 34,
    "emoji": "\ud83d\udee1\ufe0f",
    "reason": "You make me feel safe."
  },
  {
    "id": 35,
    "emoji": "\ud83d\udc41\ufe0f",
    "reason": "You make me feel seen."
  },
  {
    "id": 36,
    "emoji": "\u2705",
    "reason": "You make me feel chosen."
  },
  {
    "id": 37,
    "emoji": "\ud83d\udcaf",
    "reason": "You have never made me doubt your love."
  },
  {
    "id": 38,
    "emoji": "\ud83c\udf08",
    "reason": "Your anger passes like a wave \u2014 no grudges, no walls."
  },
  {
    "id": 39,
    "emoji": "\ud83c\udf19",
    "reason": "You are present with me \u2014 fully, genuinely present."
  },
  {
    "id": 40,
    "emoji": "\ud83c\udf81",
    "reason": "You don't just say you love me, you show it."
  },
  {
    "id": 41,
    "emoji": "\u2600\ufe0f",
    "reason": "Your warmth is something I didn't know I was missing until I had it."
  },
  {
    "id": 42,
    "emoji": "\ud83c\udf0d",
    "reason": "You respect my world \u2014 my work, my dreams, my space."
  },
  {
    "id": 43,
    "emoji": "\ud83e\udde9",
    "reason": "You fit into my life like you were always supposed to be there."
  },
  {
    "id": 44,
    "emoji": "\ud83d\ude06",
    "reason": "Your laugh \u2014 I would do anything to hear it."
  },
  {
    "id": 45,
    "emoji": "\ud83e\udd32",
    "reason": "You are caring beyond just words."
  },
  {
    "id": 46,
    "emoji": "\ud83c\udfad",
    "reason": "You are someone I can be completely myself with."
  },
  {
    "id": 47,
    "emoji": "\ud83e\udd81",
    "reason": "You love fiercely and without apology."
  },
  {
    "id": 48,
    "emoji": "\ud83e\ude79",
    "reason": "Your voice alone can fix a bad day."
  },
  {
    "id": 49,
    "emoji": "\ud83c\udf3b",
    "reason": "You are the kind of person who makes everyone around you feel loved."
  },
  {
    "id": 50,
    "emoji": "\u2696\ufe0f",
    "reason": "You are my calm and my excitement at the same time."
  },
  {
    "id": 51,
    "emoji": "\ud83c\udf0e",
    "reason": "When you are happy, nothing else in the world matters."
  },
  {
    "id": 52,
    "emoji": "\ud83d\udcc8",
    "reason": "You make me want to be better."
  },
  {
    "id": 53,
    "emoji": "\ud83e\udec2",
    "reason": "You make me feel like I am enough."
  },
  {
    "id": 54,
    "emoji": "\ud83c\udfa0",
    "reason": "You are playful in a way that keeps things alive."
  },
  {
    "id": 55,
    "emoji": "\ud83c\udf88",
    "reason": "You have this childlike joy that is genuinely infectious."
  },
  {
    "id": 56,
    "emoji": "\ud83d\ude0a",
    "reason": "You know how to make me smile without trying."
  },
  {
    "id": 57,
    "emoji": "\ud83d\udc9d",
    "reason": "You are emotionally generous \u2014 you give and give."
  },
  {
    "id": 58,
    "emoji": "\ud83d\udd10",
    "reason": "You are possessive because you love deeply \u2014 and I understand that completely."
  },
  {
    "id": 59,
    "emoji": "\ud83e\udd1e",
    "reason": "You trust me."
  },
  {
    "id": 60,
    "emoji": "\ud83d\udeaa",
    "reason": "You show up \u2014 even on the hard days."
  },
  {
    "id": 61,
    "emoji": "\ud83e\udde0",
    "reason": "Your care is thoughtful, not just automatic."
  },
  {
    "id": 62,
    "emoji": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
    "reason": "You hold family close \u2014 and that tells me everything about who you are."
  },
  {
    "id": 63,
    "emoji": "\ud83d\udca1",
    "reason": "Your smile changes rooms."
  },
  {
    "id": 64,
    "emoji": "\ud83e\udd8b",
    "reason": "You are unapologetically yourself."
  },
  {
    "id": 65,
    "emoji": "\ud83c\udfa4",
    "reason": "You are funny in the realest way \u2014 not performed, just genuinely funny."
  },
  {
    "id": 66,
    "emoji": "\ud83c\udf0a",
    "reason": "You are soft and strong at the same time."
  },
  {
    "id": 67,
    "emoji": "\ud83d\udcb8",
    "reason": "You never make love feel like a transaction."
  },
  {
    "id": 68,
    "emoji": "\ud83c\udfc6",
    "reason": "You admire me \u2014 and that means everything."
  },
  {
    "id": 69,
    "emoji": "\ud83d\udc51",
    "reason": "You are a great person at the core of who you are."
  },
  {
    "id": 70,
    "emoji": "\ud83c\udfb5",
    "reason": "You matched my energy in ways I always hoped someone would."
  },
  {
    "id": 71,
    "emoji": "\ud83c\udf2c\ufe0f",
    "reason": "You make loving you feel effortless."
  },
  {
    "id": 72,
    "emoji": "\ud83e\uddd8",
    "reason": "You make being loved feel natural."
  },
  {
    "id": 73,
    "emoji": "\ud83e\udec0",
    "reason": "Your heart has room for so many people \u2014 and I am lucky to be in it."
  },
  {
    "id": 74,
    "emoji": "\ud83d\udd6f\ufe0f",
    "reason": "You have never made me feel alone."
  },
  {
    "id": 75,
    "emoji": "\ud83c\udf3e",
    "reason": "You are patient with me even when I struggle to express myself."
  },
  {
    "id": 76,
    "emoji": "\ud83d\udd06",
    "reason": "You are warm \u2014 not just physically, but in every way a person can be warm."
  },
  {
    "id": 77,
    "emoji": "\ud83e\ude9e",
    "reason": "You remind me what real love actually looks like."
  },
  {
    "id": 78,
    "emoji": "\ud83d\udce2",
    "reason": "You are the person I think of first when something good happens."
  },
  {
    "id": 79,
    "emoji": "\ud83e\udef8",
    "reason": "You are the person I want beside me when something bad happens."
  },
  {
    "id": 80,
    "emoji": "\ud83c\udfe0",
    "reason": "You are home."
  },
  {
    "id": 81,
    "emoji": "\ud83c\udf0d",
    "reason": "You care about the people around you \u2014 not just me."
  },
  {
    "id": 82,
    "emoji": "\u2693",
    "reason": "Your touch grounds me."
  },
  {
    "id": 83,
    "emoji": "\ud83d\udc78",
    "reason": "You are the most beautiful person I have ever met \u2014 inside and out."
  },
  {
    "id": 84,
    "emoji": "\ud83d\udd2e",
    "reason": "You are magical in ways I still can't fully explain."
  },
  {
    "id": 85,
    "emoji": "\ud83c\udf0f",
    "reason": "You make me want to give you the whole world."
  },
  {
    "id": 86,
    "emoji": "\ud83d\udd4a\ufe0f",
    "reason": "You are the reason I believe in the kind of love I used to just imagine."
  },
  {
    "id": 87,
    "emoji": "\ud83d\udcaa",
    "reason": "You have a heart that doesn't give up."
  },
  {
    "id": 88,
    "emoji": "\ud83d\udddd\ufe0f",
    "reason": "You are everything I didn't know how to ask for."
  },
  {
    "id": 89,
    "emoji": "\ud83e\udef5",
    "reason": "You love me for exactly who I am."
  },
  {
    "id": 90,
    "emoji": "\ud83d\udc40",
    "reason": "You have seen me \u2014 really seen me \u2014 and stayed."
  },
  {
    "id": 91,
    "emoji": "\ud83d\udc9e",
    "reason": "You are my favourite sound, my favourite face, my favourite person."
  },
  {
    "id": 92,
    "emoji": "\ud83c\udf42",
    "reason": "You make missing you feel bittersweet instead of just painful \u2014 because it means you are real."
  },
  {
    "id": 93,
    "emoji": "\ud83d\udc8e",
    "reason": "You are the gem I found \u2014 rare, beautiful, irreplaceable."
  },
  {
    "id": 94,
    "emoji": "\ud83c\udf96\ufe0f",
    "reason": "You are the one I wanted to be loved by above everyone else."
  },
  {
    "id": 95,
    "emoji": "\ud83c\udf04",
    "reason": "You make every single day better just by being in it."
  },
  {
    "id": 96,
    "emoji": "\ud83d\udc8d",
    "reason": "You are my wife in every way that matters to my heart."
  },
  {
    "id": 97,
    "emoji": "\u267e\ufe0f",
    "reason": "You love me more \u2014 and you are probably right."
  },
  {
    "id": 98,
    "emoji": "\ud83c\udf39",
    "reason": "You are funny, fierce, innocent, warm, and completely extraordinary."
  },
  {
    "id": 99,
    "emoji": "\ud83e\udded",
    "reason": "You make me certain \u2014 and I have never been certain like this about anyone."
  },
  {
    "id": 100,
    "emoji": "\ud83d\udc96",
    "reason": "You are Gauri. And that alone is reason enough."
  },
  {
    "id": 101,
    "emoji": "\ud83e\udd2b",
    "reason": "You make silence feel comfortable, not awkward."
  },
  {
    "id": 102,
    "emoji": "\ud83d\udce3",
    "reason": "You are the first person I want to tell my news to \u2014 good or bad."
  },
  {
    "id": 103,
    "emoji": "\ud83c\udf20",
    "reason": "You have a way of making me feel like the most important person in the world."
  },
  {
    "id": 104,
    "emoji": "\ud83e\udd38",
    "reason": "Your childish moments remind me that life doesn't have to be so serious."
  },
  {
    "id": 105,
    "emoji": "\ud83e\udee6",
    "reason": "You love with your whole body \u2014 your eyes, your hands, your presence."
  },
  {
    "id": 106,
    "emoji": "\u2602\ufe0f",
    "reason": "You make even a bad day feel survivable."
  },
  {
    "id": 107,
    "emoji": "\ud83c\udf31",
    "reason": "Your innocence is not naivety \u2014 it's purity of intention."
  },
  {
    "id": 108,
    "emoji": "\ud83c\udfb2",
    "reason": "You have never played games with my heart."
  },
  {
    "id": 109,
    "emoji": "\ud83d\udccd",
    "reason": "You are consistent \u2014 your love doesn't fluctuate based on your mood."
  },
  {
    "id": 110,
    "emoji": "\ud83d\udc8e",
    "reason": "Your possessiveness tells me you value what we have."
  },
  {
    "id": 111,
    "emoji": "\ud83e\udd4a",
    "reason": "You would fight for this relationship, and so would I."
  },
  {
    "id": 112,
    "emoji": "\ud83d\udeaa",
    "reason": "You make me feel like coming home every single time."
  },
  {
    "id": 113,
    "emoji": "\ud83e\uddff",
    "reason": "You have a way of understanding me without me having to explain everything."
  },
  {
    "id": 114,
    "emoji": "\ud83c\udf89",
    "reason": "You are spontaneous in the most delightful ways."
  },
  {
    "id": 115,
    "emoji": "\ud83e\uddf2",
    "reason": "Your energy is magnetic \u2014 I am always drawn to you."
  },
  {
    "id": 116,
    "emoji": "\ud83c\udfbc",
    "reason": "You are the kind of girl someone writes songs about."
  },
  {
    "id": 117,
    "emoji": "\ud83c\udf06",
    "reason": "You make ordinary Tuesday evenings feel special."
  },
  {
    "id": 118,
    "emoji": "\ud83e\udd29",
    "reason": "Your face when you are excited about something is everything."
  },
  {
    "id": 119,
    "emoji": "\ud83d\uddd2\ufe0f",
    "reason": "You remember the small things \u2014 the things that matter to me."
  },
  {
    "id": 120,
    "emoji": "\ud83d\udce1",
    "reason": "You are present even when we are apart."
  },
  {
    "id": 121,
    "emoji": "\ud83e\ude9f",
    "reason": "Your emotional honesty is something I deeply respect."
  },
  {
    "id": 122,
    "emoji": "\ud83c\udf80",
    "reason": "You don't hide your love \u2014 you wear it proudly."
  },
  {
    "id": 123,
    "emoji": "\ud83d\udd4a\ufe0f",
    "reason": "You make affection feel safe, not overwhelming."
  },
  {
    "id": 124,
    "emoji": "\ud83d\udd25",
    "reason": "Your warmth is consistent \u2014 it's not a phase or a mood, it's just who you are."
  },
  {
    "id": 125,
    "emoji": "\ud83d\ude0c",
    "reason": "You are the reason I smile randomly in the middle of the day."
  },
  {
    "id": 126,
    "emoji": "\ud83c\udfd7\ufe0f",
    "reason": "You make me want to work hard \u2014 so I can give you everything."
  },
  {
    "id": 127,
    "emoji": "\ud83e\udd85",
    "reason": "You are the kind of partner who makes your person a better human."
  },
  {
    "id": 128,
    "emoji": "\ud83c\udf3b",
    "reason": "You don't just love me \u2014 you believe in me."
  },
  {
    "id": 129,
    "emoji": "\ud83d\udecb\ufe0f",
    "reason": "You are my biggest comfort."
  },
  {
    "id": 130,
    "emoji": "\ud83c\udf8a",
    "reason": "You are my biggest joy."
  },
  {
    "id": 131,
    "emoji": "\ud83e\ude84",
    "reason": "You never make me feel judged."
  },
  {
    "id": 132,
    "emoji": "\ud83e\udec2",
    "reason": "You accept all of me \u2014 the easy parts and the difficult ones."
  },
  {
    "id": 133,
    "emoji": "\ud83c\udf0a",
    "reason": "You love deeply and I have seen very few people love like you do."
  },
  {
    "id": 134,
    "emoji": "\ud83e\udd0d",
    "reason": "You are genuinely kind \u2014 not just to me, but to everyone."
  },
  {
    "id": 135,
    "emoji": "\ud83c\udfc5",
    "reason": "Your respect for others shows me the quality of your character."
  },
  {
    "id": 136,
    "emoji": "\ud83e\udeb6",
    "reason": "You are not afraid to be vulnerable with me."
  },
  {
    "id": 137,
    "emoji": "\ud83e\udd1d",
    "reason": "You trust me with your feelings, and I don't take that lightly."
  },
  {
    "id": 138,
    "emoji": "\ud83c\udfaf",
    "reason": "Your humour is perfectly matched to mine."
  },
  {
    "id": 139,
    "emoji": "\ud83d\ude39",
    "reason": "You can make me laugh even when I don't want to."
  },
  {
    "id": 140,
    "emoji": "\ud83d\udc8a",
    "reason": "You are the cure for a bad mood."
  },
  {
    "id": 141,
    "emoji": "\ud83d\udee0\ufe0f",
    "reason": "You make effort \u2014 and effort in love is everything."
  },
  {
    "id": 142,
    "emoji": "\u2764\ufe0f\u200d\ud83d\udd25",
    "reason": "You are never indifferent. You always care."
  },
  {
    "id": 143,
    "emoji": "\ud83d\udcec",
    "reason": "You have a way of making me feel missed \u2014 and that feels incredible."
  },
  {
    "id": 144,
    "emoji": "\ud83c\udf37",
    "reason": "You give the most genuine compliments."
  },
  {
    "id": 145,
    "emoji": "\ud83e\udd47",
    "reason": "You are proud of me, and I feel it."
  },
  {
    "id": 146,
    "emoji": "\ud83e\ude81",
    "reason": "You push me without pressuring me."
  },
  {
    "id": 147,
    "emoji": "\ud83c\udf2c\ufe0f",
    "reason": "You understand my silences."
  },
  {
    "id": 148,
    "emoji": "\ud83c\udf19",
    "reason": "You are the most beautiful when you don't know you are being watched."
  },
  {
    "id": 149,
    "emoji": "\u2601\ufe0f",
    "reason": "You are my favourite daydream."
  },
  {
    "id": 150,
    "emoji": "\ud83c\udf0d",
    "reason": "You are my favourite reality."
  },
  {
    "id": 151,
    "emoji": "\u2728",
    "reason": "You light up when you are talking about something you love."
  },
  {
    "id": 152,
    "emoji": "\ud83c\udf0b",
    "reason": "You are unapologetically emotional \u2014 and that is a strength, not a weakness."
  },
  {
    "id": 153,
    "emoji": "\ud83c\udff5\ufe0f",
    "reason": "You make being loved feel like a privilege I earned."
  },
  {
    "id": 154,
    "emoji": "\ud83e\udded",
    "reason": "You have a way of making me feel like I chose right."
  },
  {
    "id": 155,
    "emoji": "\ud83c\udf6c",
    "reason": "Your sweetness has no conditions attached."
  },
  {
    "id": 156,
    "emoji": "\ud83c\udf97\ufe0f",
    "reason": "You love with full commitment \u2014 nothing withheld."
  },
  {
    "id": 157,
    "emoji": "\ud83c\udf0a",
    "reason": "You have a way of calming me down just by being there."
  },
  {
    "id": 158,
    "emoji": "\ud83d\udea7",
    "reason": "You make hard conversations feel less scary."
  },
  {
    "id": 159,
    "emoji": "\ud83e\uded9",
    "reason": "You never weaponise my vulnerabilities."
  },
  {
    "id": 160,
    "emoji": "\ud83c\udfe1",
    "reason": "You are safe \u2014 emotionally, completely safe."
  },
  {
    "id": 161,
    "emoji": "\ud83e\uddf5",
    "reason": "You show love in little ways that add up to something enormous."
  },
  {
    "id": 162,
    "emoji": "\u2693",
    "reason": "You are the kind of person who makes someone want to stay."
  },
  {
    "id": 163,
    "emoji": "\ud83e\udeb7",
    "reason": "You have never made me feel like a burden."
  },
  {
    "id": 164,
    "emoji": "\ud83d\udcbc",
    "reason": "You carry your love for me like something precious."
  },
  {
    "id": 165,
    "emoji": "\ud83e\udef5",
    "reason": "You are my person \u2014 in every definition of that word."
  },
  {
    "id": 166,
    "emoji": "\ud83d\udce2",
    "reason": "You make me feel like my feelings matter."
  },
  {
    "id": 167,
    "emoji": "\ud83c\udf0a",
    "reason": "You are generous with your time, your heart, your energy."
  },
  {
    "id": 168,
    "emoji": "\ud83c\udf05",
    "reason": "Your face is the one I want to wake up to."
  },
  {
    "id": 169,
    "emoji": "\ud83c\udf03",
    "reason": "Your voice is the one I want to fall asleep to."
  },
  {
    "id": 170,
    "emoji": "\ud83c\udfa2",
    "reason": "You make growing up feel like an adventure rather than a loss."
  },
  {
    "id": 171,
    "emoji": "\ud83d\udddd\ufe0f",
    "reason": "You are the answer to a question I didn't know I was asking."
  },
  {
    "id": 172,
    "emoji": "\ud83e\uddbe",
    "reason": "You don't just say the right things \u2014 you do them."
  },
  {
    "id": 173,
    "emoji": "\ud83d\udce3",
    "reason": "You are my cheerleader on the days I can't cheer for myself."
  },
  {
    "id": 174,
    "emoji": "\ud83d\udc2f",
    "reason": "You are fiercely loyal."
  },
  {
    "id": 175,
    "emoji": "\ud83d\udd01",
    "reason": "You are someone I would choose again, in every version of my life."
  },
  {
    "id": 176,
    "emoji": "\ud83c\udf38",
    "reason": "You have a gentleness that is incredibly rare."
  },
  {
    "id": 177,
    "emoji": "\ud83e\udea9",
    "reason": "You are as real as it gets \u2014 no masks, no pretending."
  },
  {
    "id": 178,
    "emoji": "\ud83e\uddd8",
    "reason": "You make love feel uncomplicated."
  },
  {
    "id": 179,
    "emoji": "\u267e\ufe0f",
    "reason": "You make me believe in forever."
  },
  {
    "id": 180,
    "emoji": "\ud83c\udfa8",
    "reason": "You have ruined me for anyone else \u2014 in the best possible way."
  },
  {
    "id": 181,
    "emoji": "\ud83d\udd0d",
    "reason": "You are thoughtful in a way that shows you actually pay attention."
  },
  {
    "id": 182,
    "emoji": "\ud83c\udf0a",
    "reason": "You have a depth to you that I keep discovering."
  },
  {
    "id": 183,
    "emoji": "\ud83c\udfd4\ufe0f",
    "reason": "You are someone worth every sacrifice."
  },
  {
    "id": 184,
    "emoji": "\ud83e\uddf8",
    "reason": "You make me feel like I belong somewhere."
  },
  {
    "id": 185,
    "emoji": "\ud83d\udcd6",
    "reason": "You are the kind of love that poets have been trying to describe for centuries."
  },
  {
    "id": 186,
    "emoji": "\ud83e\udd17",
    "reason": "You treat my happiness as important as your own."
  },
  {
    "id": 187,
    "emoji": "\u2b50",
    "reason": "You are my favourite 'what if' that actually came true."
  },
  {
    "id": 188,
    "emoji": "\ud83d\udd17",
    "reason": "Your love is not possessive in a controlling way \u2014 it's possessive in an 'I never want to lose you' way."
  },
  {
    "id": 189,
    "emoji": "\ud83e\udef6",
    "reason": "You have made me understand what it means to be truly cared for."
  },
  {
    "id": 190,
    "emoji": "\ud83c\udf1f",
    "reason": "You are my reason for a lot of things."
  },
  {
    "id": 191,
    "emoji": "\ud83d\ude04",
    "reason": "You are funny in a way that feels effortless \u2014 like joy just lives inside you."
  },
  {
    "id": 192,
    "emoji": "\ud83c\udf43",
    "reason": "You make me appreciate the small moments more than I ever did before."
  },
  {
    "id": 193,
    "emoji": "\ud83c\udfdb\ufe0f",
    "reason": "You have a quiet strength that I admire enormously."
  },
  {
    "id": 194,
    "emoji": "\ud83d\udc74\ud83d\udc75",
    "reason": "You are someone I can grow old with and still be excited about."
  },
  {
    "id": 195,
    "emoji": "\ud83e\udd84",
    "reason": "You are magical not because you are perfect \u2014 but because you are perfectly you."
  },
  {
    "id": 196,
    "emoji": "\ud83c\udf27\ufe0f",
    "reason": "You love me on my worst days without making me feel less."
  },
  {
    "id": 197,
    "emoji": "\ud83e\udde9",
    "reason": "You make me feel like love isn't complicated when it's the right person."
  },
  {
    "id": 198,
    "emoji": "\ud83c\udfb0",
    "reason": "You are the best thing that has ever happened to me."
  },
  {
    "id": 199,
    "emoji": "\ud83d\ude4c",
    "reason": "You are mine \u2014 and I am so endlessly grateful for that."
  },
  {
    "id": 200,
    "emoji": "\ud83d\udc96",
    "reason": "No number could ever be enough. Every day you give me a new reason. You are infinite."
  }
];

  if (typeof window !== 'undefined') window.REASONS_DATA = reasons;
  if (typeof globalThis !== 'undefined') globalThis.REASONS_DATA = reasons;
  if (typeof self !== 'undefined') self.REASONS_DATA = reasons;
  if (typeof window !== 'undefined') window.REASONS_LIST = reasons;
})();

