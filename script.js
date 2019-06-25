window.onload = function() {
  console.log('hello');
};

var todo = {
  addToList: function() {
    var listitemvalue = document.querySelector('#list-item');
    var btn = document.querySelector('.add-item');
    btn.addEventListener('click', function() {
      var listitem = document.createElement('li');
      listitem.className = 'item';

      document.getElementsByClassName('list')[0].appendChild(listitem);
      listitem.innerHTML = listitemvalue.value;

      var listitems = document.querySelectorAll('.item');
      //convert nodeList to array
      var listitemsarr = Array.from(listitems);
      listitemsarr.push(listitem);
      console.log(listitemsarr);

      listitemsarr.forEach(function(element) {
        element.addEventListener('click', function() {
          console.log(element);
          this.classList.add('complete');
        });
      });
    });
  },
  reset: function() {
    var resetbtn = document.getElementsByClassName('reset-button')[0];
    resetbtn.addEventListener('click', function() {
      var listitems = document.querySelectorAll('.list li');
      for (let i = 0; i < listitems.length; i++) {
        listitems[i].innerHTML = '';
      }
    });
  }
};

todo.addToList();
todo.reset();
