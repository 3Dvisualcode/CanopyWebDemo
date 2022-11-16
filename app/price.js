function parseItem(elementID)
{
let value = document.getElementById(elementID).innerHTML;
value = parseFloat(value); 
if (isNaN(value)) value = 0; // checking for "--"

return value;

}

function price()
{
let price = 0;	

//Betonpoer 
price = price + parseItem('item_vertical_beam_fundament') * 100;

//Staanders
price = price + parseItem('item_vertical_beam') * 100;

//Ringbalk
price = price + parseItem('item_ringbalk') * 100;

//Liggers 5 x 15 cm
price = price + parseItem('liggersmm') * 100;

//Boeideel 2.2 x 20 cm
price = price + parseItem('boimm') * 100;

//Aluminium trim
price = price + parseItem('item_alum_mm') * 100;

//Frame voor wanden 5 x 5 cm
price = price + parseItem('itemframe_mm') * 100;

//Rabat (zwart) 250 x 1.2 x 18 cm
price = price + parseItem('rabat_mm') * 100;

//Rabat (naturel) 250 x 1.2 x 18 cm
price = price + parseItem('rabat_mm2') * 100;

//Raam schuurdeel
price = price + parseItem('item_window') * 100;

//Enkele deur linksdraaiend
price = price + parseItem('item_door_left') * 100;

//Enkele deur rechsdraaiend
price = price + parseItem('item_door_right') * 100;

//Dubbele deur
price = price + parseItem('item_door_double') * 100;

//Dakbeschot (1.8 x 19 cm)
price = price + parseItem('squarem') * 100;

//Dakpannen
price = price + parseItem('squarem_ii') * 100;

//Daktrim (6.5 x 6.5 cm)
price = price + parseItem('perimm') * 100;

//Shutter
price = price + parseItem('item_shutter') * 100;

//Vaste raam 1m
price = price + parseItem('item_window1m') * 100;

//Vaste raam 2m
price = price + parseItem('item_window2m') * 100;

//Schuifdeur frame boven 2m
price = price + parseItem('item_door2m') * 100;

//Schuifdeur frame boven 3m
price = price + parseItem('item_door3m') * 100;

//Schuifdeur frame boven 4m
price = price + parseItem('item_door4m') * 100;

//Glaselement
price = price + parseItem('item_glass_element') * 100;

//Frame links/rechts
price = price + parseItem('item_rails_1') * 100;

//Geleider
price = price + parseItem('item_rails_2') * 100;

document.getElementById('price').innerHTML = '€ ' + price;
	
}