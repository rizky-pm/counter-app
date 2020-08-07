import React, { useState } from "react";
import "./vote.scss";

const Vote = () => {
    const [javascript, setJavascript] = useState(0);
    const [ruby, setRuby] = useState(0);
    const [php, setPhp] = useState(0);
    const [python, setPython] = useState(0);

    return (
        <div className="Vote">
            <h1>COUNTER</h1>
            <button onClick={() => setJavascript(javascript + 1)}>
                Javascript : {javascript}
            </button>
            <button onClick={() => setRuby(ruby + 1)}>Ruby : {ruby}</button>
            <button onClick={() => setPhp(php + 1)}>PHP : {php}</button>
            <button onClick={() => setPython(python + 1)}>
                Python : {python}
            </button>
        </div>
    );
};

export default Vote;
