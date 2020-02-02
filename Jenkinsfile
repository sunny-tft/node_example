
pipeline {
  agent any
  stages {
    stage('build') {
      environment {
        GIT_COMMIT = sh (script: "git log -1 --format=%h", returnStdout: true)
      }
      steps {
        sh "npm install"
        sh "npm run start"
      }
    }
  }
}

