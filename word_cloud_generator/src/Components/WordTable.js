import WordItem from './WordItem'

const WordTable = ({wordFrequencies}) => {
    
    const wordItems = wordFrequencies.map((uniqueWord, index) => {
        return <WordItem word={uniqueWord.word} occurences={uniqueWord.occurences} key={index} />
    })
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Occurences</th>
                    </tr>
                </thead>
                <tbody>
                    { wordItems }
                </tbody>
            </table>
        </>
            
    )
}

export default WordTable;