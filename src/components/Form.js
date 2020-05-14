import React,{Component} from 'react'

class Form extends Component{
    constructor(){
        super()

        this.state={
            username:"",
            comments:"",
            skills:"React"
        }
    }

    handleUsernameChange = (event) =>{
        this.setState({
            username:event.target.value
        })
    }

    handleCommentsChange = (event) =>{
        this.setState({
            comments:event.target.value
        })
    }

    handleSkillsChange = (event) =>{
        this.setState({
            skills:event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.skills}`)
        event.preventDefault()
    }
    render(){
        const {username, skills, comments} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input 
                        type='text' 
                        value={username} 
                        onChange={this.handleUsernameChange}>
                    </input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                        type='text'
                        value={comments}
                        onChange={this.handleCommentsChange}>
                    </textarea>
                </div>
                <div>
                    <label>Skills</label>
                    <select 
                        value={skills}
                        onChange={this.handleSkillsChange}>
                            <option value='React'>React</option>
                            <option value='Angular'>Angular</option>
                            <option value='Vue'>Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form