import React from "react";

const Minutes = ({minutes}) => <div className={'minutes'} style={{
    transform: `rotateZ(${minutes * 6}deg)`
}}/>;

export default React.memo(Minutes);