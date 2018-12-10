class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
        this.increment = this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);
    }
    increment(){
        this.setState({count: this.state.count +1});
    }
    decrement(){
        this.setState({count: this.state.count-1});
    }
    reset(){
        this.setState({count: 0})
    }
    render(){
        return(
        <div>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.reset}>Reset</button>
            <h1>Current count: {this.state.count}</h1>
        </div>
        )
    }
}



ReactDOM.render(<Counter/>, document.getElementById('app'));