import { Paper, Course, Photo, Note } from './types';

export const SITE_CONFIG = {
  name: "Zhuoxiang (Shawn) Zhou",
  title: "Senior in Economics",
  institution: "Peking University",
  email: "zhuoxiang.zhou@gmail.com",
  twitter: "",
  github: "",
  linkedin: "https://linkedin.com/in/zhuoxiang-zhou-b25478288/",
  bio: "I am a senior undergraduate in Economics at Peking University. I will join Stanford University this summer as a predoctoral research fellow in economics, working with Professor Matthew Gentzkow.",
  bio2: "My research focuses on labor economics and the economics of technology and innovation. I study how policy instruments shape individual behavior and human capital formation, and how access to and adoption of new technologies affect productivity, welfare, and inequality.",
  office: "National School of Development, Peking University"
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
    title: "Contraceptive Methods, Health, and Welfare: Evidence from India's NFHS",
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
    authors: ["Zhuoxiang Zhou", "Richard B. Freeman", "Wei Huang"],
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
    authors: ["Zhuoxiang Zhou"],
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
    caption: 'Boya (Liberal Education) Tower, Peking University, Beijing, China', 
    description: 'Where thought climbs higher than the stone that bears it.',
    size: 'tall',
    column: 1,
    order: 1
  },
  { 
    id: 'ph2',
    url: '/photos/SF_beach_far_bridge.jpg', 
    caption: 'Golden Gate Bridge, San Francisco, USA', 
    description: 'Fog drifts like memory over the sea, where a bridge threads the world to its horizon.',
    size: 'tall',
    column: 1,
    order: 2
  },
  { 
    id: 'ph3',
    url: '/photos/Cangnan_facing_sun.jpg', 
    caption: 'Cangnan, Zhejiang, China', 
    description: 'Give me light, and let me see.',
    size: 'tall',
    column: 1,
    order: 3
  },
  { 
    id: 'ph4',
    url: '/photos/SF_fishing.jpg', 
    caption: 'Golden Gate Bridge, San Francisco, USA', 
    description: 'A man got a crab.',
    size: 'tall',
    column: 1,
    order: 4
  },
  { 
    id: 'ph5',
    url: '/photos/SF_golden_gate_bridge.jpg', 
    caption: 'Boston, Massachusetts, USA',  
    description: 'The Golden Gate rises through sea and sky, a bridge of steel and light linking horizons and dreams.',
    aspectRatio: '9/20',
    column: 1,
    order: 5
  },
  { 
    id: 'ph6',
    url: '/photos/Yanling_rural.jpg', 
    caption: 'Yanling, Henan, China',  
    description: 'Beneath the turning blades of a windmill, two farmers rest by their tricycles.',
    aspectRatio: '9/20',
    column: 1,
    order: 6
  },
  { 
    id: 'ph7',
    url: '/photos/Beihai_Park_cat.jpg', 
    caption: 'Beihai Park, Beijing, China',  
    description: 'A golden cat walks along a sunlit roof',
    aspectRatio: '9/20',
    column: 1,
    order: 7
  },
  { 
    id: 'ph8',
    url: '/photos/Wuyuan_reflection.jpg', 
    caption: 'Likeng, Wuyuan, Jiangxi, China', 
    description: 'A serene morning in Likeng, capturing the traditional architecture reflected in the water.',
    size: 'normal',
    column: 2,
    order: 1
  },
  { 
    id: 'ph9',
    url: '/photos/SF_palace.jpg', 
    caption: 'Palace of Fine Arts, San Francisco, USA', 
    description: 'Give me light, and let me see.',
    size: 'extra-tall',
    column: 2,
    order: 2
  },
  { 
    id: 'ph10',
    url: '/photos/Summer_Palace_reflection_tree.jpg', 
    caption: 'Summer Palace, Beijing, China',  
    description: 'Winter sketches its memory across a frozen mirror.',
    aspectRatio: '9/20',
    column: 2,
    order: 3
  },
  { 
    id: 'ph11',
    url: '/photos/Boston_snow_park.jpg', 
    caption: 'Boston, Massachusetts, USA',  
    description: 'A lone runner crosses a quiet, snow-covered park—motion etched against the stillness of winter.',
    aspectRatio: '9/20',
    column: 2,
    order: 4
  },
  { 
    id: 'ph12',
    url: '/photos/Summer_Palace_lotus_leaves.jpg', 
    caption: 'Summer Palace, Beijing, China',  
    description: 'Golden light drifts over still water, where withered lotus leaves stand like memories of a passing summer.',
    size: 'tall',
    column: 2,
    order: 5
  },
  { 
    id: 'ph13',
    url: '/photos/SF_beach.jpg', 
    caption: 'Ocean Beach, San Francisco, USA',  
    description: 'Wings, wind, and waves—three kinds of motion, one kind of peace.',
    size: 'tall',
    column: 2,
    order: 6
  },
  { 
    id: 'ph14',
    url: '/photos/Boston_snowman.jpg', 
    caption: 'Boston, Massachusetts, USA',  
    description: 'A tiny snowman reaches toward the winter sun, melting slowly into the light.',
    size: 'tall',
    column: 2,
    order: 7
  },
  { 
    id: 'ph15',
    url: '/photos/Plane_overlook.jpg', 
    caption: 'Overlooking the landscape from a plane to Beijing', 
    description: 'Color adjusted for effect.',
    aspectRatio: '9/20',
    column: 3,
    order: 1
  },
  { 
    id: 'ph16',
    url: '/photos/Cangnan_boat_flag.jpg', 
    caption: 'Cangnan, Zhejiang, China', 
    description: 'An abandoned boat greets the dawn with its one red whisper.',
    size: 'wide',
    column: 3,
    order: 2
  },
  { 
    id: 'ph17',
    url: '/photos/Chengze_Garden_green.jpg', 
    caption: 'Chengze Garden, Beijing, China',  
    description: 'Lush greenery, a peaceful retreat in the heart of the city.',
    aspectRatio: '9/20',
    column: 3,
    order: 3
  },
  { 
    id: 'ph18',
    url: '/photos/Boston_airplane.jpg', 
    caption: 'Boston, Massachusetts, USA',  
    description: 'A plane carves a silver line across the sky, while sunlight filters through the leaves.',
    aspectRatio: '9/20',
    column: 3,
    order: 4
  },
  { 
    id: 'ph19',
    url: '/photos/Beihai_Park_mandarin_ducks.jpg', 
    caption: 'Beihai Park, Beijing, China',  
    description: 'A pair of mandarin ducks glide together across the water, their quiet grace reflecting harmony and devotion.',
    aspectRatio: '9/20',
    column: 3,
    order: 5
  },
  { 
    id: 'ph20',
    url: '/photos/Nanluoguxiang_bird.jpg', 
    caption: 'Nanluoguxiang, Beijing, China',  
    description: 'A flock rises into the pale sky, leaving the bare branches below in quiet stillness.',
    aspectRatio: '9/20',
    column: 3,
    order: 6
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