function getNode(node){
  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인자는 문자 타입 이어야 합니다.');
  }

  return document.querySelector(node);
}

function getNodes(nodes){
  if(typeof nodes !== 'string'){
    throw new Error('getNodes 함수의 인자는 문자 타입 이어야 합니다.');
  }

  return document.querySelectorAll(nodes);
}