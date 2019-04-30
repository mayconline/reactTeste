import React, {Component, Fragment} from 'react';
import api from '../services/api';

import Upload from '../components/Upload';
//import socket from 'socket.io-client';

import {uniqueId} from 'lodash';
import filesize from 'filesize';

import ListaProd from '../components/ListaProd';


export default class ProdDetalhe extends Component {

    state ={
        produto:{},
       // fotos:[],
        uploadedFiles:[]
        
        
        
    }
    

    async componentDidMount(){

      //  this.subscribeSocket();

        const {id} = this.props.match.params;
     

        const response = await api.get(`/produtos/${id}`);
       
        
        this.setState({ produto: response.data});
        //this.setState({fotos:response.data.fotos})

       this.setState({
           uploadedFiles: response.data.fotos.map(file=>({
               id:file._id,
               name:file.name,
               readableSize:filesize(file.size),
               preview:file.url,
               uploaded:true,
               url:file.url

           }))
       });


    }

    componentWillMount(){
        this.state.uploadedFiles.forEach(file =>
            URL.revokeObjectURL(file.preview));
    }



/*
    subscribeSocket =()=>{
        const io = socket('http://localhost:3000');

        io.on('cadFotos', data =>{
            this.setState({fotos:[data, ...this.state.fotos]});
        })
       
    };*/


    deletarProd = async ()=>{
      
        const {_id} = this.state.produto;
       
        try{
            await api.delete(`/produtos/${_id}`);
         
            this.props.history.push('/produtos');  
            alert('deletado com sucesso');
        }  
        catch{
            alert('erro ao deletar')
        }
        
        
    }

    deletarFoto = async (id)=>{
        await api.delete(`produtos/fotos/${id}`);

        this.setState({
            uploadedFiles:this.state.uploadedFiles.filter(file=>
                file.id !=id)
        })
    }

    EditarProd = async ()=>{
      
        const {_id} = this.state.produto;
       
        try{
            
         console.log(_id)
           //this.props.history.push('/produtos');  
           // alert('deletado com sucesso');
        }  
        catch{
           // alert('erro ao deletar')
        }
        
        
    }


    handleUpload = (files) => {
        const uploadedFiles = files.map(file=>({
            file,
            id:uniqueId(),
            name:file.name,
            readableSize:filesize(file.size),
            preview:URL.createObjectURL(file),
            progress:0,
            uploaded:false,
            error:false,
            url:null

        }))


        this.setState({
            uploadedFiles:this.state.uploadedFiles.concat(uploadedFiles)
            
        });

      
        uploadedFiles.forEach(this.proccessUpload);

    }


    updateFile =(id, data) =>{
        this.setState({
            uploadedFiles: this.state.uploadedFiles.map( uploadFile =>{
                return id == uploadFile.id ? { ...uploadFile, ...data}: uploadFile
            })
        
        })
    };

    proccessUpload = (uploadFile)=>{

        const {_id} = this.state.produto;

        const data = new FormData();
        data.append('file', uploadFile.file, uploadFile.name)

            api.post(`/produtos/cadastro/${_id}/fotos`, data, {
                onUploadProgress: e =>{
                    const progress = parseInt(Math.round((e.loaded)*100)/e.total)
                       
                this.updateFile(uploadFile.id, {
                    progress
                } )
                }
            })
                .then((res)=>{
                    this.updateFile(uploadFile.id,{
                        uploaded:true,
                        id:res.data._id,
                        url:res.data.url,
                        readableSize:filesize(res.data.size)

                    })
                })
                .catch(()=>{
                    this.updateFile(uploadFile.id,{
                        error:true
                    })
                })
    }


    /*
    inserirFoto = async (files) =>{
    
       const {_id} = this.state.produto;
     
         console.log(files)
     
            for( let file of files){
     
                 //cria um formulario
                 const data = new FormData();
                 data.append('file', file)
                 //envia os dados para a url
     
          await api.post(`/produtos/cadastro/${_id}/fotos`, data)
            
     
             } 
          
         } */
    

    render(){
        
        
        const {produto, uploadedFiles} = this.state;
        ;

        
   
        return(


            <Fragment>

          
            <Upload  onUpload={this.handleUpload}
                files={uploadedFiles}
                onDelete={this.deletarFoto}
            />
          
         
        <ListaProd 
             prod={produto}
           
             type1="button" 
             type2="button"
             onClick1={this.deletarProd}
             onClick2={this.EditarProd}
             textButton1="Deletar"
             textButton2="Editar"

             bt1bgcolor="#ff0000"
             bt2bgcolor="#0040ff"
             
             bt1txtcolor="#ffffff"
             bt2txtcolor="#ffffff"
             
         
         />
     
    
     
      
            </Fragment>
           
        
        );
    }
}