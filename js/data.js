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
    nickname: "Liv Morgan Revenge Tour",
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
  }
];

// Make data available globally
window.WM42_DATA = { WRESTLERS, MATCHES };
