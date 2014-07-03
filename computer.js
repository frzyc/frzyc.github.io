var computer ={
	computerCase:-1,
	computerCaseArr:[
		"Heavy metal box with duct-tape",
		"Second-hand rusty case",
		"codeMaster-C00L",
		"Beowulf cluster"
	],
	computerCaseArrDesciption:[
		"40 pounds of rusty, dented metal, it may be bulletproof, but it rattles and overheats like crazy, so we duct-taped an electric fan to the side",
		"Its just a brick-shaped box. Kind of boring, really.",
		"A professional computer case that incorporates a mini-fridge as cooling and food storage.",
		"A few dozen computers networked together for high-performance parallel computing."
		],
	cpu:0,	
	storage:0,
	graphics:0,
	api:0,
	ram:0,
	keyboard:0,
	list:["My Computer","Programs"],
	start:function(){
		$("<div id='compProgramsSwitcher'></div>").appendTo("#compTerminal");
	}
};