import { Link } from "react-router-dom";

function CategoryNavbar() {
  const categories = [
    "All",
    "India",
    "World",
    "Technology",
    "Business",
    "Sports",
    "Entertainment",
    "Health",
    "Science"
  ];

  return (
    <div className="category-navbar">
      {categories.map((category) => (
        <Link
          key={category}
          to={
            category === "All"
              ? "/"
              : `/category/${category.toLowerCase()}`
          }
        >
          {category}
        </Link>
      ))}
    </div>
  );
}

export default CategoryNavbar;