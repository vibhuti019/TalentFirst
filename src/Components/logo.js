import styles from './custom.module.css'
function Logo(props) {
  var input = 'white'
  if(props.color !== undefined){
    input = props.color
  }
  return (
    <div style={{color: input, marginRight: '2.7083vw'}}>
        <div className={styles.logoMain}>
            Talent<span className={styles.logoText}>First</span>
        </div>
    </div>
  );
}

export default Logo;
