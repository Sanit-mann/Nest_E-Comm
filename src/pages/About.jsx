import React from "react";

const services = [
  {
    id: 1,
    title: "Best Prices & Offers",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    img: "src/assets/imgs/theme/icons/icon-1.svg",
  },
  {
    id: 2,
    title: "Wide Assortment",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    img: "src/assets/imgs/theme/icons/icon-2.svg",
  },
  {
    id: 3,
    title: "Free Delivery",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    img: "src/assets/imgs/theme/icons/icon-3.svg",
  },
  {
    id: 4,
    title: "Easy Returns",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    img: "src/assets/imgs/theme/icons/icon-4.svg",
  },
  {
    id: 5,
    title: "100% Satisfaction",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    img: "src/assets/imgs/theme/icons/icon-5.svg",
  },
  {
    id: 6,
    title: "Great Daily Deal",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    img: "src/assets/imgs/theme/icons/icon-6.svg",
  },
];

function About() {
  return (
    <>
      <div className="pt-12">
        <div className="xl:w-10/12 lg:w-full mx-auto">
          <section className="flex flex-col lg:flex-row items-center mb-12 px-6 lg:px-20">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <img
                src="src/assets/imgs/page/about-1.png"
                alt="About Image"
                className="rounded-2xl w-full mb-6 lg:mb-0"
              />
            </div>

            {/* Text Content Section */}
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Welcome to Nest
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate id est laborum.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ius ferri velit sanctus cu, sed at soleat accusata. Dictas
                prompta et Ut placerat legendos interpre. Donec vitae sapien ut
                libero venenatis faucibus. Nullam quis ante Etiam sit amet orci
                eget. Quis commodo odio aenean sed adipiscing. Turpis massa
                tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit
                amet. Commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate id est laborum.
              </p>
            </div>
          </section>
          <section className="text-center mb-12 px-6 lg:px-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 relative text-center">
              What We Provide?
              <img
                src="src/assets/imgs/theme/wave.png"
                className="mx-auto block mt-2"
              />
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-xl border-[1px] transition-all hover:shadow-md text-center"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-14 h-14 mx-auto mb-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mt-2 text-sm">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="text-Primary hover:text-Secondary font-medium mt-4 inline-block"
                  >
                    Read more
                  </a>
                </div>
              ))}
            </div>
          </section>
          <section className="flex-col lg:flex-row items-center mb-12">
            <div className="flex flex-col lg:flex-row items-center mb-12">
              {/* Image Section */}
              <div className="lg:w-7/12 pr-0 lg:pr-8">
                <img
                  src="src/assets/imgs/page/about-5.png"
                  alt="E-commerce Grocery Solution"
                  className="rounded-lg mb-6 lg:mb-0"
                />
              </div>

              {/* Content Section */}
              <div className="lg:w-5/12">
                <h4 className="text-Text_Secondary text-2xl font-semibold mb-5">
                  Our performance
                </h4>
                <h1 className="text-4xl font-bold text-gray-800 mb-8 leading-tight">
                  Your Partner for e-commerce grocery solution
                </h1>
                <p className="text-gray-600 mb-6">
                  Ed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                </p>
                <p className="text-gray-600">
                  Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              {/* Who we are */}
              <div className="px-6 md:px-8">
                <h3 className="text-2xl font-semibold text-Text_Primary mb-4">
                  Who we are
                </h3>
                <p className="text-gray-600">
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>

              {/* Our history */}
              <div className="px-6 md:px-8">
                <h3 className="text-2xl font-semibold text-Text_Primar mb-4">
                  Our history
                </h3>
                <p className="text-gray-600">
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>

              {/* Our mission */}
              <div className="px-6 md:px-8">
                <h3 className="text-2xl font-semibold text-Text_Primar mb-4">
                  Our mission
                </h3>
                <p className="text-gray-600">
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container mx-auto my-12">
        <div
          className="bg-cover bg-center bg-gray-900 bg-opacity-50 text-white rounded-xl py-12 px-8 flex flex-col md:flex-row justify-between items-center"
          style={{
            backgroundImage: "url('src/assets/imgs/page/about-9.png')", // Update with actual image path
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center w-full">
            {/* Glorious Years */}
            <div>
              <h1 className="text-5xl font-bold">12+</h1>
              <h4 className="text-lg font-semibold">Glorious years</h4>
            </div>

            {/* Happy Clients */}
            <div>
              <h1 className="text-5xl font-bold">36+</h1>
              <h4 className="text-lg font-semibold">Happy clients</h4>
            </div>

            {/* Projects Complete */}
            <div>
              <h1 className="text-5xl font-bold">58+</h1>
              <h4 className="text-lg font-semibold">Projects complete</h4>
            </div>

            {/* Team Advisor */}
            <div>
              <h1 className="text-5xl font-bold">24+</h1>
              <h4 className="text-lg font-semibold">Team advisor</h4>
            </div>

            {/* Products Sale */}
            <div className="hidden md:block">
              <h1 className="text-5xl font-bold">26+</h1>
              <h4 className="text-lg font-semibold">Products Sale</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-12 px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 relative text-center">
          Our Team
          <img
            src="src/assets/imgs/theme/wave.png"
            className="mx-auto block mt-2"
          />
        </h2>

        <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-5  items-center">
          {/* Left Section */}
          <div className="w-full font-roboto md:w-4/12">
            <h6 className="text-green-600 font-semibold mb-2">Our Team</h6>
            <h1 className="text-5xl font-bold text-Text_Primary mb-6">
              Meet Our Expert Team
            </h1>
            <p className="text-gray-600 mb-4">
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
            <p className="text-gray-600 mb-6">
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
            <button className="bg-Primary text-white px-6 py-3 rounded-md  hover:bg-Secondary transition">
              View All Members
            </button>
          </div>

          {/* Right Section - Team Cards */}
          <div className="w-full md:w-9/12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="src/assets/imgs/page/about-6.png"
                alt="H. Merinda"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:-translate-y-1.5 bg-white p-5 w-11/12 shadow-lg rounded-xl text-center">
                <h4 className="text-xl font-bold text-gray-800">H. Merinda</h4>
                <span className="text-gray-500 text-sm block">
                  CEO & Co-Founder
                </span>
                <div className="flex justify-center space-x-4 mt-3">
                  <a href="#">
                    <img
                      src="src/assets/imgs/theme/icons/icon-facebook-brand.svg"
                      alt="Facebook"
                      className="w-5"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="src/assets/imgs/theme/icons/icon-twitter-brand.svg"
                      alt="Twitter"
                      className="w-5"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="src/assets/imgs/theme/icons/icon-instagram-brand.svg"
                      alt="Instagram"
                      className="w-5"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="src/assets/imgs/theme/icons/icon-youtube-brand.svg"
                      alt="YouTube"
                      className="w-5"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="src/assets/imgs/page/about-8.png"
                alt="Dilan Specter"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:-translate-y-1.5 bg-white p-5 w-11/12 shadow-lg rounded-xl text-center">
                <h4 className="text-xl font-bold text-gray-800">
                  Dilan Specter
                </h4>
                <span className="text-gray-500 text-sm block">
                  Head Engineer
                </span>
                <div className="flex justify-center space-x-4 mt-3">
                  <a href="#">
                    <img
                      src="src/assets/imgs/theme/icons/icon-facebook-brand.svg"
                      alt="Facebook"
                      className="w-5"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="src/assets/imgs/theme/icons/icon-twitter-brand.svg"
                      alt="Twitter"
                      className="w-5"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="src/assets/imgs/theme/icons/icon-instagram-brand.svg"
                      alt="Instagram"
                      className="w-5"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="src/assets/imgs/theme/icons/icon-youtube-brand.svg"
                      alt="YouTube"
                      className="w-5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
