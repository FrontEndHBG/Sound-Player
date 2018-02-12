$(function () {

    // Api Url for
    var jamendoApi = 'https://api.jamendo.com/v3.0/artists/tracks/?client_id=f44f2488&format=jsonpretty';


    /* Functions used */

    // display songs .music-results
    function displaySongs (music) {
        for (var i = 0; i < music.length; i++) {
            var bandName = music[i].name;
            var tracks = music[i].tracks;
            tracks.forEach(function (item) {
                console.log(item);
                var template = '<li class="songs"> <p> ' + bandName +'</p> </li>';
                $('.songs').html(template);
            });
        }
    }

    // Form submission
    $('#music-form').submit(function (e) {
        e.preventDefault();
        // create an instance of the search from input
        var search = $('.input').val();

        var params = {
            namesearch: search
        };

        $.getJSON(jamendoApi, params, function (data) {
            var results = data.results;
            displaySongs(results);
        });
    }); // end of form submission
}); // end of jQuery