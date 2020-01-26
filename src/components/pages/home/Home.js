import React, { Component } from "react";
import Header from "../../header/Header";
import NavigationLeft from "../../nav/NavigationLeft";
import Card from "../../card/Card";
import Hero from "../../hero/Hero";
import "./Home.css";
import Data from "../../jsons/events.json";
import Events from "../../events/Events";
import Edit from "../../modals/Edit";

class Home extends Component {
  state = {
    cards: [],
    isLoaded: true,
    show: false,
    Data,
    title: "",
    time: "",
    entry: "",
    date: "",
    formValid: false,
    formErrors: { title: "", time: "", entry: "", date: "" },
    titleValid: false,
    dateValid: false,
    timeValid: false,
    entryValid: false,
    promptEdit: false
  };

  componentDidMount() {
    const isLoaded = this.state.isLoaded;

    if (isLoaded) {
      this.load();
    } else {
      console.log("error");
    }
  }

  async load() {
    await this.randomCards()
      .then(array =>
        array.map(card => ({
          name: `${card.name}`,
          price: `${card.price}`,
          img: `${card.image_uris.small}`
        }))
      )
      .then(cards =>
        this.setState({
          cards,
          isLoaded: false
        })
      )
      .catch(err => {
        console.log(err);
      });
  }

  async randomCards() {
    return Promise.all([
      this.random(),
      this.random(),
      this.random(),
      this.random()
    ]).then(array => {
      array.forEach(card => {
        let price = 0.01 + Math.floor(Math.random() * (100 - 0.01));
        card.price = price;
      });
      return array;
    });
  }

  async random() {
    return await fetch(`https://api.scryfall.com/cards/random`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res);
      })
      .then(card => {
        return card;
      });
  }

  showEdit = (e, key) => {
    localStorage.setItem("title", e.target.dataset.title);
    localStorage.setItem("entry", e.target.dataset.entry);
    localStorage.setItem("date", e.target.dataset.date);
    localStorage.setItem("time", e.target.dataset.time);
    localStorage.setItem("desc", e.target.dataset.desc);
    document.getElementsByClassName("titleInput")[0].value =
      e.target.dataset.title;
    document.getElementsByClassName("entryInput")[0].value =
      e.target.dataset.entry;
    document.getElementsByClassName("dateInput")[0].value =
      e.target.dataset.date;
    document.getElementsByClassName("timeInput")[0].value =
      e.target.dataset.time;

    this.setState({
      show: !this.state.show
    });
    console.log(this.state.show);
    console.log(e.target.dataset.index);

    if (this.state.show === false) {
      localStorage.setItem("key", e.target.dataset.index);
    }
  };

  removeEvent = e => {
    e.preventDefault();
    let key = localStorage.getItem("key");
    this.state.Data.splice(key, 1);
  };

  editSubmit = e => {
    e.preventDefault();
    let key = localStorage.getItem("key");
    const { Data } = this.state;
    Data[key].title = document.getElementsByClassName("titleInput")[0].value;
    Data[key].entry = document.getElementsByClassName("entryInput")[0].value;
    Data[key].date = document.getElementsByClassName("dateInput")[0].value;
    Data[key].time = document.getElementsByClassName("timeInput")[0].value;

    this.setState({
      Data
    });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let titleValid = this.state.titleValid;
    let entryValid = this.state.entryValid;
    let timeValid = this.state.timeValid;
    let dateValid = this.state.dateValid;

    switch (fieldName) {
      case "title":
        titleValid = value.match(/^(\w+\S+)$/);
        fieldValidationErrors.title = titleValid ? "" : " is invalid";
        break;
      case "entry":
        entryValid = value.match(/^(\w+\S+)$/);
        fieldValidationErrors.entry = entryValid ? "" : " is invalid";
        break;
      case "time":
        timeValid = value.match(/^(\w+\S+)$/);
        fieldValidationErrors.time = timeValid ? "" : " is invalid";
        break;
      case "date":
        dateValid = value.match(/^(\w+\S+)$/);
        fieldValidationErrors.date = dateValid ? "" : " is invalid";
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        titleValid: titleValid,
        entryValid: entryValid,
        dateValid: dateValid,
        timeValid: timeValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.titleValid });
  }

  promptEdit = e => {
    e.preventDefault();
    this.setState({
      promptEdit: !this.state.promptEdit
    });
  };

  render() {
    const { isLoaded, cards } = this.state;
    const editModal = this.state.show ? "show" : "closed";
    const promptEdit = this.state.promptEdit ? "show" : "closed";
    return (
      <div className="container">
        <NavigationLeft />
        <div className="content">
          <Header />
          <div className={`editModal ${editModal}`}>
            <Edit
              formErrors={this.state.formErrors}
              onChange={this.handleChange}
              edit={this.edit}
              submit={this.editSubmit}
              remove={this.removeEvent}
              close={this.showEdit}
            />
          </div>
          <Hero />
          <div className="contentContainer">
            <div className="sales">
              <h2>Sales</h2>
              <div className="salesContainer">
                {!isLoaded && cards.length > 0
                  ? cards.map((card, index) => {
                      const { name, price, img } = card;
                      return (
                        <Card key={index} name={name} img={img} price={price} />
                      );
                    })
                  : null}
              </div>
            </div>
            <div className="events">
              <h2>Events</h2>
              <div className="eventsContainer">
                {this.state.Data.weekly.map((event, index) => {
                  return (
                    <Events
                      editPrompt={promptEdit}
                      promptEdit={this.promptEdit}
                      index={index}
                      key={index}
                      show={this.showEdit}
                      eventTitle={event.title}
                      src={event.picture}
                      desc={event.description}
                      date={event.date}
                      entry={event.entry}
                      time={event.time}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
