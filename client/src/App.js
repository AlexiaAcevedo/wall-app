// libraries
import { Provider } from 'react-redux';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components, pages
import Home from './pages';
import Register from './components/Register';
import SignIn from './components/SignIn';
import store from './redux/store';

// css
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </Provider>
    
  );
}

export default App;
