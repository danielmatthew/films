if (Films.find().count() === 0) {
	Films.insert({
		title: 'The Secret Life of Walter Mitty',
		date: new Date()
	});

	Films.insert({
		title: '127 Hours',
		date: new Date()
	})
}