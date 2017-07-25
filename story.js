function submit(){ 
  document.getElementById("bg").style.backgroundImage = "url('land1.JPG')"
  document.getElementById("btnSubmit").style.visibility = "hidden";
  document.getElementById("btnNext").style.visibility="visible";
  document.getElementById("Name").style.visibility = "hidden";
  document.getElementById("Nametxt").style.visibility = "hidden";
  document.getElementById("story").innerHTML="In the future… As of yet there have been no successful attempts to change our course towards Global Warming,as a result temperatures and sea levels have been rising, acid rain has been falling, mass extinction of vital crops and livestock has occurred, and unexpected and devastating natural disasters are constant. With no ozone layer, the polar ice caps have disappeared."
+ document.getElementById("Name").value + ", it's up to you to you to save the planet!"
}

function next(){
  document.getElementById("bg").style.backgroundImage = "url('land2.JPG')"
  document.getElementById("btnNext").style.visibility = "hidden";
  document.getElementById("btnNext2").style.visibility="visible";
  document.getElementById("story").innerHTML="You begin your day using your own recycled water to take a 5 minute shower, then you get dressed in all-plastic clothing, since natural fibers are a rarity now. You turn on the news and hear the daily warnings about storms and floods, hoping that you won’t be hit this time. You eat your synthetic breakfast, sadly, natural fruits, vegetables and meat are only for the rich who can pay the inflated prices."
}

function next2(){
  document.getElementById("bg").style.backgroundImage = "url('land3.JPG')"
  document.getElementById("btnNext2").style.visibility = "hidden";
  document.getElementById("btnpress").style.visibility="visible";
  document.getElementById("btnnopress").style.visibility="visible";
  document.getElementById("story").innerHTML="As you clean your dusty closet you discover a strange machine. Do you press the button?"
}  

function press(){
  document.getElementById("bg").style.backgroundImage = "url('land4.JPG')"
  document.getElementById("btnpress").style.visibility = "hidden";
  document.getElementById("btnnopress").style.visibility="hidden";
  document.getElementById("btntalk").style.visibility="visible";
  document.getElementById("btnnotalk").style.visibility="visible";
  document.getElementById("story").innerHTML="The machine whirs and you black out for a while. You wake up in a park; immediately you take note of the healthy trees and green grass. The trees provide cool shade over you and no one is wearing a respirator. You pick up the machine laying next to you in the grass. It must have sent you back in time. The label on the machine informs you it requires a cooldown time of 12 hours. You see a woman walking by, do you talk to her?"
}  
 function nopress(){
   document.getElementById("bg").style.backgroundImage = "url('land4.JPG')"
   document.getElementById("btnnopress").style.visibility = "hidden";
   document.getElementById("btnpress").style.visibility="hidden";
   document.getElementById("btntalk").style.visibility="visible";
   document.getElementById("btnnotalk").style.visibility="visible";
   document.getElementById("story").innerHTML="A few minutes later, as you grab your camera, you accidentally knock over the strange machine. It starts whirring and you black out.You wake up in a park; immediately you take note of the healthy trees and green grass. The trees provide cool shade over you and no one is wearing a respirator. You pick up the machine laying next to you in the grass. It must have sent you back in time. The label on the machine informs you it requires a cooldown time of 12 hours. You see a woman walking by, do you talk to her?"
} 

 function talk(){
   document.getElementById("bg").style.backgroundImage = "url('land5.JPG')"
     document.getElementById("btntalk").style.visibility = "hidden";
     document.getElementById("btnnotalk").style.visibility = "hidden";
     document.getElementById("checklist").style.visibility="visible";
     document.getElementById("story").innerHTML="''Excuse me miss, what is the date today?'' You say. ''Uh'' checks her phone, ''today is July 25th, 2017.'' You thank her and walk out of the park and pass a newspaper stand. The headline on the newspaper says: ''LAST CHANCE TO SAVE OUR PLANET FROM CLIMATE CHANGE!'' As you continue your stroll, you realize that this is an opportunity to make a difference and reverse the environmental damage of the past. You begin your course towards the Environmental Protection Agency, determined to show government officials the drastic transformation,  which will occur in the near future if people don’t change their ways. You arrive at the agency and show them pictures from the future and at the sight of such horrific conditions they wonder what they can do so everyone can grow up in a healthy world. Well, what do you think we can do to save the planet? \r\n Here is a checklist, choose all options that can help the environment!" 
 }
   
 function notalk(){
   document.getElementById("bg").style.backgroundImage = "url('land5.JPG')"
     document.getElementById("btntalk").style.visibility = "hidden";
     document.getElementById("btnnotalk").style.visibility = "hidden";
     document.getElementById("checklist").style.visibility= "visible";
     document.getElementById("story").innerHTML="You get up and walk out of the park. People stare at your plastic clothes. You pass a newspaper stand and realize that today is July 25th, 2017.The headline on the newspaper says: “LAST CHANCE TO SAVE OUR PLANET FROM CLIMATE CHANGE!'' As you continue your stroll, you realize that this is an opportunity to make a difference and reverse the environmental damage of the past. You begin your course towards the Environmental Protection Agency, determined to show government officials the drastic transformation, which will occur in the near future if people don’t change their ways.You arrive at the agency and show them pictures from the future and at the sight of such horrific conditions they wonder what they can do so everyone can grow up in a healthy world. \n “Well, what do you think we can do to save the planet?” \n Here is a checklist, choose all options that can help the environment!"
}  

function enter(){
  if (document.getElementById("RnC").checked == true && document.getElementById("Reuse").checked == true && document.getElementById("CO2").checked == true && document.getElementById("Organic").checked == true && document.getElementById("Showers").checked == false && document.getElementById("Lights").checked == false && document.getElementById("Thermostat").checked == false && document.getElementById("Print").checked == true && document.getElementById("Recharge").checked == true){
      document.getElementById("bg").style.backgroundImage = "url('land6.JPG')"
      document.getElementById("checklist").style.visibility="hidden";
      document.getElementById("btnNext3").style.visibility="visible";
      document.getElementById("story").innerHTML="You pull out the time machine from your pocket, hoping you’ve done enough. The machine whirs as it powers up and  you black out. You wake up outside the EPA building. Suddenly, you realize you’re outside...without your respirator...You look around. There are towering, healthy trees, and vibrant green grass. Did your advice really work? You check the date on your machine, it's July 25, 2071. Right away you feel the change, you take a deep breath of clean, fresh air and you know for certain that this is the future you and the rest of humanity needs to truly live."
  }
  else{
    alert("That is incorrect, please try again");
  }
}

function next3(){
  document.getElementById("bg").style.backgroundImage = "url('land7.JPG')"
  document.getElementById("btnNext3").style.visibility="hidden";
  document.getElementById("comment").style.visibility="visible";
  document.getElementById("story").innerHTML=" What will you change in your own life to save the environment and preserve a healthy future?";
}
