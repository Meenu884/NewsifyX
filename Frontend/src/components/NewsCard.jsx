function NewsCard({ image, category, title, description }) {
  return (
    <article className="news-card">
      <img src={image} alt={title} />

      <div className="news-card-content">
        <span className="news-category">{category}</span>

        <h3>{title}</h3>

        <p>{description}</p>

        <button>Read More</button>
      </div>
    </article>
  );
}

export default NewsCard;