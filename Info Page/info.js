var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");

item1.addEventListener("click", function(){
    info1.innerHTML = "Ruin";
    info2.innerHTML ="This character is a Ruin, this character has the ability to slam into the ground and blast away nearby enemies.";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "Spectre";
    info2.innerHTML = "This character is a Spectre, this character has the abitlity to have a stealth cloak.";
});
item3.addEventListener("click", function(){
    info1.innerHTML = "Outrider";
    info2.innerHTML = "This character is a Outrider, this character has the ability to eliminate enemies with complete percision using a Bow and explosive arrow.";
});
item4.addEventListener("click", function(){
    info1.innerHTML = "Prophet";
    info2.innerHTML = "This character has the ability to use a weapon that is capable of electrocuting enemies";
});
