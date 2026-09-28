function FeaturedNews({ news }) {
  return (
    <section className="featured-section">

      <div className="section-title">
        <h2>Featured News</h2>
        <p>Important stories you should know about</p>
      </div>

      <div className="featured-news">

        <img
          src={news.image}
          alt={news.title}
        />

        <div className="featured-content">

          <span className="news-category">
            {news.category}
          </span>

          <h2>{news.title}</h2>

          <p>{news.description}</p>

          <button>
            Read Full Story
          </button>

        </div>

      </div>

    </section>
  );
}

export default FeaturedNews;