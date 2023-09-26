const StepIcon = ({ currentForm, step }) => {
  const isCurrentStep = currentForm === step;
  const isCompletedStep = currentForm > step;

  return (
    <div className={`step ${isCompletedStep ? "completed" : ""} ${isCurrentStep ? "current-step" : ""}`}>
      {isCurrentStep ? (isCurrentStep ? step : step) : isCompletedStep ? <i className="fas fa-check"></i> : step}
    </div>
  );
};

export default StepIcon;
