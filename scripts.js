const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

  _items.addEventListener("click", (e)=> {
    check(e);
    deleteItem(e);
    edit(e);
   });

   _items.addEventListener("keydown", (e)=> {
    commit(e);
  });
  }

  function formHandler(e) {
    e.preventDefault();
    let val = document.querySelector(".form__input").value;
    if(val.trim() != ""){ 
    add(val);
  }
  document.querySelector(".form__input").value = "";
  }

  function check(e) {
    if(e.target.classList.contains("item__checkbox")){
       e.target.parentNode.classList.toggle("item--done");
   }
  }

  function edit(e) {
      if(e.target.classList.contains("item__text")){
        let text = e.target.innerHTML;
        let inp = el("input","item__edit",null,"text");
        inp.value = text;
        e.target.parentNode.replaceChild(inp, e.target);
        inp.focus();
        
    }
  }

  function commit(e) {
    let activeEl = document.activeElement;
    if(activeEl.classList.contains("item__edit") && e.keyCode === ENTER_KEYCODE){
      let text = activeEl.value;
      let span = el("span","item__text",null);
      span.innerHTML = text;
      activeEl.parentNode.replaceChild(span,activeEl);
    }
  }

  function add(value) {
      var list =  el("list","item",null);
      var checkb = el("input","item__checkbox",null,"checkbox");
      var span = el("span","item__text",null);
      var button = el("button","item__button",null);
      button.innerHTML = "Eyða";
      span.innerHTML = value;
    
      items.appendChild(list);
      li.appendChild(checkb);
      li.appendChild(span);
      li.appendChild(button);
       
  }

  function deleteItem(e) {
    if(e.target.classList.contains("item__button")){
      e.target.parentNode.remove();
    }
  }

  function el(type, className, clickHandler, input = null) {
    let elem  = document.createElement(type);
    elem.classList.add(className);
    if(input != null){
      elem.setAttribute("type",input)
    }
    return elem;
  }

  return {
    init: init
  }
})();
