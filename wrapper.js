javascript:(function(){

    var QuestoesRespondidas = {
        G131593: makeSolution('B', 'banco'),
        G130006: makeSolution('E', 'banco'),
        G130005: makeSolution('B', 'banco'),
        G130003: makeSolution('C', 'banco'), /* forma normal: estudar*/
        G129731: makeSolution('XX', 'banco'),
        G129730: makeSolution('D', 'banco'),
        G129729: makeSolution('E', 'banco'),
        G129728: makeSolution('B', 'banco'),
        G129727: makeSolution('A', 'banco'),
        G129726: makeSolution('A', 'banco'),

        G97577: makeSolution('B', 'oracle'),
        G97576: makeSolution('E', 'postgres'),
        G97518: makeSolution('D', 'postgres'),
        G84771: makeSolution('A', 'postgres'),
        G52415: makeSolution('A', 'postgres'),
        G52310: makeSolution('B', 'postgres'), /*estudar*/
        G49008: makeSolution('D', 'postgres'),
        G46902: makeSolution('C', 'postgres'),
        G46895: makeSolution('A', 'postgres'), /* aposto */
        G32267: makeSolution('E', 'oracle'),  /* ? */
        G29227: makeSolution('C', 'postgres'),
        G29226: makeSolution('A', 'postgres'),
        G29222: makeSolution('B', 'postgres'),
        G29220: makeSolution('E', 'postgres'), /* Questao exoterica de view*/
        G29073: makeSolution('C', 'postgres'),
        /* ITIL 2011 v3 */        
        G131577 : makeSolution('D', 'itil'),
        G131576 : makeSolution('C', 'itil'), /* */
        G129763 : makeSolution('B', 'itil'),
        G129764 : makeSolution('E', 'itil'),
        G129991 : makeSolution('A', 'itil'), /* */
        G52797 : makeSolution('A', 'itil'), /* RACI */
        G52809 : makeSolution('C', 'itil'),
        G52810 : makeSolution('D', 'itil'),
        G52831 : makeSolution('C', 'itil'), /* Donos de serviços */
        G52891 : makeSolution('B', 'itil'),
        G53146 : makeSolution('B', 'itil'),
        G63158 : makeSolution('C', 'itil'),
        /* PMBOK5 */
        G129990 : makeSolution('D', 'PMBOK5'),
        G129992 : makeSolution('C', 'PMBOK5'),
        G63160 : makeSolution('B', 'PMBOK5'), /**/
        G95909 : makeSolution('A', 'PMBOK5'),
        G95948 : makeSolution('B', 'PMBOK5'),
        G96874 : makeSolution('C', 'PMBOK5'),
        G97589 : makeSolution('B', 'PMBOK5'),
        G97590 : makeSolution('B', 'PMBOK5'),/**/
        G99224 : makeSolution('B', 'PMBOK5'), 
        G84719 : makeSolution('E', 'PMBOK5')


               
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

        $(hash_question_id).on('click', function(e){
            alert("Resposta: " + getSolucion(question_id));
        });
    }
}




var keys = Object.keys(QuestoesRespondidas);

keys.forEach((question_id) => {   
    replaceClickEvent( question_id);
});


 })();
