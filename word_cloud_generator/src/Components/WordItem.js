const WordItem = ({word}) => {
    
    return  <tr>
                <td id="word-cell">{word.word}</td>
                <td id="occurences-cell">{word.occurences}</td>
            </tr>
}

export default WordItem;