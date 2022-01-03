export const Note = ({ content, date }) => {
    return (
        <li>
            <p>{content}</p>
            <small>{date}</small>
        </li>
    )
}
