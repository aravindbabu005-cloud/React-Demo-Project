
function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you for contacting NovaSpace! We will get back to you soon.");
    event.target.reset();
  }

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-16 text-center sm:py-20 lg:py-24">
        <p className="font-semibold uppercase tracking-widest text-blue-200">
          We Are Here to Help
        </p>

        <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          Contact Buysphere
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
          Have a question about a product, an order, or delivery? Send us a
          message and our team will be happy to help.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        {/* Contact Information */}
        <div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
              alt="NovaSpace shopping and retail experience"
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>

          <p className="mt-8 font-semibold uppercase tracking-widest text-blue-600">
            Customer Support
          </p>

          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
            How Can We Help You?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Whether you need help choosing a product, checking an order, or
            understanding our shopping process, get in touch with us. We are
            here to make your shopping experience easier.
          </p>

          <div className="mt-8 space-y-5">
            {/* Email */}
            <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-700"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Email Support
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  For product questions and order enquiries.
                </p>
                <p className="mt-2 text-sm font-semibold text-blue-700">
                  Add your support email here
                </p>
              </div>
            </div>

            {/* Shopping Assistance */}
            <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-700"
                >
                  <path d="M6 7h12l2 13H4L6 7Z" />
                  <path d="M9 9V6a3 3 0 0 1 6 0v3" />
                </svg>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Shopping Assistance
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Need help finding the right product? We can help you with
                  product-related questions.
                </p>
                <p className="mt-2 text-sm font-semibold text-blue-700">
                  Product and order enquiries
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-700"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Our Location
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Add your business address here when it is available.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-9"
        >
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Get in Touch
          </p>

          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
            Send Us a Message
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Fill in the form below and tell us how we can assist you.
          </p>

          <div className="mt-8 space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Enquiry Type */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Enquiry Type
              </label>

              <select
                id="subject"
                name="subject"
                required
                defaultValue=""
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="" disabled>
                  Select an enquiry type
                </option>
                <option value="product">Product Information</option>
                <option value="order">Order Status</option>
                <option value="delivery">Shipping and Delivery</option>
                <option value="return">Returns and Refunds</option>
                <option value="payment">Payment Issue</option>
                <option value="other">Other Enquiry</option>
              </select>
            </div>

            {/* Order Number */}
            <div>
              <label
                htmlFor="orderNumber"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Order Number
                <span className="ml-2 font-normal text-slate-400">
                  (Optional)
                </span>
              </label>

              <input
                id="orderNumber"
                name="orderNumber"
                type="text"
                placeholder="Enter your order number if applicable"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us how we can help..."
                required
                className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Submit Enquiry
            </button>

            <p className="text-center text-xs leading-5 text-slate-500">
              Your message will be handled according to our customer support
              process.
            </p>
          </div>
        </form>
      </section>

      {/* Shopping Call to Action */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-14 text-center sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Find Your Next Favourite?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
            Explore our collection and discover products for your everyday
            needs.
          </p>

          <a
            href="/products"
            className="mt-7 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 font-semibold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Browse Products
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
