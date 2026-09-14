import { Paper, Course, Photo, Note } from './types';

export const PROFILE_NAME = {
  given: 'Zhuoxiang',
  family: 'Zhou',
  preferred: 'Shawn',
};

export const SITE_CONFIG = {
  name: `${PROFILE_NAME.given} (${PROFILE_NAME.preferred}) ${PROFILE_NAME.family}`,
  title: "Stanford Institute for Economic Policy Research",
  institution: "Stanford University",
  email: "zhuoxiang.zhou@gmail.com",
  twitter: "",
  github: "",
  linkedin: "https://linkedin.com/in/zhuoxiang-zhou-b25478288/",
  advisor: {
    name: "Matthew Gentzkow",
    url: "https://matthewgentzkow.com/"
  },
  bio: "I am a predoctoral research fellow in economics at Stanford University, working with Professor Matthew Gentzkow. I received my B.A. in Economics from Peking University.",
  bio2: "My research focuses on labor economics and the economics of technology and innovation. I study how policy instruments shape individual behavior and human capital formation, and how access to and adoption of new technologies affect productivity, welfare, and inequality.",
  office: ""
};

export const PAPERS: Paper[] = [
  {
    id: 'p1',
    title: "Crossing the Line: The Role of Academic Excellence Recognition in Shaping Academic and Career Trajectories",
    authors: ["Wei Huang", "Ziyao Zhang"],
    authorLinks: { "Wei Huang": "https://huangweipku.com/" },
    journalStatus: "Reject and Resubmit, ",
    journal: "American Economic Journal: Economic Policy",
    year: 2026,
    status: "Working Paper",
    abstract: "This study examines the impact of early academic recognition on student outcomes, exploiting a score threshold in the Principles of Economics course within an economics minor program. Using a natural experiment approach, we find that students achieving this threshold outperform peers in subsequent courses, secure more scholarships, and access top post-graduation opportunities, including elite graduate programs and economics-related employment. Recognition at this threshold significantly boosts motivation, with students who value it achieving even stronger results. These findings underscore the role of non-material recognition in enhancing student engagement, academic performance, and favorable career trajectories in educational settings.",
    link: "#",
    topics: ["Labor Economics", "Education"]
  },
  {
    id: 'p2',
    title: "Domestic Rewards, Global Incidence: Evidence from China’s Journal-Ranking Cutoff",
    authors: ["Wei Huang", "Qingfeng Liu", "Shilin Zheng"],
    authorLinks: { "Wei Huang": "https://huangweipku.com/" },
    year: 2026,
    status: "Working Paper",
    abstract: "Scientific evaluation increasingly relies on rankings, but rankings can do more than measure science when institutions convert metric categories into high-stakes rewards. They can become allocation mechanisms for scientific visibility, reallocating published authorship credit within shared scientific venues. We study this mechanism in China’s journal-ranking regime, where the Chinese Academy of Sciences classifies journals into reward-relevant tiers using sharp subfield-specific cutoffs. The Tier-1 boundary creates a discontinuous increase in the institutional value of publishing in journals just above the cutoff, even though journals just below it are closely comparable in measured standing. Linking CAS rankings to paper-level Web of Science records from 2000 to 2020, we exploit this boundary in a regression discontinuity design. Journals just above the cutoff publish substantially more China-affiliated first-author papers than journals just below it, with an increase of about 3 percentage points, or roughly one-fifth of the below-cutoff mean. The response is larger where institutional rewards are stronger and emerges after universities adopt explicit CAS-based publication incentives. The marginal increase in China-affiliated publications falls disproportionately in lower parts of the subsequent citation distribution, indicating a shift in the citation-based composition of marginal publications. It is also accompanied by reductions in non-China first-authored papers, while international collaboration margins change little. These findings show that rankings are not neutral scorecards. When tied to discrete rewards, they become institutional incentives that can redirect authorship, citation profiles, and scientific visibility within globally shared publication venues.",
    topics: ["Innovation", "Economics of Science", "Labor Economics"]
  },
  {
    id: 'p3',
    title: "Contraceptive Methods and Anemia in India: A Cost-Benefit Simulation of Hormonal IUD Provision",
    authors: ["David I. Levine"],
    authorLinks: { "David I. Levine": "https://haas.berkeley.edu/faculty/david-i-levine/" },
    year: 2026,
    status: "Working Paper",
    abstract: "This paper investigates the relationship between contraceptive methods and health/welfare outcomes in India using data from the National Family Health Survey (NFHS).",
    topics: ["Development Economics", "Health Economics"]
  },
  {
    id: 'p4',
    title: "Equalizer or Concentrator? Artificial Intelligence and Scientific Inequality",
    authors: ["Richard B. Freeman", "Wei Huang"],
    authorLinks: { 
      "Richard B. Freeman": "https://freeman.scholars.harvard.edu/",
      "Wei Huang": "https://huangweipku.com/" 
    },
    year: 2026,
    status: "Work in Progress",
    abstract: "Exploring how AI adoption impacts inequality within the scientific community.",
    topics: ["Innovation", "Labor Economics"]
  },
  {
    id: 'p5',
    title: "The Economic Incidence of Excise Taxes: Tax Pass-Through, Consumer Behavior, and Welfare Impacts",
    authors: [],
    year: 2026,
    status: "Work in Progress",
    abstract: "Analyzing the pass-through effects of excise taxes and their impact on consumer welfare.",
    topics: ["Public Economics"]
  }
];

