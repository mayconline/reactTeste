import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



import{MdCheckCircle, MdError, MdLink} from 'react-icons/md';

import {Container, FileInfo, Preview} from './styled';

const UploadPreview =()=>
    <Container>
        <li>            
            <FileInfo>
                <Preview src='https://res.cloudinary.com/apinodeteste/image/upload/v1556313367/fotos/87c6f513392ec29734b43c31ff23c07b-teste4.jpg.jpg'/>
                <div>
                    <strong>profile.png</strong>
                    <span>64kb
                        <button onClick={()=>{}}>Excluir</button>
                    </span>
                </div>
             
            </FileInfo>

            <div>
                <CircularProgressbar 
                    styles={{
                        root:{width:24},
                        path:{stroke:'#7159c1'}
                    }}
                    strokeWidth={10}
                    percentage={60}   
     
                />

                <a href='https://res.cloudinary.com/apinodeteste/image/upload/v1556313367/fotos/87c6f513392ec29734b43c31ff23c07b-teste4.jpg.jpg'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                    <MdLink style={{marginRight:8}}  size={24} color='#222'/>
                    </a>
                    
                    <MdCheckCircle size={24} color='#78e5d5'/>
                    <MdError size={24} color='#e57878'/>


            </div>
        </li>

    </Container>;

export default UploadPreview;    