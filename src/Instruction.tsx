import { Link } from 'react-router-dom';
import Header from './Header';
import React from 'react';
import Footer from './Footer';




function NotFound() {
  return (
    <>
    <div>
            <Header />
        </div>
      <div className="container ml-20 mt-24  p-5 ">
        
      <h1>Welcome!</h1> <br />
  <p>
    Our survey aims to collect ratings and feedback on code reviews and repairs, generated by different LLM models.
  </p>
  <p>
    You can select your preferred language from these 9 languages: C, CPP, C#, Java, JavaScript, Ruby, Go, PHP, and Python.
  </p>
  <br />

  <p>
    You would be given: 
  </p>
  <br />

  <ul className="list-disc ml-10">
    <li>
      A code snippet</li>
    <li>Code summary based on that code snippet</li>
    <li>Ground Truth</li>
    <li>Code reviews generated by different models</li>
    <li>A table where you will be able to rate the code reviews based on metrics like relevance, information, and explanation clarity score</li>
  </ul>

  <br />

  <p>Here are the metrics you'll be rating on:</p>
  <ul>
    <li>
      <strong>Relevance Score:</strong> How relevant the code review is to the overall code.
    </li>
    <li>
      <strong>Information Score:</strong> The completeness of the information provided in the code review.
    </li>
    <li>
      <strong>Explanation Clarity Score:</strong> How clearly the code review is explained.
    </li>
    <li>
      <strong>Scoring on the basis of review size:</strong> Evaluates whether the feedback length is appropriate, concise, and informative.
    </li>
  </ul>
  <br />

  <h2>
    <Link to="/codeReview-Frontend/" className="text-blue-500">
    Let’s Get Started!
    </Link>

  </h2>
</div>
      <Footer />
    </>
  );
}
export default NotFound;
