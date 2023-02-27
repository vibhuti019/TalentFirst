import Logo from "../logo";
import styles from './header.module.css'
import Text from '../text.js'
// import Button from "../button";
import ButtonHover from "../buttonHover";

function Header(props) {
  var marginText = '0vh 0.88vw'
  var withLogin = 'false'

  if(props.withLogin != null){
    withLogin = props.withLogin
  }
  if(props.marginText != null){
    marginText = props.marginText
  }
  return (
    <div className={styles.container}>
        <Logo color='white'/>
        <div className={styles.topics}>
            <Text data="For Developers" margin={marginText}/>
            <Text data="For Companies" margin={marginText}/>
            <Text data="FAQs" margin={marginText}/>
            <Text data="Reviews" margin={marginText}/>
            <Text data="Contact Us" margin={marginText}/>
        </div>
        {withLogin &&
          <div className={styles.login} >
            <div>
              <ButtonHover width="5vw" data="Signup"/>
            </div>
            <div>
              <ButtonHover width="5vw" data="Login"/>
            </div>
          </div>
        }
        
    </div>
  );
}

export default Header;
 