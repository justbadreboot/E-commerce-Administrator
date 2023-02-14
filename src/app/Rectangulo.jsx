import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import { ThemeProvider } from 'styled-components';

const Rectangulo = () => {
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#2B97A4',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#2B97A4',

        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };
    return (
        <div className='fixed z-50 bottom-4 right-4'>
        <ThemeProvider theme={theme}>
        <div className='float-right '>
        <ChatBot
      steps={[
        {
          id:'Greet',
          message:'Bienvenido a nuestro sitio, cual es tu nombre?',
          trigger:'waiting1'
      },
      {
        id:'waiting1',
        user:true,
        trigger:'Name'
    },
      {
          id:'Name',
          message:'Hola {previousValue}, Porfavor selecciona tu lenguaje',
          trigger:'issues'
      },
 
      {
          id:'issues',
          options:[{value:'React',label:"React", trigger:"React"},
          {value:'Angular',label:"Angular", trigger:"Angular"}]
      },
      {
        id:'waiting2',
        user:true,
        trigger:'issues'
    },
      {
          id:'React',
          message:'Thanks form telling your react issue',
          end:true
      },
      {
          id:'Angular',
          message:'Thanks form telling your angular issue',
          end:true
      },
      ]}
    />
    </div>
      </ThemeProvider>
      </div>
      );
}

export default Rectangulo