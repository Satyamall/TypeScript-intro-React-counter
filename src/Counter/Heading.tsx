
import React from "react";

interface Props {
    text: string | number;
}

const Heading = ({text}: Props)=>{
    return (
        <h3>
            {text}
        </h3>
    )
}

export default Heading