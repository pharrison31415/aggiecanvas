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
			<div style={{backgroundColor: "#d3d3d3", textAlign: "center", marginLeft: "50%", position: "fixed", zIndex: 5, padding: "20px", borderWidth: "2px" , borderStyle: 'solid' ,borderRadius: "20px"}}>
				<h2>Time until you can add another pixel: </h2>
				<p>{count}</p>
			</div>
		)
}