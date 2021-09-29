import React, {useState} from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    //head에 존재하는 <title> 태그를 말함
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);//title의 값이 변경될 때마다 unpdateTitle함수를 호출
  return setTitle;
}

export default useTitle;
