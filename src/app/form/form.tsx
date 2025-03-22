'use client';

import { KeyValueList } from '@/libs/react/components/list';
import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';

interface IFormValues {
  firstName: string;
  lastName: string;
  emailAddress: string;
  dateOfBirth: string;
  yearsOfExperience: number;
  educationLevel: string;
}

enum EducationLevel {
  HighSchool = 'high-school',
  College = 'college',
  Associate = 'associate-or-trade',
  Bachelors = 'bachelors',
  Masters = 'masters',
  Doctorate = 'doctorate',
}

const EducationLevelDisplay: Record<string, string> = {
  [EducationLevel.HighSchool]: 'High school or equivalent',
  [EducationLevel.College]: 'College',
  [EducationLevel.Associate]: 'Associate or Trade qualification',
  [EducationLevel.Bachelors]: "Bachelor's degree",
  [EducationLevel.Masters]: 'Masters or other post-graduate degree',
  [EducationLevel.Doctorate]: 'Doctorate',
};

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  emailAddress: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email address is required'),
  dateOfBirth: yup.date(),
  yearsOfExperience: yup.number(),
  educationLevel: yup.string(),
});

export const Form: React.FC = () => {
  const [data, setData] = useState<IFormValues | null>(null);
  const now = new Date();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      dateOfBirth: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
        2,
        '0',
      )}-${String(now.getDate()).padStart(2, '0')}`,
      yearsOfExperience: 0,
      educationLevel: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setData(values);
    },
  });

  return data ? (
    <KeyValueList
      items={[
        { label: 'Name', values: [`${data.firstName} ${data.lastName}`] },
        { label: 'Email address', values: [data.emailAddress] },
        { label: 'Date of birth', values: [data.dateOfBirth] },
        ...(isFinite(data.yearsOfExperience)
          ? [
              {
                label: 'Years of experience',
                values: [data.yearsOfExperience.toString()],
              },
            ]
          : []),
        ...(data.educationLevel
          ? [
              {
                label: 'Highest education level',
                values: [EducationLevelDisplay[data.educationLevel]],
              },
            ]
          : []),
      ]}
    />
  ) : (
    <Box>
      <form onSubmit={formik.handleSubmit} noValidate>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 2, md: 12 }}
          display="flex"
        >
          <Grid size={6}>
            <TextField
              id="firstName"
              variant="outlined"
              label="First name"
              required={true}
              sx={{ width: '100%' }}
              {...formik.getFieldProps('firstName')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="lastName"
              variant="outlined"
              label="Last name"
              required={true}
              sx={{ width: '100%' }}
              {...formik.getFieldProps('lastName')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              id="emailAddress"
              variant="outlined"
              label="Email address"
              required={true}
              sx={{ width: '100%' }}
              {...formik.getFieldProps('emailAddress')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.emailAddress &&
                Boolean(formik.errors.emailAddress)
              }
              helperText={
                formik.touched.emailAddress && formik.errors.emailAddress
              }
            />
          </Grid>
          <Grid size={4}>
            <TextField
              id="dateOfBirth"
              variant="outlined"
              label="Date of birth"
              type="date"
              sx={{ width: '100%' }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              {...formik.getFieldProps('dateOfBirth')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid size={4}>
            <TextField
              id="yearsOfExperience"
              variant="outlined"
              label="Years of experience"
              type="number"
              sx={{ width: '100%' }}
              {...formik.getFieldProps('yearsOfExperience')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid size={4}>
            <FormControl fullWidth>
              <InputLabel id="form-education-level-label">
                Highest education level
              </InputLabel>
              <Select
                id="educationLevel"
                label="Highest education level"
                labelId="form-education-level-label"
                sx={{ marginTop: 'auto' }}
                {...formik.getFieldProps('educationLevel')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <MenuItem value="high-school">
                  High school or equivalent
                </MenuItem>
                <MenuItem value="college">College</MenuItem>
                <MenuItem value="associate-or-trade">
                  Associate or Trade qualification
                </MenuItem>
                <MenuItem value="bachelors">Bachelor&apos;s degree</MenuItem>
                <MenuItem value="masters">
                  Masters or other post-graduate degree
                </MenuItem>
                <MenuItem value="doctorate">Doctorate</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={12}>
            <Button variant="contained" sx={{ width: '100%' }} type="submit">
              Submit
            </Button>
          </Grid>
          {formik.submitCount > 0 && (
            <Grid size={12}>
              <Alert severity="error" sx={{ width: '100%' }}>
                Review the highlighted errors and try again
              </Alert>
            </Grid>
          )}
        </Grid>
      </form>
    </Box>
  );
};
