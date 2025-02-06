for(i = 0; i <2; i++)
    {
      //do stuff
      console.log(i); 
      $("#bedOne").append('<div class="pillow">pillow</div>');
      $("#bedTwo").append('<div class="pillow">pillow</div>');
    
    }

    $("#Funny-seal").draggable(); 

// Help from JqueryUI.com and w3Schools
$(document).on("mouseup", (event) => {
  if (event.target.id === "Funny-seal") {
    const position = $("#Funny-seal").position();
    console.log("Your position is:", position.left, "and", position.top);
  }
});