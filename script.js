const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
	const particles = [];
	const color = randomColor();
	
	const particle = document.createElement('span');
	particle.classList.add('particle', 'move');
	
	const { x, y } = randomLocation();
	particle.style.setProperty('--x', x);
	particle.style.setProperty('--y', y);
	particle.style.background = color;
	btn.style.background = color;
	
	btn.appendChild(particle);
	
	particles.push(particle);
	
	setTimeout(() => {
	
		for(let i=0; i<100; i++) {
			const innerP = document.createElement('span');
			innerP.classList.add('particle', 'move');
			innerP.style.transform = `translate(${x}, ${y})`;

			const xs = Math.random() * 200 - 100 + 'px';
			const ys = Math.random() * 200 - 100 + 'px';
			innerP.style.setProperty('--x', `calc(${x} + ${xs})`);
			innerP.style.setProperty('--y', `calc(${y} + ${ys})`);
			innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
			innerP.style.background = color;
			
			btn.appendChild(innerP);
			particles.push(innerP)
		}
		
		setTimeout(() => {
			particles.forEach(particle => {
				particle.remove();
			})
		}, 1000)
	}, 1000);
});

function randomLocation() {
	return {
		x: Math.random() * window.innerWidth - window.innerWidth / 2 + 'px',
		y: Math.random() * window.innerHeight - window.innerHeight / 2 + 'px',
	}
}

function randomColor() {
	return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
}




document.addEventListener('DOMContentLoaded', () => {
	const video = document.getElementById('camera-feed');
	const next = document.getElementById('next');
	
	const firstt = document.getElementById('first');
	const lastt = document.getElementById('last');
	const photoButton = document.getElementById('photo-button');
	const capturedPhoto = document.getElementById('captured-photo');
	const downloadButton = document.getElementById('download-button');

	// Get user media
	navigator.mediaDevices.getUserMedia({ video: true })
		.then((stream) => {
			video.srcObject = stream;
		})
		.catch((error) => {
			console.error('Error accessing camera:', error);
		});

	// Take photo on button click
	photoButton.addEventListener('click', () => {
		const canvas = document.createElement('canvas');
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
		const context = canvas.getContext('2d');
		context.drawImage(video, 0, 0, canvas.width, canvas.height);

		// Set the captured photo as the source for the img element
		capturedPhoto.src = canvas.toDataURL('image/png');

		// Show the captured photo and hide the video feed
		capturedPhoto.style.display = 'block';
		video.style.display = 'none';

		// Hide photo button, show download button
		photoButton.style.display = 'none';
		downloadButton.style.display = 'block';
		next.style.display = 'block';

		// Set the download link href to the data URL of the captured photo
		downloadButton.href = canvas.toDataURL('image/png');

		// Stop the video stream
		
		const tracks = stream.getTracks();
		tracks.forEach(track => track.stop());
		video.remove();
	});


	next.addEventListener('click', () => {
		firstt.style.display = 'none';
		lastt.style.display = 'block';
	});
	
});