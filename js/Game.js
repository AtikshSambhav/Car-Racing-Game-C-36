class Game {
  constructor(){

  }

  //Reading the value From DB
  //refer,read(listener),retreive.
  getState(){
    var gameStateRef= database.ref('gameState');
    gameStateRef.on("value",function(data){
      gameState= data.val();
    })
  }

  //Write the valuse to DB
  //refer,update
  update(state){
    database.ref('/').update({
      gameState:state
    })
  }

  start(){
    if(gameState===0){

      //Player
      player=new Player();
      player.getCount();

      //Form
      form=new Form();
      form.display();

    }
  }



  
}
