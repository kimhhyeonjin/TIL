// function Food(props) {
//   console.log(props)
//   return <h1>I like potato</h1>
// }
import PropTypes from 'prop-types'

function Food({ name }) {
  return <h1>I like { name }</h1>
}

Food.propTypes = {
  name: PropTypes.string.isRequired
} 

function App() {
  return (
    <div className="App">
      Hello!
      <Food name="kimchi" />
      <Food name="ramen" />
      <Food name="samgiopsal" />
      <Food name="chukumi" />
    </div>
  );
}

export default App;
