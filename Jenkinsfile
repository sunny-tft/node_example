pipeline {
  agent any
  stages {
    stage('build') {
      environment {
        JENKINS_NODE_COOKIE='dontkill'
        PASSWORD="readfromjenkinsfile"
      }
      steps {
        sh "npm install"
        sh "node_modules/pm2/bin/pm2 startOrRestart ecosystem.config.yml --env production"
      }
    }
  }
}

