import React from "react";

const Hours = ({hours, minutes}) => {
    const h = hours * 30;
    const m = minutes * 6;
    return <div className={'hour'} style={{
        transform: `rotateZ(${h + m /12}deg)`
    }}/>
};

export default React.memo(Hours);