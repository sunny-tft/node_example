pipeline {
  agent any
  stages {
    stage('build') {
      environment {
        PORT=12345
      }
      steps {
        sh "npm install"
        sh "npm run startOrRestartStaging"
      }
    }
  }
}

