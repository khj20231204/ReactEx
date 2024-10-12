import logo from './logo.svg';
import './App.css';
import MapOriginal from './MapOriginal';
import cityRank from '@svg-maps/south-korea';
import cityRatioResList from '@svg-maps/south-korea';
import cityName from '@svg-maps/south-korea';
import cityId from '@svg-maps/south-korea';
import cityD from '@svg-maps/south-korea';
import MyMap from './MyMap';
import RandomMouseMove from './RandomMouseMove';
import KakaoMap from './KakaoMap';
import Test from './Test';

function App() {

   /*
   const heatmapData = cityRatioResList.locations.map(function (el) {
      let obj = [];
      
      obj["rank"] = el.ratio;
      obj["name"] = el.city;
      obj["id"] = el.city;
      obj["d"] = el.d;
      
    obj["rank"] = cityRank(el.ratio);
    obj["name"] = cityName(el.city);
    obj["id"] = cityId(el.city);
    obj["d"] = cityD(el.city);

      return obj; 
   });
*/

   return(
      <>
        <MapOriginal/>
        {/* <MyMap heatmapData={heatmapData}></MyMap> */}
        {/* <RandomMouseMove/> */}
        {/* <KakaoMap /> */}
        {/* <Test /> */}
      </>
   )
}
   
   
    
    
   
   

export default App;
