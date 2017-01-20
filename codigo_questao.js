javascript:(function(){

/* Get all codes */
var questionCod = document.querySelectorAll('.codigo-questao > a');
var str = "";
for (var value of questionCod.values()){   
    str += value.text.replace(/ \/.+/,'');
    str +=  " : makeSolution('XX', 'banco'),\n";
}
prompt('copy',str);

})();