import { PageTitleAndNavigation } from '@/libs/react/components/title';
import { BaseBreadcrumb } from '@/libs/react/router/breadcrumbs';
import { Box } from '@mui/material';
import { Form } from './form';

export default function FormPage() {
  return (
    <Box>
      <PageTitleAndNavigation pageTitle="Form" breadcrumbs={[BaseBreadcrumb]} />
      <Form />
    </Box>
  );
}
