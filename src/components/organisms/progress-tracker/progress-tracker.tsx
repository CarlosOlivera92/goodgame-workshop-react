import ProgressLine from "../../atoms/progress-line/progress-line";
import StepIcon from "../../atoms/step-icon/step-icon";


const ProgressTracker = ({ currentForm }) => {
  return (
    <div className="progress-container mb-3">
      <StepIcon currentForm={currentForm} step={1} />
      <ProgressLine currentForm={currentForm} step={1} />
      <StepIcon currentForm={currentForm} step={2} />
      <ProgressLine currentForm={currentForm} step={2} />
      <StepIcon currentForm={currentForm} step={3} />
    </div>
  );
};

export default ProgressTracker;
