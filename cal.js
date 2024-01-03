  let currentValue = 0;
  let operator = '';
  let result = 0;


function buttonclick(val){
    console.log(val)
     document.getElementById("show1").value+=val
}
function cleardisplay(){
    document.getElementById("show").value=""
    document.getElementById("show1").value=""
}
function equalclick(){
    var text=document.getElementById("show1").value
    var result=eval(text)
    document.getElementById("show").value=result
}
function clearLastDigit() {
    var display = document.getElementById('show1');
    show1.value = display.value.slice(0, -1);
}
function calculatePercentage() {
   let currentValue = parseFloat(document.getElementById('show1').value)
    currentValue = (currentValue / 100);
    document.getElementById('show').value = currentValue;
  }
