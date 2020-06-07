module.exports = {
  title: 'Gregor Alexander Kerr',
  tagline: 'University of Glasgow Masters Student',
  url: 'https://GregorKerr1996.github.io',
  baseUrl: '/Gregorsaurus/',
  favicon: 'img/favicon.ico',
  organizationName: 'GregorKerr1996', // Usually your GitHub org/user name.
  projectName: 'Gregorsaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GregorKerr',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Projects',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/GregorKerr1996',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },


    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
       
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'My Github',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            '',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            '',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
