(function() {
    const {ipcRenderer} = require('electron')

    ipcRenderer.on('asynchronous-reply', (event, arg) => {
          console.log(arg) // 'suspend' が表示される
        })
})();
