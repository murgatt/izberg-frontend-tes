import { connect } from 'react-redux';
import DataViewerComponent from '../components/dataViewer';

const mapStateToProps = (state) => {
    return state
};

const DataContainer = connect(
    mapStateToProps
)(DataViewerComponent);


export default DataContainer;