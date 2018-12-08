class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Ian Aranha'
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

ReactDOM.render(<StatefulComponent/>, document.getElementById("app"))