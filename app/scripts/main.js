/**
 * main.js
 * ------------------------------------------------------------------------------------------------
 */

var thisSite = {};

/**
 * The ever-so-magical doc ready function.
 */
$(document).ready(function () {
    initializeSwiper();
    initializeDetailAccordian();
    initializeAnimations();
});

/**
 * Uses Animate.css to animate on hover.
 */
function animationHover(element, animation) {
    element = $(element);
    element.hover(
        function () {
            element.addClass("animated " + animation);
        },
        function () {
            //wait for animation to finish before removing classes
            window.setTimeout(function () {
                element.removeClass("animated " + animation);
            }, 2000);
        });
}

/**
 * Initializes animations.
 */
function initializeAnimations() {
    console.log("Initializing animations...");

    $(".round-fa").each(function () {
        animationHover(this, "wobble");
    });

    $(".round-glyphicon").each(function () {
        animationHover(this, "pulse");
    });

    console.log("Done!");
}

/**
 * Initializes the detail accordian.
 */
function initializeDetailAccordian() {
    console.log("Initializing detail accordian...");

    var divs = document.getElementsByTagName("div");

    for (var i = 0; i < divs.length; i++) {
        if (divs[i].className == "accordionItem") accordionItems.push(divs[i]);
    }

    console.log("Done!");
}

/**
 * Initializes the Google Map.
 */
function initializeMap() {

    var lat = "29.749028";
    var lon = "-95.457039";

    // InfoWindow content
    var content = '<div id="iw-container">' +
        '<div class="iw-title">1800 West Loop</div>' +
        '<div class="iw-content">' +
        '<p>Located in the heart of the West Loop/Galleria, Houston's premiere business and shopping district. Strategically positioned at the corner of San Felipe and the 610 Loop, the building is accessible to every major business area of Houston.</p>' +
        '</div>' +
        '<div class="iw-bottom-gradient"></div>' +
        '</div>';

    var centerLon = lon;// - 0.0105;

    var mapOptions = {
        scrollwheel: false,
        draggable: false,
        disableDefaultUI: false,
        center: new google.maps.LatLng(lat, centerLon),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var styles = [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#D6D6D6"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 13
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#1CA7B2"
                },
                {
                    "lightness": 14
                },
                {
                    "weight": 1.4
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#041819"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#041819"
                },
                {
                    "lightness": 5
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#1CA7B2"
                },
                {
                    "lightness": 25
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#1CA7B2"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#434546"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#021019"
                }
            ]
        }
    ];

    // var styles = [{ "featureType": "all", "elementType": "all", "stylers": [{ "color": "#004600" }] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#c9323b" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#c9323b" }, { "weight": 1.2 }] }, { "featureType": "administrative.locality", "elementType": "geometry.fill", "stylers": [{ "lightness": "-1" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{ "lightness": "0" }, { "saturation": "0" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.stroke", "stylers": [{ "weight": "0.01" }] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.stroke", "stylers": [{ "weight": "0.01" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#c9323b" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#99282f" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#99282f" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.stroke", "stylers": [{ "color": "#99282f" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#99282f" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#99282f" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#99282f" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#090228" }] }];
    
    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles,
        { name: "Styled Map" });

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set("map_style", styledMap);
    map.setMapTypeId("map_style");

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(lat, lon),
        // icon: "images/green-marker-x.png",
        title: "TX/RX Labs"
    });

    var infowindow = new google.maps.InfoWindow({
        content: content
    });

    google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
    });
    
    // *
    // START INFOWINDOW CUSTOMIZE.
    // The google.maps.event.addListener() event expects
    // the creation of the infowindow HTML structure "domready"
    // and before the opening of the infowindow, defined styles are applied.
    // *
    google.maps.event.addListener(infowindow, "domready", function () {

        // Reference to the DIV that wraps the bottom of infowindow
        var iwOuter = $(".gm-style-iw");

        /* Since this div is in a position prior to .gm-div style-iw.
         * We use jQuery and create a iwBackground variable,
         * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
        */
        var iwBackground = iwOuter.prev();

        // Removes background shadow DIV
        iwBackground.children(":nth-child(2)").css({ "display": "none" });

        // Removes white background DIV
        iwBackground.children(":nth-child(4)").css({ "display": "none" });

        // Moves the infowindow 115px to the right.
        iwOuter.parent().parent().css({ left: "115px" });

        // Moves the shadow of the arrow 76px to the left margin.
        iwBackground.children(":nth-child(1)").attr("style", function (i, s) { return s + "left: 76px !important;" });

        // Moves the arrow 76px to the left margin.
        iwBackground.children(":nth-child(3)").attr("style", function (i, s) { return s + "left: 76px !important;" });

        // Changes the desired tail shadow color.
        //iwBackground.children(":nth-child(3)").find("div").children().css({ "box-shadow": "rgba(72, 181, 233, 0.6) 0px 1px 6px", "z-index": "1" });

        // Reference to the div that groups the close button elements.
        var iwCloseBtn = iwOuter.next();

        // Apply the desired effect to the close button
        //iwCloseBtn.css({ opacity: "1", right: "38px", top: "3px", border: "7px solid #48b5e9", "border-radius": "13px", "box-shadow": "0 0 5px #3990B9" });

        // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
        if ($(".iw-content").height() < 140) {
            $(".iw-bottom-gradient").css({ display: "none" });
        }

        // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
        iwCloseBtn.mouseout(function () {
            $(this).css({ opacity: "1" });
        });

    });

    google.maps.event.addDomListener(window, "load", initializeMap);
    
    //infowindow.open(map, marker);
}

