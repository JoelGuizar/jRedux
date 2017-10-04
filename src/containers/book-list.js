import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    //connecting our reducer into here, so props can take from it
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => {this.props.selectBook(book)}}
          className='list-group-item'>
          {book.title}
          </li>
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

//anything returned from this will end up as props on the
//booklist container
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed to all of our reducers

  return bindActionCreators({ selectBook: selectBook }, dispatch)
  //dispatch dispatches this to all reducers
}

//react-redux makes the connect available
//promotes booklist from component to container
//needs to knoew about new dispatch method select booklist
//make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
