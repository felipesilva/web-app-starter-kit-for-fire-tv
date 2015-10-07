(function(exports) {
    'use strict';

    //initialize the app
    var settings = {
        Model: JSONMediaModel,
        PlayerView: PlayerView,
        PlaylistView: PlaylistPlayerView,
        dataURL: "./assets/genericMediaData.json",
        showSearch: true,
        displayButtons: false,
        appLogo: "./assets/nyt-logo-379x64.png"
    };

    exports.app = new App(settings);
}(window));
