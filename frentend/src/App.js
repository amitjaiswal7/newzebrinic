
import './App.css';
import ContentPage from './componenet/Header/ContentPage';
import { Route, Routes } from 'react-router-dom';
import Header from './componenet/Header/inedx';
import Content from './componenet/Content/';
import Footer from './componenet/Footer';
import CompanyInfo from './componenet/ContectUs';
import Portfolio from './componenet/Protfolio';




function App() {
  return (
  
    <>
    <Routes>
   
      <Route
        path="/"
        element={
          <>
            <Header />
            <Content />
            <ContentPage />
            <Footer />
          </>
        }
      />
    
      <Route path="/companyInfo" element={<CompanyInfo />} />
      <Route path="/partfolio" element={<Portfolio />} />
    </Routes>
  </>


  );
}

export default App;
