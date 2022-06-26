import React from 'react'
import s from './Trusted.module.sass'

const Trust = ({ id, description, company_name }) => {
	return (
		<div className={s.card}>
			<p>{description}</p>
			<p>{company_name}</p>
		</div>

	)
}
export default Trust;