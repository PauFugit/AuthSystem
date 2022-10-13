import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer text-center"
		style={{ color: "rgba(4, 4, 131, 0.488)", float: "inline-end", paddingRight: "25rem" }}>
		<p>
			Made with  <i className="fa fa-heart"
				style={{ color: "black" }} />  by{" "}
			<Link
				className="p-1"
				style={{ color: "rgba(4, 4, 131, 0.488)" }} to="https://github.com/PauFugit">PauFugit</Link>
		</p>
	</footer>
);
