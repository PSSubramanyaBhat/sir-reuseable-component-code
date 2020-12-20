import React, { useState } from 'react';
import Arrow, { Direction } from '../Arrow';
import styles from './Dropdown.module.css';
import cn from 'classnames';


const DropdownItem = ({ title, onClick }) => {
	return (
		<div
			// className={styles.Dropdownitem}
			onClick={() => {
				onClick(title);
			}}
		>
			{title}
		</div>
	);
}

const Dropdown = () => {
	// const [show, setShow] = useState(false);
	const [active, setActive] = useState(false);
	const [selectedItem, setSelectedItem] = useState("Option 1");
	// const dropdownClassNames = cn(styles.DropdownMenu, { [styles.Hidden]: !show });
	// const dropdownContainerClassNames = cn(styles.Dropdown, { [styles.Hidden]: !show });
	// const menuClasses = cn(styles.Menu, { [styles.Active]: show });
	const menuClasses = cn(styles.Menu, { [styles.Active]: active });
	const onItemClicked = (item) => {
		setSelectedItem(item);
		// setShow(false);
		setActive(false);
	}


	return (
		<div className={styles.DropdownContainer}>
			<div
			// className={dropdownContainerClassNames}
			>
				{/* <div className={styles.Header} onClick={() => setShow((prev: boolean) => !prev)}>
					<div className={styles.SelectedItemText}> {selectedItem}</div>
					<Arrow direction={show ? Direction.Top : Direction.Bottom} color={'#212121'}></Arrow>
				</div> */}

				<div className={styles.Header} onClick={() => setActive((prev: boolean) => !prev)}>
					<div className={styles.SelectedItemText}> {selectedItem}</div>
					<Arrow direction={active ? Direction.Top : Direction.Bottom} color={'#212121'}></Arrow>
				</div>

				<div
				// className={dropdownClassNames}
				>
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
		</div>
	);
};


export default Dropdown;