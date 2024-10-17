function makePage(){
	let domande=getDomande();
	let body=document.getElementById("body");
	let i;
	for(i=0;i<domande.length;i++){
		let toAdd="<div class=\"intervistatore\">\n <div class=\"intervistatore interno\">\n<p id=\"domanda"+i+"\" class=\"intervistatore\">"+domande[i].Q+"</p>\n</div>\n</div>\n";
		toAdd+= "<div class=\"intervistato\">\n <div class=\"intervistato interno\">\n<p id=\"risposta"+i+"\" class=\"intervistato\">"+domande[i].A+"</p>\n</div>\n</div>\n";
		let text=body.innerHTML;
		body.innerHTML=text+toAdd;
	}
	for(i=0;i<domande.length;i++){
		document.getElementById("domanda"+i).style="max-width:"+(document.getElementById("domanda"+i).innerHTML.length*0.85)+"ch;";
		document.getElementById("risposta"+i).style="max-width:"+(document.getElementById("risposta"+i).innerHTML.length*0.85)+"ch;";
	}
}
