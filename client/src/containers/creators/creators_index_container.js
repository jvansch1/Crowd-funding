import { connect } from 'react-redux';
import { fetchCreators } from '../../actions/creators.js'
import CreatorsIndex from '../../components/creators/creators_index.jsx'

const mapStateToProps = (state) => {
  return {
    creators: state.creators
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCreators: () => dispatch(fetchCreators())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatorsIndex)
