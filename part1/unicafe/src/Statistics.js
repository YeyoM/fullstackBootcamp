const Statistics = ({ good, neutral, bad }) => {

    let total = good + bad + neutral;
    let average = (good - bad) / total;
    let positive = (good / total) * 100;

    return (
        <table>
            <tbody>
                <tr>
                    <th>Statistics</th>
                </tr>
                <tr>
                    <th>Good: </th>
                    <td>{good}</td>
                </tr>
                <tr>
                    <th>Neutral: </th>
                    <td>{neutral}</td>
                </tr>
                <tr>
                    <th>Bad: </th>
                    <td>{bad}</td>
                </tr>
                <tr>
                    <th>All: </th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Average: </th>
                    <td>{average}</td>
                </tr>
                <tr>
                    <th>Positive: </th>
                    <td>{positive}</td>
                </tr>
            </tbody>

        </table>
    )
}

export default Statistics;