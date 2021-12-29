import './App.css';
// Серый если не встроен
import Fheader from './Fheader';
import Fcontent from './Fcontent';
import Ffooter from './Ffooter';

function App() {
  return (
    <div className="wrapper">
        {/* Встроили */}
        <Fheader name="React.js" />
        <Fcontent />
        <Ffooter />
    </div>
  );
}

export default App;
