import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from "./Flag.module.scss";


function idealAspectRatio({width, height}) {
   const aspectRatio = width / height; 
   if (aspectRatio >= 1.5 && aspectRatio <= 1.7){
      return false;
   }
   return true;
}

function getMeta(url){
   return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
   });
}

async function getImage(url){
   let img = await getMeta(url);
   const dimensions = {
      width: img.width,
      height: img.height
   }
   return dimensions;
}

function Flag (props) {
   
   const flag = props.flag;
   const [ratio, setRatio] = useState([]);

   useEffect(() => {
      getImage(props.flag).then(res => {
         const response = res;
         setRatio(response);
      });
      // stop the component from re-rendering since props.flag does not change 
   },[props.flag]);
   console.log(idealAspectRatio(ratio));
   
  
   return (<img className={styles.standard} src={props.flag} alt={props.name}/>)

}



export default Flag;