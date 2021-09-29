import React, {useState} from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  //It will be updated by react, not by us. So we don't do 'let'
  const onChange = (event) => {
    const {target:{value}} = event;//const value  = event.target.value;
    //validator를 이용한 검증기능 구현
    let willUpdate = true;
    if(typeof validator === "function"){
      willUpdate = validator(value); 
    }
    if(willUpdate){
      setValue(value);
    }
  }
  return { value, onChange }; 
  //객체를 return하고 객체안에는 key,value값과 함수가 들어있다.
  //여기서 value는 value: value인데 앞의 value는 useState에서 정의한 state인 value이고,
  //뒤에 value는 value=event.target.value의 value이다.
  //key값과 value값의 이름이 같아서 한번만 써주면 된다.
  
}

export default useInput;