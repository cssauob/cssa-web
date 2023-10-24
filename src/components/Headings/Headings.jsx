
import PropTypes from 'prop-types';
import './Headings.css';

const Headings = ({ title, text }) => {
    return (
        <div className="headings">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

Headings.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Headings;