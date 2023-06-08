import './MainSection.css';
import { useEffect, useRef, useState } from "react";

let MainSection = () => {
  const CANVAS_INFO = {width: window.innerWidth, height: window.innerHeight};
  const CANVAS_MAX_NUM = 26;
  const canvas = useRef(null);
  
  var currentImgIndex = 1;
  var [showImgIndex, updateShowImgIndex] = useState(0);

  //mounted and updated
  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    
    let drawImageToCanvas = ($imgIndex) => {
      const img = new Image;
      img.src= `peacockSequence/${$imgIndex}.png`;
      img.onload = () =>{
        ctx.drawImage(img, 0, 0, CANVAS_INFO.width, CANVAS_INFO.height)
      }
    }

    drawImageToCanvas(currentImgIndex);

    setInterval(()=>{
      if(currentImgIndex === CANVAS_MAX_NUM) currentImgIndex = 0;
      currentImgIndex += 1;
      drawImageToCanvas(currentImgIndex);
      updateShowImgIndex(currentImgIndex)
    }, 500)
  })
  return (
    <div class="mainSection">
      <div>{showImgIndex}</div>
      <canvas ref={canvas} width={CANVAS_INFO.width} height={CANVAS_INFO.height}></canvas>
    </div>
  )
}
export default MainSection;
