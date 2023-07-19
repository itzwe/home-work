
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/


const nav = getNode('.nav');
const list = getNodes('.nav li');
const visualImage = getNode('.visual img');
const h1 = getNode('.nickName');

function setBgColor(node,index){ //배경색 지정 함수
  if(typeof node === 'string'){
    node = getNode(node);
  }
  color = data[index-1].color[0];
  return node.style.background =`linear-gradient(to bottom, ${color} ,#000)`
}
function setImage(){

}
function setNameText(){

}
function handler(e){

  const target = e.target;
  const li = target.closest('li'); //ul img 누를 시 li 선택

  if(!li) return ; // li에 마우스가 올라가 있지 않으면 어느 요소도 click x
  
  list.forEach((item)=>{  // 모든 li 클래스 이미지 제거
    item.classList.remove('is-active');
  })
  li.classList.add('is-active'); // 마우스 click 된 li 에 클래스 추가
  
  const indexNumber = li.dataset.index; //data-index 값
  
  setBgColor('body',indexNumber);
  visualImage.setAttribute('src', `./assets/${data[indexNumber-1].name.toLowerCase()}.jpeg`)
  h1.textContent = data[indexNumber-1].name;
}




nav.addEventListener('click', handler);
