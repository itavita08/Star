import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SelectRegion from './components/Page/SelectRegionPage';
import './index.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import background from './image/backgroundStar2.jpg'
import DetailRegion from './components/Page/DetailRegionPage';

import SiteMapListComponent from './components/ObservationSite/SiteMapListComponent';
import SiteDetailComponent from './components/ObservationSite/SiteDetailComponent'
import ConstellationsComponent from './components/Constellations/ConstellationsComponent';
import ObservatoryComponent from './components/Observatory/ObservatoryListComponent';
import ObservatoryDetailComponent from './components/Observatory/ObservatoryDetailComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <div>
    <div className="App" style={{ backgroundImage: `url(${background})` ,
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundAttachment: 'fixed'
    // backgroundColor: 'rgba( 255, 255, 255, 0.3 )',
    }}>                                                                                      
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/summary" exact element={<SelectRegion />} />
        <Route path="/detailRegion" exact element={<DetailRegion />} />
        <Route path="/siteMapList" exact element={<SiteMapListComponent />} />
        <Route path="/site/detail" exact element={< SiteDetailComponent/>} />
        <Route path="/constellations" exact element={< ConstellationsComponent/>} />
        <Route path="/observatory" exact element={< ObservatoryComponent/>} />
        <Route path="/observatory/detail" exact element={< ObservatoryDetailComponent/>} />

      </Routes>
    </BrowserRouter>
  </div>
</div>

);


reportWebVitals();
