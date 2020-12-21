import React, { useState } from 'react';
import Arrow, { Direction } from '../Arrow';
import styles from './Dropdown.module.scss';
import cn from 'classnames';

export interface DropdownItemProp {
	title: string,
	onClick: Function,
}

/*
export interface DropdownOption {
title: string,
}
*/  //DOUBT......

export interface DropdownProps {
	options: string[],
	selectedoption: string,
	onItemSelected: Function,
}

const DropdownItem = ({ title, onClick }: DropdownItemProp) => {
	return (
		<div
			className={styles.Option}
			onClick={() => {
				onClick(title);
			}}
		>
			{title}
		</div>
	);
}

const Dropdown = ({ options, selectedoption, onItemSelected }: DropdownProps) => {
	const [active, setActive] = useState(false);
	const [selectedItem, setSelectedItem] = useState(selectedoption);
	const dropdownClasses = cn(styles.Dropdown, { [styles.Active]: active });
	const menuClasses = cn(styles.Menu, { [styles.Active]: active });

	const onItemClicked = (item: string) => {
		setSelectedItem(item);
		onItemSelected(item);
		setActive(false);
	}


	return (
		<div className={styles.DropdownContainer}>
			<div
				className={dropdownClasses}
			>

				<div className={styles.Header} onClick={() => setActive((prev: boolean) => !prev)}>
					<div className={styles.SelectedItemText}> {selectedItem}</div>
					<Arrow direction={active ? Direction.Top : Direction.Bottom} color={'#212121'}></Arrow>
				</div>

				<div
					className={menuClasses}
				>
					{options.map((weekDayName, id) => {
						return (
							<DropdownItem title={weekDayName} onClick={onItemClicked}></DropdownItem>
						);
					})}
				</div>
			</div>
		</div>
	);
};


export default Dropdown;