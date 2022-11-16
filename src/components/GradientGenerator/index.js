import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  Heading,
  CustomHeading,
  GenerateGradient,
  CustomButton,
  CustomInput,
  ColorCard,
  UnorderedList,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstColor: ' #8ae323',
    secondColor: '#014f7b',
    firstColorInput: ' #8ae323',
    secondColorInput: '#014f7b',
    activeDirectionId: 'top',
    direction: 'top',
  }

  generateGradient = () => {
    const {secondColorInput, firstColorInput, activeDirectionId} = this.state

    this.setState({
      firstColor: firstColorInput,
      secondColor: secondColorInput,
      direction: activeDirectionId,
    })
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  activeDirection = value => {
    this.setState({activeDirectionId: value})
  }

  render() {
    const {
      firstColor,
      firstColorInput,
      secondColorInput,
      secondColor,
      activeDirectionId,
      direction,
    } = this.state
    return (
      <>
        <MainContainer
          data-testid="gradientGenerator"
          firstColor={firstColor}
          secondColor={secondColor}
          direction={direction}
        >
          <Heading>Generate a CSS Color Gradient</Heading>
          <CustomHeading>Choose Direction</CustomHeading>
          <UnorderedList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionItem={eachDirection}
                activeDirection={this.activeDirection}
                activeDirectionId={activeDirectionId}
              />
            ))}
          </UnorderedList>

          <CustomHeading>Pick the Colors</CustomHeading>
          <GenerateGradient>
            <ColorCard>
              <CustomHeading htmlFor="firstColor">
                {firstColorInput}
              </CustomHeading>
              <CustomInput
                type="color"
                value={firstColorInput}
                id="firstColor"
                onChange={this.onChangeFirstColor}
              />
            </ColorCard>

            <ColorCard>
              <CustomHeading htmlFor="secondColor">
                {secondColorInput}
              </CustomHeading>
              <CustomInput
                type="color"
                value={secondColorInput}
                id="secondColor"
                onChange={this.onChangeSecondColor}
              />
            </ColorCard>
          </GenerateGradient>
          <CustomButton type="button" onClick={this.generateGradient}>
            Generate
          </CustomButton>
        </MainContainer>
      </>
    )
  }
}

export default GradientGenerator
