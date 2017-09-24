import {connect } from 'react-redux';
import ProductList from './../components/product-list';



const mapStateToProps = state =>({
items: state.getIn(['products','items'])

})
export default connect(mapStateToProps)(ProductList);