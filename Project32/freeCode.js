class MyComponent extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log('Well, hello there!')
    }
    
    render(){
        return(
            <div>
                <h3>Check Console for output.</h3>
            </div>
        )
    }
}
    
    ReactDOM.render(<MyComponent/>, document.getElementById('app'))