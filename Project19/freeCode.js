const ShoppingCart = (props) => {
  ShoppingCart.defaultProps = {items: 0}
  return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
  )
}

ReactDOM.render(<ShoppingCart/>,document.getElementById('app'));
