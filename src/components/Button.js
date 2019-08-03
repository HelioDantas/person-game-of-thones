import React from "react";

function Button(props) {
    return <button onClick={props.clickHandler} className="nextButton medio">Next</button>;
}

export default Button;