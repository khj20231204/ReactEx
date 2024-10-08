import React from 'react';
import cityRank from '@svg-maps/south-korea';
import cityRatioResList from '@svg-maps/south-korea';
import cityName from '@svg-maps/south-korea';
import cityId from '@svg-maps/south-korea';
import cityD from '@svg-maps/south-korea';

const Map = ({ heatmapData }) => {
   console.log("heatmapData:"+heatmapData);
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

    export default Map;
/* 
    const a = array.map((v) => {
      let obj = {};
      obj["id"] = 1;
      obj["name"] = "name";
      return obj;
    })

    const Map = ( {a}) => {
      {a.map((b) => {
         console.log(b.id, b.name)
      })}
    } */