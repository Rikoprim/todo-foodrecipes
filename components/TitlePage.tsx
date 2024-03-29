import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { changeIsTitle, setTitle } from "@/store/receipt";

const TitlePage = () => {
  const dispatch = useDispatch();
  const { title, isTitle } = useSelector(
    (state: RootState) => state.appReceipt
  );

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
  };

  const handleEnterKeyPressed = () => {
    if (title !== "") {
      dispatch(changeIsTitle(isTitle));
    }
  };

  const handleEditTitle = () => {
    dispatch(changeIsTitle(isTitle));
    dispatch(setTitle(title));
  };

  return (
    <>
      {isTitle ? (
        <input
          className="border py-2 px-3 text-grey-800"
          type="text"
          name="title"
          id="title"
          placeholder="Masukkan Judul Resep"
          value={title}
          onChange={handleChangeInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEnterKeyPressed();
            }
          }}
        />
      ) : (
        <h1
          onClick={() => handleEditTitle()}
          className="block w-full cursor-pointer text-center text-gray-800 text-2xl font-bold mb-6"
        >
          {title}
        </h1>
      )}
    </>
  );
};

export default TitlePage;
