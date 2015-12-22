// what is DOM


// Node object


// A NodeList object


// Selectors
/* getElementById
 * getElementsByName
 * getElementsByClassName
 * querySelectorAll
 */



// Listeners
/* general event listeners
 * 
 * DOMContentLoaded
 * 
 * click
 * mousedown
 * mouseup
 * mouseover
 * mouseout
 * 
 * keyup
 * keydown
 * 
 * 
 * focus
 * blur
 * 
 * 
 */

// тук добавяме на обекта  "document" събитие "DOMContentLoaded" което да изчаква документа да бъде зареден и да изпълни определена фунцкия
document.addEventListener("DOMContentLoaded", function(event) { 
	
	
	// извикваме функцията getElementByID, която ни връща елемента принадлежащ на документа и имащ ID=redDiv
	myRedDiv = document.getElementById('redDiv');
	
	
	// извикваме функцията getElementByID, която ни връща елемента принадлежащ на документа и имащ ID=colorChanger
	// добавяме на намереният елемент събитие слушащо за On Mouse Over и го караме да изпълни функцията makeItRed
	document.getElementById('colorChanger').addEventListener("mouseout",makeItRed);
	// извикваме функцията getElementByID, която ни връща елемента принадлежащ на документа и имащ ID=colorChanger
	// добавяме на намереният елемент събитие слушащо за On click и го караме да изпълни функцията sad
	document.getElementById('colorChanger').addEventListener("click",sad);
	
	// извикваме функцията getElementByID, която ни връща елемента принадлежащ на документа и имащ ID=colorChanger
	// добавяме на намереният елемент събитие слушащо за On Mouse Down и го караме да изпълни локална неименована функция показваща "Goodbye Cruel World"
	document.getElementById('colorChanger').addEventListener("mousedown",function(){
		alert('Goodbye Cruel World!');
	});
	// извикваме функцията getElementByID, която ни връща елемента принадлежащ на документа и имащ ID=colorChanger
	// добавяме на намереният елемент събитие слушащо за On Mouse Up и го караме да изпълни локална неименована функция показваща "We need a Batman here!"
	document.getElementById('colorChanger').addEventListener("mouseup",function(){
		alert('We need a Batman here!');
	});
	
	//на намерения по-горе червен DIV добавяме събитие слушащо за On Mouse Over и го караме да изпълни локална неименована функция 
	myRedDiv.addEventListener("mouseover",function(){
		// извикваме променливата 'style' на елемента с който работим в момента (this) и задаваме Background Color = "#0f0"; 
		this.style.backgroundColor= "#0F0";
	});
	//на намерения по-горе червен DIV добавяме събитие слушащо за On Mouse Out и го караме да изпълни локална неименована функция 
	myRedDiv.addEventListener("mouseout",function(){
		
		// извикваме променливата 'style' на елемента myRedDiv и задаваме Background Color = "#0f0"; 
		myRedDiv.style.backgroundColor= "#00F";
	});
	
	// извикваме функцията getElementByID, която ни връща елемента принадлежащ на документа и имащ ID=testInput
	//на намерения по-горе testInput добавяме събитие слушащо за On Key Up и го караме да изпълни локална неименована функция 
	document.getElementById('testInput').addEventListener("keyup",function(){
	});
	
	// извикваме функцията getElementByID, която ни връща елемента принадлежащ на документа и имащ ID=testInput
	//на намерения по-горе testInput добавяме събитие слушащо за On Key Down и го караме да изпълни локална неименована функция 
	document.getElementById('testInput').addEventListener("keydown",function(){
	});
	// извикваме функцията getElementByID, която ни връща елемента принадлежащ на документа и имащ ID=testInput
	//на намерения по-горе testInput добавяме събитие слушащо за On Input Focus и го караме да изпълни функцията onInputFocus
	document.getElementById('testInput').addEventListener("focus",onInputFocus);
	
	// извикваме функцията getElementByID, която ни връща елемента принадлежащ на документа и имащ ID=testInput
	//на намерения по-горе testInput добавяме събитие слушащо за On Key Up и го караме да изпълни функцията onInputBlur
	document.getElementById('testInput').addEventListener("blur",onInputBlur);
	
});


function onInputFocus(){
	//alert(document.getElementById('redDiv').innerHTML)
	//document.getElementById('testInput').blur();
}

function onInputBlur(){
	
	alert(document.getElementById('testInput').value);
	alert(parseInt(document.getElementById('testInput').value))
	
	document.getElementById('redDiv').style.backgroundColor= "#F00";
	document.getElementById('testInput').removeEventListener("focus",onInputFocus);
	
}


function sad(){ 
	
	// изпълняваме функцията querySelectorAll намираща всички .coolDivs които са DIV-ове и се намират в body tag.
	// записваме списъка с елементи в променливата elements
	var elements = document.querySelectorAll('body div.coolDivs');
	
	// извъртаме елементите един по един използвайки FOR - цикъл
	// Условия : i=0 (започваме от i=0), 
	//           i<elements.length (въртим цикъла докато i е по-малко от максималната бройка на елемнтите)
	//           i++ (увеличаваме i с 1 при всяко минаване през цикъла)
	for(i=0; i<elements.length; i++)
		{
			// задаваме цвета на елемента на който се намираме в момента (0,1,2 ...)
			elements[i].style.backgroundColor= "#0F0";
		}
	
}


function makeItRed(){ 
	/*
	document.getElementById('redDiv').style.backgroundColor= "#F00";
	document.getElementById('redDiv').style.width= "200px";
	document.getElementById('redDiv').style.marginLeft= "30px";*/
	
}




/* Задача: 
 * 
 * create 3 divs.
 * create an input in each div
 * style the divs in different colors
 * use querySelectorAll to add an event to all inputs (blur/focus ...)
 * use some selector to find the div containing this input and change its color.
 * research possibility to get parent element with Javascript
 * 
 * 
 * 
 * 
 */


