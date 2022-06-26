import React from 'react'
import s from './Learn.module.sass'

export default function Learn({ id,title, description }) {

	return (
		<div className={s.card} >
			<p>{title}</p>
			<p>{description}</p>
		</div>
	)
}
