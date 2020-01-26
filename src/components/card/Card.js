import React from "react";
import Paper from "@material-ui/core/Paper";

const Card = props => {
  return (
    <Paper style={styles.container} elevation={2}>
      <div className="card">
        <p>{props.name}</p>
        <img src={props.img} alt={props.name} />
        <p>{props.price}</p>
      </div>
    </Paper>
  );
};

export default Card;
const styles = {
  container: {
    margin: "1rem",
    padding: "1rem",
    display: "flex",
    justifyContent:'center',
    textAlign:'center',
    backgroundColor:'#D3D3D3',
  }
};
