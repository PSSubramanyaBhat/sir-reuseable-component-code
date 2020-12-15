import React, { useState } from 'react';
import Arrow, { Direction } from '../Arrow';
import styles from './Dropdown.module.css';

const Dropdown = () => {
	const [show, setShow] = useState(false);
	return (
		<div className={styles.Dropdown}>
			<div className={styles.Header} onClick={() => setShow((prev: boolean) => !prev)}>
				<div className={styles.SelectedItemText}> Selected Item text </div>
				<Arrow direction={show ? Direction.Top : Direction.Bottom} color="white"></Arrow>
			</div>
			{show
				? <div className={styles.DropdownMenu}>
					<div className={styles.DropdownMenuOptions}>Option 1</div>
					<div className={styles.DropdownMenuOptions}>Option 2</div>
					<div className={styles.DropdownMenuOptions}>Option 3</div>
					<div className={styles.DropdownMenuOptions}>Option 4</div>
					<div className={styles.DropdownMenuOptions}>Option 5</div>
				</div>
				: ''}
		</div>
	);
};


export default Dropdown;