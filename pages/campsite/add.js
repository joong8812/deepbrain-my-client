import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { campsiteActions } from "../../redux/reducers/campsiteReducer.ts";
import tableStyles from "../../components/common/styles/table.module.css";

const AddCampsite = () => {
  const [campsite, setCampsite] = useState({
    name: "",
    type: "",
    address: "",
    glamping: "",
    caravan: "",
    toilet: "",
    shower: "",
    wash: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCampsite({ ...campsite, [name]: value });
  };

  const addCampsiteHandler = (e) => {
    e.preventDefault();
    dispatch(campsiteActions.addRequest(campsite))
    setCampsite({
      name: "",
      type: "",
      address: "",
      glamping: "",
      caravan: "",
      toilet: "",
      shower: "",
      wash: "",
    });
  };
  return (
    <form onSubmit={addCampsiteHandler}>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th colSpan={2}>
              <h1>캠핑장 등록</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>이름</b>
            </td>
            <td>
              <input type="text" name="name" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <b>유형</b>
            </td>
            <td>
              <input type="text" name="type" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td htmlFor="">
              <b>주소</b>
            </td>
            <td>
              <input type="text" name="address" onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <td htmlFor="">
              <b>글램핑(개수)</b>
            </td>
            <td>
              <input type="text" name="glamping" onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <td>
              <b>카라반(개수)</b>
            </td>
            <td>
              <input type="text" name="caravan" onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <td>
              <b>화장실</b>
            </td>
            <td>
              <input type="text" name="toilet" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <b>샤워실</b>
            </td>
            <td>
              <input type="text" name="shower" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <b>식수대</b>
            </td>
            <td>
              <input type="text" name="wash" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit">등록</button>
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default AddCampsite;
