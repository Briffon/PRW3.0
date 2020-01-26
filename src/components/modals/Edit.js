import React from 'react';
import ReadMore from '../buttons/ReadMore';
import FormErrors from '../formErrors/FormErrors';

const Edit=props=>{
    return(
            <form onSubmit={props.submit}>
                <img onClick={props.close} src={require('../../images/cancel.png')} alt="exit button"/>
                <h3>Edit</h3>
                <input className="titleInput" onChange={props.onChange} defaultValue={props.title} name="title"/>
                <input className="entryInput" onChange={props.onChange} defaultValue={props.entry} name="entry"/>
                <input className="dateInput" onChange={props.onChange} defaultValue={props.date} name="date"/>
                <input className="timeInput" onChange={props.onChange} defaultValue={props.time} name="time"/>
                <FormErrors formErrors={props.formErrors} />
                <ReadMore onClick={props.edit} type="submit" name="Edit"/>
                <button style={styles.button} type="button" onClick={props.remove}>Remove</button>
            </form>
    )
}

export default Edit;

const styles={
    container:{
       
    },
    button:{
        margin:'5px',
        border:'none',
        width:'95%',
        borderRadius:'10px',
        backgroundColor:'#4095BA',
        color:'white',
        fontSize:'1em',
        fontWeight:'600',
        padding:'.5rem'
    }
}