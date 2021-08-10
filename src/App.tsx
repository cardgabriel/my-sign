import Navbar from "components/Navbar";
import StepperSign from "components/StepperSign";
import DatosStep from "components/steps/DatosStep";
import HoroscopoStep from "components/steps/HoroscopoStep";
import React, { useEffect, useState } from "react";

enum STEPS {
  datos,
  horoscopo,
}
const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.datos);
  const [labelAppBar, setLabelAppBar] = useState<string>();
  const [labelStepper, setLabelStepper] = useState<string>();

  useEffect(() => {
    if (currentStep === STEPS.datos) {
      setLabelAppBar("TUS DATOS");
      setLabelStepper("Ingresa tus datos");
    } else if (currentStep === STEPS.horoscopo) {
      setLabelAppBar("TU HORÓSCOPO");
      setLabelStepper("");
    }
  }, [currentStep]);

  const stepsLength = Object.keys(STEPS).length / 2;
  return (
    <>
      {/* NAVBAR */}
      <Navbar
        currentStep={currentStep}
        onBackClick={() => {
          setCurrentStep(currentStep - 1);
        }}
        label={labelAppBar}
      />

      {/* STEPPER */}
      <StepperSign
        activeStep={currentStep}
        length={stepsLength}
        label={labelStepper}
      />

      {/* STEPS */}

      {currentStep === STEPS.datos && (
        <DatosStep
          onBack={() => {
            setCurrentStep(currentStep - 1);
          }}
          onNext={() => setCurrentStep(STEPS.horoscopo)}
        />
      )}

      {currentStep === STEPS.horoscopo && <HoroscopoStep />}
    </>
  );
};

export default App;
