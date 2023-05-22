jQuery(document).ready(function ($) {
  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
      $("#header").addClass("header-fixed");
    } else {
      $(".back-to-top").fadeOut("slow");
      $("#header").removeClass("header-fixed");
    }
  });

  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
    $("#header").addClass("header-fixed");
  }

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $(".nav-menu").superfish({
    animation: {
      opacity: "show",
    },
    speed: 400,
  });

  // Mobile Navigation
  if ($("#nav-menu-container").length) {
    var $mobile_nav = $("#nav-menu-container").clone().prop({
      id: "mobile-nav",
    });
    $mobile_nav.find("> ul").attr({
      class: "",
      id: "",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    );
    $("body").append('<div id="mobile-body-overly"></div>');
    $("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on("click", ".menu-has-children i", function (e) {
      $(this).next().toggleClass("menu-item-active");
      $(this).nextAll("ul").eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on("click", "#mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
      $("#mobile-body-overly").toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $(".nav-menu a, #mobile-nav a, .scrollto").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-fixed")) {
            top_space = top_space - 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this).closest("li").addClass("menu-active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery - uses the magnific popup jQuery plugin
  $(".gallery-popup").magnificPopup({
    type: "image",
    removalDelay: 300,
    mainClass: "mfp-fade",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: "ease-in-out",
      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });

  // custom code
});

// Time (Clock)
setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  am_pm = "ق ";
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  if (hour > 12) {
    hour -= 12;
    am_pm = " ب ";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = "ق ظ";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = am_pm + hour + ":" + min + ":" + sec;

  document.getElementById("clock").innerHTML = currentTime;
}
showTime();

// Hijr shamsi Date
var sundte = new Date();
var yeardte = sundte.getFullYear();
var monthdte = sundte.getMonth();
var dtedte = sundte.getDate();
var daydte = sundte.getDay();
var sunyear;
switch (daydte) {
  case 0:
    var today = "يکشنبه";
    break;
  case 1:
    var today = "دوشنبه";
    break;
  case 2:
    var today = "سه شنبه";
    break;
  case 3:
    var today = "چهارشنبه";
    break;
  case 4:
    var today = "پنجشنبه";
    break;
  case 5:
    var today = "جمعه";
    break;
  case 6:
    var today = "شنبه";
    break;
}
switch (monthdte) {
  case 0:
    sunyear = yeardte - 622;
    if (dtedte <= 20) {
      var sunmonth = "مرغومی/ جدی";
      var daysun = dtedte + 10;
    } else {
      var sunmonth = "سلواغه/دلو";
      var daysun = dtedte - 20;
    }
    break;
  case 1:
    sunyear = yeardte - 622;
    if (dtedte <= 19) {
      var sunmonth = "سلواغه/دلو";
      var daysun = dtedte + 11;
    } else {
      var sunmonth = "کب/حوت";
      var daysun = dtedte - 19;
    }
    break;
  case 2:
    {
      if ((yeardte - 621) % 4 == 0) var i = 10;
      else var i = 9;
      if (dtedte <= 20) {
        sunyear = yeardte - 622;
        var sunmonth = "کب/حوت";
        var daysun = dtedte + i;
      } else {
        sunyear = yeardte - 621;
        var sunmonth = "وری/حمل";
        var daysun = dtedte - 20;
      }
    }
    break;
  case 3:
    sunyear = yeardte - 621;
    if (dtedte <= 20) {
      var sunmonth = "وری/ حمل";
      var daysun = dtedte + 11;
    } else {
      var sunmonth = "غویی/ ثور";
      var daysun = dtedte - 21;
    }
    break;
  case 4:
    sunyear = yeardte - 621;
    if (dtedte <= 21) {
      var sunmonth = "غویی/ ثور";
      var daysun = dtedte + 10;
    } else {
      var sunmonth = "غبرگولی/ جوزا";
      var daysun = dtedte - 22;
    }

    break;
  case 5:
    sunyear = yeardte - 621;
    if (dtedte <= 21) {
      var sunmonth = "غبرگولی/ جوزا";
      var daysun = dtedte + 10;
    } else {
      var sunmonth = "چنگاښ/سرطان";
      var daysun = dtedte - 21;
    }
    break;
  case 6:
    sunyear = yeardte - 621;
    if (dtedte <= 22) {
      var sunmonth = "چنگاښ/سرطان";
      var daysun = dtedte + 9;
    } else {
      var sunmonth = "زمری/ اسد";
      var daysun = dtedte - 22;
    }
    break;
  case 7:
    sunyear = yeardte - 621;
    if (dtedte <= 22) {
      var sunmonth = "زمری/اسد";
      var daysun = dtedte + 9;
    } else {
      var sunmonth = "وږی/ سنبله";
      var daysun = dtedte - 22;
    }
    break;
  case 8:
    sunyear = yeardte - 621;
    if (dtedte <= 22) {
      var sunmonth = "وږی/ سنبله";
      var daysun = dtedte + 9;
    } else {
      var sunmonth = "تله/ میزان";
      var daysun = dtedte + 22;
    }
    break;
  case 9:
    sunyear = yeardte - 621;
    if (dtedte <= 22) {
      var sunmonth = "تله/ میزان";
      var daysun = dtedte + 8;
    } else {
      var sunmonth = "لړم/ عقرب";
      var daysun = dtedte - 22;
    }
    break;
  case 10:
    sunyear = yeardte - 621;
    if (dtedte <= 21) {
      var sunmonth = "لړم/ عقرب";
      var daysun = dtedte + 9;
    } else {
      var sunmonth = "لیندۍ/ قوس";
      var daysun = dtedte - 21;
    }

    break;
  case 11:
    sunyear = yeardte - 621;
    if (dtedte <= 19) {
      var sunmonth = "لیندۍ/ قوس";
      var daysun = dtedte + 9;
    } else {
      var sunmonth = "مرغومی/جدی";
      var daysun = dtedte + 21;
    }
    break;
}
document.getElementById("today").innerHTML =
  "امروز " +
  today +
  "&nbsp;" +
  [daysun + 1] +
  "&nbsp;" +
  sunmonth +
  "&nbsp;" +
  sunyear;

//   hijri Qamari Date
const hijriDate = new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
  day: "numeric",
  month: "numeric",
  weekday: "long",
  year: "numeric",
}).format(Date.now());

document.getElementById("hijriQamari").innerHTML = hijriDate;

// Milaadi Date
const d = new Date();
document.getElementById("miladiDate").innerHTML = d.toDateString();

// Weather code
let weather = {
  apiKey: "f7b3259c156178c80e902d98e365671e",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "" + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("کابل");
