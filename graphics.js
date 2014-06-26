function graphics(level){
	if(level==0){
		$("#mainCode").fadeOut("fast",function(){
			$(this).addClass("terminalWindow").fadeIn("slow");
			$("#mainTitle").addClass("taskBar");
			$("#printCode").addClass("taskBarTitle");
			$("#mainTerm").addClass("terminal");
			$(".status").css("border-bottom","1px solid black");
			$(".status li").css("border-bottom","1px solid #CCCCCC");
			$(".progress").css({"border":"1px solid grey"});
		});
	}if(level==1){
		$(".terminalWindow").fadeOut("fast",function(){
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
		}).fadeIn("slow");
	}else if(level==2){
		
	}
}