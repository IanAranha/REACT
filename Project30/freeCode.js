class MyApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Phil Johnson'
        }
    }
    render(){
        return(
//            Calling {this.state.name to pass on to Navbar}
            <div>
                <Navbar name={this.state.name}/>
            </div>
        );
    }
}

class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        //Navbar inherited state from MyApp. Therefore to access the name, just have to use {this.prop.name}
        <div>
            <h1>Hello! My name is {this.props.name}</h1>
        </div>
        )
    }
}

ReactDOM.render(<MyApp/>, document.getElementById('app'))
