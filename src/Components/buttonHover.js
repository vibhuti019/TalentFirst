import { useState } from 'react'
import styles from './custom.module.css'
import Text from './text'

function ButtonHover(props) {
  const [showBackgroundColor, setShowBackgroundColor] = useState(false)


  var color = 'white'
  var width = '16.25vw'
  var height = '6.5217vh'
  var data = 'Lorem Ipsum'
  var margin = '0vh'
  var fontSize = '1.7391vh'
  var lineHeight = '2.1739vh'
  var fontWeight = '400'
  var backgroundColor = '#0072FF'
  if(props.color !== undefined){
    color = props.color
  }
  if(props.width !== undefined){
    width = props.width
  }
  if(props.height !== undefined){
    height = props.height
  }
  if(props.data !== undefined){
    data = props.data
  }
  if(props.color !== undefined){
    color = props.color
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
  if(props.backgroundColor !== undefined){
    backgroundColor = props.backgroundColor
  }
  
  return (
    <div className={styles.button} style={{margin: margin, width: width, height: height, backgroundColor: (showBackgroundColor)?backgroundColor: 'transparent'}} onMouseEnter={()=>{setShowBackgroundColor(true)}} onMouseLeave={() => {setShowBackgroundColor(false)}}>
        <div style={{display: 'flex', justifyContent: 'center', alignContent:'center', height:'100%', flexWrap: 'wrap'}}>
            <div className={styles.text40020} style={{ fontSize: fontSize, fontWeight: fontWeight, lineHeight: lineHeight, color: color}}>
                {data}
            </div>
        </div>
    </div>
  );
}

export default ButtonHover;
