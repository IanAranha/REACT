import React, { PropTypes } from 'react'; 

const Items = (props) => {
    return <h1>Current quantity of items in cart: {props.quantity}.</h1>
};

Items.defaultProps = {
    quantity: 0;
};

Items.propTypes = {
    quantity: PropTypes.number.isRequired; }
}


class ShoppingCart extends React.Component{
    constructor(props){
        super(props)
    }
    render() (
        return (
            <div>
                <Items/>
            </div>
    )
}


ReactDOM.render(<ShoppingCart/>, document.getElementById('app'))