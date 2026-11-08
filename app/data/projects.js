// Public, verified project descriptions. Add or update projects here.
export const projects = [
  {
    category: 'WORDPRESS PLUGIN', role: 'Development · Maintenance · Support',
    title: 'Jeg Kit for Elementor', slug: 'jeg-kit',
    description: 'Worked on features, compatibility, security fixes, and releases for an Elementor extension. I also investigated import issues and helped users through the support forum.',
    technologies: ['WordPress', 'PHP', 'React', 'jQuery', 'Elementor'],
    overview: 'Jeg Kit extends Elementor with widgets, templates, and theme-building tools. At Jegstudio, I held primary responsibility for its ongoing development, maintenance, releases, and user support.',
    contributions: [
      'Developed and maintained Elementor widgets, including compatibility improvements for multilingual sites using WPML.',
      'Investigated demo catalogue API and caching issues, as well as import and widget compatibility problems.',
      'Addressed reported cross-site scripting issues and improved input and output handling.',
      'Published updates and helped users troubleshoot issues through support forums and email.',
    ],
    links: [
      { label: 'Visit Jeg Kit', url: 'https://jegkit.com/' },
      { label: 'View the plugin', url: 'https://wordpress.org/plugins/jeg-elementor-kit/' },
      { label: 'WordPress.org activity at Jegstudio', url: 'https://profiles.wordpress.org/fauzanjegstudio/' },
    ],
  },
  {
    category: 'WORDPRESS PRODUCT', role: 'Development · Maintenance · Support', title: 'Profecient', slug: 'profecient',
    description: 'Led development and maintenance across the theme and its plugins, working on theme-builder interfaces, integrations, compatibility, and user support.',
    technologies: ['WordPress', 'PHP', 'React', 'Elementor'],
    links: [{ label: 'Visit Profecient', url: 'https://profecient.jegtheme.com/' }],
    overview: 'At Jegstudio, I led the ongoing development and maintenance of Profecient across its theme and supporting plugins, alongside user support.',
    contributions: [
      'Built and connected theme-builder dashboard interfaces, including builder conditions and navigation.',
      'Worked on integration with Jeg Kit, including theme-builder URLs and shared user data and styles.',
      'Investigated Elementor compatibility, template library behaviour, demo imports, popups, and user-reported issues.',
    ],
  },
  {
    category: 'WORDPRESS THEME', role: 'Development · Maintenance · Support', title: 'Magnitude', slug: 'magnitude',
    description: 'Led development and maintenance, working on demo retrieval and import flows, WooCommerce pages, widgets, and user-reported issues.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'WooCommerce'],
    links: [{ label: 'Visit Magnitude', url: 'https://magnitude.jegtheme.com/' }],
    overview: 'At Jegstudio, I led the development and maintenance of Magnitude, working on theme features, compatibility, and support.',
    contributions: [
      'Implemented an API for retrieving demos and worked on demo import and WordPress compatibility.',
      'Added breadcrumb functionality and schema, and contributed to Elementor widgets and visual effects.',
      'Improved responsive WooCommerce pages and addressed product archive and add-to-cart issues.',
      'Investigated user reports and maintained compatibility with newer WordPress releases.',
    ],
  },
  {
    category: 'WORDPRESS PUBLISHING', role: 'Development · Maintenance · Support', title: 'JNews', slug: 'jnews',
    description: 'Contributed fixes and enhancements across the JNews publishing ecosystem and helped users troubleshoot issues.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'React', 'WooCommerce'],
    overview: 'JNews is a WordPress publishing ecosystem for news, blog, and magazine websites. At Jegstudio, I contributed development, maintenance, and user support.',
    contributions: [
      'Worked on translation and pricing compatibility for paywall features.',
      'Addressed frontend submission security and contributed to podcast and weather features.',
      'Investigated frontend, editor, and third-party plugin conflicts, and supported users through forums and email.',
    ],
    links: [{ label: 'Visit JNews', url: 'https://jnews.io/' }],
  },
  {
    category: 'WORDPRESS BLOCK EDITOR', role: 'Block development · Support', title: 'Gutenverse', slug: 'gutenverse',
    description: 'Contributed to Gutenberg blocks, editor controls, and customer support in the Gutenverse ecosystem.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'React', 'Gutenberg'],
    overview: 'Gutenverse provides blocks and tools for the WordPress block editor. I contributed to account-related blocks and other parts of the Gutenverse ecosystem at Jegstudio.',
    contributions: [
      'Worked on login, registration, and password recovery blocks, including validation, responsive styling, and editor controls.',
      'Worked on cache-aware account rendering and loading states.',
      'Contributed to a post autoload block and API, login prompts, and fixes to navigation and styling in Gutenverse News.',
      'Addressed product search result limits and editor styling in Gutenverse Ecommerce Blocks.',
    ],
    note: 'Some contributions were made on development branches; their release status has not been confirmed.',
    links: [{ label: 'Visit Gutenverse', url: 'https://gutenverse.com/' }],
  },
  {
    category: 'UNIVERSITY PROJECT', role: 'Web application', title: 'Teaching Assistant Information System',
    description: 'A web-based system developed for my undergraduate thesis, where teaching assistant candidates register and select available course schedules.',
    technologies: ['Nuxt.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
]
