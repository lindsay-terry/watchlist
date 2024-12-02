import { Outlet } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Auth from './utils/auth';

export default function App() {


  return (
    <div>
      {/* <Header accessToken={accessToken} setAccessToken={setAccessToken}/> */}
      <Outlet /> 
      {/* <Footer />        */}
    </div>  
  )
}

