import { PageTitleAndNavigation } from '@/libs/react/components/title';
import { BaseBreadcrumb } from '@/libs/react/router/breadcrumbs';
import { KeyboardArrowRight } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';
import Link from 'next/link';
import { TableData } from './data';

export default function TablePage() {
  return (
    <Box>
      <PageTitleAndNavigation
        pageTitle="Table"
        breadcrumbs={[BaseBreadcrumb]}
      />
      <TableContainer component={Paper}>
        <Table sx={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Job title</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TableData.map(({ id, firstName, lastName, company, jobTitle }) => (
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{`${firstName} ${lastName}`}</TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{jobTitle}</TableCell>
                <TableCell align="center">
                  <Link href={`/table/${id}`}>
                    <Tooltip title="View details">
                      <IconButton>
                        <KeyboardArrowRight />
                      </IconButton>
                    </Tooltip>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
