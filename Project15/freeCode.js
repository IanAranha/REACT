const NonCitrus = () => {
    return (
    <div>
        <h3>NonCitrus</h3>
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Strawberries</li>
            <li>Blueberries</li>
        </ul>
    </div>
    );
};

const Citrus = () => {
    return (
    <div>
        <h3>Citrus</h3>
        <ul>
            <li>Lemons</li>
            <li>Limes</li>
            <li>Oranges</li>
            <li>Grapefruit</li>
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

const Fruits = () => {
    return (
    <div>
        <h2>Fruits</h2>
        <NonCitrus />
        <Citrus />
    </div>
    );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        <Fruits />
        <Vegetables />
        {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line
ReactDOM.render(<TypesOfFood/>, document.getElementById('app'))