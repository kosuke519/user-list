import styled from "styled-components";
// import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../Atom/Button/SecondaryButton";
import { SearchInput } from "../Molecules/SearchInput";
import { UserCard } from "../Organism/user/UserCard";
import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../providers/store/UserState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `aaa${val}`,
    image: "https://source.unsplash.com//gKXKBY-C-Dk",
    email: "1231jp",
    phone: "32132131321",
    company: {
      name: "株式会社"
    },
    website: "4213213123"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <Scontainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
