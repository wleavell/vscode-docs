const gulp = require('gulp')
const $ = require('shelljs')

const TOKEN = process.env['token']
if (!TOKEN) {
  $.echo('This script clones vscode-website and requires access token')
  $.exit(1)
}

const URL = `https://${TOKEN}@github.com/microsoft/vscode-website`

gulp.task('clone-repo', done => {
  if (!$.which('git')) {
    $.echo('This command requires git')
    $.exit(1)
    done()
  }

  if (!$.test('-e', '_build')) {
    $.mkdir('_build')
  }
  $.cd('_build')
  if (!$.test('-e', 'vscode-website')) {
    $.exec(`git clone --depth=1 --branch=sync-build ${URL}`)
  }
  $.cd('vscode-website')
  $.env['token'] = TOKEN
  console.log('starting setup')
  $.exec(`scripts\\setup.sh`)
})
