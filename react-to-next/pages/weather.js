import React, { Component } from 'react'

import axios from 'axios'
import styles from '../styles/Home.module.css'

export class Weather extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             city:"",
             weather_descriptions:"",
             localtime:"",
             temperature:""
        }
    }
    
    componentDidMount()
    {
        axios.get("http://api.weatherstack.com/current?access_key=6ac8d899ce05c93a5a64b1a04e56fff3&query=kolkata").then(res=>{
            const data = res.data;
            this.setState({
                city:data.location.name,
                weather_descriptions:data.current.weather_descriptions[0],
                localtime:data.location.localtime,
                temperature:data.current.temperature
            })
            console.log(res);
        })
    }
    render() {
        return (
            <div className={styles.card}>
            <div className={styles.search}>
              <h1 className={styles.city}>{this.state.city}</h1>
              
            </div>
            <p className={styles.description}>{this.state.weather_descriptions}</p>
            <p className={styles.date}>{this.state.localtime}</p>
            <div className={styles.numbers}>
              <div className={styles.temp}>
                <span>{this.state.temperature}</span><sup className={styles.unit}>°C</sup>
              </div>
              <div className={styles.icon}>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              </div>
              
            </div>
            <hr />
           
          </div>
        )
    }
}

export default Weather