/**
 * Initializes Swiper.
 */
function initializeSwiper() {
    console.log("Initializing Swiper...");
    
    thisSite.swiper = new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        paginationHide: true,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        parallax: true,
        loop: false,
        speed: 900, // 600
        autoplay: 7000,
        onInit: function (swiper) {
            // When the Slider is initialized, go ahead and start typing the first slide content...
            typeSlide(1);
        },
        onSlideChangeEnd: function (swiper) {
            // When the slide change is over start typing the next slide content...
            var slideNumber = swiper.activeIndex + 1;
            console.log("Requesting typing of slide " + slideNumber + "...");
            typeSlide(slideNumber);
        },
        onReachEnd: function(swiper) {
            // When there are no more slides to display, hide Swiper after 10 seconds...
            console.log("No more slides! Hiding the container...");
            
            setTimeout(function() {
                $(".swiper-container").slideUp("slow");
            }, 10000); // You *may* have to increase this value (ms) if the text gets longer on the last slide
        }
    });
    
    initializeSwiperButton();

    console.log("Done!");
}

/**
 * Initializes the Swiper toggle button.
 */
function initializeSwiperButton() {
    console.log("Initializing Swiper toggle button...");
    
    $("#swiper-toggle").click(function() {
        if ($(".swiper-container").css("display") != "none") {
            console.log("Swiper is visible... hiding...");
            
            $("#swiper-toggle-icon").removeClass("glyphicon-menu-up");
            $("#swiper-toggle-icon").addClass("glyphicon-menu-down");
            
            $(".swiper-container").slideUp("slow");
        }
        else {
            console.log("Swiper is not visible... showing...");
            
            $("#swiper-toggle-icon").removeClass("glyphicon-menu-down");
            $("#swiper-toggle-icon").addClass("glyphicon-menu-up");
            
            resetSwiper();
        }
    });

    console.log("Done!");
}

/**
 * Resets Swiper to the beginning.
 */
function resetSwiper() {
    // If Swiper isn't visible for some reason, show it...
    if ($(".swiper-container").css("display") == "none") {
        $(".swiper-container").slideDown("slow");
    }
    
    // Turn on pagination...
    $(".swiper-pagination").removeClass("invisible");
    
    // Show the first slide...
    thisSite.swiper.slideTo(0);
}

/**
 * Toggles detail accordian visibility.
 */
function toggleDetailAccordianItem(indexToShow) {
    indexToShow = "#" + indexToShow;
    
    // If the item clicked is already visible then hide it and bail...
    if ($(indexToShow).is(":visible")) {
        $(indexToShow).hide();
        return;
    }
    
    // Hide all the detail accordian items...
    $("[id^=detail-]").hide();
    
    // Show only the accordian item that was clicked...
    $(indexToShow).show();
}

/**
 * Uses type.js to type text on a Swiper slide.
 */
function typeSlide(slideIndex) {
    var slideId = "#slide-" + slideIndex;
    var slideStringId = "#slide-strings-" + slideIndex;
    
    console.log("Typing slide: " + slideId + "...");

    var slideText = "";

    switch (slideIndex) {
        case 1:
            slideText = 'DC713 is a <a href="https://www.defcon.org/html/defcon-groups/dc-groups.html">DEF CON Group</a> for the greater Houston area.';
            break;
        case 2:
            slideText = "DC713 is a gathering point for anyone interested in alternate applications of modern technology.";
            break;
        case 3:
            slideText = "DC713 is a place to discuss technology and security topics.";
            break;
        case 4:
            slideText = "DC713 meetings are open to anyone, regardless of skill, age, job, gender, etc.";
            break;
        case 5:
            slideText = "DC713 is a place to learn new things, meet new people, and mentor others.";
            break;
    }
    
    slideText = slideText + "^3000"; // Add a 3 second delay
    
    $(slideId).typed({
        strings: [slideText],
        //stringsElement: $(slideStringId), // TODO: I couldn't get this to work at all, but I left the HTML (commented)
        typeSpeed: 0,
        callback: function () {
            console.log("Asking for the next slide...");
            thisSite.swiper.slideNext();
        }
    });
}
