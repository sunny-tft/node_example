pipeline {
  agent any
  stages {
    stage('build') {
      environment {
        PORT=12345
      }
      steps {
        sh "npm install"
        sh "node_modules/pm2/bin/pm2 save --force"
        sh "node_modules/pm2/bin/pm2 startOrRestart ecosystem.config.yml --env production"
      }
    }
  }
}

