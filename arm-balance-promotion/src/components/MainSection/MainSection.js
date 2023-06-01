import './MainSection.css';
import { useEffect, useRef } from "react";

let MainSection = () => {
  const CANVAS_INFO = {width: window.innerWidth, height: window.innerHeight};
  const CANVAS_MAX_NUM = 26;
  const canvas = useRef(null);
  
  var currentImgIndex = 1;
  //mounted
  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    
    let drawImageToCanvas = ($imgIndex) => {
      console.log("$imgIndex: ", $imgIndex);
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
    }, 100)
  })
  return (
    <div class="mainSection">
      <canvas ref={canvas} width={CANVAS_INFO.width} height={CANVAS_INFO.height}></canvas>
    </div>
  )
}
export default MainSection;
