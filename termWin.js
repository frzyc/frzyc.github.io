function TermWin(id, title){
	this.id=id+"TermWin";
	this.title=title;
	this.taskBarId=id+"TaskBar";
	this.titleId=id+"Title";
	this.minBtnId=id+"BtnMin";
	this.maxBtnId=id+"BtnMax";
	this.closeBtnId=id+"BtnClose";
	this.terminalId=id+"Terminal";
	this.create = function(parent){
		var term = $(
		"<div class='terminalWindow' id="+this.id+">"+
			"<div class='taskBar' id="+this.taskBarId+">"+
				"<p class='taskBarTitle' id="+this.titleId+">"+this.title+"</p>"+//title
			"</div>"+
			"<div class='terminal' id="+this.terminalId+"></div>"+
		"</div>"
		);
		term.hide().prependTo(parent).fadeIn("slow");
		var THIS=this;
		$('<div/>', {
			type: 'button',
			'class': 'taskBtn',
			id: THIS.closeBtnId,
			text: 'x',
			click: function(){closeTerm(THIS.id);},
		}).appendTo("#"+THIS.taskBarId);
		$('<div/>', {
			type: 'button',
			'class': 'taskBtn',
			id: THIS.maxBtnId,
			text: '[]',
			click: function(){maximizeTerm(THIS.maxBtnId,THIS.id);},
		}).appendTo("#"+THIS.taskBarId);
		$('<div/>', {
			type: 'button',
			'class': 'taskBtn',
			id: THIS.minBtnId,
			text: '_',
			click: function(){minimizeTerm(THIS.minBtnId,THIS.terminalId);},
		}).appendTo("#"+THIS.taskBarId);
	}
	this.eventContent=function(eve){
		var content = $("<p><strong>Description: </strong>"+events[eve].description+"</p><p><strong>Risk: </strong>"+events[eve].risk+"</p>");
		var $reward = $("<p id="+eve+"Reward><strong>Reward: </strong>"+events[eve].reward+"</p>");
		if(events[eve].declineBtn)
			var $penalty = $("<p id="+eve+"Penalty><strong>Penalty: </strong>"+events[eve].penalty+"</p>");
		$("#"+eve+"Terminal").append(content);
		this.$acceptBtn = $('<button/>', {
			type: 'button',
			'class': 'codeBtns',
			id: eve+'Accept',
			text: 'Accept',
			click: function() {
				console.log('clicked appept id: '+ this.id);
				$(this).hide();
				$("#"+eve+'Decline').fadeOut();
				$("#"+eve+"Reward").remove();
				$("#"+eve+"Penalty").remove();
				events[eve].accept();
			},
			mouseenter: function(){
				console.log("mouseover");
				$("#"+eve+"Reward").show("fast");
			},
			mouseleave: function(){
				console.log("mouseleave");
				$("#"+eve+"Reward").hide("fast");
			}
		});
		if(events[eve].declineBtn){
			this.$declineBtn = $('<button/>', {
				type: 'button',
				'class': 'codeBtns',
				id: eve+'Decline',
				text: 'Decline',
				click: function() {
					console.log("clicked decline id: "+this.id);
					$(this).hide();
					$("#"+eve+'Accept').fadeOut("fast");
					$("#"+eve+"Reward").remove();
					$("#"+eve+"Penalty").remove();
					events[eve].decline();
					closeTerm(eve);
				},
				mouseenter: function(){
					console.log("mouseover");
					$("#"+eve+"Penalty").show("fast");
				},
				mouseleave: function(){
					console.log("mouseleave");
					$("#"+eve+"Penalty").hide("fast");
				}
			});
		}
		$("#"+eve+"Terminal").append(this.$acceptBtn);
		if(events[eve].declineBtn)
			$("#"+eve+"Terminal").append(this.$declineBtn);
		$reward.hide().appendTo("#"+eve+"Terminal");
		if(events[eve].declineBtn)
			$penalty.hide().appendTo("#"+eve+"Terminal");
		$("#"+eve+"Accept").fadeIn();
		if(events[eve].declineBtn)
			$("#"+eve+"Decline").fadeIn("slow");
		
	}
	this.hideMinBtn = function(){
		$("#"+this.minBtnId).hide();
	}
	this.showMinBtn = function(){
		$("#"+this.minBtnId).show();
	}
	this.hideMaxBtn = function(){
		$("#"+this.maxBtnId).hide();
	}
	this.showMaxBtn = function(){
		$("#"+this.maxBtnId).show();
	}
	this.hideCloseBtn = function(){
		$("#"+this.closeBtnId).hide();
	}
	this.showCloseBtn = function(){
		$("#"+this.closeBtnId).show();
	}
}

function minimizeTerm(btn,terminal){
	console.log("MIN");
	if($("#"+btn).text() === "_"){
		$("#"+terminal).hide("fast");
		$("#"+btn).text("o");
	}else{
		$("#"+terminal).show("fast");
		$("#"+btn).text("_");
	}	
}
function maximizeTerm(btn,termWinId){
	console.log("MAX");
	if($("#"+btn).text() === "[]"){
		$("#"+termWinId).css("position","absolute");
		$("#"+termWinId).css("left","20px");
		$("#"+termWinId).css("top","20px");
		$("#"+termWinId).css("width",$(window).width()-40+"px");
		$("#"+termWinId).css("height",$(window).height()-40+"px");
		$("#"+btn).text("||");
	}else{
		$("#"+termWinId).css("position","static");
		$("#"+termWinId).css("left","");
		$("#"+termWinId).css("top","");
		$("#"+termWinId).css("width","");
		$("#"+termWinId).css("height","");
		$("#"+btn).text("[]");
	}	
}
function closeTerm(termWinId){
	console.log("CLOSE id:"+termWinId);
	//status("Terminal Terminated.");
	$("#"+termWinId).fadeOut("slow",function(){
		this.remove();	
	});
}