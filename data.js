const careerData = [
  {
    "period": "Sep 2024 \u2013 Present",
    "company": "Eric Wright Water",
    "role": "Electrical Project Engineer \u2014 Welsh Water Minors",
    "summary": "Coordinating access, labour, plant, cables and equipment for multidisciplinary framework upgrades, particularly flows and packaged-plant work.",
    "details": [
      "Resource coordination across civils, mechanical and electrical disciplines",
      "RAMS preparation and safe systems of work",
      "Packaged plant and inlet works",
      "Cable and equipment procurement",
      "Site-based installation support",
      "Apprentice mentoring"
    ]
  },
  {
    "period": "2022 \u2013 Sep 2024",
    "company": "Juswrk Limited",
    "role": "Site / Project Manager",
    "summary": "Managed 27 M&E contractors across seven UK teams delivering retail installation rollouts and event-based fit-out work.",
    "details": [
      "Sainsbury's, B&Q, Lidl and ScrewfixLive projects",
      "Electrical and shelving refurbishment",
      "HD, cantilever and pushback racking",
      "Hospital hygiene-system replacement",
      "Team and logistics coordination"
    ]
  },
  {
    "period": "2009 \u2013 2022",
    "company": "4SiteOnline",
    "role": "NIC Approved Contractor / Proprietor",
    "summary": "Industrial electrical contracting and web services with a strong retail, commercial and industrial focus.",
    "details": [
      "Power, HVAC, lighting and security systems",
      "Retail fit-outs and refurbishments",
      "Testing and certification",
      "Online retail and web services",
      "ASDA, Tesco, Apple UK and other clients"
    ]
  },
  {
    "period": "2000 \u2013 2009",
    "company": "Siteguard UK Ltd / Image Systems",
    "role": "Managing Director / Proprietor",
    "summary": "Designed, installed and supported remote monitoring, CCTV, access and security systems across construction, utilities and industrial sites.",
    "details": [
      "AMP3, AMP4 and AMP5 water-treatment frameworks",
      "Construction rental monitoring systems",
      "Industrial and utilities security systems",
      "ADT upgrade and major works",
      "Hundreds of UK projects"
    ]
  },
  {
    "period": "1989 \u2013 2000",
    "company": "Cheshire Communications / In-Phaze / Elite Video Systems",
    "role": "Apprentice Engineer to Installation Manager",
    "summary": "Progressed from CCTV and containment installation into contracting and management of national and multi-campus systems.",
    "details": [
      "Premiership football clubs",
      "Shopping centres and industrial complexes",
      "Schools and colleges",
      "National account installations",
      "Containment, cabling and commissioning"
    ]
  }
];

const qualifications = [
  "City & Guilds 2330 Level 2",
  "City & Guilds 2330 Level 3",
  "2391 Inspection & Testing",
  "CSCS Managers Card",
  "MEWP / Cherry Picker",
  "Forklift",
  "CAT & Genny Scanning",
  "Current First Aid",
  "Additional qualifications available on request"
];

const albums = [
  "https://www.flickr.com/photos/storefit/albums/72157700847161484",
  "https://www.flickr.com/photos/storefit/albums/72157655560973033",
  "https://www.flickr.com/photos/storefit/albums/72157657885802191",
  "https://www.flickr.com/photos/storefit/albums/72157657126776315",
  "https://www.flickr.com/photos/storefit/albums/72157656672963241",
  "https://www.flickr.com/photos/storefit/albums/72157655466610035",
  "https://www.flickr.com/photos/storefit/albums/72157652697343304",
  "https://www.flickr.com/photos/storefit/albums/72157654389624950",
  "https://www.flickr.com/photos/storefit/albums/72157654382542658",
  "https://www.flickr.com/photos/storefit/albums/72157653969190341",
  "https://www.flickr.com/photos/storefit/albums/72157653245028795",
  "https://www.flickr.com/photos/storefit/albums/72157653187878775",
  "https://www.flickr.com/photos/storefit/albums/72157650676931974",
  "https://www.flickr.com/photos/storefit/albums/72157650181939709",
  "https://www.flickr.com/photos/storefit/albums/72157650589926751",
  "https://www.flickr.com/photos/storefit/albums/72157650164851846",
  "https://www.flickr.com/photos/storefit/albums/72157650164527376",
  "https://www.flickr.com/photos/storefit/albums/72157645233365346",
  "https://www.flickr.com/photos/storefit/albums/72157644821989289",
  "https://www.flickr.com/photos/storefit/albums/72157645228877184",
  "https://www.flickr.com/photos/storefit/albums/72157645045114116",
  "https://www.flickr.com/photos/storefit/albums/72157644662897938",
  "https://www.flickr.com/photos/storefit/albums/72157645065092892",
  "https://www.flickr.com/photos/storefit/albums/72157645022223486",
  "https://www.flickr.com/photos/storefit/albums/72157645064506342",
  "https://www.flickr.com/photos/storefit/albums/72157644651971758",
  "https://www.flickr.com/photos/storefit/albums/72157645064929574",
  "https://www.flickr.com/photos/storefit/albums/72157644651461827",
  "https://www.flickr.com/photos/storefit/albums/72157645106503313",
  "https://www.flickr.com/photos/storefit/albums/72157644650687797",
  "https://www.flickr.com/photos/storefit/albums/72157644650777568",
  "https://www.flickr.com/photos/storefit/albums/72157645049945901",
  "https://www.flickr.com/photos/storefit/albums/72157644644814460",
  "https://www.flickr.com/photos/storefit/albums/72157644708617951",
  "https://www.flickr.com/photos/storefit/albums/72157644695913062",
  "https://www.flickr.com/photos/storefit/albums/72157644748791553",
  "https://www.flickr.com/photos/storefit/albums/72157644653001936",
  "https://www.flickr.com/photos/storefit/albums/72157644292264879",
  "https://www.flickr.com/photos/storefit/albums/72157635760671854"
];

const referenceItems = [
  {
    "title": "Tank Sizing",
    "type": "Formula Tool",
    "description": "Volume calculations for common tank shapes.",
    "url": "#tank-sizing",
    "status": "Starter reference"
  },
  {
    "title": "Flow Capacity Testing",
    "type": "Procedure",
    "description": "Survey method, observations and L/s recording.",
    "url": "#flow-capacity",
    "status": "Starter reference"
  },
  {
    "title": "Pump Performance",
    "type": "Formula Tool",
    "description": "Flow, head, power and efficiency reference.",
    "url": "#pump-performance",
    "status": "Starter reference"
  },
  {
    "title": "Electrical Testing",
    "type": "Technical Reference",
    "description": "Inspection, testing, commissioning and fault-finding notes.",
    "url": "#electrical-testing",
    "status": "Starter reference"
  },
  {
    "title": "NRV Development",
    "type": "Engineering Concept",
    "description": "Non-return valve cleaning and throttling concept notes.",
    "url": "#nrv-development",
    "status": "Starter reference"
  },
  {
    "title": "Project Evidence",
    "type": "Experience",
    "description": "Historic photographic project archive.",
    "url": "https://www.flickr.com/photos/storefit/albums/",
    "status": "Live external link"
  }
];
