const ProgressLine = ({ currentForm, step }) => {
  const isCurrentStep = currentForm === step;
  const isCompletedStep = currentForm > step;

  return (
    <div className={`line`}>
      <div className={`active-progress ${isCurrentStep ? "inactive" : ""} ${isCompletedStep ? "completed" : ""}`} />
    </div>
  );
};

export default ProgressLine;
