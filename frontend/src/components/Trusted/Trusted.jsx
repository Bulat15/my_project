import React from 'react'
import s from './Trusted.module.sass'

const Trust = ({ id, description, company_name,	url_title}) => {
	return (
		<div className={s.card}>
			<p>{description}</p>
			<p>{company_name}</p>
			<p>{url_title}</p>
		</div>

	)
}
export default Trust;