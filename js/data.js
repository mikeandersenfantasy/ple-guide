/* ========================================
   WrestleMania 42 Fan Guide - Data Layer
   All match & wrestler data lives here.
   To add a new match: add an entry to MATCHES array.
   Wrestlers involved auto-populate on the Wrestlers page.
   ======================================== */

const WRESTLERS = {
  "cm-punk": {
    name: "CM Punk",
    nickname: "The Best in the World",
    aliases: "The Second City Saint, The Straight Edge Superstar, The Voice of the Voiceless",
    brand: "Raw",
    alignment: "Face",
    alignmentDesc: "Fan Favorite",
    isChampion: true,
    title: "World Heavyweight Champion",
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/2025/11/CMPUNK_PROFILE.png",
    about: "CM Punk is one of the most electrifying and outspoken wrestlers in WWE history. After leaving WWE in 2014 and spending time in UFC and AEW, he made a shocking return in November 2023. He captured the World Heavyweight Championship from Gunther at SummerSlam 2025. He's known for his straight-edge lifestyle (no drugs, alcohol, or tobacco) and his willingness to blur the lines between fiction and reality with deeply personal promos.",
    finisher: "Go To Sleep (GTS)",
    finisherDesc: "Lifts opponent onto shoulders in a fireman's carry, then drops them face-first onto his rising knee. Devastating.",
    entranceTheme: "Cult of Personality",
    entranceArtist: "Living Colour",
    spotifyId: "5gRUFpRflutZDXSmp2rv32",
    entranceVideo: { id: "dOnBdJt2Aiw", start: 4, end: 150, label: "Entrance -- Learn This!", desc: "Listen for \"IT'S CLOBBERIN' TIME!\" on the ramp, then the crowd singing \"Look in my eyes, what do you see...\" This is what you'll experience live!" },
    highlights: [
      "Current World Heavyweight Champion",
      "Iconic 434-day WWE Championship reign (2011-2013)",
      "Delivered the legendary \"Pipe Bomb\" promo (June 27, 2011)",
      "Returned to WWE in 2023 after 9+ year absence",
      "2x Money in the Bank winner"
    ]
  },
  "roman-reigns": {
    name: "Roman Reigns",
    nickname: "The Original Tribal Chief",
    aliases: "The Head of the Table, The Big Dog, The Needle Mover",
    brand: "SmackDown",
    alignment: "Face",
    alignmentDesc: "Turned good in 2024 after 4-year villain run",
    isChampion: false,
    title: null,
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/all/2025/04/24-10-25_Square_Gallery360_Gallery360_3810_Profile--5104a0e6cf4b331f2d93d5a9b9662164.png",
    about: "Roman Reigns is a member of the legendary Anoa'i wrestling dynasty and one of WWE's biggest stars. His 4-year reign as Universal Champion (2020-2024) as \"The Tribal Chief\" is one of the greatest heel runs in history. After losing the title at WrestleMania 40, he returned as a fan favorite. He won the 2026 Royal Rumble and chose to challenge CM Punk. He's a former Georgia Tech football player.",
    finisher: "Spear",
    finisherDesc: "Crouches in the corner, stalks opponent, then explodes with a devastating running tackle. Also uses the Superman Punch.",
    entranceTheme: "Head of the Table",
    entranceArtist: "def rebel",
    spotifyId: "6uDbAF84weCrivI4T0QXbx",
    entranceVideo: { id: "KrBmrh-S5N4", start: 7, end: 240, label: "Entrance", desc: "Listen for the crowd chanting \"Roman... Roman Reigns!\" as the Original Tribal Chief makes his epic entrance. The OTC acknowledgement gesture is iconic." },
    highlights: [
      "6x World Champion",
      "Longest Universal Championship reign in history (1,316 days!)",
      "Main evented 7 WrestleManias",
      "Founding member of The Shield",
      "2026 Royal Rumble winner"
    ]
  },
  "cody-rhodes": {
    name: "Cody Rhodes",
    nickname: "The American Nightmare",
    aliases: "The Prince of Pro Wrestling, Undashing",
    brand: "SmackDown",
    alignment: "Face",
    alignmentDesc: "WWE's top hero",
    isChampion: true,
    title: "Undisputed WWE Champion",
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/2026/03/CODY_04262024gd_0100_headSawp_Profile.png",
    about: "Cody Rhodes is the son of the legendary \"American Dream\" Dusty Rhodes. After leaving WWE in 2016, he co-founded AEW and became a massive star. He returned to WWE in 2022 on a mission to \"Finish the Story\" his father never could -- winning the WWE Championship. He did it at WrestleMania 40 in 2024. His entrance features the loudest crowd singalong in modern WWE -- the \"WOAH\" from his theme \"Kingdom.\"",
    finisher: "Cross Rhodes",
    finisherDesc: "Grabs opponent, spins, and drives them face-first into the mat in a rolling cutter.",
    entranceTheme: "Kingdom",
    entranceArtist: "Downstait",
    spotifyId: "3gILDObZFV7LD5pmjSr9zo",
    entranceVideo: { id: "A8Zb3Dou9QA", start: 281, end: 391, label: "Entrance -- Must Learn!", desc: "THIS IS THE ONE. The entire arena sings the \"WOAH-OH-OH\" in unison. The loudest crowd moment in modern WWE. Learn this melody before WrestleMania!" },
    highlights: [
      "Current Undisputed WWE Champion",
      "\"Finished the Story\" at WrestleMania 40 -- beating Roman Reigns",
      "Co-founded All Elite Wrestling (AEW)",
      "Son of WWE Hall of Famer Dusty Rhodes",
      "Has the loudest crowd singalong in wrestling (\"WOAH\")"
    ]
  },
  "randy-orton": {
    name: "Randy Orton",
    nickname: "The Viper",
    aliases: "The Legend Killer, The Apex Predator",
    brand: "SmackDown",
    alignment: "Heel",
    alignmentDesc: "Turned villain March 13, 2026",
    isChampion: false,
    title: null,
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/all/2024/03/Randy_Orton_11272023rf_071_Profile--9f48e983c9e721c0a5659fc639f1c14a.png",
    about: "Randy Orton is a 3rd-generation wrestler and one of the most talented in-ring performers of all time. Known for the RKO -- arguably the most exciting finisher in WWE because it can come from literally anywhere at any time. He was part of the Legacy faction with Cody Rhodes and is a 14-time World Champion. In March 2026, he shocked the world by turning on his best friend Cody at their contract signing.",
    finisher: "RKO",
    finisherDesc: "A jumping cutter that comes from ANY position at ANY time. \"The three most dangerous letters in WWE.\" Can hit it out of nowhere.",
    entranceTheme: "Voices",
    entranceArtist: "Rev Theory",
    spotifyId: "4efaOZQDP1XwApNaRc7UYu",
    entranceVideo: { id: "ZWqX3eYKAhM", start: 33, label: "Entrance", desc: "The entire arena sings \"I hear voices in my head, they council me, they understand...\" Watch the Viper's signature slow walk and iconic pose. One of the best singalong themes EVER." },
    highlights: [
      "14x World Champion",
      "Youngest World Heavyweight Champion in history (age 24)",
      "3rd-generation wrestler (grandfather Bob Orton Sr., father Cowboy Bob Orton)",
      "Member of Evolution with Triple H, Batista, and Ric Flair",
      "2026 Elimination Chamber winner"
    ]
  },
  "rhea-ripley": {
    name: "Rhea Ripley",
    nickname: "Mami",
    aliases: "The Eradicator, The Nightmare",
    brand: "Raw",
    alignment: "Face",
    alignmentDesc: "Beloved antihero",
    isChampion: false,
    title: null,
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/2025/08/Rhea_PROFILE.png",
    about: "Rhea Ripley is the most popular woman in WWE and one of the most physically imposing female wrestlers ever. From Adelaide, Australia, she's known for her gothic aesthetic, incredible strength, and the iconic \"Stomp\" on her entrance ramp that triggers pyro demon wings. Motionless In White co-wrote her theme song and performed it live at WrestleMania XL. She won the 2026 Women's Elimination Chamber.",
    finisher: "Riptide",
    finisherDesc: "A pumphandle powerbomb. Hoists opponent onto her shoulders and slams them to the mat. Pure power.",
    entranceTheme: "Demon In Your Dreams",
    entranceArtist: "Motionless In White / def rebel",
    spotifyId: "5pngP9Zq5dv0jrdvDk08ou",
    entranceVideo: { id: "l-KkXAeB2V0", start: 1, end: 100, label: "Entrance", desc: "Watch for The Stomp on the entrance ramp (triggers demon wings!), the \"MAMI!\" chants, and the most intense woman in WWE making her walk to the ring." },
    highlights: [
      "2x Women's World Champion",
      "Won the 2023 Women's Royal Rumble",
      "First Australian to hold a WWE World Championship",
      "Motionless In White performed her entrance LIVE at WrestleMania XL",
      "2026 Women's Elimination Chamber winner"
    ]
  },
  "jade-cargill": {
    name: "Jade Cargill",
    nickname: "The Storm",
    aliases: "That Girl",
    brand: "SmackDown",
    alignment: "Heel",
    alignmentDesc: "Turned villain October 2025",
    isChampion: true,
    title: "WWE Women's Champion",
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/2025/11/jade%20cargill_11072025ak_2229_Profile.png",
    about: "Jade Cargill is one of the most physically impressive athletes in WWE. A former college basketball player and fitness competitor, she debuted in AEW with a historic undefeated streak before joining WWE in 2024. She captured the WWE Women's Championship at Saturday Night's Main Event in November 2025, becoming the first Superstar of Jamaican descent to hold a WWE World Championship.",
    finisher: "Jaded",
    finisherDesc: "A pump handle slam that drives opponent face-first into the mat. Game over.",
    entranceTheme: "A Storm Is Coming",
    entranceArtist: "def rebel",
    spotifyId: "1hXtTWyXxHO9xJjb8npz93",
    entranceVideo: { id: "rjRhm2G_drI", start: 7, end: 67, label: "Entrance", desc: "The cape, the crown, the power walk. Jade's entrance is pure PRESENCE. Watch how she owns the stage." },
    highlights: [
      "Current WWE Women's Champion",
      "First Superstar of Jamaican descent to hold a WWE World Championship",
      "Perfect 2-0 WrestleMania record",
      "Former AEW TBS Champion with historic undefeated streak",
      "7-month undefeated streak in WWE"
    ]
  },
  "liv-morgan": {
    name: "Liv Morgan",
    nickname: "",
    aliases: "The Jersey Girl",
    brand: "Raw",
    alignment: "Heel",
    alignmentDesc: "Villain with The Judgment Day faction",
    isChampion: false,
    title: null,
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/2026/01/liv_morgan_Profile.png",
    about: "Liv Morgan was discovered by WWE at age 20 while working as a waitress at Hooters. She's risen from underdog to one of the top women in WWE as a devious villain alongside The Judgment Day (including boyfriend Dominik Mysterio). Her \"Revenge Tour\" character is all about manipulation and chaos. She won the 2026 Women's Royal Rumble to earn her WrestleMania title shot.",
    finisher: "Oblivion",
    finisherDesc: "A springboard reverse STO. Springboards off the ropes and drives opponent face-first down. Comes out of nowhere.",
    entranceTheme: "Liv Gone Mad",
    entranceArtist: "def rebel",
    spotifyId: "4Wt7aiVdOhpQ6s5IVgUHSy",
    entranceVideo: { id: "LFIpepz7-s8", start: 17, end: 70, label: "Entrance", desc: "Watch The Judgment Day's leading lady make her entrance. The crowd heat is LOUD -- she's the villain everyone loves to hate." },
    highlights: [
      "2x Women's World Champion",
      "2026 Women's Royal Rumble winner",
      "Key member of The Judgment Day faction",
      "Discovered by WWE while working as a waitress",
      "Money in the Bank 2022 winner"
    ]
  },
  "stephanie-vaquer": {
    name: "Stephanie Vaquer",
    nickname: "La Primera (The First One)",
    aliases: "The Chilean Star",
    brand: "Raw",
    alignment: "Face",
    alignmentDesc: "Beloved fighting champion",
    isChampion: true,
    title: "Women's World Champion",
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/2025/09/stephanie_Vaquer_Profile.png",
    about: "Stephanie Vaquer is the first South American woman to hold a world championship in WWE history. From Santiago, Chile, she spent over a decade wrestling across Mexico (CMLL), Japan (STARDOM, NJPW), and the independent circuit before being signed by WWE in 2024. She skyrocketed through NXT and onto the main roster, capturing the Women's World Championship at Wrestlepalooza in September 2025.",
    finisher: "SVB (Package Backbreaker)",
    finisherDesc: "Folds opponent across her knee in a devastating backbreaker. Also uses a Corkscrew Moonsault.",
    entranceTheme: "Theme Song",
    entranceArtist: "def rebel",
    spotifyId: "3UOxbR6zSCmEjzZsgjmRJz",
    entranceVideoYT: "jVdyr7D1bPg",
    entranceVideo: { id: "fFSNVo5z_60", start: 5, end: 41, label: "Entrance", desc: "La Primera's entrance theme. The first South American woman to hold a WWE championship makes her WrestleMania debut!" },
    highlights: [
      "Current Women's World Champion",
      "First South American woman to hold a WWE World Championship",
      "Wrestled across Mexico, Japan, and independent promotions",
      "Former CMLL Women's Champion",
      "Won the title at Wrestlepalooza in September 2025"
    ]
  },
  "oba-femi": {
    name: "Oba Femi",
    nickname: "The Ruler",
    aliases: "The Conqueror, The Destroyer of Worlds, The Bringer of War",
    brand: "Raw",
    alignment: "Face",
    alignmentDesc: "Unstoppable hero",
    isChampion: false,
    title: null,
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/2026/02/ObaFemi_10292024ak_0038_Profile.png",
    about: "Oba Femi is a 310-pound Nigerian-born powerhouse from Lagos who was a championship-level shot putter in college before transitioning to professional wrestling. He dominated NXT as champion before vacating the title and moving to the main roster in January 2026. He's been undefeated in singles competition on the main roster, destroying everyone in his path. He represents the FUTURE of WWE.",
    finisher: "Fall From Grace",
    finisherDesc: "A pop-up falling powerbomb. Launches opponent into the air and catches them with 310 pounds of force on the way down.",
    entranceTheme: "The Ruler",
    entranceArtist: "def rebel",
    spotifyId: "2JsnG08UfdFsYRYt0j1i7P",
    entranceVideo: { id: "8UmWLsC7avg", start: 17, end: 140, label: "Entrance", desc: "Watch the 310-pound Nigerian powerhouse war dance to the ring. The Conqueror. The Destroyer of Worlds. The Bringer of War. The future of WWE." },
    highlights: [
      "Undefeated on the main roster in singles competition",
      "Former 2x NXT Champion",
      "Former collegiate shot putter",
      "310 pounds of pure power",
      "Answered Brock Lesnar's WrestleMania open challenge"
    ]
  },
  "aj-lee": {
    name: "AJ Lee",
    nickname: "The Geek Goddess",
    aliases: "The Hybrid Athlete, April Jeanette Mendez",
    brand: "Raw",
    alignment: "Face",
    alignmentDesc: "Beloved returning legend",
    isChampion: true,
    title: "Women's Intercontinental Champion",
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/2026/03/Punk_AJ_-02282026rf_663_Profile.png",
    about: "AJ Lee is one of the most iconic women in WWE history. At just 5'2\", she dominated the Divas division with her energetic, high-flying, lucha-inspired style and unmatched charisma. She held the Divas Championship three times, including a record-breaking 295-day reign. After retiring in 2015, she returned to WWE over a decade later alongside her husband CM Punk and has been on an absolute tear -- capturing the Women's Intercontinental Championship and proving she's better than ever.",
    finisher: "Black Widow",
    finisherDesc: "An octopus-style submission hold. Wraps around her opponent like a spider and cranks the neck. Also uses the Shining Wizard (running knee to a kneeling opponent).",
    entranceTheme: "Light It Up",
    entranceArtist: "def rebel",
    spotifyId: "5D3a3lsgr64Z58OmK2Gggs",
    entranceVideo: { id: "D3X4Ydm-MD0", start: 217, end: 298, label: "Entrance", desc: "The Geek Goddess is BACK. AJ Lee's return entrance -- over a decade later and the crowd still goes crazy. Listen for the pop!" },
    highlights: [
      "Current Women's Intercontinental Champion",
      "3x Divas Champion (record 295-day reign)",
      "Returned to WWE after 11+ year absence",
      "2x Diva of the Year (2012, 2014)",
      "Married to CM Punk"
    ]
  },
  "becky-lynch": {
    name: "Becky Lynch",
    nickname: "The Man",
    aliases: "Big Time Becks, The Lass Kicker",
    brand: "Raw",
    alignment: "Heel",
    alignmentDesc: "Villain aligned with Seth Rollins",
    isChampion: false,
    title: null,
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/all/2024/03/Becky_Lynch_PROFILE--0a8b02ec3d3e203b817d3b7674bd0a9e.png",
    about: "Becky Lynch is one of the most popular and accomplished women in WWE history. From Dublin, Ireland, she became a mainstream crossover star as \"The Man\" -- winning the 2019 Royal Rumble and main-eventing WrestleMania 35 against Ronda Rousey, becoming the first woman to main event WrestleMania. She's a Grand Slam Champion and has held titles across every brand. Now aligned with her real-life husband Seth Rollins, she's turned villain and is desperate to reclaim championship gold.",
    finisher: "Dis-arm-her",
    finisherDesc: "A devastating armbar submission that hyperextends the elbow. Also uses the Man-handle Slam (a pump-handle slam).",
    entranceTheme: "Celtic Invasion",
    entranceArtist: "CFO$",
    spotifyId: "54KTIaCe10JWSbkNF6BUJB",
    entranceVideo: { id: "h-SuPOjbbyM", start: 0, end: 49, label: "Entrance", desc: "\"The Man\" Becky Lynch makes her entrance. One of the most iconic themes in WWE -- the crowd sings along every time." },
    highlights: [
      "First woman to main event WrestleMania (WM 35)",
      "Grand Slam Champion (2023)",
      "2019 Women's Royal Rumble winner",
      "7x champion across multiple titles",
      "Former Women's Intercontinental Champion"
    ]
  },
  "brock-lesnar": {
    name: "Brock Lesnar",
    nickname: "The Beast Incarnate",
    aliases: "The Beast, Suplex City Mayor",
    brand: "Part-Time",
    alignment: "Heel",
    alignmentDesc: "Dominant veteran villain",
    isChampion: false,
    title: null,
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/2025/09/brock_lesnar_Profile.png",
    about: "Brock Lesnar is arguably the most physically dominant performer in WWE history. A former UFC Heavyweight Champion and NCAA Division I wrestling champion, Lesnar is a legitimate combat athlete who has terrorized WWE since 2002. He ended The Undertaker's legendary WrestleMania undefeated streak at WrestleMania 30 (21-1). Now 48, he may be approaching the end of his legendary career.",
    finisher: "F-5",
    finisherDesc: "Hoists opponent onto shoulders and spins them off face-first. Also throws rapid-fire German suplexes (\"Suplex City\").",
    entranceTheme: "Next Big Thing",
    entranceArtist: "def rebel",
    spotifyId: "04bTkYXhpWoyvPI1jGK5JI",
    entranceVideo: { id: "5IB9_UdrbEQ", start: 3, end: 85, label: "Entrance", desc: "Watch Lesnar bounce like an MMA fighter. Listen for \"SUPLEX CITY!\" chants. The most intimidating entrance in WWE history." },
    highlights: [
      "10x World Champion",
      "Ended The Undertaker's WrestleMania streak (21-1)",
      "Former UFC Heavyweight Champion",
      "NCAA Division I Heavyweight Wrestling Champion",
      "Youngest WWE Champion in history at the time (age 25)"
    ]
  },
  "sami-zayn": {
    name: "Sami Zayn",
    nickname: "Honorary Uce",
    aliases: "The Underdog from the Underground",
    brand: "SmackDown",
    alignment: "Face",
    alignmentDesc: "Beloved underdog fan favorite",
    isChampion: true,
    title: "United States Champion",
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/2026/03/sami_zayn_profile%202.png",
    about: "Sami Zayn is one of the most beloved wrestlers in WWE. A Canadian of Syrian heritage, he wrestled in 29 countries before joining WWE. He became an honorary member of The Bloodline (Roman Reigns' family faction) before a dramatic split that led to one of WWE's best storylines. He defeated Gunther at WrestleMania XL to end a 666-day Intercontinental Championship reign. Now a two-time United States Champion, he won the title in an open challenge to earn his spot on the WrestleMania 42 card.",
    finisher: "Helluva Kick",
    finisherDesc: "Charges full speed at an opponent trapped in the corner and delivers a devastating running kick to the face. Simple but absolutely brutal.",
    entranceTheme: "Worlds Apart",
    entranceArtist: "CFO$",
    spotifyId: null,
    entranceVideo: null,
    highlights: [
      "Current United States Champion (2x)",
      "Intercontinental Champion -- ended Gunther's 666-day reign at WrestleMania XL",
      "Undisputed WWE Tag Team Champion (with Kevin Owens)",
      "Former NXT Champion",
      "Wrestled in 29 countries before joining WWE"
    ]
  },
  "trick-williams": {
    name: "Trick Williams",
    nickname: "Whoop That Trick",
    aliases: "",
    brand: "SmackDown",
    alignment: "Face",
    alignmentDesc: "Charismatic rising star",
    isChampion: false,
    title: null,
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/2025/10/Trick_Williams_Profile.png",
    about: "Trick Williams is one of the most electrifying young stars in WWE. At 6'5\" and 250 pounds, he started as a hype man in NXT before breaking out as a two-time NXT Champion. He's the only sixth person to ever win the NXT Championship twice. He made history as the first active WWE Superstar to win the TNA World Title. Now on SmackDown, he's one of the hottest free agents to come out of NXT and is making his WrestleMania debut.",
    finisher: "Trick Shot",
    finisherDesc: "A devastating jumping knee strike that catches opponents right on the chin. Lights out.",
    entranceTheme: "Whoop That Trick",
    entranceArtist: "def rebel",
    spotifyId: null,
    entranceVideo: null,
    highlights: [
      "2x NXT Champion",
      "NXT North American Champion",
      "First active WWE Superstar to win the TNA World Title",
      "Iron Survivor Challenge winner",
      "WrestleMania debut at WM42"
    ]
  },
  "jacob-fatu": {
    name: "Jacob Fatu",
    nickname: "The Samoan Werewolf",
    aliases: "",
    brand: "SmackDown",
    alignment: "Heel",
    alignmentDesc: "The Bloodline's most dangerous enforcer",
    isChampion: false,
    title: null,
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/2026/02/Jakob_Fatu_PROFILE.png",
    about: "Jacob Fatu is the most dangerous member of SmackDown and part of the legendary Anoa'i wrestling dynasty -- cousin to Roman Reigns, The Usos, and Solo Sikoa. The son of The Tonga Kid, Fatu debuted on SmackDown in June 2024 as Solo Sikoa's enforcer and immediately made an impact by destroying three opponents in his first match. At 6'2\" and 285 pounds, he combines freakish agility with raw power. He's been called a \"Samoan Werewolf\" for his wild, uncontrollable fighting style.",
    finisher: "Moonsault",
    finisherDesc: "A top-rope backflip splash. At 285 pounds, Fatu doing a moonsault is terrifying. He also uses a devastating hip attack and a Samoan Spike.",
    entranceTheme: "Untouchable",
    entranceArtist: "def rebel",
    spotifyId: null,
    entranceVideo: null,
    highlights: [
      "Former United States Champion",
      "WWE Tag Team Champion",
      "Member of the Anoa'i wrestling dynasty",
      "Cousin to Roman Reigns and The Usos",
      "Defeated 3 opponents in his WWE debut match"
    ]
  },
  "drew-mcintyre": {
    name: "Drew McIntyre",
    nickname: "The Scottish Warrior",
    aliases: "The Scottish Psychopath",
    brand: "SmackDown",
    alignment: "Heel",
    alignmentDesc: "Bitter and consumed by rage",
    isChampion: false,
    title: null,
    img: "https://www.wwe.com/f/styles/talent_champion_lg/public/all/2021/09/Drew_Mcintyre_Profile--aca391095fe74e721e098cadc93571d3.png",
    about: "Drew McIntyre is a 6'5\", 265-pound powerhouse from Scotland who started wrestling at 15. He was released from WWE in 2014, rebuilt himself on the independent circuit, and returned in 2017 as a completely different beast. He won his first WWE Championship at WrestleMania 36 by destroying Brock Lesnar. His rivalry with CM Punk consumed him in 2024, costing him the World Heavyweight Championship multiple times. Now bitter and dangerous, he's locked in a war with Jacob Fatu that has spiraled completely out of control.",
    finisher: "Claymore Kick",
    finisherDesc: "A running kick with the force of a sword strike. McIntyre charges full speed and boots his opponent in the face. Also uses the Glasgow Kiss (headbutt).",
    entranceTheme: "Broken Dreams / Gallantry",
    entranceArtist: "def rebel",
    spotifyId: null,
    entranceVideo: null,
    highlights: [
      "2x WWE Champion",
      "World Heavyweight Champion",
      "2020 Royal Rumble winner",
      "2024 Money in the Bank winner",
      "Defeated Brock Lesnar at WrestleMania 36"
    ]
  }
};

