// 1 PABLO Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.
let num1 = 5;
let num2 = 3;
if (num1 > num2) {
  console.log("el primer número es mayor");
}

// 2 RAUL Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.
let nro1 = Number(prompt("ingrese un numerito"));
let nro2 = Number(prompt("Ingrese el segundo numerito"));
if (nro1 === nro2) {
  console.log("Los numeros ingresados son iguales");
} else {
  console.log("Los numeros ingresados son distintos");
}

// 3 MAURO Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.

let num = Number (prompt("ingresa un numero"));
let num3 = Number (prompt("ingresa otro numero breo"));
if ( num > num3) {
  console.log(`${num} es mas grande que ${num3}`);
}
else if ( num3 > num) {
  console.log(`${num3} es mas grande que ${num}`);
}
else if ( num === num3 ) {
  console.log(`${num3} es igual que ${num}`);
}

// 4 GABRIEL Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.

let nume1 = 10

let nume2 = 15

let nume3 = 20

if( nume1 < nume2 && nume1 < nume3){
  alert(`${nume1} es mas chico que ${nume2} y ${nume3}`)
}

  else if(nume2 < nume1 && nume2 < nume3){
    alert(`${nume2} es mas chico que ${nume1} y ${nume3}`)
}

    else if(nume3 < nume1 && nume3 < nume2){
      alert(`${nume3} es mas chico que ${nume2} y ${nume1}`)
}

// 5 BRUNO Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.
let persona1 ={
        nombre: "Aldana",
        edad: 25,
        altura: 159,
}
let persona2={
        nombre: "Rocio",
        edad: 25,
        altura: 170,
}
if ( persona1.altura > persona2.altura ){
  alert(`${persona1.nombre} es mas alta que ${persona2.nombre}`)
} else if (persona1.altura < persona2.altura){
  alert(`${persona2.nombre} es mas alta que ${persona1.nombre}`)
} else {
  alert(`${persona2.nombre} mide lo mismo que ${persona1.nombre}`)
}
if (persona1.edad > persona2.edad){
  alert(`${persona1.nombre} es mayor que ${persona2.nombre}`)
} else if (persona1.edad < persona2.edad){
  alert(`${persona2.nombre} es mayor que ${persona1.nombre}`)
} else {
  alert(`${persona2.nombre} tiene la misma edad que ${persona1.nombre}`)
}

// 6 ALEJANDRO Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.

let persona = { };

persona.nombre = prompt('Ingresa tu nombre : ');
persona.edad = Number(prompt('Ingresa tu edad : '));
persona.altura = Number(prompt('Ingresa tu altura : '));
persona.vision = Number(prompt('Ingresa tu grado de vision del 1 al 10 : '));

if ( persona.edad >= 18 && persona.altura >= 150 && persona.vision >= 8){
  alert(`${persona.nombre} estas capacitado para conducir`);
}

else{
  alert(`${persona.nombre} no estas capacitado para conducir`);
}

// CESAR Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.

let nombre7 = prompt( "cual es tu nombre" )

let entrada = prompt( "tiene entrada?" )

let pase = prompt( "usted es vip o basico?" )

if ( nombre7 === "Bruno" || pase === "vip"){
  alert(`bienvenido ${nombre7}`)
}else if (entrada === "si tengo") {
  entrada = prompt( "desea utilizarla ?" )
  if (entrada === "si") {
    alert("bienvenido")
  }
  else {
    entrada = prompt( 'queres comprar una?' )
    if (entrada === "si") {
      let dinero = Number(prompt( "cuanto dinero tenes?" ))
      if (dinero >= 1000){
        alert("bienvenido")
      }else {
        alert('tomatela')
      }
    }else {
      alert('tomatela')
    }
  }
}
else {
  entrada = prompt( 'queres comprar una?' )
  if (entrada === "si") {
    let dinero = Number(prompt( "cuanto dinero tenes?" ))
    if (dinero >= 1000){
      alert("bienvenido")
    }else {
      alert('tomatela')
    }
  }else {
    alert('tomatela')
  }
}

// PILI Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.

// ANDRES Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.

// HERNAN Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.

// --- Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.

// LAILA Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.

// --- Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.
