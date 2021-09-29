const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();//event의 기본동작이 trigger되지 않는다.
    event.returnValue ="";//기본적으로는 이 부분은 없어도 된다. but chrome에서는 사용해야 함
  }
  //이벤트가 발생하면 브라우져가 이벤트 정보를 담은 객체를 생성해서 핸들러의 인수 형태로 전달해 주기 때문에 인수에 event가 자동으로 들어가지는 겁니다.
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  //window는 beforeunload이벤트를 갖게되었고, beforeunload이벤트가 발생했을 때 listener함수를 호출할 수 있다.
  //Event.returnValue - 이 Event속성 returnValue은이 이벤트에 대한 기본 작업이 금지되었는지 여부를 나타냅니다. true기본적으로 설정되어 있으며 "beforeunload" 이벤트의 기본 작업은 창을 그냥 바로 닫아버리는 것이다.
  //따라서 returnValue에 false를 줌으로써 창을 닫을지 재확인함
 
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);
  //"beforeunload" 이벤트전에 listener함수가 호출되는걸 제거한다.
  //beforeunload될때(창을 닫거나, 새로고침 등..) function이 실행되는 걸 허락한다.
  return { enablePrevent, disablePrevent };
}

export default usePreventLeave;