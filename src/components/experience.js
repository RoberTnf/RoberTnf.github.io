import React from "react"


const Experience = (props) => {
    return <div css={{
        "@media (minWidth:768px)": {
            display: "grid",
            gridTemplateColumns: "20% 80%",
        },
        marginBottom: "36px"
    }}>
        <div css={{
            "@media (minWidth:768px)": {
                borderRight: "1px solid black",
                textAlign: "center"
            },
            "@media (maxWidth:768px)": {
                display: "inline"
            }
        }}>{props.dates}</div>
        <div css={{
            "@media (minWidth:768px)": {
                marginLeft: "8px"
            },
            "@media (maxWidth:768px)": {
                display: "inline"
            }

        }} >
            {props.content}
        </div>
    </div>
}

export default Experience;