import React from 'react';
import { Link } from 'react-router';

const ravintoarvot = React.createClass({
    render: function(){
        return(
            <div>

                <Link to={`/ravintoarvot/${this.props.ravintoarvo}`}>
                {this.props.ravintoarvo}
                </Link>

            </div>
        );
    }
});

export default ravintoarvot;
