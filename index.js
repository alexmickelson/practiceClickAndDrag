$(function(){
    $bWidth = 2;
    $('.Vsplitter > div:first').resizable({
        handles: 'e', minWidth: '2', maxWidth: '398',
        resize: function () {
            var remainingSpace = $(this).parent().width() - $(this).outerWidth();
            $(this).next().css('width', (remainingSpace - $bWidth) + 'px');
        }
    });
    $bHeight = 28;
    $('.Hsplitter > div:first').resizable({
        handles: 's', minHeight: '2', maxHeight: '398',
        resize: function () {
            var remainingSpace = $(this).parent().height() - $(this).outerHeight();
            $(this).next().css('height', (remainingSpace - $bHeight) + 'px');
        }
    });
});