export const NewsSchemaHtml = `
<section class="top">
	<h1 class="top__title">Tytuł aktualności</h1>
	<p id="top__date">02-06-2023</p>
	<div class="top__share-article">
		<p>Podziel się artykułem</p>
		<div class="share-article__icons">
			<div class="share-article__icons__icon">
				<a target="_blank" id="share-facebook" href="#"><img src="https://storage.googleapis.com/etravify-prod-le9ohl2h/facebook_icon_2569217d98.svg?updated_at=2023-08-01T17:42:00.677Z" alt="logo Facebook" /></a>
			</div>
			<div class="share-article__icons__icon">
				<a target="_blank" id="share-twitter" href="#"><img src="https://storage.googleapis.com/etravify-prod-le9ohl2h/twitter_icon_bff16d47bf.svg?updated_at=2023-08-01T17:42:25.270Z" alt="logo Twitter" /></a>
			</div>
			<div class="share-article__icons__icon">
				<a target="_blank" id="share-linkedin" href="#"><img src="https://storage.googleapis.com/etravify-prod-le9ohl2h/linkedin_icon_676976b2db.svg?updated_at=2023-08-01T17:42:48.079Z" alt="logo LinkedIn" /></a>
			</div>
		</div>
	</div>
</section>

<section class="gallery">
	<div class="gallery__photo-wrapper">
		<div class="photo-wrapper__item">
            <img src="https://storage.googleapis.com/etravify-prod-le9ohl2h/0_0b886e80b5.jpg?updated_at=2023-08-03T12:31:35.173Z" alt="" />
        </div>
		<div class="photo-wrapper__item">
            <img src="https://storage.googleapis.com/etravify-prod-le9ohl2h/1_ec110ff088.jpg?updated_at=2023-08-03T12:31:32.116Z" alt="" />
        </div>
		<div class="photo-wrapper__item">
            <img src="" alt="" />
        </div>

	</div>
	<button style="display: none">zobacz wszystkie zdjęcia</button>
</section>
<section class="article">
<p>Treść aktualności</p>
<p>Treść aktualności</p>
<p>Treść aktualności</p>
<p>Treść aktualności</p>
</section>

<div id="lightbox" class="lightbox">
	<span class="close-btn">&times;</span>
	<div class="lightbox-content">
		<button class="prev-btn"><img src="https://storage.googleapis.com/etravify-prod-le9ohl2h/prev_arrow_1c1a719d8f.svg?updated_at=2023-07-27T21:02:01.117Z" alt="wstecz" /></button>
		<img id="lightbox-image" src="" alt="Lightbox Image" />
		<button class="next-btn"><img src="https://storage.googleapis.com/etravify-prod-le9ohl2h/next_arrow_7af64caf59.svg?updated_at=2023-07-27T21:02:01.039Z" alt="następne" /></button>
	</div>
</div>
`;
