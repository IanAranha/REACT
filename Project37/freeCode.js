const styles={
    color: 'purple',
    fontSize: 40,
    border: '2px solid blue'
}

class Colorful extends React.Component{
    render(){
        return(
            <div>
                <p>This is what a normal unformatted div should look like.</p>
                <p style={styles}>This is entire div has been formatted using a predefined style object.</p>
            </div>
        )
    }
}

ReactDOM.render(<Colorful/>, document.getElementById('app'))