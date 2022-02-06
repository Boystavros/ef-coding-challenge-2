import WordTable from "../Components/WordTable";
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure} from 'enzyme';

configure({adapter: new Adapter()});

describe('Word Table', () => {
    let container;
    let wordFrequencies;


    beforeEach(() => {
        wordFrequencies = [{
            occurences: 4, 
            word: "product"
        },
        {
            occurences: 1, 
            word: "daily"
        }
        ];
        container = mount(<WordTable wordFrequencies={wordFrequencies}/>);
    })

    it('should return one row for each unique word in collection', () => {
        const wordRow = container.find('.word-row');
        expect(wordRow.length).toEqual(2);
    })
})