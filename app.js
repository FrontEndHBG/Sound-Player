$(function () {

    // Api Url for
    var jamendoApi = 'https://api.jamendo.com/v3.0/tracks/?client_id=f44f2488&format=jsonpretty';


    /* Functions used */

    // display songs .music-results
    function displaySongs(music) {
        console.log(music);
        for (var i = 0; i < music.length; i++) {
            var track = music[i].name;
            var artist = music[i].artist_name;
            var template = '<li class="song"><p> ' + artist + ' - <span>'+track +'</span></p><button class="listen">Listen</button></li>';
            $('.songs').append(template);
        }
    }

    // Form submission
    $('#music-form').submit(function (e) {
        e.preventDefault();
        // create an instance of the search from input
        var search = $('.input').val();
        $('.songs').html('');
        var params = {
            namesearch: search
        };

        $.getJSON(jamendoApi, params, function (data) {
            var results = data.results;
            displaySongs(results);
        });
    }); // end of form submission
}); // end of jQuery