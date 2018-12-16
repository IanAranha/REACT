class GameOfChance extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter : 1
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    
    render(){
        let expression = Math.random() > 0.5;
        return(
            <div>
                <button onClick ={this.handleClick}>Click to Play Again</button>
                {(expression == 1) ? <Results fiftyFifty = "You Win!" /> : <Results fiftyFifty = "You Lose!" /> }
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        )
    }
}

class Results extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <h1>{this.props.fiftyFifty}</h1>
        )
    }
}

ReactDOM.render(<GameOfChance/>, document.getElementById('app'))