class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: 'Ian L Aranha'
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};

ReactDOM.render(<MyComponent/> ,document.getElementById('app'))