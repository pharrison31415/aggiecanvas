import { useState, useEffect} from 'react'

export default function Clock() {
    const [count, setCount] = useState(60);
    const [togglePixel, setTogglePixel] = useState(false);

    useEffect(() => {
      if (togglePixel) {
				const interval = setInterval(() => {
					setCount(count => count - 1)
				}, 1000);

				return () => clearInterval[interval]

			}
    }, [togglePixel])

		return (
			<div style={{textAlign : "center"}}>
				<h2>Time until you can add another pixel: </h2>
				<p>{count}</p>
			</div>
		)
}