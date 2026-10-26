import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-xs font-semibold tracking-wide
    transition-all duration-300 sm:text-sm
    ${
      isActive
        ? "bg-blue-100 text-blue-700"
        : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:flex-nowrap lg:px-12">
        {/* Brand */}
        <Link to="/" className="group flex shrink-0 flex-col leading-none">
          <span className="text-2xl font-black tracking-tight text-slate-900 transition-transform duration-300 group-hover:scale-[1.02] sm:text-3xl">
            BUY<span className="text-blue-600">SPHERE.</span>
          </span>

          <span className="mt-2 text-[8px] font-semibold tracking-[2px] text-slate-500 sm:text-[9px]">
            YOUR EVERYDAY SHOPPING STORE
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="order-3 flex w-full items-center justify-center gap-1 rounded-xl bg-slate-50 p-1 sm:order-none sm:w-auto sm:gap-1">
          <NavLink to="/" end className={linkStyle}>
            HOME
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            ABOUT
          </NavLink>

          <NavLink to="/products" className={linkStyle}>
            PRODUCTS
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            CONTACT
          </NavLink>
        </div>

        {/* Shopping Button */}
        <Link
          to="/products"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-blue-600 px-3 py-2.5 text-[10px] font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md sm:px-5 sm:text-xs"
        >
          SHOP NOW
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;