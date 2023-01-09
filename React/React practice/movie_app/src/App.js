// function Food(props) {
//   console.log(props)
//   return <h1>I like potato</h1>
// }

function Food({ name }) {
  return <h1>I like { name }</h1>
}

function App() {
  return (
    <div className="App">
      Hello!
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
