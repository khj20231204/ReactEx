import React from 'react';
import cityRank from '@svg-maps/south-korea';
import cityRatioResList from '@svg-maps/south-korea';
import cityName from '@svg-maps/south-korea';
import cityId from '@svg-maps/south-korea';
import cityD from '@svg-maps/south-korea';

const MyMap = ( heatmapData ) => {
   console.log("heatmapData:"+heatmapData.name);
   return (
      <svg className="heatmap-map" xmlns="south-korea.svg" viewBox="0 0 524 631">
         {heatmapData.map((city) => (
         <>
            <MapCity
               cityId={city.cityId}
               name={city.name}
               rank={city.rank}
               d={city.d}
            />
         </>
         ))}
      </svg>
   );
   };

   const MapCity = ({ cityId, name, rank, d }) => {
      return (
        <path
          id={cityId}
          name={name}
          className={rank}
          d={d}
        ></path>
      );
    };

    export default MyMap;
/* 
    const heatmapData = cityRatioResList.locations.map(function (el) {
      let obj = {};
      
      obj["rank"] = el.ratio;
      obj["name"] = el.city;
      obj["id"] = el.city;
      obj["d"] = el.d;
      return obj; 
    }); */