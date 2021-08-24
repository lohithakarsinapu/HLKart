import Footer from './components/Footer'
import './App.css';
import Navigation from './components/Navigation';
import Auth from './components/Auth'
import {userContext, UserContextProvider} from './context/userContext'
function App() {
  return (
    <div className="App">
     <UserContextProvider>
    <Navigation/>
   <Auth/>
    ----Hemendra---  Welcome to HLKartDev -- Lohi

    <Footer />
    </UserContextProvider>
    </div>
  );
}

export default App;
