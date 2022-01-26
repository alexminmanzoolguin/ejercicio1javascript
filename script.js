console.log("MANZO OLGUIN ALEX YAZMIN");
const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
  ];

  console.log("ejercicio1 =>", ejercicio1);
  console.log("mis numeros primos son");


  function esprimo(numero){
    if(numero==3){
        return(console.log(numero+'primo'));
    }else{
        for(let i=3;i<numero;i++){
if(numero%i==0){
    return;
}
        }
        return(console.log(numero+'primo'));
    }
}
ejercicio1.forEach(esprimo);
console.log("seleccon de numeros primos y no ");
  const primo = numero => {
	// Casos especiales
	if (numero=== 0 ) return false;
	for (let x = 2; x <= numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;


}
ejercicio1.forEach(numero => { console.log("¿%d es primo? ", numero, primo(numero));
});

