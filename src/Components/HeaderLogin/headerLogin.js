import Logo from "../logo";
import styles from './headerLogin.module.css'
import Text from '../text.js'
// import Button from "../button";
import ButtonHover from "../buttonHover";

function HeaderLogin(props) {
  var marginText = '0vh 0.88vw'
  var withLogin = 'false'

  if(props.withLogin != undefined){
    withLogin = props.withLogin
  }
  if(props.marginText != undefined){
    marginText = props.marginText
  }
  return (
    <div className={styles.container}>
        <Logo color='black'/>
        <div className={styles.login} >
          Hello, Yugen
        </div>
    </div>
  );
}

export default HeaderLogin;
 