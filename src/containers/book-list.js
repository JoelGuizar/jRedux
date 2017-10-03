import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList(){
    //connecting our reducer into here, so props can take from it
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className='list-group-item'> {book.title} </li>
      )
    })
  }

  render(){
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

//whatever is returned will show up as props, inside of BooksLift
//usually returns an object
//connection between redux/container/react
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

//react-redux makes the connect available
export default connect(mapStateToProps)(BookList)
