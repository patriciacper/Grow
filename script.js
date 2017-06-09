var registerListeners = function () {
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

    $(".close").on("click", function () {
        $(".modal").hide();
        $(".result").hide();
        $(".b-final").hide();
        $(".previous").hide();
        $(".close").hide();
        $("footer").hide();
        $(".fourth").find(".round").css("background", "none");
        $(".fourth").find(".round").css("opacity", "0.5");
        $(".fourth").find("p").hide();
        $("#home").show();
        $(".opt").css("opacity", 0.5);
    });

    $("button").on("click", function () {
        $("#home").hide();
        $(".modal").show();
        $("footer").show();
        $(".intro").show();
        $(".b-intro").show();
        $(".next").show();
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
}

$(document).ready(function () {
    registerListeners();
});