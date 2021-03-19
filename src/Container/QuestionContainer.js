import React from 'react'

class QuestionContainer extends React.Component {

    points = 0

    render() {
        return (
            <div>
                <h2>Correct Answers: {this.points}/10</h2>
            </div>
        )
    }
}

export default QuestionContainer