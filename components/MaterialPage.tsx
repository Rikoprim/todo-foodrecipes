import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import {
  setName,
  addMaterial,
  editMaterial,
  setUnit,
  deleteMaterial,
} from "@/store/material";
import { addReceipt } from "@/store/receipt";

const MaterialPage = () => {
  const { material, name, unit, isInput, editId } = useSelector(
    (state: RootState) => state.appMaterial
  );
  const { units } = useSelector((state: RootState) => state.appUnit);
  const dispatch = useDispatch();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const handleChangeSelect = (e: any) => {
    dispatch(setUnit(e.target.value));
  };

  const handleEnterKeyPressed = () => {
    if (name !== "") {
      dispatch(addMaterial());
    }
  };

  const handleEnterKeyEdit = () => {
    dispatch(editMaterial());
  };

  const handleAppendMaterial = (item: IFood.IMaterial) => {
    dispatch(addReceipt(item));
    dispatch(deleteMaterial(item.id));
  };

  return (
    <>
      <ul className="list-none">
        {material.length === 0 ? (
          <div>
            <i>Tidak ada data bahan</i>
          </div>
        ) : (
          material.map((item: IFood.IMaterial) => (
            <div key={item.id} onClick={() => handleAppendMaterial(item)}>
              {editId === item.id ? (
                <div className="flex items-center gap-2">
                  <input
                    className="border py-2 px-3 text-grey-800"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChangeInput}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleEnterKeyEdit();
                      }
                    }}
                  />
                </div>
              ) : (
                <li className="my-4 cursor-pointer">
                  {item.name} | {item.unit}
                </li>
              )}
            </div>
          ))
        )}
      </ul>
      {isInput && (
        <div className="flex items-center gap-2">
          <select
            id="unit"
            className="border py-2 px-3 text-grey-800"
            value={unit}
            onChange={handleChangeSelect}
          >
            <option value="">Pilih Satuan</option>
            {units.map((unit) => (
              <option key={unit.id} value={unit.name}>
                {unit.name}
              </option>
            ))}
          </select>
          <input
            className="border py-2 px-3 text-grey-800"
            type="text"
            name="name"
            placeholder="Masukkan Nama Bahan"
            value={name}
            onChange={handleChangeInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEnterKeyPressed();
              }
            }}
            id="name"
          />
        </div>
      )}
    </>
  );
};

export default MaterialPage;
