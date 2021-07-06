import React, { useState, useEffect } from "react";
import {axiosAuth} from "../utils/axiosAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  // console.log(props)
  
  const getData = () => {
    axiosAuth().get('/colors')
    .then(res => setColorList(res.data))
    .catch(err => console.log(err))
  }
  
  // console.log(colorList)

  useEffect(() => {
    getData()
  }, [] )


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} props={props} getData={getData} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
