// Осуществляет поиск по таблице.
// Данные в #SearchInput
// Кнопка #searchButton

//если веб-страницы загружена
$(document).ready(function() {
    //нажата кнопка с id="findTable"
    $("#searchButton").click(function(){
        //сохраняем в переменную текст, который нам необходимо найти в таблице
        //из id="searchText"
        var search = $('#searchInput').val().toLowerCase();
        //перебираем всем строки таблицы
        $("table tbody tr").each(function (i) {
            //если не нахоим искомый текст
            if ($(this).text().toLowerCase().replace(/\s+/g, '').indexOf(search)==-1)
                $(this).hide();
            else
                $(this).show();
        });
    });
});