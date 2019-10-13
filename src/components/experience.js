import React from "react"


const Experience = (props) => {
    return <div css={{
        // "@media (minWidth:5px)": {
            display: "grid",
            gridTemplateColumns: "20% 80%",
        // },
        marginBottom: "36px"
    }}>
        <div css={{
            // "@media (minWidth:5px)": {
                borderRight: "1px solid black",
                textAlign: "center"
            // },
            // "@media (maxWidth:5px)": {
            //     display: "inline"
            // }
        }}>{props.dates}</div>
        <div css={{
            // "@media (minWidth:5px)": {
                marginLeft: "16px"
            // },
            // "@media (maxWidth:5px)": {
            //     display: "inline"
            // }

        }} >
            {props.content}
        </div>
    </div>
}

export default Experience;