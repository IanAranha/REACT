const ChildComponent = () => {
    return (
    <div>
        <h3>I am the child component</h3>
    </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div>
            <h1>I am the parent component!</h1>
            <ChildComponent />
        </div>
        )
    }
}

ReactDOM.render(<ParentComponent />, document.getElementById('app'));