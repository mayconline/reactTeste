import React from 'react';

import {ToogleButton} from './styled';


const botaoToogle = props =>(
    <ToogleButton onClick={props.click}> 
        <div className='toogle_line'></div>
        <div className='toogle_line'></div>
        <div className='toogle_line'></div>
    </ToogleButton>
);

export default botaoToogle;

