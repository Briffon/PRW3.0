import React from 'react';

const ReadMore=props=>{
    return(
            <button style={styles.button}>{props.name}</button>

    )
}

export default ReadMore;

const styles={
    container:{

    },
    button:{
        width:'95%',
        padding:'.5rem',
        border:'none',
        borderRadius:'10px',
        backgroundColor:'#519EC0',
        color:'white',
        fontSize:'1em',
        fontWeight:'600'
    },
}