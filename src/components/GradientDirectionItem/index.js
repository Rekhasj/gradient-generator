import {CustomList, SelectButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionItem, activeDirection, activeDirectionId} = props
  const {displayText, value} = directionItem

  const onClickButton = () => {
    activeDirection(value)
  }

  return (
    <CustomList>
      {activeDirectionId === value ? (
        <SelectButton type="button" onClick={onClickButton}>
          {displayText}
        </SelectButton>
      ) : (
        <SelectButton type="button" active onClick={onClickButton}>
          {displayText}
        </SelectButton>
      )}
    </CustomList>
  )
}

export default GradientDirectionItem
