const useBeforeLeave = (onBefore) => {
  if(typeof onBefore !== "function"){
    return;
  }
  const handle = (event) => {
    console.log(event);
    const  { clientY } = event;
    if(clientY <= 0) {//화면의 윗부분으로 벗어났을 때
          onBefore();
    } 
  }
  useEffect(()=>{ 
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);//[]를 추가함으로써 계속해서 event가 document에 추가되는 걸 막아준다.
}

export default useBeforeLeave;