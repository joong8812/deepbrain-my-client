import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { campsiteActions } from "../../redux/reducers/campsiteReducer.ts";
import tableStyles from "../../components/common/styles/table.module.css";

export async function getServerSideProps({ params }) {
  const id = params.id
  const res = await fetch(`http://localhost:5000/campsites/${id}`)
  const data = await res.json()

  return {
    props: {
      data,
      id
    },
  };
}

const updateCampsite = ({data,id}) => {
  const [campsite, setCampsite] = useState({
    id: id,
    name: data.name,
    type: data.type,
    address: data.address,
    glamping: data.glamping,
    caravan: data.caravan,
    toilet: data.toilet,
    shower: data.shower,
    wash: data.wash,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCampsite({ ...campsite, [name]: value });
  };

  const updateCampsiteHandler = (e) => {
    e.preventDefault();
    dispatch(campsiteActions.updateRequest(campsite));
    setCampsite({
      id: "",
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
  
  const deleteCampsiteHandler = (e) => {
    dispatch(campsiteActions.deleteRequest(campsite));
  }

  return (
    <form onSubmit={updateCampsiteHandler}>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th colSpan={2}>
              <h1>캠핑장 수정 & 삭제</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>이름</b>
            </td>
            <td>
              <input type="text" name="name" value={campsite.name} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <b>유형</b>
            </td>
            <td>
              <input type="text" name="type" value={campsite.type} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td htmlFor="">
              <b>주소</b>
            </td>
            <td>
              <input type="text" name="address" value={campsite.address} onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <td htmlFor="">
              <b>글램핑(개수)</b>
            </td>
            <td>
              <input type="text" name="glamping" value={campsite.glamping} onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <td>
              <b>카라반(개수)</b>
            </td>
            <td>
              <input type="text" name="caravan" value={campsite.caravan} onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <td>
              <b>화장실</b>
            </td>
            <td>
              <input type="text" name="toilet" value={campsite.toilet} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <b>샤워실</b>
            </td>
            <td>
              <input type="text" name="shower" value={campsite.shower} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <b>식수대</b>
            </td>
            <td>
              <input type="text" name="wash" value={campsite.wash} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit" style={{marginRight:1+'rem'}}>수정</button>
              <button type="button" onClick={deleteCampsiteHandler}>삭제</button>
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default updateCampsite;
