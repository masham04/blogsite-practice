const { graphql } = require("gatsby");
const path = require("path")

exports.createPages = async({actions,graphql}) => {
  const {createPage} = actions;
  const result = await graphql(`{
    allContentfulProduct {
      nodes {
        slug
        title
        desc {
          raw
        }
      }
    }

  }`)
  console.log(JSON.stringify(result))
  result.data.allContentfulProduct.nodes.forEach((obj) => {
    createPage({
      path: `/product/${obj.slug}`,
      component: path.resolve(`./src/templates/Product.tsx`),
      context: {
        item: obj
      }
    })
  })
}

// exports.onCreatePage = async ({ page, actions }) => {
//     const { createPage } = actions
  
//     // Only update the `/app` page.
//     if (page.path.match(/^\/product/)) {
//       // page.matchPath is a special key that's used for matching pages
//       // with corresponding routes only on the client.
//       page.matchPath = "/product/*"
  
//       // Update the page.
//       createPage(page)
//     }
//   }

// exports.createPages = async function ({ actions}) {

//     actions.createPage({
//        path: "product",
//        component: require.resolve(`./src/templates/Product.tsx`),
//        context: {
//            name: "Shoes",
//            des: "These shoes is so Good"
//        },
//     });


// }

