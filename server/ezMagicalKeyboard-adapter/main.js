class ezMagicalKeyboard {
  constructor(server) {
    this.server = server;
    this.allCommands = ['KEY']; // prettier-ignore
  }

  integrate() {
    this.server.registerClientTypes({ MKB: 'ezMagicalKeyboard client' });
    this.server.registerDebugCommand([ // prettier-ignore
      'KEY a', 'KEY 1' // prettier-ignore
    ]); // prettier-ignore
  }

  stripe() {
  }
}

export default ezMagicalKeyboard;
