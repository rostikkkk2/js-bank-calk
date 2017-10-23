var number = +prompt("Введите свой номер телефона" , "380");
var street = prompt("Введите название улици на которой вы живете");
var num_home = +prompt("Введите номер вашего дома");
var num_flat = +prompt("Введите номер вашей квартиры");
var money = +prompt("Введите суму которую вы хотите вложить в наш банк (в гривнах)");
var procent = +prompt("Под какой процент вы хотите вложить эту сумму");
var month = +prompt("На сколько месяцев вы хотите вложить эту сумму");

var calculation_money = (month * (procent * 0.01)) * money;
console.log("процент днег без вложеных " + calculation_money);
var total_money = money + calculation_money;

alert(
  "Здравствуйте,\n"
  +"На номер телефона: " + number + "," + "\n"
  + "По адресу:\n"
  + "   улица " + street + ";" + "\n"
  + "   дом " + num_home + ";" + "\n"
  + "   квартира " + num_flat + "." + "\n"
  + "Зарегестрирован счет на сумму " + money + "грн" + ",\n"
  + "под " + procent + "%" + " на " + month + " месяцев.\n"
  + "Через " + month + " месяцев " + "вы сможете забрать "
  + total_money + "грн."

);
