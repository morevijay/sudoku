var boxes = [];

$(document).ready(function(){
//var rflag,cflag;
function checkbx(i,j,k,l,n){
	//debugger;
	var bflag = 0; ////debugger;
	for(k = 0; k < 3; k++)
	{
		for(l = 0; l < 3; l++)
		{
		var clsname = "box"+i+j+" cellcol"+k+" "+"cellrow"+l;
		if(document.getElementsByClassName(clsname)[0].innerHTML == 'X' || document.getElementsByClassName(clsname)[0].innerHTML != n)
		{
			bflag = bflag + bflag;
		}
		else { bflag = bflag + 1; }
		}
	}
	return bflag;	
}	
function checkrow(i,j,k,l,n){
	//debugger;
	var rflag = 0; ////debugger;
	for(i = 0; i < 3; i++)
	{
		for(l = 0; l < 3; l++)
		{
		var clsname = "box"+i+j+" cellcol"+k+" "+"cellrow"+l;
		if(document.getElementsByClassName(clsname)[0].innerHTML == 'X' || document.getElementsByClassName(clsname)[0].innerHTML != n)
		{
			rflag = rflag + rflag;
		}
		else { rflag = rflag + 1; }
		}
	}
	return rflag;	
}	
function checkcol(i,j,k,l,n){
	//debugger;
	var cflag = 0;
	for(j = 0; j < 3; j++)
	{
		for(k = 0; k < 3; k++)
		{		
		var clsname = "box"+i+j+" cellcol"+k+" "+"cellrow"+l;
		if(document.getElementsByClassName(clsname)[0].innerHTML == 'X' || document.getElementsByClassName(clsname)[0].innerHTML != n)
		{
			cflag = cflag + cflag;
		}
		else { cflag = cflag + 1; }
		}		
	}
	return cflag;	
}	
function fillbox(i,j,n){
	//debugger;
	for (var k = 0; k < 3; k++) {
		for (var l = 0; l < 3; l++) {
			var clsname = "box"+i+j+" cellcol"+k+" "+"cellrow"+l;
			if(document.getElementsByClassName(clsname)[0].innerHTML == 'X')
			{		
				var cr = checkrow(i,j,k,l,n);
				var cc = checkcol(i,j,k,l,n);	
				var cb = checkbx(i,j,k,l,n);	
				if(cr == 0 && cc == 0 && cb == 0)
				{
					var clsname = "box"+i+j+" cellcol"+k+" "+"cellrow"+l;
					console.log(clsname);
					document.getElementsByClassName(clsname)[0].innerHTML = n;
					return true;
				}	
			}
		}
	}
}	
function init(){
	var board = document.createElement('table');
	board.setAttribute('border', 1);
	board.setAttribute('cellspacing', 0);
	for (var i = 0; i < 3; i++) {
		var row = document.createElement('tr');
		board.appendChild(row);
		for (var j = 0; j < 3; j++) {
			var cell = document.createElement('td');
			cell.setAttribute('height', 120);
			cell.setAttribute('width', 120);
			cell.setAttribute('align', 'center');
			cell.setAttribute('valign', 'center');
			cell.classList.add('col' + j, 'row' + i);
			var board1 = document.createElement('table');
			board1.setAttribute('border', 1);
			board1.setAttribute('cellspacing', 0);			
			for (var k = 0; k < 3; k++) {
				var row1 = document.createElement('tr');
				board1.appendChild(row1);
				for (var l = 0; l < 3; l++) {
					var cell1 = document.createElement('td');	
					cell1.setAttribute('height', 40);
					cell1.setAttribute('width', 40);
					cell1.setAttribute('align', 'center');
					cell1.setAttribute('valign', 'center');
					cell1.classList.add('box' + i+j,'cellcol' + l, 'cellrow' + k);
					row1.appendChild(cell1);
					boxes.push(cell1);					
				}
				cell.appendChild(board1);
			}
			row.appendChild(cell);	
		}
	} 	
	document.getElementById('sudoku').appendChild(board);
	boxes.forEach(function (square) {
		square.innerHTML = 'X';
	});
	for(var a = 0; a < 10; a++)
	{

/* 		var index = myArray.indexOf(rand);	
		if (index > -1) {
			  myArray.splice(index, 1);
		} */ 
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				var myArray = [1,2,3,4,5,6,7,8,9];
				var rand = myArray[Math.floor(Math.random() * myArray.length)];				
				var temp = fillbox(i, j, rand);
				console.log("done");	
			}
		}
	}

  	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			for (var k = 0; k < 3; k++) {
				for (var l = 0; l < 3; l++) {
					var clsname = "box"+i+j+" cellcol"+k+" "+"cellrow"+l;
					if(document.getElementsByClassName(clsname)[0].innerHTML == 'X')
					{
						var myArray = [1,2,3,4,5,6,7,8,9];
						var rand = myArray[Math.floor(Math.random() * myArray.length)];
						var index = myArray.indexOf(rand);	
						if (index > -1) {
						  myArray.splice(index, 1);
						  var temp = fillbox(i, j, rand);
						} 						
					}
				}
			}
		}
	}	  
	
	
}

init();
});