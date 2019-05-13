import React from "react"

const Section = (props) => (
    <div>
        <h2 css={{ textAlign: "center" }}>{props.title}</h2>
        {props.text}
        <hr css={{
            margin: "3rem auto",
            width: "10vw",
        }} />
    </div>
)

export default Section;