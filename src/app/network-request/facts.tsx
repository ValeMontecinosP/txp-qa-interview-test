'use client';

import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
} from '@mui/material';
import { useState } from 'react';

interface IResponse {
  data: IFact[];
}

interface IFact {
  id: string;
  type: string;
  attributes: {
    body: string;
  };
}

const handleClick = async (): Promise<string | void> => {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 6) + 7 * 1000),
  );

  const response = await fetch('https://dogapi.dog/api/v2/facts');

  if (!response.ok) {
    return;
  }

  const body: IResponse = await response.json();

  if (!body.data.length) {
    return;
  }

  const [{ attributes }] = body.data;

  return attributes.body;
};

export const Facts = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Box>
      <Button
        variant="contained"
        fullWidth
        sx={{ marginBottom: 2 }}
        onClick={async () => {
          setFact('');
          setLoading(true);
          setError(false);

          const fact = await handleClick();

          if (!fact) {
            setError(true);
            return;
          }

          setFact(fact);
          setLoading(false);
        }}
      >
        {loading ? (
          <CircularProgress size="1.5rem" sx={{ color: '#FFFFFF' }} />
        ) : (
          'Get a fact'
        )}
      </Button>
      {fact && (
        <Alert
          severity="info"
          sx={{ width: '100%' }}
          onClose={() => {
            setFact('');
          }}
        >
          <AlertTitle>Did you know?</AlertTitle>
          {fact}
        </Alert>
      )}
      {error && (
        <Alert
          severity="error"
          sx={{ width: '100%' }}
          onClose={() => {
            setError(false);
          }}
        >
          Failed to fetch a fact, please try again
        </Alert>
      )}
    </Box>
  );
};
