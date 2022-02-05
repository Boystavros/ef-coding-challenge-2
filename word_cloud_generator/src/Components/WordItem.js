const WordItem = (uniqueWord) => {
    
    return (
        <tr>
            <td>{uniqueWord.word}</td><td>{uniqueWord.occurences}</td>
        </tr>
    )
}

export default WordItem;