import React from "react";
import { Link } from "react-router-dom";

export default function Studio(props) {
	return (
		<div>
			<Link to={`/company/${props.name}`}>
				<img src={props.source} alt="" />
			</Link>
		</div>
	);
}
