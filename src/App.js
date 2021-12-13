import {ToastContainer} from "react-toastify";
import { Header } from './components'
import { Tasks } from "./pages"
import './App.scss'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Tasks/>
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;
