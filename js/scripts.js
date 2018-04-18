$('#text').change(function() {
    var jElement = $(this);
    jElement.addClass('highlight');
    setTimeout(
        function() { jElement.removeClass('highlight'); },
        2000
    );
});
