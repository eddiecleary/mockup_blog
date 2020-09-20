// Create Blog Category Pages
// async function createBlogCategoryPages (graphql, actions) {
//   const {createPage} = actions
//   const result = await graphql(`
    
//   `);

//   console.log(result);

//   if (result.errors) throw result.errors

//   const categoryEdges = (result.data.allSanityCategory || {}).edges || []
  
//   categoryEdges.forEach((edge, index) => {
//     const {id, title} = edge.node;
//     const path = `/blog/${title}/`;

//     createPage({
//       path,
//       component: require.resolve('./src/templates/stuff.js'),
//       context: {
//         id,
//         title,
//         random: 'test'
//       }
//     })
//   });
// }

const path = require('path');

// ----------
async function createBlogCategoryPages(graphql, actions) {
  const { data } = await graphql(`
    query{
      allSanityCategory {
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
    throw data.errors
  }

  data.allSanityCategory.edges.forEach(edge => {
    const {title} = edge.node;
    actions.createPage({
      path: `/blog/${title.toLowerCase()}/`,
      component: blogCategoryTemplate,
      context: { title },
    })
  })
}

// ------------------

// Create all pages
exports.createPages = async ({graphql, actions}) => {
  await createBlogCategoryPages(graphql, actions)
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