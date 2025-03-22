import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import React from 'react';
import { ApplicationName } from '../router/breadcrumbs';

export interface Breadcrumb {
  title: string;
  path?: string;
}

const BreadcrumbLink: React.FC<Breadcrumb> = ({ title, path }) => (
  <Link
    underline="hover"
    color="inherit
  "
    href={path}
  >
    {title}
  </Link>
);

export const PageTitleAndNavigation = ({
  pageTitle = ApplicationName,
  breadcrumbs = [],
}: Partial<{
  pageTitle: string;
  breadcrumbs: Breadcrumb[];
}> = {}) => (
  <>
    {!!breadcrumbs.length && (
      <Breadcrumbs>
        {...breadcrumbs.map(({ title, path }) => (
          <BreadcrumbLink key={title} title={title} path={path} />
        ))}
        <Typography sx={{ color: 'text.primary' }}>{pageTitle}</Typography>
      </Breadcrumbs>
    )}
    <Typography variant="h4" sx={{ color: 'text.primary' }} marginBottom={2}>
      {pageTitle}
    </Typography>
  </>
);
