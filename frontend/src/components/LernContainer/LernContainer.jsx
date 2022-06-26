import Learn from '../Learn'
import s from './LernContainer.module.sass'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { getAllLearn } from '../../assynncActions/learn'
import { useDispatch } from 'react-redux'

const LernContainer = () => {
	const dispatch = useDispatch();
	const learning = useSelector((state) => state.learning);

	useEffect(() => {
		if (!learning.id) {
			dispatch(getAllLearn())
		}
	}, []);

	return (
		<div className={s.inner} >
				{learning.map(lern => <Learn key={lern.id} {...lern} />)}
		</div>
	);
}

export default LernContainer;
