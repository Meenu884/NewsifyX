import NewsCard from "../components/NewsCard";
import FeaturedNews from "../components/FeaturedNews";
import TrendingNews from "../components/TrendingNews";

function Home() {

  const news = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      category: "Technology",
      title: "The Future of Artificial Intelligence",
      description:
        "Artificial intelligence is changing the way people work, learn and communicate."
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1495020689067-958852a7765e",
      category: "World",
      title: "Latest Global News and Updates",
      description:
        "Stay updated with important developments happening around the world."
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
      category: "Business",
      title: "Business and Market Updates",
      description:
        "Get the latest business and financial news from around the world."
    },

    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      category: "Sports",
      title: "Latest Sports News",
      description:
        "Follow the latest sports stories, results and updates."
    }
  ];

  return (
    <main className="home">

      {/* Breaking News */}

      <section className="breaking-news">

        <span>🔴 BREAKING NEWS</span>

        <p>
          Welcome to Newsify — your daily source for the latest news.
        </p>

      </section>


      {/* Hero */}

      <section className="hero">

        <div className="hero-content">

          <span className="news-category">
            TOP STORY
          </span>

          <h1>
            Stay Updated With The Latest News
          </h1>

          <p>
            Discover the latest stories, trends and
            important updates from around the world.
          </p>

          <button>
            Explore News
          </button>

        </div>

      </section>


      {/* Featured + Trending */}

      <section className="featured-trending">

        <FeaturedNews
          news={news[0]}
        />

        <TrendingNews
          news={news}
        />

      </section>


      {/* Latest News */}

      <section className="latest-news">

        <div className="section-title">

          <h2>Latest News</h2>

          <p>
            Discover the latest stories from Newsify
          </p>

        </div>


        <div className="news-grid">

          {news.map((item) => (

            <NewsCard
              key={item.id}
              image={item.image}
              category={item.category}
              title={item.title}
              description={item.description}
            />

          ))}

        </div>

      </section>

    </main>
  );
}

export default Home;