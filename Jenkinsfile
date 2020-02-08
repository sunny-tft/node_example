pipeline {
  agent any
  stages {
    stage('build') {
      environment {
        PORT=12345
        NODE_ENV="staging"
      }
      steps {
        sh "npm install"
        sh "npm run startOrRestart"
      }
    }
  }
}

