
// Делает класс "сhecked" когда нажимаешь на список дел 
var list = document.querySelector('.content-day ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);
// дни недели

//Локал сторедж 

// Делает рабочичм кнопку Del
document.getElementById("del").onclick = function (){
  // Отображает крестик удаления
var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var  text = document.createTextNode("X");
  span.className = "close";
  span.appendChild(text);
  myNodelist[i].appendChild(span);
}

  // Делает рабочим удаление
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const _ = this;
      var div = _.parentElement;
      div.style.display = "none";
    }
  }
}
//Создание нового задания(таска)
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var text = document.createTextNode(inputValue);
  const _ = this;
  li.appendChild(text);
  if (inputValue === '' && inputValue === '7') {
    alert("Пол еввода не должно быть пустым!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  localStorage.setItem('todo', "myUL");
  //span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

