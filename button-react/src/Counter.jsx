import { useState } from 'react'
import './Counter.css'
export default function Counter(){
  const [score,setScore] = useState(0);
  // const [hover,setHover] = useState(false);
  let className = 'counter';
  // if(hover){
  //   className += ' hover';
  // }  
  return (
 <div className={className}
//  onPointerEnter={() => setHover(true)}
//  onPointerLeave={() => setHover(false)}
> 
  {/* //USESTATE IS USED FOR THIS LINE TO CHANGE THE VARIABLE ON THE SCREEN  */}
    <h1>{score}</h1>
    <button onClick={()=>setScore(score+1)} className='button'>Add one</button>
</div>
    )
}