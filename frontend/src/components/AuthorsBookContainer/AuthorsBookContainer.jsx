import Author from '../Author'
import s from './AuthorsBookContainer.module.sass'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { getAllAddAutors } from '../../assynncActions/autorsBoock'
import { useDispatch } from 'react-redux'

const AuthorsBookContainer = () => {
	const dispatch = useDispatch();
	const authors = useSelector((state) => state.authors);

	useEffect(() => {
		if (!authors.id) {
			dispatch(getAllAddAutors())
		}
	}, []);

	return (
		<div className={s.inner} >
			{authors.map(author => <Author key={author.id} {...author} />)}
		</div>
	);
}

export default AuthorsBookContainer;
