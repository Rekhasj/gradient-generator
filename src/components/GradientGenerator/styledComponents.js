import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.secondColor},
    ${props => props.firstColor}
  );
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
`

export const CustomHeading = styled.p`
  color: #ffffff;
`

export const GenerateGradient = styled.div`
  display: flex;
`

export const ColorCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
export const CustomButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 10px;
`

export const CustomInput = styled.input`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 80px;
  height: 40px;
`
export const UnorderedList = styled.ul`
  display: flex;
  padding-left: 10px;
  list-style-type: none;
`
