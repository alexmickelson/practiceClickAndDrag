function VResizable(JQObject){
    JQObject = $(JQObject);
    //vertical panels
    $bWidth = 0;
    JQObject.resizable({
        handles: 'e', minWidth: $bWidth,
        //function resizes the vertical panels sibling
        resize: function () {
            var remainingSpace = $(this).parent().width() - $(this).outerWidth();
            $(this).next().css('width', (remainingSpace - $bWidth) + 'px');
        }
    });
}

function HResizable(JQObject){
    JQObject = $(JQObject);
    $bHeight = 0;
    JQObject.resizable({
        handles: 's', minHeight: '2',
        resize: function () {
            //function resizes the horizontal panels sibling
            var remainingSpace = $(this).parent().height() - $(this).outerHeight();
            $(this).next().css('height', (remainingSpace - $bHeight) + 'px');
        }
    });

}


$(function () {


    //vertical panels
    $('.leftPane').each(function(){
        VResizable(this);
    });
    //horizontal panels
    $bHeight = 0;
    $('.topPane').each(function(){
        HResizable($(this));
    });
});

function drop(event) {
    var type = event.dataTransfer.getData("text");
    if (type == "horizontal"){
        event.target.insertAdjacentHTML('afterbegin', `<div class="topPane HPane" ondrop="drop(event)" ondragover="allowDrop(event)">
        </div>
        <div class="bottomPane HPane" ondrop="drop(event)" ondragover="allowDrop(event)">
        </div>`);
        HResizable(event.target.firstElementChild);

    } else if (type == "vertical") {
        event.target.insertAdjacentHTML('afterbegin', `<div class="leftPane VPane" ondrop="drop(event)" ondragover="allowDrop(event)">
        </div>
        <div class="rigtPane VPane" ondrop="drop(event)" ondragover="allowDrop(event)">
        </div>`);
        VResizable(event.target.firstElementChild);
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function dragStartH(event){
    event.dataTransfer.setData("Text", "horizontal");
}
function dragStartV(event){
    event.dataTransfer.setData("Text", "vertical");
}