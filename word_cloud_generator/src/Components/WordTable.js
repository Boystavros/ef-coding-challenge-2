import WordItem from './WordItem';
import { Table } from 'react-bootstrap';

const WordTable = ({wordFrequencies}) => {
    
    const wordItems = wordFrequencies.map((uniqueWord, index) => {
        return  <WordItem word={uniqueWord} key={index}/>
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