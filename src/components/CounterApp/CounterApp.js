import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CounterApp.css';
import CounterView from './CounterView';


const CounterApp = (props) => {
    const [count, setCount] = useState(0);
    const { title } = props;

    useEffect(() => console.log("Calling use effect"), []);

    const increment = (step) => () => setCount(count + step);

    return (
        <div className="counter-app">
            <h1>{title}</h1>
            <CounterView 
                countValue = {count}
                handleIncrement = {increment}/>
        </div>
    );
    
}

CounterApp.propTypes = {
    title: PropTypes.string.isRequired
}

// class CounterApp extends React.Component {

//     constructor() {
//         super();
//     }

//     state = {
//         count: 0
//     }

//     componentDidMount() {
//         debugger;
//         console.log("did mount");
//     }

//     componentDidUpdate() {
//         debugger;
//         console.log("did update");
//     }

//     increment = (step) => {
//         this.setState(
//             {
//                 count: this.state.count + step
//             }
//         );
//     }


//     render() {
//         const { count } = this.state;
//         const {title} = this.props;
//         return (
//             <div className="counter-app">
//                 <h1>{title}</h1>
//                 <CounterView />
//             </div>
//         );
//     }
// }

export default CounterApp;