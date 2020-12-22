function getmenu()
{
    var htmldata;
    htmldata="<ol class='menulist'>"
    menulistarray.sort();
    for (var i=0;i<menulistarray.length;i++){
        htmldata=htmldata+'<li>'+menulistarray[i]+'</li>'
    } 
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;

}
menulistarray=[
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tika Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"
]; 
function add_item()
{
    var htmldata;
    var item=document.getElementById("add_item").value;
    menulistarray.push(item);
    menulistarray.sort();
    htmldata="<scction class= 'cards'>"
    for(var i=0;i<menulistarray.length;i++)
    {
        htmldata=htmldata+'<div class="card">'+'<img src="pizzaImg.png"/>'+menulistarray[i]+'</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;

}
