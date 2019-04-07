var randomScore = Math.floor(Math.random() * 101) + 19;
$(".randomScore").html(randomScore)

var rand;
var sum = 0
var win = 0
var losses = 0
var mycaracterhelth = Math.floor(Math.random() * 60) + 120;
var defenderhelth = Math.floor(Math.random() * 60) + 120;
selected_image = ""
select_attacked = true
select_defender = false

var images = $("img")

$("img").on("click", function () {
    selected_image = $(this).get(0)
    
    if (select_attacked) {
        for (let i = 0; i < images.length; i++) {
            console.log("for")
            if (images[i].id === selected_image.id) {
                
                $("#selected-character").append(selected_image)
                select_attacked = false
                select_defender = true
                $("#helth-selected").html("Your Helth : " +  mycaracterhelth)
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

$("#attack-button").on("click",function(){
    let attack = Math.floor(Math.random() * 15) + 25 + 30;
    let defend = Math.floor(Math.random() * 15) + 25;
    mycaracterhelth -= defend
    defenderhelth -= attack 
    $("#chat").html("your attack :" + attack + "\n" + "defender attack : " + defend)
    if (mycaracterhelth <= 0) {
        alert("Defender is win! you loses!")
    }else if (defenderhelth <= 0 ){
        alert("You Win! defender loses")
        get_fighter()
        $("#defender").empty()
        defenderhelth =  Math.floor(Math.random() * 60) + 120;;
    }
    $("#helth-selected").html("Your Helth : " +  mycaracterhelth)
    $("#helth-defender").html("defender health : " + defenderhelth)
  
})


