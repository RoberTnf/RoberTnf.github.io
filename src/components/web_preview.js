import React from "react"
import PortfolioImage from "./portfolio_image";


const WebPreview = (props) => {
    return <div css={{
        marginBottom: "4rem"
    }}>
        <h2 css={{ textAlign: "center" }}>{props.titleLink}</h2>
        <p> {props.text} </p>
        <PortfolioImage name={props.img_name} url={props.url} />
        <p>
            <b>Technologies:</b> {props.technologies}
        </p>
    </div>
}

export default WebPreview;