import styles from './cardImage.module.css'

function CardImage(props) {
  var image = ''
  var dataColored = 'Lorem Ipsum'
  var dataNormal = 'Lorem Ipsum'
  var dataBig = null
  if(props.image !== undefined){
    image = props.image
  }
  if(props.dataColored !== undefined){
    dataColored  = props.dataColored
  }
  if(props.dataNormal !== undefined){
    dataNormal  = props.dataNormal
  }
  var height = '47.9130vh'
  
  dataBig = ()=>{
        if(props.dataBig !== undefined){
            height= '55.6521vh'
            return(
                <span style={{marginTop: '0.8695vh', fontSize: '4.3478vh', fontWeight: '900', lineHeight: '6.0869vh', color: 'rgba(0, 0, 0, 0.25)'}}>
                    {props.dataBig}
                </span>
            )
        }
        else{
            return(<></>)
        }
    }
  const data = dataBig()
  return (
    <div className={styles.container} style={{height: height}}>
        <img className={styles.containImg} src={image} alt={""}/>
        <div className={styles.containData}>
            {data}
            <div style={{textTransform: 'uppercase', marginTop: '0.4347vh', fontSize: '2.1739vh', fontWeight: '700', lineHeight: '2.1739vh', color: '#0072FF'}}>
                {dataColored}
            </div>
            <div style={{marginTop: '0.4347vh', fontSize: '1.4739vh', fontWeight: '500', lineHeight: '2.1739vh', color: 'black'}}>
                {dataNormal}
            </div>
        </div>
    </div>
  );
}

export default CardImage;
