;
import { Box } from '@mui/material'
import uniqueId from 'lodash/uniqueId'
import { SelectedTag } from './SelectedTag'
import { type TagSizeType } from '..'
import { Typography } from '../../Typography'
import { Button } from '../../Button/Button'

interface SelectAddMoreProps {
  selected: Array<Record<string, string>>
  buttonAddMore: string
  notItemsText: string
  label: string
  keyTitle: string
  margin?: 'normal' | 'none' | 'dense'
  tagSize?: TagSizeType
  handleShowItems: () => void
}

export const SelectAddMore = ({
  selected,
  buttonAddMore,
  notItemsText,
  label,
  keyTitle,
  margin,
  tagSize,
  handleShowItems,
}: SelectAddMoreProps) => {
  const marginTop = margin === 'normal' ? '16px' : '8px'
  return (
    <Box>ㅊ
      <Typography
        variant="label3"
        fontSize="14px"
        fontWeight="400"
        sx={{
          marginBottom: '10px',
        }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: margin === 'none' ? '' : marginTop,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '80%',
          }}
        >
          {selected.length > 0 ? (
            selected.map((item) => (
              <SelectedTag
                title={item[keyTitle]}
                size={tagSize}
                key={uniqueId(item[keyTitle])}
              />
            ))
          ) : (
            <Typography
              variant="body1"
              fontSize="18px"
              sx={{
                height: 'fit-content',
                paddingTop: '3px',
                width: 'max-content',
              }}
            >
              {notItemsText}
            </Typography>
          )}
        </Box>
        <Box sx={{ height: '40px', width: '20%' }}>
          <Button
            sx={{ width: '100px', float: 'right' }}
            size={tagSize}
            color="secondary"
            onClick={() => {
              handleShowItems()
            }}
          >
            {buttonAddMore}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
