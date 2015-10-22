import React from 'react';
import { Link } from 'react-router';

const HelloWorld = React.createClass({
    render: function(){
        return(
            <div>
                <Link to={`/hello/${this.props.name}`}>
                Boom {this.props.name}
                </Link>

                <Link to={`/ravintoarvot/${this.props.ravintoarvot}`}>
                {this.props.ravintoarvot}
                </Link>

            </div>
        );
    }
});

export default HelloWorld;
