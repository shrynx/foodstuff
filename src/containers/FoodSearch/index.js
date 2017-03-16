import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import {startFetchFood, fetchFoodData} from './actions'
//styles
import './asstes/styles/foodSearch.scss'

class FoodSearch extends Component {

  constructor() {
    super()
    this.onFoodRequest = this.onFoodRequest.bind(this)
  }

  onFoodRequest(e) {
    e.preventDefault()
    // get the input choice from food input
    const choice = document.querySelector('#food-input').value
    // if the input choice exists, run the fetchFood action
    if (choice) {
      this.props.startFetchFood(choice)
      this.props.fetchFoodData(choice)
      this.props.push('/food')
    }
  }

  render() {
    return (
      <div className="row food-search">
        <form className="col s8 offset-s2" onSubmit={this.onFoodRequest}>
          <div className="row">
            <div className="input-field col s11">
              <input id="food-input" className="food-input" type="text" placeholder="enter food name" autoComplete="off" />
            </div>
            <div className="col pull-center s1">
              <button type="submit" className="btn-floating btn-large hotpink"><i className="material-icons">search</i></button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return  bindActionCreators({fetchFoodData, startFetchFood, push}, dispatch)
}

const mapStateToProps = ( {food} ) => {
  return {food}
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodSearch)
