const WordItem = ({word, occurences}) => {
    
    return (
        <tr>
            <td>{word}</td><td>{occurences}</td>
        </tr>
    )
}

export default WordItem;