import React, { useState } from 'react';
import {
  Button,
  Modal,
  Box,
  TextField,
  Typography,
  Chip,
  styled,
} from '@mui/material';
import { createPlaylist } from '@/api/hooks/createPlaylist';

export const AddModal = ({ open, onClose }: { open: any; onClose: any }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    createPlaylist(title, description);
    onClose();
  };
  return (
    <ModalRoot
      open={open}
      onClose={onClose}
      aria-describedby="create-playlist-modal-description"
    >
      <Box className="modal-box">
        <Typography color="white" variant="h6" component="h2">
          새 플레이리스트 만들기
        </Typography>
        <TextFieldRoot
          autoFocus
          margin="dense"
          id="title"
          label="재생목록명"
          type="text"
          fullWidth
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextFieldRoot
          margin="dense"
          id="description"
          label="설명"
          type="text"
          fullWidth
          variant="standard"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Box className="button-box">
          <Button onClick={handleSubmit}>제출</Button>
        </Box>
      </Box>
    </ModalRoot>
  );
};

const ModalRoot = styled(Modal)({
  '.modal-box': {
    backgroundColor: '#161617',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 28,
    p: 4,
    '.button-box': {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '20px',
    },
  },
});

const TextFieldRoot = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
    '& input': {
      color: 'white',
      '&::placeholder': {
        color: 'white',
        opacity: 1,
      },
    },
    '& label': {
      color: 'white',
    },
  },
});
