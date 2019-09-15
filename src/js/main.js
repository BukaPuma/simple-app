import $ from 'jquery';

$(document).ready(() => {
    
    //Вывод текста в заданной позиции
    const searchText = $('ul li div div:nth-child(5) button:nth-child(2)').text();
    alert(searchText);

    //вывод текста по нажатию заданной кнопки
    const searchButton = $('ul li div div:nth-child(5) button:nth-child(2)');
        searchButton.click(function() {
        alert(searchText);
    } )


    

    //$('ul li div div:nth-child(5) button:nth-child(2)').text('Finded');



})