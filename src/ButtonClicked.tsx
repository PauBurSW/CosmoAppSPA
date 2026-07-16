import React, { useState } from "react";
import ReactConfetti from "react-confetti";

function ClickCounterButton() {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(true);
    };

    if (active == true)
        return <ReactConfetti/>;
    return <button
            onClick={handleClick}
            color="#841584">
                Click meeeeeee
            </button>;
}

export default ClickCounterButton;
