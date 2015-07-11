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
    function loadProjects(){
        projectlist.forEach(function(proj,i){
            if(proj){
                var $projframe =$(
                    '<div class="project_frame">'+
                        '<div><div class="vignette"></div><img src="'+proj.thumbnail+'"/></div>'+
                        '<p class="project_thumb_title">'+proj.name+'</p>'+
                        '<p class="project_thumb_category">'+proj.category+'</p>'+
                    '</div>'
                );
                $projframe.click(function(){
                    console.log(proj.name);
                    displayProject(i);
                });
                $projframe.prependTo("#projects_wrapper");
            }
        });
    }
    function displayProject(i){
        if(projectlist[i]&&projectlist[i].content){
            $("#projectDisplay").load(projectlist[i].content,function(){
                console.log("load complete");
                $(".main").fadeOut(500);
                $("#projectDisplay").delay(500).fadeIn(500);
            });
        }
    }
    function showmain(selector){
        console.log("showmain");
        console.log(selector);
        $("#navbtns div, #home_navbtn").removeClass("active");
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
    function toTop(){//animated scrolling to the top of the page
        console.log("TOTOP");
        $("html, body").animate({ scrollTop: 0 }, 500);
    }
    return{
        projects:projectlist,
        showmain:showmain,
        toTop:toTop,
        loadProjects:loadProjects
    }
}();