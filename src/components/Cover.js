import React from "react";
import { Link } from "react-router-dom";

export const Cover = (props) => {
	return (
		<div classname="image-container">
			<Link to={`/movie/${props.id} `}>
				<img src={props.source} alt="" />
			</Link>
		</div>
	);
};
