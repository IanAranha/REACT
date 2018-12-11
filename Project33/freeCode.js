class MyComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            activeUsers: null
        }
    }
    
    componentDidMount(){
        setTimeout( () => {
            this.setState({
                activeUsers: 1234
            })
        }, 2500)
    }
    
    render(){
        return(
            <div>
                <h3>Current active users: {this.state.activeUsers} </h3>
            </div>
        )
    }
}

ReactDOM.render(<MyComponent/>, document.getElementById('app'))
