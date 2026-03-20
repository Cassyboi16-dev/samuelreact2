"use client";
import {useEffect, useState} from "react"
import Countdown from "./assignment";
export default function Home() {
  const [count, setCount] = useState(0)
  const handleUpdate = () => {
    setCount(count - 1)
    if (count == 0){
      setCount(0)
      return
    }
  }
  const updateHandle2 = () => {
    setCount(count - 2)
    if (count == 0){
      setCount(0)
      return
    }
  }
   
  

  useEffect(()=> {
    console.log("Hello");  
  }, [count])
  const [toggle, setToggle] = useState(0)
  const numToggle = () => {
    setToggle(toggle - 1 && + 1)
  }
  const [countDown, setCountDown] = useState(35)
  const numCountDown = () => {
    setCountDown(countDown - 1)
    if (countDown == 0){
      setCountDown(0)
      return 0;
    }
  }





  return (
    <div>
      Hello World!
      <div className="flex items-center justify-center gap-10">
        <button 
        onClick={()=> setCount(count + 1)}
        className="bg-orange-600 text-amber-50 text-xl p-3 rounded-2xl hover:bg-amber-400">
          Update
        </button>  
       
        <button 
        // it decreases by 2
        onClick={()=> updateHandle2()}
        className="bg-orange-600 text-amber-50 text-xl p-3 rounded-2xl hover:bg-amber-400">
          Decrease - 2
        </button>        
        <button
        onClick={() => handleUpdate()} 
        // onClick={()=> setCount(count - 1)}
        className="bg-orange-600 text-amber-50 text-xl p-3 rounded-2xl hover:bg-amber-400">
          Decrease
        </button>        
        <p className="text-7xl">{count}</p>
        
        <button 
        onClick={() => numToggle()}
        className="p-3 bg-amber-900 rounded-2xl text-amber-50">Toggle</button>
        <p className="text-5xl bg-amber-400 px-3 py-3 rounded-2xl">{toggle}</p>     
        <button 
        onClick={() => numCountDown()}
        className="p-3 bg-amber-900 rounded-2xl text-amber-50">Count Down</button>
        <p className="text-5xl bg-amber-400 px-3 py-3 rounded-2xl">{countDown}</p>     
      </div>
    </div>
  );
}