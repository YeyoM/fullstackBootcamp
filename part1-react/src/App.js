import './App.css';
import Mensaje from './Mensaje';

const App = () => {
  return (
    <div className="App">
      <Mensaje message='Estamos trabajando' color='grey'/>
      <Mensaje message='En un curso' color='blue'/>
      <Mensaje message='De React' color='red'/>
    </div>
  );
}

export default App;