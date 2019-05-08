import React, {Fragment} from 'react';

import {Title, Steps} from './styled';
import {Container, Row ,Col} from '../GridJSS';

import {FaWhatsapp,FaFortAwesome,
    FaBirthdayCake, FaUsers, FaRegCalendarAlt,
    FaShippingFast, FaSmileBeam, FaStar} from 'react-icons/fa';

const Delivery = ()=>(
    <Fragment>

        <Container>
            <Row>
                <Col col='12'>
                    <Title>
                        <h2>Atendemos toda Capital do Rio de Janeiro</h2>
                        <h3>
                         Estamos localizados no bairro de Cordovil, Zona Norte do RJ
                        </h3>     
                    </Title>
                </Col>

            </Row>

            <Row>
                <Col col='3'>
                    <Steps>
                        <FaWhatsapp size={48} color={'#00e676'}/>
                        <h4>Whatsapp</h4>
                         <p>Chame-nos no Whatsapp</p>
                    </Steps>
                </Col>

                <Col col='3'>
                    <Steps>
                        <FaFortAwesome size={48} color={'#f00'}/>
                        <h4>Tema</h4>
                         <p>Escolha o Tema que Preferir para
                            seu Bolo, ou caso ja tenha um modelo em mente,
                             nos envie uma foto de como quer que fique seu bolo
                         </p>
                    </Steps>
                </Col>

                <Col col='3'>
                    <Steps>
                        <FaBirthdayCake size={48} color={'#d2691e'}/>
                        <h4>Recheio</h4>
                         <p>Diga-nos qual sabores deseja que tenha em seu bolo,
                             utilizamos sempre os melhores ingredientes para tornar
                             seu sabor irresistível
                         </p>
                    </Steps>
                </Col>

                <Col col='3'>
                    <Steps>
                        <FaUsers size={48} color={'#000'}/>
                        <h4>Tamanho</h4>
                         <p>Diga-nos para quantas pessoas você quer o bolo, 
                            ou quantos Centímetros de bolo deseja,  
                            prefere redondo ou quadrado ? Faremos do jeito que pedir
                         </p>
                    </Steps>
                </Col>
            </Row>

            <Row>
                <Col col='3'>
                    <Steps>
                        <FaRegCalendarAlt size={48} color={'#e83e8c'}/>
                        <h4>Data de Entrega</h4>
                         <p>Escolha uma data entrega, com 3 dias de Antecedência,
                         para que possamos fazer com toda perfeição que você merece</p>
                    </Steps>
                </Col>

                <Col col='3'>
                    <Steps>
                        <FaShippingFast size={48} color={'#17a2b8'}/>
                        <h4>Forma de Entrega</h4>
                         <p>Defina como será realizado a Entrega, podemos entregar em um local definido por você,
                            ou pode ser retirado por você em nosso local de trabalho</p>
                    </Steps>
                </Col>

                <Col col='3'>
                    <Steps>
                        <FaSmileBeam size={48} color={'#008000'}/>
                        <h4>Aproveite seu  Dia</h4>
                         <p>Curta muito esse dia tão especial para você e sua família,
                            desejamos que tenham um dia perfeito com muito amor, sabor e carinho</p>
                    </Steps>
                </Col>

                <Col col='3'>
                    <Steps>
                        <FaStar size={48} color={'#ffcb0c'}/>
                        <h4>Avalie-nos</h4>
                         <p>Ajude-nos a melhorar nossos serviços nos avaliando, é muito importante para nós</p>
                    </Steps>
                </Col>
            </Row>

        </Container>

         


        

       

    </Fragment>
   

);



export default Delivery;