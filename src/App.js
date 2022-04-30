import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/login/LoginForm';
import ShoppingCart from './components/shoppingCart/ShoppingCart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/shopping" element={<ShoppingCart />} />
    </Routes>
  );
}

export default App;
