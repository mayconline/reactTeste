import React, {Component, Fragment} from 'react';

import Dropzone from 'react-dropzone'

import UploadPreview from '../UploadPreview';

import {DropContainer , UploadMessage , Container, Content} from './styled';

export default class Upload extends Component {

    

    dragmsg =(isDragActive, isDragReject)=>{
        if(!isDragActive) {
            return <UploadMessage> Arraste arquivos aqui</UploadMessage>
        }
        if(isDragReject){
            return <UploadMessage type='error'>Arquivo não suportado</UploadMessage>
        }
        return <UploadMessage type='success'> Solte os arquivos aqui</UploadMessage>
    };

  
  

    render(){

        const {onUpload, files, onDelete} = this.props
        return (
            <Fragment>
                <Container>
                <Content>

                <Dropzone accept='image/*' onDropAccepted={onUpload}>
                 {({getRootProps, getInputProps, isDragActive, isDragReject})=>(
                    
                    <DropContainer 
                        {...getRootProps()}
                         isDragActive={isDragActive}
                        isDragReject={isDragReject} 
                     >
                            <input {...getInputProps()} />
                            
                            {this.dragmsg(isDragActive, isDragReject)}
                    </DropContainer>
                    
                      
                 )}  
            </Dropzone> 
            
            <UploadPreview files={files}
                onDelete={onDelete}
            />
            
                </Content>
               
             
            </Container>

            </Fragment>
            


           
        )
      
    }
}