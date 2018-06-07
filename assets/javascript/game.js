var anakinHP = 125;
var vaderHP = 220;
var lukeHP = 165;
var maulHP = 250;
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


$("#lukeSkywalker").on("click", function() {
    if (anakin === 0 && vader === 0 && maul === 0) {
        var x = $("#lukeContainer")
        var y = $("#luke")
        y.text("Luke Skywalker").append("<br> HP: ",lukeHP);
        $("#theForce2").append(x,"<br>");
        luke = 1;
        character = 1;
        checkFunction()
    }

    else if ((character === 1) && (maul !== 2) && (vader !== 2) && (anakin !== 2)) {
        var x = $("#lukeContainer")
        var y = $("#luke")
        y.text("Luke Skywalker").append("<br> HP: ",lukeHP)
        $("#theForce3").append(x);
        luke = 2;
    }

    else if (anakin === 2) {
        anakin = 0;
        var x = $("#anakinContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#lukeContainer")
        $("#theForce3").append(y);
        luke = 2;
    }
    else if (maul === 2) {
        maul = 0;
        var x = $("#maulContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#lukeContainer")
        $("#theForce3").append(y);
        luke = 2;
    }
    else if (vader === 2) {
        vader = 0;
        var x = $("#vaderContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#lukeContainer")
        $("#theForce3").append(y);
        luke = 2;
    }

})

$("#anakinSkywalker").on("click", function() {
    if (anakin === 0 && luke === 0 && vader === 0 && maul === 0) {
        var x = $("#containAnakin")
        var y = $("#anakin")
        y.text("Anakin Skywalker").append("<br>HP: ",anakinHP)
        $("#theForce2").append(x,"<br>");
        anakin = 1;
        character = 1;
        checkFunction()
    }

    else if ((character === 1) && (anakin !==1) && (luke !== 2) && (vader !== 2) && (maul !== 2)) {
        var x = $("#containAnakin")
        $("#theForce3").append(x);
        anakin = 2;
    }

    else if (luke === 2) {
        luke = 0;
        var x = $("#lukeContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#containAnakin")
        $("#theForce3").append(y);
        anakin = 2;
    }
    else if (maul === 2) {
        maul = 0;
        var x = $("#maulContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#containAnakin")
        $("#theForce3").append(y);
        anakin = 2;
    }
    else if (vader === 2) {
        vader = 0;
        var x = $("#vaderContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#containAnakin")
        $("#theForce3").append(y);
        anakin = 2;
    
    }
})

$("#darthMaul").on("click", function() {
    if (maul === 0 && luke === 0 && vader === 0 && anakin === 0) {
        $("#theForce").html("")
        var x = $("#maulContainer")
        var y = $("#maul")
        y.text("Darth Maul").append("<br>HP: ",maulHP)
        $("#theForce2").append(x,"<br>");
        maul = 1;
        character = 1;
        checkFunction();
    }

    else if ((character === 1) && (maul !== 1) && (luke !== 2) && (vader !== 2) && (anakin !== 2)) {
        var x = $("#maulContainer")
        $("#theForce3").append(x);
        maul = 2;
    }

    
    else if (luke === 2) {
            luke = 0;
            var x = $("#lukeContainer");
            $("#theForce4").append(x,"<br>");
            var y = $("#maulContainer")
            $("#theForce3").append(y);
            maul = 2;
        }
    else if (anakin === 2) {
            anakin = 0;
            var x = $("#containAnakin");
            $("#theForce4").append(x,"<br>");
            var y = $("#maulContainer")
            $("#theForce3").append(y);
            maul = 2;
        }
    else if (vader === 2) {
            vader = 0;
            var x = $("#vaderContainer");
            $("#theForce4").append(x,"<br>");
            var y = $("#maulContainer")
            $("#theForce3").append(y);
            maul = 2;
        
        }
})

$("#darthVader").on("click", function() {
    if (vader === 0 && luke === 0 && maul === 0 && anakin === 0) {
        var x = $("#vaderContainer")
        var y = $("#vader")
        y.text("Darth Vader").append("<br> HP: ",vaderHP);
        $("#theForce2").append(x,"<br>");
        vader = 1;
        character = 1;
        checkFunction()
    }

    else if ((character === 1) && (vader !== 1) && (luke !== 2) && (maul !== 2) && (anakin !== 2)) {
        var x = $("#vaderContainer")
        $("#theForce3").append(x);
        vader = 2;
    }

    else if (anakin === 2) {
        anakin = 0;
        var x = $("#containAnakin");
        $("#theForce4").append(x,"<br>");
        var y = $("#vaderContainer")
        $("#theForce3").append(y);
        vader = 2;
    }
    else if (maul === 2) {
        maul = 0;
        var x = $("#maulContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#vaderContainer")
        $("#theForce3").append(y);
        vader = 2;
    }
    else if (luke === 2) {
        luke = 0;
        var x = $("#lukeContainer");
        $("#theForce4").append(x,"<br>");
        var y = $("#vaderContainer")
        $("#theForce3").append(y);
        vader = 2;
    }
})

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
        $("#theForce").html("");

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

//Attack!
$("#attack").on("click",function() {
    attacked();
})
function attacked() {
    if (character === 0) {
        return character;
    }
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
            var x = $("maulContainer");
            var y = $("maul");
            y.text("Darth Maul").append("<br> HP: ",maulHP)
            $("#theForce3").append(x);
        } else {
            var x = $("maulContainer");
            var y = $("maul");
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

        if (maulHP > 0) {
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
            var x = $("maulContainer");
            var y = $("maul");
            y.text("Darth Maul").append("<br> HP: ",maulHP)
            $("#theForce3").append(x);
        } else {
            var x = $("maulContainer");
            var y = $("maul");
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

function checkEnd() {
    if (finished === 3) {
        $("#announcements").html("<h1>You've Defeated All of Your Enemies! May the Force be with You...</h1>")
    }
}
