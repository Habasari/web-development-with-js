import React from 'react';

const Counterizer = React.createClass({

    render: function() {
        const { count, name, onincrementCounter } = this.props;


        return(
            <div className= "tussi">
                {this.props.count}

                <button
                onClick={this.props.onincrementCounter}>
                Tuosta Lisää!
                </button>

            </div>
        );
    }
});

export default Counterizer;
