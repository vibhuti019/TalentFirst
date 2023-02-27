import styles from './faq.module.css'
import React, { useState } from 'react';

function Faq(props) {
  const [open, setOpen] = useState(false);
  var question = 'Lorem Ipsum'
  var answer = 'Lorem Ipsum'
  var width= '72.916666vw'
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
    <div className={styles.container} style={{width: width}} onClick={()=>{setOpen(!open)}}>
        <div className={styles.question}>
            {question}
        </div>
        {open &&
            <div className={styles.answer}>
                {answer}
            </div>
        }
        
    </div>
  );
}

export default Faq;
