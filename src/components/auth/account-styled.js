import styled from 'styled-components';

export const AccountContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > img {
    width: 300px;
    margin-bottom: 32px;
  }
`;

export const AccountForm = styled.form`
  width: calc(100% - 2rem);
  min-height: 100%;
  padding: 32px;
  margin: 0 20px;
  color: #111;
  background-color: #fff;
  border: 2px solid #ebcf71;
  border-radius: 2px;
  box-sizing: border-box;

  p {
    margin-bottom: 32px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 15px;
    margin-top: 32px;
    color: #333;
    font-size: 16px;
    font-weight: 800;
    background-color: #ebcf71;
    border-radius: 3px;
  }
`;

export const AccountInputBox = styled.div`
  font-size: 14px;
  border-bottom: 1px solid #eee;
  margin-top: 24px;
  margin-bottom: 8px;
  label {
    display: block;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 10px 0;
  }
`;

export const AccountMessage = styled.p`
  color: #f16361;
  font-size: 12px;
`;
