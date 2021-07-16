### Notes

**npm** : global command, comes with node
**npm --version** : tells you which version you have installed

**local dependency** : used only in a particular project
**npm i <packageName>**
**npm i <packageName> -D** OR **--save-dev** : save the package in package.json as a devDependency; for packages not needed in production

**global dependency** : can be used in any project, globally installed on machine
**npm install -g <packageName>**
**sudo install -g <packageName>** _(mac)_

**package.json** : manifest file (stores important info about project/package)
**Manual setup**: (create package.json in root), create properties, etc
**npm init** (step by step, press enter to skip)
**npm init -y** (everything set to default)
