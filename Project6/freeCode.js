const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Adding a comment below this line</p>
    {/*This is a comment which will not show up*/}
    <p>Comments do not show up on HTML even though they are part of the JSX object being passed in ReactDOM</p>
    <p>Here's a subtitle</p>
  </div>
);

ReactDOM.render(JSX, document.getElementById('app'));