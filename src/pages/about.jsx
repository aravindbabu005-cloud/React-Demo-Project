import { Link } from "react-router-dom";

function About() {
  const values = [
    {
      title: "Quality Products",
      description:
        "We focus on offering useful, reliable, and carefully selected products for everyday life.",
    },
    {
      title: "Customer First",
      description:
        "We aim to make every shopping experience simple, convenient, and enjoyable.",
    },
    {
      title: "Style and Value",
      description:
        "We bring together modern styles, practical products, and affordable choices.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-16 text-center sm:py-20 lg:py-24">
        <p className="font-semibold uppercase tracking-widest text-blue-200">
          Get to Know Us
        </p>

        <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          About BuySphere
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100 sm:text-lg">
          Your destination for everyday essentials, modern fashion,
          useful technology, and products that fit your lifestyle.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
            alt="Modern retail clothing store"
            className="h-72 w-full rounded-2xl object-cover shadow-xl sm:h-96 lg:h-[460px]"
          />

          <div className="absolute -bottom-5 right-4 rounded-xl bg-white px-6 py-4 shadow-lg sm:right-6">
            <p className="text-sm font-semibold text-slate-500">
              Your Everyday Store
            </p>
            <p className="mt-1 text-lg font-bold text-blue-700">
              Shop with Confidence
            </p>
          </div>
        </div>

        <div className="mt-3 lg:mt-0">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Our Story
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Making Everyday Shopping Simple
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            NovaSpace is an online shopping destination designed to
            help customers explore a variety of products in one place.
            From fashion and accessories to electronics and home
            essentials, we aim to make product discovery easier.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Our goal is to create a clean and convenient shopping
            experience where customers can browse products, compare
            options, and find items that suit their needs.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Explore Products
          </Link>
        </div>
      </section>

      {/* Shopping Values Section */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-16 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-blue-600">
              What Matters to Us
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              The NovaSpace Promise
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              We want to make online shopping more convenient with
              a focus on product quality, customer experience, and value.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {values.map((value) => (
              <article
                key={value.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 transition-colors duration-300 group-hover:bg-blue-600">
                  <div className="h-5 w-5 rounded-md border-2 border-blue-700 transition-colors duration-300 group-hover:border-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 sm:text-2xl">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {value.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-16 text-center sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-semibold uppercase tracking-widest text-blue-200">
            Start Shopping
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Find Something You Love
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Explore our product collection and discover items for
            your style, your technology needs, and your home.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;