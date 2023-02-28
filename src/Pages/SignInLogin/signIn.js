import Header from '../../Components/Header/header.js'
import styles from './signIn.module.css'
import { useState } from 'react';
import Text from '../../Components/text.js';
import Button from '../../Components/button.js';
import InputText from '../../Components/inputText.js';

function SignUp() {
  const [signUp, setSignUp] = useState(false)



  var render = () => {
    if(signUp){
      return(
        <>
            <div className={styles.textLeft}>
              <Text data="Join As Talent" fontWeight="700" fontSize="4.3478vh" lineHeight="4.3478vh" color="black"/>
            </div>
            <div className={styles.loginWithContainer} >
              <div className={styles.loginWith}>
                <img src={require('../../Images/google.png')} />
                <div>Sign In With Google</div>
              </div>
              <div className={styles.loginWith}>
                <img src={require('../../Images/LinkedIN.png')} />
                <div>Sign In With LinkedIn</div>
              </div>
            </div>
            <div className={styles.Or}>
              <div className={styles.line}></div>
              <div className={styles.orText}>OR</div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.details}>
              <div className={styles.eachDetail}>
                <Text data="First Name"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
                <InputText data="First Name" width="calc(100% - 2vw)"/>  
              </div>
              <div className={styles.eachDetail}>
                <Text data="Last Name"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
                <InputText data="Last Name" width="calc(100% - 2vw)"/>  
              </div>  
            </div>
            <div className={styles.details}>
              <div className={styles.eachDetail}>
                <Text data="Enter Email"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
                <InputText data="Enter Email" width="calc(100% - 2vw)"/>  
              </div>
              <div className={styles.eachDetail}>
                <Text data="Create Password"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
                <InputText data="Create Password" width="calc(100% - 2vw)"/>  
              </div>  
            </div>
            <div className={styles.flexColumn}>
              <Text data="Creating an account implies that you agree with and accept our" fontWeight="700" fontSize="1.3043vh" lineHeight="1.3043vh" color="#707070"/>
              <Text data="Terms of Service & Privacy Policy"  fontWeight="700" fontSize="1.3043vh" lineHeight="1.3043vh" color="#707070"/>
            </div>
            <div style={{marginTop: '4.3478vh'}}>
              <Button data="Create Account" width="37.5vw"/>
            </div>
            <div className={styles.flexColumn} style={{marginTop: '25px', flexDirection: 'row', justifyContent: 'center', cursor: 'pointer'}} onClick={()=>setSignUp(!signUp)}>
              <Text data="Already have an account?" fontWeight="700" fontSize="1.843vh" lineHeight="2.3043vh" color="#707070"/>
              <Text data="Login"  fontWeight="700" fontSize="1.843vh" lineHeight="1.8043vh" color="#0072FF"/>
            </div>
          </>
      )
    }
    return (
      <>
            <div className={styles.textLeft}>
              <Text data="Welcome Back" fontWeight="700" fontSize="4.3478vh" lineHeight="4.3478vh" color="black"/>
            </div>
            <div className={styles.loginWithContainer} >
              <div className={styles.loginWith}>
                <img src={require('../../Images/google.png')} />
                <div>Login With Google</div>
              </div>
              <div className={styles.loginWith}>
                <img src={require('../../Images/LinkedIN.png')} />
                <div>Login With LinkedIn</div>
              </div>
            </div>
            <div className={styles.Or}>
              <div className={styles.line}></div>
              <div className={styles.orText}>OR</div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.eachDetail}>
              <Text data="Enter Email"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
              <InputText data="Enter Email" width="calc(200% - 2vw)"/>  
            </div>
            <div className={styles.eachDetail}>
              <Text data="Enter Password"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
              <InputText data="Enter Password" width="calc(200% - 2vw)"/>  
            </div>  
            <div style={{marginTop: '4.3478vh'}}>
              <Button data="Login" width="37.5vw"/>
            </div>
            <div className={styles.flexColumn} style={{marginTop: '25px', flexDirection: 'row', justifyContent: 'center', cursor: 'pointer'}} onClick={()=>setSignUp(!signUp)}>
              <Text data="Don't have an account?" fontWeight="700" fontSize="1.843vh" lineHeight="2.3043vh" color="#707070"/>
              <Text data="Signup As Talent"  fontWeight="700" fontSize="1.843vh" lineHeight="1.8043vh" color="#0072FF"/>
            </div>
      </>
    )
  }

  

  return (
    <>
      <Header />
      <div className={styles.container}> 
        <div className={styles.containerRight}>
          <div className={styles.head}>
            <img className={styles.iconContainImg} src={require("../../Images/Vector.png")} alt={""}/>
            <img className={styles.iconContainImg} src={require("../../Images/Amazon-Logo.png")} alt={""}/>
            <img className={styles.iconContainImg} src={require("../../Images/Group.png")} alt={""}/>
            <img className={styles.iconContainImg} src={require("../../Images/Google-Logo.png")} alt={""}/>
            <img className={styles.iconContainImg} src={require("../../Images/Microsoft-Logo.png")} alt={""}/>
            <img className={styles.iconContainImg} src={require("../../Images/Vector2.png")} alt={""}/>
          </div>
          <div>
            <img className={styles.mainImage} src={require('../../Images/Path55.png')}/>
          </div>
          <div className={styles.flexColumn}>
            <Text data="Find Oppurtunites" fontWeight="700" fontSize="4.3478vh" lineHeight="4.3478vh" color="white"/>
            <Text data="With Top Companies"  fontWeight="700" fontSize="4.3478vh" lineHeight="4.3478vh" color="white"/>
          </div>
        </div>
        <div className={styles.containerLeft}>
          {render()}
        </div>
      </div>
    </>
  );
}

export default SignUp;
