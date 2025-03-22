import { PageTitleAndNavigation } from '@/libs/react/components/title';
import { EditNote, SyncAlt, TableView } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <PageTitleAndNavigation />
      <Stack>
        <Typography>
          Mock application components for use as a test automation playground
        </Typography>
        <List>
          <Link href="/form">
            <ListItem>
              <ListItemIcon>
                <EditNote fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Form"
                secondary="Simple form with a variety of input types and basic validation"
              />
            </ListItem>
          </Link>

          <Link href="/table">
            <ListItem>
              <ListItemIcon>
                <TableView fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Table"
                secondary="A fixed data set, displayed in table format, with more detail shown in a separate page for each entity"
              />
            </ListItem>
          </Link>
          <Link href="/network-request">
            <ListItem>
              <ListItemIcon>
                <SyncAlt fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Network request"
                secondary="Provides the ability to retrieve a random fact on request from an external source"
              />
            </ListItem>
          </Link>
        </List>
      </Stack>
    </>
  );
}
