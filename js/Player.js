class Player {
  constructor(){}

  //refer,read(making a listener),retreive
    getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  //refer and update
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  //refer and update
  update(name){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:name
    });
  }
}
