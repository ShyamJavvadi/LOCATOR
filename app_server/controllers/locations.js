module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Mana Music - Stream Your Favorite Tunes',
        pageHeader: {
            title: 'Mana Music',
            strapline: 'Stream Your Favorite Tunes!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about.Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Echoes of the Heart',
            artist: 'Lana Sky',
            rating: 5,
            facilities: ['High-quality audio', 'Offline download', 'Lyrics available'],
            distance: '3:45'
        }, {
            name: 'Rise Above',
            artist: 'The Horizons',
            rating: 4,
            facilities: ['Lossless audio', 'Available in playlists', 'Music video'],
            distance: '4:15'
        }, {
            name: 'Soothing Waves',
            artist: 'Oceanic Vibes',
            rating: 5,
            facilities: ['Available in Hi-Res', 'Meditation playlist', 'Instrumental version'],
            distance: '5:30'
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};