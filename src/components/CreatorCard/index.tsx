import { Link } from "react-router-dom";

export type CreatorCardProps = {
  id: number,
  avatar: string,
  name: string,
  headline: string
}

function CreatorCard(props: CreatorCardProps) {
  const { id, avatar, name, headline } = props;
  const detailLink = `/detail/${id}`;
  return (
    <Link className="bg-white rounded-lg border-[1px] p-4 w-[100%] flex" to={detailLink}>
      <div>
        <img src={avatar} alt={name} className="h-[50px] rounded-full" />
      </div>
      <div className="ml-2 text-left">
        <p className="font-bold">{name}</p>
        <p>{headline}</p>
      </div>
    </Link>
  )
}

export default CreatorCard;
