class MyComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
        message: ''
        }
        
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyPress);
    }
    
    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    
    handleEnter(){
        this.setState({
            message: this.state.message+ 'Enter key pressed'
        })
    }
    
    handleKeyPress(event){
        if(event.keyCode === 13){
            this.handleEnter();
        }
    }
    
    render(){
        return(
            <div>
                <h3>Test this app right here! Press enter</h3>
                <h3>{this.state.message}</h3>
            </div>
        )
    }
}

ReactDOM.render(<MyComponent/>, document.getElementById('app'))