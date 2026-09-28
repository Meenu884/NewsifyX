function TrendingNews({ news }) {
  return (
    <aside className="trending-section">

      <div className="section-title">
        <h2>🔥 Trending News</h2>
      </div>

      <div className="trending-list">

        {news.map((item, index) => (

          <div
            className="trending-item"
            key={item.id}
          >

            <span className="trending-number">
              {index + 1}
            </span>

            <div>
              <span className="news-category">
                {item.category}
              </span>

              <h3>{item.title}</h3>
            </div>

          </div>

        ))}

      </div>

    </aside>
  );
}

export default TrendingNews;