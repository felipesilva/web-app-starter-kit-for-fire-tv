(function(exports) {
    'use strict';

    //initialize the app
    var settings = {
        Model: NYTimesMediaModel,
        // Model: JSONMediaModel,
        PlayerView: PlayerView,
        PlaylistView: PlaylistPlayerView,
        dataURL: "http://10.51.211.52:4000/svc/video/api/v3/playlist/{{id}}/full",
        // dataURL: "./assets/genericMediaData.json",
        showSearch: true,
        displayButtons: false,
        appLogo: "./assets/nytlogo_white_630.png"
    };

    exports.app = new App(settings);
}(window));
