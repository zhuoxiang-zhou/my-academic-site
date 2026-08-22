import { Paper, Course, Photo, Note } from './types';

export const SITE_CONFIG = {
  name: "Zhuoxiang (Shawn) Zhou",
  title: "Stanford Institute for Economic Policy Research",
  institution: "Stanford University",
  email: "zhuoxiang.zhou@gmail.com",
  twitter: "",
  github: "",
  linkedin: "https://linkedin.com/in/zhuoxiang-zhou-b25478288/",
  bio: "I am a predoctoral research fellow in economics at Stanford University, working with Professor Matthew Gentzkow. I received my B.A. in Economics from Peking University.",
  bio2: "My research focuses on labor economics and the economics of technology and innovation. I study how policy instruments shape individual behavior and human capital formation, and how access to and adoption of new technologies affect productivity, welfare, and inequality.",
  office: ""
};

export const PAPERS: Paper[] = [
  {
    id: 'p1',
    title: "Crossing the Line: The Role of Academic Excellence Recognition in Shaping Academic and Career Trajectories",
    authors: ["Wei Huang"],
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
    title: "When Scientific Rankings Become Rewards: How Evaluation Thresholds Reallocate Scientific Visibility",
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

export const COURSES: Course[] = [
  {
    id: 'c1',
    code: "ECON",
    title: "Applied Econometrics (PhD-level)",
    level: "PhD",
    semester: "Fall 2025",
    description: "Taught in English; led weekly tutorial and Q&A sessions. Topics cover randomized controlled trials (RCT), instrumental variables (IV), regression discontinuity (RD), difference-in-differences (DiD), and event-study designs."
  },
  {
    id: 'c2',
    code: "ECON",
    title: "Econometrics",
    level: "Undergraduate",
    semester: "Fall 2025",
    description: "Led weekly tutorial sessions. Topics include ordinary least squares (OLS), multiple regression, dummy variables, heteroskedasticity, panel data, and causal inference methods."
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
    column: 1,
    order: 1,
    featured: true
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
    column: 1,
    order: 5,
    featured: false
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
    order: 2,
    featured: true
  },
  { 
    id: 'ph4',
    url: '/photos/SF_fishing.jpg', 
    title: 'The Tender Line',
    location: 'San Francisco, California, USA',
    literaryQuote: {
      text: 'The readiness is all.',
      citation: 'William Shakespeare, Hamlet',
      language: 'en',
    },
    column: 1,
    order: 6,
    featured: false
  },
  { 
    id: 'ph5',
    url: '/photos/SF_golden_gate_bridge.jpg', 
    title: 'Across',
    location: 'San Francisco, California, USA',
    literaryQuote: {
      text: 'I am a part of all that I have met;',
      citation: 'Alfred, Lord Tennyson, “Ulysses”',
      language: 'en',
    },
    column: 1,
    order: 3,
    featured: true
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
    column: 1,
    order: 7,
    featured: false
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
    column: 1,
    order: 4,
    featured: true
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
    order: 1,
    featured: true
  },
  { 
    id: 'ph9',
    url: '/photos/SF_palace.jpg', 
    title: 'The Long Threshold',
    location: 'San Francisco, California, USA',
    literaryQuote: {
      text: 'A thing of beauty is a joy for ever:',
      citation: 'John Keats, Endymion',
      language: 'en',
    },
    column: 2,
    order: 2,
    featured: true
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
    column: 2,
    order: 5,
    featured: false
  },
  { 
    id: 'ph11',
    url: '/photos/Boston_snow_park.jpg', 
    title: 'White Interval',
    location: 'Boston, Massachusetts, USA',
    literaryQuote: {
      text: 'The woods are lovely, dark and deep,',
      citation: 'Robert Frost, “Stopping by Woods on a Snowy Evening”',
      language: 'en',
    },
    column: 2,
    order: 3,
    featured: true
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
    order: 4,
    featured: true
  },
  { 
    id: 'ph13',
    url: '/photos/SF_beach.jpg', 
    title: 'Between Motions',
    location: 'Ocean Beach, San Francisco, California, USA',
    literaryQuote: {
      text: 'The sea is calm to-night.',
      citation: 'Matthew Arnold, “Dover Beach”',
      language: 'en',
    },
    column: 2,
    order: 6,
    featured: false
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
    column: 2,
    order: 7,
    featured: false
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
    order: 1,
    featured: true
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
    column: 3,
    order: 2,
    featured: true
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
    order: 5,
    featured: false
  },
  { 
    id: 'ph18',
    url: '/photos/Boston_airplane.jpg', 
    title: 'Transit',
    location: 'Boston, Massachusetts, USA',
    literaryQuote: {
      text: 'The world is charged with the grandeur of God.',
      citation: 'Gerard Manley Hopkins, “God’s Grandeur”',
      language: 'en',
    },
    column: 3,
    order: 6,
    featured: false
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
    column: 3,
    order: 3,
    featured: true
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
    column: 3,
    order: 4,
    featured: true
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
