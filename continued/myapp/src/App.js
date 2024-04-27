/* //THis is the first functional component I made in React
function App() {
  return (
    <>
    <form>
    <input placeholder="Enter your name"></input>
    </form>
    </>
  );
} */


function App() {
  return(<>
  <img></img> //Image needs to be definned like this otherwise it will give out errors because we are writing JSX and not HTML.
  <h1 className = "THis is how you give a class name in react,, wedont write class='' we use className=''">This is a heading 1</h1>
  </>)
}


export default App;
