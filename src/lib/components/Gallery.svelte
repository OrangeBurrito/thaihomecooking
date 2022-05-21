<div class="gallery">
	<img src="https://orangeburrito.blob.core.windows.net/$web/khao-tang-naa-tang.jpg" alt="">
	<img src="https://orangeburrito.blob.core.windows.net/$web/nam-prik-ong.JPEG" alt="">
	<img src="https://orangeburrito.blob.core.windows.net/$web/tom-kaa-gai2.JPEG" alt="">
	<img src="https://orangeburrito.blob.core.windows.net/$web/yam-pladuk-foo.jpg" alt="">
	<img src="https://orangeburrito.blob.core.windows.net/$web/bua-loy-faktong.JPEG" alt="">
	<img src="https://orangeburrito.blob.core.windows.net/$web/faktong-gang-sangkaya.JPEG" alt="">
</div>

<style>
	.gallery {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
		padding: 1rem;
	}
	
	img {
		width: 150px;
		height: 150px;
		object-fit: cover;
	}

	@media (min-width: 600px) {
		.gallery {
			padding: 1rem 3rem;
			grid-gap: 3rem;
			grid-template-columns: repeat(3, 1fr);
		}
		img {
			width: 100%;
		}
	}
</style>