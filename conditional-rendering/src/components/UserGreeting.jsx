import  PropTypes from 'prop-types'

function UserGreeting(props) {
   if(props.isLoggedIn){
   return <h2 className="welcome-msg">Welcome {props.username}</h2>
   }else{
    return  <h2 className="login-prompt">Please login to view your account information</h2>
   };
}
//inserting prop types
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting;