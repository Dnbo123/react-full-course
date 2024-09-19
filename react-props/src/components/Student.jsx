import propTypes from 'prop-types'

function Student(props) {
    return(
<div className="student">
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Student: {props.isStudent ? "Yes" : "No"}</p>
</div>
    );
}
//Creating a prop Types
Student.propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number,
    isStudent: propTypes.bool.isRequired,
}
//Adding a default props
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}


export default Student;