import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import wordCloud from 'highcharts/modules/wordcloud';

wordCloud(Highcharts);

const ReviewWordCloud = ({wordFrequencies}) => {
  
    const wordData = wordFrequencies.map((word) => {
        return {
            name: word.word,
            weight: word.occurences
        }
    })

    const options = {
        series: [{
            type: 'wordcloud',
            data: wordData,
            // name: 'Occurences'
        }],
        title: {
            text: 'Word cloud of product review words'
        }
    }

    return (
        <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      )

}

export default ReviewWordCloud;