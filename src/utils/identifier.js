'use strict'

// const crypto = require('crypto')

// const salt = require('./salt')

module.exports = (ip, userAgent) => {
	console.log(ip, userAgent)
	const cleanString = (ip + userAgent).replace(/[^a-zA-Z0-9]/g, '')
	console.log(cleanString)
	return cleanString
	// return crypto.createHash('sha256').update(`${ salt() }${ ip }${ userAgent }${ domainId }`)
	// 	.digest('hex')
}