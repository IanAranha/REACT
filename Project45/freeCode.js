const frontEndFrameworks = [
    'React', 'Angular', 'Ember', 'Knockout', 'Backbone', 'Vue'
] 

function Frameworks(){
    return (renderFrameworks = frontEndFrameworks.map(i => <li key={i.toString()}>{i}</li>))
}

ReactDOM.render(React.createElement(Frameworks()), document.getElementById('app'))