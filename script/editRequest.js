$(document).ready(function(){
    let el = $('.editText');
    el.click (function(e){
       let tr = this.closest('tr');
       $.cookie('id',tr.children[1].innerText);
       window.open('newrequest.html');
    });
});