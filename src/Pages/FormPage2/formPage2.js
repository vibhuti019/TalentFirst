import Header from '../../Components/Header/header.js'
import styles from './formpage2.module.css'
import Text from '../../Components/text.js';
import InputButton from '../../Components/inputButton.js';
import InputText from '../../Components/inputText.js';
import Button from '../../Components/button.js';
import { useState } from 'react';
import InputRadioButton from '../../Components/inputRadioButton.js';
import HeaderLogin from '../../Components/HeaderLogin/headerLogin.js';

function FormPage2() {
  return(
    <>
      <HeaderLogin />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.formHead}>
            <Text data="Hi Yugen, Let Us Know You Better!"  fontWeight="700" fontSize="4.3478vh" lineHeight="4.3478vh" color="black"/>
            <div className={styles.button}>STEP 1 / 1</div>
          </div>
          <div className={styles.eachDetail}>
            <Text data="Upload Your Most Recent Resume"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <div className={styles.uploadResume}>
              <img className={styles.uploadImg} src={require('../../Images/UploadSimple.png')} />
              <div>
                <Text data="Upload Your Most Recent Resume"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
                <Text data="Files support .pdf .doc .docx. Size of "  fontWeight="400" fontSize="1.7391vh" lineHeight="1.7391vh" color="black"/>
                <Text data="each document can be up to 5 MB."  fontWeight="400" fontSize="1.7391vh" lineHeight="1.7391vh" color="black"/>
              </div>
            </div>
          </div>
          <Text data="Personal Details"  fontWeight="700" fontSize="2.6086vh" lineHeight="2.6086vh" color="black" margin="2.1739vh 0vh"/>
          <div className={styles.uploadFile}>
            <img className={styles.uploadFileImg} src={require('../../Images/UploadSimple.png')} />
            <div>
              <Text data="Upload Your Most Recent Resume"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
              <Text data="Files support .pdf .doc .docx. Size of "  fontWeight="400" fontSize="1.7391vh" lineHeight="1.7391vh" color="black"/>
              <Text data="each document can be up to 5 MB."  fontWeight="400" fontSize="1.7391vh" lineHeight="1.7391vh" color="black"/>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.eachDetail}>
              <Text data="Full Name"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
              <InputText data="Full Name" width="calc(100% - 2vw)"/>  
            </div>
            <div className={styles.eachDetail}>
              <Text data="Email"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
              <InputText data="Email" width="calc(100% - 2vw)"/>  
            </div>  
          </div>
          <div className={styles.details}>
            <div className={styles.eachDetail}>
              <Text data="Mobile Number"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
              <InputText data="Mobile Number" width="calc(100% - 2vw)"/>  
            </div>
            <div className={styles.eachDetail}>
              <Text data="Location"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
              <InputText data="Location" width="calc(100% - 2vw)"/>  
            </div>  
          </div>
          <div className={styles.eachDetail}>
            <Text data="LinkedIn"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <InputText data="Enter LinkedIn URL" width="calc(200% - 2vw)"/>  
          </div>
        
        <Text data="Education Details & English Proficiency"  fontWeight="700" fontSize="2.6086vh" lineHeight="2.6086vh" color="black" margin="2.1739vh 0vh"/>
        <div className={styles.eachDetail}>
          <Text data="What’s Your Educational Background?"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
          <div className={styles.addEducation}>
            <img className={styles.addEducationImg} src={require('../../Images/Plus.png')} />
            <Text data="Upload Your Most Recent Resume"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black"/>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.eachDetail}>
            <Text data="How's Your English?"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="2.1739vh 0vh"/>
            <InputRadioButton data="Basic" width="calc(100% - 2vw)"/>  
          </div> 
          <div className={styles.eachDetail} style={{marginRight: '0px'}}>
            <Text data="a"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="transparent" margin="2.1739vh 0vh"/>
            <InputRadioButton data="Average" width="calc(100% - 2vw)"/>  
          </div> 
          <div className={styles.eachDetail} style={{marginRight: '0px'}}>
            <Text data="a"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="transparent" margin="2.1739vh 0vh"/>
            <InputRadioButton data="Fluent" width="calc(100% - 2vw)"/>  
          </div> 
        </div>
        


        <Text data="Current Role & Expectations"  fontWeight="700" fontSize="2.6086vh" lineHeight="2.6086vh" color="black" margin="2.1739vh 0vh"/>
        <div className={styles.eachDetail}>
          <Text data="What is your current role?"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
          <InputText data="Search Your Role" width="calc(200% - 2vw)"/>  
        </div>
        <Text data="What Is Your Ideal Hourly Budget Range?"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>           
        <div className={styles.radioContainer}>
          <InputText data="Eg : 3 Days, 2 Weeks etc" width="calc(100% - 2vw)"/>            
          <InputRadioButton data="I Can Start Working Immediately" width='calc(100% - 2vw)'/>
        </div>
        <div className={styles.details}>
          <div className={styles.eachDetail}>
            <Text data="Current Salary"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <InputText data="Eg: 50,000" width="calc(100% - 2vw)"/>  
          </div> 
          <div className={styles.eachDetail} style={{marginRight: '0px'}}>
            <Text data="Expected Salary"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <InputText data="Eg: 50,000" width="calc(100% - 2vw)"/>  
          </div> 
        </div>
        <div className={styles.details}>
          <div className={styles.eachDetail}>
            <Text data="Working Preference"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <InputRadioButton data="Full-Time (40 Hours / Week)" width="calc(100% - 2vw)"/>  
          </div> 
          <div className={styles.eachDetail} style={{marginRight: '0px'}}>
            <Text data="a"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="transparent" margin="0px 0px 2.1739vh"/>
            <InputRadioButton data="Full-Time (20 Hours / Week)" width="calc(100% - 2vw)"/>  
          </div> 
        </div>
        <Text data="Your Expertise"  fontWeight="700" fontSize="2.6086vh" lineHeight="2.6086vh" color="black" margin="2.1739vh 0vh"/>
        <div className={styles.details}>
          <div className={styles.eachDetail}>
            <Text data="Total Years Of Professional Experience?"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <InputText data="00" width="calc(100% - 2vw)"/>  
          </div> 
          <div className={styles.eachDetail} style={{marginRight: '0px'}}>
            <Text data="What Role Are You Most Experienced In?"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <InputText data="Eg : Full Stack, DevOps, Cloud" width="calc(100% - 2vw)"/>  
          </div> 
        </div>
        <Text data="Which Tech Skills Are You Professionally Great At? (Select All That Apply)"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>   
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
        </div>
        <div className={styles.eachDetail}>
          <InputText data="Search For Skills" width="calc(200% - 2vw)"/>  
        </div>
        <div style={{marginTop: '50px',marginBottom: '50px'}}>
          <Text data="Add your skills, years of experience and how competent you are with each of them."  fontWeight="400" fontSize="1.7391vh" lineHeight="1.7391vh" color="#00070F"/>
        </div>
        <div className={styles.details}>
          <div className={styles.eachDetail}>
            <Text data="Skill"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <InputText data="React JS" width="calc(100% - 2vw)"/>  
            <InputText data="React JS" width="calc(100% - 2vw)"/>  
          </div> 
          <div className={styles.eachDetail}>
            <Text data="Years Of Experience"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <InputText data="00" width="calc(100% - 2vw)"/>  
            <InputText data="00" width="calc(100% - 2vw)"/>  
          </div> 
          <div className={styles.eachDetail} style={{marginRight: '0px'}}>
            <Text data="Competency"  fontWeight="700" fontSize="1.7391vh" lineHeight="1.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <InputText data="Select Competency" width="calc(100% - 2vw)"/>  
            <InputText data="Select Competency" width="calc(100% - 2vw)"/>  
          </div> 
        </div>
          <div>
            <Button data="Finish" width="9.7395vw"/>
          </div>  
        </div>
        <div className={styles.leftContainer}>
          <div className={styles.profilescore}>
            <Text data="Profile Score 🎯"  fontWeight="700" fontSize="2.7391vh" lineHeight="2.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <div className={styles.progress}>
              <div className={styles.barOverflow}>
                <div className={styles.bar} style={{transform: 'rotateZ(86deg)'}}></div>
              </div>
              <span>90</span>/100
            </div>
            <div className={styles.profilescoreText}>Complete your profile for higher score and a faster path to get hired.</div>
          </div>
          <div className={styles.proTips}>
            <Text data="PRO Tips 🔥"  fontWeight="700" fontSize="2.7391vh" lineHeight="2.7391vh" color="black" margin="0px 0px 2.1739vh"/>
            <ol>
              <li className={styles.protipsListItem}>Use a desktop site to complete your profile faster.</li>
              <li className={styles.protipsListItem}>Make sure that all the information is accurate.</li>
              <li className={styles.protipsListItem}>Add a professional profile picture to stand-out.</li>
              <li className={styles.protipsListItem}>Mention all your technical skills for better match</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormPage2;
