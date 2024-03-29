import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { BsPencilFill, BsTrash } from "react-icons/bs";
import {
  deleteReceipt,
  editAmount,
  editReceipt,
  setAmount,
  setEditId,
  setName,
} from "@/store/receipt";
import { appendMaterial } from "@/store/material";

const NewMaterialPage = () => {
  const dispatch = useDispatch();
  const { receipt, amount, name, idEdit } = useSelector(
    (state: RootState) => state.appReceipt
  );

  const handleDelete = (item: IFood.IMaterial) => {
    dispatch(appendMaterial(item));
    dispatch(deleteReceipt(item.id));
  };

  const handleEdit = (item: IFood.IMaterial) => {
    dispatch(setEditId(item));
  };

  const handleChangeInputAmount = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAmount(e.target.value));
  };

  const handleChangeInputName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const handleEnterKeyPressed = (item: IFood.IMaterial) => {
    if (idEdit === 0) {
      dispatch(editAmount(item));
    }
  };

  const handleEnterKeyEdit = () => {
    if (name !== "") {
      dispatch(editReceipt());
    }
  };

  return (
    <div className="text-center">
      <ul className="list-none">
        {receipt.length === 0 ? (
          <div>
            <i>Tidak ada data bahan</i>
          </div>
        ) : (
          receipt.map((item: IFood.IMaterial) => (
            <div className="flex gap-4 items-center text-left" key={item.id}>
              <li className="my-4 flex items-center gap-2">
                {item.isAmount ? (
                  <input
                    className="border w-20 py-2 px-3 text-grey-800"
                    type="number"
                    name="name"
                    value={amount}
                    onChange={handleChangeInputAmount}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleEnterKeyPressed(item);
                      }
                    }}
                    id="name"
                  />
                ) : (
                  <>{item.amount}</>
                )}
                {item.unit}
                {item.isName ? (
                  <input
                    className="border py-2 w-48 px-3 text-grey-800"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChangeInputName}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleEnterKeyEdit();
                      }
                    }}
                    id="name"
                  />
                ) : (
                  <>&nbsp;{item.name}</>
                )}
              </li>
              {item.amount !== undefined && (
                <div className="flex items-center gap-2">
                  <button
                    disabled={idEdit !== 0}
                    onClick={() => handleEdit(item)}
                    className={`rounded-full flex justify-center text-white items-center w-8 h-8 ${
                      idEdit !== 0 ? "bg-gray-400" : "bg-orange-600"
                    }`}
                  >
                    <BsPencilFill />
                  </button>
                  <button
                    disabled={idEdit !== 0}
                    onClick={() => handleDelete(item)}
                    className={`rounded-full flex justify-center text-white items-center w-8 h-8 ${
                      idEdit !== 0 ? "bg-gray-400" : "bg-red-600"
                    }`}
                  >
                    <BsTrash />
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </ul>
    </div>
  );
};

export default NewMaterialPage;
