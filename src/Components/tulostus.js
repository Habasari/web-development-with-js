import React from 'react';

const tulostus = React.createClass({
    render: function(){
        const id = this.props.params.id;
        console.log(this.props);

        return(


            <h2>

            {id}
            </h2>




            );

    },
});

export default tulostus;
