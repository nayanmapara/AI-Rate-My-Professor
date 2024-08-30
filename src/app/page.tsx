"use client";

import React, { useState } from "react";

export default function Home() {

	return (
		<div className="overall-style">
			<div className="heading-one-style">
				<h1 className="heading-one-size"> Rate My Professor</h1>
			</div>
			<div className="content-style">
				<div className="card-style">
					<input type="text" placeholder="School Name" className="input-style" />
					<input type="text" placeholder="Professor Name" className="input-style" />
					<button className="button-style">Submit</button>
				</div>
			</div>
		</div>
	);
}
