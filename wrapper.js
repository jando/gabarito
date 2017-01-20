javascript:(function(){

    var QuestoesRespondidas = {
        G131593: makeSolution('B', 'banco'),
        G130006: makeSolution('E', 'banco'),
        G130005: makeSolution('B', 'banco'),
        G130003: makeSolution('C', 'banco'),
        G129731: makeSolution('XX', 'banco'),
        G129730: makeSolution('D', 'banco'),
        G129729: makeSolution('E', 'banco'),
        G129728: makeSolution('B', 'banco'),
        G129727: makeSolution('A', 'banco'),
        G129726: makeSolution('A', 'banco'),

        G97577: makeSolution('XX', 'postgres'),
        G97576: makeSolution('B', 'oracle'),
        G97518: makeSolution('XX', 'postgres'),
        G84771: makeSolution('XX', 'postgres'),
        G52415: makeSolution('XX', 'postgres'),
        G52310: makeSolution('XX', 'postgres'),
        G49008: makeSolution('XX', 'postgres'),
        G46902: makeSolution('XX', 'postgres'),
        G46895: makeSolution('XX', 'postgres'),
        G32267: makeSolution('XX', 'postgres'),
        G29227: makeSolution('XX', 'postgres'),
        G29226: makeSolution('XX', 'postgres'),
        G29222: makeSolution('XX', 'postgres'),
        G29220: makeSolution('XX', 'postgres'),
        G29073: makeSolution('XX', 'postgres'),
               
};

function makeSolution(resposta, assunto){
    return {
       resposta: resposta, assunto:assunto
    };
}

function getSolucion(question_id){
    return QuestoesRespondidas[question_id].resposta;
}

function replaceClickEvent(question_id){
    var hash_question_id = '#' + question_id;

    if (QuestoesRespondidas[question_id].resposta != 'XX' ){
        $(hash_question_id).off('click');

        $( hash_question_id ).on('click', function(e){
            alert("Resposta: " + getSolucion(question_id));
        });
    }
}




var keys = Object.keys(QuestoesRespondidas);

keys.forEach((question_id) => {   
    replaceClickEvent( question_id);
});


 })();