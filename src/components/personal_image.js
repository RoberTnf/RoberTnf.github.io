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

const Image = () => (
  <StaticQuery
    query={graphql`
    query {
      file(relativePath: { eq: "roberto_bw.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(quality: 90) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
    `}
    render={data => <Img fixed={data.file.childImageSharp.fixed} css={{
      borderRadius: "50%",
      border: "solid 4px #007199",
      "&:hover": {
        border: "solid 4px #0096cc",
      }

    }} />}
  />
)
export default Image
