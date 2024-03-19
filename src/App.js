
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CardMenu from './containers/CardMenu';
import ShopPage from './containers/ShopPage';
import Category from './components/Category';
import CheckoutTable from './components/CheckoutTable';
import ContactPage from './components/Contact';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignInPage from './containers/SignInPage';
import SignUpPage from './containers/SignUpPage';
import { Payment } from '@mui/icons-material';
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path='/' element={<CardMenu />} />
          <Route path='/shop/:categoryId' element={<Category />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/checkout' element={<CheckoutTable />} />
          <Route path='/signin' element={<SignInPage/>} />
          <Route path='/signup' element={<SignUpPage/>} />
          <Route path='/payment' element={<Payment/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
