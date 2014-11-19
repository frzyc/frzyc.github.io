function graphics(level){
	if(!level)
		computer.graphics=level;
	if(level==0){
		$("#mainCode").fadeOut("fast",function(){
			graphic0();
		}).fadeIn("slow");
	}if(level==1){
		$(".terminalWindow").fadeOut("fast",function(){
			graphic1();
		}).fadeIn("slow");
	}else if(level==2){
		
	}
}
function graphic0(){
	$("#mainCode").addClass("terminalWindow");
	$("#mainTitle").addClass("taskBar");
	$("#printCode").addClass("taskBarTitle");
	$("#mainTerm").addClass("terminal");
	$(".status").css("border-bottom","1px solid black");
	$(".progress").css({"border":"1px solid grey"});
}
function graphic1(){
	$(".terminalWindow").css({
		"border-radius":"5px",
		"border-style":"double",
		"border-color":"black"
	});
	$(".progress").css({
		"border":"2px solid grey",
		"border-radius":"5px"
	});
	$(".progressBar").css({
		"margin-top":"-2px",
		"margin-left":"-2px",
		"border":"2px solid #666666",
		"border-radius":"5px" 
	});
	$(".codeBtns").css({
		"border":"2px solid",
		"border-radius":"5px",
		"border-color":"grey"
	});
	
	$(".taskBtn").css({
		"border-color":"black",
		"border-radius":"5px",
		"border":"1px solid"
	});
}