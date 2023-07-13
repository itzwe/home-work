
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

inputId.addEventListener('input', function(){
  if(emailReg(inputId.value)){
    inputId.classList.remove('is--invalid')
  }else if(inputId.value === ''){
    inputId.classList.remove('is--invalid');
  }else{
    inputId.classList.add('is--invalid')
  }
})

inputPw.addEventListener('input', function(){
  if(pwReg(inputPw.value)){
    inputPw.classList.remove('is--invalid')
  }else if(inputPw.value === ''){
    inputPw.classList.remove('is--invalid');
  }else{
    inputPw.classList.add('is--invalid')
  }
})

loginBtn.addEventListener('click', function(event){
  
  if(emailReg(inputId.value)&&pwReg(inputPw.value)){
    window.location.href = 'welcome.html'
  }else{
    event.preventDefault();
    alert('아이디와 비밀번호를 다시 입력하세요')
  };

})

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}











