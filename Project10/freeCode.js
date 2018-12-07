const MyComponent = function() {
    return( <div>
             <h1>Hello</h1>
            <p>Spent 30 minutes trying to figure out how to pass a function</p>
            <p>Basically MyComponent is a component with a function that is called from within the ReactDOM render funtions below.</p>
            </div>
     )
}

ReactDOM.render(MyComponent(), document.getElementById('app'))