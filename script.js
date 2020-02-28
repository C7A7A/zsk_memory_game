var fields = document.getElementsByClassName('field');
var img_arr = new Array(16);
var revealed = 0;
var new_game_btn = document.querySelector('.new_game');
var forbidden = false;
var points = document.querySelector('.points');
var notification = document.querySelector('.notification');

new_game_btn.addEventListener('click', new_game);

function new_game(){
    for(var i = 0; i < fields.length; i++){
        insert_arr();
        fields[i].querySelector('img').src = "img/cover.jpg";
        fields[i].classList.remove('hide');
        points.innerHTML = 0;
    }

    notification.innerHTML = '';
    forbidden = false;
}

function addEventList(){
    for(var i = 0; i < fields.length; i++){
        var field = fields[i];
        field.addEventListener('click', action);
    }
}

addEventList();

function action(){
    if(forbidden != true && !this.classList.contains('revealed')){
        var id = this.querySelector('img');
        id.src = img_arr[id.dataset.id];
        this.classList.add('revealed');
        revealed++;

        console.log(forbidden);
        console.log(revealed);

        if(revealed % 2 == 0){
            forbidden = true;
            setTimeout(check, 750);
        }
    }
}

function check(){
    var fields_rev = document.getElementsByClassName('revealed');
    var field_0 = fields_rev[0];
    var field_1 = fields_rev[1];

    //Jeśli różne
    if(field_0.querySelector('img').src != field_1.querySelector('img').src){
        field_0.querySelector('img').src = "img/cover.jpg";
        field_1.querySelector('img').src = "img/cover.jpg";
    }
    //Jeśli takie same
    else if(field_0.querySelector('img').src == field_1.querySelector('img').src){
        field_0.classList.add('hide');
        field_1.classList.add('hide');
        points.innerHTML++;
    }

    field_0.classList.remove('revealed');
    field_1.classList.remove('revealed');

    win_condition();
}

function win_condition(){
    forbidden = false;
    var fields_hide = document.getElementsByClassName('hide');

    if(fields_hide.length == 16){
        notification.innerHTML = 'Gratulacje, udało Ci się! Kliknij Nowa Gra żeby spróbować jeszcze raz';
    }
}

function insert_arr(){
   img_arr[0] = "img/Giant.png";
   img_arr[1] = "img/Grommash.png";
   img_arr[2] = "img/Rexar.png";
   img_arr[3] = "img/Varian.png";
   img_arr[4] = "img/Xaril.png";
   img_arr[5] = "img/Knight.png";
   img_arr[6] = "img/DrBoom.png";
   img_arr[7] = "img/Archmage.png";
   img_arr[8] = "img/Giant.png";
   img_arr[9] = "img/Grommash.png";
   img_arr[10] = "img/Rexar.png";
   img_arr[11] = "img/Varian.png";
   img_arr[12] = "img/Xaril.png";
   img_arr[13] = "img/Knight.png";
   img_arr[14] = "img/DrBoom.png";
   img_arr[15] = "img/Archmage.png";
    
   img_arr.sort(function(){
       return 0.5 - Math.random()
   });
}

insert_arr();


