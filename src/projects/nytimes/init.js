(function(exports) {
    'use strict';

    //initialize the app
    var settings = {
        Model: NYTimesMediaModel,
        // Model: JSONMediaModel,
        PlayerView: PlayerView,
        PlaylistView: PlaylistPlayerView,
        dataURL: "http://10.51.102.117:4000/svc/video/api/v3/playlist/1194811622182/full",
        // dataURL: "./assets/genericMediaData.json",
        showSearch: true,
        displayButtons: false,
        appLogo: "./assets/nytlogo_white_630.png"
    };

    exports.app = new App(settings);
}(window));
