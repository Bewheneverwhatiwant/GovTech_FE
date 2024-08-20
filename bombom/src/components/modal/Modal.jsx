import React from "react";
import styled from "styled-components";
import { CloseIcon } from "../icons/wantbolbom";
import CustomButtonSubmit from "../container/CustomButtonSubmit";

const Modal = ({ show, onClose, cardData }) => {
  if (!show) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{cardData.title}</ModalTitle>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          <p>
            <BText fontSize="16px">위치:</BText> {cardData.location}
          </p>
          <p>
            <BText fontSize="16px">횟수:</BText> {cardData.frequency || "N/A"}
          </p>
          <p>
            <BText fontSize="16px">시급:</BText> {cardData.hourlyRate}
          </p>
          <CareInformationDiv>
            <p>
              <BText fontSize="18px">돌봄자 정보</BText>
            </p>
            <p>
              <BText fontSize="16px">나이:</BText> {cardData.location}
            </p>
            <p>
              <BText fontSize="16px">특징:</BText> {cardData.frequency || "N/A"}
            </p>
            <p>
              <BText fontSize="16px">병력:</BText> {cardData.hourlyRate}
            </p>
            <p>
              <BText fontSize="16px">기타:</BText> {cardData.hourlyRate}
            </p>
          </CareInformationDiv>
        </ModalContent>
        <CustomButtonSubmit>채팅방 생성하기</CustomButtonSubmit>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 35px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: light;
`;

const ModalContent = styled.div`
  margin-bottom: 2rem;
  p {
    margin: 0.5rem 0;
  }
`;

const BText = styled.span`
  font-weight: bold;
  font-size: ${(props) => props.fontSize || "18px"};
`;

const CareInformationDiv = styled.div`
  background-color: #eae4d4;
  padding: 10px 20px 10px 20px;
  border-radius: 20px;
`;
