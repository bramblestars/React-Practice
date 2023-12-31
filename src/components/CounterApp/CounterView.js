import React, { useEffect } from 'react';

const generateColor = () => {
    return '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
}

const CounterView = (props) => {

    const { countValue, handleIncrement } = props;

    useEffect(() => { console.log("Use effect from CounterView") }, []);

    return (
        <div style={{ background: generateColor()}}>
            <h1 className="value">{countValue}</h1>
            <button onClick={handleIncrement(2)}>Increment</button>
            <button onClick={handleIncrement(-2)}>Decrement</button>
        </div>  
    );
}

export default CounterView;