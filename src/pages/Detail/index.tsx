import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CreatorType, fetchDetail } from "../../api";

function Detail() {
  const [detail, setDetail] = useState<CreatorType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const result = fetchDetail(Number(id));
    setDetail(result);
  }, [setDetail, id]);

  return (
    detail ? (
      <div className="bg-white rounded-lg border-[1px] p-4 w-[100%] flex">
        <div className="w-[50px] flex-shrink-0">
          <img src={detail.avatar} alt={detail.name} className="h-[50px] rounded-full" />
        </div>
        <div className="ml-2 text-left">
          <p className="font-bold">{detail.name}</p>
          <p>{detail.headline}</p>
          <p className="mt-4">{detail.content}</p>
        </div>
      </div>
    ) : (
      <div>Error loading the details</div>
    )
  )
}

export default Detail;
