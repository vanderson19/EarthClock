function submit(){ 
  document.getElementById("btnSubmit").style.visibility = "hidden";
  document.getElementById("btnNext").style.visibility="visible";
  document.getElementById("Name").style.visibility = "hidden";
  document.getElementById("story").innerHTML="In the future…As of yet there are been no successful attempts to change our course towards Global Warming, as a result temperatures have been rising, there is acid rain, rising sea levels, mass extinction of vital crops and livestock, as well as unexpected and devastating natural disasters with no ozone layer, the polar ice caps have disappeared "
+ document.getElementById("Name").value + ", it's up to you to you to save the planet!"
}

function next(){
  document.getElementById("btnNext").style.visibility = "hidden";
  document.getElementById("btnNext2").style.visibility="visible";
  document.getElementById("story").innerHTML="You begin your day using your own recycled water to take 5 minute shower, then you dress in all-plastic clothing since natural fibers are a rarity now. You turn on the news and hear the daily warnings about the storms and floods, hoping that you won’t be hit this time. You eat your synthetic breakfast, actual fruits, vegetables, and meat are only for the rich who can pay the inflated prices."
}

function next2(){
  document.getElementById("btnNext2").style.visibility = "hidden";
  document.getElementById("btnpress").style.visibility="visible";
  document.getElementById("btnnopress").style.visibility="visible";
  document.getElementById("story").innerHTML="As you clean your dusty closet you discover a strange machine. Do you press the button?"
}  

}  
function press(){
  document.getElementById("btnpress").style.visibility = "hidden";
  document.getElementById("btnnopress").style.visibility="hidden";
  document.getElementById("btntalk").style.visibility="visible";
  document.getElementById("btnnotalk").style.visibility="visible";
  document.getElementById("story").innerHTML="The machine whirs and then you black out for a while."</p>
}  
 function nopress(){
   document.getElementById("btnnopress").style.visibility = "hidden";
   document.getElementById("btnpress").style.visibility="hidden";
   document.getElementById("btntalk").style.visibility="visible";
   document.getElementById("btnnotalk").style.visibility="visible";
   document.getElementById("story").innerHTML="A few minutes later, as you grab your camera, you accidentally knock over the strange machine. It starts whirring and then you black out.You wake up in a park. You immediately take note of the healthy trees and green grass. The trees provide cool shade. No one is wearing a respirator. You pick up the machine that is next to you in the grass. It must have sent you back in time. Time machines have a cooldown of 12 hours. You see a woman walking by, do you talk to her?"
} 

 function talk(){
     document.getElementById("btntalk").style.visibility = "hidden";
     document.getElementById("btnnotalk").style.visibility = "hidden";
//   document.getElementById("btnNext").style.visibility="visible";
     document.getElementById("story").innerHTML="Excuse me miss, what is the date today? 'Uh' 'she checks her phone', 'today is (feature creep).' You thank her and walk out of the park and pass a newspaper stand"
 }
   
 function notalk(){
     document.getElementById("btntalk").style.visibility = "hidden";
     document.getElementById("btnnotalk").style.visibility = "hidden";
//   document.getElementById("btnNext").style.visibility="visible";
     document.getElementById("story").innerHTML="You get up and walk out of the park. People stare at your plastic clothes. You pass a newspaper stand and realize that today is (feature creep).The headline on the newspaper says: “LAST CHANCE TO SAVE OUR PLANET FROM CLIMATE CHANGE!As you continue your stroll, you realize that this opportunity is the perfect time to make a difference and reverse the damage of the future. You begin your course to the Environmental Protection Agency, determined to show government officials the drastic changes which will occur in the near future if people don’t change their ways. You arrive at the agency and show them pictures from the future and at the sight of such horrific conditions they wonder what they can do so you can grow up in a healthy world.Well, what do you think we can do to save the planet? Here is a checklist, choose all options that can help the environment!"
}  
