//funcao que recebe a palavra e separa as letras em array
export const wordArray=(val)=>{
    var texto = []
        for(var i=0; i < val.length; i++){

            texto.push(val.substring(i,i+1))  
                  
          }
          
              
    return embaralhar(texto);
}

export const embaralhar=(arr:any)=> {
            
    for (let i = arr.length - 1; i > 0; i--) {
            
        const j = Math.floor(Math.random() * (i + 1));
        
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
   
    return arr;
   }

export const teste=(val)=>{
    
    return val + 2

}