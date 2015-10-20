import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function getTussit() {
    return axios.get('/api/tussi').then((response)=>{
        console.log(response.data);
        return response.data;
});
}
const tussit = getTussit();

tussit.then((data) => console.log(data));
/*
const losot = ['Panu', 'kama', 'sale'];

const laihdutetut = losot.map( loso => )

const luvut = [5,7,5,6,1,3];

const avg = luvut.reduce((r, num)=>{
    return r + num;
}, 0)  luvut.lenght;

console.log(avg);


*/




const Helloworld = React.createClass({
    render: function(){
        return(
            <div>
                Hello{this.props.name}
            </div>
        );
    }
});





const HelloworldApp = React.createClass({
        getInitialState: function(){
        return {
                count: 0,
                name: 'pekkis',
                names: []
        };
    },

    componentDidMount: function(){
        getTussit().then((data) =>{
            this.setState({
                names: data
            });
        });
    },
    render: function(){
        const names = this.state.names;

        return (
            <div className= "tussi">
                <h1>Lusso</h1>

                {names.map((name, key)  =>

                    <Helloworld key={key} name={name}/>


                 )}
                <Counterizer
                count = {this.state.count}
                onincrementCounter = {this.incrementCounter}

                />
                <Counter count = {this.state.count}/>
            </div>
        );
    },

    incrementCounter: function () {
        this.setState({
            count: this.state.count + 1
        });
    }
});

const Counterizer = React.createClass({

    render: function() {
        const { count, name, onincrementCounter } = this.props;


        return(
            <div className= "tussi">
                {this.props.count}

                <button
                onClick={this.props.onincrementCounter}>
                MOAR!
                </button>

            </div>
        );
    }
});

class Counter extends React.Component{

    render() {
        return(
            <div className= "bussi">
                {this.props.count}

            </div>
        );
    }
};



ReactDOM.render(
    <HelloworldApp />,
    document.getElementById('app')

    );



