
      
    var rans;
    var test;


    var questionui = document.getElementById("question");
    var al1 = document.getElementById("answer1");
    var al2 = document.getElementById("answer2");
    var al3 = document.getElementById("answer3");
    var al4 = document.getElementById("answer4");
    var num = document.getElementById("hk");
    var text1 = document.getElementById("text1");
    var tempnum = 1;
    var score = 0;
      

    var uniqueRandoms = [];
    var numRandoms = 44;
    function makeUniqueRandom() {
        // refill the array if needed
        if (!uniqueRandoms.length) {
            for (var i = 0; i < numRandoms; i++) {
                uniqueRandoms.push(i);
            }
        }
        var index = Math.floor(Math.random() * uniqueRandoms.length);
        var val = uniqueRandoms[index];

        // now remove that value from the array
        uniqueRandoms.splice(index, 1);

        return val;

    }

    var temp = makeUniqueRandom();

      







      
      
    function generate() {

                temp = makeUniqueRandom();
        
                console.log(temp);

                $.getJSON("data/wenda.json", function(json){


                  rans = json[temp].right;    
                    
                    questionui.innerHTML = json[temp].question;
                    al1.innerHTML = json[temp].answer1;
                    al2.innerHTML = json[temp].answer2;
                    al3.innerHTML = json[temp].answer3;
                    al4.innerHTML = json[temp].answer4;
                    
                });
        
                god = rans;
        
              console.log(god);


    }

    generate();





    function numadd() {

        tempnum = ++tempnum;
        console.log(tempnum);
              

        
        if (tempnum == 11) {
            
            reTXT();
            
        }
        
        num.innerHTML = tempnum; 
        
    }



    function reTXT() {
        
/*        if(score == 100){

        text1.innerHTML = "100分！中华民国以您为荣";
            
        } 
        
        else if(score == 90){text1.innerHTML = "90分！下任教育部部长换你做啦";}
        
        else if(score >= 70 && score <=80){text1.innerHTML = score +"分，希望您继续为两岸和平统一做出贡献";}
        
        else if(score >= 40 && score <=60){text1.innerHTML = score +"分，介绍你家补习班。。。";}
        
        else if(score = 30){text1.innerHTML = score +"分。。。why are you so diao";}
        
        else if(score == 0){text1.innerHTML = "0分!老师哭晕在厕所";}
        
        else {text1.innerHTML = "恭喜您考了。。。" + score + "分,台湾是什么，能吃嘛。。。";}*/
        
        switch (score)
        {
        case 100:
               text1.innerHTML = "100分！中华民国以您为荣";
               break;
        case 90:
               text1.innerHTML = "90分！下任教育部部长换你做啦";
               break;
        case 80:
               text1.innerHTML = score +"分，希望您继续为两岸和平统一做出贡献";
               break;
        case 70:
               text1.innerHTML = score +"分，希望您继续为两岸和平统一做出贡献";
               break;
        case 60:
               text1.innerHTML = score +"分，介绍你家补习班。。。";
               break;
        case 50:
               text1.innerHTML = score +"分，介绍你家补习班。。。";
               break;
        case 40:
               text1.innerHTML = score +"分，介绍你家补习班。。。";
               break;
        case 30:
               text1.innerHTML = score +"分。。。why are you so diao";
               break;
        case 0:
               text1.innerHTML = "0分!老师已哭晕在厕所";
               break;
        case 10:
               text1.innerHTML = "恭喜您考了。。。" + score + "分,台湾是什么，能吃嘛。。。";
        case 20:
               text1.innerHTML = "恭喜您考了。。。" + score + "分,台湾是什么，能吃嘛。。。";
        
        
        }
        
            $('#vbvb').css({  

            'display' : 'block'
            });  
            $('#vbvb1').css({  

            'display' : 'none'
            });  
        


        
    }


    var count=10;

    var counter=setInterval(timer,1000);

    function timer()
    {
        count=count-1;
        if(count <= 0)
        {
            numadd();
            generate();
            count=10;
/*            clearInterval(counter);
            return;*/
        }

    document.getElementById("cv").innerHTML=count;
    
    }
      


document.getElementById("answer1").addEventListener("touchend", touchEnd, false);
document.getElementById("answer2").addEventListener("touchend", touchEnd, false);
document.getElementById("answer3").addEventListener("touchend", touchEnd, false);
document.getElementById("answer4").addEventListener("touchend", touchEnd, false);

document.getElementById("answer1").addEventListener("MSPointerUp", touchEnd, false);
document.getElementById("answer2").addEventListener("MSPointerUp", touchEnd, false);
document.getElementById("answer3").addEventListener("MSPointerUp", touchEnd, false);
document.getElementById("answer4").addEventListener("MSPointerUp", touchEnd, false);
          
            function touchEnd(event) {
/*                            setTimeout(
                                function(){generate();},
                                334

                            )*/
/*                   event.preventDefault();*/
                

                
                   if(this.innerHTML == rans){ 
                   
                   console.log("xx");
                   score = score + 10;
                   
               
                   }
               
                   console.log(score);
               
               
                            numadd();
               
                            generate();
                
                            count=10;
                
                
            }




      
$(document).ready(function () {
    
    	$(".orangetit,.dark,.modal1,.xy1,.modal2").click(function () {
		$(".dark,.modal1,.modal2").toggleClass("active");
            
	});
    
});


      
