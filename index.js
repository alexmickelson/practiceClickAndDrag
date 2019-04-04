var options = function () {
    //make the menu
    var menu =  $(`<form class="optionsList hide ">
            <p>
                <label>Opacity: </label>
                <input type="range" min="0" max="100" value="100" class="sliders" />
                <span class="numOpacity">100</span>% 
            </p>
            <p>
                <label>Saturation: </label>
                <input type="range" min="1" max="300" value="100" class="sliders" />
                <span class="numSaturation">100</span>% 
            </p>
            <p>
                <label>Brightness: </label>
                <input type="range"  min="0" max="300" value="100" class="sliders" />
                <span class="numBrightness">100</span>% 
            </p>
            <p>
                <label>Hue Rotate: </label>
                <input type="range" min="0" max="360" value="0" class="sliders" />
                <span class="numHue">0</span>deg 
            </p>
            <p>
                <label>Grayscale: </label>
                <input type="range" min="0" max="100" value="0" class="sliders" />
                <span class="numGray">0</span>% 
            </p>
            <p>
                <label>Blur: </label>
                <input type="range" min="0" max="10" value="0" class="sliders" /> 
                <span class="numBlur">0</span>px 
            </p>
            <p>
                <button class="resetFilters">Reset</button> 
            </p>
        </form >`);


    //make the listeners
    var btns = menu.find('INPUT');
    btns.change(function (event) {
        var btn = event.srcElement;
        i = 0;
        //find img to change css
        $(this).parent().parent().prev().css(`filter`, `opacity(${btns[i++].value}%) saturate(${btns[i++].value}%) brightness(${btns[i++].value}%) hue-rotate(${btns[i++].value}deg) grayscale(${btns[i++].value}%) blur(${btns[i++].value}px)`);
        //TODO make it work on safari
        //i = 0;
        //img.css(`-webkit-filter`, `opacity(${btns[i++].value}%) saturate(${btns[i++].value}%) brightness(${btns[i++].value}%) hue-rotate(${btns[i++].value}deg) grayscale(${btns[i++].value}%) blur(${btns[i++].value}px)`);

        $(this).next().text(this.value);
    });

    return menu;
};

//event that a placed picture is clicked again
//lets you change the picture
//lets you drag the picture
function edit(e) {
    var f = $(this).children('FORM');
    var i = $(this).children('IMG');

    //unhide the image atributes menu
    if (e.target.tagName == 'IMG') {
        f.toggleClass('hide');
        i.toggleClass('moveable');
        $(this).draggable();
        $(this).draggable('disable');
    }
};


// document.onload = (function () {

//     function newImg(e) {
//         var x = e.clientX;
//         var y = e.clientY;
//         var stairs = document.createElement('IMG');
//         stairs.setAttribute("src", "stairs.jpg");
//         stairs.setAttribute('width', "300");
//         stairs.style.position = "absolute";
//         stairs.style.left = String(x) + 'px';
//         stairs.style.top = String(y) + 'px';
//         this.appendChild(stairs);

        
//         var rec = stairs.getBoundingClientRect();
//         var line = this.getContext("2d");
//         line.beginPath();
//         line.moveTo(0, 0);
//         line.lineTo(rec.x, rec.y);
//         line.stroke();
//     }

//     var a = document.querySelector('html');
//     a.addEventListener("click", newImg);



// }) ();



//function inputs new images where clicked
$(function () {
    // array of all images


    //makes a new <img> and puts it on page
    $('main').click(function newImg(e) {
        if (e.target.tagName == 'MAIN') { 
            //make a div to contain picture and options
            var newDiv = $("<div>");
            newDiv.addClass("dynamic");

            //make the picture with its position
            var x = e.clientX;
            var y = e.clientY;
            var newImg = $('<img/>');
            newImg.attr("src", "stairs.jpg");
            newDiv.attr('width', "300px");
            newDiv.css({
                'position': "absolute",
                'left': String(x) + 'px',
                'top': String(y) + 'px'
            });
            newImg.css('width', '300px');


            //put the picture and an editing menu in the div
            newDiv.append(newImg);
            options().appendTo(newDiv);



            $(this).append(newDiv);
            //add an edditing menu when selected

            newDiv.click(edit);
            //handle dragging
            newDiv.mousedown(function (e) {
                if (e.target.tagName == 'IMG') {
                    if ($(this).children('IMG').hasClass('moveable')) {
                        debugger;
                        $(this).draggable('enable');
                    }
                }
            });


            newDiv.mouseup(function (e) {
                if (e.target.tagName == 'IMG') {
                    if ($(this).children('IMG').hasClass('moveable')) {
                        //$(this).children('IMG').toggleClass('moveable');
                        $(this).draggable('disable');
                    }
                }
            });


        } else if (e.target.tagName == 'DIV') {

        }





        //var rec = stairs.getboundingclientrect();
        //var line = this.getcontext("2d");
        //line.beginpath();
        //line.moveto(0, 0);
        //line.lineto(rec.x, rec.y);
        //line.stroke();
    });

    var a = document.querySelector('html');
    a.addEventListener("click", newImg);



}) ();