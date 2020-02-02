
pipeline {
  agent any
  stages {
    stage('build') {
      environment {
        PORT=12345
        GIT_COMMIT = sh (script: "git log -1 --format=%h", returnStdout: true)
      }
      steps {
        sh "npm install"
	sh "npm run stop"
        sh "npm run start"
      }
    }
  }
}

