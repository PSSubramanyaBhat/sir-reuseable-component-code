import React, { useState } from 'react';
import Arrow, { Direction } from '../Arrow';
import styles from './Dropdown.module.css';
import cn from 'classnames';


const DropdownItem = ({ title, onClick }) => {
	return (
		<div
			onClick={() => {
				onClick(title);
			}}
		>
			{title}
		</div>
	);
}

const Dropdown = () => {
	const [show, setShow] = useState(false);
	const [selectedItem, setSelectedItem] = useState("Option 1");
	const dropdownClassNames = cn(styles.DropdownMenu, { [styles.Hidden]: !show });

	const onItemClicked = (item) => {
		setSelectedItem(item);
		setShow(false);
	}


	return (
		<div className={styles.Dropdown}>
			<div className={styles.Header} onClick={() => setShow((prev: boolean) => !prev)}>
				<div className={styles.SelectedItemText}> {selectedItem}</div>
				<Arrow direction={show ? Direction.Top : Direction.Bottom} color="white"></Arrow>
			</div>
			<div className={dropdownClassNames}>
				<DropdownItem title="Option 1" onClick={onItemClicked}></DropdownItem>
				<DropdownItem title="Option 2" onClick={onItemClicked}></DropdownItem>
				<DropdownItem title="Option 3" onClick={onItemClicked}></DropdownItem>
				<DropdownItem title="Option 4" onClick={onItemClicked}></DropdownItem>
				<DropdownItem title="Option 5" onClick={onItemClicked}></DropdownItem>
				<DropdownItem title="Option 6" onClick={onItemClicked}></DropdownItem>

				{/* 
				<div className={styles.DropDownOptions}>Option 1</div>
				<div className={styles.DropDownOptions}>Option 2</div>
				<div className={styles.DropDownOptions}>Option 3</div>
				<div className={styles.DropDownOptions}>Option 4</div>
				<div className={styles.DropDownOptions}>Option 5</div>
				<div className={styles.DropDownOptions}>Option 6</div> */}
			</div>
		</div>
	);
};


export default Dropdown;