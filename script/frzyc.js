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
    function showmain(selector){
        console.log("showmain");
        console.log(selector);
        $("#navbtns div").removeClass("active");
        $("#footernav div").removeClass("active");
        $(selector+"_navbtn").addClass("active");
        console.log(selector+"_navbtn"+"+.active")
        $(selector+"_footernavbtn").addClass("active");
        console.log(selector+"_footernavbtn"+"+.active");
        if(selector && !$(selector).is(":visible")){
            $(".main").fadeOut(500);
            $(selector).delay(500).fadeIn(500);
        }
    }
    return{
        projects:projectlist,
        showmain:showmain
    }
}();