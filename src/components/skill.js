import React from "react"


const Skill = (props) => {
    return <div style={{
        "@media (minWidth:768px)": {
            display: "grid",
            gridTemplateColumns: "20% 80%",
        },
        marginBottom: "1.5rem"
    }}>
        <h4 css={{
            marginBottom: 0
        }}>{props.title}</h4>
        <p css={{}}>{props.text}</p>
    </div>
}

export default Skill;