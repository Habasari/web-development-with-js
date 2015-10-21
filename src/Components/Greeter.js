import React from 'react';

const Greeter = React.createClass({
    render: function(){
        const {name} = this.props.params;
        console.log(this.props);

        return(
            <h2>
                Hellooo {name}
            </h2>
            );

    },
});

export default Greeter;
