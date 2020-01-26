import React, { useState, useEffect } from "react";
import Header from "../../header/Header";
import NavigationLeft from "../../nav/NavigationLeft";
import Card from "../../card/Card";
// import { Container, Row, Col } from "react-bootstrap";

function Inventory() {
  const [cards, setCards] = useState(null);
  // ////  const [page]=useState('Inventory')
  useEffect(() => {
    localStorage.setItem("page", "Inventory");
    if (cards == null) {
      getCards();
    }
  });
  function getCards() {
    fetch("https://api.scryfall.com/cards")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res);
      })
      .then(card => {
        console.log(card);
        setCards(card);
      });
  }

  return (
    <div style={styles.container}>
      <NavigationLeft />
      <div style={styles.content}>
        <Header />
        <div style={styles.cards}>
          {cards != null
            ? cards.data.map((card, index) => {
                return <Card name={card.name} img={card.image_uris.small} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Inventory;

const styles = {
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(6,1fr)",
    gridGap: "0"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflowX: "hidden"
  },
  container: {
    display: "flex",
    height: "100vh"
  }
};
