<div class="gallery">
	<img src="/images/gallery1.jpg" alt="">
	<img src="/images/gallery2.jpg" alt="">
	<img src="/images/gallery3.jpg" alt="">
	<img src="/images/gallery4.jpg" alt="">
	<img src="/images/gallery5.jpg" alt="">
	<img src="/images/gallery6.jpg" alt="">
</div>

<style>
	.gallery {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
		padding: 1rem;
	}
	
	img {
		width: 100%;
		min-height: 180px;
		background: gray;
	}
</style>