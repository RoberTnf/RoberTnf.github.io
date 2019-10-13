import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * Images of websites I have developed.
 * name of image and url of site to be provided from props.
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
        if (img.node.name === props.name) {
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
