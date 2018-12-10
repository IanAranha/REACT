class ControlledInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: "Your text here"
        }
        
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({input: event.target.value})
    }
    render(){
        return(
        <div>
            <input value = {this.state.input}  onChange={this.handleChange}/>
            <p>Enter text into box above</p>
            <p>{this.state.input}</p>
        </div>
        )
    }
    
}
ReactDOM.render(<ControlledInput/>, document.getElementById('app'))