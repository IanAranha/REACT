const TypesOfFruit = () => {
    return (
    <div>
        <h4>From TypesOfFood Component</h4>
        <h2>Fruits</h2>
        <ul>
            <li>Apples</li>
            <li>Blueberries</li>
            <li>Strawberries</li>
            <li>Bananas</li>
        </ul>
    </div>
    )
}

const Fruits = () =>{
    return (
        <div>
            <p>From Fruits component </p>
            <p>Fruits is the parent of TypesOfFruit </p>
            <TypesOfFruit />
        </div>
    )
}
//
class TypesOfFood extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
            <h1>Types of Food Component</h1>
            <p>This is from TypesOfFood component</p>
            <Fruits />
        </div>
        )
    }
}

ReactDOM.render(<TypesOfFood />, document.getElementById('app'))