class MyApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input: ''
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            input: event.target.value
        });
    }
    render(){
        return(
            <div>
                <GetInput input={this.state.input} handleChange={this.handleChange}/>
                <RenderInput input={this.state.input}/>
            </div>
        )
    }
}

class GetInput extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h3>Get Input: </h3>
                <input value={this.props.input} onChange={this.props.handleChange} />
            </div>
        )
    }
}

class RenderInput extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div> 
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        )
    }
}

ReactDOM.render(<MyApp/>, document.getElementById('app'))