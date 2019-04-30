import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



import{MdCheckCircle, MdError, MdLink} from 'react-icons/md';

import {Container, FileInfo, Preview} from './styled';

const UploadPreview =({files, onDelete})=>
    <Container>
    
         {!!files.length &&
                  files.map(foto => (
        <li key={foto.id}>            
           
        <FileInfo >
                            
                <Preview src={foto.preview}/>                       
               
                <div>
                    <strong>{foto.name}</strong>
                    <span>{foto.readableSize}

                    {!!foto.url &&(
                        <button onClick={()=>{onDelete(foto.id)}}>Excluir</button>
                    )}
                        
                    </span>
                </div>
             
            </FileInfo>
                        
                         

            <div>
                {!foto.uploaded && !foto.error && (
                    <CircularProgressbar 
                    styles={{
                        root:{width:24},
                        path:{stroke:'#7159c1'}
                    }}
                    strokeWidth={10}
                    percentage={foto.progress}   
     
                />
                )}

                {foto.url &&(
                    <a href={foto.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                    <MdLink style={{marginRight:8}}  size={24} color='#222'/>
                    </a>
                )}
                    
                 {foto.uploaded &&(
                     <MdCheckCircle size={24} color='#78e5d5'/>
                 )}  

                  {foto.error &&(
                       <MdError size={24} color='#e57878'/>
                  )} 


            </div>
        </li>
               ))  }

    </Container>;

export default UploadPreview;    