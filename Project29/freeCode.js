class MyForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: ' ',
            submit: ' '
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }
    handleSubmit(event){
        
        //This prevents the page from re-loading. If this wasn't here, everything would go back to origina,.
        event.preventDefault();
        this.setState({
            input: '',
            submit: this.state.input
        })
        
    }
    
    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.input}/>
                <button type='submit'>Submit</button>
            </form>
            <p></p>
            <h3>This is what you are typing : {this.state.input}</h3>
            <p></p>
            <h3>This is what you submitted: {this.state.submit}</h3>
        </div>
        )
    }
}

ReactDOM.render(<MyForm />, document.getElementById('app'))