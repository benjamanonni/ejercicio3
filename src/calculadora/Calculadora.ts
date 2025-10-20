export class Calculadora{
  //tira error por inicializar pero lo hacemos despues en el contructor
   private n1: number; //privado #
   private n2: number;
   
   constructor(n1:number,n2:number){
    this.n1=n1;
    this.n2=n2;
   }
   //metodos
   //suma no se usa function
    suma(n1:number,n2:number):number{
    return n1+n2;
   }
   //resta
    resta(n1:number,n2:number):number{
    return n1-n2;
   }
   //multiplicacion
   multiplicacion(n1:number,n2:number){
    return n1*n2;
   }
   //division
   division(n1:number,n2:number){
    if(n2===0){
        console.log("error,no se puede dividir por 0");
        return;
    }
    return n1/n2;
   }
   
}
