function progressBarDown(totalTime,operation,id){
	$("#"+id+"ProgressBar").css('width','400px');
	$("#"+id+"ProgressBar").show();
	document.getElementById(id+"ProgressBarStatus").style.visibility="visible";//make the progressbarStatus visible
	var countDown = totalTime;
	$("#"+id+"ProgressBar").animate({width:'0px'},totalTime*1000-1);
	var countDowner = setInterval(function(){
		countDown-=0.02;
		document.getElementById(id+"ProgressBarStatus").innerHTML = operation+"(" + countDown.toFixed(2) + ")";
	},20);
	setTimeout(function(){
		clearInterval(countDowner);
		$("#"+id+"ProgressBar").hide();
		document.getElementById(id+"ProgressBarStatus").style.visibility="hidden";//hides the progressbarstatus
	},totalTime*1000);
}
function createProgressbar(name){
	return $("<div class='progress' id='"+name+"Progress'><div class='progressBar' id='"+name+"ProgressBar'></div><p class='progressbarStatus' id='"+name+"ProgressBarStatus'></p></div>");
}