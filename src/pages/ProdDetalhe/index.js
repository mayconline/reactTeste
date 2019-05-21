import React, {Component, Fragment} from 'react';
import api from '../../services/api';

import {Loading} from './styled';

import Upload from '../../components/Upload';
import Modal from '../../components/Modal';
import ListaProd from '../../components/ListaProd';
import Menu from '../Menu';


import socket from 'socket.io-client';
import {uniqueId} from 'lodash';
import filesize from 'filesize';
import ReactLoading from 'react-loading';


export default class ProdDetalhe extends Component {

    state ={
        produto:{},
        fotos:[],
        uploadedFiles:[],
        loading:false,
      
    
        
    }
    

    async componentDidMount(){

       this.subscribeSocket();

    
        const {id} = this.props.match.params;
     

        const response = await api.get(`/produtos/${id}`);
       
        
        this.setState({ produto: response.data});
        this.setState({fotos:response.data.fotos})

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

            const io = socket('http://localhost:3000');
            io.off('cadFotos');    
    }




    subscribeSocket =()=>{
        const io = socket('http://localhost:3000');

        io.on('cadFotos', data =>{
            this.setState({fotos:[data, ...this.state.fotos]});
        }) 
       
    };


    deletarProd = async ()=>{
      
        const {_id} = this.state.produto;

      await  this.setState({loading:true});
       
        try{
            await api.delete(`/produtos/${_id}`);



            await this.setState({loading:false});
         
             await  this.props.history.push('/produtos');  
            

            
        }  
        catch{
          

         await   this.setState({loading:false});
        }
        
        
    }

    deletarFoto = async (id)=>{
        

        await api.delete(`produtos/fotos/${id}`);

        this.setState({
            uploadedFiles:this.state.uploadedFiles.filter(file=>
                file.id!==id)
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

    visuProd = (url)=>{
      return; 
    }


    //cria um novo array add aos dados da foto novos campos//
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

      //pra cada arquivo, recebe uma função que vai enviar a foto pro server storage//
        uploadedFiles.forEach(this.proccessUpload);

    }


    //funcao que recebe o id do item do array e atualiza com os dados recebidos //
    updateFile =(id, data) =>{
        this.setState({
            uploadedFiles: this.state.uploadedFiles.map( uploadFile =>{
                return id === uploadFile.id ? { ...uploadFile, ...data}: uploadFile
            })
        
        })

        
    };

    //metodo de envio de foto pro server storage //
    proccessUpload = (uploadFile)=>{

        this.setState({loading:true})

        const {_id} = this.state.produto;

            //cria um from e add o campo file contendo os dados do envio
        const data = new FormData();
            data.append('file', uploadFile.file, uploadFile.name);

            api.post(`/produtos/cadastro/${_id}/fotos`, data, {
                //metodo que retorna o progress de upload e seta ele na const progress //
                onUploadProgress: e =>{
                    const progress = parseInt(Math.round((e.loaded)*100)/e.total)

                   
                       
                    //chama a função que seta o estado do array uploadedFiles //
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

                    this.setState({loading:false})
                })
                .catch(()=>{
                    this.updateFile(uploadFile.id,{
                        error:true
                    })

                    this.setState({loading:false})
                })
    }




    
AbrirModal =()=>{
    this.setState((prevState)=>{
      return {ModalOpen:!prevState.ModalOpen};
    })
  };


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
        
        
        const {produto, uploadedFiles, fotos, ModalOpen} = this.state;
     
        return(


            <Fragment>
               
                <Menu/>
                
               {this.state.loading && (
                   
                   <Loading>
                        <ReactLoading type='bars' color='#000' height={'10rem'} width={'10rem'} />    
                   </Loading>
                   
               )} 
                

        {!this.state.loading && !!fotos.length && (
               
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

        fotos={fotos}
        detalhar={this.visuProd}

            />

        )}
         
         
  
     
    
     <Upload  onUpload={this.handleUpload}
                files={uploadedFiles}
                onDelete={this.deletarFoto}
            />
             
      
            </Fragment>
           
        
        );
    }
}