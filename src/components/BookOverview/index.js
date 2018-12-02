import { connect } from 'react-redux';
 
import { selectBook, saveBook } from '../../actions'
import { BookOverviewDumb } from './BookOverviewDumb';


const mapStateToProps = state => {
  return {
    books: state.books,
    currentBook: state.currentBook
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBookSelect: id => {
      dispatch(selectBook(id));
    },
    onBookSave: () => {
      dispatch(saveBook());
    }
  };
}


export const BookOverview = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookOverviewDumb);
