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
                  buildHookId: '6008a53ba126b10ad3f21649',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ydnht2qh',
                  apiId: 'b76cd4fc-1a52-46dd-9926-326b97dfa6d0'
                },
                {
                  buildHookId: '6008a53b53534c09d616868b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xcp37x35',
                  apiId: '0893e8f6-d463-479c-9beb-e2c45d687a43'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/uzz1/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xcp37x35.netlify.app', category: 'apps' }
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
