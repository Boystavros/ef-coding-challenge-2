import WordItem from './WordItem';
import { Table } from 'react-bootstrap';

const WordTable = ({wordFrequencies}) => {
    
    const wordItems = wordFrequencies.map((uniqueWord) => {
        return  <tr>
                    <td>{uniqueWord.word}</td>
                    <td>{uniqueWord.occurences}</td>
                </tr>
    })
    
    return (
        <>
            <Table size="sm" striped hover className='table'>
            <thead>
                <tr>
                    <th>Word</th>
                    <th>Occurences</th>
                </tr>
            </thead>
            <tbody>
                { wordItems }
            </tbody>
            </Table>
        </>
            
    )
}

export default WordTable;