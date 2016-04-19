/************************* Арифвметические выражения ************************/
// 1.1 Вывести на экран число с точностью до сотых.
var PI = Math.PI;
document.write(PI);

// 1.2. Вывести на экран число e (основание натурального логарифма) с точностью до десятых.
var Exp = Math.E;
document.write((parseFloat(Exp.toFixed(3))));

// 1.4. Составить программу вывода на экран числа, вводимого с клавиатуры. После выводимого числа должно следовать сообщение " - вот какое число Вы ввели".
var prom = +prompt('Number');
document.write(prom + ' its number');

// 1.5. Вывести на одной строке числа 1, 13 и 49 с одним пробелом между ними.
var one = 1;	var two = 13;	var tree = 49;
document.write(one + ' ' + two + ' ' + tree);

// 1.10. Вывести на экран числа 5, 10 и 21 одно под другим.
var one = 5;	var two = 10;	var tree = 21;
document.write(one + '<br>' + two + '<br>' + tree);

// 1.11. Составить программу вывода на экран "столбиком" четырех любых чисел.
var one = +prompt('one');	var two = +prompt('two');	var tree = +prompt('tree');   var fo = +prompt('fo');
document.write(one + '<br>' + two + '<br>' + tree + '<br>' + fo);

// 1.13. Составить программу вывода на экран следующей информации: а) 2 кг 13 17 б) а 1 19 b в) x y 5 y
var one = '2 kg';	var two = 13;	var tree = 7 + 17;
document.write(one + '  ' + two + '  ' + tree);

// 1.14. Записать по правилам изучаемого языка программирования следующие выражения:
//a) 
var x = +prompt('x');
var sum = 2*x;
//b)
var sin = Math.sin(30);
//w)
var quadrat = Math.pow(5,2); //25
//g)
var sqrt = Math.sqrt(4); //2
//d)
var abs = Math.abs(-5); //5

// 1.25. Дана сторона квадрата. Найти его периметр.
var a = 4;
var perimetr = a * 4;
document.write(perimetr);


// 1.27. Считая, что Земля — идеальная сфера с радиусом R 6350 км, определить расстояние до линии горизонта от точки с заданной высотой над Землей.
var R = 6350;
var h = +prompt('H');
var S = Math.sqrt(h * (2*R + h)) ;
document.write(S);

// 1.29. Дан радиус окружности. Найти длину окружности и площадь круга.
var a = +prompt('Введите радиус окружности R= ');
var l=2*Math.PI*a);
var s=Math.PI*a*a;
document.write('Длина окружности= '+ l);
document.write('площадь круга= ' + s);

/*1.31. Даны два целых числа. Найти:
а) их среднее арифметическое;
б) их среднее геометрическое.*/
//a)
var a = +prompt('1');
var b = +prompt('2');
var c = (a+b)/2;
document.write(c);
//b)
var a = +prompt('one');
var b = +prompt('two');
var c = Math.pow((a*b), 1/2);
document.write(c);

// 1.32. Известны объем и масса тела. Определить плотность материала этого тела.
var m = +prompt('masa');
var V = +prompt('v');
var p=m/V; 


//1.59. Составить программу обмена значениями двух переменных величин.
var a = 20;
var s = 10;
a = a + s;
s = a - s;
a = a - s;
document.write("<h2>"+ a, s + " </h2>");

/* 1.60. Составить программу обмена значениями трех переменных величин а, b, c по
следующей схеме:
а) b присвоить значение c, а присвоить значение b, с присвоить значение а;
б) b присвоить значение а, с присвоить значение b, а присвоить значение с. */
var a = 20;
var s = 10;
var d = a;
a = s;
s = d;
document.write(a, s);

/* 1.61. Дано вещественное число а. Пользуясь только операцией умножения, получить:
е) a10 за четыре операции; */
var a = 2;
var b = a*a;
var c = b*b;
var g = c*c;
var l = g*b;
document.write(l);


//2.1. Дано расстояние в сантиметрах. Найти число полных метров в нем.
var a = +prompt('cm');
var b = Math.round(a/100);
document.write(b);

//2.5. С некоторого момента прошло 234 дня. Сколько полных недель прошло за этот период?
var a = +prompt('day');
var b = Math.round(a/7);
document.write(b);

/* 2.6. С начала суток прошло n секунд. Определить:
а) сколько полных часов прошло с начала суток;
б) сколько полных минут прошло с начала очередного часа;
в) сколько полных секунд прошло с начала очередной минуты. */
var a = +prompt('day');
var b = a/3600;
document.write(b);

/* 2.10. Дано двузначное число. Найти:
а) число десятков в нем;
б) число единиц в нем;
в) сумму его цифр;
г) произведение его цифр. */
//a)
var a = +prompt('day');
var b = Math.floor(a/10);
document.write(b);
//b)
var a = +prompt('day');
var b = Math.floor(a%10);
document.write(b);

// 2.13. Дано трехзначное число. 
var a = +prompt('day');
var c = a%10; // единицы - последняя цифра
var k = (a-c)/10; // первые две цифры
var s = k%10;  // вторая средняя цифра
var b = (k-s)/10; // первая цифра
document.write(s);


