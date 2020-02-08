pipeline {
  agent any
  stages {
    stage('build') {
      environment {
          BUILD_ID="dontKillMe"
      }
      steps {
        sh "npm install"
        sh "node_modules/pm2/bin/pm2 startOrRestart ecosystem.config.yml --env production"
      }
    }
  }
}

