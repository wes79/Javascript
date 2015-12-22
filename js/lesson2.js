
//Math.random() // функция даваща произволно число от 0 до 1;
//Math.floor() // функция вземаща основата на дробно число 231.63 ще бъде взето като 231

document.addEventListener("DOMContentLoaded", function(event) { 

	document.getElementById('draw').addEventListener("click",iztegli);
	document.getElementById('clear').addEventListener("click",clear);
	
	function clear(){
		 location.reload();
	}

	
	var iztegleni = Array();
	
	function iztegli(){
		while(iztegleni.length<6)
		{
			var iztegleno = Math.floor(Math.random()*48) + 1;
			
			if(iztegleni.indexOf(iztegleno) == -1)
			{
				iztegleni.push(iztegleno)
			}
			setTimeout(function()
				{ 	
					document.getElementById("numberContainer").innerHTML = iztegleni
					document.getElementById("numberContainer").style.display="block";
				}, 1000);
		
			
		}	
		 
	}
}


)