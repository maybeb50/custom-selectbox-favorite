(function(window) {
    'use strict';
    
    var wrapper = document.getElementById('selectFavorite');
    var selectFavorite = wrapper.querySelector('select');
    var btnFavortie = document.getElementsByClassName('btn-favorite');
    var selectValues;

    selectFavorite.addEventListener('change', function(event) {
        selectValues = event.target.value;
    });

    console.log(btnFavortie);

    btnFavortie[0].addEventListener('click', function(event) {
        var _this = event.target;   
        console.log(selectValues);

        if(_this.classList.contains === 'choose') {
            _this.classList.remove('choose');
        } else {
            _this.classList.add('choose');
        };
    })



})(window);
