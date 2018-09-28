const electron = {
  ipcRenderer: {
    send: jest.fn(),
    on: jest.fn(),
  },
  remote: {
    require: jest.fn().mockReturnValue({
      fs: jest.fn(),
    }),
  },
};
global.require = jest.fn().mockReturnValue(electron);
