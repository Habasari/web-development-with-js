import React from 'react';
import Counterizer from './Counterizer'
import Greeter from './Greeter'
import Counter from './Counter'
import axios from 'axios';
import HelloWorld from './HelloWorld'
import api from '../api';



const HelloworldApp = React.createClass({
        getInitialState: function(){
        return {
                count: 0,
                name: 'pekkis',
                names: []
        };
    },

    componentDidMount: function(){
        api.getTussit().then((data) =>{
            this.setState({
                names: data
            });
        });

        api.getRavintoarvot().then((data) => {
            console.log(data);
        });
    },
    render: function(){
        const names = this.state.names;

        return (
            <div className= "tussi">
                <h1>Otsikko</h1>

                {names.map((name, key)  =>

                    <HelloWorld key={key} name={name}/>


                 )}
                <Counterizer
                count = {this.state.count}
                onincrementCounter = {this.incrementCounter}

                />
                <Counter count = {this.state.count}/>
                {this.props.children}
            </div>
        );
    },

    incrementCounter: function () {
        this.setState({
            count: this.state.count + 1
        });
    }
});

export default HelloworldApp;
