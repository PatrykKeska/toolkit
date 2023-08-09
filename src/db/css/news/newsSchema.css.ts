export const NewsSchemaCss = `
/* Add class into script  => news-wrapper */ 
/* RESET STYLES */
.news-wrapper p,
.news-wrapper h1,
.news-wrapper h2 {
    margin: 0;
    padding: 0;
}

.news-wrapper ul li {
    list-style-type: disc;
    margin-inline-start: 32px;
}

.news-wrapper ol li {
    list-style-type: decimal;
}

.news-wrapper ol,
.news-wrapper ul {
    margin-top: -20px;
}

.news-wrapper {
    margin-top: 1rem;
    padding-left: 0 !important;
    padding-right: 0 !important;
}

/* RESET STYLES */

.news-wrapper > .container > div {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.top {
    max-width: 732px;
}

.top > h1.top__title {
    font-size: 24px;
    font-weight: 800;
    line-height: 35px;
}

#top__date {
    margin-top: 8px;
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 17px;
}

.top__share-article {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.top__share-article > p {
    font-size: 14px;
    font-weight: 700;
}

.share-article__icons {
    display: flex;
    gap: 8px;
    align-items: center;
}

.share-article__icons__icon {
    padding: 4px;
}

.share-article__icons__icon > img {
    width: 29px;
    height: 29px;
}

.gallery {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.gallery__photo-wrapper {
    display: flex;
    gap: 20px;
    overflow-x: auto;
}

.gallery__photo-wrapper img {
    border-radius: 4px 4px 0 0;
    width: 270px;
    height: 201px;
    object-fit: cover;
    cursor: pointer;
}

.gallery > button {
    text-decoration: underline;
    font-size: 16px;
    font-weight: 700;
    width: fit-content;
}

.lightbox {
    display: none;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 5;
}

.lightbox-content {
    display: grid;
    grid-template-areas:
        "photo photo"
        "prevBtn nextBtn";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90%;
    transform: translate(-50%, -50%);
    text-align: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    grid-template-rows: 1fr auto;
}

#lightbox-image {
    max-width: 100%;
    max-height: 100%;
    grid-area: photo;
}

.prev-btn {
    grid-area: prevBtn;
}

.next-btn {
    grid-area: nextBtn;
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
}

.article {
    max-width: 753px;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    flex-direction: column;
    gap: 26px;
}

@media (min-width: 992px) {
    .top > h1.top__title {
        font-size: 28px;
    }

    #top__date {
        margin-top: 16px;
    }

    .lightbox-content {
        grid-template-areas:
        "prevBtn photo nextBtn";
        grid-template-columns: 1fr 12fr 1fr;
    }

    .gallery {
        gap: 16px;
    }

    .gallery__photo-wrapper img {
        width: 213px;
        height: 133px;
        border-radius: 4px;
    }

    .article {
        line-height: 28px;
    }
}
`;
