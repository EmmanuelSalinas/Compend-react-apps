import { useState } from "react";

type Props = {
  userName: string;
  name: string;
  initialIsFollowing: boolean;
  imageProfile: string;
  formatUserName: (userName: string) => string;
};

const Socialnetwork_follow_card = (props: Props) => {
  const { formatUserName, userName, name, imageProfile, initialIsFollowing } =
    props;
  const [isFollowing, setIsForllowing] = useState(initialIsFollowing);
  const textButton: string = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClass: string = isFollowing ? "isFollowing" : "";

  const handleClick = () => {
    setIsForllowing(!isFollowing);
  };
  return (
    <article className="follow-card">
      <header className="follow-card__header">
        <img
          className="follow-card__avatar"
          src={imageProfile}
          alt="avatar user"
        />
        <div className="follow-card__info">
          <strong>{name}</strong>
          <span>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button
          className={`follow-card__button ${buttonClass}`}
          onClick={handleClick}
        >
          {textButton}
        </button>
      </aside>
    </article>
  );
};

export default Socialnetwork_follow_card;
