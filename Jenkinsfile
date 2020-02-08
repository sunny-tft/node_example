pipeline {
  agent any
  stages {
    stage('build') {
      environment {
        PORT=12345
      }
      steps {
        sh "npm install"
        sh "pm2 save --force"
        sh "pm2 startOrRestart ecosystem.config.yml --env production"
      }
    }
  }
}

