export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f609060a297b6bf82cbce88',
                  title: 'Sanity Studio',
                  name: 'mockup-blog-studio',
                  apiId: 'e4b31738-ca65-4d0f-907f-585d8ff85062'
                },
                {
                  buildHookId: '5f6090601c12749c9302d56d',
                  title: 'Blog Website',
                  name: 'mockup-blog',
                  apiId: '9f6365af-bdf4-42f6-b5e6-639e7bb4859d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eddiecleary/mockup_blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://mockup-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
