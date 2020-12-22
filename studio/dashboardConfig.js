export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe24c9e6a8605a4e57f6b86',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8mck5qry',
                  apiId: '85063119-3356-4cd6-8182-acc83a50b5f9'
                },
                {
                  buildHookId: '5fe24c9eb08b87a4a01b40d7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ib825795',
                  apiId: '89f7fcc4-a757-4da8-9590-597f63c56208'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kazokuma/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ib825795.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
