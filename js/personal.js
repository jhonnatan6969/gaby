function valid() {
	var par
	par = document.getElementById('par').value;
	if (par == 'otro') {
	
	document.getElementById('par2').style.display='block';
	}else{
	document.getElementById('par').style.display='block';
	document.getElementById('par2').style.display='none';	
	}

}

function bachi(){
	var bach = document.getElementById('bachop').value;
		if (bach== 'gen') {
			document.getElementById('e1').style.display="block";
			document.getElementById('e2').style.display="none";
		}else if(bach== 'tec'){
		document.getElementById('e2').style.display="block";
		document.getElementById('e1').style.display="none";	
			
	}
}

