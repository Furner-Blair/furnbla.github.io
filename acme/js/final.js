$(".button").on("click", "a", function (evt){
            evt.preventDefault;

    var navhead = $(this).text();
        $.ajax({
            url: "/acme/js/acme.json",
            dateType: "json",
            success: function(data){
                var label = data[navhead].name;
                var pic = data[navhead].path;
                var word = data[navhead].description;
                var money = data[navhead].price;
                var make = data[navhead].manufacturer;
                var rev = data[navhead].reviews;
                $("#image").attr("src",pic);
                $("#image").css({"background-color": "white", "position": "relative", "right": "215px"})
                $("#h1").html(label)
                $("#h1").css({"background-color": "white", "text-align": "left"})
                $("#actionbtn").hide();
                $("#action").html("Price:" + " " + "$" + money);
                $("#list1").html("<b>Reviews:" + ' ' + rev + "</b>");
                $("#list2").html("<br><b>Made by:" + ' ' + make + "</b></br>");
                $("#list3").html(word);
                $("#list3").css({"width": "300px"})

                $("#total").css({"background-color": "#ffffff", "width": "72.5%", "margin": "0 auto"})
                $("#letter").css({"display": "flex", "flex-direction": "column-reverse", "text-align": "left"})
                $("#list1,#list2,#list3").css({"color": "black", "display": "flex", "justify-content": "flex-start"})
                $("#action").css({"color": "#de2226"})

                $(".wrapper").hide();
                $(".content").hide();
                $("recipes").hide();
                $("#second").hide();

            }

            });
    });

