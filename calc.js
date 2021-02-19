function computeCost()
{
var rice = document.getElementById("rice").value;
var toor_daal = document.getElementById("toor_daal").value;
var urad_daal = document.getElementById("urad_daal").value;
document.getElementById("cost").value = totalCost = rice*50 + toor_daal*100 +
urad_daal*125;
}
function welcome()
{
document.write("Happy shopping");
}