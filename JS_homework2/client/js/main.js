
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const body = document.body;
const nav = document.querySelector('.nav');
const list = document.querySelectorAll('.nav li');
const visualImage = document.querySelector('.visual img');
const h1 = document.querySelector('.nickName');

function handler(e){

  const target = e.target;
  const li = target.closest('li');

  if(!li) return ;

  console.log(li);
  list.forEach((item)=>{
    item.classList.remove('is-active');
  })

  li.classList.add('is-active');

  const indexNumber = li.dataset.index;
  console.log(indexNumber);
  const dataColor = data[indexNumber-1].color[0];
  console.log(dataColor);
  body.style.background = `linear-gradient(to bottom, ${dataColor}, #000)`
  console.log(target.src);
  visualImage.setAttribute('src', `./assets/${data[indexNumber-1].name.toLowerCase()}.jpeg`)
  h1.textContent = data[indexNumber-1].name;
}




nav.addEventListener('click', handler);
