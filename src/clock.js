import React from "react";
import './clock.css';
import Circle from "./circle";
import Seconds from "./seconds";
import Minutes from "./minutes";
import Hours from "./hours";
import useDate from "./useDate";

function Clock() {
    const [hours, minutes, seconds] = useDate();

  return (
    <div className={"clock"}>
        <Circle>
            <Hours hours={hours} minutes={minutes}/>
            <Minutes minutes={minutes}/>
            <Seconds seconds={seconds}/>
        </Circle>
    </div>
  );
}

export default Clock;
