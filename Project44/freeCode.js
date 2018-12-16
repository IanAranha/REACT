const textAreaStyle = {
    width: 235,
    margin: 5
}


class MyToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            toDoList: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.setState({
            userInput: event.target.value
        })
    }
    
    handleSubmit(){
        const itemsArray = this.state.userInput.split(',')
        this.setState({
            toDoList: itemsArray
        })
    }
    
    render(){
        const items = this.state.toDoList.map(i => <li key ={i.toString()}>{i}</li>);
        return(
            <div>
                <textArea
                onChange={this.handleChange}
                value={this.state.input}
                style={textAreaStyle}                             
                placeholder = 'List items separated by commas'        
                /> <br/>
                <button onClick={this.handleSubmit}>Create List</button>
                <h1>My 'To do' List</h1>
                <ul>
                    {items}
                </ul>
            </div>
        )                                  
    }
}

ReactDOM.render(<MyToDoList/>, document.getElementById('app'))