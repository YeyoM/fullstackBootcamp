const Suma = ({parts}) => {

    let total = 0;

    for (let i = 0; i < parts.length; i++) {
        total = total + parts[i].exercises;
    }

    return (
        <p>Number of exercises: {total}</p>
    )
}

export default Suma;