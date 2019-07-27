
// Делает класс "сhecked" когда нажимаешь на список дел 
/*var list = document.querySelector('.content-day ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false); */


// setTimeout(function() {
//   span.parentNode.removeChild(span);
// }, 2000);

// Делает класс "сhecked" когда нажимаешь на список дел 

var list = document.querySelectorAll('.content-day ul')
for(let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function(event) {
    event.target.classList.toggle('checked');
  });
}

//Локал сторедж 


// Делает рабочичм кнопку Del
          //document.getElementById("del").onclick = function (){


 // Отображает крестик удаления
  var myNodelist = document.getElementsByTagName("LI");
  var i;
 for (i = 0; i < myNodelist.length; i++) {
   var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.className = "close";
     span.appendChild(txt);
     myNodelist[i].appendChild(span);
    //  setTimeout(function() {
    //   span.parentNode.removeChild(span);
    // }, 2000);
 } 

    // Удаляет таски
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        const _ = this;
        var div = _.parentElement;
        div.style.display = "none";
      }
    }

//Создание нового задания(таска)
function newElement1() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput1").value;
  var text = document.createTextNode(inputValue);
  const _ = this;
  li.appendChild(text);
  if (inputValue === '') {
    alert("Пол еввода не должно быть пустым!");
  } else {
    document.getElementById("myUL1").appendChild(li);
  }
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
// Удаление у новых тасков
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  document.getElementById("myInput1").value = "";
}


function newElement2() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput2").value;
  var text = document.createTextNode(inputValue);
  const _ = this;
  li.appendChild(text);
  if (inputValue === '') {
    alert("Пол еввода не должно быть пустым!");
  } else {
    document.getElementById("myUL2").appendChild(li);
  }
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
   document.getElementById("myInput2").value = "";
}

function newElement3() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput3").value;
  var text = document.createTextNode(inputValue);
  const _ = this;
  li.appendChild(text);
  if (inputValue === '') {
    alert("Пол еввода не должно быть пустым!");
  } else {
    document.getElementById("myUL3").appendChild(li);
  }
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  localStorage.setItem('todo', "myUL");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
   document.getElementById("myInput3").value = "";
}

function newElement4() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput4").value;
  var text = document.createTextNode(inputValue);
  const _ = this;
  li.appendChild(text);
  if (inputValue === '') {
    alert("Пол еввода не должно быть пустым!");
  } else {
    document.getElementById("myUL4").appendChild(li);
  }
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  localStorage.setItem('todo', "myUL");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  document.getElementById("myInput4").value = "";
}

function newElement5() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput5").value;
  var text = document.createTextNode(inputValue);
  const _ = this;
  li.appendChild(text);
  if (inputValue === '') {
    alert("Пол еввода не должно быть пустым!");
  } else {
    document.getElementById("myUL5").appendChild(li);
  }
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  localStorage.setItem('todo', "myUL");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  document.getElementById("myInput5").value = "";
}

function newElement6() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput6").value;
  var text = document.createTextNode(inputValue);
  const _ = this;
  li.appendChild(text);
  if (inputValue === '') {
    alert("Пол еввода не должно быть пустым!");
  } else {
    document.getElementById("myUL6").appendChild(li);
  }
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  localStorage.setItem('todo', "myUL");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  document.getElementById("myInput6").value = "";
}

function newElement7() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput7").value;
  var text = document.createTextNode(inputValue);
  const _ = this;
  li.appendChild(text);
  if (inputValue === '') {
    alert("Пол еввода не должно быть пустым!");
  } else {
    document.getElementById("myUL7").appendChild(li);
  }  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  localStorage.setItem('todo7', "myInput");
 
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  document.getElementById("myInput7").value = "";
}