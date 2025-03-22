import { Box, Divider, List, ListItem, Stack, Typography } from '@mui/material';

export interface IKeyValueListItem {
  label: string;
  values: string[];
}

export const KeyValueListItem: React.FC<{
  label: string;
  values: string[];
}> = ({ label, values }) => (
  <ListItem>
    <Stack
      sx={{ width: '100%' }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography sx={{ fontWeight: 'bold' }}>{label}</Typography>
      <Stack direction="column" alignItems="flex-end">
        {...values.map((value) => (
          <Typography key={value} sx={{ fontWeight: 'lighter' }}>
            {value}
          </Typography>
        ))}
      </Stack>
    </Stack>
  </ListItem>
);

export const KeyValueList = ({ items }: { items: IKeyValueListItem[] }) => (
  <List>
    {...items.map((item, index) => (
      <Box key={item.label}>
        <KeyValueListItem {...item} />
        {index < items.length - 1 && <Divider />}
      </Box>
    ))}
  </List>
);
