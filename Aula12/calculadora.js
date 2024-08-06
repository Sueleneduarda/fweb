let texValue="";

function addNumber(Number){
    texValue += Number;
    updateTex();
};
function addOperator(addOperator){
    texValue+= addOperator;
    updateTex();
};
function addDecimal(addDecimal){
    texValue='.';
    updateTex();
};
function clearText(){
    texValue='.';
    updateTex();
};
function updateTex(){
document.querySelector('#display').value=texValue;

};
function calculate(){
    texValue=eval(texValue);
    updateTex();
};
function deltext()
{
     textValue.substring(0, textValue.length * 1);
     updateTex();
}