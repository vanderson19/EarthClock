document.getElementById("btnNext").style.visibility="hidden"

function submit(){
  document.getElementById("btnSubmit").style.visibility = "hidden";
  document.getElementById("Name").style.visibility = "hidden";
  document.getElementById("btnNext").style.visibility = "visible";
  document.getElementById("story").innerHTML="In the future…As of yet there are been no successful attempts to change our course towards Global Warming, as a result temperatures have been rising, there is acid rain, rising sea levels, mass extinction of vital crops and livestock, as well as unexpected and devastating natural disasters with no ozone layer, the polar ice caps have disappeared "
+ document.getElementById("Name").value + ", it's up to you to you to save the planet!"
}
