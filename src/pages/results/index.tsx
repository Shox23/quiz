import { useResultsStore } from "@/store/resultsStore";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";

export default function ResultsPage() {
  const results = useResultsStore((state) => state.savedAnswers);
  const correctAnswers = useResultsStore((state) => state.correctAnswers);

  const getIcon = (idx: number) => {
    const currentRsult = results[idx];
    return currentRsult.chosen_answer == currentRsult.correct_answer ? (
      <CheckCircleOutlined />
    ) : (
      <CloseCircleOutlined />
    );
  };

  return (
    <div className="container">
      <h2 className="page-title">
        You answered {correctAnswers.length} out of {results.length} questions
        correctly.
      </h2>
      <ul className="answers">
        {results.map((item, idx) => (
          <li key={item.question}>
            <Card
              title={
                <span>
                  {getIcon(idx)} {item.question}
                </span>
              }
            >
              <div className="tile text-green">
                <h3>Your answer:</h3>
                <h3 className="tile__answer">{item.chosen_answer}</h3>
              </div>
              {item.chosen_answer !== item.correct_answer && (
                <div className="tile text-red">
                  <h3>Correct answer: </h3>
                  <h3 className="tile__answer">{item.correct_answer}</h3>
                </div>
              )}
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
