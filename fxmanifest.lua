client_script {
  'src/bin/*.js',
  'src/cmds/*.js',
  'src/interfaceClientManager.js',
}

ui_page('src/ui/index.html')

files {
  'src/ui/index.html',
  'src/ui/components/bin/*.js',
  'src/ui/components/*.js',
  'src/ui/interfaceWebViewManager.js',
  'src/ui/app.js',
  'src/ui/index.css',
  'src/ui/admin.css',
  'src/ui/assets/images/bgPanel.png',
  'src/ui/assets/images/bgModal.png',
  'src/ui/assets/fonts/western.woff',
}

game 'common' -- this resource only runs on the server, so it can use 'common'
fx_version 'adamant'