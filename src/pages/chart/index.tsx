import Modal from "../../components/Modal";
import {  useState } from "react";

const ChartPage = () => {
    const [showModal, setShowModal] = useState(false);

  return (
      <><button className="text-lightBlue-500 bg-transparent border border-solid border-lightBlue-500 hover:bg-lightBlue-500 hover:text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(true)}
      >
          view chart
      </button><Modal showModal={showModal} setShowModal={setShowModal  } /></>
  )
}

export default ChartPage
