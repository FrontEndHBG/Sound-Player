$(function () {

    // Api Url for
    var jamendoApi = 'https://api.jamendo.com/v3.0/tracks/?client_id=f44f2488&format=jsonpretty';
    var audioTrack = null;

    /* Functions used */
    // display songs .music-results
    function displaySongs(music) {
        for (var i = 0; i < music.length; i++) {
            var track = music[i].name;
            var artist = music[i].artist_name;
            var song = music[i].audio;
            var template = '<li class="song"><p> ' + artist + ' - <span>'+track +'</span></p><button data-song="'+ song +'" class="listen btn">Listen</button><button class="btn pause">Pause</button></li>';
            $('.songs').append(template);
        }
        $('.listen').click(function (e) {
            $(this).siblings('.pause').show();
            audioTrack = new Pizzicato.Sound(e.target.dataset.song, function () {
                audioTrack.play();
            });
            $(this).hide();
        });

        $('.pause').click(function (e) {
            audioTrack.stop();
            $(this).hide();
            $(this).siblings('.listen').show();
        });
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