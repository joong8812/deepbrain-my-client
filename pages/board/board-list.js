import Head from "next/head";
import tableStyles from "../../components/common/styles/table.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BoardList() {
  const columns = [
    "캠핑(야영)장 명",
    "캠핑(야영)장 구분",
    "주소",
    "글램핑",
    "카라반",
    "화장실",
    "샤워실",
    "개수대",
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/board/list")
      .then((res) => {
        setData(res.data.boards);
      })
      .catch((err) => {});
  }, []);
  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
          <th colSpan={12}>
            <h2>캠핑(야영)장</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {columns.map((column) => (
            <td key={column}>{column}</td>
          ))}
        </tr>
        {data.length == 0 ? (
          <tr>
            <td colSpan={12}>게시글 없음</td>
          </tr>
        ) : (
          data.map((board) => (
            <tr key={board.id}>
              <td>{board.name}</td>
              <td>{board.type}</td>
              <td>{board.address}</td>
              <td>{board.glamping}</td>
              <td>{board.caravan}</td>
              <td>{board.toilet}</td>
              <td>{board.shower}</td>
              <td>{board.wash}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
