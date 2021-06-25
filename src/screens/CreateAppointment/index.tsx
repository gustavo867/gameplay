import { useNavigation } from "@react-navigation/core";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CategorySelect from "../../components/CategorySelect";
import Guilds from "../../components/Guilds";
import uuid from "react-native-uuid";
import Header from "../../components/Header";
import KeyboardScroll from "../../components/KeyboardScroll";
import ListHeader from "../../components/ListHeader";
import ModalView from "../../components/ModalView";
import SmallDoubleInput from "../../components/SmallDoubleInput";
import { ServerContext } from "../../context/ServerContext";
import { fontScale } from "../../utils/responsive";
import Button from "../Splash/Button";
import ServerSelect from "./ServerSelect";

import * as S from "./styles";
import { COLLECTION_APPOINTMENTS } from "../../config/database";

interface CreateAppointmentProps {}

function CreateAppointment({}: CreateAppointmentProps) {
  const [dateData, setDateData] = useState({
    firstValue: "",
    secondValue: "",
    hourFirst: "",
    hourSecondary: "",
  });
  const { goBack, addListener, removeListener, dispatch } = useNavigation();
  const [desc, setDesc] = useState("");
  const {
    currentCategory,
    setCurrentCategory,
    modalOpen,
    serverSelected,
    appointments,
    setAppointments,
    setModalOpen,
  } = useContext(ServerContext);

  const handleNewAppointment = useCallback(async () => {
    if (!serverSelected) {
      Alert.alert("Selecione um servidor");

      return;
    }

    if (currentCategory === "") {
      Alert.alert("Selecione uma categoria");

      return;
    }

    if (desc === "") {
      Alert.alert("Insira a descrição");

      return;
    }

    const data = {
      id: uuid.v4().toString(),
      guild: {
        id: serverSelected.id,
        name: serverSelected?.name,
        icon: serverSelected?.icon,
        owner: serverSelected.owner,
      },
      category: currentCategory,
      date: `${dateData.firstValue}/${dateData.secondValue} às ${dateData.hourFirst}:${dateData.hourSecondary}`,
      description: desc,
    };

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, data])
    );

    setAppointments((state) => [...state, data]);
    goBack();
  }, [
    dateData,
    desc,
    currentCategory,
    modalOpen,
    serverSelected,
    appointments,
  ]);

  return (
    <S.Container>
      <Header title="Agendar partida" />
      <KeyboardScroll>
        <S.Space />
        <ListHeader title="Categoria" subTitle="" />
        <S.SmallSpace />
        <CategorySelect
          currentCategory={currentCategory}
          hasCheckBox
          setCategory={(id: string) =>
            setCurrentCategory((state) => (state === id ? "" : id))
          }
        />
        <S.Space
          style={{
            height: fontScale(30),
          }}
        />
        <ServerSelect />
        <S.Space
          style={{
            height: fontScale(30),
          }}
        />
        <S.InputContainer>
          <SmallDoubleInput
            title="Dia e mês"
            diviser="/"
            handleLeftValue={(text) =>
              setDateData((state) => ({ ...state, firstValue: text }))
            }
            handleRightValue={(text) =>
              setDateData((state) => ({ ...state, secondValue: text }))
            }
            leftValue={dateData.firstValue}
            rightValue={dateData.secondValue}
          />
          <SmallDoubleInput
            title="Horário"
            diviser=":"
            handleLeftValue={(text) =>
              setDateData((state) => ({ ...state, hourFirst: text }))
            }
            handleRightValue={(text) =>
              setDateData((state) => ({ ...state, hourSecondary: text }))
            }
            leftValue={dateData.hourFirst}
            rightValue={dateData.hourSecondary}
          />
        </S.InputContainer>
        <S.Space />
        <ListHeader title="Descrição" subTitle="Max 100 caracteres" />
        <S.SmallSpace />
        <S.TextArea
          multiline
          maxLength={100}
          value={desc}
          onChangeText={(text) => setDesc(text)}
        />
        <Button
          onPress={() => handleNewAppointment()}
          text="Agendar"
          haveIcon={false}
        />
      </KeyboardScroll>
      <ModalView visible={modalOpen}>
        <Guilds />
      </ModalView>
    </S.Container>
  );
}

export default CreateAppointment;
