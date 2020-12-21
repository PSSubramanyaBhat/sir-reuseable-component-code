import Dropdown from './Dropdown';
import React, { useState } from 'react';
import week from '../../week';

// const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default {
	title: 'Pokemon/Dropdown',
	component: Dropdown,
};

export const Dropdown_1 = () => {
	const [day, setDay] = useState("Sunday");

	return (
		<div>
			<Dropdown options={week} selectedoption={day} onItemSelected={(weekDay: string) => setDay(weekDay)} />
			<br></br>
			<input type="text" id="fname" name="fname" />
		</div>
	);
};