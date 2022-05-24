import React from "react";
import { Link } from "react-router-dom";
import jugol from "../../images/jugol.jpg";

const Portfolio = () => {
  return (
    <div className="w-full bg-[#f6f7ff] py-20">
      <div className="container mx-auto  shadow-xl rounded-3xl overflow-hidden">
        <div
          className="hero min-h-[500px]"
          style={{
            background: `url(${jugol})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">I'm Jugol Karmakar</h1>
              <p className="mb-5 text-2xl font-extrabold text-white">
                Web Developer
              </p>
              <button className="btn btn-primary px-10 rounded-full">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 flex justify-center shadow-lg my-5 p-8 rounded-3xl bg-white">
        <div className="w-48 h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-full"
            src={jugol}
            alt=""
          />
        </div>
        <div className="w-1/2 ml-8">
          <h5 className="text-2xl font-bold text-black">Hello,</h5>
          <p className="text-sm font-medium my-2 text-gray-700">
            I am Jugol Karmakar , Web Developer from Khulna. I have rich
            experience in web site development and building and customization,
            also I am good at wordpress.
          </p>
          <div className="flex justify-between my-3">
            <div>
              <p className="font-bold text-gray-700">
                Name: <span className="text-cyan-600">Jugol Karmakar</span>{" "}
              </p>
              <p className="font-bold text-gray-700">
                Birthday: <span className="text-cyan-600">12 April, 1999</span>
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-700">
                Location:{" "}
                <span className="text-cyan-600">Khulna Bangladesh</span>
              </p>
              <p className="font-bold text-gray-700">
                Email:{" "}
                <span className="text-cyan-600">Jugol.cse@gmail.com</span>
              </p>
            </div>
          </div>
          <button className="text-lg font-bold px-8 py-2 rounded-full bg-blue-700 text-white shadow-xl my-2">
            Hire Me
          </button>
        </div>
      </div>
      <div className="container mx-auto px-10 shadow-xl rounded-3xl p-6 bg-white">
        <h2 className="text-2xl font-bold text-blue-600 my-2">My Skills</h2>
        <div className="flex justify-around my-10">
          <div>
            <div>
              <h2>Html</h2>
              <progress
                className="progress progress-primary w-56"
                value="100"
                max="100"
              ></progress>
            </div>
            <div>
              <h2>Css</h2>
              <progress
                className="progress progress-primary w-56"
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              <h2>Bpoostrap</h2>
              <progress
                className="progress progress-primary w-56"
                value="80"
                max="100"
              ></progress>
            </div>
            <div>
              <h2>JavaScript</h2>
              <progress
                className="progress progress-primary w-56"
                value="75"
                max="100"
              ></progress>
            </div>
          </div>
          <div>
            <div>
              <h2>React</h2>
              <progress
                className="progress progress-primary w-56"
                value="80"
                max="100"
              ></progress>
            </div>
            <div>
              <h2>Node.js</h2>
              <progress
                className="progress progress-primary w-56"
                value="75"
                max="100"
              ></progress>
            </div>
            <div>
              <h2>MongoDB</h2>
              <progress
                className="progress progress-primary w-56"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 bg-white my-6  p-6 rounded-3xl shadow-xl">
        <h3 className="text-2xl font-bold text-blue-600 my-3">My Education</h3>
        <div className=" flex flex-row justify-around">
          <div className="flex flex-col my-3">
            <div className="my-2">
              <h2 className="text-lg font-bold">Unversity Of Global Village</h2>
              <p className="text-lg text-gray-700">2019 - Present</p>
            </div>
            <div className="my-2">
              <h2 className="text-lg font-bold">Programming Hero</h2>
              <p className="text-lg text-gray-700">2022 - Present</p>
            </div>
            <div className="my-2">
              <h2 className="text-lg font-bold">ledp.ictd.gov.bd</h2>
              <p className="text-lg text-gray-700">2020 - 2021</p>
            </div>
          </div>
          <div className="my-4">
            <ul className="steps steps-vertical">
              <li className="step step-primary"></li>
              <li className="step step-primary"></li>
              <li className="step"></li>
            </ul>
          </div>
          <div className="flex flex-col my-3">
            <div className="my-2">
              <h3 className="text-lg font-bold">
                BS.c Computer Science & Engineering
              </h3>
              <p className="text-sm text-gray-700">
                Computer Science & IT impacts everything, from scientific
                research to health development, transport, banking,
                communications, you name it
              </p>
            </div>
            <div className="my-2">
              <h3 className="text-lg font-bold">Full Stack Web-Development</h3>
              <p className="text-sm text-gray-700">
                A Full Stack Developer is someone who works with the Back End —
                or server side — of the application as well as the Front End, or
                client side.
              </p>
            </div>
            <div className="my-2">
              <h3 className="text-lg font-bold">Graphic design</h3>
              <p className="text-sm text-gray-700">
                Graphic design is a craft where professionals create visual
                content to communicate messages.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 shadow-xl rounded-3xl p-6 bg-white">
        <h3 className="text-2xl font-bold text-blue-600">My Project</h3>
        <div className="flex justify-around my-8">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Car Dealership Project
            </h2>
            <Link
              className="text-blue-600 font-medium"
              to=" https://car-dealership-f966c.web.app/"
            >
              {" "}
              car-dealership-f966c.web.app
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Dentist Service Point
            </h2>

            <Link
              className="text-blue-600 font-medium"
              to="/dentist-service-point.web.app"
            >
              dentist-service-point.web.app
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Geniuos Car Services
            </h2>

            <Link
              className="text-blue-600 font-medium"
              to="/car-dealership-f966c.web.app"
            >
              car-dealership-f966c.web.app
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
