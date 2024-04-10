
import './App.css';
import CreatePasswordScreenWithInput from './components/CreatePasswordScreenWithInput/CreatePasswordScreenWithInput';
import PasswordScreen from './components/withSlider/PasswordScreen'
function App() {
  return (
    <>
      <div className="read-the-docs">
        <CreatePasswordScreenWithInput />
        <PasswordScreen/>
      </div>
    </>
  );
}

export default App;
