"use client";
import {useEffect, useState} from "react"

export default function Home() {
  const [count, setCount] = useState(0)
  const handleUpdate = () => {
    setCount(count - 1)
    if (count == 0){
      setCount(0)
      return 0;
    }
  }
  const updateHandle2 = () => {
    setCount(count - 2)
   if (count == 0) {
    setCount(0)
    return 0;
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
  <div className="grid-cols-2 text-4xl">
    Hello World!
    <div className="flex items-center justify-center gap-10 mb-5">
      <button 
      onClick={()=> setCount(count + 1)}
      className="bg-orange-600 text-amber-50 text-xl p-3 rounded-2xl hover:bg-amber-400 cursor-pointer border-2 border-black">
        Update
      </button>  
     
      <button 
      // it decreases by 2
      onClick={()=> updateHandle2()}
      className="bg-orange-600 text-amber-50 text-xl p-3 rounded-2xl hover:bg-amber-400 cursor-pointer border-2 border-black">
        Decrease - 2
      </button>        
      <button
      onClick={() => handleUpdate()} 
      // onClick={()=> setCount(count - 1)}
      className="bg-orange-600 text-amber-50 text-xl p-3 rounded-2xl hover:bg-amber-400 cursor-pointer border-2 border-black">
        Decrease
      </button>        
      <p className="text-7xl">{count}</p>
    </div>
        <div className="flex flex-2 gap-3 items-center justify-center">
      <button 
      onClick={() => numToggle()}
      className="p-3 bg-amber-900 rounded-2xl text-amber-50 cursor-pointer text-2xl border-2 border-black">Toggle</button>
      <p className="text-5xl p-2 rounded-2xl">{toggle}</p>     
      <button 
      onClick={() => numCountDown()}
      className="p-3 bg-amber-900 rounded-2xl text-amber-50 cursor-pointer text-2xl border-2 border-black">Count Down</button>
      <p className="text-5xl p-2 rounded-2xl">{countDown}</p>     
        </div>
  </div>
);
}