var randomScore = Math.floor(Math.random() * 101) + 19;
$(".randomScore").html(randomScore)

var rand;
var sum = 0
var win = 0
var losses = 0
var mycharacterhelth = Math.floor(Math.random() * 60) + 120;
var defenderhelth = Math.floor(Math.random() * 60) + 120;
selected_image = ""
select_attacked = true
select_defender = false

var imgPath=["./assets/images/darth-sidious.png","./assets/images/luke-skywalker.jpg","./assets/images/obi-wan.jpg","./assets/images/darth-maul.jpg"]

function load(){
    for(let i=0;i<4;i++){
        let images = $("<img>")
        $(images).attr('src',imgPath[i])
        $("#selected-character-section").append(images)
}
}
var images=[]
$(document).ready(function(){
    load()
    images=$("img")
})

$(document).on("click","img", function () {
    selected_image = $(this).get(0)
    
    if (select_attacked) {
        for (let i = 0; i < images.length; i++) {
            console.log("for")
            if (images[i].id === selected_image.id) {
                
                $("#selected-character").append(selected_image)
                select_attacked = false
                select_defender = true
                $("#helth-selected").html("Your Helth : " +  mycharacterhelth)
            }
        }
    }
    else if (select_defender) {
        for (let i = 0; i < images.length; i++) {
            if (images[i].id === selected_image.id) {
                $("#defender").append(selected_image)
                select_defender = false
                $("#helth-defender").html("defender health : " + defenderhelth)
            }
        }
    }
    

    
})

function get_fighter() {
    select_defender = true
}

function reStart(){
    $(".re-start").hide();
    
    sum=0;
    win=0;
    losses=0;
    
    $("#selected-character-section").empty()
    $("#selected-character").empty();
    $("#helth-selected").html("")
    $("#defender").empty();
    $(".caracter").empty();


}

$(".re-start").on("click",function(){
    reStart();
    // <div id="selected-character"></div>

	// 		<h4 id="helth-selected"></h4>
    let div=$("<div>");
    div.attr("id","selected-character");
    let h4=$("<h4>");
h4.attr("id","helth-selected");
    $("#selected-character-section").append(h4)
    $("#selected-character-section").append(div);

    load()
})

$("#attack-button").on("click",function(){
    //mycharacterhealth
    if(mycharacterhelth>0){

        let attack = Math.floor(Math.random() * 15) + 25 + 30;
        let defend = Math.floor(Math.random() * 15) + 25;
        mycharacterhelth -= defend
        defenderhelth -= attack 
        $("#chat").html("your attack :" + attack + "\n" + "defender attack : " + defend)
        if (mycharacterhelth <= 0) {
            alert("Defender is win! you loses!")
            
        }
        else if (defenderhelth <= 0 ){
            alert("You Win! defender loses")
            get_fighter()
            $("#defender").empty()
            defenderhelth =  Math.floor(Math.random() * 60) + 120;
        }
        $("#helth-selected").html("Your Helth : " +  mycharacterhelth)
        $("#helth-defender").html("defender health : " + defenderhelth)
    }else {
        $(".re-start").show();
        
    }
  
})


