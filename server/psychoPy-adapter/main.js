class ezMagicalKeyboard {
  constructor(server) {
    this.server = server;
    this.allCommands = []; // prettier-ignore
  }

  integrate() {
    this.server.registerClientTypes({ PPY: 'psychoPy client' });
    this.server.registerDebugCommand([ // prettier-ignore
      'SETVAR testString Hello!', 'ENDLOOP testLoop', 'ENDROUTINE' // prettier-ignore
    ]); // prettier-ignore
  }

  stripe() {
  }
}

export default ezMagicalKeyboard;
