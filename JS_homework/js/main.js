
/*
window.location.href = 'welcome.html'
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}


const loginBtn = document.querySelector('.btn-login');
const inputId = document.querySelector('.user-email-input');
const inputPw = document.querySelector('.user-password-input');
const loginValidation = emailReg(inputId.value) && pwReg(inputPw.value);

function validation(type, reg){  // id, pw 유효성 검사 함수
  if(reg(type.value)){
    type.classList.remove('is--invalid');
  }else if(type.value === ''){
    type.classList.remove('is--invalid');
  }else{
    type.classList.add('is--invalid');
  }
}


inputId.addEventListener('input', function(){
  validation(inputId, emailReg);
})


inputPw.addEventListener('input', function(){
    validation(inputPw, pwReg);
 })


//  const user = {
//   id:'asd@naver.com',
//   pw:'spdlqj123!@'
// }

 loginBtn.addEventListener('click', function(event){ 
  event.preventDefault();  //클릭시 페이지 이동 막기
  if((emailReg(inputId.value) && pwReg(inputPw.value))&& user.id === inputId.value && user.pw === inputPw.value){ //유저 아이디와, 비밀번호가 둘 다 정규식 조건에 부합하는지 확인. 
    window.location.href = 'welcome.html'; //조건에 맞다면 해당 페이지로 이동
  }
  else{
    alert('아이디 또는 비밀번호를 잘못 입력하셨습니다.');
  }
});

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}











