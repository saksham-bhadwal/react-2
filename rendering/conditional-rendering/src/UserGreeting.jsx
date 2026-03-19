function UserGreeting(props){
    if (props.isLogged) {
        return <h2>welcome {props.username}</h2>
    }

}

export default UserGreeting