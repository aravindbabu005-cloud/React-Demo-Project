import { Link } from "react-router-dom";

function Body() {
  const categories = [
    {
      title: "Fashion",
      description:
        "Discover everyday clothing, footwear, and styles for every occasion.",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=85",
      alt: "Fashion clothing collection",
    },
    {
      title: "Electronics",
      description:
        "Explore useful gadgets and technology for work, entertainment, and daily life.",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=85",
      alt: "Electronics and technology products",
    },
    {
      title: "Home and Living",
      description:
        "Find practical home essentials and stylish additions to your space.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
      alt: "Modern home interior",
    },
  ];

  return (
    <main>
      {/* Shopping Categories */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-blue-600">
              Explore NovaSpace
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Shop by Category
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore our collections and discover products that
              match your style, interests, and everyday needs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.alt}
                    loading="lazy"
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {category.description}
                  </p>

                  <Link
                    to="/products"
                    className="mt-5 inline-flex font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    Explore Products
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Benefits */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-blue-600">
              The NovaSpace Experience
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Shopping Made Simple
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Browse different collections in one place and enjoy
              a clean, convenient shopping experience.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-300 hover:shadow-lg">
              <div className="h-1 w-12 rounded-full bg-blue-600" />
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Variety of Products
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Explore fashion, electronics, accessories, and
                products for your home.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-300 hover:shadow-lg">
              <div className="h-1 w-12 rounded-full bg-blue-600" />
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Easy Browsing
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Navigate through product collections with a simple,
                responsive interface.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-300 hover:shadow-lg">
              <div className="h-1 w-12 rounded-full bg-blue-600" />
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Everyday Value
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Find products that suit your preferences and
                everyday requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-2xl text-center md:text-left">
            <p className="font-semibold uppercase tracking-widest text-blue-200">
              Start Exploring
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Find Your Next Favourite
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Explore our collection and discover products for
              your lifestyle, technology needs, and home.
            </p>
          </div>

          <Link
            to="/products"
            className="shrink-0 rounded-lg bg-white px-7 py-3 font-semibold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Body;