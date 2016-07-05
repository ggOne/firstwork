
var myar100 = new Array(); 
var li1=document.getElementById('ul11').getElementsByTagName('li'); 
document.getElementById('ul11').style.fontsize='14px'; 
function sorrtab() {

for(var li2=0;li2<li1.length;li2++) { 
myar100[li2]=li1[li2].innerHTML; 
} 
myar100.sort(); 
for(var li3=0;li3<li1.length;li3++) { 
li1[li3].innerHTML=myar100[li3];

} 
}

function sorrtz() {

//var li1=document.getElementsByTagName('li'); 
for(var li2=0;li2<li1.length;li2++) { 
myar100[li2]=li1[li2].innerHTML; 
} 
myar100.sort(); 
myar100.reverse(); 
for(var li3=0;li3<li1.length;li3++) { 
li1[li3].innerHTML=myar100[li3]; 
} 
} 

function Complete1()  {

 if(document.one.Pwd.value==document.one.Pwd1.value)
 alert("Вас зарегистрировали\nID="+document.one.Id.value+"\nPassword="+document.one.Pwd.value);
 else
 alert("Ошибка при вводе пароля\nПопробуйте еще раз");
 }

function sorrt0() {
$('.block0').detach();
}
function sorrt1() {
$('.block1').detach();
}
function sorrt2() {
$('.block2').detach();
}
function sorrt3() {
$('.block3').detach();
}
function sorrt4() {
$('.block4').detach();
}
function sorrt5() {
$('.block5').detach();
}


function dell0() {
$('.image0').detach();
}
function dell1() {
$('.image1').detach();
}
function dell2() {
$('.image2').detach();
}
function dell3() {
$('.image3').detach();
}

var num = 1;
function addQuestion() {
var newdiv = document.createElement("div");
newdiv.innerHTML = "<div id='original-wrapper'>\n<div  class='form-1'>\n<form id='question' method='post'>\n<div><strong>Блок № "+ num++ +"<\/strong><\/div>\n<div style='text-align: center;'><strong>За какую команду болеете?:&nbsp;<\/strong><\/div>\n<div><select>\n<option>Франция<\/option>\n<option>Англия<\/option>\n<option>Испания<\/option>\n<option>Италия<\/option>\n<option>Уэльс<\/option>\n<option>Германия<\/option>\n<\/select>\n\n<div style='text-align: center;'><strong>Ваш комментарий:&nbsp;<\/strong><\/div>\n<input><\/input>\n<\/div>\n<div><strong><\/strong><\/div><\/form><\/div><\/div>";
//newdiv.appendTo('div#quest');
document.getElementById("parentId").appendChild(newdiv);
return false;
  }




$(document).ready(function(){
$('.Wrp').on('dblclick','div[id^="Div"]',function () {
  var a = $('.Wrp').find('.change');
  if( a.get(0)===$(this).get(0)){a.removeClass('change');return false;}
  $(this).addClass('change');
  if(a.length>=1) {
    var b = $(this).clone();
    var c = a.clone();
    a.replaceWith(b);
    $(this).replaceWith(c);
    $('div[id^="Div"]').removeClass('change');
  }
});
});
