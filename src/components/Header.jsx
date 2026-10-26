import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Hero Content */}
        <div>
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Welcome to NovaSpace
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Shop Your Style.
            <span className="block text-blue-600">
              Find Your Space.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Discover fashion, electronics, accessories, and home
            essentials in one place. Find products that match your
            lifestyle at NovaSpace.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Shop Now
            </Link>

            <Link
              to="/about"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
            >
              About Us
            </Link>
          </div>

          {/* Shopping Benefits */}
          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Great Choices
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Products for everyday life
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Easy Shopping
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Simple browsing experience
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-blue-300/40 blur-2xl" />

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
            alt="Modern retail clothing store"
            className="relative h-80 w-full rounded-3xl object-cover shadow-2xl sm:h-[450px]"
          />

          <div className="absolute -bottom-5 left-4 rounded-xl bg-white p-4 shadow-xl sm:left-8">
            <p className="font-bold text-slate-900">
              Everything in One Place
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Discover your next favourite.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;