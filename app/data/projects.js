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
      { label: 'View the plugin', url: 'https://wordpress.org/plugins/jeg-elementor-kit/' },
      { label: 'WordPress.org activity at Jegstudio', url: 'https://profiles.wordpress.org/fauzanjegstudio/' },
    ],
  },
  {
    category: 'WORDPRESS PRODUCT', role: 'Development · Maintenance · Support', title: 'Profecient', slug: 'profecient',
    description: 'Led development and maintenance across the theme and its plugins, working on theme-builder interfaces, integrations, compatibility, and user support.',
    technologies: ['WordPress', 'PHP', 'React', 'Elementor'],
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
    overview: 'At Jegstudio, I led the development and maintenance of Magnitude, working on theme features, compatibility, and support.',
    contributions: [
      'Implemented an API for retrieving demos and worked on demo import and WordPress compatibility.',
      'Added breadcrumb functionality and schema, and contributed to Elementor widgets and visual effects.',
      'Improved responsive WooCommerce pages and addressed product archive and add-to-cart issues.',
      'Investigated user reports and maintained compatibility with newer WordPress releases.',
    ],
  },
  {
    category: 'WORDPRESS ECOSYSTEM', role: 'Development · Maintenance', title: 'JNews & Gutenverse',
    description: 'Contributed fixes and enhancements to the JNews publishing ecosystem, and worked on block editor features and support for Gutenverse.',
    technologies: ['WordPress', 'PHP', 'React', 'Gutenberg'],
  },
  {
    category: 'UNIVERSITY PROJECT', role: 'Web application', title: 'Teaching Assistant Information System',
    description: 'A web-based system developed for my undergraduate thesis, where teaching assistant candidates register and select available course schedules.',
    technologies: ['Nuxt.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
]
