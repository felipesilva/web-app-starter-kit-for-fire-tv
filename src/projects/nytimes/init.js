(function(exports) {
    'use strict';

    //initialize the app
    var settings = {
        Model: NYTimesMediaModel,
        PlayerView: PlayerView,
        PlaylistView: PlaylistPlayerView,
        dataURL: "http://www.nytimes.com/svc/video/api/v3/playlist/{{id}}/full",
        showSearch: true,
        displayButtons: false,
        appLogo: "./assets/nytlogo_white_630.png"
    };

    exports.app = new App(settings);
}(window));
