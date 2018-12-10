class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            visibility: false
        };
        this.toggleVisbility = this.toggleVisbility.bind(this)
    }
    toggleVisbility(){
        if(this.state.visibility == true){
            this.setState({visibility: false})
        } else {
            this.setState({visibility: true})
        }
    }
    render(){
        if(this.state.visibility){
            return(
                <div>
                    <button onClick={this.toggleVisbility}>Click Me</button>
                    <h1>Now you see me!</h1>
                </div>
            )
        } else {
            return(
                <div>
                    <button onClick={this.toggleVisbility}>Click Me</button>
                    <h1>Now you don't see me!</h1>
                </div>
            )
        }
    }
}

ReactDOM.render(<MyComponent/>, document.getElementById('app'))