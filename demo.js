document.write("Hello World")
document.write("<h1>Hello</h1>")
document.write("<h1>Hello1</h1>")
document.write("<h1>Hello2</h1>")

function Clicking()
{
    document.getElementById("h13_id").innerHTML="Changed the text👍👍👍👍👍👍"
    var s=document.getElementById("i_id").value
    var s1=document.getElementById("j_id").value
    document.getElementById("h13_id").innerHTML=s+":"+s1

    var radio_var=document.getElementById("male_id")
    var radio_var1=document.getElementById("female_id")

    var selcct_var=document.getElementById("selct_id")

    alert("The Select item is :"+ selcct_var.options[selcct_var.selectedIndex].value)
   // document.write(radio_var.value)
    //document.write(radio_var1.value)
    //alert("Thank you!!!!!!!")

    var par=document.getElementsByTagName("p")

    par[0].style.fontSize = "25px"

    par[1].style.color="Green"

    par[2].style.fontWeight="bold"

    par[3].style.fontStyle="Italic"
}

function MouserOver()
{
    document.getElementById("img_id").src="images/fp3.png"
}
function MouserOut()
{
    document.getElementById("img_id").src="images/fp1.jpg"
}

function Submitform()
{
    var u=document.getElementById("i_id")
    var p=document.getElementById("j_id")

    if(u.value== "" && p.value=="")
   {
    alert("PLease enter into the required fields")
    return false
   }
   else
   {
       return true
   }


}