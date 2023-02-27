import Header from '../../Components/Header/Header.js'
import styles from './formpage.module.css'
import Text from '../../Components/text.js';
import InputButton from '../../Components/inputButton.js';
import InputText from '../../Components/inputText.js';
import Button from '../../Components/button.js';
import { useState } from 'react';
import InputRadioButton from '../../Components/inputRadioButton.js';

function FormPage() {
  const [formNo, setFormNo] = useState(1)

  const form1 = ()=>{
    return (
    <>
      <Text data="Select at least 1 skill"  fontWeight="400" fontSize="1.7391vh" lineHeight="1.7391vh" color="#00070F"/>
        <div className={styles.inputContainer}>
          <InputButton data='React JS'/>
          <InputButton data=''/>
          <InputButton data=''/>
          <InputButton data=''/>
          <InputButton data=''/>
          <InputButton data=''/>
          <InputButton data=''/>
          <InputButton data=''/>
          <InputButton data=''/>
          <InputButton data=''/>
          <InputButton data=''/>
          <InputButton data=''/>
          <InputButton data=''/>
          <InputButton data=''/>
        </div>
        <InputText data="Search for skills (100+ available)" width="calc(100% - 2vw)"/>
        <div className={styles.details}>
          <div className={styles.eachDetail}>
            <Text data="Name"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <InputText data="Name" width="calc(100% - 2vw)"/>  
          </div> 
          <div className={styles.eachDetail}>
            <Text data="Company"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <InputText data="Company" width="calc(100% - 2vw)"/>  
          </div> 
          <div className={styles.eachDetail}>
            <Text data="Email"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <InputText data="Email" width="calc(100% - 2vw)"/>  
          </div> 
          <div className={styles.eachDetail} style={{marginRight: '0px'}}>
            <Text data="Phone"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <InputText data="Phone" width="calc(100% - 2vw)"/>  
          </div> 
        </div>
    </>
  )}

  const form2 = () => {
    return (
      <>
        <div>
          <Text data="What Is Your Ideal Hourly Budget Range?"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>           
          <div className={styles.radioContainer}>
            <InputRadioButton data="Part Time" width='calc(9.8958vw - 2vw)'/>
            <InputRadioButton data="Full Time" width='calc(9.8958vw - 2vw)'/>
          </div>
        </div>
        <div style={{marginTop: '2.1739vh'}}>
          <Text data="How Many Devs Are You Looking For?"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>           
          <div className={styles.radioContainer}>
            <InputRadioButton data="1-5" width='calc(7.3541vw - 2vw)'/>
            <InputRadioButton data="5-10" width='calc(7.3541vw - 2vw)'/>
            <InputRadioButton data="10-20" width='calc(7.3541vw - 2vw)'/>
            <InputRadioButton data="20+" width='calc(7.3541vw - 2vw)'/>
          </div>
        </div>
        <div style={{marginTop: '2.1739vh'}}>
          <Text data="What Is Your Ideal Hourly Budget Range?"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>           
          <div className={styles.radioContainer}>
            <InputRadioButton data="$25 - $40" width='calc(10.9895vw - 2vw)'/>
            <InputRadioButton data="$40 - $60" width='calc(10.9895vw - 2vw)'/>
            <InputRadioButton data="$60 - $80" width='calc(10.9895vw - 2vw)'/>
            <InputRadioButton data="$80 - $100+" width='calc(10.9895vw - 2vw)'/>
          </div>
        </div>
      </>
    )
  }
  

  const form3 = () => {
    return (
      <>
        <div className={styles.form3}>
          <div className={styles.calendly}></div>
          <div className={styles.data}>
            <img src={require('../../Images/Mask group.png')} style={{marginBottom: '2.1739vh',width: '5.2083vw',height: '8.6956vh'}}/>
            <Text data="Hello 👋🏻 I am Yugen Chokshi, your Talent Manager. I will make sure your"  fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh" color="black"/>           
            <Text data="hiring experience is worthwhile with TalentFirst!"  fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin="0px 0px 2.1739vh"/>           
            <Text data="I will be connecting with you to discuss more about your requirements & will "  fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh" color="black"/>           
            <Text data="be sharing profiles based on that. "  fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin="0px 0px 2.1739vh"/>           
            <Text data="Reach Yugen At :"  fontWeight="700" fontSize="2.1739vh" lineHeight="2.1739vh" color="black" margin="4.3478vh 0px 2.1739vh"/>           
            <Text data="yugen@talentfirst.io"  fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" />           
            <Text data="+91 9638552428"  fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" />           
            
          </div>
        </div>
      </>
    )
  }
  var heading = ''
  var content = ()=>{}
  if(formNo == 1){
    heading = "What Skills Are You Looking For?"
    content = ()=>{return   form1()}
  }
  else if(formNo == 2){
    heading = "You Are Just 1 Step Away From Hiring!"
    content = ()=>{return   form2()}
  }
  else if(formNo == 3){
    heading = "Schedule A Call With Your Talent Manager"    
    content = ()=>{return   form3()}
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.formHead}>
          <Text data={heading}  fontWeight="700" fontSize="4.3478vh" lineHeight="4.3478vh" color="black"/>
          <div className={styles.button}>STEP {formNo} / 3</div>
        </div>
        {content()}
                
        
        <div className={styles.endButton} >
          
          {formNo > 1 && 
            <div onClick={()=>{setFormNo(formNo - 1)}}>
              <Button data="Back" backgroundColor='#000000' width="9.7395vw" margin="0px 1.3020vw 0px 0px"/>
            </div>
          }
          {formNo < 3 && 
            <div onClick={()=>{setFormNo(formNo + 1)}}>
              <Button data="Continue" width="9.7395vw"/>
            </div>
          }
          {formNo == 3 && 
            <div>
              <Button data="Schedule" width="9.7395vw"/>
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default FormPage;
