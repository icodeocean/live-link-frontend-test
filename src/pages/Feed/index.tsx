import { useState, useEffect } from "react";
import { CreatorType, fetchCreators } from "../../api";
import CreatorCard from "../../components/CreatorCard";

function Feed() {
  const [creatorData, setCreatorData] = useState<CreatorType[]>([]);

  useEffect(() => {
    const result = fetchCreators();
    setCreatorData(result);
  }, [setCreatorData]);

  return (
    <div>
      {
        creatorData.map(creator => <div className="my-4">
          <CreatorCard
            id={creator.id}
            avatar={creator.avatar}
            name={creator.name}
            headline={creator.headline} />
        </div>)
      }
    </div>
  )
}

export default Feed;
