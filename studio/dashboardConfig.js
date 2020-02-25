export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e54fbc0763172781c339030',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mwc2ryh4',
                  apiId: '0f6d4f0f-520c-4c0a-8e72-9b83180925ca'
                },
                {
                  buildHookId: '5e54fbc1855228ae6f832b00',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2euhmx4m',
                  apiId: '3ae17f43-b873-4aa9-a1de-11ee87a0c3e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/llogan382/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2euhmx4m.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
