import * as React from "react";
import "../styles/whateverIwant.css";
import { loadResults, postSurvey } from "../client/surveyDB";


class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeOfFood: "",
      recommend: "",
      rating: 0,
      name: "",
    };
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();

    var surveyEntry = {
      name: this.state.name,
      typeOfFood: this.state.typeOfFood,
      recommend: this.state.recommend,
      rating: this.state.rating
    };

    postSurvey(surveyEntry)
  };

  handleOnChange = async (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  

  };

  render() {
    return (
      <div className="card container">
        <form onSubmit={this.handleFormSubmit}>

          <label>
            Name
            <br/>
            
            <input name="name" onChange={this.handleOnChange}>
            </input>
          </label>
          <br/>
          <br/>
          <label>
            Type of Food
            <br />
            <select name="typeOfFood" onChange={this.handleOnChange}>
            <option value="">-</option>
              <option value="American">American</option>
              <option value="Japanese">Japanese</option>
              <option value="Indian">Indian</option>
              <option value="Thai">Thai</option>
              <option value="Chinese">Chinese</option>
              <option value="Mexican">Mexican</option>
              <option value="Korea">Korea</option>
            </select>
          </label>

          <div name="recommend" onChange={this.handleOnChange}>
            <br />
            Would you recommend
            <br />
            <input type="radio" value="Yes" name="recommend" /> Yes
            <input type="radio" value="No" name="recommend" /> No
          </div>



          <div onChange={this.handleOnChange} name="rating">
            <br />
            Rating
            <br />
            1<input type="radio" value={1} name="rating"></input>
            2<input type="radio" value={2} name="rating"></input>
            3<input type="radio" value={3} name="rating"></input>
            4<input type="radio" value={4} name="rating"></input>
            5<input type="radio" value={5} name="rating"></input>
          </div>

          <br />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
