function displayInfo(selection) {
  $(".startHidden").hide();
  if(selection === "harpyEagle"){
    $("#harpyEagleCard").toggle();
    $("#harpyEagleTitle").toggle();
    $("#harpyEagleImg").toggle();
    $("#harpyEagleText").toggle();
  } else if(selection === "jellyfish"){
    $("#jellyfishCard").toggle();
    $("#jellyfishTitle").toggle();
    $("#jellyfishImg").toggle();
    $("#jellyfishText").toggle();
  } else if(selection === "tardigrade"){
    $("#tardigradeCard").toggle();
    $("#tardigradeTitle").toggle();
    $("#tardigradeImg").toggle();
    $("#tardigradeText").toggle();
  } else if(selection === "elephant"){
    $("#elephantCard").toggle();
    $("#elephantTitle").toggle();
    $("#elephantImg").toggle();
    $("#elephantText").toggle();
  } else {
    alert("BAD");
  }
}

$(document).ready(function() {
  // $(".harpyEagle").click(function() {
  //   $("#harpyEagleImg").toggle();
  //   $("#harpyEagleText").toggle();
  // })
  // $(".jellyfish").click(function() {
  //   $("#jellyfishImg").toggle();
  //   $("#jellyfishText").toggle();
  // })
  // $(".tardigrade").click(function() {
  //   $("#tardigradeImg").toggle();
  //   $("#tardigradeText").toggle();
  // })
  // $(".elephant").click(function() {
  //   $("#elephantImg").toggle();
  //   $("#elephantText").toggle();
  // })
  $("#formOne").submit(function(event){
    event.preventDefault();
    const selection = $("#animalPick").val();
    displayInfo(selection);
  });

});

