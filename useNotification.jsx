import React, {useState, useEffect, useRef} from 'react';

//Notification API를 이용
const useNotification = (title, options) => {
  if(!("Notification" in window)){
    return;
  }
  const fireNotif = () => {
    if(Notification.permission !== "granted"){
      Notification.requestPermission().then(permission => {
        //requesetPermission은 사용자에게 Notification을 사용하는 것에 대해 허락을 요청한다.
        //permission은 default, granted, denied 중 하나이다.
        if(permisstion === "granted"){
          new Notification(title, options);
        } else {
          return;
        }
      })
      
    }else{
      new Notification(title, options);
    }
  };
  return fireNotif;
}

const App = () => {
  const triggerNotif = useNotification("Can I steal your Kimchi?", {body: "I love Kimchi don't you?"});
  return(
    <div> 
      <button onClick={triggerNotif}>Hello</button>
    </div>
  )
}

export default App;