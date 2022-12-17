//funcao que recebe a palavra e separa as letras em array
export const wordArray=(val)=>{
    var texto = []
    //separa as letras em um array
        for(var i=0; i < val.length; i++){

            texto.push(val.substring(i,i+1))  
                
        }
    //embaralha a lista em um array
        for (let i = texto.length - 1; i > 0; i--) {
    
            const j = Math.floor(Math.random() * (i + 1));
            
            [texto[i], texto[j]] = [texto[j], texto[i]];
        }
       
        return texto;
        
    
}



