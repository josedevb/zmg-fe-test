/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from 'react';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  AnimatePresence: ({ children }) => children || <div />,
  motion: {
    div: ({ children, ...rest }) => <div {...rest}>{children}</div>,
    span: ({ children, ...rest }) => <span {...rest}>{children}</span>,
    section: ({ children, ...rest }) => <section {...rest}>{children}</section>,
    input: (props) => <input {...props} />,
    iframe: ({ title, ...props }) => <iframe title={title} {...props} />,
    tr: ({ children, ...rest }) => <tr {...rest}>{children}</tr>
  }
}));

jest.mock('../config/firebase/clientApp.js', () => {
  const fbMock = require('firebase-mock');
  const mockAuth = new fbMock.MockAuthentication();
  const mockDatabase = new fbMock.MockFirebase();
  const mockFirestore = new fbMock.MockFirestore();
  const mockStorage = new fbMock.MockStorage();
  const mockMessaging = new fbMock.MockMessaging();
  const mockSDK = fbMock.MockFirebaseSdk(
    (path) => (path ? mockDatabase.child(path) : mockDatabase),
    () => mockAuth,
    () => mockFirestore,
    () => mockStorage,
    () => mockMessaging
  );
  return mockSDK;
});

jest.mock('../hooks/useTranslation.js', () =>
  jest.fn(() => ({
    t: jest.fn((text) => text),
    activeLocale: 'en'
  }))
);
