import { KeyValueList } from '@/libs/react/components/list';
import { PageTitleAndNavigation } from '@/libs/react/components/title';
import { BaseBreadcrumb } from '@/libs/react/router/breadcrumbs';
import { Alert, Box } from '@mui/material';
import { TableData } from '../data';

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = TableData.find((item) => item.id === id);

  const fullName = data ? `${data.firstName} ${data.lastName}` : 'Not found';

  return (
    <Box>
      <PageTitleAndNavigation
        pageTitle={fullName}
        breadcrumbs={[BaseBreadcrumb, { title: 'Table', path: '/table' }]}
      />

      {data ? (
        <KeyValueList
          items={[
            {
              label: 'Name',
              values: [`${data.firstName} ${data.lastName}`],
            },
            {
              label: 'Email address',
              values: [data.email],
            },
            {
              label: 'Country / timezone',
              values: [`${data.country} (${data.timezone})`],
            },
            {
              label: 'Currency',
              values: [data.currency],
            },
            {
              label: 'Job title',
              values: [data.jobTitle],
            },
            {
              label: 'Company',
              values: [data.company],
            },
            {
              label: 'Skills',
              values: data.skills,
            },
          ]}
        />
      ) : (
        <Alert severity="error" sx={{ width: '100%' }}>
          Data not found
        </Alert>
      )}
    </Box>
  );
}
