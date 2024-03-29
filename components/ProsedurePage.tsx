import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { editProsedure, setEditId, setName } from "@/store/prosedure";
import { addProsedure } from "@/store/prosedure";

const ProsedurePage = () => {
  const dispatch = useDispatch();
  const { prosedure, name, editId, isInput } = useSelector(
    (state: RootState) => state.appProsedure
  );

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const handleEdit = (id: number) => {
    dispatch(setEditId(id));
  };

  const handleEnterKeyEdit = () => {
    if (name !== "") {
      dispatch(editProsedure());
    }
  };

  const handleEnterKeyPressed = () => {
    if (name !== "") {
      dispatch(addProsedure());
    }
  };

  return (
    <div className="text-center">
      <ul className="list-none">
        {prosedure.length === 0 ? (
          <div>
            <i>Tidak ada data tata cara</i>
          </div>
        ) : (
          prosedure.map((item: IFood.IProsedure, index: number) => (
            <div
              className="text-left"
              key={item.id}
              onClick={() => handleEdit(item.id)}
            >
              {editId === item.id ? (
                <div className="flex items-center gap-2">
                  <input
                    className="border py-2 px-3 text-grey-800"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChangeInput}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleEnterKeyEdit();
                      }
                    }}
                    id="name"
                  />
                </div>
              ) : (
                <li className="my-4">
                  {index + 1}. {item.name}
                </li>
              )}
            </div>
          ))
        )}
      </ul>
      {isInput && (
        <input
          className="border py-2 px-3 text-grey-800"
          type="text"
          name="name"
          id="name"
          placeholder="Masukkan Tata Cara"
          value={name}
          onChange={handleChangeInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEnterKeyPressed();
            }
          }}
        />
      )}
    </div>
  );
};

export default ProsedurePage;
