import Header from '../../Components/Header/Header.js'
import styles from './homepage2.module.css'
import Text from '../../Components/text.js';
import Button from '../../Components/button.js';
import CardImage from '../../Components/CardImage/cardImage.js';
import CardDot from '../../Components/CardDot/cardDot.js';
import Faq from '../../Components/FAQ/faq.js';
import Footer from '../../Components/Footer/footer.js';
import CardImageReverse from '../../Components/CardImage/cardImageReverse.js';
import Faq2 from '../../Components/FAQ/faq2.js';


function HomePage2() {
  return (
    <div style={{overflow: 'hidden'}}>
      <Header withLogin={true}/>
      <div className={styles.main}>
        <div className={styles.image}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div className={styles.head} style={{width: '50%', textAlign: 'left'}}>
              <Text data="Get Remote Jobs"  fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>
              <Text data="At Top Companies" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>
              <div style={{marginTop: '2.08vh'}}>
                <Text fontSize='2.08vh' lineHeight='2.08vh' fontWeight='500' data="Whether you need to hire Virtual CXOs, a Dedicated Team" />
                <Text fontSize='2.08vh' lineHeight='2.08vh' fontWeight='500' data="or a Single Developer, we’ll provide you with talented engineers" />
                <Text fontSize='2.08vh' lineHeight='2.08vh' fontWeight='500' data="who speak your language fluently, work in your time zone, share" />
                <Text fontSize='2.08vh' lineHeight='2.08vh' fontWeight='500' data="your company culture and perform at their best." />  
              </div>
              <div className={styles.button} style={{display: 'flex',alignItems:'flex-start'}}>
                <Button data="Apply For Jobs" fontWeight="600" fontSize="1.7391vh" lineHeight="1.7391vh"/>
              </div>
            </div>
            <div style={{height: '78.20vh', overflow: 'hidden'}}>
              <div className={styles.animate}>
                <div style={{display: 'flex', flexDirection:'column'}}>
                  <img style={{width:'16.92 vw', height: '34.78vh', marginLeft: '6.51vw', marginBottom: '2.1739vh'}} src={require('../../Images/Path53.png')}/>
                  <img style={{width:'16.92 vw', height: '34.78vh', marginLeft: '6.51vw', marginBottom: '2.1739vh'}} src={require('../../Images/Path53.png')}/>
                  <img style={{width:'16.92 vw', height: '34.78vh', marginLeft: '6.51vw', marginBottom: '2.1739vh'}} src={require('../../Images/Path53.png')}/>
                  <img style={{width:'16.92 vw', height: '34.78vh', marginLeft: '6.51vw', marginBottom: '2.1739vh'}} src={require('../../Images/Path53.png')}/>
                </div>
                <div style={{display: 'flex', flexDirection:'column', marginTop: '-6.52vh'}}>
                  <img style={{width:'16.92 vw', height: '34.78vh', marginLeft: '1.31vw', marginBottom: '2.1739vh'}} src={require('../../Images/Path53.png')}/>
                  <img style={{width:'16.92 vw', height: '34.78vh', marginLeft: '1.31vw', marginBottom: '2.1739vh'}} src={require('../../Images/Path53.png')}/>
                  <img style={{width:'16.92 vw', height: '34.78vh', marginLeft: '1.31vw', marginBottom: '2.1739vh'}} src={require('../../Images/Path53.png')}/>
                  <img style={{width:'16.92 vw', height: '34.78vh', marginLeft: '1.31vw', marginBottom: '2.1739vh'}} src={require('../../Images/Path53.png')}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div style={{marginTop: '9.3913vh'}}> 
          <Text data="Why Join TalentFirst?" color="black" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>  
        </div>
        <div style={{marginTop: '5.3913vh'}}> 
          <Text data="Whether you need to hire Virtual CXOs, a Dedicated Team, or a Single Developer, we'll provide you with talented engineers" color="black" fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh"/>  
          <Text data="Who speak your language fluently, work in your time zone, share your company culture and perform at their best." color="black" fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh"/>  
        </div>
        <div style={{marginTop: '8.7826vh', display: 'flex', flexDirection: 'row'}}>
          <CardImage 
            dataNormal="Whether you need to hire Virtual CXOs, a Dedicated Team, or a Single Developer, we'll provide you with talented engineers who speak your language fluently."
            dataColored="TOP TALENT AT HALF COST"
            // dataBig="01"
            image= {require("../../Images/image 1.png")}
          />
          <CardImage 
            dataNormal="Whether you need to hire Virtual CXOs, a Dedicated Team, or a Single Developer, we'll provide you with talented engineers who speak your language fluently."
            dataColored="TOP TALENT AT HALF COST"
            // dataBig="01"
            image= {require("../../Images/image 1.png")}
          />
          <CardImage 
            dataNormal="Whether you need to hire Virtual CXOs, a Dedicated Team, or a Single Developer, we'll provide you with talented engineers who speak your language fluently."
            dataColored="TOP TALENT AT HALF COST"
            // dataBig="01"
            image= {require("../../Images/image 1.png")}
          />
        </div>
      </div>
      <div className={styles.section3}>
        <div style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
          <div style={{display: 'flex', width: '100%', flexDirection: 'row'}}>
            <div className={styles.section3sub}>
                <Text data="Developers ❤️ TalentFirst"  fontWeight="700" fontSize="4.3478vh" lineHeight="4.3478vh"/>
                <div style={{marginTop: '1.7391vh'}}>
                  <Text data="Stories reflecting the success of our talents." fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh"/>  
                  <Text data="Hear it from developers who have found amazing careers with TalentFirst." fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh"/> 
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width:'45%', height: '27.82vh'}}>
              <img className={styles.iconContainImgSmall} style={{borderRadius: '25vh', width: '6.5217vh', height: '6.5217vh'}} src={require("../../Images/image 1.png")} alt={""}/>
              <img className={styles.iconContainImgSmall} style={{borderRadius: '25vh', width: '6.5217vh', height: '6.5217vh'}} src={require("../../Images/image 1.png")} alt={""}/>
            </div>
          </div>
          <div style={{width:'calc(100% - 15.625vw)',display: 'flex', alignContent: 'center', justifyContent: 'space-between',paddingRight: '7.8125vw',paddingLeft: '7.8125vw'}}>
            <img style={{width:'16.92 vw', height: '39.47vh', marginLeft: '1.31vw', marginBottom: '1vh'}} src={require('../../Images/Path33.png')}/>
            <img style={{width:'16.92 vw', height: '39.47vh', marginLeft: '1.31vw', marginBottom: '1vh'}} src={require('../../Images/Path33.png')}/>
            <img style={{width:'16.92 vw', height: '39.47vh', marginLeft: '1.31vw', marginBottom: '1vh'}} src={require('../../Images/Path33.png')}/>
          </div>
        </div>
      </div>
      <div className={styles.section5}>
        <div style={{marginTop: '9.3913vh'}}> 
          <Text data="Join the Future Of Work" color="black" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>  
        </div>
        <div style={{marginTop: '2.1739vh'}}>
          <Text color="black" fontSize='2.08vh' lineHeight='2.08vh' fontWeight='500' data="Every day we market your profile to dozens of clients directly." />
          <Text color="black" fontSize='2.08vh' lineHeight='2.08vh' fontWeight='500' data="You won't have to scout dozens of job boards, send cold emails, search on LinkedIn or talk to recruiters." />
          <Text color="black" fontSize='2.08vh' lineHeight='2.08vh' fontWeight='500' data="We'll do that for you and more." />
        </div>
        <div className={styles.section7} style={{paddingBottom: '0vh'}}>
          <div className={styles.section7sub}>
            <div style={{display: 'flex',alignItems: 'flex-start', flexDirection: 'column', textAlign: 'left'}}>
                <Text data="Get Matched To Companies "  color="black" fontWeight="900" fontSize="4.3478vh" lineHeight="4.3478vh"/>
                <Text data="Within 14 Days"  color="black" fontWeight="900" fontSize="4.3478vh" lineHeight="4.3478vh"/>
                <div style={{width: '35.83vw' , marginTop: '2.1739vh'}}>
                  <Text data="Every day we market your profile to dozens of clients directly. You won't have to scout dozens of job boards, send cold emails, search on LinkedIn or talk to recruiters.  We'll do that for you and more." color="black" fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh"/>  
                </div>
                <div style={{marginTop: '6.6086vh', width: '14.8437vw', display: 'inline-block'}}>
                  <Button data="Apply Now" fontWeight="600" fontSize="1.7391vh" lineHeight="1.7391vh" width="100%"/>    
                </div>
            </div>
          </div>
          <div className={styles.section7sub}>
            <img style={{width: '36.45vw', height: '30.4347vh'}} src={require("../../Images/Path40.png")} alt={""}/>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 'auto'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',marginRight: '1.3020vw', padding: '25px'}}>
            <div className={styles.section7sub} style={{justifyContent: 'initial'}}>
              <div style={{display: 'flex',alignItems: 'flex-start', flexDirection: 'column', textAlign: 'left'}}>
                <Text data="Get Jobs In 100+ Skills"  color="black" fontWeight="900" fontSize="4.3478vh" lineHeight="4.3478vh"/>
                <Text data="Across Seniorities"  color="black" fontWeight="900" fontSize="4.3478vh" lineHeight="4.3478vh"/>
                <div style={{width: '35.83vw' , marginTop: '2.1739vh', marginBottom:'2.1739vh'}}>
                  <Text data="Every day we market your profile to dozens of clients directly. You won't have to scout dozens of job boards, send cold emails, search on LinkedIn or talk to recruiters.  We'll do that for you and more." color="black" fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh"/>  
                </div>
              </div>
            </div>
            <div className={styles.section7sub}>
              <img style={{width: '36.45vw', height: '30.4347vh'}} src={require("../../Images/Path40.png")} alt={""}/>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '25px'}}>
            <div className={styles.section7sub}  style={{justifyContent: 'initial'}}>
              <div style={{display: 'flex',alignItems: 'flex-start', flexDirection: 'column', textAlign: 'left'}}>
                <Text data="Get Jobs In 100+ Skills"  color="black" fontWeight="900" fontSize="4.3478vh" lineHeight="4.3478vh"/>
                <Text data="Across Seniorities"  color="black" fontWeight="900" fontSize="4.3478vh" lineHeight="4.3478vh"/>
                <div style={{width: '35.83vw' , marginTop: '2.1739vh', marginBottom:'2.1739vh'}}>
                  <Text data="Every day we market your profile to dozens of clients directly. You won't have to scout dozens of job boards, send cold emails, search on LinkedIn or talk to recruiters.  We'll do that for you and more." color="black" fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh"/>  
                </div>
              </div>
            </div>
            <div className={styles.section7sub}>
              <img style={{width: '36.45vw', height: '30.4347vh'}} src={require("../../Images/Path40.png")} alt={""}/>
            </div>
          </div>
        </div>
      </div>
      <div style={{width: '100vw', backgroundColor: 'black', paddingBottom: '23.4782vh'}}>
        <div style={{paddingTop: '9.3913vh',paddingBottom: '9.3913vh', width: '100%', textAlign: 'center'}}> 
          <Text data="Why Join TalentFirst?" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>  
        </div>
        <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center'}}>
          <div style={{}}>
            <div style={{width: '31.25vw', height: '31.25vw', borderStyle: 'dashed', borderColor: 'white', borderRadius:'31.25vw', color: '#191919', fontSize: '13.04vh',display: 'flex', alignItems: 'center', justifyContent: 'flex-end',paddingRight: '4vw', fontWeight:'900', marginLeft: '-16.625vw'}}>01</div>
          </div>
          <div style={{width: '100%', marginLeft: '-1.4vh'}}>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '6.860vh', marginLeft: '-7.399999999999999vh', borderColor: '#0072FF', borderWidth: '5px'}}>
              <div style={{width: '1.8229vw', height: '1.8229vw', backgroundColor: 'white', borderRadius: '25px'}}></div> 
              <div style={{fontSize:'2.608vh', fontWeight: '700', color: 'white', marginLeft: '1.3020vw'}}>Buiild Your Career</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '10.260vh', marginLeft: '-0.4vh'}}>
              <div style={{width: '1.8229vw', height: '1.8229vw', backgroundColor: 'white', borderRadius: '25px'}}></div> 
              <div style={{fontSize:'2.608vh', fontWeight: '700', color: 'white', marginLeft: '1.3020vw'}}>Buiild Your Career</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '10.260vh',  marginLeft: '-1.4vh'}}>
              <div style={{width: '1.8229vw', height: '1.8229vw', backgroundColor: 'white', borderRadius: '25px'}}></div> 
              <div style={{fontSize:'2.608vh', fontWeight: '700', color: 'white', marginLeft: '1.3020vw'}}>Buiild Your Career</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '10.260vh', marginLeft: '-12.399vh'}}>
              <div style={{width: '1.8229vw', height: '1.8229vw', backgroundColor: 'white', borderRadius: '25px'}}></div> 
              <div style={{fontSize:'2.608vh', fontWeight: '700', color: 'white', marginLeft: '1.3020vw'}}>Buiild Your Career</div>
            </div>
          </div>
          <div>
            <img src={require('../../Images/Path54.png')} style={{width: '49.47vw', hieght: '52.17vh', marginRight: '10vw'}}/>
          </div>
        </div>
        <div style={{marginTop: '21.739vh', width: '100%', paddingLeft: '10%',}}>
          <div style={{width: '100%', color: 'white',fontStyle: 'Italic', marginBottom: '8.6956vh', fontSize: '6.5217vh', fontWeight: '400'}}>Frequently Asked Question</div>
          <div style={{display: 'flex', flexDirection: 'row', width: '80%'}}>
            <div style={{width: '100%', marginRight:'5.2083vw'}}>
              <Faq2 question="What is TalentFirst?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy." width='100%'/>
              <Faq2 question="What is TalentFirst?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy." width='100%'/>
              <Faq2 question="What is TalentFirst?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy." width='100%'/>
            </div>
            <div style={{width: '100%',  marginRight:'5.2083vw'}}>
              <Faq2 question="What is TalentFirst?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy." width='100%'/>
              <Faq2 question="What is TalentFirst?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy." width='100%'/>
              <Faq2 question="What is TalentFirst?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy." width='100%'/>
            </div>
            <div style={{width: '100%'}}>
              <Faq2 question="What is TalentFirst?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy." width='100%'/>
              <Faq2 question="What is TalentFirst?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy." width='100%'/>
              <Faq2 question="What is TalentFirst?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy." width='100%'/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div style={{marginTop: '9.3913vh'}}> 
          <Text data="Supercharge Your HUnt" color="black" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>  
          <Text data="With Our Tools" color="black" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>  
        </div>
        <div style={{marginTop: '8.7826vh', display: 'flex', flexDirection: 'row'}}>
          <CardImageReverse
            dataNormal="Whether you need to hire Virtual CXOs, a Dedicated Team, or a Single Developer, we'll provide you with talented engineers who speak your language fluently."
            dataColored="TOP TALENT AT HALF COST"
            // dataBig="01"
            image= {require("../../Images/image 1.png")}
          />
          <CardImageReverse
            dataNormal="Whether you need to hire Virtual CXOs, a Dedicated Team, or a Single Developer, we'll provide you with talented engineers who speak your language fluently."
            dataColored="TOP TALENT AT HALF COST"
            // dataBig="01"
            image= {require("../../Images/image 1.png")}
          />
          <CardImageReverse
            dataNormal="Whether you need to hire Virtual CXOs, a Dedicated Team, or a Single Developer, we'll provide you with talented engineers who speak your language fluently."
            dataColored="TOP TALENT AT HALF COST"
            // dataBig="01"
            image= {require("../../Images/image 1.png")}
          />
        </div>
      </div>
      
      <div className={styles.section9}>
        <div className={styles.section9sub}>
          <div>
            <Text data="Take Off Your Career" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>
            <Text data="With TalentFirst!" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>  
          </div>
          <div style={{marginTop: '6.6086vh', width: '14.8437vw', display: 'inline-block'}}>
            <Button data="Apply For Jobs" fontWeight="600" fontSize="1.7391vh" lineHeight="1.7391vh" width="100%"/>    
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage2;