import React from 'react'
import CategoryDifficultyForm from '../Component/CategoryDifficultyForm'
import QuestionContainer from '../Container/QuestionContainer'

class HomeContainer extends React.Component {

    state = {
        triviaQuestionsArray: [],

    }

    mountQuestionsArray = (category, difficulty) => {
        console.log(category, difficulty)
        fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
        .then(response => response.json())
        .then(data => this.setState({triviaQuestionsArray: data}));
        console.log(this.state)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div>
                    <h1>Hello, Welcome to Trivia Trainer!</h1>
                </div>
                <div>
                    <h3>Please Select a Category and Difficulty.</h3>
                </div>
                <div>
                    <CategoryDifficultyForm mountQuestionsArray={this.mountQuestionsArray}/>
                    <QuestionContainer triviaQuestionsArray={this.state.triviaQuestionsArray}/>

                </div>
            </div>
        )
    }
}

export default HomeContainer