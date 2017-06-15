var resetModal, resetFoot;

var registerListeners = function () {
    $("button").on("click", function () {
        resetModal = $(".modal").clone(true);
        resetFoot = $("footer").clone(true);
    });
    
    $(".close").on("click", function () {
        $(".modal").remove();
        $("footer").remove();
        resetModal.appendTo(".wrapper");
        resetFoot.insertAfter("main");
        $("#home").show();
    });
    
    $(".home-btn").on("click", function () {
        $(".modal").remove();
        $("footer").remove();
        resetModal.appendTo(".wrapper");
        resetFoot.insertAfter("main");
        $("#home").show();
    });
    
    $(".opt").on("click", function () {
        var option = $(this).attr("data-id");
        var page = $(this).parents(".page").attr("id");

        $(".b-" + page).find("p.zero").hide();

        activeOptions = $(".active-opt");

        if (activeOptions.length > 0) {
            activeOptions.removeClass("active-opt").addClass("opt1");
        }

        $(".b-" + page).find("." + option).removeClass("opt1").addClass("active-opt");

        $(this).css("opacity", 1);
        $(this).siblings().css("opacity", 0.5);
    });

    $(".next").on("click", function () {
        var visiblePage = $(".page:visible"),
            visibleFooter = $(visiblePage).attr("id");

        $(visiblePage).hide();
        $(visiblePage).next().show();
        $(".previous").show();

        if (visibleFooter !== "fourth") {
            $(".b-" + visibleFooter).hide();
            $(".b-" + visibleFooter).next().show();
        } else {
            $(".b-final").show();
            $(".next").hide();
            $(".close").show();
        }
    });

    $(".previous").on("click", function () {
        var visiblePage = $(".page:visible"),
            visibleFooter = $(visiblePage).attr("id");

        $(visiblePage).hide();
        $(visiblePage).prev().show();

        if (visibleFooter === "final") {
            $(".b-" + visibleFooter).hide();
            $(".next").show();
            $(".close").hide();
        } else if (visibleFooter === "fourth") {
            $(".b-third").show();
        } else if (visibleFooter === "second") {
            $(".previous").hide();
            $(".b-" + visibleFooter).hide();
            $(".b-" + visibleFooter).prev().show();
        } else {
            $(".b-" + visibleFooter).hide();
            $(".b-" + visibleFooter).prev().show();
        }

    });

    $("button").on("click", function () {
        $("#home").hide();
        $(".modal").show();
        $("footer").show();
    });

    $(".round").on("click", function () {
        var selectedLevel = $(this).attr("data-id"),
            selectedType = $(this).parent().parent().attr("class");

        $(this).css("background-color", "#96c963");
        $(this).css("opacity", "1");
        $(this).prevAll(".round").css("background-color", "#96c963");
        $(this).prevAll(".round").css("opacity", "1");
        $(this).nextAll(".round").css("background", "none");
        $(this).nextAll(".round").css("opacity", "0.5");

        $("p." + selectedType).hide();
        $("." + selectedType + "." + selectedLevel).show();
    });
    
    $(".next").on("click", function () {
        var visiblePage = $(".page:visible"),
            visibleCrumb = $(visiblePage).attr("id");

        if (visibleCrumb === "fourth") {
            $(".crumb-" + visibleCrumb).children().children("p").css("font-size", "16px");
            $(".crumb-" + visibleCrumb).children().children("p").css("font-weight", "400");
        } else {
            $(".crumb-" + visibleCrumb).children("p").css("font-size", "16px");
            $(".crumb-" + visibleCrumb).children("p").css("font-weight", "400");
        }
        
        $(".crumb-" + visibleCrumb).children(".crumb").css("background-color", "white");
        $(".path-" + visibleCrumb).css("border-top", "2px solid white");
    });
    
    $(".opt").on("click", function () {
        var selectedOption = $(this).attr("data-title");
        var visiblePage = $(".page:visible"),
            visibleCrumb = $(visiblePage).attr("id");
        
        $(".crumb-" + visibleCrumb).children("p").text(selectedOption);
    });
    
    $(".know").on("click", function () {
        var selectedOption = $(this).attr("data-title");
        var visiblePage = $(".page:visible"),
            visibleCrumb = $(visiblePage).attr("id");
        
        $(".crumb-" + visibleCrumb).children().children(".how-know").text(selectedOption);
    });
    
    $(".timer").on("click", function () {
        var selectedOption = $(this).attr("data-title");
        var visiblePage = $(".page:visible"),
            visibleCrumb = $(visiblePage).attr("id");
        
        $(".crumb-" + visibleCrumb).children().children(".how-time").text(selectedOption);
    });
}

$(document).ready(function () {
    registerListeners();
});