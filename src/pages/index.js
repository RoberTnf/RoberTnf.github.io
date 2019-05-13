import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Skill from "../components/skill"
import Experience from "../components/experience";
import WebPreview from "../components/web_preview";

const content = [
  {
    title: "About me",
    text: <p>
      I love programming, science and reading. I am working at
        <a href="https://www.nordita.org/" rel='noreferrer noopener' target='blank'> Nordita </a>
      on the <a href="https://omdb.mathub.io" rel='noreferrer noopener' target='blank'> OMDB</a>,
      a database of organic crystals.
      I got my BS on Physics at Universidad de La Laguna, and am currently finishing
      my Master's thesis on Computational Physics in Machine Learning for magnetic
      properties.
      </p>
  },
  {
    title: "Skills",
    text:
      <div>
        <Skill title="Physics" text="Condensed Matter, Magnetism." />
        <Skill title="Programming" text="Python with the science and machine learning stack: Numpy, Pandas, matplotlib, sklearn, etc. Experience with Rust." />
        <Skill title="Front End" text="Javascript, React, CSS, HTML." />
        <Skill title="Back End" text="Django, Flask, Laravel, PHP, SQL." />
        <Skill title="Computing" text="Linux, LaTeX." />
      </div>
  },
  {
    title: "Work Experience",
    text: <Experience
      dates="2017 - Present"
      content={
        <div>
          <div css={{ marginBottom: "1.5rem" }}>
            <h4 css={{ marginBottom: 0 }}>Nordic Institute for Theoretical Physics (Nordita)</h4>
            <i>A. V. Balatsky's group, Roslagstullsbacken 23, 106 91 Stockholm, Sweden</i>
          </div>
          Developed the Organic Materials Database (<a href="https://omdb.mathub.io" rel='noreferrer noopener' target='blank'>OMDB</a>), assisted researchers in multiple Condensed Matter and Machine Learning projects. Currently also working in my Master's thesis: Machine Learning for Magnetism on Crystals Structures.
        </div>
      }
    />
  },
  {
    title: "Education",
    text: <div>
      <Experience
        dates="2017 - Present"
        content={
          <div>
            <p><b>Master's degree in Computational Physics</b><br /><i>Stockholm University, Stockholm, Sweden.</i></p>
          </div>
        }
      />
      <Experience
        dates="2012 - 2017"
        content={
          <div>
            <p><b>Bachelor's degree in Physics</b><br /><i>Universidad de La Laguna, Spain.</i></p>
          </div>
        }
      />
    </div>
  },
  {
    title: "Portfolio",
    text: <div>
      <WebPreview
        titleLink={<a href="https://omdb.mathub.io" rel='noreferrer noopener' target='blank'>OMDB</a>}
        text="The organic materials database is an open access electronic structure database for 3-dimensional organic crystals, developed and hosted at the Nordic Institute for Theoretical Physics – Nordita."
        img_name="omdb"
        technologies="PHP, Laravel, SQL, Javascript, CSS, Python"
        url="https://omdb.mathub.io"
      />
      <WebPreview
        titleLink={<a href="https://mathub.io" rel='noreferrer noopener' target='blank'>Mathub</a>}
        text="Startup's website. Entry portal of a Materials Development startup."
        img_name="mathub"
        technologies="React, Gatsby"
        url="https://mathub.io"
      />
      <WebPreview
        titleLink={<a href="http://diracmaterials.org" rel='noreferrer noopener' target='blank'>Dirac Materials</a>}
        text="A. V. Balatsky's group website. Heavily involved in the overhauling and modernization of the website."
        img_name="diracmaterials"
        technologies="WordPress, Javascript, CSS"
        url="http://diracmaterials.org"
      />
    </div>
  },

]

const IndexPage = () => (
  <Layout>
    <SEO title="CV" keywords={[`gatsby`, `application`, `react`]} />
    {content.map(el => (
      <Section key={el.title} title={el.title} text={el.text} />
    ))}
  </Layout>
)

export default IndexPage
