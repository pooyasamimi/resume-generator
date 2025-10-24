import { useCallback } from "react";
import Display from "./components/Display";
import Form from "./components/Form";
import { toPng } from "html-to-image";
import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";
import { toast } from "react-toastify";
import { useContext } from "react";
import InfoContextProvider from "./contexts/InfoContextProvider";

function App() {
  const {
    info: { fileName },
  } = useContext(InfoContextProvider);
  const ref = useRef(null);
  const saveImageHandler = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { pixelRatio: 1.5 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${fileName}.png`;
        link.href = dataUrl;
        link.click();
        toast.success('Wow so easy!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          className: "mb-24",
          });
      })
      .catch((err) => {
        toast.error(
          <span>
            There is an error. <br /> {err.message || err}
          </span>,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          }
        );
      });
  }, [ref, fileName]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <main className="flex flex-col my-8 sm:my-0 sm:flex-row justify-center items-center h-screen gap-4 text-stone-200 bg-stone-950">
        <Form onSaveImage={saveImageHandler} />
        <Display ref={ref} />
      </main>
    </>
  );
}

export default App;
