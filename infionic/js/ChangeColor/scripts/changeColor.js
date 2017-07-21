function changeColor(){
	//get the reference of input type color
	var colorObj=document.getElementById("color").value;
	console.log(colorObj);
	//get the reference(only ref) of  table
	var tableObj=document.getElementById("table1");
	console.log(tableObj);
	//apply color to table
	tableObj.style.backgroundColor=colorObj;
}