let a= 1;
let b = 2;
let c = (a,b) => {
  return a+b
}

function App() {
  return(
    <>
    <h1>This is how tou use javascript variables in React</h1>
    <p>Adding {a} and {b} is {c(a,b)}</p>
    <p>Multiplying {a} and {b} gives {a*b}</p>
    <p>Divinding {a} and {b} gives {a/b}</p>
    <p>Subtracting {a} and {b} gives {a-b}</p>
    </>
  )
}

export default App;
