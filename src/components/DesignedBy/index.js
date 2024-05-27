import React, { Component } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "./index.css";

const dummyQuestions = [
  {
    id: 1,
    question: "Aliquam varius ligula nec leo tempus porta ?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
  },
  {
    id: 2,
    question: "Suspendisse vitae varius diam, a vulputate urna ?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
  },
  {
    id: 3,
    question: "Aliquam aliquet purus eget lacus pretium ?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
  },
];

class DesignedBy extends Component {
  state = { activeQuestionId: 1 };

  handleMouseEnter = (id) => {
    this.setState({ activeQuestionId: id });
  };

  handleClick = (id) => {
    this.setState({ activeQuestionId: id });
  };

  render() {
    const { activeQuestionId } = this.state;
    return (
      <div className="designed-by">
        <img
          src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/designed-by"
          alt="designedBy"
          className="designed-by-img"
        />
        <div className="questions">
          <h1 className="designed-by-title">
            Designed & Worked By The Latest Partners
          </h1>

          <div>
            {dummyQuestions.map((questionDetails) => {
              const { id, question, answer } = questionDetails;
              const isActive = activeQuestionId === id;

              return (
                <div key={id} onMouseEnter={() => this.handleMouseEnter(id)}>
                  <div
                    className="question"
                    onClick={() => this.handleClick(id)}
                  >
                    <span>{question}</span>
                    <span className="icon">
                      {isActive ? (
                        <FaChevronUp size={24} />
                      ) : (
                        <FaChevronDown size={24} />
                      )}
                    </span>
                  </div>
                  {isActive && <p className="answer">{answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default DesignedBy;
