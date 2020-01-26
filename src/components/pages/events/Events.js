import React, { Component } from 'react';
import Header from '../../header/Header';
import NavigationLeft from '../../nav/NavigationLeft';
import './Events.css';
import Data from '../../jsons/events.json';
import Event from '../../events/Events';
import EventModal from '../../modals/EventModal';

class Events extends Component{
    state={
        Data,
        showWeekly:'',
        showOther:'',
        title:'',
        desc:'',
        date:'',
        entry:'',
        time:'',
        titleValid:false,
        formErrors:{title:'',time:'',entry:'',date:'',desc:''},
    }

    componentDidMount(){

    }

    addWeekly=()=>{
        this.setState({
            showWeekly:!this.state.showWeekly
        })
    }

    addOther=()=>{
        this.setState({
            showOther:!this.state.showOther
        })
    }

    submitWeekly=(e)=>{
        e.preventDefault();
        let event={
            title:this.state.title,
            desc:this.state.desc,
            entry:this.state.entry,
            time:this.state.time,
            date:this.state.date,
            picture:"https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_850/https://cardgamebase.com/wp-content/uploads/Throne-of-Eldraine-MTG-New-Booster.jpg"
        }
        Data.weekly.push(event)
        this.setState({
            showWeekly:!this.state.showWeekly
        })
    }

    submitOther=(e)=>{
        e.preventDefault();
        let event={
            title:this.state.title,
            desc:this.state.desc,
            entry:this.state.entry,
            time:this.state.time,
            date:this.state.date,
            picture:"https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_850/https://cardgamebase.com/wp-content/uploads/Throne-of-Eldraine-MTG-New-Booster.jpg"
        }
        Data.other.push(event)
        this.setState({
            showOther:!this.state.showOther
        })
    }

    handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
    
        this.setState({[name]:value},
            ()=>{this.validateField(name,value)})
        console.log(this.state.title)

    }

    validateField(fieldName, value){
        let fieldValidationErrors = this.state.formErrors;
        let titleValid = this.state.titleValid;
        let entryValid = this.state.entryValid;
        let timeValid = this.state.timeValid;
        let dateValid = this.state.dateValid;

        switch(fieldName) {
            case 'title':
              titleValid = value.match(/^(\w+\S+)$/);
              fieldValidationErrors.title = titleValid ? '' : ' is invalid';
              break;
            case 'entry':
                entryValid = value.match(/^(\w+\S+)$/);
                fieldValidationErrors.entry = entryValid ? '' : ' is invalid';
            break;
            case 'time':
              timeValid = value.match(/^(\w+\S+)$/);
              fieldValidationErrors.time = timeValid ? '' : ' is invalid';
            break;
            case 'date':
              dateValid = value.match(/^(\w+\S+)$/);
              fieldValidationErrors.date = dateValid ? '' : ' is invalid';
            break;
            default:
              break;
        }

        this.setState({formErrors: fieldValidationErrors,
            titleValid: titleValid,
            entryValid: entryValid,
            dateValid: dateValid,
            timeValid: timeValid,
          }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.titleValid});
    }

    render(){
        const showWeekly=this.state.showWeekly? 'show':'closed';
        const showOther=this.state.showOther? 'show':'closed';
        return(
            <div className="container">
                <Header/>
                <div className="homePage">
                    <NavigationLeft className="leftNav"/>
                    <div className="content">
                        <div className={`showWeekly ${showWeekly}`}><EventModal change={this.handleChange} submit={this.submitWeekly} cancel={this.addWeekly}/></div>
                        <div className={`showOther ${showOther}`}><EventModal change={this.handleChange} submit={this.submitOther} cancel={this.addOther}/></div>
                        <section className="weekly">
                        <div className="util">
                                <h2>Weekly</h2>
                                <img onClick={this.addWeekly} src={require('../../../images/plus (1).png')} alt="add icon"/>
                            </div>
                            <div className="eventsCont">
                                {this.state.Data.weekly.map((event,index)=>{
                                                    return <Event index={index} key={index} show={this.showEdit} eventTitle={event.title} src={event.picture} desc={event.description} date={event.date} entry={event.entry} time={event.time}/>
                                })}
                            </div>
                        </section>

                        <section className="other">
                            <div className="util">
                                <h2>Other</h2>
                                <img onClick={this.addOther} src={require('../../../images/plus (1).png')} alt="add icon"/>
                            </div>
                            <div className="eventsCont">
                                {this.state.Data.other.map((event,index)=>{
                                                    return <Event index={index} key={index} show={this.showEdit} eventTitle={event.title} src={event.picture} desc={event.description} date={event.date} entry={event.entry} time={event.time}/>
                                })}
                            </div>
                        </section>
                    </div>
                </div>
                

            </div>
        )
    }

}

export default Events;

