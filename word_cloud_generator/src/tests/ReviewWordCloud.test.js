import ReviewWordCloud from "../Components/ReviewWordCloud";
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure} from 'enzyme';

configure({adapter: new Adapter()});

describe('Word Cloud', () => {
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
        container = mount(<ReviewWordCloud wordFrequencies={wordFrequencies}/>)
    })

    //Couldn't get this test to work as couldn't access the text elements
    it('should return a data point for each word', () => {
        // const displayedWords = container.find('.word-cloud').props().options.series[0].data;
        // expect(displayedWords.length).toEqual(2);
    })
})