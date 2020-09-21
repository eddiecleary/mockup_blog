// Create Blog Category Pages
const path = require('path');

// ----------
async function createBlogCategoryPages(graphql, actions) {
  const { data } = await graphql(`
    {
      allBlogCategory:allSanityCategory {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)
  
  const blogCategoryTemplate = path.resolve('./src/templates/blogCategory.js')
  

  if (data.errors) {
    reporter.panicOnBuild(`There was an error loading your blog category pages`, data.errors)
    return
  }

  data.allBlogCategory.edges.forEach(edge => {
    const {title} = edge.node;
    actions.createPage({
      path: `/blog/${title.toLowerCase()}/`,
      component: blogCategoryTemplate,
      context: { title },
    })
  })
}

async function createBlogPostPages(graphql, actions) {
  const { data } = await graphql(`
    {
      blogPostPages:allSanityPost {
        edges {
          node {
            _id
            categories {
              title
            }
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve('./src/templates/blog-post.js')

  if (data.errors) {
    reporter.panicOnBuild(`There was an error loading your blog post pages`, data.errors)
    return
  }

  data.blogPostPages.edges.forEach(edge => {
    const {_id, categories, slug } = edge.node;
    actions.createPage({
      path: `/blog/${categories[0].title.toLowerCase()}/${slug.current}`,
      component: postTemplate,
      context: {_id, category: categories[0].title}
    })
  })
}

async function createArchivePage(graphql, actions) {
  const { data } = await graphql(`
  {
    allSitePosts:allSanityPost(sort: {fields: publishedAt, order: DESC}) {
      edges {
        node {
          publishedAt(formatString: "MMM Do YYYY")
          mainImage {
            alt
            asset {
              path
            }
          }
          title
          _rawExcerpt
          slug {
            current
          }
          categories {
            title
          }
          _id
        }
      }
    }
  }  
  `)

  const archiveTemplate = path.resolve('./src/templates/archive.js')

  if (data.errors) {
    reporter.panicOnBuild(`There was an error loading your archive page`, data.errors)
    return
  }

  actions.createPage({
    path: `/blog/`,
    component: archiveTemplate,
    context: {posts: data.allSitePosts.edges}
  })
}

// ------------------

// Create all pages
exports.createPages = async ({graphql, actions}) => {
  await createBlogCategoryPages(graphql, actions)
  await createBlogPostPages(graphql, actions)
  await createArchivePage(graphql, actions)
}

// Force newer react-dom hot loader to be used during development
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}