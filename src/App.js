import React, { Component } from 'react';
import 'normalize.css';
import 'reset-css';
import './App.scss';
import { connect } from 'react-redux';
import * as actions from './store/actions/housemap';
import HouseItem from './components/HouseItem/HouseItem'; 


class App extends Component {
  

  componentDidMount() {
    this.props.getData();
	};


  render() {
    const listHouse = Object.values(this.props.housemap.houseList);

    return (
        <div className="house-map-wrap">       
                {listHouse.map((item)=>(
                  < HouseItem                   
                    key={item.id}
                    area = {item.area}
                    adress = {item.full_address}
                    price = {item.price}
                    images = {item.images}
                    priceImage = {item.images.childred}
           
                  />
                ))}
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  housemap: state.housemap
});


const mapDispatchToProps = (dispatch) => ({
   getData: () => dispatch(actions.getHouseMapData()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
