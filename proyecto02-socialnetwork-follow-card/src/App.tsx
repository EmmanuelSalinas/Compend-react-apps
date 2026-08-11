import Socialnetwork_follow_card from "./Socialnetwork_follow_card";
type Props = {};

type User = {
  id: number;
  userName: string;
  name: string;
  initialIsFollowing: boolean;
  imageProfile: string;
};

function App({}: Props) {
  const user: User[] = [
    {
      id: 1,
      userName: "manemanito",
      name: "Emmanuel Salinas Celestino",
      initialIsFollowing: false,
      imageProfile:
        "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    },
    {
      id: 2,
      userName: "chanchitoFeliz",
      name: "Aurelio Murillo Tejeda",
      initialIsFollowing: false,
      imageProfile:
        "https://c8.alamy.com/comp/3A3NPJ3/the-brazilian-business-professional-is-smiling-while-talking-on-the-phone-exhibiting-a-persona-of-accessibility-and-friendliness-in-a-corporate-environment-close-up-portrait-3A3NPJ3.jpg",
    },
    {
      id: 3,
      userName: "AnneHath",
      name: "Anne Hathaway",
      initialIsFollowing: true,
      imageProfile:
        "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const formatUserName = (userName: string) => `@${userName}`;
  return (
    <>
      <div className="app">
        {user.map((itemUser: User) => (
          <Socialnetwork_follow_card
            key={itemUser.id}
            formatUserName={formatUserName}
            {...itemUser}
          />
        ))}
        {/* <Socialnetwork_follow_card
          formatUserName={formatUserName}
          {...user[0]}
        />
        <Socialnetwork_follow_card
          formatUserName={formatUserName}
          {...user[1]}
        />
        <Socialnetwork_follow_card
          formatUserName={formatUserName}
          {...user[2]}
        /> */}
      </div>
    </>
  );
}

export default App;
