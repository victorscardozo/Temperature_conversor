function convertTemp(direction)
{
 //instanciando objetos
var fObj = document.convert.ftemp, cObj = document.convert.ctemp, kObj = document.convert.ktemp;

//definindo direções para conversões
if (direction == "ftoc") 
{
    cObj.value = Math.round((fObj.value - 32) * (5/9));
	kObj.value = Math.round((parseInt(cObj.value) + 459.67) * (5/9));
} 
else if (direction == "ktof") 
 {
	fObj.value = Math.round((parseInt(cObj.value) * (9/5)) -  459.67);
	cObj.value = Math.round((fObj.value - 32) * (5/9));
	
 }
else
 {
	fObj.value = Math.round((parseInt(cObj.value) * (9/5)) + 32);
	kObj.value = Math.round((parseInt(cObj.value) + 273));
 }
}

function clearAll()
{
document.convert.ftemp.value="";
document.convert.ctemp.value="";
document.convert.ktemp.value="";
}

