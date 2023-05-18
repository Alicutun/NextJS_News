import { Stack, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';

export const SearchInput: React.FC<{ onSearch: () => void }> = ({ onSearch }) => {
  const router = useRouter();

  const [searchArticle, setSearchArticle] = useState<any>();

  const handleSearch = () => {
    router.push(`/${router.query.locale}/search?text=${searchArticle}`);
    onSearch();
  };

  // press enter search
  const handleSearchEnter = async (event: any) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Stack direction="row" width="100%" justifyContent={'center'}>
      <TextField
        autoFocus
        sx={{
          height: '56px',
          width: '50%',
          '& > div': {
            borderRadius: '0',
          },
        }}
        onKeyUp={(e) => handleSearchEnter(e)}
        onChange={(e) => setSearchArticle(e.target.value)}
      />
      <Button
        disabled={!searchArticle ? true : false}
        sx={{
          width: '55px',
          height: '56px',
          background: '#444',
          cursor: 'pointer',
          borderRadius: '0px !important ',
          '&:hover': {
            backgroundColor: '#444 !important',
          },
        }}
        onClick={handleSearch}
      >
        <SearchIcon sx={{ color: 'white' }} />
      </Button>
    </Stack>
  );
};
