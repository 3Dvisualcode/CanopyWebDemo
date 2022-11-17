function price()
{
let price = 0;

console.log("Betonpoer");//
price = price + parseItem('item_vertical_beam_fundament') * 45;
console.log(parseItem('item_vertical_beam_fundament') * 45);


console.log("Staanders");//
price = price + parseItem('item_vertical_beam') * 90;
console.log(parseItem('item_vertical_beam') * 90);

console.log("Ringbalk");//
price = price + parseItem('item_ringbalk') * 110;
console.log(parseItem('item_ringbalk') * 110);

console.log("Liggers 5 x 15 cm");//
price = price + parseItem('liggersmm') * 50;
console.log(parseItem('liggersmm') * 50);

console.log("Boeideel");//
price = price + parseItem('boimm') * 60;
console.log(parseItem('boimm') * 60);

console.log("Aluminium trim");//
price = price + parseItem('item_alum_mm') * 10;
console.log(parseItem('item_alum_mm') * 10);

console.log("Frame voor wanden 5 x 5 cm");//
price = price + parseItem('itemframe_mm') * 2;
console.log(parseItem('itemframe_mm') * 2);

console.log("Rabat");//
price = price + parseItem('rabat_mm') * 9;
console.log(parseItem('rabat_mm') * 9);

console.log("Rabat");//
price = price + parseItem('rabat_mm2') * 8;
console.log(parseItem('rabat_mm2') * 8);

console.log("Raam schuurdeel");//
price = price + parseItem('item_window') * 300;
console.log(parseItem('item_window') * 300);

console.log("Enkele deur linksdraaiend");//
price = price + parseItem('item_door_left') * 150;
console.log(parseItem('item_door_left') * 150);

console.log("Enkele deur rechsdraaiend");//
price = price + parseItem('item_door_right') * 150;
console.log(parseItem('item_door_right') * 150);

console.log("Dubbele deur");//
price = price + parseItem('item_door_double') * 250;
console.log(parseItem('item_door_double') * 250);

console.log("Dakbeschot (1.8 x 19 cm)");//
price = price + parseItem('squarem') * 15;
console.log(parseItem('squarem') * 15);

console.log("Dakpannen");//
price = price + parseItem('squarem_ii') * 45;
console.log(parseItem('squarem_ii') * 45);

console.log("Daktrim (6.5 x 6.5 cm)");//
price = price + parseItem('perimm') * 5;
console.log(parseItem('perimm') * 5);

console.log("Shutter");//
price = price + parseItem('item_shutter') * 190;
console.log(parseItem('item_shutter') * 190);

console.log("Vaste raam 1m");//
price = price + parseItem('item_window1m') * 230;
console.log(parseItem('item_window1m') * 230);

console.log("Vaste raam 2m");//
price = price + parseItem('item_window2m') * 330;
console.log(parseItem('item_window2m') * 330);

console.log("Schuifdeur frame boven 2m");//
price = price + parseItem('item_door2m') * 40;
console.log(parseItem('item_door2m') * 40);

console.log("Schuifdeur frame boven 3m");//
price = price + parseItem('item_door3m') * 50;
console.log(parseItem('item_door3m') * 50);

console.log("Schuifdeur frame boven 4m");//
price = price + parseItem('item_door4m') * 60;
console.log(parseItem('item_door4m') * 60);

console.log("Glaselement");//
price = price + parseItem('item_glass_element') * 150;
console.log(parseItem('item_glass_element') * 150);

console.log("Frame links/rechts");//
price = price + parseItem('item_rails_1') * 40;
console.log(parseItem('item_rails_1') * 40);

console.log("Geleider");//
price = price + parseItem('item_rails_2') * 50;
console.log(parseItem('item_rails_2') * 50);

price = roundValue(price);

document.getElementById('price').innerHTML = '€ ' + price;
console.log('price: ' + price);
}


function roundValue(value)
{
return (Math.round(value*100))/100;
}

function parseItem(elementID)
{
let value = document.getElementById(elementID).innerHTML;
value = value * 1;
if (isNaN(value)) value = 0; ///// checking for "--"
return value.toFixed();
}
