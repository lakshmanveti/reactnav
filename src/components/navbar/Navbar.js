import React from 'react'
import Clock from 'react-live-clock'
import navList from '../../data/navigation.json'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      width: 0,
      selectedCityTimeZone: ''
    }
  }
  handleMouseOut = (e) => {
    e.target.className="link";
    this.setState({
      isHovered: !this.state.isHovered,
      selectedCityTimeZone: ''
    });
    
  }

  handleMouseEnter = (e, item) => {
    e.target.className+=" active";
    console.log(item.timezone)
    this.setState({
      left: e.target.getBoundingClientRect().x - 8,
      width: e.target.offsetWidth,
      selectedCityTimeZone: item.timezone
    });
   
  }
  render() {
    return (
      <nav className="top">
        <ul>
        {navList.cities.map(el => {
            return (
              <li><a href="#" className='link' onMouseLeave={this.handleMouseOut} onMouseEnter={(evt) => this.handleMouseEnter(evt, el)}>{el.label}</a></li>
            );
          })}
        </ul>  
        <div className="line" style={{ left: this.state.left, width: this.state.width }}/>
        {this.state.selectedCityTimeZone!='' &&
          <Clock format={'HH:mm:ss'} timezone={this.state.selectedCityTimeZone} />
        }
        
      </nav>
    );
  }
}

export default Navbar