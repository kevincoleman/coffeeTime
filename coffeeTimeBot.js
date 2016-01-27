var imageSearch = require('first-image-search-load');

module.exports = function(req, res, next){
  // get a random image from a google image search of 'coffee'
  imageSearch.getImagesArray('coffee').done(function(img){
    var coffeePic = img[Math.floor(Math.random() * img.length) + 1];
    var botPayload = {
      text: '![It’s Coffee Time.](' + coffeePic + ')',
      mrkdwn: true
    }

    return res.status(200).json(botPayload);
  });
};
