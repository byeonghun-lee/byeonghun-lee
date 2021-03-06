/*! helper.js © yamoo9.net, 2017 */

/**
 *  querySelector 헬퍼 함수
 *  @param    {String}      selector_str
 *  @return   {HTMLElement} 문서 요소노드 반환
 */
function query(selector_str, context) {
  var parent = null;
  if (context !== undefined){
    parent = context;
  }else{
    parent= document;
  }
  return parent.querySelector(selector_str);
}
/**
 *  querySelectorAll 헬퍼 함수
 *  @param    {String}   selector_str
 *  @return   {Nodelist} 문서 요소노드 집합 반환
 */
function queryAll(selector_str, context) {
  var parent = null;
  if (context !== undefined){
    parent = context;
  }else{
    parent= document;
  }
  return parent.querySelectorAll(selector_str);
}

/**
 *  부모 노드 내부에 마지막 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement}  parent_node 부모노드
 *  @param    {HTMLElement}  child_node  자식노드
 */
function append(parent_node, child_node) {
  parent_node.appendChild(child_node);
  // return child_node;
  return parent;
}
/**
 *  부모 노드 내부에 첫번째 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement}  parent_node 부모노드
 *  @param    {HTMLElement}  child_node  자식노드
 */
function prepend(parent_node, child_node) {
  var first = parent_node.children[0];
  parent_node.insertBefore(child_node, first);
  return child_node;
}

/**
 *  insertNode를 targetNode 앞에 삽입하는 헬퍼 함수 (형제로서 삽입)
 *  @param    {HTMLElement}  insert_node 삽입 요소 노드
 *  @param    {HTMLElement}  target_node 목표 요소 노드
 *  @return   {HTMLElement}  삽입 요소 노드를 반환
 */
function before(insert_node, target_node) {
  target_node.parentNode.insertBefore(insert_node, target_node);
  return insert_node;
}
/**
 *  insertNode를 targetNode 뒤에 삽입하는 헬퍼 함수 (형제로서 삽입)
 *  @param    {HTMLElement}  target_node 목표 요소 노드
 *  @param    {HTMLElement}  insert_node 삽입 요소 노드
 *  @return   {HTMLElement}  삽입 요소 노드를 반환
 */
function after(target_node, insert_node) {
  var next = target_node.nextElementSibling;
  // 조건 1. target_node 뒤에 형제 노드가 없다면?
  if ( next === null ) {
    append(target_node.parentNode, insert_node);
  }
  // 조건 2. target_node 뒤에 형제 노드가 있다면?
  else {
    before(insert_node, next);
  }
  return insert_node;
}
function remove(element_node){
  element_node.parentNode.removeChild(element_node);
  return element_node
}
function replace(replace_node, replaced_node){
  replaced_node.parentNode.replaceChild(replace_node, replaced_node);
  return replaced_node;
}
function change(replace_node, replaced_node){
  var target = replace_node.nextElementSibling;
  if (target !== null ){
    before(replaced_node, target);
  }else{
    target = replace_node.parentNode;
    append(target, replaced_node);
  }
}
function clone(){}
