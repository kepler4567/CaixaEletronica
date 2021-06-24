Sacar(263);

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
        
               
        switch (cedula) {
            case 100: cedula = 50  
            break;
            case 50: cedula = 20 
            break;
            case 20: cedula = 10 
            break;
            case 10: cedula = 5  
            break;
            case 5: cedula = 2  
            break;
            case 2: cedula = 1 
            break;
            case 1: cedula = 0  
            break;
      
        }

               totalNotas = 0 
                                
        
          
        }
    }
 
