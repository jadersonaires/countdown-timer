import React, { Component } from 'react';
import { Main as  MainDiv } from './styled'
import Timer from '../Timer'

class Main extends Component {

    state = {
        date: '',
        days: 'D',
        hours: 'O',
        minutes: 'N',
        seconds: 'E'
    }

    componentDidMount = () => {
        this.calculeteDate(new Date())
    }

    handleChange = (e) => {
        this.setState({ date: e.target.value })
        this.calculeteDate(e.target.value)
    }

    calculeteDate = (date) => {
        let interval = ''
        if (date.length > 0) {
            interval = setInterval(() => {

                const range = new Date(this.state.date).setHours(23, 59, 59) - new Date().getTime()
                this.setState({
                    days: Math.floor(range / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((range % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((range % (1000 * 60)) / 1000)
                })
                if (range < 0) {
                    clearInterval(interval);
                    this.setState({ days: 'D', hours: 'O', minutes: 'N', seconds: 'E' })
                }
            }, 1000)
        }
    }

    render() {
        return (
            <>
                <MainDiv>
                    <h1>Comming Soon</h1>
                    <p>stay turned</p>
                    <form>
                        <input
                            name="date"
                            id="date"
                            type="date"
                            value={this.state.date}
                            onChange={this.handleChange}
                        />
                    </form>
                </MainDiv>

                <Timer days={this.state.days}
                    hours={this.state.hours}
                    minutes={this.state.minutes}
                    seconds={this.state.seconds} />
            </>
        )
    }
}

export default Main;