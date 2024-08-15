import images from "./constants/images";
import { Form } from "./sections/Form";

function App() {
  return (
    <main className="min-h-screen h-fit w-full bg-dark">
      {/* Insert your section here to see it in dev mode.
    Once dev mode is completed, remove the section from here */}
      {/* You can remove the following div section when developing */}
      <div className="w-full h-screen flex flex-col items-center justify-center gap-2">
        <img src={images.reactLogo} alt="" />
        <h1 className=" font-apex text-4xl text-primary">DEV MODE</h1>
        <p className="text-main font-yoshiro">Sample Test</p>
      </div>
      <Form />
    </main>
  );
}

export default App;