export const BOOK_CHAPTERS: Paper[] = [];

export const CHINESE_PUBLICATIONS = [
  {
    id: 'cp1',
    citation: "黄炜、蔡睿思、周卓翔*. 人工智能如何重塑科研生产与国际化：来自中国经管学者国际发表的大样本证据. 管理世界，返修."
  }
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    code: "ECON",
    title: "Applied Econometrics",
    level: "PhD",
    role: "Teaching Assistant",
    semester: "Fall 2025",
    description: "Led weekly tutorials and Q&A sessions covering randomized controlled trials (RCT), instrumental variables (IV), regression discontinuity (RD), difference-in-differences (DiD), and event-study designs."
  },
  {
    id: 'c2',
    code: "ECON",
    title: "Econometrics",
    level: "Undergraduate",
    role: "Teaching Assistant",
    semester: "Fall 2025",
    description: "Led weekly tutorial sessions covering ordinary least squares (OLS), multiple regression, dummy variables, heteroskedasticity, panel data, and causal inference methods."
  }
];

export const PHOTOS: Photo[] = [
  { 
    id: 'ph1',
    url: '/photos/PKU_tower.jpg', 
    title: 'Double Sky',
    location: 'Peking University, Beijing, China',
    literaryQuote: {
      text: '天光雲影共徘徊。',
      translation: 'Sky-light and cloud-shadows wander together.',
      citation: '朱熹，《觀書有感》',
      language: 'zh-Hant',
    },
    column: 3,
    order: 7,
  },
  { 
    id: 'ph2',
    url: '/photos/SF_beach_far_bridge.jpg', 
    title: 'Half-Seen',
    location: 'San Francisco, California, USA',
    literaryQuote: {
      text: 'The fog comes on little cat feet.',
      citation: 'Carl Sandburg, “Fog”',
      language: 'en',
    },
    column: 2,
    order: 11,
  },
  { 
    id: 'ph3',
    url: '/photos/Cangnan_facing_sun.jpg', 
    title: 'Open Hands',
    location: 'Cangnan, Zhejiang, China',
    literaryQuote: {
      text: 'I am large, I contain multitudes.',
      citation: 'Walt Whitman, “Song of Myself”',
      language: 'en',
    },
    column: 1,
    order: 6,
  },
  { 
    id: 'ph4',
    url: '/photos/SF_fishing.jpg', 
    title: 'The Tender Line',
    location: 'San Francisco, California, USA',
    literaryQuote: {
      text: 'And we must take the current when it serves',
      citation: 'William Shakespeare, Julius Caesar',
      language: 'en',
    },
    column: 3,
    order: 4,
  },
  { 
    id: 'ph5',
    url: '/photos/SF_golden_gate_bridge.jpg', 
    title: 'Across',
    location: 'San Francisco, California, USA',
    literaryQuote: {
      text: 'I’m in California\ndreaming about who we used to be;\nwhen we were younger and free.',
      citation: 'Adele, “Hello”',
      language: 'en',
    },
    column: 3,
    order: 1,
  },
  { 
    id: 'ph6',
    url: '/photos/Yanling_rural.jpg', 
    title: 'After Labor',
    location: 'Yanling, Henan, China',
    literaryQuote: {
      text: 'The labour we delight in physics pain.',
      citation: 'William Shakespeare, Macbeth',
      language: 'en',
    },
    column: 3,
    order: 11,
  },
  { 
    id: 'ph7',
    url: '/photos/Beihai_Park_cat.jpg', 
    title: 'Minor Majesty',
    location: 'Beihai Park, Beijing, China',
    literaryQuote: {
      text: 'For I will consider my Cat Jeoffry.',
      citation: 'Christopher Smart, Jubilate Agno',
      language: 'en',
    },
    column: 2,
    order: 10,
  },
  { 
    id: 'ph8',
    url: '/photos/Wuyuan_reflection.jpg', 
    title: 'Below the Morning',
    location: 'Likeng, Wuyuan, Jiangxi, China',
    literaryQuote: {
      text: '行到水窮處，坐看雲起時。',
      translation: 'I walk to where the water ends and sit to watch the clouds arise.',
      citation: '王維，《終南別業》',
      language: 'zh-Hant',
    },
    column: 2,
    order: 3,
  },
  { 
    id: 'ph9',
    url: '/photos/SF_palace.jpg', 
    title: 'The Long Threshold',
    location: 'San Francisco, California, USA',
    literaryQuote: {
      text: 'The light that never was, on sea or land,',
      citation: 'William Wordsworth, “Elegiac Stanzas”',
      language: 'en',
    },
    column: 2,
    order: 4,
  },
  { 
    id: 'ph10',
    url: '/photos/Summer_Palace_reflection_tree.jpg', 
    title: 'Frozen Grammar',
    location: 'Summer Palace, Beijing, China',
    literaryQuote: {
      text: 'If Winter comes, can Spring be far behind?',
      citation: 'Percy Bysshe Shelley, “Ode to the West Wind”',
      language: 'en',
    },
    column: 3,
    order: 5,
  },
  { 
    id: 'ph11',
    url: '/photos/Boston_snow_park.jpg', 
    title: 'White Interval',
    location: 'Boston, Massachusetts, USA',
    literaryQuote: {
      text: 'One must have a mind of winter',
      citation: 'Wallace Stevens, “The Snow Man”',
      language: 'en',
    },
    column: 1,
    order: 9,
  },
  { 
    id: 'ph12',
    url: '/photos/Summer_Palace_lotus_leaves.jpg', 
    title: 'Amber Relics',
    location: 'Summer Palace, Beijing, China',
    literaryQuote: {
      text: '留得枯荷聽雨聲。',
      translation: 'The withered lotus remains to listen to the rain.',
      citation: '李商隱，《宿駱氏亭寄懷崔雍崔袞》',
      language: 'zh-Hant',
    },
    column: 2,
    order: 5,
  },
  { 
    id: 'ph13',
    url: '/photos/SF_beach.jpg', 
    title: 'Between Motions',
    location: 'Ocean Beach, San Francisco, California, USA',
    literaryQuote: {
      text: 'I must go down to the seas again, to the lonely sea and the sky,',
      citation: 'John Masefield, “Sea-Fever”',
      language: 'en',
    },
    column: 1,
    order: 11,
  },
  { 
    id: 'ph14',
    url: '/photos/Boston_snowman.jpg', 
    title: 'Brief Figure',
    location: 'Boston, Massachusetts, USA',
    literaryQuote: {
      text: 'We are such stuff as dreams are made on,',
      citation: 'William Shakespeare, The Tempest',
      language: 'en',
    },
    column: 3,
    order: 9,
  },
  { 
    id: 'ph15',
    url: '/photos/Plane_overlook.jpg', 
    title: 'Cartography of Air',
    location: 'En route to Beijing, China',
    literaryQuote: {
      text: 'To see a World in a Grain of Sand',
      citation: 'William Blake, “Auguries of Innocence”',
      language: 'en',
    },
    column: 3,
    order: 6,
  },
  { 
    id: 'ph16',
    url: '/photos/Cangnan_boat_flag.jpg', 
    title: 'Dawn Signal',
    location: 'Cangnan, Zhejiang, China',
    literaryQuote: {
      text: 'I’ll tell you how the Sun rose –',
      citation: 'Emily Dickinson, “I’ll tell you how the Sun rose”',
      language: 'en',
    },
    column: 2,
    order: 6,
  },
  { 
    id: 'ph17',
    url: '/photos/Chengze_Garden_green.jpg', 
    title: 'Quiet Invasion',
    location: 'Chengze Garden, Beijing, China',
    literaryQuote: {
      text: 'Annihilating all that’s made to a green thought in a green shade.',
      citation: 'Andrew Marvell, “The Garden”',
      language: 'en',
    },
    column: 3,
    order: 8,
  },
  { 
    id: 'ph18',
    url: '/photos/Boston_airplane.jpg', 
    title: 'Transit',
    location: 'Boston, Massachusetts, USA',
    literaryQuote: {
      text: 'Nature’s first green is gold,',
      citation: 'Robert Frost, “Nothing Gold Can Stay”',
      language: 'en',
    },
    column: 2,
    order: 9,
  },
  { 
    id: 'ph19',
    url: '/photos/Beihai_Park_mandarin_ducks.jpg', 
    title: 'Vermilion Pair',
    location: 'Beihai Park, Beijing, China',
    literaryQuote: {
      text: '身無彩鳳雙飛翼，心有靈犀一點通。',
      translation: 'Though we have no paired phoenix wings, our hearts are joined at one point.',
      citation: '李商隱，《無題二首·昨夜星辰昨夜風》',
      language: 'zh-Hant',
    },
    column: 1,
    order: 10,
  },
  { 
    id: 'ph20',
    url: '/photos/Nanluoguxiang_bird.jpg', 
    title: 'Release',
    location: 'Nanluoguxiang, Beijing, China',
    literaryQuote: {
      text: '“Hope” is the thing with feathers',
      citation: 'Emily Dickinson, “Hope” is the thing with feathers',
      language: 'en',
    },
    column: 1,
    order: 12,
  },
  {
    id: 'ph21',
    url: '/photos/Summer_Palace_misty_pavilion.jpg',
    title: 'Pavilion in Mist',
    location: 'Summer Palace, Beijing, China',
    literaryQuote: {
      text: '霧失樓臺，月迷津渡。',
      translation: 'Mist hides the towers; moonlight loses the ferry crossing.',
      citation: '秦觀，《踏莎行·郴州旅舍》',
      language: 'zh-Hant',
    },
    column: 1,
    order: 5,
  },
  {
    id: 'ph22',
    url: '/photos/Summer_Palace_boat_reflections.jpg',
    title: 'Winter Mooring',
    location: 'Summer Palace, Beijing, China',
    literaryQuote: {
      text: '水深冰合。',
      translation: 'Deep water, sealed with ice.',
      citation: '辛棄疾，《賀新郎·把酒長亭說》',
      language: 'zh-Hant',
    },
    column: 3,
    order: 2,
  },
  {
    id: 'ph23',
    url: '/photos/SF_Chinatown_crossing.jpg',
    title: 'Crosscurrents',
    location: 'Chinatown, San Francisco, California, USA',
    literaryQuote: {
      text: '人生如逆旅，我亦是行人。',
      translation: 'Life is but an inn; I too am a traveler.',
      citation: '蘇軾，《臨江仙·送錢穆父》',
      language: 'zh-Hant',
    },
    column: 1,
    order: 1,
  },
  {
    id: 'ph24',
    url: '/photos/SF_cable_car.jpg',
    title: 'Going Places',
    location: 'San Francisco, California, USA',
    literaryQuote: {
      text: 'Afoot and light-hearted I take to the open road,',
      citation: 'Walt Whitman, “Song of the Open Road”',
      language: 'en',
    },
    column: 1,
    order: 2,
  },
  {
    id: 'ph25',
    url: '/photos/SF_Fishermans_Wharf_clown.jpg',
    title: 'Let Me Play the Fool',
    location: 'Fisherman’s Wharf, San Francisco, California, USA',
    literaryQuote: {
      text: 'And if I laugh at any mortal thing,\n’Tis that I may not weep.',
      citation: 'Lord Byron, Don Juan',
      language: 'en',
    },
    column: 3,
    order: 10,
  },
  {
    id: 'ph26',
    url: '/photos/SF_California_Street_downhill.jpg',
    title: 'The Only Way Forward',
    location: 'California Street, San Francisco, California, USA',
    literaryQuote: {
      text: 'Downward is the only way forward.',
      citation: 'Christopher Nolan, Inception',
      language: 'en',
    },
    column: 2,
    order: 1,
  },
  {
    id: 'ph27',
    url: '/photos/SF_Pier_39_seagull_love_locks.jpg',
    title: 'Love, Unlocked',
    location: 'Pier 39, San Francisco, California, USA',
    literaryQuote: {
      text: 'If you love somebody, set them free.',
      citation: 'Sting',
      language: 'en',
    },
    column: 1,
    order: 4,
  },
  {
    id: 'ph28',
    url: '/photos/Stanford_Hoover_Tower.jpg',
    title: 'The Wind of Freedom',
    location: 'Stanford University, Stanford, California, USA',
    literaryQuote: {
      text: 'Die Luft der Freiheit weht.',
      translation: 'The wind of freedom blows.',
      citation: 'Ulrich von Hutten / Stanford University motto',
      language: 'de',
    },
    column: 1,
    order: 7,
  },
  {
    id: 'ph29',
    url: '/photos/Stanford_Dish_radio_telescope.jpg',
    title: 'Listening',
    location: 'The Stanford Dish, Stanford, California, USA',
    literaryQuote: {
      text: 'Is there anybody out there?',
      citation: 'Pink Floyd, The Wall',
      language: 'en',
    },
    column: 3,
    order: 3,
  },
  {
    id: 'ph30',
    url: '/photos/UC_Berkeley_Sather_Tower.jpg',
    title: 'Let There Be Light',
    location: 'UC Berkeley, Berkeley, California, USA',
    literaryQuote: {
      text: 'Fiat Lux.',
      citation: 'UC Berkeley',
      language: 'la',
    },
    column: 2,
    order: 7,
  },
  {
    id: 'ph31',
    url: '/photos/SF_Independence_Day_250_fireworks.jpg',
    title: 'The Rockets’ Red Glare',
    location: 'San Francisco, California, USA',
    literaryQuote: {
      text: 'O say can you see…',
      citation: 'Francis Scott Key, “The Star-Spangled Banner”',
      language: 'en',
    },
    column: 1,
    order: 3,
  },
  {
    id: 'ph32',
    url: '/photos/Stanford_campus_statue.jpg',
    title: 'Prologue',
    location: 'Stanford University, Stanford, California, USA',
    literaryQuote: {
      text: 'What’s past is prologue.',
      citation: 'William Shakespeare, The Tempest',
      language: 'en',
    },
    column: 1,
    order: 8,
  },
  {
    id: 'ph33',
    url: '/photos/Stanford_campus_soccer.jpg',
    title: 'Very Heaven',
    location: 'Stanford University, Stanford, California, USA',
    literaryQuote: {
      text: 'But to be young was very heaven',
      citation: 'William Wordsworth, The Prelude',
      language: 'en',
    },
    column: 2,
    order: 8,
  },
  {
    id: 'ph34',
    url: '/photos/China_tea_garden_pavilion.jpg',
    title: 'Deep Retreat',
    location: 'Tea garden, China',
    literaryQuote: {
      text: '曲徑通幽處，禪房花木深。',
      translation: 'A winding footpath leads to deep retreat;\nThe abbot’s cell is hid’ mid flowers sweet.',
      citation: '常建，《題破山寺後禪院》',
      language: 'zh-Hant',
    },
    column: 2,
    order: 2,
  },
];

export const NOTES: Note[] = [
  {
    id: 'n1',
    title: "Setting up a reproducible research workflow with R",
    date: "Oct 12, 2024",
    tags: ["Methods", "Code"],
    preview: "Ideally, we want to go from raw data to final PDF with a single command. Here is my approach using Makefiles and RMarkdown...",
    content: "Full content placeholder..."
  },
  {
    id: 'n2',
    title: "Thoughts on the recent Fed announcement",
    date: "Sep 20, 2024",
    tags: ["Policy", "Macro"],
    preview: "The 50bps cut signals a significant shift in the FOMC's reaction function regarding labor market cooling...",
    content: "Full content placeholder..."
  }
];
