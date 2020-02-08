pipeline {
  agent any
  stages {
    stage('launch pm2') {
      sh "node_modules/pm2/bin/pm2 list"
    }
    stage('build') {
      environment {
        PORT=12345
      }
      steps {
        sh "npm install"
        sh "node_modules/pm2/bin/pm2 save --force"
        sh "sleep 5"
        sh "node_modules/pm2/bin/pm2 set pm2:autodump true"
        sh "sleep 5"
        sh "node_modules/pm2/bin/pm2 startOrRestart ecosystem.config.yml --env production"
      }
    }
  }
}

