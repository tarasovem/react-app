import { useContext } from 'react';
import { UserContext } from '../../context/user.context.jsx';
import styles from './SelectUser.module.css';
function SelectUser() {
	const {userId, setUserId} = useContext(UserContext);

	const changeUser = (event) => {
		setUserId(Number(event.target.value));
	};

	return (
		<select name="user" id="user" value={userId} onChange={changeUser} className={styles['select']}>
			<option value="1">Вася</option>
			<option value="2">Петя</option>
			<option value="3">Маша</option>
		</select>
	);
}

export default SelectUser;