const electron = {
  ipcRenderer: jest.fn(),
  remote: {
    require: jest.fn().mockReturnValue({
      fs: jest.fn(),
    }),
  },
};
global.require = jest.fn().mockReturnValue(electron);
