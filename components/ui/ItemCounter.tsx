import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import { FunctionComponent } from 'react'
interface Props {
  item?: number
}

export const ItemCounter: FunctionComponent<Props> = () => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: 'center' }}>1</Typography>
      <IconButton>
        <AddCircleOutline />
      </IconButton>
    </Box>
  )
}
