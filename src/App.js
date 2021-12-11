import { Header } from './components'
import { Tasks } from "./pages"
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Tasks/>
    </div>
  );
}

export default App;
