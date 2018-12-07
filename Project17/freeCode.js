const CurrentDate = (props) =>{
    return(
        <div>
            <p>The current date and time is: {props.date} </p>
        </div>
    )
}

class Calendar extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
        <div>
            <h3>What date is it?</h3>
            <CurrentDate date = {Date()}/>
        </div>
        
        )
    }
}

ReactDOM.render(<Calendar />, document.getElementById('app'))


//const CurrentDate = (props) => {
//  return (
//    <div>
//      { /* change code below this line */ }
//      <p>The current date is: {props.date}</p>
//      { /* change code above this line */ }
//    </div>
//  );
//};
//
//class Calendar extends React.Component {
//  constructor(props) {
//    super(props);
//  }
//  render() {
//    return (
//      <div>
//        <h3>What date is it?</h3>
//        { /* change code below this line */ }
//        <CurrentDate date={Date()}/>
//        { /* change code above this line */ }
//      </div>
//    );
//  }
//};