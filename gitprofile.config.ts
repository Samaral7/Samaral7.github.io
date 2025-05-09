// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Samaral7', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Samaral7/MetaDataTutorial', 'Samaral7/GenomeAssemblySofia'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Investigating the Correlation Between Textile Materials and Environmental Conditions on DNA Degradation in Bloodstains ',
          description:
            'This is my research proposal for my current McNair research analyzing how textile materials and enviromental conditions affect DNA degredation dependently of one another',
          imageUrl:
            'https://github.com/Samaral7/Samaral7.github.io/raw/main/Research.png',
          link: 'https://github.com/Samaral7/Samaral7.github.io/raw/main/McNairResearch.pdf',
        },
        {
          title: 'Reduced light intensity decreases photosynthesis and shifts resource allocation towards the shoot in sunflower plants (Helianthus annuus)',
          description:
            'This presentation describes the 4 week investigation I conducted researching the allocation of resources in light-limited sunflower plants. ',
          imageUrl:
            'https://github.com/Samaral7/Samaral7.github.io/raw/main/Plant.png',
          link: 'https://github.com/Samaral7/Samaral7.github.io/raw/main/SunflowerResearch.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Sofia Amaral',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'sofiaamaral044@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/Samaral7/Samaral7.github.io/raw/main/Amaral%2C%20Sofia-CV%20(1).pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Microsoft Office',
    'Salesforce',
    'Microscopy',
    'Micropipetting',
  ],
  experiences: [
    {
      company: 'California State University Stanislaus, CAPE Department',
      position: 'Evaluator Student Assistant',
      from: '2021',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'California State University, Stanislaus',
      position: 'Undergraduate Researcher',
      from: 'Spring 2025',
      to: 'Spring 2025',
      companyLink: '',
    },
    {
      company: 'California State University, Stanislaus',
      position: 'McNair Scholar',
      from: 'Spring 2025',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'California State University, Stanislaus Police Department',
      position: 'Student Police Academy',
      from: 'Spring 2025',
      to: 'Spring 2025',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'California State University, Stanislaus',
      degree: 'B.S in Biologoical Sciences',
      from: '2021',
      to: 'Present',
    },
    {

    },
  ],
  publications: [
    {
      title: 'Genome Sequence of Atlantibacter subterranea DSM 16208 Isolated from Uranium-contaminated Sediment ',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcements',
      authors: 'Sofia Amaral, Luis Garcia, Adrianna Gonzalez, Samantha Prince, Komal Takhar , Tricia Van Laar',
      link: 'https://github.com/Samaral7/Samaral7.github.io/blob/main/MRA_Template.pdf',
      description:
        'This is a manuscript in submission. We report the whole genome sequence of an antibiotic-resistant strain of Atlantibacter subterranea isolated from Uranium-contaminated sediment in Tennessee. The genome sequence of this strain was 4,717,064 bp in length, contained 34 contigs and 29 scaffolds, and with a GC content of 55.17%.',
    },
    {
      title: 'Investigating the Correlation Between Textile Materials and Environmental Conditions on DNA Degradation in Bloodstains ',
      conferenceName: '',
      journalName: '',
      authors: 'Sofia Amaral',
      link: 'https://github.com/Samaral7/Samaral7.github.io/blob/main/Research%20Proposal%20Draft.pdf',
      description:
        'This is a research proposal for a McNair research project. This study investigates how different textile materials and environmental conditions influence DNA degradation and the efficiency of DNA extraction from blood stains. By understanding the limitations of DNA, forensic scientists can understand the limitations of their own analysis. Different textile materials and environmental conditions will significantly affect the rate of DNA degradation in bloodstains with natural fibers exhibiting higher degradation rates under harsher environmental conditions compared to synthetic fibers.  ',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'retro',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
