import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
* Personal image, in the header
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
