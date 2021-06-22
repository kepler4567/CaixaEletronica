Sacar(54496);

function Sacar(valor) {
    if (valor <=0)
    {
        console.log("Dgite um valor maior que 0");
    } 
    var cedula = 100;
    var totalNotas = 0;

    while (cedula!=0) {
        while (valor >= cedula) {
            valor = valor - cedula;
            totalNotas += 1; 
        }
        if (totalNotas >= 1)
        {
            console.log (`${totalNotas} nota(s) de R$${cedula}`)
        }
        
               if (valor < cedula && cedula == 100) cedula = 50
                    
               else if (valor < cedula && cedula == 50) cedula = 20
                    
               else if (valor < cedula && cedula == 20) cedula = 10

               else if (valor < cedula && cedula == 10) cedula = 5

               else if (valor < cedula && cedula == 5) cedula = 2
         
               else if  (valor <= cedula && cedula == 2) cedula = 1

               else cedula = 0

               

               totalNotas = 0 
                                
        
          
        }
    }
 
