import React from 'react'
import s from './Author.module.sass'

export default function Author({ id,title, type_boock, description, price }) {

	return (
		<div className={s.card} >
			<p>{title}</p>
			<p>{type_boock}</p>
			<p>{description}</p>
			<p>{price}</p>
			{/* <img src={`./sourse/${linkBook}`} alt="" /> */}
		</div>
	)
}
