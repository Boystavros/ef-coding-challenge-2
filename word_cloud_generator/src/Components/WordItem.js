const WordItem = ({word}) => {
    
    return  <tr>
                <td>{word.word}</td>
                <td>{word.occurences}</td>
            </tr>
}

export default WordItem;