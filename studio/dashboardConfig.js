export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d5edec597e9e88bdf9e8a13',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vudd27c6',
                  apiId: '99da5cac-33f4-490e-91fc-9cb9f3ca8231'
                },
                {
                  buildHookId: '5d5edec595106474affc9dda',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7z5ra42a',
                  apiId: 'e0d22e9d-3c22-467c-aae0-2be7e55b778f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peterlaxalt/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7z5ra42a.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
