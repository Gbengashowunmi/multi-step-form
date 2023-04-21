import "./App.css";
import Form from "./components/form/Form";
import { FormProvider } from "./contextAPI/FormContext";

function App() {
  return (
    <div className="App">
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
