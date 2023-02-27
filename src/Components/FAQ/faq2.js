import styles from './faq.module.css'
import React, { useState } from 'react';

function Faq2(props) {
  const [open, setOpen] = useState(false);
  var question = 'Lorem Ipsum'
  var answer = 'Lorem Ipsum'
  var width= ''
  if(props.width !== undefined){
    width = props.width
  }
  if(props.question !== undefined){
    question  = props.question
  }
  if(props.answer !== undefined){
    answer  = props.answer
  }
  
  return (
    <div className={styles.container2} style={{width: width}} onClick={()=>{setOpen(!open)}}>
        <div className={styles.question2}>
            <img src={require('../../Images/CaretDown.png')} style={{width: '2.782vh', height:'2.782vh', marginRight: '10px'}}/>
            {question}
        </div>
        {open &&
            <div className={styles.answer2}>
                {answer}
            </div>
        }
        
    </div>
  );
}

export default Faq2;
