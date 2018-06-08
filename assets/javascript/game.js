var anakinHP = 330;
var vaderHP = 400;
var lukeHP = 350;
var maulHP = 375;
var luke = 0;
var anakin = 0;
var maul = 0;
var vader = 0;
var lukeAttack = 15;
var anakinAttack = 10;
var vaderAttack = 30;
var maulAttack = 25;
var attackStart = Math.floor(Math.random() * 10);
var attackIncrement = 0;
var finished = 0;




function setup () {
    $("#theForce").html("");
    $("#announcements").html("");
    $("#theForce2").html("<h2>Character Chosen:</h2>");
    $("#theForce3").html("<h2>Your Opponent:</h2>");
    $("#theForce4").html("<h2>The Enemies:</h2>");
    $("#theForce5").html("<h2>Defeated Enemies:</h2>");
    var m = $("<button>")
    m.attr({type:"button",id:"attack"})
    m.addClass("action btn btn-danger my-2")
    m.text("Attack!")
    $("#putButtonHere").append(m);
    $("#attack").on("click",function() {
        attacked();
    })
}

//If no one selected (i.e. anakin equals 0 AND vader equals 0 AND maul equals 0) put Luke as the character selected
$("#lukeSkywalker").on("click", function() {
    if (anakin === 0 && vader === 0 && maul === 0) {
        setup();
        var x = $("#lukeContainer")
        var y = $("#luke")
        y.text("Luke Skywalker").append("<br> HP: ",lukeHP);
        $("#theForce2").append(x,"<br>");
        luke = 1;
        character = 1;
        checkFunction()
    }
//If someone has been selected (i.e. character equals 1), then put Luke as the opponent
    else if ((character === 1) && (maul !== 2) && (vader !== 2) && (anakin !== 2)) {
        var x = $("#lukeContainer")
        var y = $("#luke")
        y.text("Luke Skywalker").append("<br> HP: ",lukeHP)
        $("#theForce3").append(x);
        luke = 2;
    }

//If Anakin currently the "opponent", swap him out for Luke
    else if (anakin === 2) {
        anakin = 0;
        var x = $("#anakinContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#lukeContainer")
        $("#theForce3").append(y);
        luke = 2;
    }

//If Maul currently the "opponent", swap him out for Luke
    else if (maul === 2) {
        maul = 0;
        var x = $("#maulContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#lukeContainer")
        $("#theForce3").append(y);
        luke = 2;
    }

//If Vader currently the "opponent", swap him out for Luke
    else if (vader === 2) {
        vader = 0;
        var x = $("#vaderContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#lukeContainer")
        $("#theForce3").append(y);
        luke = 2;
    }

})

//If no one selected (i.e. all 4 characters === 0) put Anakin as the character selected
$("#anakinSkywalker").on("click", function() {
    if (anakin === 0 && luke === 0 && vader === 0 && maul === 0) {
        setup();
        var x = $("#containAnakin")
        var y = $("#anakin")
        y.text("Anakin Skywalker").append("<br>HP: ",anakinHP)
        $("#theForce2").append(x,"<br>");
        anakin = 1;
        character = 1;
        checkFunction()
    }

//If someone has been selected (i.e. character equals 1), then put Anakin as the opponent
    else if ((character === 1) && (anakin !==1) && (luke !== 2) && (vader !== 2) && (maul !== 2)) {
        var x = $("#containAnakin")
        $("#theForce3").append(x);
        anakin = 2;
    }

//If Luke currently the "opponent", swap him out for Anakin
    else if (luke === 2) {
        luke = 0;
        var x = $("#lukeContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#containAnakin")
        $("#theForce3").append(y);
        anakin = 2;
    }
//If Maul currently the "opponent", swap him out for Anakin

    else if (maul === 2) {
        maul = 0;
        var x = $("#maulContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#containAnakin")
        $("#theForce3").append(y);
        anakin = 2;
    }
//If Vader currently the "opponent", swap him out for Anakin
    else if (vader === 2) {
        vader = 0;
        var x = $("#vaderContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#containAnakin")
        $("#theForce3").append(y);
        anakin = 2;
    
    }
})

//If no one selected (i.e. all 4 characters === 0) put Maul as the character selected

