var friendList = require("../data/friends.js");

module.exports = function(app){
  //a GET route that displays JSON of all possible Pokemon //
  app.get("/api/friends", function(req,res){
    res.json(friendList);
  });

  app.post("/api/friends", function(req,res){
    // Takes the new friend's scores to compare with friends in friendList array //
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    // Runs through all current friends in list //
    for(var i=0; i<friendList.length; i++){
      var scoresDiff = 0;
      // Runs through scores to compare friends //
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      // Pushes the results into scoresArray //
      scoresArray.push(scoresDiff);
    }

    // Finds the best friend match after all are compared in the array //
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    // Returns bestMatch data //
    var bff = friendList[bestMatch];
    res.json(bff);

    // Pushes new submission into the friendsList array //
    friendList.push(req.body);
  });
};