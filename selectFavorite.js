(function(window) {
    'use strict';

    var wrapper = document.getElementById('selectFavorite');
    var selectFavorite = wrapper.querySelector('select');
    var btnFavortie = document.getElementsByClassName('btn-favorite');
    var selectValues;

    selectFavorite.addEventListener('change', function(event) {
        selectValues = event.target.options[selectFavorite.selectedIndex].value;
        btnFavortie[0].classList.remove('choose');
    });

    btnFavortie[0].addEventListener('click', function(event) {
        var _target = event.target;

        if(selectValues !== undefined) {
            if(_target.classList.toggle('choose') === true) {
                _target.classList.toggle('choose', true);
                getValues();
            } else {
                _target.classList.toggle('choose', false);
            };
        } else {
            alert('셀렉트 상자를 선택해주세요');
        };
    });

    function getValues() {
        var currentValues = selectValues;
        console.log(currentValues);
        return currentValues;
    };

    
    /*
    var selectFavorite = {
        init: function() {
            selectFavorite.selectChange();
        },
        selectChange: function() {
            var wrapper = document.getElementById('selectFavorite');
            var select = wrapper.querySelector('select');

            select.addEventListener('change', function(event) {
                var selectValues = event.target.options[select.selectedIndex].value;
                var btnFavortie = document.getElementsByClassName('btn-favorite');
                btnFavortie[0].classList.remove('choose');
                return selectFavorite.btnFavortie(selectValues);
            });
        },
        btnFavortie: function(selectValues) {
            var btnFavortie = document.getElementsByClassName('btn-favorite');
            btnFavortie[0].addEventListener('click', function() {
                var _target = event.target;

                if(selectValues !== undefined) {
                    if(_target.classList.toggle('choose') === true) {
                        _target.classList.toggle('choose', true);
                        selectFavorite.getValues(selectValues);
                    } else {
                        _target.classList.toggle('choose', false);
                    };  
                } else {
                    console.log('undefined 입니다.');
                };

                return false;
            });
        },
        getValues: function(selectValues) {
            var currentValues = selectValues;
            // console.log(currentValues);
            return currentValues;
        }
    };

    selectFavorite.init();
    */
})(window);
