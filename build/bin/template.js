const path = require('path');
const templates = path.resolve(process.cwd(), './examples/pages/template');

const chokidar = require('chokidar');
let watcher = chokidar.watch([templates]);

watcher.on('ready', function() {
  watcher
    .on('change', function() {
      console.log("Template file changed, rebuilding...")
      exec('npm run i18n');
    });
});

function exec(cmd) {
  return require('child_process').execSync(cmd).toString().trim();
}
