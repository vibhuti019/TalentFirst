import Logo from "../logo";
import styles from './footer.module.css'
import Text from '../text.js'

function Footer() {
  var marginText = '0px 0.88vw'
  var marginTextBold = '0px 0.88vw 1.7391vh'
  return (
    <div className={styles.container}>
        <div>
            <Logo color='white'/>
            <div style={{marginTop: '2.1739vh'}}>
                <Text data="Copyright. TalentFirst 2022."/>
                <Text data="All Rights Reserved." />
            </div>
        </div>
        <div className={styles.topics}>
            <Text data="Support" fontWeight="700" margin={marginTextBold}/>
            <Text data="Hire Developers" margin={marginText}/>
            <Text data="Book A Call" margin={marginText}/>
            <Text data="Customer Reviews" margin={marginText}/>
            <Text data="How To Hire" margin={marginText}/>
        </div>
        <div className={styles.topics}>
            <Text data="Developers" fontWeight="700" margin={marginTextBold}/>
            <Text data="Apply For Jobs" margin={marginText}/>
            <Text data="Developer Login" margin={marginText}/>
            <Text data="Developer Community" margin={marginText}/>
            <Text data="Success Stories" margin={marginText}/>
            <Text data="Salary Explorer" margin={marginText}/>
            <Text data="Resume Builder" margin={marginText}/>
        </div>
        <div className={styles.topics}>
            <Text data="Company" fontWeight="700" margin={marginTextBold}/>
            <Text data="Blog" margin={marginText}/>
            <Text data="About Us" margin={marginText}/>
            <Text data="TalentFirst Reviews" margin={marginText}/>
            <Text data="Contact Us" margin={marginText}/>
            <Text data="Terms & Conditions" margin={marginText}/>
            <Text data="Privacy Policy" margin={marginText}/>
        </div>
        <div className={styles.topics}>
            <Text data="Socials" fontWeight="700" margin={marginTextBold}/>
            <Text data="Instagram" margin={marginText}/>
            <Text data="Facebook" margin={marginText}/>
            <Text data="LinkedIn" margin={marginText}/>
            <Text data="Twitter" margin={marginText}/>
        </div>
    </div>
  );
}

export default Footer;
 