$("#darthMaul").on("click", function() {
    if (maul === 0 && luke === 0 && vader === 0 && anakin === 0) {
        setup();
        $("#theForce").html("")
        var x = $("#maulContainer")
        var y = $("#maul")
        y.text("Darth Maul").append("<br>HP: ",maulHP)
        $("#theForce2").append(x,"<br>");
        maul = 1;
        character = 1;
        checkFunction();
    }

//If someone has been selected (i.e. character equals 1), then put Maul as the opponent

    else if ((character === 1) && (maul !== 1) && (luke !== 2) && (vader !== 2) && (anakin !== 2)) {
        var x = $("#maulContainer")
        $("#theForce3").append(x);
        maul = 2;
    }

//If Luke currently the "opponent", swap him out for Maul

    else if (luke === 2) {
            luke = 0;
            var x = $("#lukeContainer");
            $("#theForce4").append(x,"<br>");
            var y = $("#maulContainer")
            $("#theForce3").append(y);
            maul = 2;
        }
//If Anakin currently the "opponent", swap him out for Maul

    else if (anakin === 2) {
            anakin = 0;
            var x = $("#containAnakin");
            $("#theForce4").append(x,"<br>");
            var y = $("#maulContainer")
            $("#theForce3").append(y);
            maul = 2;
        }

//If Vader currently the "opponent", swap him out for Maul
    else if (vader === 2) {
            vader = 0;
            var x = $("#vaderContainer");
            $("#theForce4").append(x,"<br>");
            var y = $("#maulContainer")
            $("#theForce3").append(y);
            maul = 2;
        
        }
})

//If no one selected (i.e. all 4 characters === 0) put Vader as the character selected

$("#darthVader").on("click", function() {
    if (vader === 0 && luke === 0 && maul === 0 && anakin === 0) {
        setup();
        var x = $("#vaderContainer")
        var y = $("#vader")
        y.text("Darth Vader").append("<br> HP: ",vaderHP);
        $("#theForce2").append(x,"<br>");
        vader = 1;
        character = 1;
        checkFunction()
    }
//If someone has been selected (i.e. character equals 1), then put Vader as the opponent

    else if ((character === 1) && (vader !== 1) && (luke !== 2) && (maul !== 2) && (anakin !== 2)) {
        var x = $("#vaderContainer")
        $("#theForce3").append(x);
        vader = 2;
    }

//If Anakin currently the "opponent", swap him out for Vader

    else if (anakin === 2) {
        anakin = 0;
        var x = $("#containAnakin");
        $("#theForce4").append(x,"<br>");
        var y = $("#vaderContainer")
        $("#theForce3").append(y);
        vader = 2;
    }
//If Maul currently the "opponent", swap him out for Vader

    else if (maul === 2) {
        maul = 0;
        var x = $("#maulContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#vaderContainer")
        $("#theForce3").append(y);
        vader = 2;
    }

//If Luke currently the "opponent", swap him out for Vader

    else if (luke === 2) {
        luke = 0;
        var x = $("#lukeContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#vaderContainer")
        $("#theForce3").append(y);
        vader = 2;
    }
})

//if XYZ character is selected as the player, then assign the other 3 to "the Enemies"
function checkFunction ()  {

    
    if (luke === 1) {
        var x = $("#containAnakin")
        var a = $("#anakin")
        a.text("Anakin Skywalker").append("<br> HP: ",anakinHP)
        var y = $("#maulContainer")
        var b = $("#maul")
        b.text("Darth Maul").append("<br> HP: ",maulHP)
        var z = $("#vaderContainer")
        var c = $("#vader")
        c.text("Darth Vader").append("<br> HP: ",vaderHP)
        $("#theForce4").append(x,"<br>");
        $("#theForce4").append(y,"<br>");
        $("#theForce4").append(z,"<br>");
       

    }

    else if (anakin === 1) {
        var x = $("#lukeContainer")
        var a = $("#luke")
        a.text("Luke Skywalker").append("<br> HP: ",lukeHP)
        var y = $("#maulContainer")
        var b = $("#maul")
        b.text("Darth Maul").append("<br> HP: ",maulHP)
        var z = $("#vaderContainer")
        var c = $("#vader")
        c.text("Darth Vader").append("<br> HP: ",vaderHP)
        $("#theForce4").append(x,"<br>");
        $("#theForce4").append(y,"<br>");
        $("#theForce4").append(z,"<br>");

    }

    else if (maul === 1) {
        var x = $("#lukeContainer")
        var a = $("#luke")
        a.text("Luke Skywalker").append("<br> HP: ",lukeHP)
        var y = $("#containAnakin")
        var b = $("#anakin")
        b.text("Anakin Skywalker").append("<br> HP: ",anakinHP)
        var z = $("#vaderContainer")
        var c = $("#vader")
        c.text("Darth Vader").append("<br> HP: ",vaderHP)
        $("#theForce4").append(x,"<br>");
        $("#theForce4").append(y,"<br>");
        $("#theForce4").append(z,"<br>");

    }

    else if (vader === 1) {
        var x = $("#lukeContainer")
        var a = $("#luke")
        a.text("Luke Skywalker").append("<br> HP: ",lukeHP)
        var y = $("#containAnakin")
        var b = $("#anakin")
        b.text("Anakin Skywalker").append("<br> HP: ",anakinHP)
        var z = $("#maulContainer")
        var c = $("#maul")
        c.text("Darth Maul").append("<br> HP: ",maulHP)
        $("#theForce4").append(x,"<br>");
        $("#theForce4").append(y,"<br>");
        $("#theForce4").append(z,"<br>");

    }
}

