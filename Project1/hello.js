//Let’s break down the code. ReactDOM.render takes a description of the UI and creates the matching DOM elements. React.createElement returns a description of the UI. The first argument to React.createElement determines the top element. Passing a string, ’h1’, returns a representation of the matching HTML tag, <h1>. The second argument configures additional properties of the top element—for example, HTML attributes. Pass an empty object since we don’t need to configure anything. Each argument after that becomes a child element of the top element. In this case, <h1> has a single child, the “Hello world” text.
//
//ReactDOM.render creates a new tree of DOM nodes that matches the description returned by React.createElement. It places the result inside the DOM node you pass as its second argument. document.getElementById is a native browser API that takes a string and retrieves the DOM node with a matching id.


ReactDOM.render(
 	  React.createElement('h1', {}, 'Hello World!'),
 	  document.getElementById('app')
 	);