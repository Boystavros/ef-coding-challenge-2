import WordItem from "../Components/WordItem";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure} from 'enzyme';

configure({adapter: new Adapter()});

describe('Word Item', () => {
    let container;
    let word;
    let index;    

    beforeEach(() => {
        word = {occurences: 1, word: 'test'};
        index = 1;
        container = shallow(<WordItem word={word} key={index}/>);
    })

    it('should display the word', () => {
        const wordCell = container.find('.word-cell');
        expect(wordCell.text()).toEqual('test');
    });

    it('should display the occurences', () => {
        const occurencesCell = container.find('.occurences-cell');
        expect(occurencesCell.text()).toEqual('1');
    })

})
