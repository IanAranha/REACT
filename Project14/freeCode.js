const NonCitrus = () => {
    return (
    <div>
        <h4>Non-citrus</h4>
        <ul>
            <li>Apples</li>
            <li>Blueberries</li>
            <li>Strawberries</li>
            <li>Bananas</li>
        </ul>
    </div>
    );
};

const Citrus = () => {
    return (
    <div>
        <h4>Citrus</h4>
        <ul>
            <li>Lemons</li>
            <li>Limes</li>
            <li>Oranges</li>
            <li>Grapfruits</li>
        </ul>
    </div>
    );
};

const Vegetables = () => {
    return (
    <div>
        <h2>Vegetables</h2>
        <ul>
            <li>Brussel Sprouts</li>
            <li>Brocolli</li>
            <li>Squash</li>
            <li>Kale</li>
        </ul>
    </div>
    );
};

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* change code below this line */ }
        <NonCitrus />
        <Citrus />
         { /* change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
        <Fruits />
        { /* change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};

ReactDOM.render( <TypesOfFood/>,document.getElementById('app'))