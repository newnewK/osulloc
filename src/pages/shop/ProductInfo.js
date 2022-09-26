import { useParams } from "react-router-dom";

export default function ProductInfo({ item }) {
  let { id } = useParams();
  let findId = item.find((item) => item.id == id);
  return (
    <section className="product-info-wrap">
      <div className="product-info-top">
        <h3>상품의 자세한 사항을 확인해보세요.</h3>
        <p>
          상품에 대한 디테일한 사항을 하단에서 확인해보세요.
          <br />
          상품정보제공 고시부터 상품청약 조회안내까지 모든 사항을 확인하실 수
          있습니다.
        </p>
      </div>
      <div className="product-info">
        <table>
          <caption>상품정보제공고시</caption>
          <tbody>
            <tr>
              <th>식품명</th>
              <td>{findId.fullTit}</td>
            </tr>
            <tr>
              <th>식품의 유형</th>
              <td>{findId.type}</td>
            </tr>
            <tr>
              <th>제조원</th>
              <td>㈜아모레퍼시픽</td>
            </tr>
            <tr>
              <th>제조원 사업장 소재지</th>
              <td>충북 진천군 광혜원산단길 100</td>
            </tr>
            <tr>
              <th>유통전문판매원</th>
              <td>㈜오설록</td>
            </tr>
            <tr>
              <th>유통전문판매원 사업장 소재지</th>
              <td>서울시 용산구 한강대로 100 (한강로2가)</td>
            </tr>
            <tr>
              <th>수입원</th>
              <td>해당사항없음</td>
            </tr>
            <tr>
              <th>수입원 사업장 소재지</th>
              <td>해당사항없음</td>
            </tr>
            <tr>
              <th>제조연월일, 유통기한 또는 품질유지기한</th>
              <td>
                입고일별 제조일과 유통기한이 모두 상이하므로, 해당 정보에 대한
                문의는 고객센터(080-805-5555)로 연락주시면 상담원이
                확인해드리겠습니다. / 상품상세정보 참조 ※ 제조일로부터
                1년6개월/주문일로부터 유통기한 50%이상 남은 제품을 보내드립니다.
                (상품 하면 기재일 참조)
              </td>
            </tr>
            <tr>
              <th>포장단위별 내용물의 용량(중량), 수량</th>
              <td>{findId.qty}</td>
            </tr>
            <tr>
              <th>원재료명 및 함량</th>
              <td>{findId.content}</td>
            </tr>
            <tr>
              <th>여과지 포장재질</th>
              <td>{findId.outPack}</td>
            </tr>
            <tr>
              <th>내포장재질</th>
              <td>{findId.inPack}</td>
            </tr>
            <tr>
              <th>유전자변형식품에 해당하는 경우의 표시</th>
              <td>해당사항없음</td>
            </tr>
            <tr>
              <th>보관시 주의사항</th>
              <td>
                고온 다습한 곳을 피하고 개봉한 차는 밀봉하여 건냉한 곳에
                보관하십시오.
              </td>
            </tr>
            <tr>
              <th>소비자안전을 위한 주의사항</th>
              <td>
                본 상품은 우유, 대두, 밀을 사용한 상품과 같은 제조시설에서
                제조하고 있습니다.
              </td>
            </tr>
            <tr>
              <th>수입신고 문구</th>
              <td>해당사항없음</td>
            </tr>
            <tr>
              <th>교환 문의처</th>
              <td>구입처 및 고객상담실</td>
            </tr>
            <tr>
              <th>소비자상담 관련 전화번호</th>
              <td>080-805-5555(수신자 요금부담)</td>
            </tr>
            <tr>
              <th>기타</th>
              <td>
                • 본 상품에 이상이 있을 경우, 공정거래위원회 고시에 의거 보상해
                드립니다.
                <br />• 부정, 불량식품 신고는 국번없이 1399
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
