import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Quiz from './Quiz'

class Category extends Component {
  render() {
    return (
      <Router>
      <Card style={{height: '250px', boxShadow: '5px 5px'}}>
        <Image src={this.props.image} />
        <Card.Content>
        {
          (this.props.category.length > 27)
          ?
          <Card.Header align='center' style={
            {
              transform: 'translateY(-100px)', color: 'white',
              textShadow: '2px 2px black'
            }}>
              {<Link to='/id'>{this.props.category}</Link>}
            <Route path='/:id' component={Quiz} />
          </Card.Header>
          :
          (this.props.category.length > 16)
          ?
          <Card.Header align='center' style={
            {
              transform: 'translateY(-80px)', color: 'white',
              textShadow: '2px 2px black'
            }}>
              {this.props.category}
          </Card.Header>
          :
          <Card.Header align='center' style={
            {
              transform: 'translateY(-60px)', color: 'white',
              textShadow: '2px 2px black'
            }}>
              {this.props.category}
          </Card.Header>
        }

        </Card.Content>
      </Card>
      </Router>
    )
  }
}

export default Category
