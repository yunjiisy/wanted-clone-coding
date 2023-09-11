import React from 'react'
import { useModal } from './modal-context-ex'
import BasicModal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function Modal() {
  const [open, setOpen] = React.useState(true)
  const { modalInfo, dispatch } = useModal()

  const handleClose = () => {
    setOpen(false)
  }
  const handleConfirm = () => {
    console.log('모달 정보!')
    console.log(modalInfo)

    dispatch({ type: 'Invisible' })
  }

  const handleCancel = () => {
    dispatch({ type: 'Invisible' })
  }

  if (!modalInfo.isVisible) {
    return null
  }

  if (modalInfo.isVisible) {
    return (
      <div>
        <BasicModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalInfo.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {modalInfo.content}
            </Typography>
            <div>
              {modalInfo.useConfirm && (
                <button onClick={handleConfirm}>확인</button>
              )}
              {modalInfo.useCancel && (
                <button onClick={handleCancel}>취소</button>
              )}
            </div>
          </Box>
        </BasicModal>
      </div>
    )
  }
}
