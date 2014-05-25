var FirebaseCommunicator = {
  getInitialPhotos: function(controller) {
    controller.geo.getPointsNearLoc(controller.coordinates, controller.radius, function(array) {
      controller.init(array);
    })
  },
  sendImageToFirebase: function(url) {
    var geo = FirebaseConnection.getGeo()
    var timeStamp = Date.now()
    //uses global var (will break function if called instantly)
    var userPosition = coordinates
    photoObject = { photoUrl: url, createdAt: timeStamp }
    geo.insertByLoc(userPosition, photoObject)
  },
  updateCoordinateListener: function(controller) {
    controller.geo.offPointsNearLoc(controller.coordinates, controller.radius)
    controller.geo.onPointsNearLoc(coordinates, controller.radius, function(array) {
      controller.updatePhotoStream(array);
    })
  }
}