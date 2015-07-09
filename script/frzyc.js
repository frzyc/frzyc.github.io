frzyc = function(){
    var projectlist = [
        {
            name: "PTF Website",
            category: "Website Design",
            time: "November 2014",
            thumbnail: "Projects/PTF/thumb.png",
            content: "Projects/PTF/content.html"
        },
        {
            name: "Arnold Lan Photography",
            category: "Website Design",
            time: "June 2015",
            thumbnail: "Projects/ALP/thumb.png",
            content: "Projects/ALP/content.html"
        }
    ];
    function showmain(selector,btn){
        console.log("showmain");
        console.log(selector);
        console.log(btn);
        $("#navbtns div").removeClass("active");
        if(typeof btn === "string"){
            btn=$(btn);
        }
        if(btn){
            console.log("setclass active");
            $(btn).addClass("active");
        }
        if(selector){
            $(".main").fadeOut(500);
            $(selector).delay(500).fadeIn(500);
        }
    }
    return{
        projects:projectlist,
        showmain:showmain
    }
}();