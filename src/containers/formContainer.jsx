import { connect } from 'react-redux';
import FormComponent from '../components/form';
import { changeValue } from '../redux/actions';

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (value, id) => {dispatch(changeValue(value, id))}
    }
};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormComponent);


export default FormContainer;