const MATCHES = [
  {
    id: "match-1",
    wrestler1: "cm-punk",
    wrestler2: "roman-reigns",
    championship: "World Heavyweight Championship",
    isTitleMatch: true,
    night: null,
    bannerImg: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/2026/03/WM42_PunkRoman_SUN_16x9_date.jpg",
    whyItMatters: "This match is <strong>over a decade in the making.</strong> CM Punk and Roman Reigns have NEVER had a one-on-one match in WWE, despite their deeply intertwined history. Punk helped launch Reigns' career as part of The Shield back in 2012, and when Punk left WWE in 2014, Reigns became the face of the company. Their real-life tension -- Punk's explosive podcast comments, Reigns' meteoric rise -- blurs the line between fiction and reality. This personal rivalry has been building for years, with deeply personal attacks making this the most heated feud heading into WrestleMania 42.",
    storySoFar: "Roman Reigns won the 2026 Royal Rumble and chose CM Punk as his WrestleMania opponent -- not because he wants the title, but because he <em>hates</em> Punk. Their promos have been fire: Punk claims he built Reigns' career through The Shield, while Reigns says Punk is the reason fans turned on him. Things got deeply personal when Punk made comments about Reigns' late father Sika, bringing the Anoa'i family into the fight. The Usos demanded an apology; Punk gave them a fight instead.",
    predictions: [
      { label: "CM Punk retains", wrestler: "CM Punk" },
      { label: "Roman Reigns wins", wrestler: "Roman Reigns" }
    ],
    feudSubtitle: "The buildup to the biggest match at WrestleMania 42. Watch how this feud exploded.",
    feudVideos: [
      { id: "SVxtaqT2k_Q", start: 180, end: 245, label: "It Starts Here", title: "Roman Reigns Wins the 2026 Royal Rumble", desc: "Roman wins the Rumble and earns a WrestleMania title shot. He's coming for CM Punk's championship." },
      { id: "9GdHfRd1HU8", start: 113, end: 203, label: "The Challenge", title: "Roman Picks CM Punk for WrestleMania", desc: "Roman makes it official -- he's challenging CM Punk for the World Heavyweight Championship at WrestleMania 42." },
      { id: "gewZcfnxVoo", start: 196, end: 251, label: "The Disrespect", title: "Roman Calls CM Punk OLD", desc: "Roman gets personal. He tells Punk his time is up and he's too old to hang. The crowd erupts." },
      { id: "lk3XaMTeog0", start: 221, end: 278, label: "The Clap Back", title: "Punk: \"I'm Going to Bury You\"", desc: "CM Punk fires back with one of the most savage promos of the year. This is personal. This is WAR." }
    ]
  },
  {
    id: "match-2",
    wrestler1: "cody-rhodes",
    wrestler2: "randy-orton",
    championship: "Undisputed WWE Championship",
    isTitleMatch: true,
    night: null,
    bannerImg: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/2026/03/20260306_WM42_CodyRandy_SAT_16x9_Date.jpg",
    whyItMatters: "A collision of <strong>broken brotherhood.</strong> Cody Rhodes and Randy Orton were in the Legacy faction together (2008-2010) and are real-life best friends. That's what makes Orton's shocking March 13 betrayal so devastating. Orton is 45, knows his career is winding down, and desperately wants one more world title. Cody \"Finished the Story\" at WrestleMania 40 -- now his former best friend wants to end the next chapter.",
    storySoFar: "Randy Orton won the 2026 Elimination Chamber to earn his title shot against his best friend Cody Rhodes. Everything seemed amicable -- two brothers competing for the ultimate prize. Then at the contract signing on March 13, Orton shook Cody's hand... and <em>snapped.</em> He attacked Cody with steel steps, chair shots, and left him bloodied in the ring. The man who helped Cody celebrate at WrestleMania 40 has become his most dangerous enemy. Cody now faces the fight of his life against someone who knows him better than anyone.",
    predictions: [
      { label: "Cody Rhodes retains", wrestler: "Cody Rhodes" },
      { label: "Randy Orton wins", wrestler: "Randy Orton" }
    ],
    feudSubtitle: "Brothers turned rivals. Watch the betrayal unfold.",
    feudVideos: [
      { id: "pYPoHMcf3tE", start: 15, end: 71, label: "Earning the Shot", title: "Randy Orton Wins the Elimination Chamber", desc: "Randy survives the Chamber and earns the right to challenge his former tag partner Cody at WrestleMania." },
      { id: "LkrSlg9OQ4U", start: 547, end: 641, label: "The Contract", title: "Randy Orton Signs the Contract", desc: "The contract signing -- making the WrestleMania match official. But you can feel something is about to go wrong..." },
      { id: "LkrSlg9OQ4U", start: 644, end: 693, label: "The Betrayal", title: "Randy Orton TURNS HEEL", desc: "The moment everything changes. Randy reveals his true colors and turns on his friend. One of the best heel turns of the year." },
      { id: "LkrSlg9OQ4U", start: 860, end: 896, label: "The Attack", title: "Randy's Brutal Chair Shot to Cody", desc: "Randy makes it personal with a vicious chair shot. This is no longer friendly competition -- this is a WAR between former brothers." }
    ]
  },
  {
    id: "match-3",
    wrestler1: "rhea-ripley",
    wrestler2: "jade-cargill",
    championship: "WWE Women's Championship",
    isTitleMatch: true,
    night: null,
    bannerImg: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/2026/03/WM42_JadeRhea_SUN_16x9_date.jpg",
    whyItMatters: "The <strong>first-ever singles match</strong> between two of the most physically dominant women in WWE history. Jade Cargill has been nearly unbeatable with a 7-month championship streak. Rhea Ripley is the most popular woman in WWE and a former two-time champion. Their social media warfare has blurred the lines between real and scripted, with both women claiming to be \"That Bitch.\" This is a collision of power vs. power with the Women's Championship on the line.",
    storySoFar: "Rhea Ripley earned her title shot by dominating the 2026 Women's Elimination Chamber in Chicago, finishing the match with a devastating Riptide. She immediately set her sights on Jade Cargill's WWE Women's Championship. Their face-to-face confrontation on SmackDown was electric -- both women refused to back down, with Jade insisting she's the most dominant champion in WWE and Rhea firing back that she's <em>\"coming to take what's hers.\"</em> Social media has only added fuel to the fire, with both claiming to be \"That Bitch.\"",
    predictions: [
      { label: "Rhea Ripley wins", wrestler: "Rhea Ripley" },
      { label: "Jade Cargill retains", wrestler: "Jade Cargill" }
    ],
    feudSubtitle: "Mami is coming for Jade's title. Watch the tension build.",
    feudVideos: [
      { id: "4WF2qkv2JPE", start: 153, end: 213, label: "Earning the Shot", title: "Rhea Ripley Wins the Women's Elimination Chamber", desc: "Mami dominates the Chamber and sets her sights on Jade Cargill's championship at WrestleMania." },
      { id: "eBo37bKg_Cg", start: 55, end: 189, label: "Face to Face", title: "Rhea and Jade's First Face-Off", desc: "\"I'm taking your title with force.\" Rhea confronts Jade for the first time. The intensity is off the charts." },
      { id: "S4Q6GsCo9sg", start: 35, end: 86, label: "Mind Games", title: "Jade Uses Rhea's Own Catchphrase Against Her", desc: "Jade fires back by throwing Rhea's own words in her face. This feud is getting PERSONAL." }
    ]
  },
  {
    id: "match-4",
    wrestler1: "liv-morgan",
    wrestler2: "stephanie-vaquer",
    championship: "Women's World Championship",
    isTitleMatch: true,
    night: null,
    bannerImg: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/2026/03/20260306_WM42_StephLiv_SAT_16x9_Date_0.jpg",
    whyItMatters: "A clash of <strong>two completely different paths.</strong> Stephanie Vaquer spent over a decade grinding through Mexico and Japan before becoming the first South American woman to hold a WWE world title. Liv Morgan was discovered at 20 while working as a waitress at Hooters and rose through WWE's system. Vaquer says Morgan \"hasn't earned her position.\" With The Judgment Day faction in Liv's corner, nothing about this fight will be fair.",
    storySoFar: "Liv Morgan won the 2026 Women's Royal Rumble from the #14 spot and chose Stephanie Vaquer's Women's World Championship as her WrestleMania target. Liv initially played nice, pretending to respect Vaquer's journey -- then showed her true colors. On Raw, Morgan feigned admiration before blindsiding Vaquer with a Codebreaker and Oblivion, leaving the champion laid out. Vaquer has made it clear: Liv hasn't <em>earned</em> anything. She's taken shortcuts her entire career. At WrestleMania, Vaquer plans to prove that a decade of grinding beats a lifetime of manipulation.",
    predictions: [
      { label: "Liv Morgan wins", wrestler: "Liv Morgan" },
      { label: "Stephanie Vaquer retains", wrestler: "Stephanie Vaquer" }
    ],
    feudSubtitle: "The Revenge Tour continues. Liv has Stephanie in her sights.",
    feudVideos: [
      { id: "A6E8KWZkW9s", start: 230, end: 270, label: "It Starts Here", title: "Liv Morgan Wins the Women's Royal Rumble", desc: "Liv wins the Rumble and earns her WrestleMania title shot. The Revenge Tour is heading to the biggest stage." },
      { id: "WWLoLVNnIKk", start: 30, end: 120, label: "The Pick", title: "Liv Morgan Picks Stephanie Vaquer", desc: "Liv reveals her WrestleMania target -- she's going after Stephanie Vaquer and the WWE Women's Championship." },
      { id: "QdofqQJezbw", start: 15, end: 113, label: "The Promo", title: "Liv Morgan Cuts a Promo on Stephanie", desc: "Liv makes it clear -- she's taking that title at WrestleMania. Nobody is going to stop the Revenge Tour." }
    ]
  },
  {
    id: "match-5",
    wrestler1: "brock-lesnar",
    wrestler2: "oba-femi",
    championship: "Non-Title Match",
    isTitleMatch: false,
    night: null,
    bannerImg: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/2026/03/20260316_WM42_BrockOba_Tron_16x9_date.jpg",
    whyItMatters: "The classic <strong>\"passing of the torch\"</strong> match. Brock Lesnar is 48 and possibly on a retirement tour -- he ended The Undertaker's WrestleMania streak, conquered UFC, and dominated WWE for 20+ years. Oba Femi is 27, undefeated on the main roster, and represents the FUTURE of WWE -- a 310-pound Nigerian powerhouse and former collegiate shot putter. A win at WrestleMania over The Beast makes Femi an instant main eventer and the new face of dominance in WWE.",
    storySoFar: "The seeds were planted at the Royal Rumble when Oba Femi dominated the match, tossing out competitor after competitor -- until Brock Lesnar eliminated him. It was the first time anyone had physically matched Femi and come out on top. Weeks later, Lesnar issued an open challenge for WrestleMania. Oba Femi answered. He marched to the ring, hit Brock with the Fall From Grace, placed his foot on Lesnar's chest, and <em>pointed at the WrestleMania sign.</em> The message was clear: the future has arrived, and The Beast is standing in the way.",
    predictions: [
      { label: "Brock Lesnar wins", wrestler: "Brock Lesnar" },
      { label: "Oba Femi wins", wrestler: "Oba Femi" }
    ],
    feudSubtitle: "The Conqueror answers The Beast's open challenge. Watch the moment the world changed.",
    feudVideos: [
      { id: "B04v0CY9kw0", start: 130, end: 162, label: "The Challenge", title: "Oba Femi Confronts Brock Lesnar", desc: "Oba answers Brock's open WrestleMania challenge. Two massive forces stand face to face. You can feel the tension." },
      { id: "B04v0CY9kw0", start: 170, end: 183, label: "The Iconic Moment", title: "Oba Points at the WrestleMania Sign", desc: "After destroying Brock with Fall From Grace, Oba stands over The Beast with his foot on Brock's chest and points to the WrestleMania sign. A star is born." }
    ]
  },
  {
    id: "match-6",
    wrestler1: "aj-lee",
    wrestler2: "becky-lynch",
    championship: "Women's Intercontinental Championship",
    isTitleMatch: true,
    night: null,
    bannerImg: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/2026/03/20260306_WM42_StephLiv_MM_16x9_Date.jpg",
    whyItMatters: "AJ Lee has had Becky Lynch's number <strong>every single time</strong> they've faced off. Mixed tag at Wrestlepalooza? AJ submitted Becky. WarGames at Survivor Series? AJ won again. The Women's Intercontinental Championship at Elimination Chamber? AJ made Becky tap. This is Becky Lynch's <strong>last chance at redemption</strong> -- on the grandest stage of them all. Can \"The Man\" finally solve the puzzle of a woman who returned after 11 years and has been absolutely unstoppable?",
    storySoFar: "The rivalry ignited at Wrestlepalooza when AJ Lee and CM Punk faced Becky Lynch and Seth Rollins in a Mixed Tag Team match -- AJ submitted Becky to win. Their war continued at Survivor Series 2025 in WarGames, where AJ got the better of Becky again. Then at Elimination Chamber 2026, AJ Lee captured the Women's Intercontinental Championship by forcing Becky to submit <em>yet again.</em> After AJ successfully defended the title against Bayley on the March 16 episode of Raw, Becky Lynch launched a vicious post-match attack. Rather than back down, AJ challenged Becky to one more match -- this time for the title at WrestleMania. The stakes have never been higher.",
    predictions: [
      { label: "AJ Lee retains", wrestler: "AJ Lee" },
      { label: "Becky Lynch wins", wrestler: "Becky Lynch" }
    ],
    feudSubtitle: "Can The Man finally conquer The Hybrid Athlete? Watch their war unfold.",
    feudVideos: [
      { id: "-ciHeeXLZe8", start: 7, end: 69, label: "The Attack", title: "Becky Lynch Attacks AJ Lee", desc: "After AJ successfully defends her title, Becky Lynch launches a vicious post-match attack. This is FAR from over." },
      { id: "hm3XFZEt1cw", start: 47, end: 80, label: "It's Official", title: "WrestleMania Match Is Set", desc: "The WrestleMania match is made official. AJ Lee vs Becky Lynch for the Women's Intercontinental Championship. No more games." }
    ]
  },
  {
    id: "match-7",
    wrestler1: "sami-zayn",
    wrestler2: "trick-williams",
    championship: "United States Championship",
    isTitleMatch: true,
    night: null,
    bannerImg: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/2026/03/WM42_SamiTrick__Tron_16x9_date.jpg",
    whyItMatters: "A <strong>veteran vs. rising star</strong> showdown. Sami Zayn wasn't even on the WrestleMania card -- so he went out and WON the United States Championship in an open challenge just to earn his spot. That's how much WrestleMania means to him. Trick Williams is making his <strong>WrestleMania debut</strong> -- a 6'5\" charismatic powerhouse who's been the hottest thing out of NXT. Zayn is the beloved underdog who has delivered iconic WrestleMania moments year after year. Can Trick \"Whoop That WrestleMania\" or will Zayn deliver more WrestleMania magic?",
    storySoFar: "Trick Williams was confirmed for the WrestleMania card while Sami Zayn was left off entirely. Rather than accept being left out, Zayn answered then-U.S. Champion Carmelo Hayes' open challenge and shocked the world by winning the United States Championship. Now a two-time U.S. Champion, Zayn finally has his spot on the card -- but Trick Williams is standing in his way. This is Zayn's first-ever WrestleMania championship defense, and Trick's first-ever WrestleMania match. Both men have <em>everything</em> to prove.",
    predictions: [
      { label: "Sami Zayn retains", wrestler: "Sami Zayn" },
      { label: "Trick Williams wins", wrestler: "Trick Williams" }
    ],
    feudSubtitle: "Can Trick Whoop That WrestleMania or will Zayn deliver more magic?",
    feudVideos: []
  },
  {
    id: "match-8",
    wrestler1: "drew-mcintyre",
    wrestler2: "jacob-fatu",
    championship: "Unsanctioned Match",
    isTitleMatch: false,
    night: null,
    bannerImg: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/2026/03/WM42_DrewJacob_MM_16x9_Date.jpg",
    whyItMatters: "This is an <strong>Unsanctioned Match</strong> -- which means <strong>there are NO rules.</strong> No disqualifications, no countouts, no protection from officials. Chairs, tables, ladders, anything goes. WWE doesn't officially sanction this match because it's too dangerous. Jacob Fatu is a member of the Anoa'i dynasty (Roman Reigns' family) and is the most violent, uncontrollable force on SmackDown. Drew McIntyre is a bitter, rage-fueled Scottish warrior who has been pushed to his breaking point. These two have been trying to DESTROY each other for weeks -- and now there are zero rules to stop them.",
    storySoFar: "The hatred runs deep. Jacob Fatu helped cost Drew McIntyre the Undisputed WWE Championship against Cody Rhodes, and McIntyre has never forgiven him. Drew faked leaving SmackDown entirely, only to return and ambush Fatu during a match. Their war escalated on the March 20 SmackDown when they brawled from the <em>opening moments of the show until the very end</em> -- culminating in them throwing each other off a high steel balcony. SmackDown GM Nick Aldis had no choice but to make this an Unsanctioned Match at WrestleMania. No rules. No protection. Just two men trying to end each other.",
    predictions: [
      { label: "Drew McIntyre wins", wrestler: "Drew McIntyre" },
      { label: "Jacob Fatu wins", wrestler: "Jacob Fatu" }
    ],
    feudSubtitle: "No rules. No protection. Just chaos. Watch how this war spiraled out of control.",
    feudVideos: []
  }
];

// Make data available globally
window.WM42_DATA = { WRESTLERS, MATCHES };
