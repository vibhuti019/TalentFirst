import styles from './cardDot.module.css'

function CardDot(props) {
  var image = ''
  var dataBold = 'Lorem Ipsum'
  var dataNormal = 'Lorem Ipsum'
  if(props.image !== undefined){
    image = props.image
  }
  if(props.dataBold !== undefined){
    dataBold  = props.dataBold
  }
  if(props.dataNormal !== undefined){
    dataNormal  = props.dataNormal
  }
  
  return (
    <div className={styles.container}>
        <img className={styles.containImg} src={image} alt={""}/>
        <div style={{marginTop: '0.4347vh', fontSize: '2.1739vh', fontWeight: '700', lineHeight: '2.1739vh'}}>
            {dataBold}
        </div>
        <div style={{marginTop: '0.4347vh', fontSize: '1.4739vh', fontWeight: '500', lineHeight: '2.1739vh', color: 'black'}}>
            {dataNormal}
        </div>
    </div>
  );
}

export default CardDot;
