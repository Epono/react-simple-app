export const Welcome = ({ name, ...props }) => {

    return (
        <h3 style={props.style}>
            {name}, welcome to my new React App Website!
        </h3>
    )
}

// export default Welcome;