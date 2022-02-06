const WordItem = ({word}) => {
    
    return  <tr className="word-row">
                <td className="word-cell">{word.word}</td>
                <td className="occurences-cell">{word.occurences}</td>
            </tr>
}

export default WordItem;