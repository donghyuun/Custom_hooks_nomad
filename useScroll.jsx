import React, {useState} from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = (event) => {
    setState({y: window.scrollY, x: window.scrollX});
  }
  
  console.log(state);//check point!!! 
  
  useEffect(()=> {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  return {state};
}

export default useScroll;