import React, { Component } from 'react'
import { Container, Card } from 'semantic-ui-react'

import './Home.css'

import Category from './Category'

import pic1 from '../images/pic1.png'

class Home extends Component {
  state = {
    categories: [
      {
        name: 'General Knowledge',
        image: pic1
      },
      {
        name: 'Entertainment: Books',
        image: pic1
      },
      {
        name: 'Entertainment: Film',
        image: pic1
      },
      {
        name: 'Entertainment: Music',
        image: pic1
      },
      {
        name: 'Entertainment: Musicals & Theatres',
        image: pic1
      },
      {
        name: 'Entertainment: Television',
        image: pic1
      },
      {
        name: 'Entertainment: Board Games',
        image: pic1
      },
      {
        name: 'Science & Nature',
        image: pic1
      },
      {
        name: 'Science: Computers',
        image: pic1
      },
      {
        name: 'Science: Mathematics',
        image: pic1
      },
      {
        name: 'Mythology',
        image: pic1
      },
      {
        name: 'Sports',
        image: pic1
      },
      {
        name: 'Geography',
        image: pic1
      },
      {
        name: 'History',
        image: pic1
      },
      {
        name: 'Politics',
        image: pic1
      },
      {
        name: 'Art',
        image: pic1
      },
      {
        name: 'Celebrities',
        image: pic1
      },
      {
        name: 'Animals',
        image: pic1
      },
      {
        name: 'Vehicles',
        image: pic1
      },
      {
        name: 'Entertainment: Comics',
        image: pic1
      },
      {
        name: 'Science: Gadgets',
        image: pic1
      },
      {
        name: 'Entertainment: Japanese Anime & Manga',
        image: pic1
      },
      {
        name: 'Entertainment: Cartoon & Animations',
        image: pic1
      }
    ]
  }
  render() {
    const list = this.state.categories.map((x,idx) => <Category key={idx} category={x.name} image={x.image}/>)
    return (
      <div>
      <h1 align='center'>Trivia Night</h1>
      <h2 align='center'>Choose a category below:</h2>
      <Container align='center'>
        <Card.Group itemsPerRow={5}>
          {list}
        </Card.Group>
      </Container>
    </div>
    )
  }
}

export default Home
