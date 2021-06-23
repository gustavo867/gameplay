import React, { useState } from "react";
import { FlatList } from "react-native";
import AppointmentCard from "../../components/AppointmentCard";
import ListDivider from "../../components/AppointmentCard/ListDivider";
import CategorySelect from "../../components/CategorySelect";
import ListHeader from "../../components/ListHeader";
import Wrapper from "../../components/Wrapper";
import { appointments } from "../../utils/appointments";
import { fontScale } from "../../utils/responsive";
import Header from "./Header";

import * as S from "./styles";

function Home() {
  const [currentCategory, setCurrentCategory] = useState("");

  const handleCategory = (categoryId: string) => {
    setCurrentCategory((state) => (state === categoryId ? "" : categoryId));
  };

  return (
    <Wrapper>
      <Header />
      <CategorySelect
        currentCategory={currentCategory}
        setCategory={handleCategory}
      />
      <S.Content>
        <ListHeader title="Partidas agendadas" subTitle="Total 6" />
        <FlatList
          data={appointments.filter(
            (item) =>
              currentCategory === "" || item.category === currentCategory
          )}
          keyExtractor={(item) => item.id}
          style={{
            marginTop: fontScale(20),
          }}
          contentContainerStyle={{
            paddingBottom: fontScale(20),
          }}
          renderItem={({ item, index }) => (
            <>
              <AppointmentCard {...item} />
              <ListDivider />
            </>
          )}
          showsVerticalScrollIndicator={false}
          // ItemSeparatorComponent={() => <ListDivider />}
        />
      </S.Content>
    </Wrapper>
  );
}

export default Home;
