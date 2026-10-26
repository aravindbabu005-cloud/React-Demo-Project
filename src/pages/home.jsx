
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Fashion",
    description: "Everyday styles for every occasion.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85",
    link: "/products",
  },
  {
    name: "Electronics",
    description: "Smart technology for modern living.",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=700&q=85",
    link: "/products",
  },
  {
    name: "Accessories",
    description: "The finishing touches to your style.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=85",
    link: "/products",
  },
  {
    name: "Home & Living",
    description: "Thoughtful essentials for your home.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85",
    link: "/products",
  },
];

const products = [
  {
    id: 1,
    name: "Classic Everyday Sneakers",
    category: "Fashion",
    price: 1499,
    oldPrice: 1999,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
    label: "BESTSELLER",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    oldPrice: 3299,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",
    label: "POPULAR",
  },
  {
    id: 3,
    name: "Minimal Classic Watch",
    category: "Accessories",
    price: 1899,
    oldPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
    label: "NEW ARRIVAL",
  },
  {
    id: 4,
    name: "Modern Table Lamp",
    category: "Home & Living",
    price: 1299,
    oldPrice: 1699,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85",
    label: "SPECIAL PRICE",
  },
];

function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-semibold uppercase tracking-widest text-blue-200">
              Welcome to NovaSpace
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              YOUR STYLE.
              <br />
              YOUR TECH.
              <br />
              <span className="text-blue-200">YOUR SPACE.</span>
            </h1>

            <p className="mt-5 max-w-lg leading-8 text-blue-100">
              Discover fashion, electronics, accessories, and home essentials
              selected to make everyday shopping simple.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 font-semibold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Shop Now
            </Link>

            <p className="mt-5 text-sm text-blue-100">
              Discover your next favourite find at NovaSpace.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
              alt="Modern retail store with a curated collection"
              className="h-80 w-full rounded-2xl object-cover shadow-xl sm:h-[420px] lg:h-[480px]"
            />

            <div className="absolute -bottom-5 left-4 rounded-xl bg-white px-6 py-4 shadow-lg sm:left-6">
              <p className="text-sm font-semibold text-slate-500">
                Find your favourites
              </p>
              <p className="mt-1 text-lg font-bold text-blue-700">
                Shop Your Way
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping Benefits */}
      <section className="border-b border-slate-200 bg-white px-6 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="text-center">
            <h3 className="font-bold text-slate-900">Easy Shopping</h3>
            <p className="mt-1 text-sm text-slate-600">
              Browse your favourite categories
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-slate-900">Products for Everyday</h3>
            <p className="mt-1 text-sm text-slate-600">
              Explore useful everyday essentials
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-slate-900">Simple Experience</h3>
            <p className="mt-1 text-sm text-slate-600">
              Find products with ease
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="font-semibold uppercase tracking-widest text-blue-600">
              Explore Our Collection
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Shop by Category
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Find what you need with our collection of everyday products,
              carefully organised into simple categories.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.link}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {category.description}
                  </p>

                  <span className="mt-4 inline-block font-semibold text-blue-700 transition group-hover:text-indigo-700">
                    Explore Category
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="font-semibold uppercase tracking-widest text-blue-600">
                Handpicked for You
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Featured Products
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                Explore a selection of products for your lifestyle, work, and
                home.
              </p>
            </div>

            <Link
              to="/products"
              className="rounded-lg border border-blue-600 px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
            >
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <span className="absolute left-3 top-3 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-bold text-white">
                    {product.label}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {product.category}
                  </p>

                  <h3 className="mt-2 min-h-12 text-lg font-bold text-slate-900">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-xl font-extrabold text-slate-900">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    <span className="text-sm text-slate-400 line-through">
                      ₹{product.oldPrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <Link
                    to="/products"
                    className="mt-5 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    View Product
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Promotion */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-semibold uppercase tracking-widest text-blue-200">
              Your Next Favourite Find
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              GOOD FINDS.
              <br />
              GREAT EVERYDAY STYLE.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-blue-100">
              From everyday essentials to standout accessories, explore a
              collection that brings style and convenience together.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 font-semibold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
