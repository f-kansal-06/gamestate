class Game {
    constructor(){

    }
  getState(){
var gamestateRef = database.ref("gameState");
gamestateRef.on("value",function(data){
    gameState = data.val()
})

    }
    update(state){
     database.ref("/").update({
    gameState : state 
     })
    }
  async start(){
       if(gameState===0){
           player = new Player();
          var playerC = await database.ref("playerCount").once("value");
          if(playerC.exists()){
        playerCount = playerC.val()
        player.getCount()
          }
           form = new Form();
        form.display();

       } 
   }
  play(){
      form.hide();
      textSize(30);
      text("game start",150,150);
  }
}