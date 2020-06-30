import React from 'react'
import navList from '../../data/navigation.json';
class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      width: 0
    }
  }
  handleMouseOut = (e) => {
    e.target.className="link";
    this.setState({
      isHovered: !this.state.isHovered
    });
    
  }

  handleMouseEnter = (e) => {
    e.target.className+=" active";
    this.setState({
      left: e.target.getBoundingClientRect().x - 8,
      width: e.target.offsetWidth
    });
   
  }
  render() {
    return (
      <nav className="top">
        <ul>
        {navList.cities.map(el => {
            return (
              <li><a href="#" className='link' onMouseLeave={this.handleMouseOut} onMouseEnter={this.handleMouseEnter}>{el.label}</a></li>
            );
          })}
        </ul>  
        <div className="line" style={{ left: this.state.left, width: this.state.width }}/>
      </nav>
    );
  }
}

export default Navbar