pipeline {
  agent any
  stages {
    stage('build') {
      environment {
        //the following needs to be set to not kill the node process
        JENKINS_NODE_COOKIE='dontkill'
        PASSWORD=credentials("example_password_1")
      }
      steps {
        sh "npm install"
        sh "node_modules/pm2/bin/pm2 startOrRestart ecosystem.config.yml --env production"
      }
    }
  }
}

