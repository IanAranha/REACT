const List = (props) =>{
    return(
        <div>
            <h4>{props.tasks.join(", ")} </h4>
        </div>
    )
}

class ToDo extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
        <div>
            <h3>To Do List</h3>
            <h4>Today:</h4>
            <List tasks = {['Walk dog', 'Clean house', 'Run marathon']}/>
            <h4>Tomorrow:</h4>
            <List tasks = {['Walk dog', 'Get mail', 'Recyle']}/>
        </div>
        
        )
    }
}

ReactDOM.render(<ToDo />, document.getElementById('app'))
