import logo from './logo.svg';
import './App.css';
import FullName from './component/profile/FullName';
import Address from './component/Address';
import ProfilePhoto from './component/profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
