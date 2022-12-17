//funcao que recebe a palavra e separa as letras em array
export const wordArray=(val)=>{
    var texto = []
        for(var i=0; i < val.length; i++){

            texto.push(val.substring(i,i+1))  
            
            if(i == val.length - 1){
                for (let i = val.length - 1; i > 0; i--) {
            
                    const j = Math.floor(Math.random() * (i + 1));
                    
                    [val[i], val[j]] = [val[j], val[i]];
                }
               
                return val;
                
            }
    }
}

export const teste=(val)=>{
    
    return val + 2

}