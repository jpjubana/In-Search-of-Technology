import React, {Component} from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import {Link} from 'react-router-dom';

//import semantic ui css
import {Menu} from 'semantic-ui-react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="App">
        <Menu secondary>
          <Menu.Menu position='right'>
            <Link to='/'>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
            </Link>
            <Link to='/WhatWeDo'>
              <Menu.Item name='what we do' active={activeItem === 'what we do'} onClick={this.handleItemClick}/>
            </Link>
            <Link to='/Staffing'>
              <Menu.Item name='staffing' active={activeItem === 'staffing'} onClick={this.handleItemClick}/>
            </Link>
            <Link to='/Careers'>
              <Menu.Item name='careers' active={activeItem === 'careers'} onClick={this.handleItemClick}/>
            </Link>
            <Link to='/ContactUs'>
              <Menu.Item name='contact us' active={activeItem === 'contact us'} onClick={this.handleItemClick}/>
            </Link>
          </Menu.Menu>
        </Menu>
        {this.props.children}
      </div>
    );
  }
}

export default App;
