import React from "react";

const Blog = () => {
  return (
    <div className="container min-h-screen mx-auto px-5 my-6">
      <h1 className="text-center text-4xl text-gray-700 drop-shadow-md my-5 font-extrabold">
        Blog Page
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-2">
        <div className="bg-[#f5fffa]  p-4 border border-[#c7e0d3]">
          <div>
            <h2 className="bg-[#cef2e0] border border-gray-400 px-4 py-1 text-lg font-bold">
              How will you improve the performance of a React Application?
            </h2>
            <div className="my-3">
              <p className="font-sarif text-gray-600 pb-3">
                We came to know that all of these are happening because of the
                unnecessary re-rendering of components. A component re-rendered
                like 50 times just by doing a page refresh and no interaction on
                one page!
              </p>
              <p className="font-sarif text-gray-600 pb-3">
                To optimize React rendering, you need to make sure that
                components receive only necessary props. It will let you control
                the CPU consumption and avoid over-rendering unnecessary
                features. The solution is to create a functional component that
                will collect all props and redistribute them to other component
              </p>

              <p className="font-sarif text-gray-600 pb-3">
                <li>Keeping component state local where necessary.</li>
                <li>
                  Memoizing React components to prevent unnecessary re-renders.
                </li>
                <li>Code-splitting in React using dynamic import()</li>
                <li>Windowing or list virtualization in React.</li>
                <li>Lazy loading images in React.</li>
              </p>
            </div>
          </div>
          <div>
            <h2 className="bg-[#cef2e0] border border-gray-400 px-4 py-1 text-lg font-bold">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <div className="my-3">
              <p className="font-sarif text-gray-600 pb-3">
                Are you facing difficulties in making loading spinners or a
                pop-up appears at the right time? It can be because of an
                unmanaged state in React. A state is a JavaScript object. It
                stores a component's dynamic data and determines the component's
                behavior. In other words, it is the interface between any data
                of changes backend or local and the representation of this data
                with UI elements in the frontend.
              </p>

              <p className="font-sarif text-gray-700 pb-3">
                <li className="text-lg font-bold">Local state.</li>
                <span className="">
                  Local state in React allows you to instantiate a plain
                  JavaScript object for a component and hold information that
                  might affect its rendering. Local state is managed in
                  isolation within the component without other components
                  affecting it.
                </span>
                <li className="text-lg font-bold">Global state.</li>
                <span>
                  Role of the global state. In React, originally, the state is
                  held and modified within the same React component . In most
                  applications, different components may need to access and
                  update the same state. This is achieved by introducing the
                  global states in your app.
                </span>
                <li className="text-lg font-bold">Server state.</li>
                <span>
                  React Query is a library created by Tanner Linsley
                  specifically to manage server state and cache, it's defined as
                  a thin cache layer with a simple API surface. The principle of
                  the architecture of this library is the encapsulation of
                  business logic by extracting the data fetching ceremony to
                  custom hooks
                </span>
                <li className="text-lg font-bold">URL state.</li>
                <span>
                  A state can be modified based on user action or network
                  changes. Every time the state of an object changes, React
                  re-renders the component to the browser. The state object is
                  initialized in the constructor. The state object can store
                  multiple properties
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#ecf4fc]  p-4 border border-[#c7e0d3]">
          <div className="">
            <h2 className="bg-[#cedff2] border border-gray-400 px-4 py-1 text-lg font-bold">
              How does prototypical inheritance work?
            </h2>
            <div className="my-3">
              <p className="font-sarif text-gray-600 pb-3">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the Prototype of
                an object, we use Object. getPrototypeOf and Object
              </p>

              <p className="font-sarif text-gray-600 pb-3">
                In a class-based model, you have Classes, which are represented
                by the triple Parents, Variables, Methods”. Where: Parents is
                the list of classes you're extending. Classes may only extend
                other classes; Variables is the number of variable slots that
                instances will have. For example, a “class Point2d(int x, int y)
                ” has 2 instance variables; Methods is a table of “name →
                function” that describes which services each instance of the
                class will support;
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="bg-[#cedff2] border border-gray-400 px-4 py-1 text-lg font-bold">
              Why you do not set the state directly in React.?
            </h2>
            <div className="my-3">
              <p className="font-sarif text-gray-600 pb-3">
                One should never update the state directly because If you update
                it directly, calling the setState() afterward may just replace
                the update you made. When you directly update the state, it does
                not change this.
              </p>

              <p className="font-sarif text-gray-600 pb-3">
                If you update it directly, calling the setState() afterward may
                just replace the update you made. When you directly update the
                state, it does not change this.state immediately. Instead, it
                creates a pending state transition, and accessing it after
                calling this method will only return the present value. You will
                lose control of the state across all components.
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="bg-[#cedff2] border border-gray-400 px-4 py-1 text-lg font-bold">
              What is a unit test.?
            </h2>
            <div className="my-3">
              <p className="font-sarif text-gray-600 pb-3">
                This is a type of testing which is done by software developers
                in which the smallest testable module of an application - like
                functions, procedures or interfaces - are tested to ascertain if
                they are fit to use
              </p>
              <h3 className="text-lg font-medium">Unit Testing Example :</h3>
              <p className="font-sarif text-gray-600 pb-3">
                Unit testing is testing the smallest testable unit of an
                application. It is done during the coding phase by the
                developers. To perform unit testing, a developer writes a piece
                of code (unit tests) to verify the code to be tested (unit) is
                correct.
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="bg-[#cedff2] border border-gray-400 px-4 py-1 text-lg font-bold">
              Why should write unit tests.?
            </h2>
            <div className="my-3">
              <p className="font-sarif text-gray-600 pb-3">
                Unit testing ensures that all code meets quality standards
                before it's deployed. This ensures a reliable engineering
                environment where quality is paramount. Over the course of the
                product development life cycle, unit testing saves time and
                money, and helps developers write better code, more efficiently.
              </p>
              <p className="font-sarif text-gray-600 pb-3">
                Unit tests are also especially useful when it comes to
                refactoring or re-writing a piece a code. If you have good unit
                tests coverage, you can refactor with confidence. Without unit
                tests, it is often hard to ensure the you didn't break anything
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#faf5ff] p-4 border border-[#faf5ff my-2">
        <div>
          <h3 className="bg-[#ddcef2] border border-gray-400 px-4 py-1 text-lg font-bold">
            {" "}
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Blog;
