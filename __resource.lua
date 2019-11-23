
client_script {
  "src/character.js",
  "src/client.js",
  'src/cmds/admin.js'
}

server_script "src/server.js"

ui_page('src/ui/index.html')

files {
  'src/ui/index.html',
  'src/ui/components/locations.js',
  'src/ui/components/teleport.js',
  'src/ui/script.js',
  'src/ui/app.js',
  'src/ui/index.css',
  'src/ui/admin.css',
  'src/ui/assets/images/bgPanel.png',
  'src/ui/assets/images/bgModal.png',
  'src/ui/assets/fonts/western.woff'
}