class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        return (
            
            <div>
                <h1>Hello React!</h1>
                <p>This is a class componenet that has constructors in them.</p>
                <p>Notice the difference in syntax for passing to the DOM</p>
            </div>
        )
    }
};

ReactDOM.render(<MyComponent />, document.getElementById("app"))