

// reading white btns
var noOfWhiteBtn = document.querySelectorAll(".white-btn").length;   // noOfWhiteBtn stores 14 ie total white btns

//  looping through each white btn
for(var i=0 ; i<noOfWhiteBtn; i++){

    document.querySelectorAll(".white-btn")[i].addEventListener("click",function(){
        var keyText = this.innerText;

        switch (keyText) {
            case "A":
                var A = new Audio("sounds/a.mp3");
                A.play();
                break;
                case "S":
                var S = new Audio("sounds/s.mp3");
                S.play();
                break;
                case "D":
                var D = new Audio("sounds/d.mp3");
                D.play();
                break;
                case "F":
                var F = new Audio("sounds/f.mp3");
                F.play();
                break;
                case "G":
                var G = new Audio("sounds/g.mp3");
                G.play();
                break;
                case "H":
                var H = new Audio("sounds/h.mp3");
                H.play();
                break;
                case "J":
                var J = new Audio("sounds/j.mp3");
                J.play();
                break;
                case "K":
                var K = new Audio("sounds/k.mp3");
                K.play();
                break;
                case "L":
                var L = new Audio("sounds/l.mp3");
                L.play();
                break;
                case "Q":
                var Q = new Audio("sounds/q.mp3");
                Q.play();
                break;
                
                case "E":
                var E = new Audio("sounds/e.mp3");
                E.play();
                break;
                
                case "S":
                var S = new Audio("sounds/s.mp3");
                S.play();
                break;
                case "T":
                var T = new Audio("sounds/t.mp3");
                T.play();
                break;
                case "Z":
                var Z = new Audio("sounds/z.mp3");
                Z.play();
                break;
                case "B":
                var B = new Audio("sounds/b.mp3");
                B.play();
                break;
        
            default:
                break;
        }
    })
}

// reading black btns

var noOfBlackBtn = document.querySelectorAll(".black-btn").length;  // noOfBlackBtn stores 7 ie total white btns

// looping through each black btn

for(var j=0; j<noOfBlackBtn; j++){
    document.querySelectorAll(".black-btn")[j].addEventListener("click",function(){
        var blackKeyText = this.innerText;

        switch (blackKeyText) {
            case "W":
                var W = new Audio("sounds/w.mp3");
                W.play();
                break;

                case "R":
                var R = new Audio("sounds/r.mp3");
                R.play();
                break;
                case "Y":
                var Y = new Audio("sounds/y.mp3");
                Y.play();
                break;
                case "U":
                var U = new Audio("sounds/u.mp3");
                U.play();
                break;
                case "O":
                var O = new Audio("sounds/o.mp3");
                O.play();
                break;
                case "I":
                var I = new Audio("sounds/i.mp3");
                I.play();
                break;
                case "P":
                var P = new Audio("sounds/p.mp3");
                P.play();
                break;
        
            default:
                break;
        }
    })
}


// footer date

var date = new Date();

var presentDate = date.toLocaleDateString();

document.querySelector("#date").innerHTML = presentDate;
