import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const books = [
  { title: "Building Applications in React and Redux" },
  { title: "Clean Code: Writing Code for Humans" },
  { title: "Architecting Applications for the Real World" },
  { title: "Becoming an Outlier: Reprogramming the Developer Mind" },
  { title: "Web Component Fundamentals" }
];

class MockApi {

  static getAllBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], books));
      }, delay);
    });
  }

}

export default MockApi;
