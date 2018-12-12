class Colorfull extends React.Component{
    render(){
        return (
            <div>
                <p style={{color:'red', fontSize: 72}}>Big Red</p>
                <p style={{color:'blue', fontSize: 8}}>Small Blue</p>
                <p>Normal color and font : This line has not been formatted inline.</p>
            </div>  
        )
    }
}

ReactDOM.render(<Colorfull/>, document.getElementById('app'))