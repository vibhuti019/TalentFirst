import styles from './custom.module.css'

function InputText(props) {
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
  


  return (
    <div class={styles.inputText} style={{margin: margin, fontWeight: fontWeight, fontSize: fontSize, lineHeight: lineHeight, width: width, height: height, color: color}}>
        <input className={styles.inputTextInput} type="text" placeholder={data} />
    </div>    
  );
}

export default InputText;