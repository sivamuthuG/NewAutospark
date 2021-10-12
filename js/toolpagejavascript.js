$(document).ready(function() {

    $("#all-mch").addClass("machine-active");

    var location = window.location;
    var pathArray = location.toString().split("#");
    $("#" + pathArray[1] + "Id").addClass("active");


    $("#full-view-Id").click(function() {
        $(".toolmenu").hide(500);
        $(".expand").show();
        $(".full-view").hide();
        $(".viewBody").addClass("viewBodyLeft");
    });

    $("#expand_Id").click(function() {
        $(".toolmenu").show(500);
        $(".expand").hide();
        $(".full-view").show();
        $(".viewBody").removeClass("viewBodyLeft");
    });

    $('#logo-Id').click(function() {
        location.reload();
    });

    $("#new-build").click(function() {
        $(".build-form").show();
        $(".viewBody").addClass("freeze-Back");
    });

    $("#buil-start-btn").click(function() {

        if (validateBuildForm()) {

            $(".build-form").hide();
            $(".viewBody").removeClass("freeze-Back");

        }
    });

    $("#buil-cancel-btn").click(function() {
        $(".build-form").hide();
        $(".viewBody").removeClass("freeze-Back");
    });

    $("#bug-Id-new").click(function() {

        $(".bug-content").show();
        $(".viewBody").addClass("freeze-Back");

    });

    $("#bug-Id").click(function() {

        $(".bug-content").show();
        $(".viewBody").addClass("freeze-Back");

    });

    $("#bugadd-Id").click(function() {

        if (validateBugForm()) {

            $(".bug-content").hide();
            $(".viewBody").removeClass("freeze-Back");

        }

    });

    $("#bugcancel-Id").click(function() {

        $(".bug-content").hide();
        $(".viewBody").removeClass("freeze-Back");

    });

    $("#imp-sub-btn").click(function() {

        if (validateImpactForm()) {

            $(".impact-form").hide();
            $(".viewBody").removeClass("freeze-Back");

        }

    });

    $("#imp-add").click(function() {
        $(".impact-form").show();
        $(".viewBody").addClass("freeze-Back");

    });

    $("#imp-cancel-btn").click(function() {

        $(".impact-form").hide();
        $(".viewBody").removeClass("freeze-Back");

    });


    $("#run-btn-add").click(function() {

        if (validateRunForm()) {

            $(".test-form").hide();
            $(".viewBody").removeClass("freeze-Back");

        }
    });

    $("#run-btn-cancel").click(function() {
        $(".test-form").hide();
        $(".viewBody").removeClass("freeze-Back");
    });

    $("#new-run").click(function() {
        $(".test-form").show();
        $(".viewBody").addClass("freeze-Back");
    });

    $('#logo-Id').click(function() {
        location.reload();
    });

    $("#closeId").click(function() {
        $(".userProfile").hide();
        $(".viewBody").removeClass("freeze-Back");
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            $("#formId").hide();
            $("#formId1").hide();
            $("#formId2").hide();
            $("#formId3").hide();
            $("#formIduser").hide();
            $(".viewBody").removeClass("freeze-Back");
        }
    });


    $('#userId').click(function() {
        $(".userProfile").show();
        $(".viewBody").addClass("freeze-Back");
    });


    // document.onreadystatechange = function() {
    //     if (document.readyState !== "complete") {
    //         document.querySelector("body").style.visibility = "hidden";
    //         document.querySelector("#loader").style.visibility = "visible";
    //     } else {
    //         document.querySelector("#loader").style.display = "none";
    //         document.querySelector("body").style.visibility = "visible";
    //     }
    // };



    $("#all-mch").click(function() {
        $(".all-machine").show();
        $(".inc").hide();
        $(".exclude").hide();
        $(".add-machine").hide();
        $(".remove-machine").hide();
        $("#all-mch").addClass("machine-active");
        $("#inc-mch").removeClass("machine-active");
        $("#exc-mch").removeClass("machine-active");
        $("#add-mch").removeClass("machine-active");
        $("#rem-mch").removeClass("machine-active");

    });

    $("#inc-mch").click(function() {
        $(".all-machine").hide();
        $(".inc").show();
        $(".exclude").hide();
        $(".add-machine").hide();
        $(".remove-machine").hide();
        $("#all-mch").removeClass("machine-active");
        $("#inc-mch").addClass("machine-active");
        $("#exc-mch").removeClass("machine-active");
        $("#add-mch").removeClass("machine-active");
        $("#rem-mch").removeClass("machine-active");

    });

    $("#exc-mch").click(function() {
        $(".all-machine").hide();
        $(".inc").hide();
        $(".exclude").show();
        $(".add-machine").hide();
        $(".remove-machine").hide();
        $("#all-mch").removeClass("machine-active");
        $("#inc-mch").removeClass("machine-active");
        $("#exc-mch").addClass("machine-active");
        $("#add-mch").removeClass("machine-active");
        $("#rem-mch").removeClass("machine-active");

    });

    $("#add-mch").click(function() {
        $(".all-machine").hide();
        $(".inc").hide();
        $(".exclude").hide();
        $(".add-machine").show();
        $(".remove-machine").hide();
        $("#all-mch").removeClass("machine-active");
        $("#inc-mch").removeClass("machine-active");
        $("#exc-mch").removeClass("machine-active");
        $("#add-mch").addClass("machine-active");
        $("#rem-mch").removeClass("machine-active");

    });

    $("#rem-mch").click(function() {
        $(".all-machine").hide();
        $(".inc").hide();
        $(".exclude").hide();
        $(".add-machine").hide();
        $(".remove-machine").show();
        $("#all-mch").removeClass("machine-active");
        $("#inc-mch").removeClass("machine-active");
        $("#exc-mch").removeClass("machine-active");
        $("#add-mch").removeClass("machine-active");
        $("#rem-mch").addClass("machine-active");

    });

    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 0) {
    //         $('.runTable').fadeOut();
    //     } else {
    //         $('.runTable').fadeIn();
    //     }
    // });


});