//Среди всех трехзначных чисел выбрать и вывести те, которые заканчиваются на цифру 7.
var a = [456, 768, 777];
for(var i = 0; i < a.length; i++){
var b = a[i]%10;
if(b===7){
	document.write(a[i]);
}
}

//2.19. Дано четырехзначное число. Найти:
//а) сумму его цифр;
//б) произведение его цифр.
var n = +prompt("number?", "1234")
function NumbeOne(n){
var s = 1 //0 если сумма, 1 если произведение
while (n > 0)
{
 s *= n % 10; //+ or *
 n = Math.floor(n/10); //первая цифра в числе, меняем 10 на 100 для второй цифры в числе
}
return s;
}
alert(NumbeOne(n));

//1. Среди трех чисел найти среднее. Если среди чисел есть равные, вывести сообщение "Ошибка".
var x1 = +prompt("Введите число 1");
var x2 = +prompt("Введите число 2");
var x3 = +prompt("Введите число 3");
if(x1 == x2 || x1 == x3 || x2 == x3){
  document.write("Error");
}
     else if(x1 > x2 && x1 < x3){
      document.write("<h3> Среднее число из трех чисел - " + x1 + "</h3");
     }
     else if(x1 < x2 && x2 < x3){
      document.write("<h3> Среднее число из трех чисел - " + x2 + "</h3");
     }
     else if (x3 > x2 && x1 > x3){
      document.write("<h3> Среднее число из трех чисел - " + x3 + "</h3");
     }

//3. Определить день недели по номеру дня в году. За первый день года принять 1 января.
var day = prompt("Введите номер дня в году:");
day = day % 7
        switch (day) {
            case 1: document.write("<h3> Понедельник </h3"); break;
            case 2: document.write("<h3> Вторник </h3"); break;
            case 3: document.write("<h3> Среда </h3"); break;
            case 4: document.write("<h3> Четверг </h3"); break;
            case 5: document.write("<h3> Пятница </h3"); break;
            case 6: document.write("<h3> Суббота </h3"); break;
            case 0: document.write("<h3> Воскресенье </h3"); break;
            default: alert("Вы ввели несуществующий номер дня в году."); 
        }


//5. Определить возможность существования треугольника по сторонам.
var a = +prompt("Сторона треугольника a");
var b = +prompt("Сторона треугольника b");
var c = +prompt("Сторона треугольника c");

  if((a <= b + c) && (b <= a + c) && (c <= a + b)){
       document.write("<h3>Треугольник существует</h3");
  }
      else {
        document.write("<h3>Треугольник не существует</h3");
      }


//8. Вывести на экран ряд чисел Фибоначчи, состоящий из n элементов (n принять от пользователя).
// Числа Фибоначчи – это элементы числовой последовательности, в которой каждое последующее число равно сумме двух предыдущих.
var u = +prompt("Введите количество элементов в ряду фибоначчи")
var l = 0;
var k = 1;
var m;
for (n = 0; n <= u; n++) {
  m = k;
  k = l + k;
  l = m;


  document.write("<h3>" + l + "</h3>");
};

//9. Вывести на экран таблицу умножения от 0 до 9. 
 document.write("<h3> Таблица умножения </h3>")
 document.write('<table border="2">');

        for (var i = 1; i <= 9; i++) {

 document.write('<tr>');
            for (var j = 1; j <= 9; j++) {
                document.write("<td>"+j*i+'</td>');
                
            }
 document.write('</tr>');
        }
 document.write('</table>');

// факториал
        var input = +prompt("Введите число: ");
        function factorial(x) {
            if (x <= 3) {
                return x;
            }
            return x * factorial(x - 2);
        }
        alert("Факториал " + input + "! = " + factorial(input));


// найти сумму чисел от 1 до 5. 1+2+3+4+5
var sum=0;
for(i=1;i<=5;i++){
sum+=i;
}
document.write(sum);

//Напечатать числа в виде следующей таблицы
for (var i = 0; i < 5; i++) {
	document.write('<br>', 3 , ' ');
	for (var j = 0; j < 5; j++) {
		document.write(3, ' ');
	};
};

//OR

for (var i = 1; i <= 5; i++) {
	document.write('<br>', 3 , ' ');
	for (var j = 4; j >= i; j--) {
		document.write(3, ' ');
	};
};


//Дано слово. Вывести на экран его k-й символ.
var str = prompt('String');
var symbol = +prompt('symbol number');
var num=0;
num = str.length-symbol;
alert( str.charAt(num) );

// каждая буква слова на новой строке
var str = 'Barcelona'; 
var arr = str.match(/[\S\s]{1,1}/g) || ''; 
document.write(arr.toString().replace(/,/g,'<br>'));

//OR
var str = 'Barcelona'; 
for (var i = 0; i < str.length; i++) {
	document.write(str[i]+='<br>');
};


//Вывести простые числа
nextPrime:
  for (var i = 2; i < 10; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // простое
  }