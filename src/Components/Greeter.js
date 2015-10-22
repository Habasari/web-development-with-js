import React from 'react';

const Greeter = React.createClass({
    render: function(){
        const name = this.props.params.name;
        console.log(this.props);

        return(



            <h2>
                Hello {name}
            </h2>




            );

    },
});

export default Greeter;
