import React from 'react'
import s from './Learn.module.sass'

export default function Learn({ id,description }) {

	return (
		<div className={s.card} >
			<p>{description}</p>
		</div>
	)
}
