import React from 'react';

const FormButton =props=>{
    return(
        <button style={styles.btn} type={props.type}>{props.label}</button>
    )
}

export default FormButton;

const styles={
    btn:{
        margin:'5px',
        border:'none',
        width:'95%',
        borderRadius:'5px',
        backgroundColor:'#4095BA',
        color:'white',
        fontSize:'1em',
        fontWeight:'600',
        height:'30px'
        
    }
}