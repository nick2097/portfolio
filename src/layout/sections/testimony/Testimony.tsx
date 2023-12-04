import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './../skills/Skills_Styles'

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id={"testimony"}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"testimony"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>

            </Container>

        </StyledTestimony>
    );
};

const StyledTestimony=styled.section`
  background-color: aqua;
  min-height: 50vh;
  
  ${S.IconWrapper} {
    margin: 40px 0 72px;
  }
  position: relative;
`