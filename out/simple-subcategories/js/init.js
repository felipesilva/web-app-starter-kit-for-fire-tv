(function(exports) {
    'use strict';
    
    //initialize the app
    var settings = {
        Model: JSONMediaModel,
        PlayerView: PlayerView,
        PlaylistView: PlaylistPlayerView,
        dataURL: "./assets/genericSubCategoriesData.json",
        showSearch: true,
        displayButtons:false 
    };

    exports.app = new App(settings);
}(window));
