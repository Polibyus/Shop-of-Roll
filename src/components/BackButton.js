import React from 'react';
import Button from 'react-bootstrap/Button';

const BackButton = () => {
    function goBack() {
        window.history.back()
      }
    return (
        <>
            <Button variant='primary' onClick={goBack}>
            Volver atras
            </Button> 
        </>
    )
}

export default BackButton
