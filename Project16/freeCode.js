class MyComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div>
            <h1>My First Component!</h1>    
        </div>
        )
    }
}

ReactDOM.render(<MyComponent/>, document.getElementById('app'))