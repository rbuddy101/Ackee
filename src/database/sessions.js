'use strict'

const Session = require('../models/Session')

const response = (entry) => ({
	id: entry.id,
	siteLocation: entry.siteLocation,
	siteReferrer: entry.siteReferrer,
	siteLanguage: entry.siteLanguage,
	source: entry.source,
	screenWidth: entry.screenWidth,
	screenHeight: entry.screenHeight,
	screenColorDepth: entry.screenColorDepth,
	deviceName: entry.deviceName,
	deviceManufacturer: entry.deviceManufacturer,
	osName: entry.osName,
	osVersion: entry.osVersion,
	browserName: entry.browserName,
	browserVersion: entry.browserVersion,
	browserWidth: entry.browserWidth,
	browserHeight: entry.browserHeight,
	created: entry.created,
	updated: entry.updated,
})

const add = async (data) => {
	const enhance = (entry) => {
		return entry == null ? entry : response(entry);
	}

	// Check if a session with the given clientId already exists
	const existingSession = await Session.findOne({
		clientId: data.clientId
	});

	// If the session doesn't exist, create a new one
	if (!existingSession) {
		return enhance(
			await Session.create({
				clientId: data.clientId,
				domainId: data.domainId,
				siteLocation: data.siteLocation,
				siteReferrer: data.siteReferrer,
				siteLanguage: data.siteLanguage,
				source: data.source,
				screenWidth: data.screenWidth,
				screenHeight: data.screenHeight,
				screenColorDepth: data.screenColorDepth,
				deviceName: data.deviceName,
				deviceManufacturer: data.deviceManufacturer,
				osName: data.osName,
				osVersion: data.osVersion,
				browserName: data.browserName,
				browserVersion: data.browserVersion,
				browserWidth: data.browserWidth,
				browserHeight: data.browserHeight,
			})
		);
	}

	// If a session already exists, you can choose to return the existing session or null
	return enhance(existingSession);
}

const addAction = async (data) => {
	const enhance = (entry) => {
		return entry == null ? entry : response(entry);
	}
	console.log(data);
	// find the session with the given clientId and push the data to the actions array
	return enhance(
		await Session.findOneAndUpdate({
			clientId: data.clientId
		}, {
			$push: {
				actions: data
			}
		}, {
			new: true
		})
	);
}

const all = async () => {
	return await Session.find({})
}


// const update = async (id) => {
// 	const enhance = (entry) => {
// 		return entry == null ? entry : response(entry)
// 	}

// 	return enhance(
// 		await Record.findOneAndUpdate({
// 			id,
// 		}, {
// 			$set: {
// 				updated: Date.now(),
// 			},
// 		}, {
// 			new: true,
// 		}),
// 	)
// }

// const anonymize = (clientId, ignoreId) => {
// 	// Don't return anything about the update
// 	return Record.updateMany({
// 		$and: [
// 			{ clientId },
// 			{
// 				id: {
// 					$ne: ignoreId,
// 				},
// 			},
// 		],
// 	}, {
// 		clientId: null,
// 		siteLanguage: null,
// 		screenWidth: null,
// 		screenHeight: null,
// 		screenColorDepth: null,
// 		deviceName: null,
// 		deviceManufacturer: null,
// 		osName: null,
// 		osVersion: null,
// 		browserName: null,
// 		browserVersion: null,
// 		browserWidth: null,
// 		browserHeight: null,
// 	})
// }

// const del = (domainId) => {
// 	return Record.deleteMany({
// 		domainId,
// 	})
// }

module.exports = {
	add,
	addAction,
	all,
	// update,
	// anonymize,
	// del,
}