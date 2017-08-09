import React, {Component} from 'react';
import '../styles/App.css';

import {Link} from 'react-router-dom';

import {
  Container,
  Menu,
  Segment,
  Visibility,
  Dropdown,
} from 'semantic-ui-react'

class App extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { visible, activeItem } = this.state;
    const FixedMenu = () => (
      <Menu inverted fixed='top' size='large'>
        <Container>
          <Menu.Item>
            <span style={{fontSize: '17px'}}>In Search of Technology, &nbsp; LLC</span>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Link to='/'>
              <Menu.Item name='who we are' active={activeItem === 'who we are'} onClick={this.handleItemClick}/>
            </Link>
            <Link to='/WhatWeDo'>
              <Menu.Item name='what we do' active={activeItem === 'what we do'} onClick={this.handleItemClick}/>
            </Link>
            <Link to='/Staffing'>
              <Menu.Item name='staffing' active={activeItem === 'staffing'} onClick={this.handleItemClick}/>
            </Link>
            <Dropdown item text='More'>
              <Dropdown.Menu>
                <Link to='/Careers'><Dropdown.Item>Careers</Dropdown.Item></Link>
                <Link to='/ContactUs'><Dropdown.Item>Contact Us</Dropdown.Item></Link>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    )

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 75, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                 <Menu.Item>
                  <span style={{fontSize: '17px'}}>In Search of Technology, &nbsp; LLC</span>
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Link to='/'>
                    <Menu.Item 
                      name='Who We Are'
                      active={activeItem === 'Who We Are'}
                      onClick={this.handleItemClick}
                      >
                      Who We Are
                    </Menu.Item>
                  </Link>
                  <Link to='/WhatWeDo'>
                    <Menu.Item 
                      name='What We Do'
                      active={activeItem === 'What We Do'}
                      onClick={this.handleItemClick}
                      >
                      What We Do
                    </Menu.Item>
                  </Link>
                  <Link to='/Staffing'>
                    <Menu.Item 
                      name='Staffing'
                      active={activeItem === 'Staffing'}
                      onClick={this.handleItemClick}
                      >
                      Staffing
                    </Menu.Item>
                  </Link>
                  <Dropdown style={{marginBottom: '2px'}} item text='More...'>
                    <Dropdown.Menu>
                      <Link to='/Careers'><Dropdown.Item>Careers</Dropdown.Item></Link>
                      <Link to='/ContactUs'><Dropdown.Item>Contact Us</Dropdown.Item></Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Menu>
              </Menu>
            </Container>
          </Segment>
        </Visibility>
        {this.props.children}
      </div>
    );
  }
}

export default App;
