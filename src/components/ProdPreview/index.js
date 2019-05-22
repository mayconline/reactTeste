import React, {Fragment} from 'react';
import {Container, FileInfo, Preview} from './styled';


import {distanceInWords} from 'date-fns';
import pt from 'date-fns/locale/pt';

import{MdDeleteForever} from 'react-icons/md';

const ProdPreview = ({produtos, deletar}) =>(


<Fragment>
{console.log(produtos)}
    <Container>

    {  !!produtos.length &&
        produtos.map(prod =>(
              
            <li key={prod._id}>

            <FileInfo >
                    {prod.fotos.map(foto=>(

                      <Fragment key={foto._id}>
                           <Preview src={foto.url} onClick={()=>{window.open(`${foto.url}`)}}/>  

                      
                 


                      </Fragment>
                     
                

                    ))}


                  <div>
                    <strong>{prod.titulo}</strong>
                    <span>Há {distanceInWords(prod.createdAt, new Date(), {locale:pt})} 
                    
                    </span>
                </div>  
                  
                  
            </FileInfo>
            <div>
                    
                    <MdDeleteForever onClick={()=>{deletar(prod._id)}} style={{marginRight:8}}  size={24} color='#f00'/>
                  
                    


                  </div>              

            </li>   
        )
    )

    }
    </Container>

  
       
           
    
    
</Fragment>
);

export default ProdPreview;