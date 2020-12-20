import Dropdown from './Dropdown';
import React, { useState } from 'react';


export default {
	title: 'Pokemon/Dropdown',
	component: Dropdown,
};

export const Dropdown_1 = () => (
	<div>
		<Dropdown />
		<br></br>
		<input type="text" id="fname" name="fname" />
	</div>
);