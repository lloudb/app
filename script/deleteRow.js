// Удаляет строку по нажатию на кнопку с class="removeText"

$(document).ready(function() {
    var el = $('.removeText');
    el.click(function(e){
        let result = confirm ('Вы уверены?');
        if (result) {
            this.closest('tr').remove();
        }
    })
});
