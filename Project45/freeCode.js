const frontEndFrameworks = [
    'React', 'Angular', 'Ember', 'Knockout', 'Backbone', 'Vue'
] 

function Frameworks(){
    const renderFrameworks = frontEndFrameworks.map(i => <li key={i.toString()}>{i}</li>)
    return renderFrameworks
}
const test = Frameworks()
ReactDOM.render(test, document.getElementById('app'))