import React from "react";

export default function Detail(props) {
	return (
		<div>
			<h1>{props.title}</h1>
			<button>{props.company}</button>
			<p>{props.text}</p>
			<iframe
				width="560"
				height="315"
				src={props.videosource}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	);
}