//Attack! when the attack button is pressed...


function attacked() {
//check against no characters selected yet
    if (character === 0) {
        return character;
    }
//Luke is player against Anakin--take away health from Anakin; if Anakin goes 0 or negative, put him in defeated and prompt for next
    else if (luke === 1 && anakin === 2) {
        lukeAttack+=Math.floor(Math.random() * 10)
        anakinHP-=lukeAttack
        if (anakinHP > 0) {
            var x = $("#containAnakin")
            var y = $("#anakin")
            y.text("Anakin Skywalker").append("<br> HP: ",anakinHP);
            $("#theForce3").append(x)
        } else {
            var x = $("#containAnakin")
            var y = $("#anakin")
            y.text("Anakin Skywalker").append("<br> HP: ",0);
            $("#theForce5").append(x)
            anakin = 0;
            finished++; 
            $("#announcements").html("<h2>You've Defeated Anakin Skywalker! Select your next opponent<h2>");
            checkEnd();
        }
//Luke is player against Anakin--take away health from Luke if Anakin is still alive; if luke goes negative or 0--loser
if (anakinHP > 0) {
            lukeHP-=anakinAttack;
            if (lukeHP > 0) {
                var x = $("#lukeContainer");
                var y = $("#luke");
                y.text("Luke Skywalker").append("<br> HP: ",lukeHP);
                $("#theForce2").append(x)
            } else { 
                var x = $("#lukeContainer");
                var y = $("#luke");
                y.text("Luke Skywalker").append("<br> HP: ",0);
                $("#theForce2").append(x)
                anakin = 0; 
                $("#announcements").html("<h2>LOSER! You've just been defeated by the force. Go find Yoda and train more.<h2>");
            }
        
        } else {return anakinHP}
    }
        
//Luke is player against Vader--take away health from Vader; if Vader goes 0 or negative, put him in defeated and prompt for next

    else if (luke === 1 && vader === 2) {
        lukeAttack+=Math.floor(Math.random() * 10)
        vaderHP-=lukeAttack
        if (vaderHP > 0) {
            var x = $("#vaderContainer")
            var y = $("#vader")
            y.text("Darth Vader").append("<br> HP: ",vaderHP)
            $("#theForce3").append(x);
        } else {
            var x = $("#vaderContainer")
            var y = $("#vader")
            y.text("Darth Vader").append("<br> HP: ",0)
            $("#theForce5").append(x);
            vader = 0;
            finished++; 
            $("#announcements").html("<h2>You've Defeated Darth Vader! Select your next opponent<h2>");
            checkEnd();
        }
//Luke is player against Vader--take away health from Luke if Vader is still alive; if luke goes negative or 0--loser

        if (vaderHP > 0) {
            lukeHP-=vaderAttack;
            if (lukeHP > 0) {
                var x = $("#lukeContainer");
                var y = $("#luke")
                y.text("Luke Skywalker").append("<br> HP: ",lukeHP)
                $("#theForce2").append(x);
            } else { 
                var x = $("#lukeContainer");
                var y = $("#luke")
                y.text("Luke Skywalker").append("<br> HP: ",0)
                $("#theForce2").append(x);
                vader = 0; 
                $("#announcements").html("<h2>LOSER! You've just been defeated by the force. Go find Yoda and train more.<h2>");
            }
        
        } else {return vaderHP}
    }

//pattern continues as described. character === 1 is the player; character === 2 is the opponent
    

    else if (luke === 1 && maul === 2) {
        lukeAttack+=Math.floor(Math.random() * 10)
        maulHP-=lukeAttack
        if (maulHP > 0) {
            var x = $("#maulContainer");
                var y = $("#maul")
                y.text("Darth Maul").append("<br> HP: ",maulHP)
                $("#theForce3").append(x);
        } else {
            var x = $("#maulContainer");
            var y = $("#maul")
            y.text("Darth Maul").append("<br> HP: ",0)
            $("#theForce5").append(x);
            maul = 0;
            finished++; 
            $("#announcements").html("<h2>You've Defeated Darth Maul! Select your next opponent<h2>");
            checkEnd();
        }

        if (maulHP > 0) {
            lukeHP-=maulAttack;
            if (lukeHP > 0) {
                var x = $("#lukeContainer");
                var y = $("#luke")
                y.text("Luke Skywalker").append("<br> HP: ",lukeHP)
                $("#theForce2").append(x);
            } else { 
                var x = $("#lukeContainer");
                var y = $("#luke")
                y.text("Luke Skywalker").append("<br> HP: ",0)
                $("#theForce2").append(x);
                maul = 0; 
                $("#announcements").html("<h2>LOSER! You've just been defeated by the force. Go find Yoda and train more.<h2>");
            }
        
        } else {return maulHP}
    }

    else if (anakin === 1 && luke === 2) {
        anakinAttack+=Math.floor(Math.random() * 10)
        lukeHP-=anakinAttack
        if (lukeHP > 0) {
            var x = $("#lukeContainer")
            var y = $("#luke")
            y.text("Luke Skywalker").append("<br> HP: ",lukeHP)
            $("#theForce3").append(x);
        } else {
            var x = $("#lukeContainer")
            var y = $("#luke")
            y.text("Luke Skywalker").append("<br> HP: ",0)
            $("#theForce5").append(x);
            luke = 0;
            finished++; 
            $("#announcements").html("<h2>You've Defeated Luke Skywalker! Select your next opponent<h2>");
            checkEnd();
        }

        if (lukeHP > 0) {
            anakinHP-=lukeAttack;
            if (anakinHP > 0) {
                var x = $("#containAnakin");
                var y = $("#anakin")
                y.text("Anakin Skywalker").append("<br> HP: ",anakinHP)
                $("#theForce2").append(x)
            } else { 
                var x = $("#containAnakin");
                var y = $("#anakin")
                y.text("Anakin Skywalker").append("<br> HP: ",0)
                $("#theForce2").append(x)
                luke = 0; 
                $("#announcements").html("<h2>LOSER! You've just been defeated by the force. Go find Yoda and train more.<h2>");
            }
        
        } else {return lukeHP}
    }

    else if (anakin === 1 && maul === 2) {
        anakinAttack+=Math.floor(Math.random() * 10)
        maulHP-=anakinAttack
        if (maulHP > 0) {
            var x = $("#maulContainer");
            var y = $("#maul");
            y.text("Darth Maul").append("<br> HP: ",maulHP)
            $("#theForce3").append(x);
        } else {
            var x = $("#maulContainer");
            var y = $("#maul");
            y.text("Darth Maul").append("<br> HP: ",0)
            $("#theForce5").append(x);
            maul = 0;
            finished++; 
            $("#announcements").html("<h2>You've Defeated Darth Maul! Select your next opponent<h2>");
            checkEnd();
        }

        if (maulHP > 0) {
            anakinHP-=maulAttack;
            if (anakinHP > 0) {
                var x = $("#containAnakin");
                var y = $("#anakin")
                y.text("Anakin Skywalker").append("<br> HP: ",anakinHP)
                $("#theForce2").append(x)
            } else { 
                var x = $("#containAnakin");
                var y = $("#anakin")
                y.text("Anakin Skywalker").append("<br> HP: ",0)
                $("#theForce2").append(x)
                maul = 0; 
                $("#announcements").html("<h2>LOSER! You've just been defeated by the force. Go find Yoda and train more.<h2>");
            }
        
        } else {return maulHP}
    }

    else if (anakin === 1 && vader === 2) {
        anakinAttack+=Math.floor(Math.random() * 10)
        vaderHP-=anakinAttack
        if (vaderHP > 0) {
            var x = $("#vaderContainer")
            var y = $("#vader")
            y.text("Darth Vader").append("<br> HP: ",vaderHP)
            $("#theForce3").append(x);
        } else {
            var x = $("#vaderContainer")
            var y = $("#vader")
            y.text("Darth Vader").append("<br> HP: ",0)
            $("#theForce5").append(x);
            vader = 0;
            finished++; 
            $("#announcements").html("<h2>You've Defeated Darth Vader! Select your next opponent<h2>");
            checkEnd();
        }

        if (vaderHP > 0) {
            anakinHP-=vaderAttack;
            if (anakinHP > 0) {
                var x = $("#containAnakin");
                var y = $("#anakin")
                y.text("Anakin Skywalker").append("<br> HP: ",anakinHP)
                $("#theForce2").append(x)
            } else { 
                var x = $("#containAnakin");
                var y = $("#anakin")
                y.text("Anakin Skywalker").append("<br> HP: ",0)
                $("#theForce2").append(x)
                vader = 0; 
                $("#announcements").html("<h2>LOSER! You've just been defeated by the force. Go find Yoda and train more.<h2>");
            }
        
        } else {return vaderHP}
    }

    else if (vader === 1 && luke === 2) {
        vaderAttack+=Math.floor(Math.random() * 10)
        lukeHP-=vaderAttack
        if (lukeHP > 0) {
            var x = $("#lukeContainer")
            var y = $("#luke")
            y.text("Luke Skywalker").append("<br> HP: ",lukeHP)
            $("#theForce3").append(x);
        } else {
            var x = $("#lukeContainer")
            var y = $("#luke")
            y.text("Luke Skywalker").append("<br> HP: ",0)
            $("#theForce5").append(x);
            luke = 0;
            finished++; 
            $("#announcements").html("<h2>You've Defeated Luke Skywalker! Select your next opponent<h2>");
            checkEnd();
        }

        if (lukeHP > 0) {
            vaderHP-=lukeAttack;
            if (vaderHP > 0) {
                var x = $("#vaderContainer");
                var y = $("#vader")
                y.text("Darth Vader").append("<br> HP: ",vaderHP);
                $("theForce2").append(x);
            } else { 
                var x = $("#vaderContainer");
                var y = $("#vader")
                y.text("Darth Vader").append("<br> HP: ",0);
                $("theForce2").append(x);
                luke = 0; 
                $("#announcements").html("<h2>LOSER! You've just been defeated by the force. Go find Yoda and train more.<h2>");
            }
        
        } else {return lukeHP}
    }

    else if (vader === 1 && anakin === 2) {
        vaderAttack+=Math.floor(Math.random() * 10)
        anakinHP-=vaderAttack
        if (anakinHP > 0) {
            var x = $("#containAnakin")
            var y = $("#anakin")
            y.text("Anakin Skywalker").append("<br> HP: ",anakinHP);
            $("#theForce3").append(x)
        } else {
            var x = $("#containAnakin")
            var y = $("#anakin")
            y.text("Anakin Skywalker").append("<br> HP: ",0);
            $("#theForce5").append(x)
            anakin = 0;
            finished++; 
            $("#announcements").html("<h2>You've Defeated Anakin Skywalker! Select your next opponent<h2>");
            checkEnd();
        }

        if (anakinHP > 0) {
            vaderHP-=anakinAttack;
            if (vaderHP > 0) {
                var x = $("#vaderContainer");
                var y = $("#vader")
                y.text("Darth Vader").append("<br> HP: ",vaderHP);
                $("theForce2").append(x);
            } else { 
                var x = $("#vaderContainer");
                var y = $("#vader")
                y.text("Darth Vader").append("<br> HP: ",0);
                $("theForce2").append(x);
                anakin = 0; 
                $("#announcements").html("<h2>LOSER! You've just been defeated by the force. Go find Yoda and train more.<h2>");
            }
        
        } else {return anakinHP}
    }

    else if (vader === 1 && maul === 2) {
        vaderAttack+=Math.floor(Math.random() * 10)
        maulHP-=vaderAttack
        if (maulHP > 0) {
            var x = $("#maulContainer");
            var y = $("#maul");
            y.text("Darth Maul").append("<br> HP: ",maulHP)
            $("#theForce3").append(x);
        } else {
            var x = $("#maulContainer");
            var y = $("#maul");
            y.text("Darth Maul").append("<br> HP: ",0)
            $("#theForce5").append(x);
            maul = 0;
            finished++; 
            $("#announcements").html("<h2>You've Defeated Darth Maul! Select your next opponent<h2>");
            checkEnd();
        }

        if (maulHP > 0) {
            vaderHP-=maulAttack;
            if (vaderHP > 0) {
                var x = $("#vaderContainer");
                var y = $("#vader")
                y.text("Darth Vader").append("<br> HP: ",vaderHP);
                $("theForce2").append(x);
            } else { 
                var x = $("#vaderContainer");
                var y = $("#vader")
                y.text("Darth Vader").append("<br> HP: ",0);
                $("theForce2").append(x);
                maul = 0; 
                $("#announcements").html("<h2>LOSER! You've just been defeated by the force. Go find Yoda and train more.<h2>");
            }
        
        } else {return maulHP}
    }

    else if (maul === 1 && luke === 2) {
        maulAttack+=Math.floor(Math.random() * 10)
        lukeHP-=maulAttack
        if (lukeHP > 0) {
            var x = $("#lukeContainer")
            var y = $("#luke")
            y.text("Luke Skywalker").append("<br> HP: ",lukeHP)
            $("#theForce3").append(x);
        } else {
            var x = $("#lukeContainer")
            var y = $("#luke")
            y.text("Luke Skywalker").append("<br> HP: ",0)
            $("#theForce5").append(x);
            luke = 0;
            finished++; 
            $("#announcements").html("<h2>You've Defeated Luke Skywalker! Select your next opponent<h2>");
            checkEnd();
        }

        if (lukeHP > 0) {
            maulHP-=lukeAttack;
            if (maulHP > 0) {
                var x = $("#maulContainer");
                var y = $("#maul");
                y.text("Darth Maul").append("<br> HP: ",maulHP)
                $("#theForce2").append(x);
            } else { 
                var x = $("#maulContainer");
                var y = $("#maul");
                y.text("Darth Maul").append("<br> HP: ",0)
                $("#theForce2").append(x);
                luke = 0; 
                $("#announcements").html("<h2>LOSER! You've just been defeated by the force. Go find Yoda and train more.<h2>");
            }
        
        } else {return lukeHP}
    }

    else if (maul === 1 && anakin === 2) {
        maulAttack+=Math.floor(Math.random() * 10)
        anakinHP-=maulAttack
        if (anakinHP > 0) {
            var x = $("#containAnakin")
            var y = $("#anakin")
            y.text("Anakin Skywalker").append("<br> HP: ",anakinHP);
            $("#theForce3").append(x)
        } else {
            var x = $("#containAnakin")
            var y = $("#anakin")
            y.text("Anakin Skywalker").append("<br> HP: ",0);
            $("#theForce5").append(x)
            anakin = 0;
            finished++; 
            $("#announcements").html("<h2>You've Defeated Anakin Skywalker! Select your next opponent<h2>");
            checkEnd();
        }

        if (anakinHP > 0) {
            maulHP-=anakinAttack;
            if (maulHP > 0) {
                var x = $("#maulContainer");
                var y = $("#maul");
                y.text("Darth Maul").append("<br> HP: ",maulHP)
                $("#theForce2").append(x);
            } else { 
                var x = $("#maulContainer");
                var y = $("#maul");
                y.text("Darth Maul").append("<br> HP: ",0)
                $("#theForce2").append(x);
                anakin = 0; 
                $("#announcements").html("<h2>LOSER! You've just been defeated by the force. Go find Yoda and train more.<h2>");
            }
        
        } else {return anakinHP}
    }

    else if (maul === 1 && vader === 2) {
        maulAttack+=Math.floor(Math.random() * 10)
        vaderHP-=maulAttack
        if (vaderHP > 0) {
            var x = $("#vaderContainer")
            var y = $("#vader")
            y.text("Darth Vader").append("<br> HP: ",vaderHP)
            $("#theForce3").append(x);
        } else {
            var x = $("#vaderContainer")
            var y = $("#vader")
            y.text("Darth Vader").append("<br> HP: ",0)
            $("#theForce5").append(x);
            vader = 0;
            finished++; 
            $("#announcements").html("<h2>You've Defeated Darth Vader! Select your next opponent<h2>");
            checkEnd();
        }

        if (vaderHP > 0) {
            maulHP-=vaderAttack;
            if (maulHP > 0) {
                var x = $("#maulContainer");
                var y = $("#maul");
                y.text("Darth Maul").append("<br> HP: ",maulHP)
                $("#theForce2").append(x);
            } else { 
                var x = $("#maulContainer");
                var y = $("#maul");
                y.text("Darth Maul").append("<br> HP: ",0)
                $("#theForce2").append(x);
                vader = 0; 
                $("#announcements").html("<h2>LOSER! You've just been defeated by the force. Go find Yoda and train more.<h2>");
            }
        
        } else {return vaderHP}
    }

}

//if character wins against all 3 enemies
function checkEnd() {
    if (finished === 3) {
        $("#announcements").html("<h1>You've Defeated All of Your Enemies! May the Force be with You...</h1>")
    }
}
