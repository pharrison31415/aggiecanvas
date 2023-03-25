import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function Clock() {
    return (
        <div style={{marginRight : "50%"}}>
            <h2>Time left till next pixel!</h2>
            <CountdownCircleTimer
              isPlaying
              duration={60}
                colors={[
                    ['#A30000', 0.33],
										['#F7B801', 0.33],
										['#004777', 0.33]
                  ]}
						>
							{({  remainingTime}) => remainingTime}
						</CountdownCircleTimer>
        </div>
    )
}