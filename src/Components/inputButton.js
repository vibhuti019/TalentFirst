import { useState } from 'react'
import styles from './custom.module.css'


function InputButton(props) {
  const [clicked, setclicked] = useState(false);
  const [hover, setHover] = useState(false);
  

  var data = 'Lorem Ipsum'
  var fontSize = '1.7391vh'
  var lineHeight = '2.1739vh'
  var fontWeight = '400'
  var color = ''
  var width = '8.4166vw'
  var margin = ''
  var height = '4.5217vh'
  if(props.data !== undefined){
    data = props.data
  }
  if(props.margin !== undefined){
    margin  = props.margin
  }
  if(props.fontWeight !== undefined){
    fontWeight = props.fontWeight
  }
  if(props.fontSize !== undefined){
    fontSize  = props.fontSize
  }
  if(props.lineHeight !== undefined){
    lineHeight  = props.lineHeight
  }
  if(props.color !== undefined){
    color  = props.color
  }
  if(props.width !== undefined){
    width  = props.width
  }
  if(props.height !== undefined){
    height  = props.height
  }
  
  var border = "2px solid transparent"

  if(clicked || hover){
    border = "2px solid #0072FF"
  }

  return (
    <div class={styles.inputButton} style={{margin: margin, fontWeight: fontWeight, fontSize: fontSize, lineHeight: lineHeight, width: width, height: height, color: color, border: border}} onClick={()=>{setclicked(!clicked)}} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
        {data}
    </div>    
  );
}

export default InputButton;