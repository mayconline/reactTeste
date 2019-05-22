import React from 'react';


import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'



const PigeonMaps = ()=>(
  


    <section id='map'>
           <Map  defaultCenter={[-22.8160177, -43.292906]} zoom={17} height={250}>   
            <Marker anchor={[-22.8160177, -43.292906]} payload={2}  />
           </Map>
    </section>
  

 
 
)

export default PigeonMaps;