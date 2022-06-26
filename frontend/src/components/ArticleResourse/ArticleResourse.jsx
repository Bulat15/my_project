import React from 'react';

import s from './ArticleResourse.module.sass'
const ArticleResourse = ({ id, title, description, date }) => {
	return (

		<div className={s.card} >
			<p>{title}</p>
			<p>{description}</p>
			<p>{date}</p>
		</div>

	);
}

export default ArticleResourse;
