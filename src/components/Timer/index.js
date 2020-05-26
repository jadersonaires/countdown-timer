import React from 'react'
import { Box, Item} from './styled'

const Timer = (props) => {
    return (
        <Box>
            <Item>
                <div className="number" id="days">{props.days}</div>
                <footer>Days</footer>
            </Item>
            <Item>
                <div className="number" id="hours">{props.hours}</div>
                <footer>Hours</footer>
            </Item>
            <Item>
                <div className="number" id="minutes">{props.minutes}</div>
                <footer>Minutes</footer>
            </Item>
            <Item>
                <div className="number" id="seconds">{props.seconds}</div>
                <footer>Seconds</footer>
            </Item>
        </Box>
    )
}

export default Timer