pipeline {
  agent any
  tools {nodejs "Node"}
  stages {
    stage('build') {
      environment {
        //the following needs to be set to not kill the node process
        JENKINS_NODE_COOKIE='dontkill'
       
      }
      steps {
        sh "npm install"
        sh "cd /var/www"
        // when chaning any environmental variables ( like edit the ecosystem.config.yml or change some values in the credentials section in jenkins uncomment the next line
        // sh "node_modules/pm2/bin/pm2 kill --name node_example-app"
        sh "node_modules/pm2/bin/pm2 startOrRestart ecosystem.config.yml --env production"
      }
    }
  }
}

