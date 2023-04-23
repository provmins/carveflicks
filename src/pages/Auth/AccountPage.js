import React from 'react';
import { useParams } from 'react-router-dom';
import Account from '../../components/auth/Account';

const AccountPage = () => {
  const { flag } = useParams();
  return <Account flag={flag} />;
};

export default AccountPage;
