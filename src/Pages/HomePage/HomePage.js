import Header from '../../Components/Header/Header.js'
import styles from './homepage.module.css'
import Text from '../../Components/text.js';
import Button from '../../Components/button.js';
import CardImage from '../../Components/CardImage/cardImage.js';
import CardDot from '../../Components/CardDot/cardDot.js';
import Faq from '../../Components/FAQ/faq.js';
import Footer from '../../Components/Footer/footer.js';


function HomePage() {
  return (
    <div style={{overflow: 'hidden'}}>
      <Header />
      <div className={styles.main}>
        <div className={styles.image}>
          <div className={styles.head}>
            <Text data="Top 1% Vetted Talent"  fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>
            <Text data="Ready To Join Team Today!" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>
            <div className={styles.button}>
              <Button data="Share Requirements" fontWeight="600" fontSize="1.7391vh" lineHeight="1.7391vh"/>
            </div>
          </div>
          <div className={styles.head}>
            <img className={styles.iconContainImg} src={require("../../Images/Vector.png")} alt={""}/>
            <img className={styles.iconContainImg} src={require("../../Images/Amazon-Logo.png")} alt={""}/>
            <img className={styles.iconContainImg} src={require("../../Images/Group.png")} alt={""}/>
            <img className={styles.iconContainImg} src={require("../../Images/Google-Logo.png")} alt={""}/>
            <img className={styles.iconContainImg} src={require("../../Images/Microsoft-Logo.png")} alt={""}/>
            <img className={styles.iconContainImg} src={require("../../Images/Vector2.png")} alt={""}/>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div style={{marginTop: '9.3913vh'}}> 
          <Text data="We Take Care Of The Hassle" color="black" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>  
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
        <div className={styles.section3sub}>
            <Text data="Hire From A Network"  fontWeight="700" fontSize="4.3478vh" lineHeight="4.3478vh"/>
            <Text data="Of Worlds Best Talent" fontWeight="700" fontSize="4.3478vh" lineHeight="4.3478vh"/>
            <div style={{marginTop: '1.7391vh'}}>
              <Text data="Get full-time remote talent in your" fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh"/>  
              <Text data="time-zone at half cost." fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh"/> 
            </div>
            <div style={{marginTop: '4.3478vh'}}>
              <Button data="Share Requirements" fontWeight="600" fontSize="1.7391vh" lineHeight="1.7391vh"/>    
            </div>
        </div>
        <div className={styles.section3sub}>
          <div className={styles.smallImages}>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
          </div>
          <div className={styles.smallImages} style={{marginLeft: '-3.125vw'}}>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
          </div>
          <div className={styles.smallImages}>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
            <img className={styles.iconContainImgSmall} src={require("../../Images/image 1.png")} alt={""}/>
          </div>
        </div>
      </div>
      <div className={styles.section4}>
        <div>
            <Text data="Benefits Of"  color="black" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>
            <Text data="Hiring From" color="black" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>
            <Text data="TalentFirst" color="black" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>
        </div>
        <div>
          <CardDot 
            dataNormal="HireTopNotch Developers cover every tech stack and time zone, delivering complex projects under tight deadlines in a variety of industries."
            dataBold="Vetted Skills & Experience"
            image= {require("../../Images/image 1 (1).png")}
          />
        </div>
        <div>
          <CardDot 
            dataNormal="HireTopNotch Developers cover every tech stack and time zone, delivering complex projects under tight deadlines in a variety of industries."
            dataBold="Vetted Skills & Experience"
            image= {require("../../Images/image 1 (1).png")}
          />
        </div>
        <div>
          <CardDot 
            dataNormal="HireTopNotch Developers cover every tech stack and time zone, delivering complex projects under tight deadlines in a variety of industries."
            dataBold="Vetted Skills & Experience"
            image= {require("../../Images/image 1 (1).png")}
          />
        </div>
        <div>
          <CardDot 
            dataNormal="HireTopNotch Developers cover every tech stack and time zone, delivering complex projects under tight deadlines in a variety of industries."
            dataBold="Vetted Skills & Experience"
            image= {require("../../Images/image 1 (1).png")}
          />
        </div>
        <div>
          <CardDot 
            dataNormal="HireTopNotch Developers cover every tech stack and time zone, delivering complex projects under tight deadlines in a variety of industries."
            dataBold="Vetted Skills & Experience"
            image= {require("../../Images/image 1 (1).png")}
          />
        </div>
      </div>
      <div className={styles.section5}>
        <div style={{marginTop: '9.3913vh'}}> 
          <Text data="Hire Based On Tech Stack &" color="black" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>  
          <Text data="Other In-Depth Metrics" color="black" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>  
        </div>
        <div style={{marginTop: '5.3913vh'}}> 
          <Text data="Whether you need to hire Virtual CXOs, a Dedicated Team, or a Single Developer, we'll provide you with talented engineers" color="black" fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh"/>  
          <Text data="Who speak your language fluently, work in your time zone, share your company culture and perform at their best." color="black" fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh"/>  
        </div>
        <div className={styles.darkBgPic}>
          <div className={styles.darkBgPicLeft}>
            <div style={{paddingBottom: '4.3478vh'}}>
              <Text data="Naomi Harris, Business Developer & Investor" fontWeight="400" fontSize="1.7391vh" lineHeight="2.0869vh"/>  
              <Text data="Based In Vancouver, Canada" fontWeight="400" fontSize="1.7391vh" lineHeight="2.0869vh"/>  
            </div>
          </div>
        </div>
        <div style={{marginTop: '5.3913vh'}} className={styles.languages}> 
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
          <Text data="Angular.js" fontWeight="700" fontSize="1.7391vh" lineHeight="2.0869vh" color="black" margin='4.27vh 2.3437vw'/>      
        </div>
      </div>
      <div className={styles.section6}>
        <Text data="Simple & Efficient Hiring Process" color="white" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>  
        <div style={{marginTop: '8.7826vh', display: 'flex', flexDirection: 'row'}}>
          <CardImage 
            dataNormal="Whether you need to hire Virtual CXOs, a Dedicated Team, or a Single Developer, we'll provide you with talented engineers who speak your language fluently."
            dataColored="TOP TALENT AT HALF COST"
            dataBig="01"
            image= {require("../../Images/image 1.png")}
          />
          <CardImage 
            dataNormal="Whether you need to hire Virtual CXOs, a Dedicated Team, or a Single Developer, we'll provide you with talented engineers who speak your language fluently."
            dataColored="TOP TALENT AT HALF COST"
            dataBig="02"
            image= {require("../../Images/image 1.png")}
          />
          <CardImage 
            dataNormal="Whether you need to hire Virtual CXOs, a Dedicated Team, or a Single Developer, we'll provide you with talented engineers who speak your language fluently."
            dataColored="TOP TALENT AT HALF COST"
            dataBig="03"
            image= {require("../../Images/image 1.png")}
          />
        </div>
      </div>
      <div className={styles.section7}>
        <div className={styles.section7sub}>
          <img style={{width: '100%'}} src={require("../../Images/1280px-World_map_with_points 1.png")} alt={""}/>
        </div>
        <div className={styles.section7sub}>
          <div>
              <Text data="Escape The"  color="black" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>
              <Text data="Talent War In" color="black" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>
              <Text data="Your Zip Code" color="black" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>
              <div style={{width: '35.83vw' , marginTop: '2.1739vh'}}>
                <Text data="The data confirms it : employers have noted increasedproductivity with the shift to remote work, and employees sharethe enthusiasm, indicating greater work-life balance opportunitieswith a distributed workforce model. We’ve been operating remotelyfor years and know how to make a distributed workforce modelwork for your organisation." color="black" fontWeight="500" fontSize="1.7391vh" lineHeight="2.0869vh"/>  
              </div>
              <div style={{marginTop: '6.6086vh', width: '14.8437vw', display: 'inline-block'}}>
                <Button data="Share Requirements" fontWeight="600" fontSize="1.7391vh" lineHeight="1.7391vh" width="100%"/>    
              </div>
          </div>
        </div>
        
      </div>
      <div className={styles.section8}>
        <div> 
          <Text data="Frequently Asked Questions" color="black" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>  
        </div>
        <div style={{marginTop: '8.6956vh'}}>
          <Faq question="How does the payment cycle work?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy."/>
          <Faq question="How long does it take to hire a developer?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy."/>
          <Faq question="Who takes the responsibility of managing the employees?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy."/>
          <Faq question="What if the developer is not productive or leaves?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy."/>
          <Faq question="How are the developers skills verified?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy."/>
          <Faq question="Can we hire them on permanent basis?" answer="You get invoiced at the end of every month. If you hire multiple talents, you get a single invoice for all your hires. This makes the financing hassle free & easy."/>
        </div>
      </div>
      <div className={styles.section9}>
        <div className={styles.section9sub}>
          <Text data="Build Your Remote" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>
          <Text data="Tech Team Today!" fontWeight="900" fontSize="6.5217vh" lineHeight="6.5217vh"/>
          <div style={{marginTop: '6.6086vh', width: '14.8437vw', display: 'inline-block'}}>
            <Button data="Share Requirements" fontWeight="600" fontSize="1.7391vh" lineHeight="1.7391vh" width="100%"/>    
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
