import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import StepperSign from "./StepperSign";
import DatosStep from "./steps/DatosStep";
import HoroscopoStep from "./steps/HoroscopoStep";

enum STEPS {
  datos,
  horoscopo,
}

const Stepper: React.FC = () => {
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
      <Navbar
        currentStep={currentStep}
        onBackClick={() => {
          setCurrentStep(currentStep - 1);
        }}
        label={labelAppBar}
      />
      {currentStep !== STEPS.horoscopo && (
        <StepperSign
          activeStep={currentStep}
          length={stepsLength}
          label={labelStepper}
        />
      )}
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

export default Stepper;
