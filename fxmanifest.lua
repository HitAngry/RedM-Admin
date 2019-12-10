client_script {
  'src/character.js',
  'src/bin/*.js',
  'src/utils.js',
  'src/cmds/*.js',
}

ui_page('src/ui/index.html')

files {
  'src/ui/index.html',
  'src/ui/components/bin/entities.js',
  'src/ui/components/bin/locations.js',
  'src/ui/components/bin/weapons.js',
  'src/ui/components/weapon.js',
  'src/ui/components/teleport.js',
  'src/ui/components/entity.js',
  'src/ui/script.js',
  'src/ui/app.js',
  'src/ui/index.css',
  'src/ui/admin.css',
  'src/ui/assets/images/bgPanel.png',
  'src/ui/assets/images/bgModal.png',
  'src/ui/assets/fonts/western.woff',
}

game 'common' -- this resource only runs on the server, so it can use 'common'
fx_version 'adamant'