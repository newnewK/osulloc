import { useParams } from "react-router-dom";

export default function DetailImg({ item }) {
  let { id } = useParams();
  let findId = item.find((item) => item.id == id);

  return (
    <section>
      <img
        src={`/img/item/detail/${findId.detailImg}`}
        alt={findId.title}
        width="100%"
      />
    </section>
  );
}
