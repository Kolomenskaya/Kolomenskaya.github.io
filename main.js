var out = '';

//Вывод карточек животных на страницу

for (var key in pets) {
     out +='<div class="pet '+pets[key].type+'" art="'+key+'">';
     out +='<img src="'+pets[key].image+'">';
     out +='<div class="pet-description">';
     out +='<h2>'+pets[key].name+'</h2>';
     out +='<p>'+pets[key].description+'</p>'+'</div>'+'</div>';
}

document.getElementById('out').innerHTML = out;

var dog = document.getElementsByClassName('dog');
var cat = document.getElementsByClassName('cat');
var pet = document.querySelectorAll('.pet');
var openModal = document.getElementById('openModal');


//Показываем только 6 зверей

for (i=0; i<6; i++){
          pet[i].style.display="block";
      };


//Показать всех остальных

var more = document.getElementById('more');

function showAll(){
     for (i=0; i<dog.length; i++){
         dog[i].style.display="block";
     }
     for (i=0; i<cat.length; i++){
          cat[i].style.display="block";
     }
     more.style.display="none";
};

//Фильтр : только собаки

function showDogs(){
      for (i=0; i<cat.length; i++){
          cat[i].style.display="none";
      }

      for (i=0; i<dog.length; i++){
          dog[i].style.display="block";
      }
};

//Фильтр : только кошки

function showCats(){
      for (i=0; i<dog.length; i++){
          dog[i].style.display="none";
      }
      for (i=0; i<cat.length; i++){
          cat[i].style.display="block";
      }
};


//Модальное окно


for (i=0; i<pet.length; i++){
         pet[i].onclick=function(){
         var wow = this.getAttribute('art');

         openModal.style.display="block";
         var modal = '';
         modal ='<img src="'+pets[wow].image+'">';
         modal +='<div class="modal-des"> <h2>'+pets[wow].name+', '+pets[wow].age+'</h2>';
         modal +='<p>'+pets[wow].description+'</p>';
         modal +='<button class="modalbutton">Забрать домой</button>'+'</div>';
         document.getElementById('modal').innerHTML = modal;
     };

};

//Закрыть модальное окно

var close = document.getElementById('close');

close.onclick = function() {
     openModal.style.display="none";
};