import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const PortfolioImage = (props) => (
  <StaticQuery
    query={graphql`
    query {
      allFile(filter: {relativePath: {regex: "/png/"}}) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    `}
    render={data => {
      const images = data.allFile.edges
      let selected_img = undefined
      for (let img of images) {
        if (img.node.name == props.name) {
          selected_img = img.node.childImageSharp
        }
      }
      return <a css={{
        margin: "16px",
      }} href={props.url} rel='noreferrer noopener' target='blank'><Img css={{
        border: "solid 1px #007199",
        "&:hover": {
          border: "solid 1px #0096cc",
        }
      }} fluid={selected_img.fluid} /></a>
    }}
  />
)
export default PortfolioImage
