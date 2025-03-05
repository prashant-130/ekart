import React, { useState } from 'react'
import questions from './Question';
import './Quiz.css'

 const Quiz = () => {
    let [current,setcurrent]=useState(0)
    let [score,setscore]=useState(0)
    let [selectoption,setselectoption]=useState(null)
    // console.log(questions[5].options.map((element)=>{console.log(element)}))
    let onprevious=()=>{
     setcurrent(current-1)
     setselectoption(null)
    }
    let onnext=()=>{
        setcurrent(current+1)
        setselectoption(null)
    }
    let getdata =(e)=>{
console.log(e)
 console.log(questions[current].answer)

 setselectoption(e)

 if(questions[current].answer==e){
    setscore(score+1)
 }


    }
  if(current<=9)
  {
    // setInterval(()=>
    //     {
    //     onnext()
    //     console.log(current)
    //         console.log('next')
    //     },2000)
  }
  else
  {

  }
  return <>
  <div>
    {score}
  </div>
  <div>
    {questions[current].question}
  </div>
  <div>
    {questions[current].options.map((e)=>{ 
        return <button className={`${selectoption==null?"": e==questions[current].answer? "bg-success":selectoption===e ? 'bg-danger':""
        }`}  onClick={()=>{getdata(e)}}>{e}</button>
    })}
  </div>
  <button disabled={current==0} onClick={onprevious}>Previous</button>
  <button onClick={onnext} disabled={current==questions.length-1}>Next</button>
   <div className='progress bg-primary'  style={ { width:`${(current/(questions.length-1))*100}%`}}></div>
  </>
}
export default Quiz;