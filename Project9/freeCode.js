const JSX = (
  <div>
    {/*{remove comment and change code below this line*/}
    <h2>Welcome to React!</h2> <br/>
    <p>This demo shows how to close all tags.</p>
    <p>Unlike HTML, all tags must be closed in React.</p>
    <p>In this demo, I closed br and hr tags</p>
    <p>I need to figure out how to pass tags in HTML in JSX.</p>
    <p>Be sure to close all tags!</p>
    <hr/>
    {/*remove comment and change code above this line }*/}
  </div>
);

ReactDOM.render(JSX, document.getElementById('app'));