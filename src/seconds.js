import React from "react";

const Seconds = ({seconds}) => <div className={'seconds'} style={{
    transform: `rotateZ(${seconds * 6 }deg)`
}}/>;

export default Seconds;