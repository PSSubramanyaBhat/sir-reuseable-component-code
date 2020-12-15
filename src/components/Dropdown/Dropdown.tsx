import React, { useState } from 'react';
import Arrow, { Direction } from '../Arrow';
import styles from './Dropdown.module.css';
import cn from 'classnames';

const Dropdown = () => {
	const [show, setShow] = useState(false);
	const dropdownClassNames = cn(styles.DropdownMenu, {[styles.Hidden]: !show}); 
	return (
		<div className={styles.Dropdown}>
			<div className={styles.Header} onClick={() => setShow((prev: boolean) => !prev)}>
				<div className={styles.SelectedItemText}> Selected Item text </div>
				<Arrow direction={show ? Direction.Top : Direction.Bottom} color="white"></Arrow>
			</div>
			<div className={dropdownClassNames}>
				<div className={styles.DropDownOptions}>Option 1</div>
				<div className={styles.DropDownOptions}>Option 2</div>
				<div className={styles.DropDownOptions}>Option 3</div>
				<div className={styles.DropDownOptions}>Option 4</div>
				<div className={styles.DropDownOptions}>Option 5</div>
			</div>
		</div>
	);
};


export default Dropdown;