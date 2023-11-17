import * as React from 'react';
import '../css/errorpage.css';
import { Container } from '@mui/material';



const ErrorPage =() => {
    return (


<section>
   
      <Container className='Error'>     
        <div className="boxtxt">
          <p className='text-error' text-align="center">
            <h2>Ops! Está página não foi encontrada!             
            </h2>
          </p>
        </div>
      </Container>

     </section>
    )
}
export default ErrorPage;