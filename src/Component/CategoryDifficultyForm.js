import React from 'react'

class CategoryDifficultyForm extends React.Component {

    state = {
        category: "",
        difficulty: "",
        

    }

    categoryOptions = [
        {
            title: "General Knowledge",
            value: 9
        },
        {
            title: "Sports",
            value: 21
        },
        {
            title: "History",
            value: 23
        },
        {
            title: "Animals",
            value: 27
        }
    ]

    difficultyOptions = [
        {
            title: "Easy",
            value: "easy"
        },
        {
            title: "Medium",
            value: "medium"
        },
        {
            title: "Hard",
            value: "hard"
        }
    ]

    renderOptions = (options) => {
       return options.map(option =>
           <option value={option.value}>{option.title}</option>
        );
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.mountQuestionsArray(this.state.category, this.state.difficulty)
    }


    render() {
        return (       
            <div>
                <form onSubmit={this.submitHandler}>
                <label for="category">Choose a Category:</label>
                    <select onChange={this.changeHandler} id="category" name="category">
                        <option value="Choose">Choose</option>
                        {this.renderOptions(this.categoryOptions)}
                    </select>
                    <label for="difficulty">Choose a Difficulty:</label>
                    <select onChange={this.changeHandler} id="difficulty" name="difficulty">
                        <option value="Choose">Choose</option>
                        {this.renderOptions(this.difficultyOptions)}
                    </select><br/>
                    <input type="submit"></input>
                </form>
            </div>     
        )
    }
}

export default CategoryDifficultyForm