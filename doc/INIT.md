## Prerequis

RedM : [Telechargement](https://mega.nz/#!fDxhWY5L!6g8PDxaRKWExx-ImZVG27eYWrxxQJ06vT3uWCJfCQsM)


## Installation

* Decompresser le fichier .zip/.rar.
* Lancer RedM.exe et accepter tous les telechargements.
* Accepter le crash de RedM.exe
* Ouvrir le launcher de Rockstar Game.
* Lancer RedM.exe.

## Installation de ressources

Path
```
/RedM/usermaps/resouces/RDR/
	__resouces.lua
	src/
		client.js
```
File
```lua
-- __resource.lua
client_script "src/client.js"
```

```js
// client.js
RegisterCommand('Ping', (source, args) => {
	console.log('Pong')
})
~~```~~